import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

// Vacancy data
const vacancies = [
 
  
  {
    title: "Flutter Developer",
    type: "Full-time",
    requirements: [
      "2+ years of experience in Flutter development",
      "Strong knowledge of Dart programming",
      "Experience with state management solutions",
      "Understanding of Restful APIs and integration"
    ]
  },
  {
    title: "Digital Marketing Executive",
    type: "Full-time",
    requirements: [
      "1+ years of experience in digital marketing",
      "Proficiency in SEO and SEM",
      "Experience with social media marketing",
      "Knowledge of analytics tools"
    ]
  }
];

const Vacancies = () => {
  return (
    <section id="vacancies" className="py-20 bg-gray-50">
      {/* Vacancies Section */}
      <div className="mt-20">
        <div className="text-center max-w-3xl mx-auto mb-12 px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up">
            Join Our <span className="gradient-text">Team</span>
          </h2>
          <p className="text-base sm:text-lg text-pydah-gray animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Be part of our innovative team and help shape the future of technology
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto px-4">
          {vacancies.map((vacancy, index) => (
            <div
              key={vacancy.title}
              className="bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8 border border-pydah-light hover:border-pydah-primary transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${0.3 * (index + 1)}s` }}
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 mb-6 lg:mb-8">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-pydah-primary">{vacancy.title}</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-4 py-1.5 bg-pydah-light text-pydah-primary rounded-full text-sm lg:text-base font-medium whitespace-nowrap">
                    {vacancy.type}
                  </span>
                </div>
              </div>
              <ul className="space-y-4 mb-8 lg:mb-10">
                {vacancy.requirements.map((req, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-pydah-accent mr-3 mt-1 flex-shrink-0">
                      <Check size={18} className="lg:w-5 lg:h-5" />
                    </span>
                    <span className="text-sm sm:text-base lg:text-lg text-pydah-dark-gray">{req}</span>
                  </li>
                ))}
              </ul>
             
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Vacancies;
