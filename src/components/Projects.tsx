import { ExternalLink, Github, ArrowRight } from "lucide-react";

const projects = [
  {
    title: "LegalHelp",
    tagline: "AI-Powered Legal & Tax Assistance Platform",
    description:
      "A full-stack legal-tech platform that connects users with real Chartered Accountants and Lawyers to resolve taxation and law-related issues, enhanced with Machine Learning predictions and an AI assistant. Designed as a production-style system.",
    features: [
      "Connect with verified CAs & Lawyers",
      "Real-time chat & secure document sharing",
      "Payment integration for consultations",
      "Taxable income prediction (ML-powered)",
      "Best tax-saving strategies suggestions",
      "Case win probability analysis",
      "AI assistant for step-by-step tax filing",
      "Smart legal & financial decision-making",
    ],
    techStack: [
      "React",
      "Tailwind CSS",
      "Java",
      "Spring Boot",
      "MySQL",
      "Python",
      "TensorFlow",
    ],
    featured: true,
    liveUrl: "https://legalhelp.dev",
    githubUrl: "https://github.com/ankitraj0901",
  },
  {
    title: "Face Recognition System",
    tagline: "CNN-Based Image Classification",
    description:
      "A Machine Learning system that performs face detection and recognition using Convolutional Neural Networks. Demonstrates strong intuition around feature extraction, overfitting, model tuning, and real-world challenges in vision-based systems.",
    features: [
      "End-to-end image preprocessing pipeline",
      "CNN model design & training (TensorFlow)",
      "Classification of faces from unseen images",
      "Computer vision fundamentals & model evaluation",
    ],
    techStack: ["Python", "TensorFlow", "Keras", "NumPy", "Matplotlib"],
    featured: false,
    githubUrl: "https://github.com/ankitraj0901",
  },
  {
    title: "Diabetes Prediction System",
    tagline: "SVM-Based Binary Classification",
    description:
      "A Machine Learning healthcare application built to predict the likelihood of diabetes using patient health metrics through Support Vector Machine. Achieved 97% test accuracy with an ROC-AUC score of 0.996.",
    features: [
      "Binary classification with SVM",
      "97% accuracy, ROC-AUC 0.996",
      "Confusion Matrix & F1-score evaluation",
      "Data preprocessing & feature scaling",
    ],
    techStack: ["Python", "Scikit-learn", "NumPy", "Pandas", "Matplotlib"],
    featured: false,
    githubUrl: "https://github.com/ankitraj0901",
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

                {/* Links */}
<div className="flex gap-4 mt-8">
  {project.liveUrl && (
    <a
      href={project.liveUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-accent-foreground rounded-xl font-semibold hover:opacity-90 transition"
    >
      Live Project <ExternalLink size={16} />
    </a>
  )}

  {project.githubUrl && (
    <a
      href={project.githubUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary-foreground/15 rounded-xl font-semibold hover:bg-primary-foreground/25 transition"
    >
      GitHub <Github size={16} />
    </a>
  )}
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

// code end
