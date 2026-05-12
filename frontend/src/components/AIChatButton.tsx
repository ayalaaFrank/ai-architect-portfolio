import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion' // אנימציית פתיחה/סגירה

type Message = {
  text: string
  sender: 'user' | 'ai'
}

const AIChatButton = () => {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<Message[]>([
    {
      text: 'Hello 👋 How can I help you today?',
      sender: 'ai',
    },
  ])

  const handleSend = () => {
    if (!input.trim()) return

    const userMessage: Message = {
      text: input,
      sender: 'user',
    }

    setMessages((prev) => [...prev, userMessage])
    setInput('')

    setTimeout(() => {
      const aiMessage: Message = {
        text: 'Thank you for your message. Our studio specializes in modern minimalist architecture.',
        sender: 'ai',
      }
      setMessages((prev) => [...prev, aiMessage])
    }, 1200) // השהייה ארוכה יותר למראה טבעי
  }

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="
              fixed
              bottom-28
              right-6
              w-[380px]
              h-[550px]
              bg-white
              rounded-3xl
              shadow-[0_15px_50px_-10px_rgba(0,0,0,0.15)] // צל רך יותר
              flex
              flex-col
              overflow-hidden
              z-50
              border border-neutral-100
            "
          >
            {/* Header */}
            <div className="bg-neutral-950 text-white px-7 py-6 flex items-center justify-between">
              <div>
                <h2 className="text-lg font-medium tracking-tight">
                  Design Assistant
                </h2>
                <p className="text-xs text-neutral-400 mt-1">
                  Ask anything about Ayala Architects
                </p>
              </div>
              <button onClick={() => setOpen(false)} className="text-white/70 hover:text-white transition">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 p-6 overflow-y-auto bg-neutral-50 flex flex-col gap-5">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`
                    max-w-[85%]
                    p-4
                    rounded-2xl
                    text-sm
                    shadow-sm
                    leading-relaxed
                    ${message.sender === 'user'
                      ? 'bg-neutral-900 text-neutral-50 self-end rounded-br-none'
                      : 'bg-white text-neutral-950 self-start rounded-bl-none border border-neutral-100'
                    }
                  `}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-neutral-100 flex gap-3 bg-white">
              <input
                type="text"
                placeholder="Type your question..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                className="
                  flex-1
                  px-5
                  py-3
                  rounded-full
                  border border-neutral-200
                  outline-none
                  text-sm
                  placeholder:text-neutral-400
                  focus:border-neutral-400
                  transition
                "
              />

              <button
                onClick={handleSend}
                className="
                  bg-neutral-950
                  text-white
                  px-6
                  rounded-full
                  text-xs
                  font-semibold
                  uppercase
                  tracking-wider
                  hover:bg-neutral-800
                  transition
                "
              >
                Send
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="
          fixed
          bottom-6
          right-6
          bg-neutral-950
          text-white
          px-8
          py-4
          rounded-full
          shadow-xl
          hover:shadow-neutral-950/20 hover:shadow-2xl
          hover:-translate-y-1
          transition-all
          duration-300
          z-50
          flex items-center gap-3
        "
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neutral-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-neutral-50"></span>
        </span>
        <span className="text-sm font-medium tracking-wide">Assistant</span>
      </button>
    </>
  )
}

export default AIChatButton