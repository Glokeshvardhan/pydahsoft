import React from 'react';

const SoftwareProducts = () => {
  const products = [
    {
      id: 1,
      name: 'Web Development',
      description: 'Complete website development including responsive design and modern UI/UX principles.',
      price: 'Rs.12,000'
    },
    {
      id: 2,
      name: 'Full Stack Development',
      description: 'End-to-end development with frontend and backend solutions for your business needs.',
      price: 'Rs.15,000'
    },
    {
      id: 3,
      name: 'Node.js Backend',
      description: 'Robust server-side solutions built with Node.js for high performance applications.',
      price: 'Rs.10,000'
    },
    {
      id: 4,
      name: 'React Frontend',
      description: 'Interactive and dynamic user interfaces built with React library.',
      price: 'Rs.11,000'
    },
    {
      id: 5,
      name: 'Vite + React Setup',
      description: 'Blazing fast frontend tooling with Vite and React for optimal developer experience.',
      price: 'Rs.12,000'
    },
    {
      id: 6,
      name: 'Express.js API',
      description: 'RESTful API development with Express.js framework for your backend needs.',
      price: 'Rs.10,000'
    },
    {
      id: 7,
      name: 'MongoDB Integration',
      description: 'NoSQL database solutions with MongoDB for flexible data storage.',
      price: 'Rs.11,000'
    },
    {
      id: 8,
      name: 'Tailwind CSS Styling',
      description: 'Modern utility-first CSS framework implementation for beautiful designs.',
      price: 'Rs.10,000'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-24 md:pt-32 pb-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-pydah-dark-gray">Our Software Technology Services</h1>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Explore and purchase our cutting-edge software technology services tailored for your business needs.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between">
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4 flex-1">{product.description}</p>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-lg font-bold text-green-600">{product.price}</span>
                  <button
                    className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors duration-300"
                  >
                    Pay Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SoftwareProducts;