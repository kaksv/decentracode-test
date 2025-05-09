import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BookOpen, Code, Zap, Users, Award } from 'lucide-react';

interface JourneyStepProps {
  step: number;
  title: string;
  description: string;
  icon: React.ElementType;
  delay: number;
}

const JourneyStep: React.FC<JourneyStepProps> = ({ step, title, description, icon: Icon, delay }) => {
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
      className="flex items-start"
    >
      <div className="flex-shrink-0 mr-6">
        <div className="w-14 h-14 rounded-full bg-dark-300 border border-white/10 flex items-center justify-center text-lg font-bold text-primary-400 relative z-10">
          {step}
        </div>
        {step < 5 && (
          <div className="w-0.5 h-24 bg-gradient-to-b from-primary-500/50 to-primary-500/0 mx-auto mt-4 mb-4"></div>
        )}
      </div>
      <div className="pt-3">
        <div className="flex items-center mb-3">
          <div className="w-8 h-8 rounded-lg bg-dark-300 flex items-center justify-center mr-3">
            <Icon className="h-4 w-4 text-secondary-400" />
          </div>
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
        <p className="text-white/70">{description}</p>
      </div>
    </motion.div>
  );
};

const BuilderJourney: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const journeySteps = [
    {
      step: 1,
      icon: BookOpen,
      title: 'Foundation Learning',
      description: 'Begin with core web3 concepts, blockchain fundamentals, and a primer on decentralized applications.',
      delay: 0.2,
    },
    {
      step: 2,
      icon: Code,
      title: 'Hands-on Development',
      description: 'Build your first smart contracts, integrate web frontends, and learn through practical challenges.',
      delay: 0.3,
    },
    {
      step: 3,
      icon: Zap,
      title: 'Specialization Tracks',
      description: 'Dive deeper into your area of interest: DeFi, NFTs, DAOs, or infrastructure development.',
      delay: 0.4,
    },
    {
      step: 4,
      icon: Users,
      title: 'Collaborative Projects, Hackathons & Open Source',
      description: 'Join teams working on real-world applications alongside mentors from leading web3 protocols and opensource projects.',
      delay: 0.5,
    },
    {
      step: 5,
      icon: Award,
      title: 'Launch & Recognition',
      description: 'Deploy your projects, earn credentials, and connect with opportunities in the ecosystem.',
      delay: 0.6,
    },
  ];

  return (
    <section id="journey" className="py-24 md:py-32 relative overflow-hidden">
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
            The Builder <span className="gradient-text">Journey</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="section-subtitle mx-auto"
          >
            Our structured path takes you from web3 fundamentals to launching production-ready decentralized applications.
          </motion.p>
        </div>

        <div className="glass-card p-8 md:p-12 max-w-4xl mx-auto">
          <div className="space-y-8">
            {journeySteps.map((step, index) => (
              <JourneyStep key={index} {...step} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuilderJourney;