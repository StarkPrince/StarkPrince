"use client"

interface GlowingCardProps
{
  children: React.ReactNode
  className?: string
}

export const GlowingCard = ({ children, className = "" }: GlowingCardProps) => (
  <div className={`relative group ${className}`}>
    <div className="absolute -inset-0.5 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
    <div className="relative backdrop-blur-xl rounded-lg p-6">
      {children}
    </div>
  </div>
)