"use client"

import { BookOpen, Users, Globe, Heart } from "lucide-react"

const pillars = [
  {
    icon: BookOpen,
    title: "Critical Thinking",
    description:
      "Learn to analyze the world around you, question assumptions, and form well-grounded perspectives.",
  },
  {
    icon: Users,
    title: "Communication",
    description:
      "Express ideas with clarity and confidence through writing, speaking, and creative expression.",
  },
  {
    icon: Globe,
    title: "Social Awareness",
    description:
      "Understand society, culture, politics, and human behavior to become a responsible citizen.",
  },
  {
    icon: Heart,
    title: "Empathy & Growth",
    description:
      "Develop emotional intelligence, appreciate diverse perspectives, and nurture personal growth.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="relative py-24 md:py-32 px-6">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-gold/70 mb-4 font-[var(--font-inter)]">
            Understanding HUMSS
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground text-balance">
            More Than What You{" "}
            <span className="text-gold italic">Think</span>
          </h2>
          <div className="mt-4 flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-gold/30" />
            <div className="h-1.5 w-1.5 rounded-full bg-gold/50" />
            <div className="h-px w-12 bg-gold/30" />
          </div>
        </div>

        {/* Description */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <p className="text-base md:text-lg text-foreground/60 leading-relaxed font-[var(--font-inter)]">
            Choosing an academic strand is not always easy especially for
            Grade 10 students who are just beginning to figure out who they are
            and what they want to become. For many learners, this decision feels
            heavy, pressured, and sometimes even overwhelming.
          </p>
          <p className="mt-4 text-base md:text-lg text-foreground/60 leading-relaxed font-[var(--font-inter)]">
            Questions like{" "}
            <span className="text-gold italic">
              {"\"Tama ba 'tong pipiliin ko?\""}
            </span>{" "}
            or{" "}
            <span className="text-gold italic">
              {"\"What if I choose the wrong strand?\""}
            </span>{" "}
            often create doubt and anxiety.
          </p>
        </div>

        {/* Pillars grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="group rounded-xl border border-gold/10 bg-card/50 p-6 transition-all duration-500 hover:border-gold/30 hover:bg-card"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gold/10 text-gold transition-colors duration-300 group-hover:bg-gold/20">
                <pillar.icon size={24} />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                {pillar.title}
              </h3>
              <p className="text-sm text-foreground/50 leading-relaxed font-[var(--font-inter)]">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
