"use client"
import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Upload, FileText, Loader2, ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"

interface Message {
  type: "user" | "ai" | "system"
  content: string
}

export default function ChatPage() {
  const router = useRouter()
  const [uploadedFile, setUploadedFile] = useState<File | null>(null)
  const [messages, setMessages] = useState<Message[]>([])
  const [showButtons, setShowButtons] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  const [customInput, setCustomInput] = useState("")
  const [inputEnabled, setInputEnabled] = useState(false)

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setUploadedFile(file)
      setMessages([
        {
          type: "system",
          content: `File uploaded: ${file.name}. What would you like me to help you with?`,
        },
      ])
    }
  }

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    const file = event.dataTransfer.files[0]
    if (file) {
      setUploadedFile(file)
      setMessages([
        {
          type: "system",
          content: `File uploaded: ${file.name}. What would you like me to help you with?`,
        },
      ])
    }
  }

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
  }

  const handleAction = async (action: string) => {
    setIsLoading(true)
    setShowButtons(false)

    // Add user message
    setMessages((prev) => [...prev, { type: "user", content: action }])

    // Simulate AI response with more realistic responses
    setTimeout(() => {
      let response = ""
      switch (action) {
        case "Summarize":
          response =
            "📄 **Document Summary Complete**\n\nKey Points:\n• Main topic: Project planning and resource allocation\n• Timeline: Q1-Q2 2024 implementation\n• Budget: $50K allocated for development\n• Team: 5 developers, 2 designers assigned\n• Deliverables: MVP by March, full release by June\n\nThis document outlines a comprehensive project roadmap with clear milestones and responsibilities."
          break
        case "Check for Safety":
          response =
            "🛡️ **Security Analysis Complete**\n\n✅ **File is SAFE**\n\n• No malicious code detected\n• No suspicious links or attachments\n• Standard document format verified\n• No embedded scripts found\n• File integrity: 100% clean\n\nYou can safely proceed with this document."
          break
        case "Suggest WhatsApp Replies":
          response =
            '💬 **WhatsApp Reply Suggestions**\n\nBased on your chat context, here are some appropriate responses:\n\n1. **Professional**: "Thanks for sharing! I\'ll review this and get back to you by EOD."\n\n2. **Collaborative**: "Great points! Let\'s schedule a quick call to discuss the next steps."\n\n3. **Acknowledgment**: "Received and understood. I\'ll incorporate this feedback into our plan."\n\n4. **Follow-up**: "This looks comprehensive. Do you need any clarification on the timeline?"'
          break
        default:
          response = "I've analyzed your request. How else can I help you with this document?"
      }

      setMessages((prev) => [...prev, { type: "ai", content: response }])
      setIsLoading(false)
      setInputEnabled(true)
    }, 2500)
  }

  const handleOtherAction = () => {
    setShowButtons(false)
    setInputEnabled(true)
    setMessages((prev) => [
      ...prev,
      {
        type: "system",
        content:
          "💭 Please type your custom question below. I can help with analysis, extraction, translation, or any other document-related task.",
      },
    ])
  }

  const handleCustomSubmit = async () => {
    if (!customInput.trim()) return

    setIsLoading(true)
    setMessages((prev) => [...prev, { type: "user", content: customInput }])
    const userQuestion = customInput
    setCustomInput("")

    // Simulate AI response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          type: "ai",
          content: `🤖 **Custom Analysis**\n\nRegarding "${userQuestion}":\n\nBased on your uploaded document, I can provide detailed insights. The content appears to contain relevant information that addresses your question. Would you like me to:\n\n• Extract specific data points\n• Provide a detailed explanation\n• Compare with industry standards\n• Generate actionable recommendations\n\nJust let me know how you'd like me to proceed!`,
        },
      ])
      setIsLoading(false)
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-8">
          <Button
            variant="ghost"
            onClick={() => router.push("/")}
            className="flex items-center gap-2 text-white hover:text-gray-300"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Button>
          <h1 className="text-2xl font-bold ml-8 text-justify">Tell Me Everything</h1>
        </div>

        {!uploadedFile ? (
          <div className="flex flex-col items-center justify-center min-h-[60vh]">
            <div className="w-full max-w-lg">
              <div
                className="border-2 border-dashed border-gray-600 rounded-lg p-16 text-center hover:border-gray-500 transition-all duration-300 cursor-pointer bg-gray-900/50"
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onClick={() => document.getElementById("file-upload")?.click()}
              >
                <Upload className="h-16 w-16 mx-auto mb-6 text-gray-400" />
                <p className="text-xl mb-4 font-medium text-white">Drop your file here or click to upload</p>
                <p className="text-sm text-gray-400 mb-6">Supported: Documents, Images, Text files</p>

                <input
                  id="file-upload"
                  type="file"
                  accept=".txt,.pdf,.doc,.docx,.jpg,.jpeg,.png,.csv,.xlsx"
                  onChange={handleFileUpload}
                  className="hidden"
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="space-y-4 min-h-[400px] max-h-[600px] overflow-y-auto">
              {messages.map((message, index) => (
                <div key={index} className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[80%] p-4 rounded-lg bg-transparent ${
                      message.type === "user"
                        ? "bg-gray-700 text-white"
                        : message.type === "system"
                          ? "bg-gray-800 text-gray-300 border border-gray-700"
                          : "bg-gray-800 text-white border border-gray-700"
                    }`}
                  >
                    {message.type === "system" && <FileText className="h-4 w-4 inline mr-2" />}
                    <div className="whitespace-pre-line">{message.content}</div>
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-gray-800 text-white border border-gray-700 p-4 rounded-lg">
                    <Loader2 className="h-4 w-4 animate-spin inline mr-2" />
                    Analyzing your document...
                  </div>
                </div>
              )}
            </div>

            {showButtons && uploadedFile && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <Button
                  onClick={() => handleAction("Summarize")}
                  className="h-12 bg-gray-700 hover:bg-gray-600 text-white border border-gray-600"
                  disabled={isLoading}
                >
                  Summarize
                </Button>
                <Button
                  onClick={() => handleAction("Check for Safety")}
                  className="h-12 bg-gray-700 hover:bg-gray-600 text-white border border-gray-600"
                  disabled={isLoading}
                >
                  Safety Check
                </Button>
                <Button
                  onClick={() => handleAction("Suggest WhatsApp Replies")}
                  className="h-12 bg-gray-700 hover:bg-gray-600 text-white border border-gray-600"
                  disabled={isLoading}
                >
                  WhatsApp Replies
                </Button>
                <Button
                  onClick={handleOtherAction}
                  className="h-12 bg-gray-700 hover:bg-gray-600 text-white border border-gray-600"
                  disabled={isLoading}
                >
                  Custom Request
                </Button>
              </div>
            )}

            {inputEnabled && (
              <div className="flex gap-2">
                <Input
                  value={customInput}
                  onChange={(e) => setCustomInput(e.target.value)}
                  placeholder="Ask me anything about your document..."
                  onKeyPress={(e) => e.key === "Enter" && handleCustomSubmit()}
                  disabled={isLoading}
                  className="text-base bg-gray-800 border-gray-600 text-white"
                />
                <Button
                  onClick={handleCustomSubmit}
                  disabled={isLoading || !customInput.trim()}
                  className="bg-gray-700 hover:bg-gray-600 text-white"
                >
                  {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Send"}
                </Button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
