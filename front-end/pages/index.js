import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Search, MapPin } from 'lucide-react';

export default function HomePage() {
  const [location, setLocation] = useState('Bangalore');
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    if (location && searchTerm) {
      router.push(`/search?location=${encodeURIComponent(location)}&speciality=${encodeURIComponent(searchTerm)}`);
    } else {
        if (!location) document.getElementById('location-input')?.focus();
        if (!searchTerm) document.getElementById('search-input')?.focus();
    }
  };
  
  const popularSearches = ['Dermatologist', 'Pediatrician', 'Gynecologist/Obstetrician', 'Other'];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="relative flex-grow flex flex-col bg-[#28328c]">
        <div 
            className="absolute inset-0 bg-no-repeat bg-bottom" 
            style={{backgroundImage: "url('https://www.practo.com/consult/static/images/homepage-hero-image-web-v1.png')", backgroundSize: 'contain'}}
        ></div>
      
        <main className="relative z-10 flex-grow flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Your home for health</h1>
          <div className="mt-6 w-full max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">Find and Book</h2>
            <div className="bg-white rounded-lg shadow-lg">
                <form onSubmit={handleSearch} className="flex flex-col md:flex-row">
                  <div className="relative flex-1 border-b-2 md:border-b-0 md:border-r-2 border-gray-100">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={24} />
                    <input
                      id="location-input"
                      type="text"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder="Location"
                      className="w-full h-16 pl-12 pr-4 py-3 text-gray-700 text-lg rounded-t-lg md:rounded-l-lg md:rounded-tr-none focus:outline-none"
                    />
                  </div>
                  <div className="relative flex-[1.5]">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={24} />
                    <input
                      id="search-input"
                      type="text"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      placeholder="Search doctors, clinics, hospitals, etc."
                      className="w-full h-16 pl-12 pr-4 py-3 text-gray-700 text-lg rounded-b-lg md:rounded-r-lg md:rounded-bl-none focus:outline-none"
                    />
                  </div>
                </form>
            </div>
             <div className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
                <p className="text-gray-300 font-semibold">Popular searches:</p>
                {popularSearches.map(term => (
                     <button 
                        key={term}
                        onClick={() => {
                            setSearchTerm(term);
                            router.push(`/search?location=${encodeURIComponent(location)}&speciality=${encodeURIComponent(term)}`);
                        }}
                        className="text-white hover:text-white hover:underline"
                     >
                        {term}
                    </button>
                ))}
            </div>
          </div>
        </main>
        <div className="relative z-10">
            <Footer />
        </div>
      </div>
    </div>
  );
}