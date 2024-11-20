// app/components/Navbar.js
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-gray-800">Smart Yoga</h1>
      <div className="flex space-x-4">
        <Link href="/" className="text-gray-600 hover:text-gray-800 transition-colors">
          Home
        </Link>
        <Link href="/products" className="text-gray-600 hover:text-gray-800 transition-colors">
          Products
        </Link>
        <Link href="/blog" className="text-gray-600 hover:text-gray-800 transition-colors">
          Blog
        </Link>
        <Link href="/admin" className="text-gray-600 hover:text-gray-800 transition-colors">
          Admin
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
