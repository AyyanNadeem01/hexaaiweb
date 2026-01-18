import React from "react";
import { SiZapier, SiMake, SiGithub, SiIfttt, SiHubspot, SiSalesforce, SiAirbyte } from "react-icons/si";

const tools: { name: string; domain: string }[] = [
  { name: "n8n", domain: "n8n.io" },
  { name: "Zapier", domain: "zapier.com" },
  { name: "Make (Integromat)", domain: "make.com" },
  { name: "Workato", domain: "workato.com" },
  { name: "GoHighLevel", domain: "gohighlevel.com" },
  { name: "Pabbly Connect", domain: "pabbly.com" },
  { name: "Tray.io", domain: "tray.io" },
  { name: "Automate.io", domain: "automate.io" },
  { name: "GitHub Actions", domain: "github.com" },
  { name: "Azure Logic Apps", domain: "azure.microsoft.com" },
  { name: "AWS Step Functions", domain: "aws.amazon.com" },
  { name: "IFTTT", domain: "ifttt.com" },
  { name: "HubSpot Workflows", domain: "hubspot.com" },
  { name: "Salesforce", domain: "salesforce.com" },
  { name: "monday.com", domain: "monday.com" },
  { name: "ActiveCampaign", domain: "activecampaign.com" },
  { name: "Segment", domain: "segment.com" },
  { name: "Airbyte", domain: "airbyte.io" },
];

const ToolsSection: React.FC = () => {
  return (
    <section className="mt-12">
      <h2 className="text-2xl font-semibold mb-3">
        AI Agents & Automation Tools
      </h2>
      <p className="text-sm text-muted-foreground mb-6">
        We build integrations and automations across the ecosystem. Here are
        common platforms we connect with (click to visit):
      </p>

      <div className="grid gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {tools.map((t) => {
          const ICON_MAP: Record<string, React.ComponentType<unknown>> = {
            "zapier.com": SiZapier,
            "make.com": SiMake,
            "github.com": SiGithub,
            "ifttt.com": SiIfttt,
            "hubspot.com": SiHubspot,
            "salesforce.com": SiSalesforce,
            "airbyte.io": SiAirbyte,
          };

          const Icon = ICON_MAP[t.domain] || null;

          return (
            <a
              key={t.domain}
              href={`https://${t.domain}`}
              target="_blank"
              rel="noreferrer"
              className="card glass p-4 flex flex-col items-center justify-center text-center hover:scale-105 transform transition-all"
            >
              <div className="w-20 h-20 mb-3 flex items-center justify-center">
                {Icon ? (
                  <Icon className="w-12 h-12 text-foreground" />
                ) : (
                  <>
                    {/* try SimpleIcons CDN first (SVG), then Clearbit as secondary fallback */}
                    <img
                      src={`https://cdn.simpleicons.org/${t.domain.split(".")[0]}/ffffff`}
                      alt={`${t.name} logo`}
                      className="max-w-full max-h-full object-contain"
                      onError={(e) => {
                        // hide this image and let Clearbit attempt
                        (e.currentTarget as HTMLImageElement).style.display = "none";
                        const cb = e.currentTarget.nextElementSibling as HTMLImageElement | null;
                        if (cb) cb.style.display = "block";
                      }}
                    />
                    <img
                      src={`https://logo.clearbit.com/${t.domain}?size=128`}
                      alt={`${t.name} logo`}
                      className="max-w-full max-h-full object-contain"
                      style={{ display: "none" }}
                      onError={(e) => ((e.currentTarget as HTMLImageElement).style.display = "none")}
                    />
                    <div className="w-20 h-20 flex items-center justify-center bg-border text-sm text-muted-foreground rounded-md">
                      {t.name
                        .split(/\s|\.|-/)
                        .map((p) => (p ? p[0] : ""))
                        .join("")}
                    </div>
                  </>
                )}
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
