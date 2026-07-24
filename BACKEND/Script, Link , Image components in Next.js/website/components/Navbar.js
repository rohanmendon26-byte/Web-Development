import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <div>
            <nav className="bg-gray-900 text-white px-6 py-4">
                <div className="max-w-9xl mx-auto flex justify-between items-center">
                    <h1 className="text-2xl font-bold">Facebook</h1>

                    <ul className="flex gap-6">
                        <li>
                            <Link href="/" className="hover:text-gray-300">
                                Home
                            </Link>
                        </li>

                        <li>
                            <Link href="/about" className="hover:text-gray-300">
                                About
                            </Link>
                        </li>

                        <li>
                            <Link href="/services" className="hover:text-gray-300">
                                Services
                            </Link>
                        </li>

                        <li>
                            <Link href="/contact" className="hover:text-gray-300">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
