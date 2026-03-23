import { HugeiconsIcon } from '@hugeicons/react'
import {
  VideoIcon,
  VoiceIcon,
  TranslateIcon,
  FlashIcon,
  BrushIcon,
  CloudIcon,
} from '@hugeicons/core-free-icons'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const features = [
  {
    icon: VideoIcon,
    title: 'AI Avatars',
    description: 'Choose from 100+ lifelike AI presenters or create a custom digital twin of yourself.',
  },
  {
    icon: VoiceIcon,
    title: 'Text-to-Speech',
    description: 'Convert any script to natural-sounding voiceovers in 40+ languages and accents.',
  },
  {
    icon: TranslateIcon,
    title: 'Auto-Translation',
    description: 'Instantly localize your videos into 140+ languages with synchronized lip movements.',
  },
  {
    icon: FlashIcon,
    title: 'Fast Rendering',
    description: 'Generate broadcast-quality video in minutes, not hours — powered by our GPU cluster.',
  },
  {
    icon: BrushIcon,
    title: 'Brand Templates',
    description: 'Keep every video on-brand with custom colors, logos, fonts, and reusable layouts.',
  },
  {
    icon: CloudIcon,
    title: 'Cloud Workspace',
    description: 'Access your projects from anywhere and collaborate with your team in real time.',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 md:py-28 bg-muted/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Everything you need to go live
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A complete AI video studio — from script to screen — without any of the complexity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <Card key={feature.title} className="border bg-background">
              <CardHeader className="pb-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  <HugeiconsIcon icon={feature.icon} size={20} color="currentColor" className="text-primary" />
                </div>
                <CardTitle className="text-base">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
