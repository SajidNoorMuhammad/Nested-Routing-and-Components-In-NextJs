import Link from 'next/link';
import React from 'react';

const Header = () => {
    return (
        <header className="bg-blue-600 text-white shadow-lg">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold">My Website</h1>
                <nav>
                    <ul className="flex space-x-6">
                        <li>
                            <Link href="/" className="hover:text-gray-300">Home</Link>
                        </li>
                        <li>
                            <Link href="/courses" className="hover:text-gray-300">Courses</Link>
                        </li>
                        <li>
                            <Link href="/services" className="hover:text-gray-300">Services</Link>
                        </li>
                        <li>
                            <Link href="/contact" className="hover:text-gray-300">Contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
