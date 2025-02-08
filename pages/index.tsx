import { useState } from "react";
import Button from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Home, Calendar, Users, FileText, Bell, MessageSquare, Sun, Moon } from "lucide-react";

interface Section {
  id: string;
  name: string;
  icon: JSX.Element;
}

export default function Dashboard() {
  const [activeSection, setActiveSection] = useState<string>("dashboard");
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const sections: Section[] = [
    { id: "dashboard", name: "Dashboard", icon: <Home size={20} /> },
    { id: "events", name: "Evenimente", icon: <Calendar size={20} /> },
    { id: "staff", name: "Staff", icon: <Users size={20} /> },
    { id: "tasks", name: "Sarcini", icon: <FileText size={20} /> },
    { id: "reports", name: "Rapoarte", icon: <FileText size={20} /> },
    { id: "notifications", name: "Notificări", icon: <Bell size={20} /> },
    { id: "messages", name: "Mesagerie", icon: <MessageSquare size={20} /> },
  ];

  return (
    <div className={`flex h-screen ${darkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-black"}`}>
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white p-4 flex flex-col space-y-4">
        <h2 className="text-xl font-bold text-center">Event Manager</h2>
        <div className="flex items-center justify-between p-2">
          <Sun size={20} />
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
            <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-gray-300 dark:peer-focus:ring-gray-600 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full after:absolute after:top-1 after:left-1 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600"></div>
          </label>
          <Moon size={20} />
        </div>
        {sections.map((section) => (
          <Button
            key={section.id}
            variant={activeSection === section.id ? "default" : "ghost"}
            className="flex items-center space-x-2 w-full justify-start"
            onClick={() => setActiveSection(section.id)}
          >
            {section.icon}
            <span>{section.name}</span>
          </Button>
        ))}
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold">{sections.find(s => s.id === activeSection)?.name}</h1>
        <Card className="mt-4 p-4">
          <CardContent>
            <p className="text-gray-600 dark:text-gray-300">Conținutul pentru secțiunea {sections.find(s => s.id === activeSection)?.name} va fi afișat aici.</p>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
