import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
  // This would typically come from a database or API
  const totalBlogs = 12;

  const blogPosts = [
    {
      title: "Web Development",
      description: "Explore the latest trends, tools, and techniques in modern web development.",
      image: "/images/web-dev.jpg",
      fallbackImage: "https://t3.ftcdn.net/jpg/02/14/87/96/360_F_214879686_R3HFJlk6WLr1kcdvy6Q9rtNASKN0BZBS.jpg",
      link: "/web-development"
    },
   
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-12">
      <div className="container mx-auto px-2">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 text-pydah-dark-gray">Blog</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover insights and updates from our team
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
              {/* Blog Image */}
              <div className="relative h-48 bg-gray-200">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = post.fallbackImage;
                  }}
                />
              </div>

              {/* Blog Content */}
              <div className="p-6">
                <h2 className="text-xl font-bold text-pydah-dark-gray mb-3">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4 text-sm">
                  {post.description}
                </p>

                {/* Read More Button */}
                <Link
                  to={post.link}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-pydah-primary text-white rounded-lg hover:bg-pydah-primary/90 transition-colors duration-300 text-sm"
                >
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

       
      </div>
    </div>
  );
};

export default Blog; 