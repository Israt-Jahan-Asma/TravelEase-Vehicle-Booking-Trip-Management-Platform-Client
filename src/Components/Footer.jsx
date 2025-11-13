import { Link } from 'react-router';
import {
    Facebook,
    Twitter,
    Instagram,
    Mail,
   
} from 'lucide-react';
import { FaXTwitter } from "react-icons/fa6";



const Footer = () => {


    return (
        <footer className="bg-secondary py-8 px-4 ">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div>
                    <div className="flex items-center space-x-2 text-white">
                        {/* <LuRotate3D size={25} /> */}
                        <span className="text-xl font-bold text-gray-800 dark:text-gray-200">TravelEase</span>
                    </div>
                    <ul className="space-y-2 mt-4">
                        <li><Link to="/" className="text-primary dark:text-gray-200 hover:text-accent">Home</Link></li>
                        <li><Link to="/" className="text-primary dark:text-gray-200 hover:text-accent">All Vehicles</Link></li>
                        <li><Link to="/" className="text-primary dark:text-gray-200 hover:text-accent">Add Vehicle</Link></li>
                        <li><Link to="/" className="text-primary dark:text-gray-200 hover:text-accent">Login</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-bold mb-4 text-gray-800 dark:text-gray-200">Resources</h3>
                    <ul className="space-y-2">
                        <li><Link to="/" className="text-primary dark:text-gray-200 hover:text-accent">My Vehicles Blog</Link></li>
                        <li><Link to="/" className="text-primary dark:text-gray-200 hover:text-accent">My Bookings</Link></li>
                        <li><Link to="/" className="text-primary dark:text-gray-200 hover:text-accent">Poly Tips</Link></li>
                        <li><Link to="/"  className="text-primary dark:text-gray-200 hover:text-accent">Register</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-bold mb-4 text-gray-800 dark:text-gray-200">Community</h3>
                    <ul className="space-y-2">
                        <li><Link to="/" className="text-primary dark:text-gray-200 hover:text-accent">Discussion Forums</Link></li>
                        <li><Link to="/" className="text-primary dark:text-gray-200 hover:text-accent">Study Groups</Link></li>
                        <li><Link to="/" className="text-primary dark:text-gray-200 hover:text-accent">Events & Workshops</Link></li>
                        <li><Link to="/" className="text-primary dark:text-gray-200 hover:text-accent">Leaderboard</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-bold mb-4 text-gray-800 dark:text-gray-200">Connect With Us</h3>
                    <div className="flex space-x-4 mb-4">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-primary dark:text-gray-200 hover:text-accent">
                            <Facebook size={24} />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-primary dark:text-gray-200 hover:text-accent">
                            <FaXTwitter size={24} />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-primary dark:text-gray-200 hover:text-accent">
                            <Instagram size={24} />
                        </a>

                    </div>
                    <div>
                        <a
                            href="mailto:support@travelEase.com"
                            className="flex items-center text-primary dark:text-gray-200 hover:text-accent"
                        >
                            <Mail size={18} className="mr-2" /> support@travelEase.com
                        </a>
                    </div>
                </div>
            </div>


            <div className="border-t lg:mb-0 md:mb-0 mb-20 border-accent mt-8 pt-4 text-center">
                <p className="text-sm text-gray-600 dark:text-gray-200">
                    TravelEase – Vehicle Booking & Trip Management Platform
                </p>
            </div>
        </footer>
    );
};

export default Footer;