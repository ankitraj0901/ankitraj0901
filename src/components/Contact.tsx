import { Mail, Github, Linkedin, MapPin, Send } from "lucide-react";

const Contact = () => {
  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "ankitraj9812@gmail.com",
      href: "mailto:ankitraj9812@gmail.com",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/ankitraj0901",
      href: "https://github.com/ankitraj0901",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/ankitraj0901",
      href: "https://linkedin.com/in/ankitraj0901",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Bangalore, India",
      href: null,
    },
  ];

  return (
    <section id="contact" className="section-padding bg-card">
      <div className="container-narrow mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-accent font-semibold text-sm tracking-wide uppercase mb-3">
            Get In Touch
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Let's Work Together
          </h2>
          <div className="w-16 h-1 bg-gradient-accent mx-auto rounded-full mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, 
            or ways to collaborate. Feel free to reach out!
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Contact Cards */}
          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            {contactLinks.map((contact) => (
              <div
                key={contact.label}
                className="p-6 bg-background rounded-2xl border border-border hover:shadow-card transition-all duration-300 group"
              >
                {contact.href ? (
                  <a
                    href={contact.href}
                    target={contact.href.startsWith("http") ? "_blank" : undefined}
                    rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-4"
                  >
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                      <contact.icon className="w-5 h-5 text-accent group-hover:text-accent-foreground transition-colors" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-0.5">
                        {contact.label}
                      </p>
                      <p className="font-medium text-foreground group-hover:text-accent transition-colors">
                        {contact.value}
                      </p>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                      <contact.icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-0.5">
                        {contact.label}
                      </p>
                      <p className="font-medium text-foreground">{contact.value}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center p-8 bg-gradient-primary rounded-3xl relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary-foreground/5 rounded-full blur-2xl" />

            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-primary-foreground mb-4">
                Ready to Start a Conversation?
              </h3>
              <p className="text-primary-foreground/80 mb-6 max-w-md mx-auto">
                Whether you have a project in mind or just want to connect, 
                I'd love to hear from you.
              </p>
              <a
                href="mailto:ankit.raj@example.com"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary-foreground text-primary rounded-xl font-semibold hover:opacity-90 transition-all duration-300 shadow-elevated"
              >
                <Send size={18} />
                Send Message
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
