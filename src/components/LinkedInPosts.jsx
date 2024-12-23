import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, ThumbsUp, MessageCircle, Share2 } from 'lucide-react';

const linkedInPosts = [
  {
    id: 1,
    content: "Excited to announce our latest project launch! Our team has been working tirelessly to bring innovation to the market. #Innovation #Leadership",
    likes: 1234,
    comments: 89,
    shares: 45,
    date: "2 days ago",
    image: "/api/placeholder/600/300"
  },
  {
    id: 2,
    content: "Grateful to be featured in Forbes' 30 Under 30! Thank you to my amazing team and mentors who made this possible. #Entrepreneurship #Success",
    likes: 2567,
    comments: 156,
    shares: 78,
    date: "1 week ago"
  }
];

const LinkedInPosts = () => {
  return (
    <section id="posts" className="py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center"
        >
          Latest LinkedIn Posts
        </motion.h2>
        <div className="space-y-8">
          {linkedInPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:shadow-lg transition-all hover:scale-105"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full" />
                <div>
                  <div className="font-semibold">John Executive</div>
                  <div className="text-sm text-gray-500">{post.date}</div>
                </div>
                <Linkedin className="text-blue-600 ml-auto" />
              </div>
              
              <p className="mb-4 text-gray-600 dark:text-gray-300">{post.content}</p>
              
              {post.image && (
                <img 
                  src={post.image} 
                  alt="Post content" 
                  className="w-full rounded-lg mb-4"
                />
              )}
              
              <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                <button className="flex items-center gap-2 text-gray-500 hover:text-blue-600">
                  <ThumbsUp size={18} />
                  {post.likes}
                </button>
                <button className="flex items-center gap-2 text-gray-500 hover:text-blue-600">
                  <MessageCircle size={18} />
                  {post.comments}
                </button>
                <button className="flex items-center gap-2 text-gray-500 hover:text-blue-600">
                  <Share2 size={18} />
                  {post.shares}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LinkedInPosts;