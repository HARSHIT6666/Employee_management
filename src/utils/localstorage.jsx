
 const employees =  [
    {
      "id": 1,
      "name": "Rahul",
      "email": "user@gmail.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Create Login Page",
          "taskDescription": "Design and develop the login page.",
          "taskDate": "2026-09-19",
          "category": "Development"
        },
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "taskTitle": "Fix Navbar",
          "taskDescription": "Fix the alignment of the navigation bar.",
          "taskDate": "2026-09-20",
          "category": "Frontend"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Database Setup",
          "taskDescription": "Create the initial database structure.",
          "taskDate": "2026-09-18",
          "category": "Backend"
        }
      ]
    },

    {
      "id": 2,
      "name": "Aman",
      "email":"user@gmail.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Build Dashboard",
          "taskDescription": "Create the employee dashboard.",
          "taskDate": "2026-09-21",
          "category": "Frontend"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "API Testing",
          "taskDescription": "Test all available APIs.",
          "taskDate": "2026-09-17",
          "category": "Testing"
        },
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "taskTitle": "Write Documentation",
          "taskDescription": "Prepare documentation for the APIs.",
          "taskDate": "2026-09-22",
          "category": "Documentation"
        }
      ]
    },

    {
      "id": 3,
      "name": "Priya",
      "email": "user@gmail.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Design Homepage",
          "taskDescription": "Create a responsive homepage design.",
          "taskDate": "2026-09-20",
          "category": "Design"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "User Testing",
          "taskDescription": "Perform user testing on the application.",
          "taskDate": "2026-09-16",
          "category": "Testing"
        },
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "taskTitle": "Create Contact Form",
          "taskDescription": "Develop and validate the contact form.",
          "taskDate": "2026-09-23",
          "category": "Frontend"
        }
      ]
    },

    {
      "id": 4,
      "name": "Neha",
      "email": "user@gmail.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Security Review",
          "taskDescription": "Review the application for security issues.",
          "taskDate": "2026-09-21",
          "category": "Security"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Update Profile Page",
          "taskDescription": "Update the employee profile page.",
          "taskDate": "2026-09-15",
          "category": "Frontend"
        },
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "taskTitle": "Fix Authentication",
          "taskDescription": "Debug authentication and login validation.",
          "taskDate": "2026-09-24",
          "category": "Backend"
        }
      ]
    },

    {
      "id": 5,
      "name": "Rohit",
      "email": "user@gmail.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Create Reports",
          "taskDescription": "Generate monthly employee reports.",
          "taskDate": "2026-09-22",
          "category": "Reports"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Optimize Website",
          "taskDescription": "Improve website performance.",
          "taskDate": "2026-09-14",
          "category": "Optimization"
        },
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "taskTitle": "Deploy Application",
          "taskDescription": "Deploy the latest version of the application.",
          "taskDate": "2026-09-25",
          "category": "Deployment"
        }
      ]
    }
  ]

  const admin = [ {
    "id": 101,
    "name": "Admin",
    "email": "admin@gmail.com",
    "password": "123"
  }
  ]


  export const setLocalStorage = ()=>{
      localStorage.setItem('employees' ,JSON.stringify (employees))
      localStorage.setItem('admin' ,JSON.stringify (admin))
  }

  export const getLocalStorage = ()=>{
    const employeesData =JSON.parse(localStorage.getItem('employees'))
    const adminData = JSON.parse(localStorage.getItem('admin'))
    console.log(employeesData ,admin)
  }