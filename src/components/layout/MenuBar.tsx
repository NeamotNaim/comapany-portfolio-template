import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
// import { NAV_LINKS } from '@/constants/navigation';

interface NavLinkClassProps {
  isActive: boolean;
}

const MenuBar: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const location = useLocation();
  const isOnProducts = location.pathname.startsWith('/products');
  const isOnServices = location.pathname.startsWith('/services');
  const isOnCaseStudies = location.pathname.startsWith('/case-studies');
  const isOnDocs = location.pathname.startsWith('/docs');
  const isOnBlog = location.pathname.startsWith('/blog');

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const getNavLinkClass = ({ isActive }: NavLinkClassProps): string =>
    [
      'relative text-gray-700 font-medium transition',
      'hover:text-violet-700',
      // animated underline
      'after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:bg-violet-700 after:transition-all after:duration-300 after:w-0 hover:after:w-full',
      isActive ? 'text-violet-700 after:w-full' : '',
    ].join(' ');

  return (
    <>
      {/* Skip to content for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[60] focus:px-4 focus:py-2 focus:bg-white focus:text-violet-700 focus:rounded focus:shadow"
      >
        Skip to content
      </a>
      <nav className="w-full bg-white shadow fixed top-0 left-0 z-50">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-20">
          <Link
            to="/"
            className="text-2xl font-extrabold text-violet-700 tracking-tight"
          >
            RecursionSoft
          </Link>
          <div className="hidden md:flex gap-8 items-center">
            {/* Home */}
            <NavLink
              to="/"
              className={getNavLinkClass}
              onClick={() => setOpen(false)}
            >
              Home
            </NavLink>

            {/* Services */}
            <NavLink
              to="/services"
              className={({ isActive }) =>
                getNavLinkClass({ isActive: isActive || isOnServices })
              }
              onClick={() => setOpen(false)}
            >
              Services
            </NavLink>

            {/* Products */}
            <NavLink
              to="/products"
              className={({ isActive }) =>
                getNavLinkClass({ isActive: isActive || isOnProducts })
              }
              onClick={() => setOpen(false)}
            >
              Products
            </NavLink>

            {/* Case Studies */}
            <NavLink
              to="/case-studies"
              className={({ isActive }) =>
                getNavLinkClass({ isActive: isActive || isOnCaseStudies })
              }
              onClick={() => setOpen(false)}
            >
              Case Studies
            </NavLink>

            {/* Docs */}
            <NavLink
              to="/docs"
              className={({ isActive }) =>
                getNavLinkClass({ isActive: isActive || isOnDocs })
              }
              onClick={() => setOpen(false)}
            >
              Docs
            </NavLink>

            {/* Analytics */}
            <NavLink
              to="/analytics"
              className={getNavLinkClass}
              onClick={() => setOpen(false)}
            >
              Analytics
            </NavLink>

            {/* About */}
            <NavLink
              to="/about"
              className={getNavLinkClass}
              onClick={() => setOpen(false)}
            >
              About
            </NavLink>

            {/* Blog */}
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                getNavLinkClass({ isActive: isActive || isOnBlog })
              }
              onClick={() => setOpen(false)}
            >
              Blog
            </NavLink>

            {/* Career */}
            <NavLink
              to="/career"
              className={getNavLinkClass}
              onClick={() => setOpen(false)}
            >
              Career
            </NavLink>

            {/* Contact */}
            <NavLink
              to="/contact"
              className={getNavLinkClass}
              onClick={() => setOpen(false)}
            >
              Contact
            </NavLink>
          </div>
          {/* Mobile menu button */}
          <button
            className="md:hidden flex items-center text-violet-700 focus:outline-none"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              {open ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 8h16M4 16h16"
                />
              )}
            </svg>
          </button>
        </div>
        {/* Mobile menu */}
        {open && (
          <div className="md:hidden bg-white shadow px-4 pb-4 flex flex-col gap-2 animate-fade-in-down">
            {/* Home */}
            <NavLink
              to="/"
              className={getNavLinkClass}
              onClick={() => setOpen(false)}
            >
              Home
            </NavLink>

            {/* Services */}
            <NavLink
              to="/services"
              className={({ isActive }) =>
                getNavLinkClass({ isActive: isActive || isOnServices })
              }
              onClick={() => setOpen(false)}
            >
              Services
            </NavLink>

            {/* Products */}
            <NavLink
              to="/products"
              className={({ isActive }) =>
                getNavLinkClass({ isActive: isActive || isOnProducts })
              }
              onClick={() => setOpen(false)}
            >
              Products
            </NavLink>

            {/* Case Studies */}
            <NavLink
              to="/case-studies"
              className={({ isActive }) =>
                getNavLinkClass({ isActive: isActive || isOnCaseStudies })
              }
              onClick={() => setOpen(false)}
            >
              Case Studies
            </NavLink>

            {/* Docs */}
            <NavLink
              to="/docs"
              className={({ isActive }) =>
                getNavLinkClass({ isActive: isActive || isOnDocs })
              }
              onClick={() => setOpen(false)}
            >
              Docs
            </NavLink>

            {/* Analytics */}
            <NavLink
              to="/analytics"
              className={getNavLinkClass}
              onClick={() => setOpen(false)}
            >
              Analytics
            </NavLink>

            {/* About */}
            <NavLink
              to="/about"
              className={getNavLinkClass}
              onClick={() => setOpen(false)}
            >
              About
            </NavLink>

            {/* Blog */}
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                getNavLinkClass({ isActive: isActive || isOnBlog })
              }
              onClick={() => setOpen(false)}
            >
              Blog
            </NavLink>

            {/* Career */}
            <NavLink
              to="/career"
              className={getNavLinkClass}
              onClick={() => setOpen(false)}
            >
              Career
            </NavLink>

            {/* Contact */}
            <NavLink
              to="/contact"
              className={getNavLinkClass}
              onClick={() => setOpen(false)}
            >
              Contact
            </NavLink>
          </div>
        )}
      </nav>
    </>
  );
};

export default MenuBar;
