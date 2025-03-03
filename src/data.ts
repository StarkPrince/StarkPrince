export const projects = [
  {
    title: "Field Engineer Management Platform",
    shortDescription:
      "Comprehensive web application for dynamic field service management and collaboration",
    fullDescription:
      "A robust platform designed to streamline field engineer workflows, featuring real-time communication, advanced state management, and comprehensive ticket tracking across enterprise environments.",
    period: "2024",
    techStack: [
      "React",
      "TypeScript",
      "Recoil",
      "WebSocket",
      "PostgreSQL",
      "Redis",
    ],
    highlights: [
      "Real-time chat system",
      "Multi-device authentication",
      "Dynamic ticket management",
      "Granular role-based permissions",
      "Advanced state management",
      "Comprehensive notification infrastructure",
    ],
    userRoles: [
      "MBA Users",
      "NOC Users",
      "Field Engineers",
      "Client Administrators",
    ],
    keyFeatures: [
      "Automated ticket generation",
      "Cross-country billing support",
      "Sub-ticket assignment system",
      "Real-time collaboration tools",
      "Secure communication channels",
    ],
    github: "https://github.com/StarkPrince/nyas-fieldengineer-web",
    live: "https://fieldengineer.vercel.app/",
    image: "https://i.imgur.com/Xmho3YB.png",
  },
  {
    title: "PR Blogs",
    shortDescription:
      "A blog platform with real-time features, optimized for high traffic.",
    fullDescription:
      "PR Blogs is a cutting-edge blog platform designed to handle high traffic and provide real-time interactions. Built with Next.js and powered by MongoDB and GraphQL, this platform offers blazing-fast performance and a seamless user experience.",
    period: "Mar. 2024 - Apr. 2024",
    techStack: [
      "Next.js",
      "Tailwind CSS",
      "Prisma",
      "GraphQL",
      "Generative AI",
    ],
    highlights: [
      "Optimized for 1000+ interactions/min",
      "Less than 50ms latency using caching",
      "Dynamic commenting system with real-time updates",
      "Responsive design for mobile and desktop",
      "SEO optimized with server-side rendering",
    ],
    github: "https://github.com/StarkPrince/blogs",
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
    title: "IN Homes Real Estate Platform",
    shortDescription:
      "Comprehensive real estate web application with property search and management features",
    fullDescription:
      "A full-stack real estate platform built with Django and Tailwind CSS, enabling intuitive property searching, listing management, and user interaction for real estate professionals and homebuyers.",
    period: "2024",
    techStack: ["Django", "PostgreSQL", "Tailwind CSS", "Python", "ASGI"],
    highlights: [
      "Intuitive property search functionality",
      "User dashboard and account management",
      "Featured listings display",
      "Responsive design with Tailwind CSS",
      "Scalable backend with PostgreSQL",
    ],
    github: "https://github.com/StarkPrince/inhomes",
    live: "http://18.219.245.111/",
    image: "https://i.imgur.com/FJwzmah.png",
  },
  // {
  //   title: "Workflow Automation Platform",
  //   shortDescription:
  //     "A platform to automate tasks and integrate various applications seamlessly.",
  //   fullDescription:
  //     "This workflow automation platform empowers users to connect multiple applications and automate repetitive tasks effortlessly. Featuring a modern and intuitive user interface, it allows users to create multi-step workflows, schedule automation, and monitor activity logs. With pre-built integrations and custom webhook support, the platform is designed for scalability and adaptability to diverse workflows.",
  //   period: "Aug. 2023 - Sep. 2023",
  //   techStack: [
  //     "React.js",
  //     "Node.js",
  //     "MongoDB",
  //     "Webhooks",
  //     "REST API",
  //     "Redux Toolkit",
  //   ],
  //   highlights: [
  //     "User-friendly interface for building multi-step workflows",
  //     "Pre-built integrations with popular applications",
  //     "Custom webhook support for advanced use cases",
  //     "Real-time activity monitoring and error tracking",
  //     "Schedule-based and trigger-based automation options",
  //     "Scalable backend with robust REST API integration",
  //   ],
  //   github: "https://github.com/yourusername/workflow-automation",
  //   live: "https://workflowautomation-example.com",
  //   image: "https://i.imgur.com/NzqgbCC.png",
  // },
  {
    title: "Habit Analytics Tracker",
    shortDescription:
      "A comprehensive habit tracking application with analytics and progress insights.",
    fullDescription:
      "This habit tracking application enables users to log and manage their habits effectively while providing detailed analytics and visualizations for progress tracking. Users can set daily, weekly, or custom goals, and monitor their performance through interactive charts and dashboards. Built with a focus on usability and scalability, the application offers features like streak tracking, reminders, and detailed insights to foster consistency and productivity.",
    period: "Jun. 2023 - Jul. 2023",
    techStack: ["React.js", "Node.js", "MongoDB", "Chart.js", "Recoil", "Nivo"],
    highlights: [
      "Interactive analytics with visualizations using Chart.js",
      "Streak tracking to encourage consistency",
      "Customizable goals and habit schedules (daily, weekly, etc.)",
      "Reminders and notifications for timely habit logging",
      "Secure backend with MongoDB for data storage",
      "User-friendly interface with real-time updates via Recoil",
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
      "Led contract system development, enhancing auditability and ensuring full compliance.",
      "Optimized database performance, achieving high uptime and significant latency reduction.",
      "Automated ticketing system, drastically reducing manual work and improving assignment accuracy.",
      "Enhanced system security using role-based access control and rate-limiting.",
      "Developed real-time chat for seamless team collaboration and faster communication.",
      "Streamlined document management with secure and efficient handling processes.",
    ],
  },
  {
    title: "Software Engineering Intern",
    company: "Pariksha Labs",
    period: "Mar. 2023 - Jul. 2024",
    responsibilities: [
      "Developed a React.js form with efficient data import and storage for SAP deployment.",
      "Automated cloud provisioning and infrastructure deployment using Terraform and Jenkins, reducing setup time by 50%.",
    ],
  },
];

