import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import 'animate.css';

const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate(); // Hook for navigation

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await fetch('blog.json');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setBlogs(data);
            } catch (err) {
                setError(err);
                console.error("Error fetching blogs:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    const handleReadMore = (blogId) => {
        navigate(`/des/${blogId}`); // Use navigate to go to the details page
    };


    if (loading) {
        return <div className="container mx-auto lg:px-24 py-16 text-center">Loading blogs...</div>;
    }

    if (error) {
        return <div className="container mx-auto lg:px-24 py-16 text-center text-red-500">Error: {error.message}</div>;
    }

    return (
        <div className='container mx-auto lg:px-24 py-16'>
            <h1 className='text-2xl font-bold tracking-wider text-center mb-8 mt-12'>Technology Blog</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogs.map((blog, index) => (
                    <div key={blog.id} className={`rounded-lg shadow-md p-6 animate__animated animate__fadeInUp ${index % 3 === 0 ? '' : (index % 3 === 1 ? 'animate__delay-1s' : 'animate__delay-2s')}`}>
                        <img src={blog.cover_img} alt={blog.title} className="w-full h-48 object-cover rounded-t-lg mb-4" />
                        <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
                        <p className="">{blog.description.slice(0, 150)}...</p>

                        {/* Use a button or div with onClick instead of NavLink */}
                        <button onClick={() => handleReadMore(blog.id)} className="text-blue-500 hover:underline mt-4 inline-block">
                            Read More
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blog;