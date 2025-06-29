import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaHome,
  FaMapSigns,
  FaBook,
  FaBuilding,
  FaUserGraduate,
  FaCode,
  FaUsers,
} from 'react-icons/fa';
import { Menu, X } from 'lucide-react';
import Tools from './Tools';

const navLinks = [
  { to: '/', label: 'Home', icon: <FaHome size={16} /> },
  { to: '/r23', label: 'Academics', icon: <FaBook size={16} /> },
  { to: '/roadmaps', label: 'Roadmaps', icon: <FaMapSigns size={16} /> },
  { to: '/resources', label: 'Resources', icon: <FaBook size={16} /> },
  { to: '/companies', label: 'Placements', icon: <FaBuilding size={16} /> },
  { to: '/tool', label: 'Tools', icon: <FaCode size={16} /> },
  { to: '/team', label: 'Team', icon: <FaUsers size={16} /> },
];

const Navbar = () => {
  const [active, setActive] = useState('/');
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="bg-black text-white p-4 shadow-lg z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div
          className="text-2xl font-bold cursor-pointer"
          onClick={() => navigate('/')}
        >
          <span className="text-blue-600 font-extrabold">Tech</span>
          <span className="text-cyan-400 font-extrabold">Hub</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 items-center">
          {navLinks.map(({ to, label, icon }) => (
            <motion.div
              key={to}
              onClick={() => setActive(to)}
              whileHover={{ scale: 1.05 }}
              className="relative cursor-pointer"
            >
              <NavLink
                to={to}
                className="flex items-center gap-1 px-2 py-1 text-sm font-medium"
                style={({ isActive }) => ({
                  color: isActive || active === to ? '#38bdf8' : '#e5e7eb',
                })}
              >
                {icon}
                {label}
              </NavLink>
              {(active === to || window.location.pathname === to) && (
                <motion.div
                  className="h-1 bg-cyan-400 rounded-full absolute -bottom-1 left-0 w-full"
                  layoutId="underline"
                />
              )}
            </motion.div>
          ))}

        
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: 'auto' }}
          exit={{ height: 0 }}
          className="md:hidden overflow-hidden mt-2 bg-black px-4 pb-4 rounded-md"
        >
          {navLinks.map(({ to, label, icon }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => {
                setActive(to);
                setMobileOpen(false);
              }}
              className="flex items-center gap-2 py-2 text-sm text-white border-b border-gray-700"
              style={({ isActive }) => ({
                color: isActive || active === to ? '#38bdf8' : '#e5e7eb',
              })}
            >
              {icon}
              {label}
            </NavLink>
          ))}
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
