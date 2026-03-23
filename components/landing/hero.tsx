import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - copy */}
          <div className="flex flex-col gap-6">
            <Badge variant="secondary" className="w-fit">
              Now in public beta
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              No fuss AI Video Creation for Social Media
            </h1>
            <p className="text-lg text-muted-foreground max-w-md">
              Turn scripts, text, and ideas into professional-quality videos in minutes. No camera, no crew, no editing required.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button size="lg" render={<Link href="/signup" />}>
                Start for free
              </Button>
              <Button size="lg" variant="outline" render={<a href="#features" />}>
                See how it works
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              No credit card required · Free forever plan available
            </p>
          </div>

          {/* Right - graphic placeholder */}
          <div className="relative flex items-center justify-center">
            <div className="w-full aspect-video rounded-2xl bg-muted border flex items-center justify-center">
              <div className="flex flex-col items-center gap-3 text-muted-foreground">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-primary" aria-hidden>
                    <path d="M8 5.14v14l11-7-11-7z" fill="currentColor" />
                  </svg>
                </div>
                <span className="text-sm font-medium">Watch demo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
