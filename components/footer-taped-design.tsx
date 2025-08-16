"use client"
import { Button } from "@/components/ui/button"

export function FooterTapedDesign() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="relative bg-background border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8 lg:py-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground">Tell Me Everything</h3>
              <p className="mt-4 text-sm leading-6 text-muted-foreground max-w-xs">
                An AI-powered chatbot designed to analyze and summarize your documents and chat logs efficiently.
              </p>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-foreground">Resources</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <Button
                      variant="link"
                      className="text-sm leading-6 text-muted-foreground hover:text-foreground p-0 h-auto"
                      onClick={() => scrollToSection("features")}
                    >
                      Features
                    </Button>
                  </li>
                  <li>
                    <Button
                      variant="link"
                      className="text-sm leading-6 text-muted-foreground hover:text-foreground p-0 h-auto"
                      onClick={() => scrollToSection("testimonials")}
                    >
                      Testimonials
                    </Button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-border pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-muted-foreground">
            &copy; 2024 Tell Me Everything. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
