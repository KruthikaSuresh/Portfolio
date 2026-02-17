import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { FileText, ExternalLink, Award } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection";
import { motion } from "motion/react";

const publications = [
  {
    title: "An Interpretability Assisted Empirical Study of Affective Traits in Visual Content of Disinformation",
    authors: "Kruthika Suresh, et al.",
    venue: "International Conference on Innovations in Computational Intelligence and Computer Vision",
    year: "2023",
    description: "With ever-growing audience and reach, social media has become a platform for propaganda, fake news and rumour. As compared to textual content, images are much more effective in communicating a message and compounding any intended emotional effect on the audience. Hence, the focus of this work is the emotion in the visual content of the disinformation campaigns. As the visuals in social media need not always carry a human face, the emotion conveyed by social media visuals is contextual emotion instead of emotion on isolated human faces. The work described in this paper makes two hypothesis, i.e. contextual emotion conveyed by social media visuals enhance the intended message and such contextual emotion in each type of disinformation carry some distinctive traits. To carry out this investigation, a visual image dataset has been manually curated for the three types of disinformation. A contextual emotion detection model trained on a public dataset has been used on this curated dataset along with interpretability techniques to carry out the investigation described in this paper. This manually curated dataset has been open sourced to aid in any future research.",
    tags: ["Deep Learning", "Neural Networks", "Computer Vision"],
    link: "https://ieeexplore.ieee.org/document/10403583", // Replace with actual paper link
    type: "Conference"
  },
  {
    title: "Mutual Consumer Behavioral Community Detection in Facebook's Large Page-Page Dataset Using Graph/SubGraph Analysis",
    authors: "Kruthika Suresh, et al.",
    venue: "2023 International Conference on Computational Intelligence for Information, Security and Communication Applications (CIISCA)",
    year: "2023",
    description: "This paper presents a comprehensive analysis of the Facebook Page-Page Large dataset to investigate mutual followership and community segregation. The study leverages the Louvain Algorithm for community detection within subgraphs, utilizing node labeling for subdivision.Moreover, multiclass node-level classification is performed using the Node2Vec technique. Additionally, to predict future mutual followership, GraphML is employed through two state-of-the-art methods: Graph Convolutional Networks (GCN) and Graph Attention Networks (GAT).A significant contribution of this paper lies in the unique analysis of communities within subgraphs, deviating from the traditional whole-graph analysis. This approach offers a more targeted examination of community dynamics, augmenting the development of a community-based recommendation system. The findings of this research shed light on the intricate relationships of mutual followership and the presence of distinct communities within the Facebook Page-Page Large dataset. By applying advanced algorithms such as the Louvain Algorithm, Node2Vec, GCN, and GAT, a comprehensive understanding of the dataset's structural patterns and community characteristics is achieved. The results highlight the potential for leveraging subgraph-based community analysis to enhance recommendation systems. The insights gained from this study lay the groundwork for future advancements in community detection and community-aware recommendation algorithms on social media platforms. ",
    tags: ["Graph neural networks","Explanable AI","MELD dataset"],
    link: "https://ieeexplore.ieee.org/document/10403583", // Replace with actual paper link
    type: "Conference"
  },
  {
    title: "Detection of Conversational Health in a Multimodal Conversation Graph by Measuring Emotional Concordance",
    authors: "Kruthika Suresh, et al.",
    venue: "ICMVA '23: Proceedings of the 2023 6th International Conference on Machine Vision and Applications",
    year: "2023",
    description: "With the advent of social media and technology, the increased connections between individuals and organizations have led to a similar increase in the number of conversations. These conversations, in most cases are bimodal in nature, consisting of both images and text. Existing work in multimodal conversation typically focuses on individual utterances rather than the overall dialogue. The aspect of conversational health is important in many real world conversational uses cases including the emerging world of Metaverse. The work described in this paper investigates conversational health from the viewpoint of emotional concordance in bimodal conversations modelled as graphs. Using this framework, an existing multimodal dialogue dataset has been reformatted as a graph dataset that is labelled with the emotional concordance score. In this work, determination of conversational health has been framed as a graph classification problem. A graph neural network based model using algorithms such as Graph Convolution Network and Graph Attention Network is then used to detect the emotional concordance or discordance based upon the multimodal conversation that is provided. The model proposed in this paper achieves an overall F1 Score of 0.71 for equally sized class training and testing size, which offers improved results compared to previous models using the same benchmark dataset.",
    tags: ["Computer Vision", "Healthcare", "Pose Estimation", "Medical Technology"],
    link: "https://dl.acm.org/doi/10.1145/3589572.3589588", // Replace with actual paper link
    type: "Conference"
 
  },

  {
    title: "Method and system for conducting interactive rehabilitation sessions with continuous monitoring",
    authors: "Kruthika Suresh, et al.",
    venue: "Indian Patent Office – Patent No. 579898 (Granted) • US Patent Application No. US 2024/0016415 A1 (Pending)",
    applicationNumber: "18352300",
    year: "2023",
    description: "The present invention discloses a method and system for conducting interactive rehabilitation session for a user with continuous monitoring. The session for user is generated in form of tasks, using current condition of the user and/or recommendations provided by a physiotherapist. The tasks may be performed by the patient in virtual environment, using, one or more virtual objects. Further, the tasks performed by the user is continuously monitored by implementing image processing techniques. The monitoring is performed to check if the user is performing the tasks as recommended by the physiotherapist. In case a deviation is detected, dynamic feedbacks may be provided to the user in real-time to correct actions of the user. Further, upon ending the sessions, the user may be scored or graded for the session based on performance of the tasks.",
    tags: ["Computer Vision", "Healthcare", "Pose Estimation", "Medical Technology", "Healthtech"],
    link: "https://patents.google.com/patent/US20240016415A1/en",
    type: "Patent - Granted in India",
    
  }
];

export function Publications() {
  return (
    <section id="publications" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">Publications & Research</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Peer-reviewed research publications demonstrating contributions to machine learning, 
              explanableAI, graph neural networks and more.
            </p>
          </div>
        </AnimatedSection>

        <StaggerContainer className="space-y-6">
          {publications.map((pub, index) => (
            <StaggerItem key={index}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="border-2 hover:border-primary/50 hover:shadow-xl transition-all duration-300 group">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <FileText className="h-5 w-5 text-primary" />
                          <Badge variant="outline">{pub.type}</Badge>
                          {pub.type === "Patent - Granted in India" && (
                            <Badge variant="default" className="bg-green-600">
                              <Award className="h-3 w-3 mr-1" />
                              Granted
                            </Badge>
                          )}
                        </div>
                        <CardTitle className="text-xl mb-2">{pub.title}</CardTitle>
                        <CardDescription className="text-sm mb-2">
                          {pub.authors} • {pub.venue} • {pub.year}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {pub.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {pub.tags.map((tag, tagIndex) => (
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
                  <CardFooter>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button asChild>
                        <a href={pub.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Read Paper
                        </a>
                      </Button>
                    </motion.div>
                  </CardFooter>
                </Card>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <AnimatedSection>
          <div className="mt-12 text-center">
            <p className="text-muted-foreground">
              For a complete list of publications and citations, visit my{" "}
              <a 
                href="https://scholar.google.com/citations?user=0NjMS5UAAAAJ&hl=en" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline inline-flex items-center gap-1"
              >
                Google Scholar profile
                <ExternalLink className="h-3 w-3" />
              </a>
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}