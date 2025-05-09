import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, ArrowRight, Zap } from 'lucide-react';

const CTA: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="join" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 z-0 grid-background opacity-20"></div>
      <div className="absolute -left-32 top-1/4 w-64 h-64 bg-primary-500/20 rounded-full filter blur-[100px]"></div>
      <div className="absolute -right-32 bottom-1/4 w-80 h-80 bg-accent-500/20 rounded-full filter blur-[100px]"></div>
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="glass-card p-8 md:p-12 lg:p-16 text-center border border-white/10 relative overflow-hidden"
        >
          {/* Animated gradient border effect */}
          <div className="absolute -top-1 -left-1 -right-1 -bottom-1 rounded-2xl overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary-500 to-transparent animate-pulse-slow"></div>
            <div className="absolute top-0 right-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-accent-500 to-transparent animate-pulse-slow"></div>
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-secondary-500 to-transparent animate-pulse-slow"></div>
            <div className="absolute top-0 left-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-primary-500 to-transparent animate-pulse-slow"></div>
          </div>

          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-white/5 border border-white/10 backdrop-blur-sm">
              <Zap className="h-4 w-4 mr-2 text-primary-400" />
              <span className="gradient-text">Limited Spots Available</span>
            </span>
          </motion.div>

          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Ready to become a <span className="gradient-text">Web3 Builder</span>?
          </motion.h2>

          <motion.p variants={itemVariants} className="text-xl text-white/70 max-w-3xl mx-auto mb-12">
            Join our next cohort and start your journey to becoming a successful web3 developer.
            Applications are now open for developers of all experience levels.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="#" className="btn-primary px-8 py-4 text-lg w-full sm:w-auto">
              <Code className="mr-2 h-5 w-5" />
              Apply Now
            </a>
            <a href="#" className="btn-outline w-full sm:w-auto group">
              Learn More
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </motion.div>
        
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass-card p-8"
          >
            <h3 className="text-2xl font-bold mb-4">For Builders</h3>
            <p className="text-white/70 mb-6">
              Whether you're a seasoned developer looking to pivot to web3 or a beginner eager to learn,
              our program provides the resources, mentorship, and project opportunities you need to succeed.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary-500/20 flex items-center justify-center mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-primary-500"></div>
                </div>
                <span className="ml-3 text-white/70">Flexible learning tracks for every skill level</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary-500/20 flex items-center justify-center mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-primary-500"></div>
                </div>
                <span className="ml-3 text-white/70">Hands-on projects that build your portfolio</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary-500/20 flex items-center justify-center mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-primary-500"></div>
                </div>
                <span className="ml-3 text-white/70">Direct connections to job opportunities</span>
              </li>
            </ul>
            <a href="#" className="inline-flex items-center text-primary-400 hover:text-primary-300 font-medium group">
              Apply to learn
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="glass-card p-8"
          >
            <h3 className="text-2xl font-bold mb-4">For Partners</h3>
            <p className="text-white/70 mb-6">
              Connect with our community of skilled developers ready to contribute to your project.
              We help protocols and organizations find the talent they need to build the future of web3.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-secondary-500/20 flex items-center justify-center mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-secondary-500"></div>
                </div>
                <span className="ml-3 text-white/70">Access to pre-vetted web3 talent</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-secondary-500/20 flex items-center justify-center mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-secondary-500"></div>
                </div>
                <span className="ml-3 text-white/70">Collaborative project opportunities</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-secondary-500/20 flex items-center justify-center mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-secondary-500"></div>
                </div>
                <span className="ml-3 text-white/70">Ecosystem growth and education support</span>
              </li>
            </ul>
            <a href="#" className="inline-flex items-center text-secondary-400 hover:text-secondary-300 font-medium group">
              Become a partner
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;