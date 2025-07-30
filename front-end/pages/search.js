import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Header from '../components/Header';
import DoctorCard from '../components/DoctorCard';
import { Search, MapPin } from 'lucide-react';

export default function SearchPage() {
    const router = useRouter();
    const { location, speciality } = router.query;

    const [currentLocation, setCurrentLocation] = useState('');
    const [currentSpeciality, setCurrentSpeciality] = useState('');
    const [doctors, setDoctors] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (router.isReady) {
            setCurrentLocation(location || '');
            setCurrentSpeciality(speciality || '');

            const fetchDoctors = async () => {
                setLoading(true);
                setError(null);
                try {
                    const response = await fetch(`http://localhost:3001/api/doctors?location=${encodeURIComponent(location)}&speciality=${encodeURIComponent(speciality)}`);
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    const data = await response.json();
                    setDoctors(data);
                } catch (e) {
                    setError(e.message);
                    console.error("Failed to fetch doctors:", e);
                } finally {
                    setLoading(false);
                }
            };

            fetchDoctors();
        }
    }, [router.isReady, location, speciality]);

    const FilterButton = ({ label }) => (
        <button className="flex items-center justify-between w-full md:w-auto text-left border border-gray-300 rounded-md px-4 py-2 bg-white text-gray-700 hover:bg-gray-50 text-sm">
            <span>{label}</span>
            <svg className="w-4 h-4 ml-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
        </button>
    );
    
    const LoadingSkeleton = () => (
        <div className="bg-white rounded-lg shadow-sm p-5 flex items-start space-x-6 border border-gray-200 animate-pulse">
            <div className="flex-shrink-0"><div className="w-24 h-24 rounded-full bg-gray-200"></div></div>
            <div className="flex-grow space-y-3">
                <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                <div className="h-4 bg-gray-200 rounded w-1/3"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6 mt-4"></div>
            </div>
            <div className="w-48 space-y-2">
                <div className="h-5 bg-gray-200 rounded w-full"></div>
                <div className="h-10 bg-gray-300 rounded-lg w-full mt-8"></div>
                <div className="h-10 bg-gray-200 rounded-lg w-full"></div>
            </div>
        </div>
    );

    return (
        <div className="bg-gray-50 min-h-screen">
            <Header />
            <main className="container mx-auto p-4 sm:p-6 lg:p-8">
                {/* Top Search Bar */}
                <div className="bg-white rounded-lg shadow-sm p-2 mb-6 border border-gray-200">
                    <div className="flex flex-col md:flex-row gap-0.5">
                        <div className="relative flex-1">
                            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                            <input type="text" value={currentLocation} onChange={e => setCurrentLocation(e.target.value)} className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div className="relative flex-1">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                            <input type="text" value={currentSpeciality} onChange={e => setCurrentSpeciality(e.target.value)} className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                    </div>
                </div>

                {/* Filters */}
                <div className="flex flex-col md:flex-row items-center justify-between mb-6 gap-4">
                    <div className="grid grid-cols-2 md:flex md:flex-row gap-4">
                        <FilterButton label="Gender" />
                        <FilterButton label="Patient Stories" />
                        <FilterButton label="Experience" />
                        <FilterButton label="All Filters" />
                    </div>
                    <div className="flex items-center border border-gray-300 rounded-md px-4 py-2 bg-white text-sm">
                        <span className="text-gray-600 mr-2">Sort By</span>
                        <select className="font-semibold bg-transparent focus:outline-none cursor-pointer">
                            <option>Relevance</option>
                            <option>Price - Low to High</option>
                            <option>Price - High to Low</option>
                            <option>Experience</option>
                        </select>
                    </div>
                </div>

                {/* Results */}
                <div className="mb-6">
                    {loading ? (
                         <div className="space-y-6">
                            <LoadingSkeleton />
                            <LoadingSkeleton />
                            <LoadingSkeleton />
                         </div>
                    ) : error ? (
                        <div className="text-center py-10 px-4 bg-red-50 border border-red-200 rounded-lg">
                            <h3 className="text-lg font-semibold text-red-700">Could not fetch data</h3>
                            <p className="text-red-600 mt-2">Error: {error}. Please make sure the backend server is running on http://localhost:3001 and try again.</p>
                        </div>
                    ) : (
                        <>
                            <h1 className="text-2xl font-bold text-gray-800 mb-2">
                                {doctors.length} {speciality}s available in {(location || '').split(',')[0]}
                            </h1>
                            <p className="text-gray-600 mb-6 flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 mr-2" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                                Book appointments with minimum wait-time & verified doctor details
                            </p>
                            <div className="space-y-6">
                                {doctors.length > 0 ? (
                                    doctors.map(doc => <DoctorCard key={doc.id} doctor={doc} />)
                                ) : (
                                    <div className="text-center py-10 px-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                                        <h3 className="text-lg font-semibold text-yellow-800">No Doctors Found</h3>
                                        <p className="text-yellow-700 mt-2">No doctors matched your search criteria. Please try a different location or speciality.</p>
                                    </div>
                                )}
                            </div>
                        </>
                    )}
                </div>
            </main>
        </div>
    );
}
