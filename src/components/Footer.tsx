import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Twitter, Github as GitHub, Disc as Discord, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const footerLinks = {
    company: [
      { name: 'About', href: '#about' },
      { name: 'Features', href: '#features' },
      { name: 'Careers', href: '#' },
      { name: 'Blog', href: '#' },
    ],
    resources: [
      { name: 'Documentation', href: '#' },
      { name: 'Tutorials', href: '#' },
      { name: 'Case Studies', href: '#' },
      { name: 'Roadmap', href: '#' },
    ],
    legal: [
      { name: 'Privacy', href: '#' },
      { name: 'Terms', href: '#' },
      { name: 'Cookie Policy', href: '#' },
    ],
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-dark-500 border-t border-white/5 pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="h-10 w-10 bg-dark-300 rounded-lg flex items-center justify-center">
                <Sparkles className="h-5 w-5 text-primary-500" />
              </div>
              <div className="ml-3 font-display font-bold text-xl">
                <span className="text-white">Decentra</span>
                <span className="text-primary-500">code</span>
              </div>
            </div>
            <p className="text-white/70 mb-6 max-w-md">
              Building the foundation for the next generation of web3 developers through education, 
              mentorship, and real-world projects.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-dark-300 flex items-center justify-center text-white/70 hover:text-white hover:bg-dark-200 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-dark-300 flex items-center justify-center text-white/70 hover:text-white hover:bg-dark-200 transition-colors">
                <GitHub className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-dark-300 flex items-center justify-center text-white/70 hover:text-white hover:bg-dark-200 transition-colors">
                <Discord className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-dark-300 flex items-center justify-center text-white/70 hover:text-white hover:bg-dark-200 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-white/70 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-white/70 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-white/70 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <a href="mailto:hello@decentracode.io" className="flex items-center text-white/70 hover:text-white transition-colors">
                <Mail className="h-4 w-4 mr-2" />
                hello@decentracode.io
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 mt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Decentracode. All rights reserved.
          </p>
          <div className="flex items-center text-white/50 text-sm">
            <span>Built with</span>
            <span className="inline-block mx-1">❤️</span>
            <span>for the web3 community</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;