export const projects = [
  {
    title: "PR Blogs",
    shortDescription:
      "A blog platform with real-time features, optimized for high traffic.",
    fullDescription:
      "PR Blogs is a cutting-edge blog platform designed to handle high traffic and provide real-time interactions. Built with Next.js and powered by MongoDB and GraphQL, this platform offers blazing-fast performance and a seamless user experience.",
    period: "Mar. 2024 - Apr. 2024",
    techStack: ["Next.js", "Tailwind CSS", "MongoDB", "GraphQL"],
    highlights: [
      "Optimized for 1000+ interactions/min",
      "Less than 50ms latency using caching",
      "Dynamic commenting system with real-time updates",
      "Responsive design for mobile and desktop",
      "SEO optimized with server-side rendering",
    ],
    github: "https://github.com/yourusername/pr-blogs",
    live: "https://pr-blogs.vercel.app",
    image: "https://i.imgur.com/HRrsAN7.png",
  },
  {
    title: "Project Management Tool",
    shortDescription:
      "Full-stack app with real-time updates and cloud deployment.",
    fullDescription:
      "This comprehensive project management tool leverages the power of Next.js, MongoDB, and GraphQL to provide a robust solution for team collaboration. With real-time updates and cloud deployment, it offers a seamless experience for managing projects of any scale.",
    period: "Mar. 2024 - Apr. 2024",
    techStack: ["Next.js", "MongoDB", "GraphQL", "Docker", "AWS"],
    highlights: [
      "WebSocket for real-time updates",
      "Deployed via Docker/Kubernetes on AWS",
      "Integrated RBAC for enhanced user permissions",
      "Customizable dashboards and reporting",
      "Integration with popular version control systems",
    ],
    github: "https://github.com/yourusername/project-management-tool",
    live: "https://project-tool.vercel.app",
    image:
      "https://images.ctfassets.net/lzny33ho1g45/41O39Z8k4E7prE9ZWxAW32/4a1e95b14399ee52df902c3b7b34e332/image17.png?w=1400&fm=avif",
  },
  {
    title: "E-Commerce Backend",
    shortDescription:
      "Scalable backend for an e-commerce platform with caching and payment integration.",
    fullDescription:
      "This robust e-commerce backend solution is built to scale, featuring advanced caching mechanisms and seamless payment gateway integration. Designed with Node.js and leveraging the power of Redis and MongoDB, it provides a solid foundation for high-performance e-commerce applications.",
    period: "Mar. 2024 - Apr. 2024",
    techStack: ["Node.js", "Redis", "MongoDB", "Payment Gateway"],
    highlights: [
      "Redis caching for improved performance",
      "Integrated payment gateway for secure transactions",
      "Cart service with session persistence",
      "Inventory management system",
      "Order processing and fulfillment automation",
    ],
    github: "https://github.com/yourusername/ecommerce-backend",
    live: "https://api.ecommerce-example.com",
    image: "https://i.imgur.com/0sI3Edo.png",
  },
  {
    title: "Workflow Automation Platform",
    shortDescription:
      "A platform to automate tasks and integrate various applications seamlessly.",
    fullDescription:
      "This workflow automation platform empowers users to connect multiple applications and automate repetitive tasks effortlessly. Featuring a modern and intuitive user interface, it allows users to create multi-step workflows, schedule automation, and monitor activity logs. With pre-built integrations and custom webhook support, the platform is designed for scalability and adaptability to diverse workflows.",
    period: "Aug. 2023 - Sep. 2023",
    techStack: [
      "React.js",
      "Node.js",
      "MongoDB",
      "Webhooks",
      "REST API",
      "Redux Toolkit",
    ],
    highlights: [
      "User-friendly interface for building multi-step workflows",
      "Pre-built integrations with popular applications",
      "Custom webhook support for advanced use cases",
      "Real-time activity monitoring and error tracking",
      "Schedule-based and trigger-based automation options",
      "Scalable backend with robust REST API integration",
    ],
    github: "https://github.com/yourusername/workflow-automation",
    live: "https://workflowautomation-example.com",
    image: "https://i.imgur.com/NzqgbCC.png",
  },
  {
    title: "Habit Analytics Tracker",
    shortDescription:
      "A comprehensive habit tracking application with analytics and progress insights.",
    fullDescription:
      "This habit tracking application enables users to log and manage their habits effectively while providing detailed analytics and visualizations for progress tracking. Users can set daily, weekly, or custom goals, and monitor their performance through interactive charts and dashboards. Built with a focus on usability and scalability, the application offers features like streak tracking, reminders, and detailed insights to foster consistency and productivity.",
    period: "Jun. 2023 - Jul. 2023",
    techStack: ["React.js", "Node.js", "MongoDB", "Chart.js", "Redux"],
    highlights: [
      "Interactive analytics with visualizations using Chart.js",
      "Streak tracking to encourage consistency",
      "Customizable goals and habit schedules (daily, weekly, etc.)",
      "Reminders and notifications for timely habit logging",
      "Secure backend with MongoDB for data storage",
      "User-friendly interface with real-time updates via Redux",
    ],
    github: "https://github.com/yourusername/habit-tracker",
    live: "https://habittracker-example.com",
    image: "https://i.imgur.com/tsaPwCU.png",
  },
  // {
  //   title: "Sushi Fish Cart",
  //   shortDescription:
  //     "Fully functional and responsive e-commerce site with payment integration and email support.",
  //   fullDescription:
  //     "A fully functional and responsive e-commerce site used by hundreds of individuals to buy fish. It features payment integration via Stripe, email validation services, and a media library hosted on Cloudinary. The backend API is powered by Strapi, ensuring a seamless and secure shopping experience.",
  //   period: "Jan. 2022 - Feb. 2022",
  //   techStack: ["React.js", "Bootstrap", "Strapi.js", "MongoDB"],
  //   highlights: [
  //     "Responsive design for mobile and desktop users",
  //     "Cloudinary integration for media hosting",
  //     "Stripe payment gateway for secure transactions",
  //     "Email validation and support",
  //     "Strapi-powered backend API for robust functionality",
  //   ],
  //   github: "https://github.com/yourusername/sushilfishcart",
  //   live: "https://sushilfishcart-example.com",
  //   image: "",
  // },
];

export const experiences = [
  {
      title: "Backend Developer",
      company: "MithilaStack",
      period: "Aug. 2024 - Present",
      responsibilities: [
          "Developed a contract management system, ensuring data integrity and compliance with CIA principles, improving audit traceability by 3x.",
          "Optimized database performance through strategic indexing and schema refinements, achieving 99.95% uptime and 40% reduction in query latency.",
          "Automated ticketing system processing 100+ daily tickets with 95% accuracy in geospatial assignments, reducing manual routing by 75%.",
          "Implemented RBAC system managing 6 role hierarchies and 20+ permission sets with JWT, Zod-based validation, and rate limiting preventing unauthorized access.",
          "Real-time chat systems with socket servers, enabling seamless collaboration and reducing response time.",
          "Streamlined document management with file uploads, metadata processing, and 2-factor OTP verification.",
          "Monitoring and error-handling frameworks for centralized logging, issue resolution and fault tolerance."
      ]
  },
  {
      title: "Software Engineering Intern",
      company: "Pariksha Labs",
      period: "Mar. 2023 - Jul. 2024",
      responsibilities: [
          "Built React.js form for SAP deployment, integrated CSV import and MongoDB storage.",
          "Automated cloud provisioning and infrastructure using Terraform and Jenkins."
      ]
  }
]