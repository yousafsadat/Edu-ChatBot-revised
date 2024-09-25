// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ChatIcon from '@mui/icons-material/Chat';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import CloseIcon from '@mui/icons-material/Close';
// import './Navbar.css'

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Toggle mobile menu
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <AppBar
      position="fixed"
      className="bg-gradient-to-r from-white via-blue-500 to-purple-700 shadow-md"
      style={{ zIndex: 1300 }}
    >
      <Toolbar className="flex justify-between items-center px-4 md:px-8 lg:px-16">
        {/* Logo */}
        <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-purple-400">
          Edu. ChatBot
        </div>

        {/* Desktop Links (Visible on lg screens and above) */}
        <div className="hidden lg:flex space-x-8 text-white">
          <Link to="/" className="transition-transform transform hover:scale-105 text-gray-100 hover:text-blue-300">
            Home
          </Link>
          <Link to="/about" className="transition-transform transform hover:scale-105 text-gray-100 hover:text-blue-300">
            About Us
          </Link>
          <Link to="/chat-now" className="transition-transform transform hover:scale-105 text-gray-100 hover:text-blue-300">
            Chat Now
          </Link>
          <Link to="/contact" className="transition-transform transform hover:scale-105 text-gray-100 hover:text-blue-300">
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Icon (Visible on sm and md screens only) */}
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="end"
          onClick={handleDrawerToggle}
          className="lg:hidden" // Show only on mobile and tablet
        >
          <MenuIcon className="text-blue-300" />
        </IconButton>

        {/* Mobile Sidebar Drawer */}
        <Drawer
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          classes={{ paper: 'bg-gradient-to-r from-white via-blue-500 to-purple-700 text-white' }}
        >
          {/* Close Icon */}
          <div className="flex justify-end p-4">
            <IconButton onClick={handleDrawerToggle}>
              <CloseIcon className="text-white" />
            </IconButton>
          </div>
          <List className="text-gray-100 w-60">
            <ListItem button onClick={handleDrawerToggle} component={Link} to="/" className="hover:bg-blue-500 hover:text-white rounded-lg mb-2">
              <ListItemIcon>
                <HomeIcon className="text-blue-300" />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button onClick={handleDrawerToggle} component={Link} to="/about" className="hover:bg-blue-500 hover:text-white rounded-lg mb-2">
              <ListItemIcon>
                <InfoIcon className="text-blue-300" />
              </ListItemIcon>
              <ListItemText primary="About Us" />
            </ListItem>
            <ListItem button onClick={handleDrawerToggle} component={Link} to="/chat-now" className="hover:bg-blue-500 hover:text-white rounded-lg mb-2">
              <ListItemIcon>
                <ChatIcon className="text-blue-300" />
              </ListItemIcon>
              <ListItemText primary="Chat Now" />
            </ListItem>
            <ListItem button onClick={handleDrawerToggle} component={Link} to="/contact" className="hover:bg-blue-500 hover:text-white rounded-lg mb-2">
              <ListItemIcon>
                <ContactMailIcon className="text-blue-300" />
              </ListItemIcon>
              <ListItemText primary="Contact Us" />
            </ListItem>
          </List>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;