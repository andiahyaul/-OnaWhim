"use client"

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

interface InstagramPost {
  id: string;
  imageUrl: string;
  caption: string;
  likes: number;
  comments: number;
  postUrl: string;
  timestamp: string;
}

interface InstagramFeedProps {
  title?: string;
  subtitle?: string;
  instagramHandle?: string;
  instagramUrl?: string;
}

export function InstagramFeed({
  title = "Follow Our Journey",
  subtitle = "",
  instagramHandle = "@onawhim._",
  instagramUrl = "https://instagram.com/onawhim._"
}: InstagramFeedProps) {
  // Mock Instagram posts - in a real implementation, you'd fetch from Instagram API
  // https://www.instagram.com/onawhim._/p/DJbz3Y9TPnl/
  const mockPosts: InstagramPost[] = [
    {
      id: "1",
      imageUrl: "/feed1.png",
      caption: "exploration 101: very demure very cuteesssssy tumbler strap🌷🎀",
      likes: 247,
      comments: 18,
      postUrl: `${instagramUrl}/p/DJbz3Y9TPnl`,
      timestamp: "7w"
    },
    {
      id: "2",
      imageUrl: "/feed2.png",
      caption: "Behind the scenes of our latest photoshoot 📸",
      likes: 189,
      comments: 12,
      postUrl: `${instagramUrl}/p/DJiR6FDzpN3`,
      timestamp: "5h"
    },
    {
      id: "3",
      imageUrl: "/feed3.png",
      caption: "Minimalist elegance meets bold statements 💫",
      likes: 312,
      comments: 24,
      postUrl: `${instagramUrl}/p/DJiR9fXT_jN`,
      timestamp: "1d"
    },
    {
      id: "4",
      imageUrl: "/feed4.png",
      caption: "Every piece tells a story. What's yours? 🌟",
      likes: 156,
      comments: 9,
      postUrl: `${instagramUrl}/p/DLCfKVLxaM5`,
      timestamp: "2d"
    }
  ];


  return (
    <section className="w-full py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold" style={{color: '#B5386F'}}>
            {title}
          </h2>
          <p className="text-lg font-inter max-w-2xl mx-auto" style={{color: '#B5386F'}}>
            {subtitle}
          </p>
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-neutral-900 dark:text-neutral-100 hover:text-pink-500 dark:hover:text-pink-400 transition-colors font-medium"
          >
            <span>{instagramHandle}</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {mockPosts.map((post, index) => (
            <motion.a
              key={post.id}
              href={post.postUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group cursor-pointer focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 rounded-2xl"
            >
              <div className="aspect-square overflow-hidden rounded-2xl shadow-lg">
                <img
                  src={post.imageUrl}
                  alt={post.caption}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 group-focus:scale-110"
                />
              </div>

              {/* Caption */}
              <p className="mt-3 text-sm text-neutral-600 font-inter dark:text-neutral-400 line-clamp-2">
                {post.caption}
              </p>
            </motion.a>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-inter inline-flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <span>Follow {instagramHandle}</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}