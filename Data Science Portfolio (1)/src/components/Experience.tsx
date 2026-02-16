import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Briefcase, Calendar } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection";
import { motion } from "motion/react";

const experiences = [
  {
    title: "Data Analyst",
    company: "The Decision Theater",
    location: "Tempe, Arizona",
    period: "May 2025 - Present",
    achievements: [
      "Built automated data pipelines in Python (Pandas, regex, API integration) to parse, clean, and enrich 50K+ records, reducing manual processing time by 70%",
      "Integrated and validated datasets across multiple sources using Python and Excel, resolving duplicates and ensuring analysis-ready data for research and business insights",
      "Designed interactive visualizations for curriculum and skills data, enabling stakeholders to identify trends and support data-driven decision-making",
      "Applied NLP models (BERT, HKU-NLP, Gemini) for similarity analysis and metadata enrichment, enhancing text retrieval workflows and supporting advanced analytics projects"
    ],
    tags: ["Python", "Pandas", "NLP", "BERT", "Data Visualization"]
  },
  {
    title: "Data Scientist / Co-Founder",
    company: "Physi.Fit",
    location: "Bengaluru, India",
    period: "Jan 2023 - June 2024",
    achievements: [
      "Developed predictive healthcare dashboards using Streamlit and Plotly, enabling real-time patient monitoring (Python, Pandas, Streamlit, Plotly)",
      "Implemented AWS-deployed computer vision models with MediaPipe, tracking 33+ body joints for physiotherapy exercises (AWS, TensorFlow, Computer Vision)",
      "Built and deployed MERN stack application (MongoDB, Express, React, Node.js) with secure user authentication and analytics dashboards",
      "Conducted user research, HCI design, and branding (Figma, UI/UX), leading to higher user engagement and product adoption"
    ],
    tags: ["TensorFlow", "Computer Vision", "AWS", "MERN Stack", "Streamlit"]
  },
  {
    title: "Research Intern",
    company: "Indian Institute of Science",
    location: "Bengaluru, India",
    period: "Sept 2022 - June 2024",
    achievements: [
      "Achieved 97.5% accuracy on Acoustic Emission and Wine datasets by optimizing spiking neural networks (TMM-SNN, SEFRON, Python, TensorFlow)",
      "Co-developed novel Evolving Prop architecture integrating SEFRON + TMM-SNN, validated on UCI-10 datasets (Machine Learning, Neural Networks)",
      "Explored neuromorphic computing applications in autonomous driving, robotics, and chip design"
    ],
    tags: ["Deep Learning", "Neural Networks", "Research", "Python"]
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-20 px-4 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">Professional Experience</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Building innovative data solutions across healthcare, research, and decision analytics
            </p>
          </div>
        </AnimatedSection>

        <StaggerContainer className="space-y-6">
          {experiences.map((exp, index) => (
            <StaggerItem key={index}>
              <Card className="border-2 hover:border-primary/50 hover:shadow-lg transition-all duration-300 group">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="space-y-2">
                    <CardTitle className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Briefcase className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div>{exp.title}</div>
                        <div className="text-muted-foreground mt-1">
                          {exp.company} • {exp.location}
                        </div>
                      </div>
                    </CardTitle>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground md:ml-auto flex-shrink-0">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm">{exp.period}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 ml-4">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="text-muted-foreground list-disc">
                      {achievement}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.tags.map((tag, tagIndex) => (
                    <motion.div
                      key={tagIndex}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Badge variant="secondary">
                        {tag}
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
