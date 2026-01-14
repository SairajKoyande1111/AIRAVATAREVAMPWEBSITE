import { useState } from "react";
import { useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { 
  X
} from "lucide-react";

// Professional Glass Card Component with Blue-Cyan Theme
const GlassCard = ({ children, className = "" }) => (
  <div className={`backdrop-blur-sm bg-white/80 border border-blue-200/40 shadow-xl shadow-blue-500/10 ${className}`}>
    {children}
  </div>
);

// Modal Component for Service Details
const ServiceModal = ({ service, isOpen, onClose }) => {
  if (!service) return null;

  const serviceDetails = {
    "Website Development": {
      overview: "Build scalable, high-performance web applications using cutting-edge technologies and industry best practices.",
      process: ["Discovery & Planning", "Architecture Design", "Development & Testing", "Deployment & Optimization"],
      technologies: ["React/Next.js", "Node.js", "TypeScript", "GraphQL", "AWS/Azure"],
      timeline: "4-12 weeks",
      deliverables: ["Responsive Web Application", "Source Code", "Documentation", "Deployment Guide"]
    },
    "Mobile Application": {
      overview: "Create native and cross-platform mobile applications with exceptional user experience and performance.",
      process: ["UX Research", "Prototype Development", "Native Development", "App Store Deployment"],
      technologies: ["React Native", "Flutter", "iOS SDK", "Android SDK", "Firebase"],
      timeline: "6-16 weeks",
      deliverables: ["Mobile Application", "App Store Listing", "Analytics Setup", "Maintenance Plan"]
    },
    "Software Development": {
      overview: "Custom software solutions engineered to solve complex business challenges with reliability and scalability.",
      process: ["Requirements Gathering", "System Architecture", "Agile Development", "Quality Assurance"],
      technologies: ["Java", "Python", ".NET", "PostgreSQL", "Microservices"],
      timeline: "8-24 weeks",
      deliverables: ["Custom Software", "Source Code", "System Architecture Documentation", "User Training"]
    },
    "AI & Automation": {
      overview: "Implement intelligent automation and machine learning solutions to optimize business processes.",
      process: ["Process Analysis", "AI Model Development", "Integration", "Training & Support"],
      technologies: ["Python", "TensorFlow", "OpenAI API", "Azure AI", "Automation Tools"],
      timeline: "8-20 weeks",
      deliverables: ["AI Model", "Automation Scripts", "Integration Guide", "Training Materials"]
    },
    "Consulting": {
      overview: "Strategic technology consulting to guide digital transformation and innovation initiatives.",
      process: ["Business Analysis", "Technology Assessment", "Strategy Development", "Implementation Roadmap"],
      technologies: ["Enterprise Architecture", "Digital Strategy", "Innovation Framework", "Change Management"],
      timeline: "2-6 weeks",
      deliverables: ["Strategic Report", "Technology Roadmap", "Implementation Plan", "ROI Analysis"]
    },
    "Digital Marketing": {
      overview: "Comprehensive digital marketing strategies designed to increase brand visibility, generate qualified leads, and drive measurable business growth through data-driven campaigns and multi-channel approaches.",
      process: ["Market Research & Competitor Analysis", "Target Audience & Persona Development", "Multi-Channel Strategy Development", "Campaign Implementation & Optimization"],
      technologies: ["Google Analytics 4", "Google Ads & Facebook Ads", "HubSpot CRM", "Mailchimp & Klaviyo", "SEMrush & Ahrefs"],
      timeline: "2-6 weeks",
      deliverables: ["Digital Marketing Strategy", "Campaign Setup & Launch", "Analytics Dashboard", "Monthly Performance Reports"]
    }
  };

  const details = serviceDetails[service.title] || {};

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-md z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-white rounded-3xl shadow-2xl shadow-blue-500/20 max-w-4xl w-full max-h-[90vh] overflow-auto border border-blue-100"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <div className={`w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mr-4 shadow-lg shadow-blue-500/30`}>
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">{service.title}</h2>
                </div>
                <button 
                  onClick={onClose}
                  className="p-3 hover:bg-blue-50 rounded-xl transition-all duration-300 group"
                >
                  <X className="w-6 h-6 text-gray-500 group-hover:text-blue-500 transition-colors duration-300" />
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-blue-800 mb-4">Overview</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{details.overview}</p>

                  <h3 className="text-xl font-semibold text-blue-800 mb-4">Our Process</h3>
                  <div className="space-y-3">
                    {details.process?.map((step, index) => (
                      <motion.div 
                        key={index} 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center"
                      >
                        <div className="w-7 h-7 bg-gradient-to-br from-blue-500 to-cyan-500 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-3 shadow-md">
                          {index + 1}
                        </div>
                        <span className="text-gray-700">{step}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-blue-800 mb-4">Technologies</h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {details.technologies?.map((tech, index) => (
                      <motion.span 
                        key={index} 
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.05 }}
                        className="px-3 py-2 bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-700 rounded-full text-sm border border-blue-200 hover:shadow-md hover:from-blue-100 hover:to-cyan-100 transition-all duration-300"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border border-blue-100">
                      <Clock className="w-5 h-5 text-blue-500 mr-3" />
                      <div>
                        <div className="font-medium text-blue-800">Timeline</div>
                        <div className="text-blue-600 text-sm">{details.timeline}</div>
                      </div>
                    </div>

                    <div className="p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl border border-green-100">
                      <h4 className="font-medium text-green-800 mb-2 flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                        Deliverables
                      </h4>
                      <div className="space-y-1">
                        {details.deliverables?.map((item, index) => (
                          <div key={index} className="text-green-700 text-sm ml-7">• {item}</div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-blue-100 flex flex-col sm:flex-row gap-4">
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold py-4 px-6 rounded-2xl hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-500 relative overflow-hidden group"
                >
                  <span className="relative z-10">Start Project Discussion</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 border-2 border-blue-300 text-blue-700 font-semibold py-4 px-6 rounded-2xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 hover:shadow-lg transition-all duration-500"
                >
                  Request Quote
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [, navigate] = useLocation();

  const services = [
    {
      title: "Website Development",
      gradient: "from-[#3480cb] to-[#52b9fd]",
      delay: 0
    },
    {
      title: "Mobile Application",
      gradient: "from-[#3480cb] to-[#52b9fd]",
      delay: 0.1
    },
    {
      title: "Software Development",
      gradient: "from-[#3480cb] to-[#52b9fd]",
      delay: 0.2
    },
    {
      title: "AI & Automation",
      gradient: "from-[#3480cb] to-[#52b9fd]",
      delay: 0.3
    },
    {
      title: "Consulting",
      gradient: "from-[#3480cb] to-[#52b9fd]",
      delay: 0.4
    },
    {
      title: "Digital Marketing",
      gradient: "from-[#3480cb] to-[#52b9fd]",
      delay: 0.5
    }
  ];

  const handleLearnMore = (service) => {
<<<<
    setSelectedService(service);
    setModalOpen(true);
  };
====
    // Modal disabled as per request to keep it simple
  };
>>>>
  return (
    <>
      <section id="services" className="py-24 bg-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-300/10 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-300/10 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-float-delayed"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight tracking-tight">
              Our Services in Transforming Business Through Innovative Technology
            </h2>
          </motion.div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: service.delay, ease: "easeOut" }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <GlassCard className="rounded-3xl overflow-hidden h-full hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-700 transform group-hover:scale-[1.03] group-hover:-translate-y-2 relative border-2 hover:border-blue-300/50 flex flex-col">
                  <div className={`h-2 w-full bg-gradient-to-r ${service.gradient}`}></div>
                  <div className="p-8 text-center flex-1 flex items-center justify-center min-h-[160px]">
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500">
                      {service.title}
                    </h3>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

<<<<
      {/* Service Details Modal */}
      <ServiceModal 
        service={selectedService} 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
      />
====
>>>>
      <style>{`
              @keyframes float {
                0%, 100% { transform: translate(0px, 0px) scale(1) rotate(0deg); }
                33% { transform: translate(30px, -30px) scale(1.05) rotate(1deg); }
                66% { transform: translate(-20px, 20px) scale(0.95) rotate(-1deg); }
              }
              @keyframes float-delayed {
                0%, 100% { transform: translate(0px, 0px) scale(1) rotate(0deg); }
                33% { transform: translate(-30px, 30px) scale(1.05) rotate(-1deg); }
                66% { transform: translate(20px, -20px) scale(0.95) rotate(1deg); }
              }
              .animate-float {
                animation: float 15s ease-in-out infinite;
              }
              .animate-float-delayed {
                animation: float-delayed 15s ease-in-out infinite;
                animation-delay: 5s;
              }
      `}</style>
    </>
  );
}
