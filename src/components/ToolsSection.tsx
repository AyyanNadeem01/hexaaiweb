import React from "react";
import {
  Zap,
  Workflow,
  GitBranch,
  Repeat,
  Database,
  Cloud,
  Mail,
  Calendar,
  BarChart3,
  Settings,
  Globe,
  Users,
  Link,
  Code,
  Server,
  Smartphone,
  Shield,
  Target,
} from "lucide-react";

type Tool = {
  name: string;
  domain: string;
  icon: React.ComponentType<{ className?: string }>;
};

// Define all tools with Lucide icons
const tools: Tool[] = [
  { name: "n8n", domain: "n8n.io", icon: Workflow },
  { name: "Zapier", domain: "zapier.com", icon: Zap },
  { name: "Make (Integromat)", domain: "make.com", icon: Workflow },
  { name: "Workato", domain: "workato.com", icon: Settings },
  { name: "GoHighLevel", domain: "gohighlevel.com", icon: Target },
  { name: "Pabbly Connect", domain: "pabbly.com", icon: Link },
  { name: "Tray.io", domain: "tray.io", icon: Server },
  { name: "Automate.io", domain: "automate.io", icon: Repeat },
  { name: "GitHub Actions", domain: "github.com", icon: GitBranch },
  { name: "Azure Logic Apps", domain: "azure.microsoft.com", icon: Cloud },
  { name: "AWS Step Functions", domain: "aws.amazon.com", icon: Cloud },
  { name: "IFTTT", domain: "ifttt.com", icon: Repeat },
  { name: "HubSpot Workflows", domain: "hubspot.com", icon: Users },
  { name: "Salesforce", domain: "salesforce.com", icon: BarChart3 },
  { name: "monday.com", domain: "monday.com", icon: Calendar },
  { name: "ActiveCampaign", domain: "activecampaign.com", icon: Mail },
  { name: "Segment", domain: "segment.com", icon: BarChart3 },
  { name: "Airbyte", domain: "airbyte.io", icon: Database },
];

const ToolsSection: React.FC = () => {
  return (
    <section className="mt-0">
      <h2 className="text-2xl font-semibold mb-3">
        AI Agents & Automation Tools
      </h2>
      <p className="text-sm text-muted-foreground mb-6">
        We build integrations and automations across the ecosystem. Here are
        common platforms we connect with (click to visit):
      </p>

      <div className="grid gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {tools.map((t) => {
          const Icon = t.icon;

          return (
            <a
              key={t.domain}
              href={`https://${t.domain}`}
              target="_blank"
              rel="noreferrer"
              className="card glass p-4 flex flex-col items-center justify-center text-center hover:scale-105 transform transition-all"
            >
              <div className="w-20 h-20 mb-3 flex items-center justify-center">
                <Icon className="w-12 h-12 text-foreground" />
              </div>
              <div className="text-sm font-medium">{t.name}</div>
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default ToolsSection;
