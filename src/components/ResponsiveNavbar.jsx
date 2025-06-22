import React, { useState } from 'react';

const List_items = ({ text, onClick }) => (
  <li
    className="text-gray-700 hover:text-black transition-colors duration-200 cursor-pointer font-medium"
    onClick={onClick}
  >
    {text}
  </li>
);

// Custom Icons as SVG components
const SearchIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const MenuIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const CloseIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const ResponsiveNavbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [search, setSearch] = useState(false);

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleSearch = () => {
    setSearch(!search);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  const navItems = [
    { id: 1, text: "About" },
    { id: 2, text: "Pricing" },
    { id: 3, text: "For Artists" },
    { id: 4, text: "Browse Categories" },
    { id: 5, text: "Subscribe" }
  ];

  return (
    <nav className="py-3 px-3 bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto max-w-7xl">
        <div className="flex items-center justify-between relative">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src="/logo.svg"
              alt="logo"
              className="h-8 w-auto sm:h-10"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="items-center gap-8 xl:gap-[54px] hidden lg:flex">
            <ul className="flex items-center gap-6 xl:gap-[54px]">
              {navItems.map((item) => (
                <List_items key={item.id} text={item.text} />
              ))}
            </ul>

            {/* Desktop Actions */}
            <div className="flex items-center gap-3">
              <button className="py-2 px-4 xl:py-3 xl:px-[25px] border border-[#202020] rounded-[5px] cursor-pointer font-semibold hover:bg-[#202020] hover:text-white transition-colors duration-200 text-sm xl:text-base">
                Submit Brief
              </button>

              {/* Search Input - Desktop */}
              <div className={`flex py-2 px-3 xl:py-3 border border-[#f1f1f1] rounded-[5px] bg-gray-50 focus-within:bg-white focus-within:border-gray-300 transition-all duration-300 ease-in-out transform ${search
                ? 'opacity-100 scale-100 w-32 xl:w-40'
                : 'opacity-0 scale-95 w-0 overflow-hidden'
                }`}>
                <input
                  placeholder="Search here..."
                  className="focus:outline-none bg-transparent text-sm xl:text-base w-full"
                  type="search"
                />
              </div>

              <button
                onClick={handleSearch}
                className="py-2 px-3 xl:py-3 xl:px-[25px] hover:bg-gray-100 rounded-[5px] transition-colors duration-200"
              >
                <SearchIcon className="size-5 xl:size-[25px] cursor-pointer" />
              </button>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-3 lg:hidden">
            {/* Mobile Search */}
            <div className={`flex py-2 px-3 border border-[#f1f1f1] rounded-[5px] bg-gray-50 transition-all duration-300 ease-in-out transform ${search
              ? 'opacity-100 scale-100 w-24'
              : 'opacity-0 scale-95 w-0 overflow-hidden'
              }`}>
              <input
                placeholder="Search..."
                className="focus:outline-none bg-transparent text-sm w-full"
                type="search"
              />
            </div>

            <button
              onClick={handleSearch}
              className="p-2 hover:bg-gray-100 rounded-[5px] transition-colors duration-200"
            >
              <SearchIcon className="size-6" />
            </button>

            <button
              onClick={handleMenu}
              className="p-2 hover:bg-gray-100 rounded-[5px] transition-all duration-200 transform hover:scale-105"
            >
              <div className={`transition-transform duration-300 ${showMenu ? 'rotate-90' : 'rotate-0'}`}>
                {showMenu ? (
                  <CloseIcon className="size-7" />
                ) : (
                  <MenuIcon className="size-7" />
                )}
              </div>
            </button>
          </div>

          {/* Mobile Menu Overlay */}
          <div className={`fixed inset-0 bg-black transition-opacity duration-300 lg:hidden z-40 ${showMenu ? 'opacity-50 pointer-events-auto' : 'opacity-0 pointer-events-none'
            }`}
            onClick={closeMenu}
          ></div>

          {/* Mobile Menu */}
          <div className={`absolute top-[60px] right-0 w-full sm:w-[320px] bg-white border border-gray-200 rounded-lg shadow-xl lg:hidden z-50 transition-all duration-300 ease-in-out transform ${showMenu
            ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto'
            : 'opacity-0 -translate-y-4 scale-95 pointer-events-none'
            }`}>
            <ul className="flex flex-col py-6">
              {navItems.map((item, index) => (
                <div key={item.id} className={`transition-all duration-200 delay-${index * 50}`}>
                  <div className="px-6 py-3 hover:bg-gray-50 transition-colors duration-200">
                    <List_items text={item.text} onClick={closeMenu} />
                  </div>
                  {index < navItems.length - 1 && (
                    <div className="border-b border-gray-100 mx-4"></div>
                  )}
                </div>
              ))}

              {/* Mobile Submit Brief Button */}
              <div className="px-6 mt-4 transition-all duration-200 delay-300">
                <button
                  onClick={closeMenu}
                  className="w-full py-3 px-4 border border-[#202020] rounded-[5px] font-semibold hover:bg-[#202020] hover:text-white transition-colors duration-200"
                >
                  Submit Brief
                </button>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default ResponsiveNavbar;