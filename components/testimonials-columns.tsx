"use client"
import { InfiniteMovingCards } from "./infinite-moving-cards"

export function TestimonialsColumns() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-background dark:bg-background dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-8 text-foreground">What our users say</h2>
      <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
    </div>
  )
}

const testimonials = [
  {
    quote:
      "'Tell Me Everything' is a lifesaver! I caught up on a week's worth of group chat messages in two minutes. Absolutely essential.",
    name: "Alex Johnson",
    title: "Project Manager",
  },
  {
    quote:
      "I was hesitant to open a PDF sent in a group chat, but the safety check feature gave me peace of mind. The summary was a bonus!",
    name: "Sarah Lee",
    title: "Freelance Designer",
  },
  {
    quote:
      "The ability to get instant summaries and smart reply suggestions without leaving the app is a game-changer for my productivity.",
    name: "David Chen",
    title: "Startup Founder",
  },
  {
    quote:
      "Finally, an AI tool that actually saves me time instead of creating more work. The document analysis is incredibly accurate.",
    name: "Maria Rodriguez",
    title: "Content Manager",
  },
  {
    quote: "The WhatsApp integration is seamless. I can stay on top of all my group chats without the overwhelm.",
    name: "James Wilson",
    title: "Marketing Director",
  },
]
