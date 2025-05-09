import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Quote } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  name: string;
  role: string;
  company: string;
  delay: number;
  imageSrc: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, name, role, company, delay, imageSrc }) => {
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
      className="glass-card p-6 md:p-8 hover:shadow-glow transition-all duration-500"
    >
      <div className="flex mb-6">
        <div className="flex-shrink-0 mr-4">
          <img
            src={imageSrc}
            alt={name}
            className="w-14 h-14 rounded-full object-cover border-2 border-primary-500/30"
          />
        </div>
        <div>
          <h4 className="text-lg font-bold">{name}</h4>
          <p className="text-sm text-white/70">{role}, {company}</p>
        </div>
      </div>
      <Quote className="h-6 w-6 text-primary-400 mb-3" />
      <p className="text-white/80 italic">{quote}</p>
    </motion.div>
  );
};

const Testimonials: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const testimonials = [
    {
      quote: "Decentracode transformed my career. I went from knowing almost nothing about blockchain to building a startup called Fundify after the 16weeks of the first cohrt. The mentorship was invaluable. Thank you for giving us this opportunity for free.",
      name: "Manuel Bagoole",
      role: " Founder Fundify and Smart Contract Auditor",
      company: "Fundify",
      // company: "DeFi Protocol",
      delay: 0.2,
      imageSrc: "https://res.cloudinary.com/dagn33ye3/image/upload/v1746767921/bagoole.jpg",
    },
    {
      quote: "As someone coming from from an economics background which is totally non technical, I have not only learnt smart contracts but also the entire web2 stack giving me an entire 360 in career Path.",
      name: "Tracy Nabuuma",
      role: "Frontend Engineer",
      company: "She3 Africa",
      delay: 0.3,
      imageSrc: "https://res.cloudinary.com/dagn33ye3/image/upload/v1746768196/tracy.jpg",
    },
    {
      quote: "The project-based learning approach at Decentracode prepared me for real-world challenges. I'm now contributing to Green Loop Web3 Startup.",
      name: "Maria Nakibuuka",
      role: "Smart Contract Engineer",
      company: "Green Loop",
      delay: 0.4,
      imageSrc: "https://res.cloudinary.com/dagn33ye3/image/upload/v1746767941/nakibuuka.jpg",
    },
  ];

  return (
    <section className="py-24 md:py-32 relative">
      {/* Gradient backgrounds */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-primary-500/10 rounded-full filter blur-[150px]"></div>
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="section-title"
          >
            Builder <span className="gradient-text">Success Stories</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="section-subtitle mx-auto"
          >
            Hear from developers who have successfully transitioned into web3 through our platform.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;