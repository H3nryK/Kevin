import { useState } from 'react';
import { Sun, Moon, Menu, X, Linkedin, Mail, ArrowRight } from 'lucide-react';

const Portfolio = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const linkedInPosts = [
    {
      id: 1,
      content: "Excited to announce our latest project launch! #Innovation #Leadership",
      likes: 1234,
      comments: 89,
      date: "2 days ago"
    },
    {
      id: 2,
      content: "Grateful to be featured in Forbes' 30 Under 30! #Entrepreneurship",
      likes: 2567,
      comments: 156,
      date: "1 week ago"
    }
  ];

  const projects = [
    {
      id: 1,
      title: "Market Expansion",
      description: "Led company expansion into 5 new markets, achieving 200% YoY growth",
      category: "Business Strategy"
    },
    {
      id: 2,
      title: "Digital Transformation",
      description: "Implemented AI-driven solutions, reducing operational costs by 40%",
      category: "Technology"
    }
  ];

  const testimonials = [
    {
      id: 1,
      text: "An exceptional leader with a clear vision for innovation.",
      author: "Jane Smith",
      position: "CEO, Tech Corp"
    },
    {
      id: 2,
      text: "Their strategic insight transformed our entire approach to business.",
      author: "John Doe",
      position: "COO, Innovation Inc"
    }
  ];

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 backdrop-blur-sm bg-opacity-80 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 font-bold text-xl">
              John Executive
            </div>
            
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
              <a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a>
              <a href="#posts" className="hover:text-blue-600 transition-colors">LinkedIn</a>
              <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              
              <button
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-white dark:bg-gray-900 pt-16">
          <div className="px-4 py-6 space-y-4">
            <a href="#about" className="block hover:text-blue-600">About</a>
            <a href="#projects" className="block hover:text-blue-600">Projects</a>
            <a href="#posts" className="block hover:text-blue-600">LinkedIn</a>
            <a href="#contact" className="block hover:text-blue-600">Contact</a>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            John Executive
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
            CEO & Strategic Innovation Leader
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
              View Projects <ArrowRight size={20} />
            </button>
            <button className="border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
              Contact Me
            </button>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Key Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map(project => (
              <div
                key={project.id}
                className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-sm text-blue-600 dark:text-blue-400 mb-2">
                  {project.category}
                </div>
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LinkedIn Posts */}
      <section id="posts" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Latest LinkedIn Posts</h2>
          <div className="space-y-6">
            {linkedInPosts.map(post => (
              <div
                key={post.id}
                className="border border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <p className="mb-4">{post.content}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span>{post.likes} likes</span>
                      <span>{post.comments} comments</span>
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <Linkedin className="text-blue-600" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">What People Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map(testimonial => (
              <div
                key={testimonial.id}
                className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg"
              >
                <p className="text-lg mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <div className="font-bold">{testimonial.author}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    {testimonial.position}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Get in Touch</h2>
          <div className="flex justify-center space-x-6">
            <a
              href="https://linkedin.com"
              className="flex items-center gap-2 text-blue-600 hover:text-blue-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin /> LinkedIn
            </a>
            <a
              href="mailto:john@example.com"
              className="flex items-center gap-2 text-blue-600 hover:text-blue-700"
            >
              <Mail /> Email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;