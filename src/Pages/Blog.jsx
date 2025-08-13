import PostCard from "../components/PostCard.jsx";

import "../styles/Blog.css";

import React, { useState } from "react";

const Blog = () => {
  const [posts] = useState([
    {
      id: 1,
      title: "Mastering Your SaaS Launch with Our New Toolkit",
      description:
        "Learn how to use our powerful new features to ensure a successful product launch and accelerate your business growth from day one.",
      category: "Productivity",
      author: "Jane Doe",
      image: "https://placehold.co/600x400/1E90FF/ffffff?text=Post+1",
    },
    {
      id: 2,
      title: "7 Strategies to Boost User Engagement",
      description:
        "Discover proven techniques and best practices to keep your users engaged and reduce churn with our analytics-driven insights.",
      category: "Marketing",
      author: "John Smith",
      image: "https://placehold.co/600x400/2ECC71/ffffff?text=Post+2",
    },
    {
      id: 3,
      title: "The Ultimate Guide to Scaling Your Business",
      description:
        "A comprehensive guide on how to scale your SaaS business effectively, from infrastructure to team management.",
      category: "Business",
      author: "Emily White",
      image: "https://placehold.co/600x400/F39C12/ffffff?text=Post+3",
    },
    {
      id: 4,
      title: "Why User Experience is Your Key to Success",
      description:
        "Understand the critical role of UX design in building a profitable and sustainable SaaS product.",
      category: "Design",
      author: "Michael Brown",
      image: "https://placehold.co/600x400/6C5CE7/ffffff?text=Post+4",
    },
    {
      id: 5,
      title: "Automating Your Workflows for Maximum Efficiency",
      description:
        "A step-by-step tutorial on how to set up automated workflows and save countless hours every week.",
      category: "Productivity",
      author: "Sarah Johnson",
      image: "https://placehold.co/600x400/1E90FF/ffffff?text=Post+5",
    },
  ]);

  return (
    <div className="app-container">
      <header className="header">
        <div className="header-container">
          <h1 className="title">Our Blog & Resources</h1>
          <p className="subtitle">
            Stay up-to-date with our latest insights, case studies, and
            tutorials on how to grow your business with our tools.
          </p>
        </div>
      </header>

      <main className="main-content">
        <section className="mb-12">
          <h2 className="section-heading">All Posts</h2>
          <div className="post-grid">
            {posts.map((post) => (
              <PostCard
                key={post.id}
                title={post.title}
                description={post.description}
                category={post.category}
                author={post.author}
                image={post.image}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Blog;
