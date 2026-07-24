import React from 'react'
import Link from 'next/link'

const Footer = () => {
    return (
        <div>
            <footer className="bg-gray-900 text-white py-6 mt-auto text-xs">
                <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">

                    <p>&copy; {new Date().getFullYear()} MyWebsite. All rights reserved.</p>

                    <div className="flex gap-6 mt-4 md:mt-0">
                        <Link href="/" className="hover:text-gray-300">
                            Home
                        </Link>

                        <Link href="/about" className="hover:text-gray-300">
                            About
                        </Link>

                        <Link href="/services" className="hover:text-gray-300">
                            Services
                        </Link>

                        <Link href="/contact" className="hover:text-gray-300">
                            Contact
                        </Link>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
