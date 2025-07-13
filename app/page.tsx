import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  MessageCircle,
  Brain,
  Target,
  Zap,
  CheckCircle,
  Star,
  ArrowRight,
  Users,
  Clock,
  Smartphone,
} from "lucide-react"

export default function FitflexLanding() {
  return (
    <div className="min-h-screen bg-fitflex-black text-fitflex-beige">
      {/* Header */}
      <header className="border-b border-fitflex-dark-olive">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-fitflex-olive rounded-lg flex items-center justify-center">
              <span className="text-fitflex-beige font-bold text-lg">f</span>
            </div>
            <span className="text-2xl font-bold text-fitflex-beige">fitflex</span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#features" className="text-fitflex-beige hover:text-fitflex-olive transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-fitflex-beige hover:text-fitflex-olive transition-colors">
              How it Works
            </a>
            <a href="#pricing" className="text-fitflex-beige hover:text-fitflex-olive transition-colors">
              Pricing
            </a>
          </nav>
          <Button className="bg-fitflex-olive hover:bg-fitflex-olive/80 text-fitflex-beige">Get Started</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 bg-fitflex-dark-olive text-fitflex-beige border-fitflex-olive">
            AI Coach for Students & Apprentices
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-fitflex-beige to-fitflex-olive bg-clip-text text-transparent">
            Your AI Nutrition Coach That Actually Gets Your Life
          </h1>
          <p className="text-xl md:text-2xl text-fitflex-beige/80 mb-8 max-w-3xl mx-auto">
            Stop struggling with meal planning, calorie counting, and motivation. fitflex learns your chaotic student
            schedule and adapts in real-time – like having a personal coach in your pocket.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-fitflex-olive hover:bg-fitflex-olive/80 text-fitflex-beige text-lg px-8 py-4"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Start Coaching via WhatsApp
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-fitflex-olive text-fitflex-olive hover:bg-fitflex-olive hover:text-fitflex-beige text-lg px-8 py-4 bg-transparent"
            >
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 px-4 bg-fitflex-dark-olive">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-fitflex-beige">
            The Real Problems fitflex Solves
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-fitflex-black border-fitflex-olive">
              <CardHeader>
                <Clock className="h-8 w-8 text-fitflex-olive mb-2" />
                <CardTitle className="text-fitflex-beige">Time & Planning Overwhelm</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-fitflex-beige/80">
                  Eliminates the daily mental load of meal planning with proactive, automated suggestions that fit your
                  chaotic schedule.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-fitflex-black border-fitflex-olive">
              <CardHeader>
                <Brain className="h-8 w-8 text-fitflex-olive mb-2" />
                <CardTitle className="text-fitflex-beige">Complexity & Uncertainty</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-fitflex-beige/80">
                  Reduces the burden of calorie tracking and healthy food selection, making healthy eating intuitive and
                  effortless.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-fitflex-black border-fitflex-olive">
              <CardHeader>
                <Zap className="h-8 w-8 text-fitflex-olive mb-2" />
                <CardTitle className="text-fitflex-beige">Need for Flexibility</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-fitflex-beige/80">
                  Adapts instantly to changing plans or spontaneous needs, ensuring healthy options are always
                  available.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-fitflex-black border-fitflex-olive">
              <CardHeader>
                <Target className="h-8 w-8 text-fitflex-olive mb-2" />
                <CardTitle className="text-fitflex-beige">Motivation & Consistency</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-fitflex-beige/80">
                  Offers continuous, empathetic support and personalized nudges to fight procrastination and ensure
                  long-term adherence.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* USPs Section */}
      <section id="features" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-fitflex-beige">
            Why fitflex is Different
          </h2>
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="bg-fitflex-dark-olive border-fitflex-olive">
              <CardHeader>
                <MessageCircle className="h-12 w-12 text-fitflex-olive mb-4" />
                <CardTitle className="text-2xl text-fitflex-beige">AI Coach – Not Just an App</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-fitflex-beige/80 mb-4">
                  Conversational coaching via WhatsApp or voice replaces clunky app UIs. fitflex feels like a real
                  personal coach – intuitive, always available, and frictionless.
                </p>
                <ul className="space-y-2 text-fitflex-beige/80">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-fitflex-olive mr-2" />
                    Natural conversation interface
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-fitflex-olive mr-2" />
                    Voice and text support
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-fitflex-olive mr-2" />
                    24/7 availability
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-fitflex-dark-olive border-fitflex-olive">
              <CardHeader>
                <Brain className="h-12 w-12 text-fitflex-olive mb-4" />
                <CardTitle className="text-2xl text-fitflex-beige">Context-Aware & Adaptive</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-fitflex-beige/80 mb-4">
                  Our AI learns your schedule, mood, budget, and habits. It dynamically adapts plans and suggestions to
                  fit your real, messy everyday life.
                </p>
                <ul className="space-y-2 text-fitflex-beige/80">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-fitflex-olive mr-2" />
                    Real-time schedule adaptation
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-fitflex-olive mr-2" />
                    Budget-conscious suggestions
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-fitflex-olive mr-2" />
                    Mood-based recommendations
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-fitflex-dark-olive border-fitflex-olive">
              <CardHeader>
                <Target className="h-12 w-12 text-fitflex-olive mb-4" />
                <CardTitle className="text-2xl text-fitflex-beige">Motivation that Lasts</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-fitflex-beige/80 mb-4">
                  fitflex understands your behavioral patterns and triggers. It delivers tailored motivation at the
                  right moment – for habits that stick.
                </p>
                <ul className="space-y-2 text-fitflex-beige/80">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-fitflex-olive mr-2" />
                    Behavioral pattern recognition
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-fitflex-olive mr-2" />
                    Personalized nudges
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-fitflex-olive mr-2" />
                    Long-term habit formation
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Competitive Advantages */}
      <section className="py-16 px-4 bg-fitflex-dark-olive">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-fitflex-beige">
            Our Competitive Advantages
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-fitflex-black border-fitflex-olive">
              <CardHeader>
                <Brain className="h-8 w-8 text-fitflex-olive mb-2" />
                <CardTitle className="text-fitflex-beige">Deep Context-Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-fitflex-beige/80">
                  A growing system, not a plug-in feature. Our AI continuously learns and evolves with you.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-fitflex-black border-fitflex-olive">
              <CardHeader>
                <Smartphone className="h-8 w-8 text-fitflex-olive mb-2" />
                <CardTitle className="text-fitflex-beige">Messaging-First UX</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-fitflex-beige/80">
                  Requires a complete rethink of app logic. Natural, conversational interface that feels human.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-fitflex-black border-fitflex-olive">
              <CardHeader>
                <Users className="h-8 w-8 text-fitflex-olive mb-2" />
                <CardTitle className="text-fitflex-beige">Focused Niche</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-fitflex-beige/80">
                  We serve 18-22 year old students/apprentices with precision, not the broad masses.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-fitflex-black border-fitflex-olive">
              <CardHeader>
                <Star className="h-8 w-8 text-fitflex-olive mb-2" />
                <CardTitle className="text-fitflex-beige">Earned Trust</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-fitflex-beige/80">
                  Trust and motivation can't be bought – they're earned through relevance and results.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-fitflex-beige">How fitflex Works</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-fitflex-olive rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-fitflex-beige">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-fitflex-beige">Connect via WhatsApp</h3>
              <p className="text-fitflex-beige/80">
                Start chatting with your AI coach through WhatsApp. No app downloads, no complex setup.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-fitflex-olive rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-fitflex-beige">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-fitflex-beige">AI Learns Your Context</h3>
              <p className="text-fitflex-beige/80">
                Share your schedule, budget, preferences, and goals. Our AI builds a complete picture of your life.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-fitflex-olive rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-fitflex-beige">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-fitflex-beige">Get Adaptive Coaching</h3>
              <p className="text-fitflex-beige/80">
                Receive personalized meal plans, real-time suggestions, and motivational support that adapts to your
                changing life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-16 px-4 bg-fitflex-dark-olive">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-fitflex-beige">
            fitflex vs. The Competition
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-fitflex-black border-fitflex-olive">
              <CardHeader>
                <CardTitle className="text-fitflex-beige">MyFitnessPal / Yazio</CardTitle>
                <CardDescription className="text-fitflex-beige/60">
                  Manual tracking, no real personalization, reactive only
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-fitflex-olive font-semibold">fitflex advantage:</p>
                <p className="text-fitflex-beige/80">
                  Proactive AI coaching with deep personalization and context awareness
                </p>
              </CardContent>
            </Card>
            <Card className="bg-fitflex-black border-fitflex-olive">
              <CardHeader>
                <CardTitle className="text-fitflex-beige">Lifesum</CardTitle>
                <CardDescription className="text-fitflex-beige/60">
                  Shallow adaptation, no real-time context, generic motivation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-fitflex-olive font-semibold">fitflex advantage:</p>
                <p className="text-fitflex-beige/80">
                  Deep context learning with real-time adaptation and personalized motivation
                </p>
              </CardContent>
            </Card>
            <Card className="bg-fitflex-black border-fitflex-olive">
              <CardHeader>
                <CardTitle className="text-fitflex-beige">Noom</CardTitle>
                <CardDescription className="text-fitflex-beige/60">
                  Static psychological profiles, no real-time learning, limited spontaneity
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-fitflex-olive font-semibold">fitflex advantage:</p>
                <p className="text-fitflex-beige/80">
                  Dynamic behavioral learning with instant adaptation to life changes
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-fitflex-beige">
            Ready to Transform Your Nutrition Journey?
          </h2>
          <p className="text-xl text-fitflex-beige/80 mb-8 max-w-2xl mx-auto">
            Join thousands of students and apprentices who've discovered the power of AI-driven nutrition coaching that
            actually fits their lifestyle.
          </p>
          <Button size="lg" className="bg-fitflex-olive hover:bg-fitflex-olive/80 text-fitflex-beige text-lg px-8 py-4">
            <MessageCircle className="mr-2 h-5 w-5" />
            Start Your Free Trial
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-fitflex-dark-olive py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-fitflex-olive rounded-lg flex items-center justify-center">
              <span className="text-fitflex-beige font-bold text-lg">f</span>
            </div>
            <span className="text-2xl font-bold text-fitflex-beige">fitflex</span>
          </div>
          <p className="text-fitflex-beige/60">© 2024 fitflex. AI nutrition coaching for the next generation.</p>
        </div>
      </footer>
    </div>
  )
}
