import React from 'react';

const AgricultureHome = () => {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="bg-green-700 text-white text-center p-10">
        <h1 className="text-4xl font-bold mb-4">Welcome to AgriSmart</h1>
        <p className="text-lg">Empowering Farmers. Growing Futures.</p>
        <button className="mt-6 px-6 py-2 bg-white text-green-700 font-semibold rounded hover:bg-green-100 transition">
          Explore Products
        </button>
      </section>

      {/* Services Section */}
      <section className="p-10 bg-gray-100 text-center">
        <h2 className="text-2xl font-bold mb-6 text-green-800">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-xl font-semibold text-green-700 mb-2">Crop Advisory</h3>
            <p>Get expert advice for best crop yield and farming practices.</p>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-xl font-semibold text-green-700 mb-2">Fertilizer & Seeds</h3>
            <p>High quality fertilizers and certified seeds for healthy crops.</p>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-xl font-semibold text-green-700 mb-2">Hire Labour</h3>
            <p>Hire experienced agricultural workers for field tasks.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="p-10 text-center">
        <h2 className="text-2xl font-bold mb-4 text-green-800">About Us</h2>
        <p className="max-w-3xl mx-auto text-gray-700">
          AgriSmart is a digital platform focused on helping farmers by providing the tools,
          services, and information they need to succeed in today’s agriculture. From precision
          farming to equipment rentals, we're growing together.
        </p>
      </section>

      {/* Footer */}
      <footer className="bg-green-900 text-white text-center p-4 mt-10">
        <p>© 2025 AgriSmart. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AgricultureHome;
