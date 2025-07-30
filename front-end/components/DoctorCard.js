import React from 'react';

const DoctorCard = ({ doctor }) => {
  return (
    <div className={`bg-white rounded-lg shadow-sm p-5 flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6 relative ${doctor.isAd ? 'border-2 border-yellow-400 bg-yellow-50/50' : 'border border-gray-200'}`}>
        {doctor.isAd && <span className="absolute top-2 left-2 text-xs bg-gray-200 text-gray-600 px-2 py-0.5 rounded-sm font-semibold">AD</span>}
        
        <div className="flex-shrink-0 text-center">
            <img 
                className="w-24 h-24 rounded-full object-cover border-2 border-gray-100 mx-auto"
                src={doctor.image} 
                alt={`Dr. ${doctor.name}`} 
                onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/100x100/CCCCCC/333?text=Doc'; }}
            />
             {doctor.name.includes('Sheelavathi') && <div className="mt-2"><img src="https://www.practo.com/bundles/practopractoapp/images/practo_care/practo_care_badge.png" alt="Practo Care" className="h-10 mx-auto"/></div>}
        </div>

        <div className="flex-grow">
            <h2 className="text-xl font-bold text-blue-600 hover:underline cursor-pointer">{doctor.name}</h2>
            <p className="text-gray-600 mt-1 text-sm">{doctor.speciality}</p>
            <p className="text-gray-500 text-sm">{doctor.experience} years experience overall</p>
            <p className="text-gray-800 font-bold mt-3 text-sm">
                {doctor.location}, {doctor.city} 
                <span className="text-gray-600 font-normal hover:underline cursor-pointer"> • {doctor.clinic}</span>
            </p>
            <p className="text-gray-600 text-sm">₹{doctor.fees} Consultation fee at clinic</p>
            
            <div className="flex items-center space-x-4 mt-4">
                <div className="bg-green-100 border border-green-300 text-green-800 px-2 py-1 rounded-md text-sm font-bold flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor"><path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.562 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.865.802V10.5z" /></svg>
                    {doctor.rating}%
                </div>
                <p className="text-gray-800 font-semibold underline text-sm cursor-pointer">{doctor.reviews} Patient Stories</p>
            </div>
        </div>

        <div className="w-full sm:w-auto flex flex-col items-stretch sm:items-end justify-between space-y-2 self-stretch pt-2">
             <div className="text-center sm:text-right">
                <p className="text-green-600 font-semibold text-sm flex items-center justify-end">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                    Available Today
                </p>
            </div>
            <div className="flex-grow"></div>
            <button className="bg-blue-500 text-white font-bold py-2.5 px-6 rounded-lg hover:bg-blue-600 transition duration-300 w-full text-center">
                Book Clinic Visit
                <span className="block text-xs font-normal">No Booking Fee</span>
            </button>
            <button className="bg-white text-blue-500 border border-blue-500 font-bold py-2 px-6 rounded-lg hover:bg-blue-50 transition duration-300 w-full">
                Contact Clinic
            </button>
        </div>
    </div>
  );
};

export default DoctorCard;
