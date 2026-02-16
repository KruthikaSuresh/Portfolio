import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "motion/react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/kruthika-suresh", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/kruthika-suresh-626bb6214", label: "LinkedIn" },
    { icon: Mail, href: "mailto:kruthika141100@gmail.com", label: "Email" }
  ];

  return (
    <footer className="bg-secondary/20 border-t border-border py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.div 
            className="text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-muted-foreground">
              © {currentYear} Kruthika Suresh. Built with React & Tailwind CSS.
            </p>
          </motion.div>

          <motion.div 
            className="flex items-center gap-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {socialLinks.map((social, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Button size="icon" variant="ghost" asChild>
                  <a href={social.href} target={social.icon !== Mail ? "_blank" : undefined} rel="noopener noreferrer" aria-label={social.label}>
                    <social.icon className="h-5 w-5" />
                  </a>
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
