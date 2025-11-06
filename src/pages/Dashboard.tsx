import { DashboardCard } from "@/components/DashboardCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  BookOpen, 
  CheckCircle2, 
  Users, 
  AlertCircle,
  Plus,
  Clock,
  TrendingUp
} from "lucide-react";

export default function Dashboard() {
  const upcomingClasses = [
    { time: "9:00 AM", name: "Algebra II - Period 3", students: 28 },
    { time: "11:00 AM", name: "Geometry - Period 5", students: 24 },
    { time: "2:00 PM", name: "Pre-Calculus - Period 7", students: 22 },
  ];

  const recentActivity = [
    { action: "Graded", item: "Unit 5 Quiz", time: "2 hours ago" },
    { action: "Created", item: "Week 8 Lesson Plan", time: "5 hours ago" },
    { action: "Updated", item: "Student Progress Reports", time: "Yesterday" },
  ];

  const alerts = [
    { student: "Alex Chen", issue: "Missing 3 assignments", priority: "high" },
    { student: "Emma Johnson", issue: "Grade dropped 15%", priority: "medium" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="p-8 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-semibold text-foreground mb-2">
            Good morning, Jane! 👋
          </h1>
          <p className="text-muted-foreground">
            Here's what's happening with your classes today
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <DashboardCard
            title="Total Students"
            value={74}
            description="Across 3 classes"
            icon={Users}
            trend={{ value: 5, isPositive: true }}
          />
          <DashboardCard
            title="Assignments Due"
            value={12}
            description="This week"
            icon={CheckCircle2}
          />
          <DashboardCard
            title="Avg. Class Grade"
            value="87%"
            description="Up from last month"
            icon={TrendingUp}
            trend={{ value: 3, isPositive: true }}
          />
          <DashboardCard
            title="Pending Grading"
            value={23}
            description="Submissions waiting"
            icon={Clock}
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Today's Classes */}
          <Card className="lg:col-span-2 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-foreground">Today's Schedule</h2>
              <Button size="sm" className="gap-2">
                <Plus className="w-4 h-4" />
                Add Class
              </Button>
            </div>
            <div className="space-y-4">
              {upcomingClasses.map((cls, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 p-4 rounded-lg bg-accent/50 hover:bg-accent transition-colors duration-200"
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg">
                    <BookOpen className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-foreground">{cls.name}</h3>
                    <p className="text-sm text-muted-foreground">{cls.students} students</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-foreground">{cls.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Alerts & Notifications */}
          <Card className="p-6">
            <div className="flex items-center gap-2 mb-6">
              <AlertCircle className="w-5 h-5 text-warning" />
              <h2 className="text-xl font-semibold text-foreground">Student Alerts</h2>
            </div>
            <div className="space-y-4">
              {alerts.map((alert, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-lg border border-border hover:border-warning/50 transition-colors duration-200"
                >
                  <p className="font-medium text-foreground mb-1">{alert.student}</p>
                  <p className="text-sm text-muted-foreground mb-3">{alert.issue}</p>
                  <Button variant="outline" size="sm" className="w-full">
                    Review
                  </Button>
                </div>
              ))}
            </div>
          </Card>

          {/* Recent Activity */}
          <Card className="lg:col-span-3 p-6">
            <h2 className="text-xl font-semibold text-foreground mb-6">Recent Activity</h2>
            <div className="space-y-3">
              {recentActivity.map((activity, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted transition-colors duration-200"
                >
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <div className="flex-1">
                    <p className="text-sm text-foreground">
                      <span className="font-medium">{activity.action}</span> {activity.item}
                    </p>
                  </div>
                  <p className="text-xs text-muted-foreground">{activity.time}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
