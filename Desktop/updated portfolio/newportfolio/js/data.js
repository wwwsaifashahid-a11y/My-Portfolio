/**
 * ============================================================
 *  PROJECT DATA
 * ============================================================
 *  Add a new project by copying an object below and editing it.
 *  Every project automatically gets a card + a modal — no other
 *  file needs to change. See README.md → "How to add a project".
 *
 *  Fields:
 *  - id            : unique slug, used internally
 *  - platform      : "make" | "n8n" | "zapier"  (controls filter + badge)
 *  - name          : project title
 *  - tagline       : one-line description shown on the card
 *  - problem       : the manual/repetitive problem being solved
 *  - solution      : short description of the automation built
 *  - workflow      : array of steps, shown as Trigger → Action chain
 *  - features      : array of key feature strings
 *  - businessValue : array of business-value strings
 *  - tech          : array of tools/apps/tech used
 *  - links         : { github: "", live: "" }  — leave "" to hide the button
 *  - screenshot    : path to a screenshot image, or "" for a placeholder
 * ============================================================
 */

const PROJECTS = [
  {
    id: "business-lead-automation",
    platform: "make",
    name: "Business Lead Automation",
    tagline: "Automatically captures, processes and organizes incoming business leads.",
    problem:
      "New leads were arriving through different channels and had to be checked, formatted and " +
      "logged by hand — slow, repetitive, and easy to fall behind on.",
    solution:
      "A Make.com scenario that picks up each new lead as it comes in, processes and structures " +
      "the data, triggers the right automated action, and stores the result in an organized, " +
      "ready-to-use format — removing the manual handling step entirely.",
    workflow: ["Trigger", "Lead Data", "Processing", "Automated Action", "Organized Output"],
    features: [
      "Automatic lead capture on new submission",
      "Structured data processing before storage",
      "Conditional logic to route leads appropriately",
      "Automated action triggered without manual input",
    ],
    businessValue: [
      "Removes manual lead handling and data entry",
      "Keeps lead information consistent and organized",
      "Faster response time from trigger to action",
    ],
    tech: ["Make.com", "Webhooks", "Data Mapping", "Conditional Logic"],
    links: { github: "", live: "" },
    screenshot: "",
  },
  {
    id: "n8n-project-placeholder",
    platform: "n8n",
    name: "[ Add your n8n project name ]",
    tagline: "Short one-line description of what this workflow automates.",
    problem: "Describe the manual/repetitive process this workflow replaces.",
    solution: "Describe the n8n workflow you built to solve it — nodes, logic, and flow.",
    workflow: ["Trigger", "Webhook / API Call", "Data Processing", "Conditional Logic", "Action"],
    features: [
      "Add a key feature of this workflow",
      "Add another key feature",
      "Add another key feature",
    ],
    businessValue: [
      "Add the business value this workflow delivers",
      "Add another business outcome",
    ],
    tech: ["n8n", "Webhooks", "API Integration"],
    links: { github: "", live: "" },
    screenshot: "",
  },
  {
    id: "zapier-project-placeholder",
    platform: "zapier",
    name: "[ Add your Zapier project name ]",
    tagline: "Short one-line description of what this Zap automates.",
    problem: "Describe the manual/repetitive task this Zap removes.",
    solution: "Describe the trigger and chained actions that make up this Zap.",
    workflow: ["Trigger App", "Filter / Logic", "Action App", "Automated Task Completed"],
    features: [
      "Add a key feature of this Zap",
      "Add another key feature",
    ],
    businessValue: [
      "Add the business value this Zap delivers",
    ],
    tech: ["Zapier", "App Integrations"],
    links: { github: "", live: "" },
    screenshot: "",
  },
];
