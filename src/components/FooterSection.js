import { GithubOutlined, GlobalOutlined, LinkedinFilled } from "@ant-design/icons";
import Link from "next/link";

export default function FooterSection() {
    return (
        <footer className="bg-gradient-to-r from-[#1E3A8A] to-[#3b82f6] text-white py-12 px-2 sm:px-16">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Logo and About Section */}
                    <div className="space-y-4">
                        <h1 className="text-3xl font-bold text-white">Your Healthify</h1>
                        <p className="text-gray-300">
                            Committed to offering expert medical services with compassion and
                            care. At YourClinic, we put your health first.
                        </p>
                        <div className="flex space-x-4 mt-4">
                            <Link
                                href="https://muhammadhuzaifaportfolio.netlify.app/"
                                target="blank"
                                className="text-gray-300 hover:text-white transition-colors"
                            >
                                <GlobalOutlined />
                            </Link>
                            <Link
                            target="blank"
                                href="https://www.linkedin.com/in/muhammadhuzaifa8320/"
                                className="text-gray-300 hover:text-white transition-colors"
                            >
                                <LinkedinFilled />
                            </Link>
                            <Link
                                href="https://github.com/huzaifa8320"
                                target="blank"
                                className="text-gray-300 hover:text-white transition-colors"
                            >
                                <GithubOutlined />
                            </Link>
                        </div>
                    </div>
                    {/* Quick Links Section */}
                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold text-white">Quick Links</h2>
                        <ul className="space-y-2 text-gray-300">
                            <li>
                                <Link href="/" className="hover:text-white transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/doctors" className="hover:text-white transition-colors">
                                    Doctors
                                </Link>
                            </li>
                            <li>
                                <Link href="/appointments" className="hover:text-white transition-colors">
                                    Appointments
                                </Link>
                            </li>
                            <li>
                                <a href="/contact-us" className="hover:text-white transition-colors">
                                    Contact Us
                                </a>
                            </li>
                            <li>
                                <a href="/profile" className="hover:text-white transition-colors">
                                    Profile
                                </a>
                            </li>
                        </ul>
                    </div>
                    {/* Newsletter Subscription Section */}
                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold text-white">
                            Subscribe to our Newsletter
                        </h2>
                        <p className="text-gray-300">
                            Stay updated with our latest health tips and services.
                        </p>
                        <form className="flex">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="px-4 py-2 w-full rounded-l-md bg-white text-[#1E3A8A] placeholder-gray-500 focus:outline-none"
                                required
                            />
                            <button
                                type="submit"
                                className="px-6 py-2 bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-semibold rounded-r-md shadow-lg transition-all"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
                {/* Divider Line */}
                <div className="border-t border-gray-400 my-8" />
                {/* Footer Bottom Section */}
                <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-300">
                    <p>© 2024 YourClinic. All Rights Reserved.</p>
                    <div className="mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">
                            Privacy Policy
                        </a>
                        <span className="mx-2">|</span>
                        <a href="#" className="hover:text-white transition-colors">
                            Terms of Service
                        </a>
                    </div>
                </div>
            </div>
        </footer>

    )
}