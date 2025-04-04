
import { ArrowDown, Code, File, Mail, Linkedin, Phone } from "lucide-react";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/contact-form";
import { ProjectCard } from "@/components/project-card";
import { SkillCard } from "@/components/skill-card";

const Index = () => {
  return (
    <ThemeProvider defaultTheme="light">
      <Header />

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen pt-16 flex items-center">
        <div className="container-custom">
          <div className="flex flex-col items-center text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
              Hi, I'm <span className="text-primary">Nhlawuleko Ntimbani</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              A passionate software developer focused on creating elegant solutions to complex problems
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="#contact">Get in Touch</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#projects">View Projects</a>
              </Button>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
              <ArrowDown />
              <span className="sr-only">Scroll down</span>
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section bg-muted/30">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>

            <div className="space-y-6 text-lg">
              <p>
                I'm Nhlawuleko Ntimbani, and I'm passionate about programming and problem solving. 
                I enjoy the challenge of tackling complex tasks and finding creative solutions. 
                I find great satisfaction in working on projects that push me to think outside the box and learn new things.
              </p>
              <p>
                My passion for programming was ignited during my undergraduate studies, where I learned the basics of coding and 
                saw firsthand how technology could improve people's lives. Since then, I've been dedicated to honing my skills 
                and exploring new ways to use technology to make a positive impact.
              </p>
              <h3 className="text-xl font-semibold mt-8 mb-4">Educational Background</h3>
              <p>
                I am a college graduate from PLP Academy, holding a software development certificate.
              </p>

              <h3 className="text-xl font-semibold mt-8 mb-4">Interests</h3>
              <p>
                What excites me about tech is the potential for continuous innovation and impact. 
                I find it thrilling to explore the latest advancements in areas like artificial intelligence, 
                cloud computing, and cybersecurity, and to consider how these developments will shape the way we live and work.
              </p>
              <p>
                My professional interests center around designing and building software systems that are not only functional 
                and efficient, but also user-friendly and accessible. I believe that good software should be intuitive and 
                enjoyable to use, regardless of a person's technical background or ability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            <SkillCard
              title="HTML"
              icon={<File className="h-6 w-6" />}
              description="Creating structured, semantic markup for web applications with accessibility in mind."
            />
            <SkillCard
              title="CSS"
              icon={<File className="h-6 w-6" />}
              description="Designing responsive layouts and beautiful user interfaces with modern CSS techniques."
            />
            <SkillCard
              title="JavaScript"
              icon={<Code className="h-6 w-6" />}
              description="Building interactive web applications with modern JavaScript and popular frameworks."
            />
            <SkillCard
              title="Python"
              icon={<Code className="h-6 w-6" />}
              description="Developing efficient backend solutions, data analysis tools, and automation scripts."
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section bg-muted/30">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <ProjectCard
              title="Project 1"
              description="A full-stack application showcasing responsive design, API integration, and user authentication."
              imageUrl="/placeholder.svg"
              tags={["HTML", "CSS", "JavaScript", "Python"]}
              liveUrl="#"
              repoUrl="#"
            />
            <ProjectCard
              title="Project 2"
              description="A data visualization dashboard that processes and displays complex information in an intuitive interface."
              imageUrl="/placeholder.svg"
              tags={["HTML", "CSS", "JavaScript", "Python"]}
              liveUrl="#"
              repoUrl="#"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">Get In Touch</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-full text-primary">
                    <Mail className="h-5 w-5" />
                  </div>
                  <a href="mailto:Nhlawulekonzama@gmail.com" className="hover:text-primary transition-colors">
                    Nhlawulekonzama@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-full text-primary">
                    <Phone className="h-5 w-5" />
                  </div>
                  <a href="tel:+27715155495" className="hover:text-primary transition-colors">
                    +27 71 515 5495
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-full text-primary">
                    <Linkedin className="h-5 w-5" />
                  </div>
                  <a 
                    href="http://linkedin.com/in/nhlawuleko-nzama-438b9b218" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="hover:text-primary transition-colors"
                  >
                    LinkedIn Profile
                  </a>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-6">Send me a message</h3>
                <p className="text-muted-foreground mb-6">
                  Have a question or want to work together? Fill out the form and I'll get back to you as soon as possible.
                </p>
              </div>
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t">
        <div className="container-custom">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground">
              © {new Date().getFullYear()} Nhlawuleko Ntimbani. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a href="#home" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Back to top
              </a>
            </div>
          </div>
        </div>
      </footer>
    </ThemeProvider>
  );
};

export default Index;
