import Link from 'next/link'
import { HugeiconsIcon } from '@hugeicons/react'
import { CheckListIcon } from '@hugeicons/core-free-icons'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

const tiers = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    description: 'Perfect for trying out AI video creation.',
    cta: 'Get started',
    href: '/signup',
    popular: false,
    features: [
      '5 videos per month',
      '720p export quality',
      '3 AI avatars',
      '10 minutes per video',
      'Community support',
    ],
  },
  {
    name: 'Pro',
    price: '$49',
    period: 'per month',
    description: 'For creators and small teams who ship videos regularly.',
    cta: 'Start free trial',
    href: '/signup',
    popular: true,
    features: [
      'Unlimited videos',
      '1080p export quality',
      '30+ AI avatars',
      'Unlimited video length',
      'Auto-translation (5 languages)',
      'Brand kit',
      'Priority support',
    ],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'contact us',
    description: 'For organizations with advanced needs and large-scale production.',
    cta: 'Contact sales',
    href: 'mailto:sales@heygen.com',
    popular: false,
    features: [
      'Everything in Pro',
      '4K export quality',
      'Custom AI avatar creation',
      'Auto-translation (140+ languages)',
      'SSO & advanced security',
      'Dedicated account manager',
      'SLA guarantee',
    ],
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Start free and scale as you grow. No hidden fees, no surprises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {tiers.map((tier) => (
            <Card
              key={tier.name}
              className={tier.popular ? 'border-primary shadow-lg relative' : ''}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge>Most popular</Badge>
                </div>
              )}
              <CardHeader>
                <CardTitle>{tier.name}</CardTitle>
                <div className="flex items-baseline gap-1 mt-1">
                  <span className="text-3xl font-bold">{tier.price}</span>
                  <span className="text-sm text-muted-foreground">/{tier.period}</span>
                </div>
                <CardDescription>{tier.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Separator className="mb-5" />
                <ul className="space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm">
                      <HugeiconsIcon icon={CheckListIcon} size={16} color="currentColor" className="mt-0.5 shrink-0 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full"
                  variant={tier.popular ? 'default' : 'outline'}
                  render={<Link href={tier.href} />}
                >
                  {tier.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
