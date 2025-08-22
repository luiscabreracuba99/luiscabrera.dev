import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-800 dark:text-white mb-6">
            Luis Cabrera
          </h1>
          <h2 className="text-2xl md:text-3xl text-blue-600 dark:text-blue-400 mb-8 font-medium">
            Full Stack Engineer
          </h2>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Building scalable SaaS applications with Next.js and Java Spring Boot. 
            Specialized in API integrations, real-time data synchronization, and cloud infrastructure.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.linkedin.com/in/luiscabreralopez/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Connect on LinkedIn
            </a>
            <a
              href="mailto:luiscabreracuba99@gmail.com"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 bg-white dark:bg-slate-800">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-slate-800 dark:text-white mb-8 text-center">
            About Me
          </h3>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                I'm a Full Stack Engineer with experience in building scalable SaaS applications 
                that boost user data security and application performance. Currently pursuing my 
                Bachelor's in Computer Science at Florida International University.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                I specialize in connecting multiple marketplace APIs, improving data synchronization, 
                and reducing manual data entry through intelligent automation.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 p-8 rounded-2xl">
              <h4 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">Quick Facts</h4>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>• Florida International University (Expected May 2025)</li>
                <li>• Co-Founder at ResellSync</li>
                <li>• CEO at Wegowefix</li>
                <li>• Full Stack Development Expert</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-slate-800 dark:text-white mb-8 text-center">
            Skills & Technologies
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { category: "Frontend", skills: ["Next.js", "React.js", "TypeScript", "Flutter"] },
              { category: "Backend", skills: ["Java", "Spring Boot", "Hibernate", "REST APIs"] },
              { category: "Database", skills: ["PostgreSQL", "MySQL", "SQL"] },
              { category: "DevOps", skills: ["AWS", "Docker", "Git", "CI/CD"] }
            ].map((group, index) => (
              <div key={index} className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm">
                <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-4">{group.category}</h4>
                <ul className="space-y-2">
                  {group.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-slate-600 dark:text-slate-300 text-sm">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 px-6 bg-white dark:bg-slate-800">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-slate-800 dark:text-white mb-8 text-center">
            Experience
          </h3>
          <div className="space-y-8">
            <div className="border-l-4 border-blue-600 pl-6">
              <h4 className="text-xl font-semibold text-slate-800 dark:text-white">
                Full Stack Engineer & Co-Founder
              </h4>
              <p className="text-blue-600 dark:text-blue-400 font-medium">ResellSync • Miami, FL</p>
              <p className="text-slate-500 dark:text-slate-400 text-sm mb-3">January 2024 - Present</p>
              <ul className="text-slate-600 dark:text-slate-300 space-y-2 text-sm">
                <li>• Built full-stack SaaS app with Next.js frontend and Java 21 Spring Boot backend</li>
                <li>• Integrated marketplace APIs (eBay, Amazon, Back Market, Swappa, Reebelo, Walmart)</li>
                <li>• Architected scalable backend with clean layered design and observability</li>
                <li>• Migrated infrastructure from AWS to IONOS, reducing operational costs</li>
              </ul>
            </div>
            
            <div className="border-l-4 border-blue-600 pl-6">
              <h4 className="text-xl font-semibold text-slate-800 dark:text-white">
                Software Engineer & CEO
              </h4>
              <p className="text-blue-600 dark:text-blue-400 font-medium">Wegowefix • Miami, FL</p>
              <p className="text-slate-500 dark:text-slate-400 text-sm mb-3">January 2021 - December 2024</p>
              <ul className="text-slate-600 dark:text-slate-300 space-y-2 text-sm">
                <li>• Built internal Java platform for sales tracking and business reports</li>
                <li>• Automated email marketing with data extraction and targeted campaigns</li>
                <li>• Launched custom WordPress checkout with PHP/JS and API integrations</li>
                <li>• Led responsive UI/UX development and technical SEO optimization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-slate-800 dark:text-white mb-8 text-center">
            Featured Project
          </h3>
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg">
            <h4 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">ResellSync</h4>
            <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
              A comprehensive SaaS platform for phone resellers to manage inventory, orders, and listings 
              across multiple marketplaces including eBay, Reebelo, and BackMarket.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h5 className="font-semibold text-slate-800 dark:text-white mb-2">Key Features</h5>
                <ul className="text-slate-600 dark:text-slate-300 text-sm space-y-1">
                  <li>• Real-time inventory synchronization</li>
                  <li>• Multi-marketplace listing management</li>
                  <li>• Automated order processing</li>
                  <li>• Advanced analytics and reporting</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-slate-800 dark:text-white mb-2">Technologies</h5>
                <ul className="text-slate-600 dark:text-slate-300 text-sm space-y-1">
                  <li>• Next.js frontend</li>
                  <li>• Java Spring Boot backend</li>
                  <li>• PostgreSQL database</li>
                  <li>• AWS/IONOS infrastructure</li>
                </ul>
              </div>
            </div>
            <div className="text-center">
              <span className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                ✓ Reduced listing errors by 40%
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6 bg-white dark:bg-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-slate-800 dark:text-white mb-8">
            Let's Connect
          </h3>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
            I'm always interested in new opportunities and collaborations. 
            Feel free to reach out if you'd like to discuss a project or just say hello!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:luiscabreracuba99@gmail.com"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              luiscabreracuba99@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/luiscabreralopez/"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              LinkedIn Profile
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-slate-200 dark:border-slate-700">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-slate-500 dark:text-slate-400">
            © 2024 Luis Cabrera. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}
