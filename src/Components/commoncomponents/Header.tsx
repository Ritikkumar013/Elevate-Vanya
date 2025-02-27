// "use client";
// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { ChevronDown } from "lucide-react";

// interface DropdownMenuProps {
//   title: string;
//   children: React.ReactNode;
// }

// interface DropdownItemProps {
//   href: string;
//   children: React.ReactNode;
// }

// const Header = () => {
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > window.innerHeight * 0.1) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div
//       className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
//     isScrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"
//   } flex items-center justify-between px-7`}
//     >
//       {/* Logo */}
//       <div>
//         <Link href="/">
//           <Image
//             className="w-32"
//             src={isScrolled ? "/logo.png" : "/logo-white.png"}
//             width={512}
//             height={512}
//             alt="Logo Image"
//           />
//         </Link>
//       </div>

//       {/* Navigation */}
//       <div className={`flex justify-center gap-7 ${isScrolled ? "text-black" : "text-white"}`}>
//         <Link href="/" className="cursor-pointer py-4">
//           Home
//         </Link>

//         {/* About the Project */}
//         <DropdownMenu title="About the Project">
//           <DropdownItem href="/location">Location Advantages</DropdownItem>
//           <DropdownItem href="/aPlan">Unit Configurations</DropdownItem>
//           <DropdownItem href="/specifications">Specifications</DropdownItem>
//         </DropdownMenu>

//         {/* Lifestyle & Amenities */}
//         <Link href="/clubhouse" className="cursor-pointer py-4">
//         Clubhouse/Amenities
//         </Link>

//         {/* Experience the Project */}
//         <DropdownMenu title="Experience the Project">
//           <DropdownItem href="/gallery">Image Gallery</DropdownItem>
//           <DropdownItem href="/walkthrough">Walkthrough Video</DropdownItem>
//           <DropdownItem href="/constructionupdates">Construction Updates</DropdownItem>
//         </DropdownMenu>

//         <Link href="/aboutus" className="cursor-pointer py-4">
//           About Developer
//         </Link>

//         {/* RERA */}
//         <DropdownMenu title="RERA">
//           <DropdownItem href="https://platinum-towers.com/pdfs/certificate-of-registration-in-rera-essel-platinum.pdf">Certificate</DropdownItem>
//           <DropdownItem href="/rera/faq">Mdda Approval</DropdownItem>
//           <DropdownItem href="/rera/contact">Bank Approvals</DropdownItem>
//           <DropdownItem href="https://platinum-towers.com/pdfs/schedule-of-contruction.pdf">Construction Updates</DropdownItem>
//         </DropdownMenu>
//       </div>

//       {/* Contact Button */}
//       <div>
        
//         <button className={`px-8 py-3 text-sm ${
//     isScrolled ? "bg-black shadow-md text-white" : "bg-[#ffffffcc]"
//   } flex items-center justify-between px-7`}>Contact Us</button>
//       </div>
//     </div>
//   );
// };

// const DropdownMenu: React.FC<DropdownMenuProps> = ({ title, children }) => {
//   return (
//     <div className="relative group py-4">
//       <button className="cursor-pointer flex justify-center items-center gap-2">
//         {title}
//         <ChevronDown className="w-4 h-4" />
//       </button>
//       <div className="absolute left-0 mt-2 bg-white text-black rounded-md shadow-lg w-48 hidden group-hover:block">
//         <ul>{children}</ul>
//       </div>
//     </div>
//   );
// };

// const DropdownItem: React.FC<DropdownItemProps> = ({ href, children }) => (
//   <li className="p-2 hover:bg-gray-200 rounded-md">
//     <Link href={href}>{children}</Link>
//   </li>
// );

// export default Header;



"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";

interface DropdownMenuProps {
  title: string;
  children: React.ReactNode;
}

