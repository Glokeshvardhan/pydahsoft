import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

const SolutionsSection = () => {
  const solutions = [

    {
      title: 'Face Attendance Software',
      description: 'Automated identification and attendance system with facial recognition technology.',
      features: [
        'Real-time attendance tracking',
        'High accuracy recognition',
        'Seamless integration'
      ],
      image: 'https://www.versionx.in/wp-content/uploads/2022/06/facial-recognition-system-concept-with-face-recognition-3d-scanning-interface.jpg'
    },

    {
      title: 'AI Lab Inventory',
      description: 'Intelligent inventory management with predictive analytics and allocation solutions.',
      features: [
        'Smart stock monitoring',
        'Predictive analytics',
        'Resource optimization'
      ],
      image: 'https://cdn.labmanager.com/assets/image/52167/how-labviva-s-ai-inventory-management-system-empowers-lab-managers-l.jpg'
    },

    {
      title: 'Ecommerce Platform',
      description: 'Comprehensive ecommerce solution with integrated payment and shipping systems.',
      features: [
        'User-friendly interface',
        'Secure payment processing',
        'Real-time order tracking'
      ],
      image: 'https://m.media-amazon.com/images/G/31/amazonservices/Blog/eCommerce_Platform.png'
    },
    {
      title: 'Hostel Management Software for Universities',
      description: 'Comprehensive hostel management system with real-time updates and Student engagement features.',
      features: [
        'Room booking management',
        'Payment processing',
        'Student feedback integration'
      ],
      image: 'https://www.shutterstock.com/image-photo/hotel-service-management-system-concept-260nw-2524002687.jpg'
    },
    {
      title: 'Leave Management Software',
      description: 'Automated leave management system with real-time tracking and reporting features.',
      features: [
        'Leave request management',
        'Real-time tracking',
        'Reporting and analytics'
      ],
      image: 'https://www.orangehrm.com/assets/Uploads/Leave-Time-Off-Management-System.jpg'
    },

    {
      title: 'Restaurant Management Software',
      description: 'Complete restaurant management system designed to optimize operations with real-time tracking.',
      features: [
        'Order management',
        'Kitchen display',
        'Payment integration'
      ],
      image: 'https://nento.com/wp-content/uploads/2024/05/digital-restaurant-menu-mockup-blank-white-screen-with-intuitive-navigation_839035-1235421.jpg.webp'
    }


  ];

  const vacancies = [
    {
      title: 'Flutter Developer',
      requirements: [
        '2+ years of experience in Flutter development',
        'Strong knowledge of Dart programming',
        'Experience with state management solutions',
        'Understanding of RESTful APIs and integration'
      ],
      type: 'Full Time'
    },
    {
      title: 'Digital Marketing Executive',
      requirements: [
        '1+ years of experience in digital marketing',
        'Proficiency in SEO and SEM',
        'Experience with social media marketing',
        'Knowledge of analytics tools'
      ],
      type: 'Full Time'
    }
  ];

  return (
    <section id="solutions" className="py-20 bg-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-40 left-0 w-72 h-72 rounded-full bg-pydah-light animate-float-delay"></div>
      <div className="absolute bottom-20 right-0 w-64 h-64 rounded-full bg-pydah-secondary/10 animate-float"></div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-2 mb-4 animate-fade-in-up">
            Our <span className="gradient-text">Solutions</span>
          </h2>
          <p className="body-text text-pydah-gray animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Explore our suite of powerful software designed to streamline your operations,
            enhance productivity, and deliver exceptional results across different industries.
          </p>
        </div>

        {/* Solutions Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {solutions.map((solution, index) => (
            <div
              key={solution.title}
              className="neumorphic-card overflow-hidden animate-scale-in"
              style={{ animationDelay: `${0.2 * (index + 1)}s` }}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={solution.image}
                  alt={solution.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-montserrat font-bold mb-2 text-pydah-primary">{solution.title}</h3>
                <p className="text-pydah-gray mb-4">{solution.description}</p>
                <ul className="space-y-2 mb-6">
                  {solution.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <span className="text-pydah-accent mr-2 mt-1">
                        <Check size={16} />
                      </span>
                      <span className="text-sm text-pydah-dark-gray">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default SolutionsSection;
