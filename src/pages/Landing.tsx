import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Database, Users, TrendingUp, Cog, ArrowRight, Star, Target, Zap } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

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

  const coreFeatures = [
    {
      icon: Database,
      title: "Multi-source data",
      description: "You use a vast range of data from forms, log, text, images, and through our AI technology we can detect, classify, and extract vital patterns from your business"
    },
    {
      icon: Users,
      title: "Stakeholder alignment",
      description: "Our platform enhance the collaboration across teams by providing stakeholder aligned and that flows around your organization decisions making tools effortless"
    },
    {
      icon: TrendingUp,
      title: "Continuous engagement",
      description: "Business intelligence can help build to enhance shared network data and support teams to make value driven using your work"
    }
  ];

  const capabilities = [
    {
      icon: Cog,
      title: "Ready to Go Apps",
      description: "We have a range of solutions that can either change your business processes or suggest recommendations around your project upbringing around solution effortless"
    },
    {
      icon: Target,
      title: "Internal capability building",
      description: "We understand all our work within the people in management technology, and that your technical teams long experience there"
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
          <div className="font-bold text-xl">Company ABC</div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-foreground hover:text-primary transition-colors">About</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors flex items-center">
              Services <span className="ml-1">▼</span>
            </a>
            <a href="/cms" className="text-foreground hover:text-primary transition-colors">CMS</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        className="py-20 relative overflow-hidden"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Hyper boost your{" "}
              <span className="text-primary">Revenue Management, Marketing</span>{" "}
              and Commercial Functions with Business Ready AI
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              Powerful AI solutions that go beyond mere data sorting and exploration. 
              Use our array of AI enabled solutions that understand your business and 
              recommend the optimal way forward.
            </p>
            <Button variant="default" size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3">
              Get started
            </Button>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {capabilities.map((capability, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <capability.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{capability.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {capability.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {coreFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary/20 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="font-bold text-2xl mb-4">Company ABC</div>
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