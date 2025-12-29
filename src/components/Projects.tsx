import { ExternalLink, Github, ArrowRight } from "lucide-react";

const projects = [
  {
    title: "LegalHelp",
    tagline: "Full-Stack Legal & Tax Services Platform",
    description:
      "A comprehensive web application simplifying legal and tax services. Features include tax prediction using ML, real-time chat between users and professionals, document management, and professional dashboards.",
    features: [
      "User authentication & profiles",
      "Tax prediction & optimization (New Tax Regime)",
      "Hire CAs & Lawyers with 1-to-1 chat",
      "Document upload & management",
      "Assignment tracking & deadlines",
    ],
    techStack: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Spring Boot",
      "MongoDB",
      "Supabase",
      "TalkJS",
      "ML Models",
    ],
    featured: true,
  },
  {
    title: "CNN Image Classifier",
    tagline: "Deep Learning for Image Recognition",
    description:
      "Built convolutional neural network models using TensorFlow for accurate image classification. Implemented data augmentation and transfer learning techniques for improved model performance.",
    features: [
      "Multi-class image classification",
      "Data augmentation pipeline",
      "Model optimization",
      "Performance visualization",
    ],
    techStack: ["TensorFlow", "Python", "Keras", "NumPy", "Matplotlib"],
    featured: false,
  },
  {
    title: "Financial Prediction Model",
    tagline: "ML-Powered Financial Analytics",
    description:
      "Developed machine learning models for financial return prediction, helping users make informed decisions based on historical data analysis and predictive algorithms.",
    features: [
      "Return prediction algorithms",
      "Historical data analysis",
      "Risk assessment metrics",
      "Interactive visualizations",
    ],
    techStack: ["Python", "Scikit-learn", "Pandas", "TensorFlow"],
    featured: false,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-card">
      <div className="container-narrow mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-accent font-semibold text-sm tracking-wide uppercase mb-3">
            Portfolio
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <div className="w-16 h-1 bg-gradient-accent mx-auto rounded-full" />
        </div>

        {/* Featured Project */}
        {projects
          .filter((p) => p.featured)
          .map((project) => (
            <div
              key={project.title}
              className="mb-12 p-8 bg-gradient-primary rounded-3xl text-primary-foreground relative overflow-hidden"
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary-foreground/5 rounded-full blur-2xl" />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-primary-foreground/20 rounded-full text-xs font-semibold uppercase tracking-wide">
                    Flagship Project
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-2">
                  {project.title}
                </h3>
                <p className="text-primary-foreground/80 font-medium mb-4">
                  {project.tagline}
                </p>
                <p className="text-primary-foreground/70 leading-relaxed mb-6 max-w-3xl">
                  {project.description}
                </p>

                {/* Features */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
                  {project.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-2 text-sm text-primary-foreground/80"
                    >
                      <ArrowRight size={14} className="text-accent" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 bg-primary-foreground/10 rounded-lg text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}

        {/* Other Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects
            .filter((p) => !p.featured)
            .map((project, index) => (
              <div
                key={project.title}
                className="p-6 bg-background rounded-2xl border border-border hover:shadow-elevated transition-all duration-300 group"
              >
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-accent font-medium text-sm mb-3">
                  {project.tagline}
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {project.features.slice(0, 3).map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <ArrowRight size={14} className="text-accent" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 bg-secondary text-secondary-foreground rounded-md text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
