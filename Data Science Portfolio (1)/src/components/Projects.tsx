import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection";
import { motion } from "motion/react";
import { ExternalLink, Github, Video } from "lucide-react";

const projects = [
  {
    title: "LookBook AI - Multimodal Fashion Intelligence System",
    description: "Built an AI-powered fashion styling system using Gemini 3 that analyzes clothing images and provides personalized, color-aware recommendations. The system performs multimodal visual reasoning to understand color harmony, contrast, and style compatibility based on individual features, delivering explainable insights beyond generic recommendations. Won recognition at Google Hackathon for innovative use of multimodal AI in fashion technology.",
    image: "https://images.unsplash.com/photo-1564518160120-94178fcdf5d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwQUklMjB0ZWNobm9sb2d5JTIwd2FyZHJvYmUlMjBzdHlsZXxlbnwxfHx8fDE3NzEyODI1MTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Python", "Google Gemini API", "Multimodal AI", "Computer Vision", "Streamlit", "OpenCV"],
    links: {
      demo: "https://clothe-ywenrjqqppqcaezsbqnmhg.streamlit.app",
      github: "https://github.com/kruthika-suresh/lookbook-ai",
      video: "https://youtu.be/lookbook-demo"
    }
  },
  {
    title: "Reinforcement Learning Framework for Multi-Class Intrusion Detection",
    description: "Designed and implemented a Reinforcement Learning–based Intrusion Detection System using ensemble machine learning and deep neural networks to optimize attack classification and strengthen cybersecurity defense.",
    image: "https://images.unsplash.com/photo-1740908900906-a51032597559?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWluZm9yY2VtZW50JTIwbGVhcm5pbmclMjBzZWN1cml0exlbnwxfHx8fDE3NjEwMTI5MTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Python", "Scikit-learn", "TensorFlow", "Reinforcement Learning"]
  },
  {
    title: "Unlocking MLB Insights with Data-Driven Analytics",
    description: "Designed interactive storytelling dashboards using D3.js, Sankey charts, and heatmaps to visualize complex baseball statistics and uncover data-driven insights into player performance and MLB trends.",
    image: "https://images.unsplash.com/photo-1601204585986-e59572e09444?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXNlYmFsbCUyMGRhdGElMjBhbmFseXRpY3N8ZW58MXx8fHwxNzYxMDEyOTE0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["JavaScript", "D3.js", "Data Visualization"]
  },
  {
    title: "Scrollytelling Data Visualization Platform – Yellowstone Wolf Reintroduction",
    description: "Created interactive visualizations using D3.js and Sankey charts to explain ecosystem changes from wolf reintroduction in Yellowstone, making complex ecological data accessible through scrollytelling.",
    image: "https://images.unsplash.com/photo-1542765570-2d49240a9a92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5ZWxsb3dzdG9uZSUyMHdvbHZlcyUyMHdpbGRsaWZlfGVufDF8fHx8MTc2MTAxMjkxNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["D3.js", "Sankey Charts", "Data Visualization"]
  },
  {
    title: "FinGPT-Based Investment Advisor with Explainable AI Integration",
    description: "Fine-tuned FinGPT with Informer, LoRA, and PEFT techniques for stock price forecasting. Achieved RMSE of 2.2990 for Nike stock predictions with LIME interpretability to ensure transparent AI-driven financial recommendations.",
    image: "https://images.unsplash.com/photo-1638481826540-7710b13f7d53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjB0ZWNobm9sb2d5JTIwaW52ZXN0bWVudHxlbnwxfHx8fDE3NjEwMTI5MTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["LLMs", "FinGPT", "NLP", "Explainable AI", "LIME"]
  },
  {
    title: "Hand Gesture Recognition System using Dlib and Unity Game Engine",
    description: "Developed a game using Unity Game Engine designed for elderly and differently-abled individuals, where hand gestures control movements such as forward, left, and right. Implemented computer vision technology with Dlib's frontal face detector to accurately track gestures, ensuring an accessible, intuitive, and engaging user experience.",
    image: "https://images.unsplash.com/photo-1638431755905-631694da8921?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMGdhbWUlMjBwbGF5aW5nJTIwaGFuZHN8ZW58MXx8fHwxNzYxMzQzNTI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Computer Vision", "Unity Game Engine", "Dlib", "Accessibility"]
  },
  {
    title: "Love Yourself – Inclusive Retail Shopping App",
    description: "Designed a user interface for a retail shopping application aimed at promoting inclusivity for all body types, applying Human-Computer Interaction (HCI) principles. Developed interactive prototypes in Figma, including wireframes, navigation flows, and visual layouts, focusing on usability and accessibility.",
    image: "https://images.unsplash.com/photo-1758520387434-3ade1dbb4cf7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmNsdXNpdmUlMjBzaG9wcGluZyUyMHJldGFpbCUyMGRpdmVyc2l0eXxlbnwxfHx8fDE3NjExNTc3NDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Figma", "Human Computer Interaction", "UI/UX Design", "Accessibility"]
  },
  {
    title: "SparKonnect - Web Application",
    description: "Developed a social media platform for professionals to discover and connect with peers who share similar interests, enabling collaboration on projects. Built the full-stack application using the MERN stack (MongoDB, Express, React, Node.js), implementing features such as user profiles, project matching, and interactive messaging.",
    image: "https://images.unsplash.com/photo-1738082956220-a1f20a8632ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBuZXR3b3JrJTIwY29ubmVjdGlvbiUyMHByb2Zlc3Npb25hbHN8ZW58MXx8fHwxNzYxMTU3NzQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["MERN Stack", "Web Design", "MongoDB", "Express", "React", "Node.js"]
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">Featured Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A showcase of data science projects demonstrating my skills in machine learning, reinforcement learning, cybersecurity, statistics, explainable AI, data analysis, and visualization
            </p>
          </div>
        </AnimatedSection>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <StaggerItem key={index}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="h-full"
              >
                <Card className="overflow-hidden border-2 hover:border-primary/50 hover:shadow-xl transition-all duration-300 flex flex-col h-full group">
                  <div className="aspect-[4/3] overflow-hidden bg-muted relative">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                      className="w-full h-full"
                    >
                      <ImageWithFallback 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <motion.div
                          key={tagIndex}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Badge variant="outline">
                            {tag}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex gap-2">
                    {project.links && (
                      <>
                        {project.links.demo && (
                          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Button asChild variant="default" size="sm">
                              <a
                                href={project.links.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1"
                              >
                                <ExternalLink className="h-3 w-3" />
                                Demo
                              </a>
                            </Button>
                          </motion.div>
                        )}
                        {project.links.github && (
                          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Button asChild variant="outline" size="sm">
                              <a
                                href={project.links.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1"
                              >
                                <Github className="h-3 w-3" />
                                GitHub
                              </a>
                            </Button>
                          </motion.div>
                        )}
                        {project.links.video && (
                          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Button asChild variant="outline" size="sm">
                              <a
                                href={project.links.video}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1"
                              >
                                <Video className="h-3 w-3" />
                                Video
                              </a>
                            </Button>
                          </motion.div>
                        )}
                      </>
                    )}
                  </CardFooter>
                </Card>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}