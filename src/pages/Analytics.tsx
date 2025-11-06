import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  TrendingUp, 
  TrendingDown,
  Users,
  Target,
  Award,
  AlertTriangle
} from "lucide-react";

export default function Analytics() {
  const classPerformance = [
    { name: "Algebra II", average: 87, trend: 5, students: 28 },
    { name: "Geometry", average: 82, trend: -2, students: 24 },
    { name: "Pre-Calculus", average: 91, trend: 8, students: 22 },
  ];

  const topPerformers = [
    { name: "Sarah Johnson", grade: 98, improvement: 12 },
    { name: "Michael Chen", grade: 96, improvement: 8 },
    { name: "Emma Davis", grade: 94, improvement: 15 },
  ];

  const needsAttention = [
    { name: "Alex Wilson", grade: 68, issue: "Missing assignments" },
    { name: "Jordan Lee", grade: 72, issue: "Test scores declining" },
  ];

  const learningGaps = [
    { topic: "Quadratic Factoring", percentage: 45, affected: 12 },
    { topic: "Function Composition", percentage: 38, affected: 9 },
    { topic: "Complex Numbers", percentage: 52, affected: 15 },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="p-8 max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-semibold text-foreground mb-2">
            Student Analytics
          </h1>
          <p className="text-muted-foreground">
            Track progress, identify gaps, and celebrate achievements
          </p>
        </div>

        {/* Class Performance */}
        <Card className="p-6 mb-6">
          <h2 className="text-xl font-semibold text-foreground mb-6">Class Performance</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {classPerformance.map((cls, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 border border-border hover:border-primary/30 transition-all duration-200"
              >
                <div className="flex items-center justify-between mb-4">
                  <Users className="w-5 h-5 text-primary" />
                  <span className="text-sm text-muted-foreground">{cls.students} students</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">{cls.name}</h3>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-3xl font-bold text-foreground">{cls.average}%</span>
                  <span className={`flex items-center gap-1 text-sm font-medium ${
                    cls.trend > 0 ? "text-success" : "text-destructive"
                  }`}>
                    {cls.trend > 0 ? (
                      <TrendingUp className="w-4 h-4" />
                    ) : (
                      <TrendingDown className="w-4 h-4" />
                    )}
                    {Math.abs(cls.trend)}%
                  </span>
                </div>
                <div className="w-full bg-muted rounded-full h-2 mb-3">
                  <div
                    className="bg-primary h-2 rounded-full transition-all duration-300"
                    style={{ width: `${cls.average}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Top Performers */}
          <Card className="p-6">
            <div className="flex items-center gap-2 mb-6">
              <Award className="w-5 h-5 text-success" />
              <h2 className="text-xl font-semibold text-foreground">Top Performers</h2>
            </div>
            <div className="space-y-4">
              {topPerformers.map((student, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 p-4 rounded-lg bg-success/5 border border-success/20"
                >
                  <div className="flex items-center justify-center w-10 h-10 bg-success/10 rounded-full font-semibold text-success">
                    {idx + 1}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-foreground">{student.name}</p>
                    <p className="text-sm text-muted-foreground">
                      Improved by {student.improvement}%
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-success">{student.grade}%</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Needs Attention */}
          <Card className="p-6">
            <div className="flex items-center gap-2 mb-6">
              <AlertTriangle className="w-5 h-5 text-warning" />
              <h2 className="text-xl font-semibold text-foreground">Needs Attention</h2>
            </div>
            <div className="space-y-4">
              {needsAttention.map((student, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-lg bg-warning/5 border border-warning/20"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <p className="font-medium text-foreground mb-1">{student.name}</p>
                      <p className="text-sm text-muted-foreground">{student.issue}</p>
                    </div>
                    <span className="text-xl font-semibold text-warning">{student.grade}%</span>
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    Create Intervention Plan
                  </Button>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Learning Gaps */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Target className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-semibold text-foreground">Identified Learning Gaps</h2>
            </div>
            <Button variant="outline" size="sm">
              Generate Resources
            </Button>
          </div>
          <div className="space-y-4">
            {learningGaps.map((gap, idx) => (
              <div key={idx} className="p-4 rounded-lg border border-border hover:border-primary/30 transition-all duration-200">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h3 className="font-medium text-foreground mb-1">{gap.topic}</h3>
                    <p className="text-sm text-muted-foreground">{gap.affected} students affected</p>
                  </div>
                  <span className="text-lg font-semibold text-foreground">{gap.percentage}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-3">
                  <div
                    className="bg-primary h-3 rounded-full transition-all duration-300"
                    style={{ width: `${gap.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
