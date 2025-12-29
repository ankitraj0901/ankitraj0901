import { Briefcase, MapPin, GraduationCap, Sparkles } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Briefcase,
      title: "Software Engineer",
      description: "Incoming @ Accenture",
    },
    {
      icon: GraduationCap,
      title: "MCA Graduate",
      description: "PES University, Bangalore",
    },
    {
      icon: MapPin,
      title: "Based in",
      description: "Bangalore, India",
    },
    {
      icon: Sparkles,
      title: "Focus Areas",
      description: "Full-Stack & AI/ML",
    },
  ];

  return (
    <section id="about" className="section-padding bg-card">
      <div className="container-narrow mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-accent font-semibold text-sm tracking-wide uppercase mb-3">
            About Me
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Building Digital Experiences
          </h2>
          <div className="w-16 h-1 bg-gradient-accent mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a Software Engineer with a strong foundation in full-stack development, 
              recently placed at <span className="text-foreground font-semibold">Accenture</span> through 
              on-campus recruitment at PES University.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My expertise spans from building responsive React interfaces to designing 
              scalable backend architectures. I'm particularly passionate about creating 
              applications that solve real-world problems, combining clean UI design with 
              robust functionality.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Beyond traditional web development, I've explored the fascinating world of 
              AI/ML, building CNN models for image classification and developing predictive 
              algorithms for financial applications.
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="p-6 bg-background rounded-2xl border border-border hover:shadow-card transition-all duration-300 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <item.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
