"use client"
import { GlowCard } from "@/components/ui/spotlight-card"
import { MessageCircle, FileText, Shield, Clock } from "lucide-react"

const features = [
  {
    icon: MessageCircle,
    title: "WhatsApp Chat Summarization",
    description: "Get instant summaries of your group chats and conversations",
    glowColor: "blue" as const,
  },
  {
    icon: FileText,
    title: "Document Analysis",
    description: "Analyze and extract key information from your documents",
    glowColor: "purple" as const,
  },
  {
    icon: Shield,
    title: "AI-Powered Safety Checks",
    description: "Ensure your files are safe before opening them",
    glowColor: "green" as const,
  },
  {
    icon: Clock,
    title: "Time Efficiency",
    description: "Save hours by getting quick insights and summaries",
    glowColor: "orange" as const,
  },
]

export function FeatureCards() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful AI Features</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover how our AI-powered tools can transform your workflow
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <GlowCard key={index} glowColor={feature.glowColor} customSize={true} className="w-full h-80 p-6">
              <div className="flex flex-col items-center text-center h-full">
                <div className="mb-6 p-4 rounded-full bg-background/20 backdrop-blur-sm">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">{feature.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  )
}
