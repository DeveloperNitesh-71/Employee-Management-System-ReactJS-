const employees = [
  {
    id: 1,
    name: "Nitesh Pal",
    logo: "NP",
    email: "employee1@company.com",
    password: "123",
    tasks: [
      {
        TaskId: 1,
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Update Landing Page",
        taskDescription: "Fix responsiveness issues on the hero section for mobile devices.",
        taskDate: "2026-05-26",
        category: "Design"
      },
      {
        TaskId: 2, 
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Bug Fixes",
        taskDescription: "Resolve console errors on the login page authentication flow.",
        taskDate: "2026-05-24",
        category: "Development"
      },
      {
        TaskId: 3,
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Team Sync",
        taskDescription: "Attend the weekly sprint planning meeting with the design team.",
        taskDate: "2026-05-27",
        category: "Meeting"
      }
    ]
  },
  {
    id: 2,
    name: "Suraj Sharma",
    logo: "SS",
    email: "employee2@company.com",
    password: "123",
    tasks: [
      {
        TaskId: 1, 
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Database Migration",
        taskDescription: "Migrate legacy user data to the new schema setup.",
        taskDate: "2026-05-23",
        category: "Backend"
      },
      {
        TaskId: 2, 
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "API Integration",
        taskDescription: "Connect the dashboard analytics wTaskIdgets to the third-party metrics API.",
        taskDate: "2026-05-26",
        category: "Development"
      },
      {
        TaskId: 3, 
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Code Review",
        taskDescription: "Review pull requests for the admin panel registration module.",
        taskDate: "2026-05-26",
        category: "Quality Assurance"
      },
      {
        TaskId: 4,
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Asset Optimization",
        taskDescription: "Compress all newly added SVG icons and images for faster loading.",
        taskDate: "2026-05-25",
        category: "Design"
      }
    ]
  },
  {
    id: 3,
    name: "Saurabh Raj",
    logo: "SR",
    email: "employee3@company.com",
    password: "123",
    tasks: [
      {
        TaskId: 1,
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Tailwind Component Library",
        taskDescription: "Build reusable button and input components using Tailwind CSS.",
        taskDate: "2026-05-28",
        category: "UI/UX"
      },
      {
        TaskId: 2,
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Setup ESLint",
        taskDescription: "Configure ESLint and Prettier rules across the project repository.",
        taskDate: "2026-05-22",
        category: "Configuration"
      },
      {
        TaskId: 3,
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Client Feedback Implementation",
        taskDescription: "Adjust font sizes and padding settings based on the client's latest feedback.",
        taskDate: "2026-05-26",
        category: "Design"
      },
      {
        TaskId: 4, 
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Deploy Staging Build",
        taskDescription: "Deploy the latest beta features to the staging server for client preview.",
        taskDate: "2026-05-24",
        category: "DevOps"
      },
      {
        TaskId: 5, 
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Documentation",
        taskDescription: "Write basic setup instructions in the README.md file for new developers.",
        taskDate: "2026-05-27",
        category: "Documentation"
      }
    ]
  },
  {
    id: 4,
    name: "Pulkit Verma",
    logo: "PV",
    email: "employee4@company.com",
    password: "123",
    tasks: [
      {
        TaskId: 1,
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Create Favicons",
        taskDescription: "Generate and configure multi-platform favicons for the client app.",
        taskDate: "2026-05-24",
        category: "Design"
      },
      {
        TaskId: 2,
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Form ValTaskIdation",
        taskDescription: "Implement client-sTaskIde valTaskIdation logic for the contact form fields.",
        taskDate: "2026-05-26",
        category: "Development"
      },
      {
        TaskId: 3,
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "State Management Refactor",
        taskDescription: "Refactor global state using Context API to fix prop drilling deep in the tree.",
        taskDate: "2026-05-27",
        category: "Development"
      }
    ]
  },
  {
    id: 5,
    name: "Ajay Pratap",
    logo: "AP",
    email: "employee5@company.com",
    password: "123",
    tasks: [
      {
        TaskId: 1,
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Dark Mode Toggle",
        taskDescription: "Add a theme context switch to seamlessly change between light and dark modes.",
        taskDate: "2026-05-29",
        category: "UI/UX"
      },
      {
        TaskId: 2,
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "SEO Optimization",
        taskDescription: "Add semantic HTML tags and meta descriptions to improve search ranking metrics.",
        taskDate: "2026-05-23",
        category: "Marketing"
      },
      {
        TaskId: 3,
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Unit Testing",
        taskDescription: "Write Jest tests for the custom data filtering utility functions.",
        taskDate: "2026-05-24",
        category: "Quality Assurance"
      },
      {
        TaskId: 4,
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Performance Audit",
        taskDescription: "Run Lighthouse reports and analyze opportunities to improve page load speed.",
        taskDate: "2026-05-26",
        category: "Performance"
      }
    ]
  }
];

const admin = [
  {
    TaskId: 1,
    email: "admin@me.com",
    password: "123"
  }
];

export const setLocalStorage = () => {
    localStorage.setItem("employees", JSON.stringify(employees))
    localStorage.setItem("admin", JSON.stringify(admin))
}

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem("employees"))
    const admin = JSON.parse(localStorage.getItem("admin"))  
    return {employees, admin}  
}