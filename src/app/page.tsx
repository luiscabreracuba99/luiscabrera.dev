export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-white">LC</div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-white/80 hover:text-white transition-colors">About</a>
              <a href="#skills" className="text-white/80 hover:text-white transition-colors">Skills</a>
              <a href="#experience" className="text-white/80 hover:text-white transition-colors">Experience</a>
              <a href="#projects" className="text-white/80 hover:text-white transition-colors">Projects</a>
              <a href="#contact" className="text-white/80 hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
            <span className="text-white/80 text-sm">Available for opportunities</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
            Luis Cabrera
          </h1>
          <h2 className="text-3xl md:text-4xl text-blue-300 mb-8 font-light">
            Full Stack Engineer
          </h2>
          <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed mb-12">
            Building scalable SaaS applications with Next.js and Java Spring Boot. 
            Specialized in API integrations, real-time data synchronization, and cloud infrastructure.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="https://www.linkedin.com/in/luiscabreralopez/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
            >
              <span className="relative z-10">Connect on LinkedIn</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <a
              href="mailto:luiscabreracuba99@gmail.com"
              className="group px-8 py-4 border-2 border-white/30 text-white rounded-xl font-medium transition-all duration-300 hover:bg-white/10 hover:border-white/50 hover:scale-105"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
              About Me
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-xl text-white/80 leading-relaxed">
                I&apos;m a Full Stack Engineer with experience in building scalable SaaS applications 
                that boost user data security and application performance. Currently pursuing my 
                Bachelor&apos;s in Computer Science at Florida International University.
              </p>
              <p className="text-xl text-white/80 leading-relaxed">
                I specialize in connecting multiple marketplace APIs, improving data synchronization, 
                and reducing manual data entry through intelligent automation.
              </p>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/20 shadow-2xl">
                <h4 className="text-2xl font-semibold text-white mb-6">Quick Facts</h4>
                <div className="space-y-4">
                  {[
                    { icon: "🎓", text: "Florida International University (Expected May 2025)" },
                    { icon: "🚀", text: "Co-Founder at ResellSync" },
                    { icon: "💼", text: "CEO at Wegowefix" },
                    { icon: "⚡", text: "Full Stack Development Expert" }
                  ].map((fact, index) => (
                    <div key={index} className="flex items-center space-x-4 p-3 bg-white/5 rounded-lg">
                      <span className="text-2xl">{fact.icon}</span>
                      <span className="text-white/80">{fact.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Skills & Technologies
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
              <div key={index} className="group relative">
                <div className={`bg-gradient-to-br ${group.gradient} backdrop-blur-sm p-6 rounded-2xl border border-white/20 shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl`}>
                  <div className="text-4xl mb-4">{group.icon}</div>
                  <h4 className="font-semibold text-white text-lg mb-4">{group.category}</h4>
                  <ul className="space-y-2">
                    {group.skills.map((skill, skillIndex) => (
                      <li key={skillIndex} className="text-white/70 text-sm flex items-center">
                        <span className="w-2 h-2 bg-white/50 rounded-full mr-2"></span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Experience
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>
            
            <div className="space-y-12">
              <div className="relative pl-16">
                <div className="absolute left-6 w-4 h-4 bg-blue-500 rounded-full border-4 border-slate-900"></div>
                <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/20 shadow-xl">
                  <h4 className="text-2xl font-semibold text-white mb-2">
                    Full Stack Engineer & Co-Founder
                  </h4>
                  <p className="text-blue-300 font-medium text-lg mb-2">ResellSync • Miami, FL</p>
                  <p className="text-white/60 text-sm mb-4">January 2024 - Present</p>
                  <ul className="text-white/80 space-y-2 text-sm">
                    <li>• Built full-stack SaaS app with Next.js frontend and Java 21 Spring Boot backend</li>
                    <li>• Integrated marketplace APIs (eBay, Amazon, Back Market, Swappa, Reebelo, Walmart)</li>
                    <li>• Architected scalable backend with clean layered design and observability</li>
                    <li>• Migrated infrastructure from AWS to IONOS, reducing operational costs</li>
                  </ul>
                </div>
              </div>
              
              <div className="relative pl-16">
                <div className="absolute left-6 w-4 h-4 bg-purple-500 rounded-full border-4 border-slate-900"></div>
                <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/20 shadow-xl">
                  <h4 className="text-2xl font-semibold text-white mb-2">
                    Software Engineer & CEO
                  </h4>
                  <p className="text-purple-300 font-medium text-lg mb-2">Wegowefix • Miami, FL</p>
                  <p className="text-white/60 text-sm mb-4">January 2021 - December 2024</p>
                  <ul className="text-white/80 space-y-2 text-sm">
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
      <section id="projects" className="py-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Featured Project
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="relative group">
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:shadow-blue-500/25">
              <div className="flex items-center justify-between mb-6">
                <h4 className="text-3xl font-bold text-white">ResellSync</h4>
                <div className="flex space-x-2">
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Next.js</span>
                  <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">Java</span>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">SaaS</span>
                </div>
              </div>
              
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                A comprehensive SaaS platform for phone resellers to manage inventory, orders, and listings 
                across multiple marketplaces including eBay, Reebelo, and BackMarket.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-4">
                  <h5 className="font-semibold text-white text-lg mb-3">Key Features</h5>
                  <div className="space-y-3">
                    {[
                      "Real-time inventory synchronization",
                      "Multi-marketplace listing management", 
                      "Automated order processing",
                      "Advanced analytics and reporting"
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span className="text-white/70">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h5 className="font-semibold text-white text-lg mb-3">Technologies</h5>
                  <div className="space-y-3">
                    {[
                      "Next.js frontend",
                      "Java Spring Boot backend",
                      "PostgreSQL database", 
                      "AWS/IONOS infrastructure"
                    ].map((tech, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        <span className="text-white/70">{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-full">
                  <span className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></span>
                  <span className="text-green-300 font-medium">Reduced listing errors by 40%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Let&apos;s Connect
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="text-center">
            <p className="text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
              I&apos;m always interested in new opportunities and collaborations. 
              Feel free to reach out if you&apos;d like to discuss a project or just say hello!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a
                href="mailto:luiscabreracuba99@gmail.com"
                className="group relative px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
              >
                <span className="relative z-10">luiscabreracuba99@gmail.com</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              
              <a
                href="https://www.linkedin.com/in/luiscabreralopez/"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-10 py-4 border-2 border-white/30 text-white rounded-xl font-medium transition-all duration-300 hover:bg-white/10 hover:border-white/50 hover:scale-105"
              >
                LinkedIn Profile
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-2xl font-bold text-white mb-4">LC</div>
          <p className="text-white/60 mb-6">
            © 2024 Luis Cabrera. Built with Next.js and Tailwind CSS.
          </p>
          <div className="flex justify-center space-x-6">
            <a href="mailto:luiscabreracuba99@gmail.com" className="text-white/60 hover:text-white transition-colors">
              Email
            </a>
            <a href="https://www.linkedin.com/in/luiscabreralopez/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
