import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Users, Globe, Zap } from 'lucide-react';

const About: React.FC = () => {
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

  const statItems = [
    { 
      icon: Code2,
      value: '20+',
      label: 'Builders Onboarded',
      color: 'primary'
    },
    { 
      icon: Users,
      value: '2+',
      label: 'Partners',
      color: 'secondary'
    },
    { 
      icon: Globe,
      value: '1',
      label: 'Onsite Cohort.',
      color: 'accent'
    },
    { 
      icon: Zap,
      value: '5+',
      label: 'Successful Projects',
      color: 'success'
    },
  ];

  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="400" cy="400" r="350" stroke="url(#paint0_linear)" strokeWidth="1" strokeDasharray="20 20" />
          <circle cx="400" cy="400" r="250" stroke="url(#paint1_linear)" strokeWidth="1" />
          <defs>
            <linearGradient id="paint0_linear" x1="0" y1="400" x2="800" y2="400" gradientUnits="userSpaceOnUse">
              <stop stopColor="#6B7DF4" />
              <stop offset="1" stopColor="#E43FFF" />
            </linearGradient>
            <linearGradient id="paint1_linear" x1="150" y1="400" x2="650" y2="400" gradientUnits="userSpaceOnUse">
              <stop stopColor="#06BAFF" />
              <stop offset="1" stopColor="#6B7DF4" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="section-title"
          >
            About <span className="gradient-text">Decentracode</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="section-subtitle mx-auto"
          >
            We're on a mission to create a more democratized, equitable, decentralized future
            by empowering the next generation of builders from Africa.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8 md:p-10 relative"
          >
            <div className="absolute top-0 right-0 w-full h-full overflow-hidden opacity-30 pointer-events-none blur-3xl">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-gradient-radial from-primary-500/30 to-transparent rounded-full"></div>
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">Our Vision</h3>
              <p className="text-white/70 mb-6">
                Decentracode envisions a web3 ecosystem where technical barriers are lowered, allowing developers from Africa to contribute meaningfully to the decentralized web revolution.
              </p>
              <p className="text-white/70 mb-6">
                We believe that by providing structured onboarding, mentorship, and real project experience, we can accelerate the growth of the web3 ecosystem while ensuring its decentralization and resilience.
              </p>
              <p className="text-white/70">
                Our approach combines online bootcamps and residence residence cohorts, allowing builders to create impactful contributions and a products build approach to solve the challenges of their community.
              </p>
            </div>
          </motion.div>

          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid grid-cols-2 gap-6"
          >
            {statItems.map((item, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="glass-card p-6 flex flex-col items-center text-center group hover:shadow-glow transition-all duration-500"
              >
                <div className={`w-14 h-14 rounded-xl mb-4 flex items-center justify-center bg-${item.color}-500/10 text-${item.color}-400 group-hover:bg-${item.color}-500/20 transition-colors duration-300`}>
                  <item.icon className="h-7 w-7" />
                </div>
                <span className={`text-3xl font-bold mb-1 text-${item.color}-400`}>{item.value}</span>
                <span className="text-sm text-white/60">{item.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;