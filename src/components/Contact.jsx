import React, { useState } from 'react';
import { Mail, Phone, MapPin, User, Building, Clock } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const contactInfo = {
    email: "contact@company.com",
    phone: "+1 (555) 123-4567",
    address: "123 Business Street, City, State 12345",
    hours: "Mon-Fri: 9AM-5PM",
  };

  const references = [
    {
      name: "John Smith",
      title: "Senior Project Manager",
      company: "Tech Solutions Inc",
      contact: "+1 (555) 987-6543"
    },
    {
      name: "Sarah Johnson",
      title: "Director of Operations",
      company: "Global Enterprises",
      contact: "+1 (555) 234-5678"
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section id='contact' className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-6 dark:text-white">Get in Touch</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2 dark:text-gray-200">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 dark:text-gray-200">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 dark:text-gray-200">Message</label>
                <textarea
                  className="w-full px-4 py-2 border rounded-lg h-32 resize-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info & References */}
          <div className="space-y-8">
            {/* Direct Contact */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold mb-6 dark:text-white">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                  <Mail size={20} />
                  <span>{contactInfo.email}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                  <Phone size={20} />
                  <span>{contactInfo.phone}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                  <MapPin size={20} />
                  <span>{contactInfo.address}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                  <Clock size={20} />
                  <span>{contactInfo.hours}</span>
                </div>
              </div>
            </div>

            {/* References */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold mb-6 dark:text-white">References</h2>
              <div className="space-y-6">
                {references.map((ref, index) => (
                  <div key={index} className="border-b last:border-0 pb-4 last:pb-0">
                    <div className="flex items-center gap-3 mb-2">
                      <User size={20} className="text-blue-600" />
                      <span className="font-medium dark:text-white">{ref.name}</span>
                    </div>
                    <div className="ml-8 space-y-1 text-gray-600 dark:text-gray-300">
                      <div className="flex items-center gap-2">
                        <Building size={16} />
                        <span>{ref.title} at {ref.company}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone size={16} />
                        <span>{ref.contact}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;