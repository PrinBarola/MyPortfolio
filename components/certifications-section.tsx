import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin, Award } from "lucide-react"
import Image from "next/image"

const certifications = [
  {
    title: "TECHSYNERGY: NAVIGATING THE DIGITAL LANDSCAPE 2023",
    subtitle: "CONNECTING CONCEPTS, BRIDGING TECHNOLOGIES",
    institution: "Batangas State University - Lipa Campus",
    date: "DECEMBER 4, 2023",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_h8495sh8495sh849-nKeHzkUDmSAvmxMVTDmPSUbdzL8ZPR.png",
  },
  {
    title: "BITCON 2024",
    subtitle: "NAVIGATING THE FUTURE OF TECHNOLOGY: INTEGRATION, INNOVATION, AND SECURITY",
    institution: "Lipa Academy for Sports, Culture and Arts Convention Center, Dagatan, Lipa City",
    date: "APRIL 6, 2024",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_era4asera4asera4-YGFjUhUznMrqxF67awjirBpYcL8NuO.png",
  },
  {
    title: "DATABIZ CONFERENCE 2024",
    subtitle: "EQUIPPING TOMORROW'S INNOVATORS WITH DATA SCIENCE, AI AND BUSINESS ANALYTICS",
    institution: "Lipa Academy for Sports, Culture and Arts Convention Center, Dagatan, Lipa City",
    date: "NOVEMBER 9, 2024",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_7ahuh17ahuh17ahu-fny29ETOFxKKxyZm1ZSDSHo9byH6Il.png",
  },
]

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
            Certifications & <span className="text-primary">Training</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <Card key={index} className="hover-lift bg-background border-border overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={cert.image || "/placeholder.svg"}
                    alt={cert.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>

                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium text-primary">Certificate</span>
                  </div>
                  <CardTitle className="text-lg leading-tight text-foreground">{cert.title}</CardTitle>
                  <p className="text-sm text-muted-foreground font-medium">{cert.subtitle}</p>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground leading-tight">{cert.institution}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium text-foreground">{cert.date}</span>
                    </div>
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
