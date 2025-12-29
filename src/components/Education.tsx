import { GraduationCap, Award, Trophy } from "lucide-react";

const Education = () => {
  const achievements = [
    {
      icon: Trophy,
      title: "Software Engineer at Accenture",
      description: "Selected through on-campus placement drive",
    },
    {
      icon: Award,
      title: "Full-Stack Applications",
      description: "Built multiple production-ready web apps",
    },
    {
      icon: Award,
      title: "ML/AI Projects",
      description: "Developed CNN & prediction models",
    },
  ];

  return (
    <section id="education" className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-accent font-semibold text-sm tracking-wide uppercase mb-3">
            Background
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Education & Achievements
          </h2>
          <div className="w-16 h-1 bg-gradient-accent mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education Card */}
          <div className="p-8 bg-card rounded-3xl border border-border relative overflow-hidden group hover:shadow-elevated transition-all duration-300">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-2xl group-hover:bg-accent/10 transition-colors" />

            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6">
                <GraduationCap className="w-8 h-8 text-primary-foreground" />
              </div>

              <h3 className="text-2xl font-bold text-foreground mb-2">
                Master of Computer Applications
              </h3>
              <p className="text-lg text-accent font-semibold mb-4">
                PES University, Bangalore
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2" />
                  <p className="text-muted-foreground">
                    Strong foundation in Computer Science fundamentals
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2" />
                  <p className="text-muted-foreground">
                    Specialized in Web Technologies & Database Systems
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2" />
                  <p className="text-muted-foreground">
                    Software Engineering principles & best practices
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2" />
                  <p className="text-muted-foreground">
                    Hands-on project experience with industry tools
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-foreground mb-6">
              Key Achievements
            </h3>
            {achievements.map((achievement, index) => (
              <div
                key={achievement.title}
                className="p-6 bg-card rounded-2xl border border-border hover:shadow-card transition-all duration-300 group flex items-start gap-4"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                  <achievement.icon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">
                    {achievement.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {achievement.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
