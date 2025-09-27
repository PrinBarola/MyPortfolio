export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
            About <span className="text-primary">Me</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                My name is Prin Barola, a 21-year-old Filipino who strives to balance both academics and work. I've had
                over two years of professional experience as a customer service representative, where I specialized in
                billing, troubleshooting, and customer retention.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Alongside this, I've worked in fast food and even tried selling digital products online, which helped me
                develop adaptability and communication skills. In my personal life, I enjoy solving Rubik's cubes,
                exploring old terms and languages like Baybayin and Shakespearean expressions.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Academically, I am pursuing a Bachelor of Science in Information Technology at Batangas State
                University. I've been recognized as a Dean's Lister, which reflects my dedication and discipline in my
                studies.
              </p>
            </div>

            <div className="bg-card p-8 rounded-lg shadow-lg hover-lift">
              <h3 className="text-2xl font-bold text-card-foreground mb-6">Quick Facts</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="font-semibold text-card-foreground">Age:</span>
                  <span className="text-card-foreground">21 years old</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-card-foreground">Location:</span>
                  <span className="text-card-foreground">Philippines</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-card-foreground">University:</span>
                  <span className="text-card-foreground">Batangas State University</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-card-foreground">Degree:</span>
                  <span className="text-card-foreground">BS Information Technology</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-card-foreground">Status:</span>
                  <span className="text-card-foreground">Dean's Lister</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-card-foreground">Experience:</span>
                  <span className="text-card-foreground">2+ years</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
