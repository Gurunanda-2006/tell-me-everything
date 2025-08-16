"use client"
import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"
import { TestimonialsColumn, firstColumn, secondColumn, thirdColumn } from "@/components/ui/testimonials-columns"
import { SpiralAnimation } from "@/components/ui/spiral-animation"
import { FeatureCards } from "@/components/feature-cards"
import { CTASection } from "@/components/ui/cta-with-rectangle"
import { SimpleFooter } from "@/components/simple-footer"
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision"
import { BackgroundPathsEffect } from "@/components/ui/background-paths-effect"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import Image from "next/image"

export default function LandingPage() {
  const router = useRouter()

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <SpiralAnimation />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-white border-transparent border-0 opacity-85">
              Tell Me Everything
            </h1>
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/10"
              onClick={() => router.push("/chat")}
            >
              <MessageCircle className="h-8 w-8" />
            </Button>
          </div>

          <p className="text-xl md:text-2xl mb-12 leading-relaxed leading-7 text-zinc-500 opacity-70">
            Instantly summarize your chats and documents. Save time, stay informed.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-white text-black hover:bg-gray-200 text-lg px-8 py-6"
              onClick={() => scrollToSection("features")}
            >
              Explore Features
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black text-lg px-8 py-6 bg-transparent"
              onClick={() => router.push("/chat")}
            >
              Start Chat
            </Button>
          </div>
        </div>
      </section>

      <BackgroundBeamsWithCollision className="py-8">
        {/* Reduced padding from py-12 to py-8 */}
        <section id="features" className="w-full">
          <FeatureCards />
        </section>
      </BackgroundBeamsWithCollision>

      <BackgroundBeamsWithCollision className="py-8">
        {/* Reduced padding from py-12 to py-8 */}
        <section className="w-full">
          <div className="text-center mb-8">
            {/* Reduced margin from mb-12 to mb-8 */}
            <h1 className="text-4xl md:text-6xl font-bold text-center text-foreground mb-6">
              {/* Reduced margin from mb-8 to mb-6 */}
              Tired of Information Overload? <br />
              <span className="text-4xl md:text-6xl font-bold mt-1 leading-none">Let AI Handle It</span>
            </h1>
          </div>
          <div className="flex justify-center">
            <div className="relative max-w-4xl mx-auto">
              <Image
                src="/images/workflow-mockup.png"
                alt="AI Workflow Interface"
                width={800}
                height={600}
                className="w-full h-auto object-cover rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </section>
      </BackgroundBeamsWithCollision>

      <BackgroundBeamsWithCollision className="py-8">
        {/* Reduced padding from py-12 to py-8 */}
        <section id="testimonials" className="w-full relative">
          <div className="container z-10 mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
            >
              <div className="flex justify-center">
                <div className="border py-1 px-4 rounded-lg">Testimonials</div>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter mt-5">
                What our users say
              </h2>
              <p className="text-center mt-5 opacity-75">See what our customers have to say about us.</p>
            </motion.div>

            <div className="flex justify-center gap-6 mt-8 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
              {/* Reduced margin from mt-10 to mt-8 */}
              <TestimonialsColumn testimonials={firstColumn} duration={15} />
              <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
              <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
            </div>
          </div>
        </section>
      </BackgroundBeamsWithCollision>

      <section className="relative py-8 overflow-hidden">
        <div className="opacity-70">
          <BackgroundPathsEffect />
        </div>
        <div className="relative z-10">
          <CTASection
            badge={{ text: "Get Started" }}
            title="Ready to Transform Your Workflow?"
            description="Join thousands of users who save hours daily with AI-powered document analysis and chat summarization."
            action={{
              text: "Start Free Trial",
              href: "/chat",
              variant: "default",
            }}
          />
        </div>
      </section>

      <SimpleFooter />
    </div>
  )
}