export const otherInformation = [
  {
    key: "Core Principles",
    terms: [
      "Monolithic Architecture: Centralized system for simplicity and scalability",
      "Event-Driven Design: Components communicate via events for flexibility",
      "Real-time Communication: WebSocket and pub/sub for instant synchronization",
      "Data Integrity and Security: Ensuring compliance and robust protection",
    ],
    visualRepresentation: "https://i.imgur.com/jHHSpX9.png",
    description:
      "Unified architecture combined with modern event-driven principles for scalability, responsiveness, and real-time interactions.",
  },
  {
    key: "System Capabilities",
    terms: [
      "Multi-device authentication: Secure cross-platform login",
      "Role-based access control: Granular permission management",
      "Dynamic ticket management: Automated routing and prioritization",
      "Real-time chat integration: Embedded messaging tools",
      "Notification system: Customizable multi-channel alerts",
      "WebSocket channels: Instant bidirectional communication",
      "Secure uploads: Encrypted file sharing",
      "Notification persistence: Reliable message delivery",
    ],
    visualRepresentation: "https://i.imgur.com/dntlQxx.png",
    description:
      "A robust system offering flexibility, security, and seamless communication tailored to various roles and interaction contexts.",
  },
  {
    key: "Technical Highlights",
    terms: [
      "TypeScript type enforcement: Reliable compile-time checks",
      "Redis caching: Fast data retrieval and reduced load",
      "Multi-tenant support: Isolated environments with shared infrastructure",
      "Scalable WebSocket communication: Real-time bidirectional streaming",
      "Optimized pagination: Efficient data retrieval",
      "Severity-based logging: PostgreSQL integration for monitoring",
      "Rate limiting: Enhanced security against abuse",
      "Indexed models: Faster query performance",
      "Enhanced validation: Integrity checks with low overhead",
      "Recoil state management: Predictable front-end performance",
    ],
    visualRepresentation: "https://i.imgur.com/AK3Wd19.png",
    description:
      "Leveraging advanced technologies and optimizations for a secure, performant, and scalable solution.",
  },
  {
    key: "User Types",
    terms: [
      "MBA Users: Full system access",
      "NOC Users: Monitoring and management capabilities",
      "Field Engineers: Role-specific, contextual interactions",
    ],
    visualRepresentation: "https://i.imgur.com/QAWxXWy.png",
    description:
      "Precise access management ensures appropriate interaction levels for all user types.",
  },
  {
    key: "Complex Workflows",
    terms: [
      "Dynamic ticket generation: Rule-based intelligent creation",
      "Automated scheduling: Smart resource allocation",
      "Cross-country billing: Multi-currency reconciliation",
      "Ticket extension approvals: Advanced escalation mechanisms",
      "Sub-ticket assignment: Balanced task distribution",
    ],
    visualRepresentation: "https://i.imgur.com/Sv8qDFF.png",
    description:
      "Streamlined workflows reduce manual effort and enhance efficiency.",
  },
  {
    key: "Integration Ecosystem",
    terms: [
      "OTP Generation: Secure multi-factor authentication",
      "SMTP Notifications: Template-based email delivery",
      "Cron Job Scheduling: Automated periodic tasks",
      "File Upload Categorization: Metadata-driven classification",
    ],
    visualRepresentation: "https://i.imgur.com/AK3Wd19.png",
    description:
      "Seamless integration between services ensures efficient data flow and interoperability.",
  },
  {
    key: "Security Measures",
    terms: [
      "Device login restrictions: Prevent unauthorized access",
      "Rate limiting: Defense against brute-force attacks",
      "Strict authentication: Secure token management",
      "Access control matrices: Granular permission mapping",
    ],
    visualRepresentation: "https://i.imgur.com/AK3Wd19.png",
    description:
      "Comprehensive security protocols protect system integrity and user data.",
  },
  {
    key: "Scalability Features",
    terms: [
      "Horizontal scaling: Seamless infrastructure expansion",
      "Distributed caching: Efficient multi-node management",
      "Event-driven microservices: Modular, scalable architecture",
    ],
    visualRepresentation: "https://i.imgur.com/AK3Wd19.png",
    description:
      "Scalable design supports growth and adapts to evolving needs.",
  },
];

export const documentationCards = [
  {
    title: "System Architecture",
    content:
      "Comprehensive documentation of our microservices architecture, including service communication patterns, deployment strategies, and scalability considerations. Dive deep into our modular design philosophy and technical implementation details.",
  },
  {
    title: "API Documentation",
    content:
      "Detailed API specifications covering authentication methods, endpoint descriptions, request/response schemas, and comprehensive example requests. Includes best practices for integration and troubleshooting guidelines.",
  },
  {
    title: "Security Protocols",
    content:
      "In-depth security documentation addressing authentication, authorization, data protection measures, compliance standards, encryption mechanisms, and advanced threat mitigation strategies.",
  },
];
