import React from 'react';
import { ArrowLeft, Code2, Globe, Layers, Zap, Database, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const WebDevelopment = () => {
  const sections = [
    {
      title: "Frontend Development",
      icon: <Code2 className="w-8 h-8" />,
      description: "The art of creating beautiful and responsive user interfaces",
      content: `Frontend development is the practice of creating the visual and interactive elements of a website. It's like building the face of a website - everything that users see and interact with. From simple static pages to complex web applications, frontend development combines creativity with technical expertise.

      Core Technologies:
      • HTML5 - The foundation of web pages
        - Semantic markup for better accessibility
        - Modern APIs for enhanced functionality
        - Canvas and WebGL for graphics
        - Web Components for reusable elements
      
      • CSS3 - Styling and layout
        - Flexbox and Grid for modern layouts
        - Animations and transitions
        - Responsive design principles
        - CSS preprocessors (SASS, LESS)
        - CSS-in-JS solutions
      
      • JavaScript - Adding interactivity
        - ES6+ features and modern syntax
        - Asynchronous programming
        - DOM manipulation
        - Event handling
        - Design patterns
      
      • Modern Frameworks
        - React - Component-based architecture
        - Vue - Progressive framework
        - Angular - Full-featured platform
        - Next.js - Server-side rendering
        - Svelte - Compile-time framework
      
      Advanced Features:
      • Progressive Web Apps (PWAs)
        - Offline functionality
        - Push notifications
        - App-like experience
        - Service workers
      
      • Performance Optimization
        - Code splitting
        - Lazy loading
        - Image optimization
        - Caching strategies
        - Bundle size reduction
      
      • State Management
        - Redux for complex state
        - Context API for simple state
        - MobX for reactive state
        - Zustand for minimal state
      
      • Testing and Quality
        - Unit testing (Jest)
        - Integration testing
        - End-to-end testing (Cypress)
        - Accessibility testing
        - Performance monitoring
      
      • Development Tools
        - Webpack for bundling
        - Babel for transpilation
        - ESLint for code quality
        - Prettier for formatting
        - TypeScript for type safety`,
      image: "https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg"
    },
    {
      title: "Backend Development",
      icon: <Database className="w-8 h-8" />,
      description: "Building robust server-side applications and APIs",
      content: `Backend development is the foundation of web applications, handling data processing, business logic, and server-side operations. It's like the engine of a website, powering everything behind the scenes while ensuring security, performance, and scalability.

      Server-Side Programming:
      • API Development
        - RESTful API design principles
        - GraphQL for flexible queries
        - WebSocket for real-time communication
        - API versioning and documentation
        - Rate limiting and throttling
      
      • Database Management
        - SQL Databases (PostgreSQL, MySQL)
        - NoSQL Databases (MongoDB, Redis)
        - Database design and normalization
        - Query optimization
        - Data modeling and relationships
        - Caching strategies
      
      • Authentication & Security
        - OAuth 2.0 / OpenID Connect
        - JWT implementation
        - Password hashing and encryption
        - CSRF protection
        - XSS prevention
        - SQL injection prevention
        - Rate limiting
        - Input validation
      
      • Server Architecture
        - Microservices design
        - Monolithic architecture
        - Serverless functions
        - Load balancing
        - Horizontal scaling
        - Vertical scaling
      
      • Performance Optimization
        - Database indexing
        - Query optimization
        - Caching mechanisms
        - Connection pooling
        - Asynchronous processing
        - Background jobs
      
      • DevOps Integration
        - CI/CD pipelines
        - Docker containerization
        - Kubernetes orchestration
        - Monitoring and logging
        - Error tracking
        - Performance monitoring
      
      Popular Technologies:
      • Node.js Ecosystem
        - Express.js framework
        - NestJS for enterprise
        - TypeScript integration
        - NPM package management
      
      • Python Stack
        - Django framework
        - Flask microframework
        - FastAPI for modern APIs
        - SQLAlchemy ORM
      
      • Java Platform
        - Spring Boot
        - Hibernate ORM
        - Maven/Gradle build tools
        - JPA specifications`,
      image: "https://img.freepik.com/free-vector/server-room-rack-mount-rackmount-server-rack-data-center-illustration_39422-595.jpg"
    },
    {
      title: "Full Stack Development",
      icon: <Layers className="w-8 h-8" />,
      description: "Mastering both frontend and backend development",
      content: `Full stack development represents the complete web development spectrum, combining frontend and backend expertise to create end-to-end solutions. It's like being both the architect and builder of a digital product, capable of handling every aspect of web application development.

      Comprehensive Stack Components:
      • Frontend Architecture
        - Component-based design
        - State management solutions
        - Routing and navigation
        - Form handling and validation
        - API integration
        - Error handling
        - Loading states
        - Responsive design
      
      • Backend Systems
        - API design and implementation
        - Database architecture
        - Authentication systems
        - File handling
        - Email services
        - Payment integration
        - Third-party services
        - WebSocket implementation
      
      • Database Systems
        - Database selection
        - Schema design
        - Query optimization
        - Data migration
        - Backup strategies
        - Data security
        - Caching implementation
        - Real-time updates
      
      • DevOps & Deployment
        - Version control (Git)
        - CI/CD implementation
        - Container orchestration
        - Cloud platform integration
        - Monitoring and logging
        - Performance optimization
        - Security implementation
        - Backup strategies
      
      Popular Full Stack Combinations:
      • MERN Stack
        - MongoDB for database
        - Express.js for backend
        - React for frontend
        - Node.js runtime
      
      • MEAN Stack
        - MongoDB for database
        - Express.js for backend
        - Angular for frontend
        - Node.js runtime
      
      • PERN Stack
        - PostgreSQL for database
        - Express.js for backend
        - React for frontend
        - Node.js runtime
      
      • LAMP Stack
        - Linux operating system
        - Apache web server
        - MySQL database
        - PHP programming
      
      Development Workflow:
      • Project Planning
        - Requirements gathering
        - Architecture design
        - Technology selection
        - Timeline estimation
      
      • Development Process
        - Code organization
        - Testing strategy
        - Documentation
        - Code review
        - Version control
      
      • Deployment Strategy
        - Environment setup
        - Deployment pipeline
        - Monitoring setup
        - Backup configuration
        - Security measures`,
      image: "https://img.freepik.com/free-vector/programming-concept-illustration_114360-1351.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-12">
      <div className="container mx-auto px-4">
        {/* Back Button */}
       

        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 text-pydah-dark-gray">Web Development</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A comprehensive guide to modern web development, covering everything from frontend to backend technologies.
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-16">
          {sections.map((section, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="grid md:grid-cols-2 gap-8 p-8">
                {/* Content Side */}
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-pydah-primary/10 rounded-lg text-pydah-primary">
                      {section.icon}
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-pydah-dark-gray">{section.title}</h2>
                      <p className="text-gray-600">{section.description}</p>
                    </div>
                  </div>
                  
                  <div className="prose prose-lg max-w-none">
                    {section.content.split('\n\n').map((paragraph, idx) => (
                      <p key={idx} className="text-gray-700 leading-relaxed mb-4">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Image Side */}
                <div className="relative h-full rounded-lg overflow-hidden">
                  <img
                    src={section.image}
                    alt={section.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h2 className="text-2xl font-bold text-pydah-dark-gray mb-4">Ready to Start Your Web Development Journey?</h2>
          <p className="text-gray-600 mb-8">
            Explore our courses and resources to begin your path to becoming a web developer.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-pydah-primary text-white rounded-lg hover:bg-pydah-primary/90 transition-colors duration-300"
          >
            Get Started
            <ArrowLeft className="w-4 h-4 rotate-180" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WebDevelopment; 