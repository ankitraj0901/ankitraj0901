import { Code, Server, Database, Brain, Wrench } from "lucide-react";

const skillCategories = [
  {
    icon: Code,
    title: "Frontend",
    skills: [
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "Vite",
      "Responsive UI/UX",
    ],
  },
  {
    icon: Server,
    title: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "Spring Boot",
      "REST APIs",
      "Authentication",
    ],
  },
  {
    icon: Database,
    title: "Databases",
    skills: [
      "MongoDB",
      "Supabase",
      "SQL",
      "JPA (Hibernate)",
      "Data Modeling",
    ],
  },
  {
    icon: Brain,
    title: "AI / ML",
    skills: [
      "TensorFlow",
      "CNN Models",
      "Image Classification",
      "Prediction Models",
      "Data Analysis",
    ],
  },
  {
    icon: Wrench,
    title: "Tools & Platforms",
    skills: [
      "Git & GitHub",
      "VS Code",
      "Postman",
      "TalkJS",
      "Deployment",
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-accent font-semibold text-sm tracking-wide uppercase mb-3">
            Technical Expertise
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Skills & Technologies
          </h2>
          <div className="w-16 h-1 bg-gradient-accent mx-auto rounded-full" />
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="p-6 bg-card rounded-2xl border border-border hover:shadow-elevated transition-all duration-300 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <category.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-bold text-foreground">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-background text-sm font-medium text-foreground rounded-lg border border-border hover:border-accent hover:text-accent transition-colors cursor-default"
                  >
                    {skill}
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

export default Skills;
