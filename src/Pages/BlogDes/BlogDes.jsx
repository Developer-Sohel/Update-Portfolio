import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import 'animate.css';

const BlogDes = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const blogRef = useRef(null);
    const observerRef = useRef(null); // Keep a reference to the observer

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const response = await fetch('/blog.json');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();

                const selectedBlog = data.find((blog) => blog.id === parseInt(id));
                if (!selectedBlog) {
                    throw new Error(`Blog with id ${id} not found`);
                }

                setBlog(selectedBlog);
            } catch (err) {
                setError(err);
                console.error("Error fetching blog:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchBlog();
    }, [id]);

    useEffect(() => {
        if (blogRef.current) {
            // Create a new observer only if one doesn't already exist
            if (!observerRef.current) {
                observerRef.current = new IntersectionObserver(
                    ([entry]) => {
                        if (entry.isIntersecting) {
                            blogRef.current.classList.add('animate__animated', 'animate__fadeIn');
                            observerRef.current.unobserve(blogRef.current); // Use the ref to unobserve
                        }
                    },
                    { threshold: 0.2 }
                );
            }

            observerRef.current.observe(blogRef.current); // Observe the current ref

            return () => {
                if (observerRef.current) {
                  observerRef.current.unobserve(blogRef.current);
                }
            };
        }
    }, [blog]);

    if (loading) {
        return <div className="container mx-auto lg:px-24 py-16 text-center">Loading blog...</div>;
    }

    if (error) {
        return (
            <div className="container mx-auto lg:px-24 py-16 text-center text-red-500">
                Error: {error.message}
            </div>
        );
    }

    if (!blog) {
        return (
            <div className="container mx-auto lg:px-24 py-16 text-center">
                Blog not found
            </div>
        );
    }

    return (
        <div className="container mx-auto lg:px-24 py-20 px-4" ref={blogRef}>
            <img
                src={blog.cover_img}
                alt={blog.title}
                className="w-full lg:h-[480px] h-64 object-cover rounded-lg mb-8 animate__animated animate__fadeIn"
            />
            <h1 className="text-2xl font-bold tracking-wider text-center mb-8">
                {blog.title}
            </h1>
            <p className="text-[15px] leading-7 tracking-widest">
                {blog.description}
            </p>
        </div>
    );
};

export default BlogDes;