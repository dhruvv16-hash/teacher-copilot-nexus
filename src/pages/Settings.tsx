import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { 
  User,
  Bell,
  Palette,
  Shield,
  Database,
  Save
} from "lucide-react";

export default function Settings() {
  return (
    <div className="min-h-screen bg-background">
      <div className="p-8 max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-semibold text-foreground mb-2">
            Settings
          </h1>
          <p className="text-muted-foreground">
            Manage your account and preferences
          </p>
        </div>

        <div className="space-y-6">
          {/* Profile Settings */}
          <Card className="p-6">
            <div className="flex items-center gap-2 mb-6">
              <User className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-semibold text-foreground">Profile Information</h2>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName" className="text-foreground mb-2 block">
                    First Name
                  </Label>
                  <Input
                    id="firstName"
                    defaultValue="Jane"
                    className="bg-background"
                  />
                </div>
                <div>
                  <Label htmlFor="lastName" className="text-foreground mb-2 block">
                    Last Name
                  </Label>
                  <Input
                    id="lastName"
                    defaultValue="Doe"
                    className="bg-background"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="email" className="text-foreground mb-2 block">
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  defaultValue="jane.doe@school.edu"
                  className="bg-background"
                />
              </div>

              <div>
                <Label htmlFor="subject" className="text-foreground mb-2 block">
                  Subject/Department
                </Label>
                <Input
                  id="subject"
                  defaultValue="Mathematics"
                  className="bg-background"
                />
              </div>

              <Button className="gap-2">
                <Save className="w-4 h-4" />
                Save Changes
              </Button>
            </div>
          </Card>

          {/* Notification Settings */}
          <Card className="p-6">
            <div className="flex items-center gap-2 mb-6">
              <Bell className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-semibold text-foreground">Notifications</h2>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-foreground">Email Notifications</p>
                  <p className="text-sm text-muted-foreground">
                    Receive email updates about assignments and messages
                  </p>
                </div>
                <Switch defaultChecked />
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-foreground">Student Alerts</p>
                  <p className="text-sm text-muted-foreground">
                    Get notified when students need attention
                  </p>
                </div>
                <Switch defaultChecked />
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-foreground">Assignment Reminders</p>
                  <p className="text-sm text-muted-foreground">
                    Daily summary of pending grading tasks
                  </p>
                </div>
                <Switch defaultChecked />
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-foreground">Parent Messages</p>
                  <p className="text-sm text-muted-foreground">
                    Notifications for new parent communications
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
          </Card>

          {/* Appearance Settings */}
          <Card className="p-6">
            <div className="flex items-center gap-2 mb-6">
              <Palette className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-semibold text-foreground">Appearance</h2>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-foreground">Dark Mode</p>
                  <p className="text-sm text-muted-foreground">
                    Switch to dark theme
                  </p>
                </div>
                <Switch />
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-foreground">Compact View</p>
                  <p className="text-sm text-muted-foreground">
                    Show more content on screen
                  </p>
                </div>
                <Switch />
              </div>
            </div>
          </Card>

          {/* Privacy & Security */}
          <Card className="p-6">
            <div className="flex items-center gap-2 mb-6">
              <Shield className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-semibold text-foreground">Privacy & Security</h2>
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="currentPassword" className="text-foreground mb-2 block">
                  Current Password
                </Label>
                <Input
                  id="currentPassword"
                  type="password"
                  className="bg-background"
                />
              </div>

              <div>
                <Label htmlFor="newPassword" className="text-foreground mb-2 block">
                  New Password
                </Label>
                <Input
                  id="newPassword"
                  type="password"
                  className="bg-background"
                />
              </div>

              <div>
                <Label htmlFor="confirmPassword" className="text-foreground mb-2 block">
                  Confirm New Password
                </Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  className="bg-background"
                />
              </div>

              <Button variant="outline" className="gap-2">
                <Shield className="w-4 h-4" />
                Update Password
              </Button>
            </div>
          </Card>

          {/* Data Management */}
          <Card className="p-6">
            <div className="flex items-center gap-2 mb-6">
              <Database className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-semibold text-foreground">Data Management</h2>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-foreground">Auto-save Drafts</p>
                  <p className="text-sm text-muted-foreground">
                    Automatically save lesson plans and messages
                  </p>
                </div>
                <Switch defaultChecked />
              </div>

              <Separator />

              <div>
                <p className="font-medium text-foreground mb-2">Export Data</p>
                <p className="text-sm text-muted-foreground mb-4">
                  Download your lessons, grades, and student data
                </p>
                <Button variant="outline">
                  Export All Data
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
