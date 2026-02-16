import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection";
import { motion } from "motion/react";

const skillCategories = [
  {
    title: "Programming & Data",
    skills: ["Python", "C++", "R", "Java", "Julia", "SQL", "PL/SQL", "PostgreSQL", "MongoDB", "MySQL", "Hadoop", "Spark", "PySpark"]
  },
  {
    title: "ML/AI Techniques",
    skills: ["Machine Learning", "Deep Learning", "Reinforcement Learning", "Supervised Learning", "Unsupervised Learning", "Recommendation Systems", "Explainable AI", "NLP", "LLMs", "Computer Vision", "Multimodal AI"]
  },
  {
    title: "Frameworks & Tools",
    skills: ["TensorFlow", "PyTorch", "Keras", "Scikit-Learn", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Plotly", "Flask", "Streamlit", "Git", "GitHub"]
  },
  {
    title: "Cloud & Deployment",
    skills: ["AWS S3", "AWS EC2", "AWS Lambda", "SageMaker", "Docker", "Kubernetes", "REST APIs"]
  },
  {
    title: "Visualization",
    skills: ["D3.js", "Tableau", "Power BI", "Matplotlib", "Seaborn", "Plotly", "Scrollytelling Dashboards"]
  },
  {
    title: "Web & UX",
    skills: ["MERN Stack", "HTML5", "CSS", "Figma", "HCI Design"]
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">Technical Skills</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit for data analysis, machine learning, and visualization
            </p>
          </div>
        </AnimatedSection>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <StaggerItem key={index}>
              <Card className="border-2 hover:border-primary/50 hover:shadow-lg transition-all duration-300 h-full group">
                <CardHeader>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Badge variant="secondary" className="cursor-pointer">
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
