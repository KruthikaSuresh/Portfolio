import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Mail, Linkedin, Github, FileText, MapPin, Phone } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";
import { motion } from "motion/react";

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">Get In Touch</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I'm actively seeking opportunities in data science. Let's connect and discuss how I can contribute to your team.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <Card className="border-2 hover:border-primary/50 hover:shadow-lg transition-all duration-300">
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3>Contact Information</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <span>Tempe, AZ</span>
                  </div>
                  
                  <a 
                    href="mailto:kruthika141100@gmail.com"
                    className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <span>kruthika141100@gmail.com</span>
                  </a>
                  
                  <a 
                    href="https://linkedin.com/in/kruthika-suresh-626bb6214"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Linkedin className="h-5 w-5 text-primary" />
                    </div>
                    <span>linkedin.com/in/kruthika-suresh</span>
                  </a>
                  
                </div>
              </div>

              <div className="space-y-4">
                <h3>Quick Actions</h3>
                <div className="space-y-3">
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button className="w-full justify-start" variant="outline" asChild>
                      <a href="mailto:kruthika141100@gmail.com">
                        <Mail className="h-4 w-4 mr-2" />
                        Send Email
                      </a>
                    </Button>
                  </motion.div>
                  
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button className="w-full justify-start" variant="outline" asChild>
                      <a href="https://linkedin.com/in/kruthika-suresh-626bb6214" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-4 w-4 mr-2" />
                        Connect on LinkedIn
                      </a>
                    </Button>
                  </motion.div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <div className="mt-12 text-center">
            <p className="text-muted-foreground">
              Open to full-time opportunities, internships, and collaborations
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}