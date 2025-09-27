import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    title: "Wednesday - Netflix Series",
    description: "A Netflix-inspired web application showcasing the Wednesday series with modern UI/UX design.",
    image: "/wednesday-netflix-series-dark-theme.jpg",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://prinbarola.github.io/Wednesday/index.html",
    githubUrl: "https://github.com/prinbarola/Wednesday",
  },
  {
    title: "Studio Ghibli Movies",
    description: "An elegant showcase of Studio Ghibli movies with interactive elements and beautiful animations.",
    image: "/studio-ghibli-movies-showcase-website.jpg",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://prince7barola.github.io/MyGhibli/index.html",
    githubUrl: "https://github.com/prince7barola/MyGhibli",
  },
  {
    title: "jQuery Validation System",
    description:
      "A comprehensive login and registration system with jQuery validation, featuring real-time form validation, static authentication, and user-friendly error handling.",
    image: "/jquery-validation-login-registration-form-with-mod.jpg",
    technologies: ["jQuery", "HTML", "CSS", "JavaScript", "Bootstrap"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Cinemalaya",
    description: "A sophisticated movie streaming platform featuring Filipino films with dark theme and gold accents.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-3msfdjkTj3I3ziVLkkzgJuXBvafKR2.png",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Student Success Hub",
    description:
      "A comprehensive full-stack web application for academic support featuring study resources, progress tracking, and collaborative tools.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-8pVcJaJQ6UfVzRpnzw54Xyfb8rDM8e.png",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Lost and Found System",
    description: "A comprehensive system for managing lost and found items with user registration and admin features.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-04-05%20231537-igeR1L2yJqpfL2X1c3zF3CkZS2UFBg.png",
    technologies: ["PHP", "MySQL", "HTML", "CSS"],
    liveUrl: "#",
    githubUrl: "#",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
            My <span className="text-primary">Projects</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="hover-lift bg-card border-border">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>

                <CardHeader>
                  <CardTitle className="text-card-foreground">{project.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">{project.description}</CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary text-primary-foreground text-sm rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Button size="sm" className="flex-1" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
