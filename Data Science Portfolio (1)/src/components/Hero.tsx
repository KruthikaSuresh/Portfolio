import { Button } from "./ui/button";
import { Linkedin, Mail, ArrowDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";

export function Hero() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate page load
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Loading Screen */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <motion.div
              className="flex flex-col items-center gap-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.2 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className="w-16 h-16 rounded-full border-4 border-primary/30 border-t-primary"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
              <motion.p
                className="text-lg text-muted-foreground"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                Loading Portfolio...
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 pt-20">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-primary/5" />
        
        {/* Elegant grid pattern - very subtle */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(to right, currentColor 1px, transparent 1px),
              linear-gradient(to bottom, currentColor 1px, transparent 1px)
            `,
            backgroundSize: '6rem 6rem',
          }}
        />

        {/* Animated gradient orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{
            background: 'radial-gradient(circle, var(--color-primary) 0%, transparent 70%)',
          }}
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-20"
          style={{
            background: 'radial-gradient(circle, var(--color-accent) 0%, transparent 70%)',
          }}
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Main content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
          {/* Main heading - elegant typography */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isLoading ? 0 : 1, y: isLoading ? 30 : 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-2"
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl tracking-tight text-muted-foreground/60"
              initial={{ opacity: 0 }}
              animate={{ opacity: isLoading ? 0 : 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Hi, I'm
            </motion.h1>
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tight bg-gradient-to-r from-primary via-primary/90 to-accent bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isLoading ? 0 : 1, y: isLoading ? 20 : 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Kruthika Suresh
            </motion.h1>
          </motion.div>

          {/* Subtitle - clean, no icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isLoading ? 0 : 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-3 text-xl md:text-2xl lg:text-3xl"
          >
            <span className="text-foreground/80">Data Scientist</span>
            <span className="text-muted-foreground/30">·</span>
            <span className="text-foreground/80">ML Engineer</span>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: isLoading ? 0 : 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            Data Scientist with experience applying statistics, machine learning, 
            and data visualization to real-world problems. Proven ability to translate ambiguous 
            business needs into actionable insights and build predictive models.
          </motion.p>

          {/* CTA buttons - refined */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isLoading ? 0 : 1, y: isLoading ? 20 : 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="flex flex-wrap items-center justify-center gap-4 pt-6"
          >
            <motion.div 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                size="lg" 
                onClick={() => scrollToSection("projects")}
                className="px-8 bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25"
              >
                View My Work
              </Button>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                size="lg" 
                variant="outline" 
                onClick={() => scrollToSection("contact")}
                className="px-8 border-border hover:bg-accent/5 hover:border-accent/50"
              >
                Get In Touch
              </Button>
            </motion.div>
          </motion.div>

          {/* Social links - minimal */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isLoading ? 0 : 1 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="flex items-center justify-center gap-2 pt-6"
          >
            {[
              { icon: Linkedin, href: "https://linkedin.com/in/kruthika-suresh-626bb6214", label: "LinkedIn" },
              { icon: Mail, href: "mailto:kruthika141100@gmail.com", label: "Email" }
            ].map((social, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="icon" 
                  variant="ghost" 
                  asChild
                  className="hover:bg-primary/10 hover:text-primary"
                >
                  <a href={social.href} target={social.icon !== Mail ? "_blank" : undefined} rel="noopener noreferrer">
                    <social.icon className="h-5 w-5" />
                    <span className="sr-only">{social.label}</span>
                  </a>
                </Button>
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll indicator - elegant */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isLoading ? 0 : 1 }}
            transition={{ duration: 0.6, delay: 1.6 }}
            className="pt-20"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Button
                size="icon"
                variant="ghost"
                onClick={() => scrollToSection("about")}
                className="rounded-full hover:bg-primary/5"
              >
                <ArrowDown className="h-5 w-5 text-muted-foreground" />
                <span className="sr-only">Scroll to next section</span>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none" />
      </section>
    </>
  );
}