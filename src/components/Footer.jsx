import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold">BTech Hub</h3>
            <p className="mt-2 text-sm">Your one-stop platform for BTech success.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul className="mt-2 space-y-1 text-sm">
              {[
                { to: '/', label: 'Home' },
                { to: '/academics', label: 'Academics' },
                { to: '/placements', label: 'Placements' },
                { to: '/resources', label: 'Resources' },
              ].map((link) => (
                <motion.li
                  key={link.to}
                  whileHover={{ x: 5 }}
                  className="hover:text-secondary transition"
                >
                  <a href={link.to}>{link.label}</a>
                </motion.li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold">Contact Us</h3>
            <p className="mt-2 text-sm">Email: support@btechhub.co</p>
            <p className="text-sm">Phone: +123 456 7890</p>
          </div>
        </div>
        <p className="mt-8 text-center text-sm">© 2025 BTech Hub. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;