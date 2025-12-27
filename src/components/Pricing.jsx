import React from 'react';
import AnimatedTitle from './AnimatedTitle';

const Pricing = () => {
  const pricingPlans = [
    {
      title: "Beginner Levels",
      levels: [
        { level: "A1", price: "₦5,000", description: "per hour" },
        { level: "A2", price: "₦6,000", description: "per hour" }
      ],
      description: "Perfect for those starting their French journey. Learn basic vocabulary, grammar, and conversational skills.",
      color: "blue",
      popular: false
    },
    {
      title: "Intermediate Levels",
      levels: [
        { level: "B1", price: "₦7,000", description: "per hour" },
        { level: "B2", price: "₦8,000", description: "per hour" }
      ],
      description: "For learners ready to advance their skills. Focus on complex grammar, advanced conversation, and exam preparation.",
      color: "purple",
      popular: true
    }
  ];

  const exams = [
    "TCF (Test de Connaissance du Français)",
    "DELF (Diplôme d'Études en Langue Française) A1, A2, B1, and B2"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          
          {/* <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block text-indigo-600">La Lumière</span>
            <span className="block text-gray-800">French Academy</span>
          </h1> */}

          <AnimatedTitle title={`<h1>La Lumière French Academy </h1>`} containerClass="mb-16  pointer-events-none mix-blend-difference relative z-10"/>
          
          <div className="mt-8 max-w-3xl mx-auto">
            <p className="text-xl text-gray-600 mb-6">
              We are delighted to offer personalized online French tutorials, tailored to your schedule and learning objectives. Our comprehensive programs are designed to help you achieve fluency in reading, writing, and speaking French.
            </p>
            
            {/* Exam Preparation */}
            <div className="bg-indigo-50 rounded-lg p-6 mb-8">
              <h3 className="text-2xl font-bold text-indigo-700 mb-4">
                Exam Preparation
              </h3>
              <p className="text-gray-700 mb-4">
                We prepare students for internationally recognized exams, including:
              </p>
              <ul className="space-y-2">
                {exams.map((exam, index) => (
                  <li key={index} className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-800">{exam}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Commitment Notice */}
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-12">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-yellow-700">
                    To ensure consistent progress, we require a minimum commitment of <strong>3 hours per week</strong>. Our flexible scheduling allows you to choose classes at your convenience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl shadow-xl p-8 ${
                plan.popular 
                  ? 'ring-2 ring-indigo-600 transform scale-105' 
                  : 'ring-1 ring-gray-200'
              } bg-white`}
            >
              {plan.popular && (
                <div className="absolute top-0 -translate-y-1/2 left-1/2 transform -translate-x-1/2">
                  <span className="bg-indigo-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.title}
                </h3>
                <p className="text-gray-600 mb-8">
                  {plan.description}
                </p>

                {/* Price Levels */}
                <div className="space-y-6 mb-8">
                  {plan.levels.map((level, idx) => (
                    <div
                      key={idx}
                      className={`p-6 rounded-lg ${
                        plan.color === 'blue' 
                          ? 'bg-blue-50 border border-blue-100' 
                          : 'bg-purple-50 border border-purple-100'
                      }`}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xl font-bold text-gray-900">
                          Level {level.level}
                        </span>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-indigo-600">
                            {level.price}
                          </div>
                          <div className="text-gray-600 text-sm">
                            {level.description}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-center text-gray-700">
                    <svg className="h-5 w-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Personalized online tutorials</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <svg className="h-5 w-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Tailored to your schedule</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <svg className="h-5 w-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Flexible class timings</span>
                  </div>
                </div>

                <button
                  className={`w-full py-4 px-6 rounded-lg font-semibold text-lg transition duration-300 ${
                    plan.popular
                      ? 'bg-indigo-500 text-white hover:bg-indigo-700'
                      : 'bg-gray-800 text-white hover:bg-gray-900'
                  }`}
                  onClick={() => window.open('mailto:lalumiereglobal@gmail.com')} >
                  Start Learning {plan.title}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Closing CTA */}
        <div className="mt-16 text-center">
          <div className="p-12 text-gray-600 ">
          {/* bg-gradient-to-r from-customGreen-300 to-customPurple-300 */}
            <h2 className="text-3xl font-bold mb-4">
              Join us at La Lumière French Academy
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Discover a world of French language excellence and unlock new opportunities with fluent French communication.
            </p>
            <button 
  onClick={() => window.location.href = 'tel:+22991263078'}
  className="bg-customPurple-300 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-customPurple-300 transition duration-300 transform hover:scale-105"
>
  Enroll Now
</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;