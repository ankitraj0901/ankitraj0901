import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-subtle">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float delay-500" />
      </div>

      <div className="container-narrow mx-auto section-padding relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-card rounded-full shadow-card mb-8 animate-fade-up">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-muted-foreground">
              Open to opportunities
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 animate-fade-up delay-100">
            Hi, I'm{" "}
            <span className="text-gradient">Ankit Raj</span>
          </h1>

          {/* Role */}
          <p className="text-xl sm:text-2xl font-semibold text-foreground mb-4 animate-fade-up delay-200">
            Software Engineer @ Accenture
          </p>

          {/* Summary */}
          <p className="text-lg text-muted-foreground leading-relaxed mb-8 animate-fade-up delay-300 max-w-2xl mx-auto">
            Full-stack developer with a passion for building scalable web applications 
            and AI-powered solutions. I specialize in crafting clean, performant 
            interfaces backed by robust architecture.
          </p>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 mb-10 animate-fade-up delay-400">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-card rounded-xl shadow-card hover:shadow-elevated hover:-translate-y-1 transition-all duration-300 text-muted-foreground hover:text-foreground"
              aria-label="GitHub"
            >
              <Github size={22} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-card rounded-xl shadow-card hover:shadow-elevated hover:-translate-y-1 transition-all duration-300 text-muted-foreground hover:text-foreground"
              aria-label="LinkedIn"
            >
              <Linkedin size={22} />
            </a>
            <a
              href="mailto:ankit@example.com"
              className="p-3 bg-card rounded-xl shadow-card hover:shadow-elevated hover:-translate-y-1 transition-all duration-300 text-muted-foreground hover:text-foreground"
              aria-label="Email"
            >
              <Mail size={22} />
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up delay-500">
            <a
              href="#projects"
              className="px-8 py-4 bg-gradient-primary text-primary-foreground rounded-xl font-semibold hover:opacity-90 transition-all duration-300 shadow-elevated hover:shadow-glow"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-card text-foreground rounded-xl font-semibold hover:bg-secondary transition-all duration-300 shadow-card border border-border"
            >
              Get In Touch
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-up delay-500">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <span className="text-xs font-medium">Scroll Down</span>
            <ArrowDown size={18} className="animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
