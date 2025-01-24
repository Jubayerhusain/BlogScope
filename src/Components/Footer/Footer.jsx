import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-500 text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center sm:text-left">
          {/* About Us */}
          <div>
            <h4 className="text-xl font-semibold mb-2">About Us</h4>
            <p className="text-sm leading-relaxed">
              Discover inspiring blogs, helpful tips, and creative insights.
              We’re here to share knowledge with the world.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-xl font-semibold mb-2">Quick Links</h4>
            <ul className="text-sm space-y-1">
              <li>
                <a href="/" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="/blog" className="hover:underline">
                  Blogs
                </a>
              </li>
              <li>
                <a href="/profile" className="hover:underline">
                  Profile
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-xl font-semibold mb-2">Resources</h4>
            <ul className="text-sm space-y-1">
              <li>
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="text-xl font-semibold mb-2">Contact</h4>
            <p className="text-sm">Email: support@yourblog.com</p>
            <p className="text-sm">Phone: +123 456 789</p>
            <div className="flex justify-center sm:justify-start space-x-3 mt-2">
              <a
                href="#"
                className="w-8 h-8 flex items-center justify-center bg-white rounded-full text-blue-500 hover:bg-blue-100"
              >
                {/* Icon */}
              </a>
              <a
                href="#"
                className="w-8 h-8 flex items-center justify-center bg-white rounded-full text-blue-500 hover:bg-blue-100"
              >
                {/* Icon */}
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/50 my-6"></div>

        {/* Footer Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-sm space-y-2 sm:space-y-0">
          <p>&copy; 2025 YourBlog. All Rights Reserved.</p>
          <p className="text-gray-200">
            Crafted with <span className="text-red-500">&hearts;</span> by Your
            Team.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
