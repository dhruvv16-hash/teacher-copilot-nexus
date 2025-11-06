import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Sparkles, 
  Save, 
  Download,
  Clock,
  Target,
  BookOpen
} from "lucide-react";
import { useState } from "react";

export default function LessonPlanning() {
  const [topic, setTopic] = useState("");
  const [duration, setDuration] = useState("45");
  const [grade, setGrade] = useState("9-10");

  const aiSuggestions = [
    {
      title: "Introduction (10 min)",
      content: "Start with a real-world problem involving quadratic equations. Use the example of projectile motion.",
    },
    {
      title: "Main Activity (25 min)",
      content: "Interactive worksheet: Students work through 5 problems of increasing difficulty. Include visual graphs.",
    },
    {
      title: "Group Discussion (10 min)",
      content: "Students share different solution approaches. Highlight multiple valid methods.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="p-8 max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-semibold text-foreground mb-2">
            Lesson Planning Studio
          </h1>
          <p className="text-muted-foreground">
            Create comprehensive lesson plans with AI assistance
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Input Panel */}
          <Card className="p-6">
            <div className="flex items-center gap-2 mb-6">
              <BookOpen className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-semibold text-foreground">Lesson Details</h2>
            </div>

            <div className="space-y-6">
              <div>
                <Label htmlFor="topic" className="text-foreground mb-2 block">
                  Lesson Topic
                </Label>
                <Input
                  id="topic"
                  placeholder="e.g., Solving Quadratic Equations"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  className="bg-background"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="duration" className="text-foreground mb-2 block">
                    Duration (min)
                  </Label>
                  <Input
                    id="duration"
                    type="number"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    className="bg-background"
                  />
                </div>
                <div>
                  <Label htmlFor="grade" className="text-foreground mb-2 block">
                    Grade Level
                  </Label>
                  <Input
                    id="grade"
                    value={grade}
                    onChange={(e) => setGrade(e.target.value)}
                    className="bg-background"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="objectives" className="text-foreground mb-2 block">
                  Learning Objectives
                </Label>
                <Textarea
                  id="objectives"
                  placeholder="What should students learn from this lesson?"
                  rows={4}
                  className="bg-background resize-none"
                />
              </div>

              <div>
                <Label htmlFor="notes" className="text-foreground mb-2 block">
                  Additional Notes
                </Label>
                <Textarea
                  id="notes"
                  placeholder="Any special considerations, resources, or requirements..."
                  rows={4}
                  className="bg-background resize-none"
                />
              </div>

              <Button className="w-full gap-2" size="lg">
                <Sparkles className="w-4 h-4" />
                Generate Lesson Plan
              </Button>
            </div>
          </Card>

          {/* AI Suggestions Panel */}
          <div className="space-y-6">
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-primary" />
                  <h2 className="text-xl font-semibold text-foreground">AI Suggestions</h2>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="gap-2">
                    <Save className="w-4 h-4" />
                    Save
                  </Button>
                  <Button variant="outline" size="sm" className="gap-2">
                    <Download className="w-4 h-4" />
                    Export
                  </Button>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                {aiSuggestions.map((suggestion, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-lg bg-accent/30 border border-border hover:border-primary/30 transition-all duration-200"
                  >
                    <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      <Clock className="w-4 h-4 text-primary" />
                      {suggestion.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {suggestion.content}
                    </p>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                <div className="flex items-start gap-3">
                  <Target className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Success Criteria</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Students can identify quadratic equations</li>
                      <li>• Students can solve using factoring method</li>
                      <li>• Students understand real-world applications</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-accent/20 to-primary/5 border-primary/20">
              <h3 className="font-semibold text-foreground mb-3">Resources Needed</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                  Graphing calculators
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                  Worksheet (attached)
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                  Interactive whiteboard
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
