import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Save, Edit3, Eye, RefreshCw } from "lucide-react";

const CMS = () => {
  const [heading, setHeading] = useState(
    "Hyper boost your Revenue Management, Marketing and Commercial Functions with Business Ready AI"
  );
  const [isEditing, setIsEditing] = useState(false);
  const [tempHeading, setTempHeading] = useState(heading);
  const [isSaving, setIsSaving] = useState(false);
  const { toast } = useToast();

  const handleSave = async () => {
    setIsSaving(true);
    
    try {
      // This would be your actual API call to save to database
      // const response = await fetch('/api/heading', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ heading: tempHeading })
      // });
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setHeading(tempHeading);
      setIsEditing(false);
      
      toast({
        title: "Success!",
        description: "Heading updated successfully. Changes are now live on the website.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to save heading. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSaving(false);
    }
  };

  const handleCancel = () => {
    setTempHeading(heading);
    setIsEditing(false);
  };

  const handlePreview = () => {
    // In a real app, this would open the landing page in a new tab
    window.open('/', '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h1 className="font-bold text-xl text-primary">Company ABC CMS</h1>
            <span className="text-sm text-muted-foreground">Content Management System</span>
          </div>
          <div className="flex items-center gap-2">
            <Button 
              variant="outline" 
              onClick={handlePreview}
              className="flex items-center gap-2"
            >
              <Eye className="w-4 h-4" />
              Preview Site
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Page Title */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2">Website Content Management</h2>
            <p className="text-muted-foreground">
              Manage your website's main heading. Changes will be reflected on the live site immediately.
            </p>
          </div>

          {/* Main Heading Editor */}
          <Card className="p-6 mb-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Edit3 className="w-5 h-5" />
                Main Heading
              </h3>
              <div className="flex gap-2">
                {!isEditing ? (
                  <Button 
                    onClick={() => setIsEditing(true)}
                    variant="outline"
                  >
                    <Edit3 className="w-4 h-4 mr-2" />
                    Edit
                  </Button>
                ) : (
                  <>
                    <Button 
                      onClick={handleCancel}
                      variant="outline"
                    >
                      Cancel
                    </Button>
                    <Button 
                      onClick={handleSave}
                      disabled={isSaving || tempHeading.trim() === ""}
                      variant="cta"
                    >
                      {isSaving ? (
                        <>
                          <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                          Saving...
                        </>
                      ) : (
                        <>
                          <Save className="w-4 h-4 mr-2" />
                          Save Changes
                        </>
                      )}
                    </Button>
                  </>
                )}
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-muted-foreground mb-2 block">
                  Current Heading:
                </label>
                {!isEditing ? (
                  <div className="p-4 bg-muted rounded-lg border">
                    <p className="text-lg font-medium">{heading}</p>
                  </div>
                ) : (
                  <Textarea
                    value={tempHeading}
                    onChange={(e) => setTempHeading(e.target.value)}
                    placeholder="Enter your main heading..."
                    className="min-h-[120px] text-lg"
                    rows={4}
                  />
                )}
              </div>

              {isEditing && (
                <div className="text-sm text-muted-foreground">
                  <p>✨ Tips:</p>
                  <ul className="list-disc list-inside mt-1 space-y-1">
                    <li>Keep your heading engaging and clear</li>
                    <li>Aim for 10-15 words for optimal impact</li>
                    <li>Include your key value proposition</li>
                  </ul>
                </div>
              )}
            </div>
          </Card>

          {/* Preview Section */}
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Eye className="w-5 h-5" />
              Live Preview
            </h3>
            <div className="bg-gradient-hero rounded-lg p-8 text-center">
              <h1 className="text-2xl md:text-4xl font-bold text-primary-foreground leading-tight">
                {isEditing ? tempHeading : heading}
              </h1>
              <p className="text-primary-glow mt-4">
                This is how your heading will appear on the website
              </p>
            </div>
          </Card>

          {/* Status Section */}
          <div className="mt-8 p-4 bg-secondary/20 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">Website Status</h4>
                <p className="text-sm text-muted-foreground">
                  Last updated: {new Date().toLocaleDateString()} at {new Date().toLocaleTimeString()}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium text-green-600">Live</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CMS;