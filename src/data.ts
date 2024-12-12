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
    image: "https://i.imgur.com/NzqgbCC.png",
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
      "Developed a contract management system, ensuring data integrity and compliance with CIA principles, improving audit traceability by 3x.",
      "Optimized database performance through strategic indexing and schema refinements, achieving 99.95% uptime and 40% reduction in query latency.",
      "Automated ticketing system processing 100+ daily tickets with 95% accuracy in geospatial assignments, reducing manual routing by 75%.",
      "Implemented RBAC system managing 6 role hierarchies and 20+ permission sets with JWT, Zod-based validation, and rate limiting preventing unauthorized access.",
      "Real-time chat systems with socket servers, enabling seamless collaboration and reducing response time.",
      "Streamlined document management with file uploads, metadata processing, and 2-factor OTP verification.",
      "Monitoring and error-handling frameworks for centralized logging, issue resolution and fault tolerance.",
    ],
  },
  {
    title: "Software Engineering Intern",
    company: "Pariksha Labs",
    period: "Mar. 2023 - Jul. 2024",
    responsibilities: [
      "Built React.js form for SAP deployment, integrated CSV import and MongoDB storage.",
      "Automated cloud provisioning and infrastructure using Terraform and Jenkins.",
    ],
  },
];

export const otherInformation: {
  key: string;
  terms: string[];
  visualRepresentation: string;
  description: string;
}[] = [
  {
    key: "Core Principles",
    terms: [
      "Monolithic Architecture: Unified, centralized system design for simplicity and scalability",
      "Event-Driven Design: Loosely coupled components communicating through events for enhanced flexibility",
      "Real-time Communication: Instant data synchronization using WebSocket and pub/sub mechanisms",
      "Data Integrity and Security: Strong data integrity and robust security measures to ensure data security and compliance",
    ],
    visualRepresentation: "https://i.imgur.com/jHHSpX9.png",
    description:
      "Monolithic structures with modern event-driven principles, ensuring scalability, responsiveness, and seamless real-time interactions across the system.",
  },
  {
    key: "System Capabilities",
    terms: [
      "Multi-device authentication: Secure login across multiple platforms with unified credential management",
      "Role-based access control: Granular permission sets defining precise user capabilities",
      "Dynamic ticket management: Intelligent ticket lifecycle tracking with automated routing and prioritization",
      "Real-time chat integration: Instant messaging and collaboration tools embedded within the system",
      "Comprehensive notification system: Multi-channel alerts with customizable delivery preferences",
    ],
    visualRepresentation: "https://i.imgur.com/dntlQxx.png",
    description:
      "System with advanced capabilities that provide flexibility, security, and seamless communication across different user roles and interaction contexts.",
  },
  {
    key: "Technical Highlights",
    terms: [
      "Strict TypeScript type enforcement: Compile-time type checking for improved code reliability",
      "Advanced Redis caching mechanisms: High-performance data retrieval and reduced database load",
      "Multi-tenant architecture support: Isolated environments with shared infrastructure resources",
      "Scalable WebSocket communication: Real-time, bidirectional event streaming",
      "Performance-optimized pagination: Efficient data retrieval with minimal resource consumption",
      "Severity-based logging with PostgreSQL integration: Comprehensive system monitoring and audit trails",
      "Rate limiting for enhanced security: Protection against potential abuse and DoS attacks",
    ],
    visualRepresentation: "https://i.imgur.com/AK3Wd19.png",
    description:
      "Cutting-edge technologies and best practices to deliver a secure, performant, and scalable enterprise solution.",
  },
  {
    key: "User Types",
    terms: [
      "MBA Users (Full Permissions): Top-tier administrators with comprehensive system access",
      "NOC Users (Oversight): Network operations center personnel with monitoring and management capabilities",
      "Field Engineers: Mobile workforce with contextual, role-specific system interactions",
    ],
    visualRepresentation: "https://i.imgur.com/QAWxXWy.png",
    description:
      "Our user ecosystem is designed with a nuanced approach to access management, ensuring each user type has precisely the right level of system interaction.",
  },
  {
    key: "Complex Workflows",
    terms: [
      "Dynamic ticket generation: Intelligent ticket creation based on predefined rules and contextual triggers",
      "Automated schedule management: Smart resource allocation and time tracking",
      "Cross-country billing reconciliation: Complex financial workflows with multi-currency support",
      "Ticket extension approval processes: Sophisticated escalation and authorization mechanisms",
      "Sub-ticket assignment algorithms: Intelligent task distribution and workload balancing",
    ],
    visualRepresentation: "https://i.imgur.com/Sv8qDFF.png",
    description:
      "We've implemented advanced workflow management techniques that automate complex processes, reducing manual overhead and improving operational efficiency.",
  },
  {
    key: "Integration Ecosystem",
    terms: [
      "OTP Generation Service: Secure, time-based one-time password generation for multi-factor authentication",
      "SMTP Email Notification System: Robust email delivery with template-based communications",
      "Automated Cron Job Scheduling: Periodic task execution with precise timing and dependency management",
      "Master File Upload Categorization: Intelligent file classification and metadata extraction",
    ],
    visualRepresentation: "https://i.imgur.com/AK3Wd19.png",
    description:
      "Our integration ecosystem provides seamless connections between various services, ensuring smooth data flow and enhanced system interoperability.",
  },
  {
    key: "Performance Optimizations",
    terms: [
      "Indexed database models: Optimized query performance through strategic indexing",
      "Enhanced validation logic: Comprehensive data integrity checks with minimal performance overhead",
      "Efficient state management with Recoil: Predictable and performant front-end state handling",
      "Pagination across all major entities: Controlled data retrieval to maintain system responsiveness",
    ],
    visualRepresentation: "https://i.imgur.com/AK3Wd19.png",
    description:
      "Performance is at the core of our design philosophy, with meticulous optimizations implemented across database, application, and frontend layers.",
  },
  {
    key: "Security Measures",
    terms: [
      "Multi-device login restrictions: Prevent simultaneous access from unauthorized devices",
      "Comprehensive rate limiting: Protect against brute-force and potential abuse scenarios",
      "Strict authentication protocols: Advanced credential validation and secure token management",
      "Detailed access control matrices: Precise permissions mapping at granular levels",
    ],
    visualRepresentation: "https://i.imgur.com/AK3Wd19.png",
    description:
      "Security is our paramount concern, with multiple layers of protection implemented to safeguard system integrity and user data.",
  },
  {
    key: "Scalability Features",
    terms: [
      "Horizontal scaling support: Seamless infrastructure expansion to handle increasing loads",
      "Distributed caching: Intelligent cache management across multiple nodes",
      "Event-driven microservices architecture: Modular, independently scalable service components",
    ],
    visualRepresentation: "https://i.imgur.com/AK3Wd19.png",
    description:
      "Our architectural design ensures system scalability, allowing effortless growth and adaptation to changing business requirements.",
  },
  {
    key: "Communication Protocols",
    terms: [
      "Real-time WebSocket channels: Instant, bidirectional communication streams",
      "Secure chat upload routes: Protected file sharing with end-to-end encryption",
      "Notification persistence: Guaranteed message delivery and retrieval mechanisms",
    ],
    visualRepresentation: "https://i.imgur.com/AK3Wd19.png",
    description:
      "Advanced communication protocols enable seamless, secure, and real-time interactions across the entire system ecosystem.",
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
