"use client"

import { BackgroundPathsEffect } from "@/components/ui/background-paths-effect"

export function SimpleFooterWithPaths() {
  return (
    <footer className="relative bg-background border-t border-border/50 py-12 overflow-hidden">
      <BackgroundPathsEffect />

      <div className="relative z-10 container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {/* Company Info */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-3">Tell Me Everything</h3>
            <p className="text-sm text-muted-foreground">
              AI-powered document analysis and chat summarization for modern workflows.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-sm font-medium mb-3">Quick Links</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div>Features</div>
              <div>Pricing</div>
              <div>Support</div>
            </div>
          </div>

          {/* Contact */}
          <div className="text-center md:text-right">
            <h4 className="text-sm font-medium mb-3">Contact</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div>hello@tellmeeverything.ai</div>
              <div>Privacy Policy</div>
              <div>Terms of Service</div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border/30 text-center">
          <p className="text-sm text-muted-foreground">© 2024 Tell Me Everything. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
