import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const BlogDes = () => {
    const location = useLocation();
    const { blog } = location.state || {}; // Access the passed blog data
    const [loading, setLoading] = useState(true); // Loading state
    const [likes, setLikes] = useState(0); // Like functionality
    const [comment, setComment] = useState(''); // Comment input
    const [comments, setComments] = useState([]); // List of comments

    // Load likes and comments from localStorage when the component mounts
    useEffect(() => {
        if (blog?.id) {
            const savedLikes = localStorage.getItem(`blog_${blog.id}_likes`);
            const savedComments = localStorage.getItem(`blog_${blog.id}_comments`);

            if (savedLikes) {
                setLikes(Number(savedLikes)); // Set likes from localStorage
            }

            if (savedComments) {
                setComments(JSON.parse(savedComments)); // Set comments from localStorage
            }
        }

        // Simulate loading delay
        const timer = setTimeout(() => {
            setLoading(false); // Set loading to false after a delay
        }, 1000); // 1-second delay for demonstration

        return () => clearTimeout(timer); // Cleanup timer
    }, [blog?.id]);

    // Save likes to localStorage whenever it changes
    useEffect(() => {
        if (blog?.id) {
            localStorage.setItem(`blog_${blog.id}_likes`, likes.toString());
        }
    }, [likes, blog?.id]);

    // Save comments to localStorage whenever it changes
    useEffect(() => {
        if (blog?.id) {
            localStorage.setItem(`blog_${blog.id}_comments`, JSON.stringify(comments));
        }
    }, [comments, blog?.id]);

    // Handle like button click
    const handleLike = () => {
        setLikes((prevLikes) => prevLikes + 1);
    };

    // Handle comment input change
    const handleCommentChange = (e) => {
        setComment(e.target.value);
    };

    // Handle comment submission
    const handleCommentSubmit = () => {
        if (comment.trim()) {
            setComments((prevComments) => [...prevComments, comment]); // Add new comment
            setComment(''); // Clear input field
        }
    };

    if (loading) {
        return (
            <div className="container mx-auto lg:px-24 py-16 text-center">
                <div className="flex justify-center items-center min-h-screen">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                    <p className="ml-4 text-lg">Loading blog details...</p>
                </div>
            </div>
        );
    }

    if (!blog) {
        return <div className="container mx-auto lg:px-24 py-16 text-center">No blog data found.</div>;
    }

    return (
        <div className='container mx-auto lg:px-24 py-16 min-h-screen'>
            <h1 className='text-3xl font-bold mb-8'>{blog.title}</h1>
            <img src={blog.cover_img} alt={blog.title} className="w-full h-64 object-cover rounded-lg mb-8" />
            <p className="text-lg mb-8">{blog.description}</p>

            {/* Like Functionality */}
            <div className="flex items-center mb-8">
                <button
                    onClick={handleLike}
                    className="flex items-center text-blue-500 hover:text-blue-700"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                    </svg>
                    Like ({likes})
                </button>
            </div>

            {/* Comment Functionality */}
            <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Comments</h2>
                <div className="flex mb-4">
                    <input
                        type="text"
                        value={comment}
                        onChange={handleCommentChange}
                        placeholder="Add a comment..."
                        className="flex-1 p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                        onClick={handleCommentSubmit}
                        className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600"
                    >
                        Submit
                    </button>
                </div>
                <ul>
                    {comments.map((comment, index) => (
                        <li key={index} className="mb-2 p-2 bg-gray-100 rounded-lg">
                            {comment}
                        </li>
                    ))}
                </ul>
                <p className='text-red-500'>Like and comment features will be updated in the future to provide users with more ways to provide feedback and connect with others.
                We are constantly working to improve these features so that you can more easily interact with the content you love.</p>
            </div>
        </div>
    );
};

export default BlogDes;