import React from 'react';
import { motion } from 'framer-motion';
import { Code, ArrowRight, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-12 md:pt-40 md:pb-12 lg:pt-48 lg:pb-20 overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 z-0 grid-background opacity-20"></div>

      {/* Gradient orbs */}
      <div className="absolute top-40 -left-24 w-72 h-72 bg-primary-500/30 rounded-full filter blur-[80px]"></div>
      <div className="absolute bottom-10 -right-20 w-80 h-80 bg-accent-500/20 rounded-full filter blur-[100px]"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-2"
        >
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-white/5 border border-white/10 backdrop-blur-sm">
            <Sparkles className="h-4 w-4 mr-2 text-secondary-400" />
            <span className="gradient-text">Revolutionizing Web3 Onboarding</span>
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight"
        >
          <span className="block">Empowering the next wave of</span>
          <span className="gradient-text"> Web3 Builders</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl text-white/70 max-w-3xl mx-auto mb-12"
        >
          Decentracode bridges the gap between traditional development and web3, providing comprehensive
          resources, mentorship, and opportunities for builders to thrive in the decentralized ecosystem.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="https://www.youtube.com/@Decentracode" className="btn-primary px-8 py-4 text-lg w-full sm:w-auto">
            <Code className="mr-2 h-5 w-5" />
            Start Building
          </a>
          <a href="#about" className="btn-outline w-full sm:w-auto group">
            Learn More
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        {/* Code snippet preview */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-16 max-w-2xl mx-auto"
        > */}
          {/* <div className="glass-card overflow-hidden">
            <div className="flex items-center px-4 py-2 bg-dark-300 border-b border-white/5">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-error-500"></div>
                <div className="w-3 h-3 rounded-full bg-warning-500"></div>
                <div className="w-3 h-3 rounded-full bg-success-500"></div>
              </div>
              <div className="mx-auto text-sm text-white/50 font-mono">decentracode.js</div>
            </div>
            <div className="bg-dark-400 overflow-x-auto">
              <pre className="p-4 text-sm font-mono leading-relaxed">
                <code className="text-white/80">
                  <span className="text-secondary-400">import</span> {'{'} Decentracode {'}'} <span className="text-secondary-400">from</span> <span className="text-accent-400">'web3-future'</span>;{'\n\n'}
                  <span className="text-primary-400">async function</span> <span className="text-secondary-300">buildDecentralizedApp</span>() {'{'}{'\n'}
                  {'  '}const builder = <span className="text-secondary-400">await</span> Decentracode.<span className="text-secondary-300">onboard</span>({'\n'}
                  {'    '}skills: [<span className="text-accent-400">'frontend'</span>, <span className="text-accent-400">'smart-contracts'</span>, <span className="text-accent-400">'tokenomics'</span>],{'\n'}
                  {'    '}experience: <span className="text-accent-400">'beginner'</span>,{'\n'}
                  {'  '}{'}'});{'\n\n'}
                  {'  '}<span className="text-secondary-400">return</span> builder.<span className="text-secondary-300">createImpact</span>({'\n'}
                  {'    '}ecosystem: <span className="text-accent-400">'global'</span>,{'\n'}
                  {'    '}innovation: <span className="text-success-500">true</span>,{'\n'}
                  {'  '}{'}'});{'\n'}
                  {'}'}{'\n\n'}
                  <span className="text-primary-400">// Are you ready to build the future?</span>
                </code>
              </pre>
            </div>
          </div> */}
        {/* </motion.div> */}
      </div>
    </section>
  );
};

export default Hero;