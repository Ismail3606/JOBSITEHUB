// src/components/JobCategoryList.js
import React from 'react';

const categories = [
  { title: 'Account & Finance', description: 'Find accounting and finance jobs', icon: '💼' },
  { title: 'Digital Strategy', description: 'Jobs in digital strategy and marketing', icon: '💡' },
  { title: 'Research & Science', description: 'Explore research jobs', icon: '🔬' },
  { title: 'Engineering', description: 'Discover engineering opportunities', icon: '⚙️' },
];

const Jobcatargories = () => {
  return (
    <section className="py-16 bg-white">
      <h3 className="text-center text-2xl font-semibold text-gray-800 mb-8">Job Category List</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-8">
        {categories.map((category, index) => (
          <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-lg text-center">
            <span className="text-4xl">{category.icon}</span>
            <h4 className="text-xl font-bold text-gray-700 mt-4">{category.title}</h4>
            <p className="mt-2 text-gray-600">{category.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Jobcatargories;
