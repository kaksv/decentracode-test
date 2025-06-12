import React, { useState, useEffect } from 'react';
import { Menu, X, Code2, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    // { name: 'Features', href: '#features' },
    { name: 'Journey', href: '#journey' },
    { name: 'Community', href: '#community' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-dark-400/90 backdrop-blur-lg shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <div className="h-10 w-10 bg-dark-300 rounded-lg flex items-center justify-center">
                <Sparkles className="h-5 w-5 text-[#1488fc]" />
              </div>
              <div className="ml-3 font-display font-bold text-xl">
                <span className="text-white">Decentra</span>
                <span className="text-[#1488fc]">code</span>
              </div>
            </a>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="font-medium text-white/70 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div className="hidden md:block">
            <a href="https://t.me/Decentracode" className="btn-primary">
              <Code2 className="mr-2 h-5 w-5" />
              Join The Community
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-white/70 hover:text-white focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-dark-300 shadow-lg"
        >
          <div className="space-y-1 px-4 pb-5 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block rounded-md px-3 py-2 text-base font-medium text-white/70 hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="mt-4 pt-4 border-t border-white/10">
              <a
                href="https://t.me/Decentracode"
                className="flex items-center justify-center w-full btn-primary"
                onClick={() => setIsOpen(false)}
              >
                <Code2 className="mr-2 h-5 w-5" />
                Join The Community.
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
