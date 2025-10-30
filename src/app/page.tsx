'use client';

import { useState } from 'react';
import { AnimatedSection } from '../components/AnimatedSection';
import { CustomCursor } from '../components/CustomCursor';
import { GlitchText } from '../components/GlitchText';
import { InteractiveTerminal } from '../components/InteractiveTerminal';
import { SkillsRadar } from '../components/SkillsRadar';
//update for deploy

export default function Home() {
  const [hackerMode, setHackerMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <div className={`min-h-screen transition-all duration-1000 ${
      hackerMode 
        ? 'bg-gradient-to-br from-green-900 via-black to-green-900' 
        : 'bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900'
    }`}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl sm:text-2xl font-bold text-white">LC</div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8 items-center">
              <a href="#about" className="cursor-hover text-white/80 hover:text-white transition-colors">About</a>
              <a href="#skills" className="cursor-hover text-white/80 hover:text-white transition-colors">Skills</a>
              <a href="#experience" className="cursor-hover text-white/80 hover:text-white transition-colors">Experience</a>
              <a href="#projects" className="cursor-hover text-white/80 hover:text-white transition-colors">Projects</a>
              <a href="#contact" className="cursor-hover text-white/80 hover:text-white transition-colors">Contact</a>
              
              {/* Hacker Mode Toggle - Desktop */}
              <button
                onClick={() => setHackerMode(!hackerMode)}
                className={`cursor-hover px-3 py-1 rounded-full text-xs font-mono transition-all duration-300 ${
                  hackerMode 
                    ? 'bg-green-500/20 text-green-400 border border-green-500/40' 
                    : 'bg-blue-500/20 text-blue-400 border border-blue-500/40'
                }`}
              >
                {hackerMode ? 'HACKER_MODE' : 'NORMAL_MODE'}
              </button>
            </div>
            
            {/* Mobile Navigation */}
            <div className="md:hidden flex items-center space-x-4">
              {/* Hacker Mode Toggle - Mobile */}
              <button
                onClick={() => setHackerMode(!hackerMode)}
                className={`px-2 py-1 rounded text-xs font-mono transition-all duration-300 ${
                  hackerMode 
                    ? 'bg-green-500/20 text-green-400 border border-green-500/40' 
                    : 'bg-blue-500/20 text-blue-400 border border-blue-500/40'
                }`}
              >
                {hackerMode ? 'HACK' : 'NORM'}
              </button>
              
              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-white/80 hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Mobile Menu Dropdown */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-white/20">
              <div className="flex flex-col space-y-4 pt-4">
                <a 
                  href="#about" 
                  className="text-white/80 hover:text-white transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </a>
                <a 
                  href="#skills" 
                  className="text-white/80 hover:text-white transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Skills
                </a>
                <a 
                  href="#experience" 
                  className="text-white/80 hover:text-white transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Experience
                </a>
                <a 
                  href="#projects" 
                  className="text-white/80 hover:text-white transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Projects
                </a>
                <a 
                  href="#contact" 
                  className="text-white/80 hover:text-white transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 overflow-hidden">
        {/* Animated Particles Background */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating Tech Icons */}
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute text-white/10 animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: `${6 + Math.random() * 4}s`,
                fontSize: `${12 + Math.random() * 20}px`,
              }}
            >
              {['</>', '{ }', '[ ]', '()', '&&', '||', '=>', '++', '--', '//', '/*', '*/', '==', '!=', '>=', '<=', '+=', '-=', '*=', '/='][i % 18]}
            </div>
          ))}
          
          {/* Floating Dots */}
          {[...Array(15)].map((_, i) => (
            <div
              key={`dot-${i}`}
              className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            />
          ))}
          
          {/* Floating Lines */}
          {[...Array(8)].map((_, i) => (
            <div
              key={`line-${i}`}
              className="absolute h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${50 + Math.random() * 100}px`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${3 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="absolute top-20 right-4 sm:right-10 w-48 h-48 sm:w-72 sm:h-72 bg-blue-500/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-4 sm:left-10 w-64 h-64 sm:w-96 sm:h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6 sm:mb-8">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
            <span className="text-white/80 text-xs sm:text-sm">Available for opportunities</span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            <GlitchText text="Luis Cabrera" glitchIntensity={0.05} />
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-blue-300 mb-6 sm:mb-8 font-light">
            Full Stack Engineer
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed mb-8 sm:mb-12 px-4">
            Building scalable SaaS applications with Next.js and Java Spring Boot. 
            Specialized in API integrations, real-time data synchronization, and cloud infrastructure.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4">
                        <a
              href="https://www.linkedin.com/in/luiscabreralopez/"
            target="_blank"
            rel="noopener noreferrer"
              className="cursor-hover group relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 text-center"
            >
              <span className="relative z-10">Connect on LinkedIn</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
          <a
              href="mailto:luiscabreracuba99@gmail.com"
              className="cursor-hover group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-white/30 text-white rounded-xl font-medium transition-all duration-300 hover:bg-white/10 hover:border-white/50 hover:scale-105 text-center"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-20 px-4 sm:px-6 relative">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection delay={200} className="text-center mb-12 sm:mb-16">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              About Me
            </h3>
            <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </AnimatedSection>
          
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <AnimatedSection animation="fade-left" delay={400} className="space-y-4 sm:space-y-6">
              <p className="text-lg sm:text-xl text-white/80 leading-relaxed">
                I&apos;m a Full Stack Engineer with experience in building scalable SaaS applications 
                that boost user data security and application performance. Currently pursuing my 
                Bachelor&apos;s in Computer Science at Florida International University.
              </p>
              <p className="text-lg sm:text-xl text-white/80 leading-relaxed">
                I specialize in connecting multiple marketplace APIs, improving data synchronization, 
                and reducing manual data entry through intelligent automation.
              </p>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-right" delay={600} className="relative">
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-white/20 shadow-2xl">
                <h4 className="text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6">Quick Facts</h4>
                <div className="space-y-3 sm:space-y-4">
                  {[
                    { icon: "🎓", text: "Florida International University (Expected May 2025)" },
                    { icon: "🚀", text: "Software Engineer at ResellSync" },
                    { icon: "⚡", text: "Full Stack Development Expert" }
                  ].map((fact, index) => (
                    <AnimatedSection 
                      key={index} 
                      delay={800 + index * 100}
                      className="flex items-center space-x-3 p-2 sm:p-3 bg-white/5 rounded-lg"
                    >
                      <span className="text-xl sm:text-2xl">{fact.icon}</span>
                      <span className="text-white/80 text-sm sm:text-base">{fact.text}</span>
                    </AnimatedSection>
                  ))}
                </div>
              </div>
            </AnimatedSection>
            
            {/* Interactive Terminal */}
            <AnimatedSection animation="fade-up" delay={1000} className="mt-8">
              <InteractiveTerminal />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 sm:py-20 px-4 sm:px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 opacity-0 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Skills & Technologies
            </h3>
            <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
            {[
              { 
                category: "Frontend", 
                icon: "🎨",
                skills: ["Next.js", "React.js", "TypeScript", "Flutter"],
                gradient: "from-blue-500/20 to-cyan-500/20"
              },
              { 
                category: "Backend", 
                icon: "⚙️",
                skills: ["Java", "Spring Boot", "Hibernate", "REST APIs"],
                gradient: "from-purple-500/20 to-pink-500/20"
              },
              { 
                category: "Database", 
                icon: "🗄️",
                skills: ["PostgreSQL", "MySQL", "SQL"],
                gradient: "from-green-500/20 to-emerald-500/20"
              },
              { 
                category: "DevOps", 
                icon: "🚀",
                skills: ["AWS", "Docker", "Git", "CI/CD"],
                gradient: "from-orange-500/20 to-red-500/20"
              }
            ].map((group, index) => (
              <div key={index} className="group relative opacity-0 animate-fade-in-up" style={{animationDelay: `${0.4 + index * 0.1}s`}}>
                <div className={`bg-gradient-to-br ${group.gradient} backdrop-blur-sm p-4 sm:p-6 rounded-2xl border border-white/20 shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:rotate-1`}>
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{group.icon}</div>
                  <h4 className="font-semibold text-white text-base sm:text-lg mb-3 sm:mb-4">{group.category}</h4>
                  <ul className="space-y-2">
                    {group.skills.map((skill, skillIndex) => (
                      <li key={skillIndex} className="text-white/70 text-xs sm:text-sm flex items-center">
                        <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white/50 rounded-full mr-2"></span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          
          {/* Skills Radar Chart */}
          <AnimatedSection animation="fade-up" delay={800} className="max-w-2xl mx-auto">
            <SkillsRadar />
          </AnimatedSection>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 sm:py-20 px-4 sm:px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 opacity-0 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Experience
            </h3>
            <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="relative">
            <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>
            
            <div className="space-y-8 sm:space-y-12">
              <div className="relative pl-12 sm:pl-16 opacity-0 animate-fade-in-left" style={{animationDelay: '0.4s'}}>
                <div className="absolute left-2 sm:left-6 w-3 h-3 sm:w-4 sm:h-4 bg-blue-500 rounded-full border-4 border-slate-900"></div>
                <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-white/20 shadow-xl hover:scale-[1.02] transition-transform duration-300">
                  <h4 className="text-xl sm:text-2xl font-semibold text-white mb-2">
                    Full Stack Engineer
                  </h4>
                  <p className="text-blue-300 font-medium text-base sm:text-lg mb-2">ResellSync • Miami, FL</p>
                  <p className="text-white/60 text-xs sm:text-sm mb-3 sm:mb-4">January 2024 - Present</p>
                  <ul className="text-white/80 space-y-2 text-xs sm:text-sm">
                    <li>• Built full-stack SaaS app with Next.js frontend and Java 21 Spring Boot backend</li>
                    <li>• Integrated marketplace APIs (eBay, Amazon, Back Market, Swappa, Reebelo, Walmart)</li>
                    <li>• Architected scalable backend with clean layered design and observability</li>
                    <li>• Migrated infrastructure from AWS to IONOS, reducing operational costs</li>
                  </ul>
                </div>
              </div>
              
              <div className="relative pl-12 sm:pl-16 opacity-0 animate-fade-in-right" style={{animationDelay: '0.6s'}}>
                <div className="absolute left-2 sm:left-6 w-3 h-3 sm:w-4 sm:h-4 bg-purple-500 rounded-full border-4 border-slate-900"></div>
                <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-white/20 shadow-xl hover:scale-[1.02] transition-transform duration-300">
                  <h4 className="text-xl sm:text-2xl font-semibold text-white mb-2">
                    Software Engineer
                  </h4>
                  <p className="text-purple-300 font-medium text-base sm:text-lg mb-2">Wegowefix • Miami, FL</p>
                  <p className="text-white/60 text-xs sm:text-sm mb-3 sm:mb-4">January 2021 - December 2024</p>
                  <ul className="text-white/80 space-y-2 text-xs sm:text-sm">
                    <li>• Built internal Java platform for sales tracking and business reports</li>
                    <li>• Automated email marketing with data extraction and targeted campaigns</li>
                    <li>• Launched custom WordPress checkout with PHP/JS and API integrations</li>
                    <li>• Led responsive UI/UX development and technical SEO optimization</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 sm:py-20 px-4 sm:px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 opacity-0 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Featured Project
            </h3>
            <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="relative group opacity-0 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/20 shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:shadow-blue-500/25 hover:rotate-1">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-0 mb-6">
                <h4 className="text-2xl sm:text-3xl font-bold text-white">ResellSync</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 sm:px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs sm:text-sm">Next.js</span>
                  <span className="px-2 sm:px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-xs sm:text-sm">Java</span>
                  <span className="px-2 sm:px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs sm:text-sm">SaaS</span>
                </div>
              </div>
              
              <p className="text-lg sm:text-xl text-white/80 mb-6 sm:mb-8 leading-relaxed">
                A comprehensive SaaS platform for phone resellers to manage inventory, orders, and listings 
                across multiple marketplaces including eBay, Reebelo, and BackMarket.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
                <div className="space-y-3 sm:space-y-4">
                  <h5 className="font-semibold text-white text-base sm:text-lg mb-2 sm:mb-3">Key Features</h5>
                  <div className="space-y-2 sm:space-y-3">
                    {[
                      "Real-time inventory synchronization",
                      "Multi-marketplace listing management", 
                      "Automated order processing",
                      "Advanced analytics and reporting"
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2 sm:space-x-3 opacity-0 animate-fade-in-left" style={{animationDelay: `${0.6 + index * 0.1}s`}}>
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full flex-shrink-0"></div>
                        <span className="text-white/70 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-3 sm:space-y-4">
                  <h5 className="font-semibold text-white text-base sm:text-lg mb-2 sm:mb-3">Technologies</h5>
                  <div className="space-y-2 sm:space-y-3">
                    {[
                      "Next.js frontend",
                      "Java Spring Boot backend",
                      "PostgreSQL database", 
                      "AWS/IONOS infrastructure"
                    ].map((tech, index) => (
                      <div key={index} className="flex items-center space-x-2 sm:space-x-3 opacity-0 animate-fade-in-right" style={{animationDelay: `${0.8 + index * 0.1}s`}}>
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full flex-shrink-0"></div>
                        <span className="text-white/70 text-sm">{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="text-center space-y-4">
                <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-full opacity-0 animate-fade-in-up" style={{animationDelay: '1s'}}>
                  <span className="w-2 h-2 sm:w-3 sm:h-3 bg-green-400 rounded-full mr-2 sm:mr-3 animate-pulse flex-shrink-0"></span>
                  <span className="text-green-300 font-medium text-sm sm:text-base">Reduced listing errors by 40%</span>
                </div>
                
                {/* Animated Counter */}
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="bg-white/5 rounded-lg p-3">
                    <div className="text-2xl font-bold text-blue-400">95%</div>
                    <div className="text-xs text-white/60">Code Quality</div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3">
                    <div className="text-2xl font-bold text-green-400">40%</div>
                    <div className="text-xs text-white/60">Error Reduction</div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3">
                    <div className="text-2xl font-bold text-purple-400">3x</div>
                    <div className="text-xs text-white/60">Performance</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-20 px-4 sm:px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 opacity-0 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Let&apos;s Connect
            </h3>
            <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="text-center">
            <p className="text-lg sm:text-xl text-white/80 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4 opacity-0 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              I&apos;m always interested in new opportunities and collaborations. 
              Feel free to reach out if you&apos;d like to discuss a project or just say hello!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4">
              <a
                href="mailto:luiscabreracuba99@gmail.com"
                className="group relative w-full sm:w-auto px-6 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 text-center opacity-0 animate-fade-in-up"
                style={{animationDelay: '0.6s'}}
              >
                <span className="relative z-10">luiscabreracuba99@gmail.com</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              
              <a
                href="https://www.linkedin.com/in/luiscabreralopez/"
          target="_blank"
          rel="noopener noreferrer"
                className="group w-full sm:w-auto px-6 sm:px-10 py-3 sm:py-4 border-2 border-white/30 text-white rounded-xl font-medium transition-all duration-300 hover:bg-white/10 hover:border-white/50 hover:scale-105 text-center opacity-0 animate-fade-in-up"
                style={{animationDelay: '0.8s'}}
              >
                LinkedIn Profile
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 sm:py-12 px-4 sm:px-6 border-t border-white/20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">LC</div>
          <p className="text-white/60 mb-4 sm:mb-6 text-sm sm:text-base">
            © 2024 Luis Cabrera. Built with Next.js and Tailwind CSS.
          </p>
          <div className="flex justify-center space-x-4 sm:space-x-6">
            <a href="mailto:luiscabreracuba99@gmail.com" className="text-white/60 hover:text-white transition-colors text-sm sm:text-base">
              Email
            </a>
            <a href="https://www.linkedin.com/in/luiscabreralopez/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors text-sm sm:text-base">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
      
      {/* Custom Cursor */}
      <CustomCursor />
    </div>
  );
}
