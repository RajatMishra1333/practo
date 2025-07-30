import React from 'react';
import { MessageSquare, Pill, Stethoscope, FlaskConical, BookOpen, Briefcase } from 'lucide-react';


const FooterIcon = ({ icon, text, isNew = false }) => (
    <a href="#" className="flex flex-col items-center space-y-2 text-center text-white no-underline group relative">
        <div className="p-3 border-[1.5px] border-gray-500 rounded-full group-hover:scale-110 transition-transform duration-200">
            {icon}
        </div>
        <span className="text-sm text-gray-300 group-hover:text-white font-light">{text}</span>
        {isNew && <span className="absolute -top-1 -right-1 text-xs bg-green-500 text-white px-2 py-0.5 rounded-md font-bold">New</span>}
    </a>
);


const Footer = () => {
    const icons = {
        consult: <MessageSquare className="h-6 w-6 text-white" />,
        medicines: <Pill className="h-6 w-6 text-white" />,
        records: <Stethoscope className="h-6 w-6 text-white" />,
        test: <FlaskConical className="h-6 w-6 text-white" />,
        articles: <BookOpen className="h-6 w-6 text-white" />,
        providers: <Briefcase className="h-6 w-6 text-white" />,
    }

    return (
        <footer className="bg-[#1d2869] w-full py-4">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-3 md:grid-cols-6 gap-4 justify-items-center">
                    <FooterIcon icon={icons.consult} text="Consult with a doctor" />
                    <FooterIcon icon={icons.medicines} text="Order Medicines" />
                    <FooterIcon icon={icons.records} text="View medical records" />
                    <FooterIcon icon={icons.test} text="Book test" isNew={true} />
                    <FooterIcon icon={icons.articles} text="Read articles" />
                    <FooterIcon icon={icons.providers} text="For healthcare providers" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;