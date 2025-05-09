import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Hexagon, Shield, BarChart, Layers, Network, Leaf } from 'lucide-react';
import web3bridge from '../../assets/web3bridge.png';

interface PartnerProps {
  name: string;
  description: string;
  icon: React.ElementType;
  color: string;
  delay: number;
}

const Partner: React.FC<PartnerProps> = ({ name, description, icon, color, delay }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, delay }}
      className="glass-card p-6 text-center group hover:shadow-glow transition-all duration-500"
    >
      <div className={`w-16 h-16 ${color} rounded-xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
        <Icon className="h-8 w-8" />
      </div>
      <h3 className="text-lg font-bold mb-2">{name}</h3>
      <p className="text-white/70 text-sm">{description}</p>
    </motion.div>
  );
};

const Community: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const partners = [
    {
      name: "Web3 Bridge",
      description: "A community Bringing African builders into the web3 space.",
      icon: Hexagon,
      color: "bg-primary-500/10 text-primary-400",
      delay: 0.2,
    },
    {
      name: "SecureBlock",
      description: "Web3 security and audit solutions provider",
      icon: Shield,
      color: "bg-secondary-500/10 text-secondary-400",
      delay: 0.3,
    },
    {
      name: "DeFiMetrics",
      description: "Analytics platform for decentralized finance",
      icon: BarChart,
      color: "bg-accent-500/10 text-accent-400",
      delay: 0.4,
    },
    {
      name: "StackDAO",
      description: "Decentralized governance and coordination tools",
      icon: Layers,
      color: "bg-success-500/10 text-success-400",
      delay: 0.5,
    },
    {
      name: "NodeConnect",
      description: "Infrastructure provider for web3 applications",
      icon: Network,
      color: "bg-warning-500/10 text-warning-400",
      delay: 0.6,
    },
    {
      name: "GreenToken",
      description: "Sustainable blockchain initiatives and carbon offsets",
      icon: Leaf,
      color: "bg-error-500/10 text-error-400",
      delay: 0.7,
    },
  ];

  return (
    <section id="community" className="py-24 md:py-32 relative overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 z-0 grid-background opacity-10"></div>
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="section-title"
          >
            Ecosystem <span className="gradient-text">Parthers</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="section-subtitle mx-auto"
          >
            We partner with leading protocols and organizations across the web3 landscape
            to provide the best opportunities for our builders.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {partners.map((partner, index) => (
            <Partner key={index} {...partner} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 md:mt-24 glass-card p-8 md:p-12 lg:p-16 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6">Join Our Community</h3>
          <p className="text-white/70 mb-8 max-w-3xl mx-auto">
            Connect with thousands of web3 builders, mentors, and industry leaders in our vibrant community.
            Share ideas, collaborate on projects, and stay updated on the latest developments in the ecosystem.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#" className="btn-outline">
              Discord Community
            </a>
            <a href="#" className="btn-outline">
              Twitter
            </a>
            <a href="#" className="btn-outline">
              GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Community;