
import { useState } from 'react';
import { Menu, X, Camera, User, Settings } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white/90 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="relative">
              <Camera className="h-8 w-8 text-transparent bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-500 bg-clip-text" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-pink-500 via-orange-500 to-cyan-500 bg-clip-text text-transparent">
              PinMyPic
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`transition-colors font-medium ${
                isActive('/') ? 'text-pink-500' : 'text-gray-700 hover:text-pink-500'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/events" 
              className={`transition-colors font-medium ${
                isActive('/events') ? 'text-pink-500' : 'text-gray-700 hover:text-pink-500'
              }`}
            >
              Events
            </Link>
            <Link 
              to="/findmyface" 
              className={`transition-colors font-medium ${
                isActive('/findmyface') ? 'text-pink-500' : 'text-gray-700 hover:text-pink-500'
              }`}
            >
              FindMyFace
            </Link>
            <Link 
              to="/booking" 
              className={`transition-colors font-medium ${
                isActive('/booking') ? 'text-pink-500' : 'text-gray-700 hover:text-pink-500'
              }`}
            >
              Booking
            </Link>
            <Link 
              to="/contact" 
              className={`transition-colors font-medium ${
                isActive('/contact') ? 'text-pink-500' : 'text-gray-700 hover:text-pink-500'
              }`}
            >
              Contact Us
            </Link>
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="border-pink-200 text-pink-600 hover:bg-pink-50">
              Login
            </Button>
            <Button className="bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white">
              Sign Up
            </Button>
            <Link to="/admin">
              <Button variant="ghost" size="icon" className="text-gray-600 hover:text-pink-500">
                <Settings className="h-5 w-5" />
              </Button>
            </Link>
            <Button variant="ghost" size="icon" className="text-gray-600 hover:text-pink-500">
              <User className="h-5 w-5" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-600 hover:text-pink-500 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className={`transition-colors font-medium ${
                  isActive('/') ? 'text-pink-500' : 'text-gray-700 hover:text-pink-500'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/events" 
                className={`transition-colors font-medium ${
                  isActive('/events') ? 'text-pink-500' : 'text-gray-700 hover:text-pink-500'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Events
              </Link>
              <Link 
                to="/findmyface" 
                className={`transition-colors font-medium ${
                  isActive('/findmyface') ? 'text-pink-500' : 'text-gray-700 hover:text-pink-500'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                FindMyFace
              </Link>
              <Link 
                to="/booking" 
                className={`transition-colors font-medium ${
                  isActive('/booking') ? 'text-pink-500' : 'text-gray-700 hover:text-pink-500'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Booking
              </Link>
              <Link 
                to="/contact" 
                className={`transition-colors font-medium ${
                  isActive('/contact') ? 'text-pink-500' : 'text-gray-700 hover:text-pink-500'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
              <Link 
                to="/admin" 
                className={`transition-colors font-medium ${
                  isActive('/admin') ? 'text-pink-500' : 'text-gray-700 hover:text-pink-500'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Admin Dashboard
              </Link>
              <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200">
                <Button variant="outline" className="border-pink-200 text-pink-600 hover:bg-pink-50">
                  Login
                </Button>
                <Button className="bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white">
                  Sign Up
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
