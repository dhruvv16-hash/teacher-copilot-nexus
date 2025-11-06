import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Plus,
  Clock,
  CheckCircle2,
  AlertCircle,
  FileText,
  Calendar
} from "lucide-react";

export default function Assignments() {
  const assignments = [
    {
      title: "Unit 5: Quadratic Equations Quiz",
      class: "Algebra II",
      dueDate: "Mar 15, 2024",
      submitted: 24,
      total: 28,
      status: "active",
      avgScore: 85
    },
    {
      title: "Chapter 7 Homework",
      class: "Geometry",
      dueDate: "Mar 18, 2024",
      submitted: 18,
      total: 24,
      status: "active",
      avgScore: null
    },
    {
      title: "Trigonometry Project",
      class: "Pre-Calculus",
      dueDate: "Mar 20, 2024",
      submitted: 22,
      total: 22,
      status: "grading",
      avgScore: 92
    },
    {
      title: "Mid-term Review Sheet",
      class: "Algebra II",
      dueDate: "Mar 10, 2024",
      submitted: 28,
      total: 28,
      status: "completed",
      avgScore: 88
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-primary/10 text-primary border-primary/20";
      case "grading":
        return "bg-warning/10 text-warning border-warning/20";
      case "completed":
        return "bg-success/10 text-success border-success/20";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "active":
        return <Clock className="w-4 h-4" />;
      case "grading":
        return <AlertCircle className="w-4 h-4" />;
      case "completed":
        return <CheckCircle2 className="w-4 h-4" />;
      default:
        return <FileText className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="p-8 max-w-7xl mx-auto">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-semibold text-foreground mb-2">
              Assignments
            </h1>
            <p className="text-muted-foreground">
              Manage and track all your assignments
            </p>
          </div>
          <Button size="lg" className="gap-2">
            <Plus className="w-5 h-5" />
            Create Assignment
          </Button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card className="p-4 bg-primary/5 border-primary/20">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Active</p>
                <p className="text-2xl font-semibold text-foreground">2</p>
              </div>
            </div>
          </Card>
          <Card className="p-4 bg-warning/5 border-warning/20">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-warning/10 rounded-lg">
                <AlertCircle className="w-5 h-5 text-warning" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Grading</p>
                <p className="text-2xl font-semibold text-foreground">1</p>
              </div>
            </div>
          </Card>
          <Card className="p-4 bg-success/5 border-success/20">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-success/10 rounded-lg">
                <CheckCircle2 className="w-5 h-5 text-success" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Completed</p>
                <p className="text-2xl font-semibold text-foreground">1</p>
              </div>
            </div>
          </Card>
          <Card className="p-4 bg-accent/30 border-border">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <FileText className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total</p>
                <p className="text-2xl font-semibold text-foreground">4</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Assignments List */}
        <div className="space-y-4">
          {assignments.map((assignment, idx) => (
            <Card
              key={idx}
              className="p-6 hover:shadow-md transition-all duration-200"
            >
              <div className="flex items-start justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-semibold text-foreground">
                      {assignment.title}
                    </h3>
                    <Badge
                      variant="outline"
                      className={getStatusColor(assignment.status)}
                    >
                      <span className="flex items-center gap-1">
                        {getStatusIcon(assignment.status)}
                        {assignment.status}
                      </span>
                    </Badge>
                  </div>
                  <p className="text-muted-foreground mb-4">{assignment.class}</p>

                  <div className="flex items-center gap-6 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      Due: {assignment.dueDate}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-foreground font-medium">
                        {assignment.submitted}/{assignment.total}
                      </span>
                      <span className="text-muted-foreground">submitted</span>
                    </div>
                    {assignment.avgScore && (
                      <div className="flex items-center gap-2">
                        <span className="text-foreground font-medium">
                          {assignment.avgScore}%
                        </span>
                        <span className="text-muted-foreground">avg score</span>
                      </div>
                    )}
                  </div>

                  {assignment.status !== "completed" && (
                    <div className="mt-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-sm text-muted-foreground">Progress</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className="bg-primary h-2 rounded-full transition-all duration-300"
                          style={{
                            width: `${(assignment.submitted / assignment.total) * 100}%`,
                          }}
                        />
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                  {assignment.status === "grading" && (
                    <Button size="sm">Grade Now</Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
