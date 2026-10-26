export interface Experience {
  id: number;
  jobTitle: string;
  company: string;
  website?: string;
  period: string;
  description?: string;
  technologies: string[];
  responsibilities: string[];
}

export const experiencesData: Experience[] = [
  {
    id: 1,
    jobTitle: "Frontend Developer",
    company: "Visma Dialog",
    website: "https://www.dialog.nl/",
    period: "Sep 2022 — Present",
    description: "HR SaaS platform for performance, talent and engagement management, part of the Visma group.",
    technologies: ["Angular", "TypeScript", "Storybook", "Claude Code", "C#", "ASP.NET", "SQL"],
    responsibilities: [
      "Contributed to the development of an AI coaching chat assistant that helps managers prepare and summarize conversations with their team",
      "Contributed to AI-powered analysis of engagement survey results, turning employee responses into insights and key themes for managers",
      "Contributed to AI-mapping for talent management: AI-generated suggestions for placing employees on a 9-box grid, with explanations and an interactive drag-and-drop grid",
      "Upgraded the platform through seven major Angular versions, from Angular 15 to the latest Angular 22, adopting Signals, standalone components, the new control flow and deferrable views",
      "Developed a design system from scratch with Storybook integration",
      "Increased unit test coverage, reducing post-release bugs by ~20%",
      "Contributed to backend development with C#, ASP.NET and SQL",
      "Designed custom Claude Code skills for automated code review against team conventions",
    ],
  },
  {
    id: 2,
    jobTitle: "Frontend Developer",
    company: "BUX",
    website: "https://bux.com/",
    period: "Jan 2021 — Sep 2022",
    technologies: ["Angular", "React", "Git"],
    responsibilities: [
      "Contributed to multiple frontend projects using Angular and React",
      "Improved UI responsiveness and accessibility across core components",
      "Worked closely with design and QA to ensure consistent UX",
      "Used Git for version control and participated in code reviews",
    ],
  },
    {
        id: 3,
        jobTitle: "Software Engineer",
        company: "Forex Club",
        website: "https://www.fxclub.org/",
        period: "Aug 2014 — Aug 2015",
        technologies: ["1C", "SQL", "XML", "CSV"],
        responsibilities: [
        "Development of new functional units and maintenance of existing ones",
        "User counseling and support",
        "Improving and configuring 1C (ERP system) for trade management, accounting, salary and staff management",
        "Developing in 1C programming language",
        "Data manipulation with SQL",
        "Working with common data formats for data exchange such as XML, CSV"
        ],
    },
    {
        id: 4,
        jobTitle: "Software Engineer",
        company: "Coffee House",
        website: "https://www.coffeehouse.ru/",
        period: "Aug 2011 — Aug 2014",
        technologies: ["1C"],
        responsibilities: [
            "Maintenance of the 1C (ERP system) configuration \"Salary and personnel management\"",
            "Updating configurations",
            "Modifying configurations",
            "Consulting of employees",
            "Support and improving of data exchange with the corporate portal"
        ],
    },
    {
        id: 5,
        jobTitle: "Software Engineer",
        company: "Development and construction company Likos",
        website: "https://likos.ru/",
        period: "Aug 2010 — Aug 2011",
        technologies: ["1C"],
        responsibilities: [
            "Business process support",
            "Development of new functionality",
            "Development of new reports and optimization of existing ones"
        ],
    },
    {
        id: 6,
        jobTitle: "1C Consultant",
        company: "LLC Rebis",
        website: "https://www.rebis-online.ru/",
        period: "Aug 2009 — Aug 2010",
        technologies: ["1C"],
        responsibilities: [
            "Business process automation (accounting, human resources)",
            "Work with customers to implement and maintain software 1C (ERP system)",
            "Consulting on accounting, tax accounting, payroll",
            "Update of atypical 1C (ERP system) configurations",
            "Customization of configurations"
        ],
    }
];
