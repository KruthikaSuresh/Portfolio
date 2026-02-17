import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { GraduationCap, Award, BookOpen } from "lucide-react";
import { Badge } from "./ui/badge";
import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection";
import { motion } from "motion/react"; 

export function Education() {
  return (
    <section id="education" className="py-20 px-4 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">Education & Certifications</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Academic background and continuous learning journey
            </p>
          </div>
        </AnimatedSection>

        <StaggerContainer className="space-y-6 max-w-5xl mx-auto">
          <StaggerItem>
            <Card className="border-2 hover:border-primary/50 hover:shadow-lg transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <GraduationCap className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="flex-1">
                    <CardTitle>Master of Science in Data Science, Analytics and Engineering</CardTitle>
                  <p className="text-muted-foreground mt-1">Arizona State University, Tempe, AZ</p>
                  <p className="text-muted-foreground">2024 - 2026</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Specialization in Computing and Decision Analytics</p>
              <div className="space-y-2">
                <p className="text-sm">GPA: 3.93/4.0</p>
                <p className="text-sm">Relevant Coursework:</p>
                <div className="flex flex-wrap gap-2">
                  {["Time Series Analysis", "Statistical Learning", "Pattern Recognition", "Data Visualization", "Statistical ML", "Data Mining", "Data Processing at Scale", "Data-Driven Optimization"].map((course, idx) => (
                    <motion.div key={idx} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                      <Badge variant="secondary">{course}</Badge>
                    </motion.div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
          </StaggerItem>

          <StaggerItem>
            <Card className="border-2 hover:border-primary/50 hover:shadow-lg transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <GraduationCap className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="flex-1">
                    <CardTitle>B-Tech Computer Science and Engineering</CardTitle>
                  <p className="text-muted-foreground mt-1">PES University, Bengaluru, India</p>
                  <p className="text-muted-foreground">2019 - 2023</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Specialization in Data Science and Machine Learning</p>
              <div className="space-y-2">
                <p className="text-sm">GPA: 8.33/10.0</p>
              </div>
            </CardContent>
          </Card>
          </StaggerItem>

          <StaggerItem>
            <Card className="border-2 hover:border-primary/50 hover:shadow-lg transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Award className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <CardTitle>Publications & Patent</CardTitle>
                  <p className="text-muted-foreground mt-1">Research Contributions</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <BookOpen className="h-4 w-4 mt-1 text-muted-foreground flex-shrink-0" />
                  <div>
                    <p>Interpretability Assisted Study of Affective Traits in Visual Content of Disinformation</p>
                    <p className="text-sm text-muted-foreground">Springer LNNS, ICICV 2022</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <BookOpen className="h-4 w-4 mt-1 text-muted-foreground flex-shrink-0" />
                  <div>
                    <p>Detection of Conversational Health in a Multimodal Graph</p>
                    <p className="text-sm text-muted-foreground">ACM ICMVA 2023</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <BookOpen className="h-4 w-4 mt-1 text-muted-foreground flex-shrink-0" />
                  <div>
                    <p>Mutual Consumer Behavioral Community Detection in Facebook Data</p>
                    <p className="text-sm text-muted-foreground">IEEE CIISCA 2023</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Award className="h-4 w-4 mt-1 text-muted-foreground flex-shrink-0" />
                  <div>
                    <p>Patent: Method and System for Conducting Interactive Physiotherapy with Continuous Monitoring</p>
                    <p className="text-sm text-muted-foreground">Filed July 14, 2023 (Patent Pending)</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
}
