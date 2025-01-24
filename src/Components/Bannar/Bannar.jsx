import React from 'react';

const Bannar = () => {
  return (
    <section 
      className="bg-blue-500 h-[700px] text-white py-20 bg-cover bg-center" 
      style={{ backgroundImage: 'url("https://i.ibb.co.com/pnk3g1Y/governor-2813120-1920.jpg")' }}>
      <div className="container mt-36 mx-auto text-center">
        <h1 className="text-4xl font-semibold mb-4">Welcome to BlogScop</h1>
        <p className="text-xl mb-8">Discover amazing content from a community of creative bloggers.</p>
        <a href="#explore" className="bg-orange-400 text-gray-100 px-8 py-3 rounded-full text-lg font-bold hover:bg-orange-500">
          Explore Now
        </a>
      </div>
    </section>
  );
};

export default Bannar;
