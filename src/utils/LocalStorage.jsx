const employees = [
  {
    id: 1,
    name: "Sung Jinwoo",
    logo: "SJ",
    email: "employee1@company.com",
    password: "123",
    tasks: [
      {
        TaskId: 1,
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Clear C-Rank Dungeon",
        taskDescription: "Enter the newly appeared gate and eliminate the dungeon boss before it breaks.",
        taskDate: "2026-05-27",
        category: "Raid"
      },
      {
        TaskId: 2, 
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Daily Training Quest",
        taskDescription: "Complete 100 push-ups, 100 sit-ups, 100 squats, and a 10km run to avoid the penalty zone.",
        taskDate: "2026-05-26",
        category: "System"
      },
      {
        TaskId: 3,
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Extract Shadow Soldiers",
        taskDescription: "Defeat the elite beast class variants and add their souls to the shadow army.",
        taskDate: "2026-05-28",
        category: "Necromancy"
      }
    ]
  },
  {
    id: 2,
    name: "Muzan Kibutsuji",
    logo: "MK",
    email: "employee2@company.com",
    password: "123",
    tasks: [
      {
        TaskId: 1, 
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Locate Blue Lily Lily",
        taskDescription: "Search all regions across Japan to find the rare flower that grants absolute immortality.",
        taskDate: "2026-05-23",
        category: "Research"
      },
      {
        TaskId: 2, 
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Assemble Upper Ranks",
        taskDescription: "Summon the remaining Upper Moon demons to the Infinity Castle for a performance review.",
        taskDate: "2026-05-27",
        category: "Management"
      },
      {
        TaskId: 3, 
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Distribute Demonic Blood",
        taskDescription: "Inject concentrated progenitor blood into promising new recruits to boost their power scaling.",
        taskDate: "2026-05-27",
        category: "Operations"
      },
      {
        TaskId: 4,
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Eliminate Lower Moons",
        taskDescription: "Purge weak, underperforming units from the corporate lower tier structure entirely.",
        taskDate: "2026-05-25",
        category: "HR"
      }
    ]
  },
  {
    id: 3,
    name: "Light Yagami",
    logo: "LY",
    email: "employee3@company.com",
    password: "123",
    tasks: [
      {
        TaskId: 1,
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Monitor L's Investigation",
        taskDescription: "Infiltrate the task force database to intercept data and track down the detective's identity.",
        taskDate: "2026-05-28",
        category: "Intelligence"
      },
      {
        TaskId: 2,
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Establish New World Order",
        taskDescription: "Eliminate high-profile criminal fugitives to maintain global peace and order.",
        taskDate: "2026-05-22",
        category: "Justice"
      },
      {
        TaskId: 3,
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Secure Note Storage Hidden Desk",
        taskDescription: "Re-engineer the false bottom desk drawer trap mechanism with gasoline incandescence.",
        taskDate: "2026-05-27",
        category: "Security"
      },
      {
        TaskId: 4, 
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Discover L's Real Name",
        taskDescription: "Bargain with Misa's Shinigami or use psychological traps to reveal the true alias.",
        taskDate: "2026-05-24",
        category: "Strategy"
      },
      {
        TaskId: 5, 
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Maintain Perfect Student Alibi",
        taskDescription: "Study for the university entrance exams while casually eating a potato chip.",
        taskDate: "2026-05-27",
        category: "Alibi"
      }
    ]
  },
  {
    id: 4,
    name: "Satoru Gojo",
    logo: "SG",
    email: "employee4@company.com",
    password: "123",
    tasks: [
      {
        TaskId: 1,
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Buy Kikufuku Mochi",
        taskDescription: "Travel to Sendai to purchase the specific edamame-flavor sweet souvenirs for myself.",
        taskDate: "2026-05-24",
        category: "Leisure"
      },
      {
        TaskId: 2,
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Exorcise Special Grade Curse",
        taskDescription: "Deploy Unlimited Void domain expansion if the target gets too annoying.",
        taskDate: "2026-05-27",
        category: "Exorcism"
      },
      {
        TaskId: 3,
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Train First-Year Students",
        taskDescription: "Teach Megumi, Yuji, and Nobara how to control their cursed energy outputs effectively.",
        taskDate: "2026-05-27",
        category: "Education"
      }
    ]
  },
  {
    id: 5,
    name: "Naruto Uzumaki",
    logo: "NU",
    email: "employee5@company.com",
    password: "123",
    tasks: [
      {
        TaskId: 1,
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Master Sage Mode",
        taskDescription: "Sit completely still at Mount Myoboku to gather natural energy without turning into a toad.",
        taskDate: "2026-05-29",
        category: "Ninjutsu"
      },
      {
        TaskId: 2,
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Help Ichiraku Ramen Expand",
        taskDescription: "Promote the shop around the Hidden Leaf Village and eat 5 bowls of miso chashu ramen.",
        taskDate: "2026-05-23",
        category: "Marketing"
      },
      {
        TaskId: 3,
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Bring Sasuke Back",
        taskDescription: "Locate the Hidden Sound hideout and convince Sasuke to return to Team 7.",
        taskDate: "2026-05-24",
        category: "Diplomacy"
      },
      {
        TaskId: 4,
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Complete Hokage Paperwork",
        taskDescription: "Review budget logs and security scrolls for the Hidden Leaf Village infrastructure projects.",
        taskDate: "2026-05-27",
        category: "Administration"
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