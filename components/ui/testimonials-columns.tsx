"use client"
import React from "react"
import { motion } from "framer-motion"

interface Testimonial {
  text: string
  image: string
  name: string
  role: string
}

export const TestimonialsColumn = (props: {
  className?: string
  testimonials: Testimonial[]
  duration?: number
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 bg-background"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <div className="p-10 rounded-3xl border shadow-lg shadow-primary/10 max-w-xs w-full" key={i}>
                  <div>{text}</div>
                  <div className="flex items-center gap-2 mt-5">
                    <img
                      width={40}
                      height={40}
                      src={image || "/placeholder.svg"}
                      alt={name}
                      className="h-10 w-10 rounded-full"
                    />
                    <div className="flex flex-col">
                      <div className="font-medium tracking-tight leading-5">{name}</div>
                      <div className="leading-5 opacity-60 tracking-tight">{role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  )
}

const testimonials = [
  {
    text: "Tell Me Everything transformed how I handle information overload. The AI summaries are incredibly accurate and save me hours daily.",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    name: "Sarah Chen",
    role: "Product Manager",
  },
  {
    text: "The document analysis feature is a game-changer. I can quickly extract key insights from lengthy reports in seconds.",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    name: "Marcus Johnson",
    role: "Research Analyst",
  },
  {
    text: "Security checks give me peace of mind. I never worry about malicious files anymore - the AI catches everything.",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    name: "Elena Rodriguez",
    role: "IT Security Lead",
  },
  {
    text: "WhatsApp chat summaries are brilliant! I stay updated on group conversations without reading hundreds of messages.",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    name: "David Kim",
    role: "Team Lead",
  },
  {
    text: "The time I save with automated summaries allows me to focus on strategic work instead of information processing.",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    name: "Lisa Thompson",
    role: "Executive Assistant",
  },
  {
    text: "Incredibly intuitive interface and lightning-fast processing. This tool has become essential to my daily workflow.",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    name: "Amanda Foster",
    role: "Content Strategist",
  },
]

export const firstColumn = testimonials.slice(0, 2)
export const secondColumn = testimonials.slice(2, 4)
export const thirdColumn = testimonials.slice(4, 6)
