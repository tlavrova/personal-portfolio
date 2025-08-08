export interface Experience {
  id: number;
  jobTitle: string;
  company: string;
  website?: string;
  period: string;
  responsibilities: string[];
}

export const experiencesData: Experience[] = [
  {
    id: 1,
    jobTitle: "Frontend Software Engineer",
    company: "Dialog",
    website: "https://www.dialog.nl/",
    period: "Sep 2022 — Present",
    responsibilities: [
      "Developed and maintained Angular-based frontend features using TypeScript",
      "Created unit tests for frontend logic and components",
      "Participated in backend development using C#, ASP.NET, and SQL",
      "Collaborated with cross-functional teams to deliver new functionalities and bug fixes",
    ],
  },
  {
    id: 2,
    jobTitle: "Frontend Developer",
    company: "BUX",
    website: "https://bux.com/",
    period: "Jan 2021 — Sep 2022",
    responsibilities: [
      "Contributed to multiple frontend projects using Angular and React",
      "Improved UI responsiveness and accessibility across core components",
      "Worked closely with design and QA to ensure consistent UX",
        "Used Git for version control and participated in code reviews"
    ],
  },
    {
        id: 3,
        jobTitle: "Software Engineer",
        company: "Forex Club",
        website: "https://www.fxclub.org/",
        period: "Aug 2014 — Aug 2015",
        responsibilities: [
        "Development of new functional units and maintenance of existing",
        "User counseling and support",
        "Improving and configuring 1C (ERP system) for trade management, accounting, salary and staff management",
        "Developing in 1C programming language",
        "Data manipulation with SQL",
        "Working with common data formats for data exchange such as XML, CSV."
        ],
    },
    {
        id: 4,
        jobTitle: "Software Engineer",
        company: "Coffee House",
        website: "https://www.coffeehouse.ru/",
        period: "Aug 2011 — Aug 2014",
        responsibilities: [
            "Maintenance of the 1C (ERP system) configuration \"Salary and personnel management",
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
        responsibilities: [
            "Business process support",
            "Development of new functionality",
            "Development new reports and optimizing old ones"
        ],
    },
    {
        id: 6,
        jobTitle: "1C Consultant",
        company: "LLC Rebis",
        website: "https://www.rebis-online.ru/",
        period: "Aug 2009 — Aug 2010",
        responsibilities: [
            "Business process automation (accounting, human resources)",
            "Work with customers to implement and maintain software 1C (ERP system)",
            "Consulting on accounting, tax accounting, payroll",
            "Update of atypical 1C (ERP system) configurations",
            "Customization of configurations."
        ],
    }
];