interface DropdownItemProps {
  href: string;
  children: React.ReactNode;
}

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Mobile menu state

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight * 0.1);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${isScrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"} flex items-center justify-between px-7`}>
      {/* Logo */}
      <Link href="/">
        <Image className="lg:w-32 md:w-24 w-20" src={isScrolled ? "/logo.png" : "/logo-white.png"} width={512} height={512} alt="Logo" />
      </Link>

      {/* Desktop Navigation */}
      <nav className={`hidden lg:flex justify-center gap-7 ${isScrolled ? "text-black" : "text-white"}`}>
        <Link href="/" className="cursor-pointer py-4">Home</Link>
        <DropdownMenu title="About the Project">
          <DropdownItem href="/location">Location Advantages</DropdownItem>
          <DropdownItem href="/aPlan">Unit Configurations</DropdownItem>
          <DropdownItem href="/specifications">Specifications</DropdownItem>
        </DropdownMenu>
        <Link href="/clubhouse" className="cursor-pointer py-4">Clubhouse/Amenities</Link>
        <DropdownMenu title="Experience the Project">
          <DropdownItem href="/gallery">Image Gallery</DropdownItem>
          <DropdownItem href="/walkthrough">Walkthrough Video</DropdownItem>
          <DropdownItem href="/constructionupdates">Construction Updates</DropdownItem>
        </DropdownMenu>
        <Link href="/aboutus" className="cursor-pointer py-4">About Developer</Link>
        <DropdownMenu title="RERA">
          <DropdownItem href="https://platinum-towers.com/pdfs/certificate-of-registration-in-rera-essel-platinum.pdf">Certificate</DropdownItem>
          <DropdownItem href="/rera/faq">Mdda Approval</DropdownItem>
          <DropdownItem href="/rera/contact">Bank Approvals</DropdownItem>
          <DropdownItem href="https://platinum-towers.com/pdfs/schedule-of-contruction.pdf">Construction Updates</DropdownItem>
        </DropdownMenu>
      </nav>

      {/* Contact Button (Visible on Desktop) */}
      <button className={`hidden lg:flex px-8 py-3 text-sm ${isScrolled ? "bg-black text-white" : "bg-[#ffffffcc]"} items-center`}>
        Contact Us
      </button>

      {/* Mobile Menu Button */}

      
      <button className="lg:hidden z-50" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <X className="hidden w-8 h-8 text-white" /> : <Menu className={`w-8 h-8 ${isScrolled ? "text-black" : "text-white"}`} />}
      </button>
      
      {/* Mobile Navigation Menu */}
      <div className={`fixed top-0 left-0 h-screen w-3/4 bg-white text-black transition-transform transform ${isMenuOpen ? "translate-x-0" : "-translate-x-full"} p-6 lg:hidden overflow-y-auto`}>
     
     
      <Image  src='/logo.png' className="absolute top-1 left-3 border-b-2 w-20" width={500} height={500} alt=""/>
        <button className="absolute top-5 right-5" onClick={() => setIsMenuOpen(false)}>
          <X className="w-8 h-8" />
        </button>
        
        <nav className="mt-16 flex flex-col gap-4">
          <Link href="/" className="py-2" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <MobileDropdownMenu title="About the Project">
            <DropdownItem href="/location">Location Advantages</DropdownItem>
            <DropdownItem href="/aPlan">Unit Configurations</DropdownItem>
            <DropdownItem href="/specifications">Specifications</DropdownItem>
          </MobileDropdownMenu>
          <Link href="/clubhouse" className="py-2" onClick={() => setIsMenuOpen(false)}>Clubhouse/Amenities</Link>
          <MobileDropdownMenu title="Experience the Project">
            <DropdownItem href="/gallery">Image Gallery</DropdownItem>
            <DropdownItem href="/walkthrough">Walkthrough Video</DropdownItem>
            <DropdownItem href="/constructionupdates">Construction Updates</DropdownItem>
          </MobileDropdownMenu>
          <Link href="/aboutus" className="py-2" onClick={() => setIsMenuOpen(false)}>About Developer</Link>
          <MobileDropdownMenu title="RERA">
            <DropdownItem href="https://platinum-towers.com/pdfs/certificate-of-registration-in-rera-essel-platinum.pdf">Certificate</DropdownItem>
            <DropdownItem href="/rera/faq">Mdda Approval</DropdownItem>
            <DropdownItem href="/rera/contact">Bank Approvals</DropdownItem>
            <DropdownItem href="https://platinum-towers.com/pdfs/schedule-of-contruction.pdf">Construction Updates</DropdownItem>
          </MobileDropdownMenu>
        </nav>
        {/* Contact Button (Visible in Mobile Menu) */}
        <button className="mt-6 w-full bg-black text-white py-3">Contact Us</button>
      </div>
    </header>
  );
};

// Dropdown Component (For Desktop)
const DropdownMenu: React.FC<DropdownMenuProps> = ({ title, children }) => {
  return (
    <div className="relative group py-4">
      <button className="cursor-pointer flex justify-center items-center gap-2">
        {title}
        <ChevronDown className="w-4 h-4" />
      </button>
      <div className="absolute left-0 mt-2 bg-white text-black rounded-md shadow-lg w-48 hidden group-hover:block">
        <ul>{children}</ul>
      </div>
    </div>
  );
};

// Dropdown Component (For Mobile)
const MobileDropdownMenu: React.FC<DropdownMenuProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button className="w-full flex justify-between items-center py-2" onClick={() => setIsOpen(!isOpen)}>
        {title}
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>
      {isOpen && <ul className="pl-4">{children}</ul>}
    </div>
  );
};

// Dropdown Item Component
const DropdownItem: React.FC<DropdownItemProps> = ({ href, children }) => (
  <li className="p-2 hover:bg-gray-200 rounded-md">
    <Link href={href}>{children}</Link>
  </li>
);

export default Header;
