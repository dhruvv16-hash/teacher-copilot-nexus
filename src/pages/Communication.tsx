import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { 
  Send,
  Mail,
  MessageSquare,
  Clock,
  CheckCheck,
  Users,
  Calendar
} from "lucide-react";

export default function Communication() {
  const recentMessages = [
    {
      recipient: "Parents - Algebra II",
      subject: "Mid-term Progress Update",
      date: "2 hours ago",
      status: "sent",
      recipients: 28
    },
    {
      recipient: "Sarah Johnson's Parents",
      subject: "Excellent Performance Recognition",
      date: "Yesterday",
      status: "read",
      recipients: 1
    },
    {
      recipient: "Parents - Geometry Class",
      subject: "Upcoming Project Guidelines",
      date: "2 days ago",
      status: "sent",
      recipients: 24
    },
  ];

  const upcomingMeetings = [
    { parent: "Mr. & Mrs. Chen", student: "Alex Chen", date: "Today, 3:00 PM" },
    { parent: "Ms. Johnson", student: "Emma Johnson", date: "Tomorrow, 2:30 PM" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="p-8 max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-semibold text-foreground mb-2">
            Communication Hub
          </h1>
          <p className="text-muted-foreground">
            Connect with parents and manage meetings
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Compose Message */}
          <Card className="lg:col-span-2 p-6">
            <div className="flex items-center gap-2 mb-6">
              <Mail className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-semibold text-foreground">New Message</h2>
            </div>

            <div className="space-y-6">
              <div>
                <Label htmlFor="recipients" className="text-foreground mb-2 block">
                  Recipients
                </Label>
                <Input
                  id="recipients"
                  placeholder="Select parents or groups..."
                  className="bg-background"
                />
                <p className="text-xs text-muted-foreground mt-1">
                  Type student name or select a class
                </p>
              </div>

              <div>
                <Label htmlFor="subject" className="text-foreground mb-2 block">
                  Subject
                </Label>
                <Input
                  id="subject"
                  placeholder="e.g., Weekly Progress Update"
                  className="bg-background"
                />
              </div>

              <div>
                <Label htmlFor="message" className="text-foreground mb-2 block">
                  Message
                </Label>
                <Textarea
                  id="message"
                  placeholder="Write your message here..."
                  rows={8}
                  className="bg-background resize-none"
                />
              </div>

              <div className="flex items-center gap-3">
                <Button size="lg" className="gap-2 flex-1">
                  <Send className="w-4 h-4" />
                  Send Message
                </Button>
                <Button variant="outline" size="lg">
                  Save Draft
                </Button>
              </div>
            </div>
          </Card>

          {/* Quick Actions & Stats */}
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="font-semibold text-foreground mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start gap-2">
                  <MessageSquare className="w-4 h-4" />
                  Message All Parents
                </Button>
                <Button variant="outline" className="w-full justify-start gap-2">
                  <Users className="w-4 h-4" />
                  Class Update Template
                </Button>
                <Button variant="outline" className="w-full justify-start gap-2">
                  <Calendar className="w-4 h-4" />
                  Schedule Meeting
                </Button>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold text-foreground mb-4">Upcoming Meetings</h3>
              <div className="space-y-3">
                {upcomingMeetings.map((meeting, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-lg bg-accent/30 border border-border"
                  >
                    <p className="font-medium text-foreground text-sm mb-1">
                      {meeting.parent}
                    </p>
                    <p className="text-xs text-muted-foreground mb-2">
                      Re: {meeting.student}
                    </p>
                    <div className="flex items-center gap-1 text-xs text-primary">
                      <Clock className="w-3 h-3" />
                      {meeting.date}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Recent Messages */}
          <Card className="lg:col-span-3 p-6">
            <h2 className="text-xl font-semibold text-foreground mb-6">Recent Messages</h2>
            <div className="space-y-4">
              {recentMessages.map((message, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 p-4 rounded-lg border border-border hover:border-primary/30 transition-all duration-200"
                >
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-medium text-foreground">{message.subject}</h3>
                      {message.status === "read" ? (
                        <Badge variant="outline" className="bg-success/10 text-success border-success/20">
                          <CheckCheck className="w-3 h-3 mr-1" />
                          Read
                        </Badge>
                      ) : (
                        <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                          <Send className="w-3 h-3 mr-1" />
                          Sent
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      To: {message.recipient} ({message.recipients} recipients)
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">{message.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
