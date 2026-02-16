import { Card, CardContent } from "./ui/card";
import { GraduationCap, Target, Sparkles } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection";

export function About() {
  return (
    <section id="about" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">About Me</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Collaborative team player with experience across research, product, and engineering teams—skilled in Python, SQL, and experimentation with a strong foundation in statistical modeling
            </p>
          </div>
        </AnimatedSection>

        <StaggerContainer className="grid md:grid-cols-3 gap-6">
          <StaggerItem>
            <Card className="border-2 hover:border-primary/50 hover:shadow-lg transition-all duration-300 h-full group">
              <CardContent className="pt-6 text-center space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                  <GraduationCap className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
                </div>
                <h3>Academic Excellence</h3>
                <p className="text-muted-foreground">
                  MS in Data Science at Arizona State University (GPA: 3.78) and B-Tech in Computer Science from PES University, India. 
                  Strong foundation in statistical learning, time series analysis, and AI.
                </p>
              </CardContent>
            </Card>
          </StaggerItem>

          <StaggerItem>
            <Card className="border-2 hover:border-primary/50 hover:shadow-lg transition-all duration-300 h-full group">
              <CardContent className="pt-6 text-center space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                  <Target className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
                </div>
                <h3>Industry Impact</h3>
                <p className="text-muted-foreground">
                  Co-founded Physi.Fit, building predictive healthcare dashboards and computer vision models. 
                  Reduced manual processing time by 70% through automated data pipelines and designed metrics to support data-driven decision-making.
                </p>
              </CardContent>
            </Card>
          </StaggerItem>

          <StaggerItem>
            <Card className="border-2 hover:border-primary/50 hover:shadow-lg transition-all duration-300 h-full group">
              <CardContent className="pt-6 text-center space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                  <Sparkles className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
                </div>
                <h3>Research & Innovation</h3>
                <p className="text-muted-foreground">
                  Published 3 research papers and filed a patent in physiotherapy technology. 
                  Achieved 97.5% accuracy in neural network optimization at Indian Institute of Science.
                </p>
              </CardContent>
            </Card>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
}
