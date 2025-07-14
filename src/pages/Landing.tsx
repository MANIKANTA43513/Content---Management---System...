import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Zap, TrendingUp, Target, Users, ArrowRight, Star } from "lucide-react";

const Landing = () => {
  const [mainHeading, setMainHeading] = useState(
    "Hyper boost your Revenue Management, Marketing and Commercial Functions with Business Ready AI"
  );

  // In a real implementation, this would fetch from your API
  useEffect(() => {
    // Mock API call to get the dynamic heading
    // This would be replaced with actual API call using Supabase
    const fetchHeading = async () => {
      try {
        // const response = await fetch('/api/heading');
        // const data = await response.json();
        // setMainHeading(data.heading);
      } catch (error) {
        console.error('Error fetching heading:', error);
      }
    };
    
    fetchHeading();
  }, []);

  const features = [
    {
      icon: TrendingUp,
      title: "Revenue Optimization",
      description: "AI-powered analytics to maximize your revenue streams and identify growth opportunities."
    },
    {
      icon: Target,
      title: "Smart Marketing",
      description: "Targeted campaigns that convert better with machine learning insights."
    },
    {
      icon: Users,
      title: "Customer Intelligence",
      description: "Deep customer behavior analysis to improve retention and satisfaction."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechCorp",
      content: "Company ABC transformed our revenue strategy. We saw 40% growth in just 6 months.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Marketing Director, GrowthCo",
      content: "The AI insights are game-changing. Our marketing ROI improved by 65%.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="font-bold text-xl text-primary">Company ABC</div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-foreground hover:text-primary transition-colors">Features</a>
            <a href="#testimonials" className="text-foreground hover:text-primary transition-colors">Testimonials</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
            <Button variant="outline">Sign In</Button>
            <Button variant="cta">Get Started</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background to-secondary/20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent leading-tight">
              {mainHeading}
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Unlock the power of artificial intelligence to drive unprecedented growth 
              across your entire commercial ecosystem.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="text-lg px-8 py-4">
                Start Free Trial <ArrowRight className="ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Powerful AI-Driven Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Transform your business operations with cutting-edge artificial intelligence 
              designed for modern enterprises.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-8 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">50K+</div>
              <div className="text-primary-glow">Active Users</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-primary-glow">Customer Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">2.5x</div>
              <div className="text-primary-glow">Average ROI Increase</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-primary-glow">AI-Powered Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-muted-foreground">
              See how companies are transforming their business with our AI solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-lg mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-muted-foreground">{testimonial.role}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 text-primary-glow">
              Join thousands of companies already using our AI-powered solutions 
              to drive unprecedented growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="secondary" 
                size="lg" 
                className="text-lg px-8 py-4 bg-white text-primary hover:bg-white/90"
              >
                Get Started Free <Zap className="ml-2" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary"
              >
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary/20 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="font-bold text-2xl text-primary mb-4">Company ABC</div>
            <p className="text-muted-foreground mb-6">
              Empowering businesses with next-generation AI solutions.
            </p>
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Support</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;