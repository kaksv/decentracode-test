import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Rocket, BookOpen, Users, Award, ShieldCheck, Globe } from 'lucide-react';

interface FeatureProps {
  icon: React.ElementType;
  title: string;
  description: string;
  iconColor: string;
  delay: number;
}

const Feature: React.FC<FeatureProps> = ({ icon: Icon, title, description, iconColor, delay }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay }}
      className="glass-card p-6 md:p-8 group hover:shadow-glow transition-all duration-500"
    >
      <div className={`w-12 h-12 rounded-lg mb-5 flex items-center justify-center ${iconColor} group-hover:scale-110 transition-transform duration-300`}>
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-white/70">{description}</p>
    </motion.div>
  );
};

const Features: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const features = [
    {
      icon: Rocket,
      title: 'Accelerated Learning',
      description: 'Fast-track your web3 development journey with structured learning paths tailored to your experience level.',
      iconColor: 'bg-primary-500/10 text-primary-400',
      delay: 0.2,
    },
    {
      icon: BookOpen,
      title: 'Comprehensive Resources',
      description: 'Access a curated library of tutorials, documentation, and code samples covering all aspects of web3 development.',
      iconColor: 'bg-secondary-500/10 text-secondary-400',
      delay: 0.3,
    },
    {
      icon: Users,
      title: 'Expert Mentorship',
      description: 'Connect with seasoned web3 developers who provide guidance, code reviews, and personalized feedback.',
      iconColor: 'bg-accent-500/10 text-accent-400',
      delay: 0.4,
    },
    {
      icon: Award,
      title: 'Project Certification',
      description: 'Earn verifiable credentials that showcase your web3 skills and completed projects to potential employers.',
      iconColor: 'bg-success-500/10 text-success-400',
      delay: 0.5,
    },
    {
      icon: ShieldCheck,
      title: 'Security Best Practices',
      description: 'Learn to build secure decentralized applications with embedded security principles throughout the curriculum.',
      iconColor: 'bg-warning-500/10 text-warning-400',
      delay: 0.6,
    },
    {
      icon: Globe,
      title: 'Global Community',
      description: 'Join a vibrant network of builders collaborating on real-world projects and shaping the future of web3.',
      iconColor: 'bg-error-500/10 text-error-400',
      delay: 0.7,
    },
  ];

  return (
    <section id="features" className="py-24 md:py-32 relative">
      {/* Gradient backgrounds */}
      <div className="absolute left-0 bottom-0 w-full h-1/2 bg-gradient-to-t from-dark-500/50 to-transparent"></div>
      <div className="absolute top-40 -left-32 w-64 h-64 bg-primary-500/20 rounded-full filter blur-[100px]"></div>
      <div className="absolute bottom-40 -right-32 w-64 h-64 bg-accent-500/20 rounded-full filter blur-[100px]"></div>
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="section-title"
          >
            Why Choose <span className="gradient-text">Decentracode</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="section-subtitle mx-auto"
          >
            Our comprehensive platform offers everything you need to transform from a web2 developer
            to a successful web3 builder.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <Feature key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;