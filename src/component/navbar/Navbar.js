import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../../image/loader.png';
import whats from '../../image/whatsApp.png';
import './Navbar.css';

const NavBar = () => {
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Function to close the navbar and mega menu on mobile
  const handleClose = () => {
    setIsOpen(false);
    setShowMegaMenu(false);
  };

  // Function to toggle the menu (open/close)
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (showMegaMenu) {
      setShowMegaMenu(false);
    }
  };

  // Function to handle click on nav links
  const handleNavLinkClick = (path) => {
    window.location.href = path; // Navigate to the specified path
    window.scrollTo(0, 0); // Scroll to the top of the page
    handleClose(); // Close the menu if open
  };

  return (
    <nav>
      <div className="wrapper">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt='vajravel traders' />
          </Link>
        </div>
        <input type="checkbox" id="menu-btn" className="menu-btn" />
        <label htmlFor="menu-btn" className="btn menu-btn">
          {isOpen ? <FaTimes /> : <FaBars />}
        </label>
        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          <label htmlFor="menu-btn" className="btn close-btn">
            <FaTimes />
          </label>
          <li>
            <Link to="/" onClick={() => handleNavLinkClick('/')} className='block mb-4 text-gray-300 hover:text-white'>Home</Link>
          </li>
          <li>
            <a href="#" className="desktop-item block mb-4 text-gray-300 hover:text-white" onClick={() => setShowMegaMenu(!showMegaMenu)}>Products</a>
            <input type="checkbox" id="showMega" checked={showMegaMenu} onChange={() => setShowMegaMenu(!showMegaMenu)} />
            <label htmlFor="showMega" className="mobile-item block mb-4 text-gray-300 hover:text-white">Product</label>
            {showMegaMenu && (
              <div className="mega-box">
                <div className="row">
                  <header className='h5'>Categories</header>
                  <div className="mega-links-container border shadow p-8">
                    <ul className="mega-links col">
                      <li className="mb-2" onClick={() => handleNavLinkClick('/Bitumen')}><Link to="/Bitumen" className="hover:text-gray-300" onClick={handleClose}>Bitumen</Link></li>
                      <li className="mb-2" onClick={() => handleNavLinkClick('/Ca-solvent')}><Link to="/Ca-solvent" className="hover:text-gray-300" onClick={handleClose}>CA Solvent</Link></li>
                      <li className="mb-2" onClick={() => handleNavLinkClick('/Furnance-oil')}><Link to="/Furnance-oil" className="hover:text-gray-300" onClick={handleClose}>Furnace Oil</Link></li>
                      <li className="mb-2" onClick={() => handleNavLinkClick('/Fuel-oil')}><Link to="/Fuel-oil" className="hover:text-gray-300" onClick={handleClose}>Fuel Oil</Link></li>
                      <li className="mb-2" onClick={() => handleNavLinkClick('/Light-diesel-oil')}><Link to="/Light-diesel-oil" className="hover:text-gray-300" onClick={handleClose}>Light Diesel Oil (LDO)</Link></li>
                      <li className="mb-2" onClick={() => handleNavLinkClick('/Mineral-turpentine-oil')}><Link to="/Mineral-turpentine-oil" className="hover:text-gray-300" onClick={handleClose}>Mineral Turpentine Oil (MTO)</Link></li>
                      <li className="mb-2" onClick={() => handleNavLinkClick('/Rubber-processing-oil')}><Link to="/Rubber-processing-oil" className="hover:text-gray-300" onClick={handleClose}>Rubber Processing Oil</Link></li>
                      <li className="mb-2" onClick={() => handleNavLinkClick('/Mixed-hydrocarbon-oil')}><Link to="/Mixed-hydrocarbon-oil" className="hover:text-gray-300" onClick={handleClose}>Mixed Hydrocarbon Oil</Link></li>
                    </ul>
                    <ul className="mega-links">
                      <li className="mb-2"onClick={() => handleNavLinkClick('/base-fuel')}><Link to="/base-fuel" className="hover:text-gray-300" onClick={handleClose}>Base Oil</Link></li>
                      <li className="mb-2"onClick={() => handleNavLinkClick('/import-diesel')}><Link to="/import-diesel" className="hover:text-gray-300" onClick={handleClose}>Import Diesel</Link></li>
                      <li className="mb-2"onClick={() => handleNavLinkClick('/bio-diesel')}><Link to="/bio-diesel" className="hover:text-gray-300" onClick={handleClose}>Bio Diesel</Link></li>
                      <li className="mb-2"onClick={() => handleNavLinkClick('/indian-coal')}><Link to="/indian-coal" className="hover:text-gray-300" onClick={handleClose}>Indian Coal</Link></li>
                      <li className="mb-2"onClick={() => handleNavLinkClick('/C9-solvent')}><Link to="/C9-solvent" className="hover:text-gray-300" onClick={handleClose}>C9 Solvent</Link></li>
                      <li className="mb-2"onClick={() => handleNavLinkClick('/Toluene')}><Link to="/Toluene" className="hover:text-gray-300" onClick={handleClose}>Toluene</Link></li>
                      <li className="mb-2"onClick={() => handleNavLinkClick('/Benzene')}><Link to="/Benzene" className="hover:text-gray-300" onClick={handleClose}>Benzene</Link></li>
                      <li className="mb-2"onClick={() => handleNavLinkClick('/glycol-ethers')}><Link to="/glycol-ethers" className="hover:text-gray-300" onClick={handleClose}>Glycol Ethers</Link></li>
                    </ul>
                    <ul className="mega-links">
                      <li className="mb-2"onClick={() => handleNavLinkClick('/ketones')}><Link to="/ketones" className="hover:text-gray-300" onClick={handleClose}>Ketones</Link></li>
                      <li className="mb-2"onClick={() => handleNavLinkClick('/methyle-alcohol')}><Link to="/methyle-alcohol" className="hover:text-gray-300" onClick={handleClose}>Methyle Alcohol</Link></li>
                      <li className="mb-2"onClick={() => handleNavLinkClick('/phenols')}><Link to="/phenols" className="hover:text-gray-300" onClick={handleClose}>Phenols</Link></li>
                      <li className="mb-2"onClick={() => handleNavLinkClick('/xylene')}><Link to="/xylene" className="hover:text-gray-300" onClick={handleClose}>Xylene</Link></li>
                      <li className="mb-2"onClick={() => handleNavLinkClick('/n-hexane')}><Link to="/n-hexane" className="hover:text-gray-300" onClick={handleClose}>N-Hexane</Link></li>
                      <li className="mb-2"onClick={() => handleNavLinkClick('/Lime-stone')}><Link to="/Lime-stone" className="hover:text-gray-300" onClick={handleClose}>Lime Stone & Cement Grade</Link></li>
                      <li className="mb-2"onClick={() => handleNavLinkClick('/gypsum')}><Link to="/gypsum" className="hover:text-gray-300" onClick={handleClose}>Gypsum</Link></li>
                      <li className="mb-2"onClick={() => handleNavLinkClick('/pyroxenite')}><Link to="/pyroxenite" className="hover:text-gray-300" onClick={handleClose}>Pyroxenite</Link></li>
                    </ul>
                    <ul className="mega-links">
                      <li className="mb-2"onClick={() => handleNavLinkClick('/recyling-oil')}><Link to="/recyling-oil" className="hover:text-gray-300" onClick={handleClose}>Recyling Oil</Link></li>
                      <li className="mb-2"onClick={() => handleNavLinkClick('/tyre-oil')}><Link to="/tyre-oil" className="hover:text-gray-300" onClick={handleClose}>Tyre Oil</Link></li>
                      <li className="mb-2"onClick={() => handleNavLinkClick('/industrial-oil')}><Link to="/industrial-oil" className="hover:text-gray-300" onClick={handleClose}>Industrial Oils</Link></li>
                      <li className="mb-2"onClick={() => handleNavLinkClick('/chrome-ore')}><Link to="/chrome-ore" className="hover:text-gray-300" onClick={handleClose}>Chrome Ore</Link></li>
                      <li className="mb-2"onClick={() => handleNavLinkClick('/manganese-ore')}><Link to="/manganese-ore" className="hover:text-gray-300" onClick={handleClose}>Manganese Ore</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </li>
          <li><Link to="/about" className="block mb-4 text-gray-300 hover:text-white" onClick={() => handleNavLinkClick('/about')}>About</Link></li>
          <li><Link to="/contact-us" className="block mb-4 text-gray-300 hover:text-white"onClick={() => handleNavLinkClick('/contact-us')}>Contact Us</Link></li>
        </ul>
        <div className="hidden md:flex items-center space-x-4">
          <a href="https://wa.me/9311668312" className="text-gray-300 hover:text-white" style={{ color: '#25D366' }}>
            <img src={whats} alt="WhatsApp" style={{ maxWidth: '33px' }} />
          </a>
          <div className="font-bold text-black">6380685643</div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;


// import React, { useState } from 'react';
// import './Navbar.css';
// import { Link } from 'react-router-dom';
// import whats from '../../image/whatsApp.png';
// import logo from '../../image/loader.png';
// import { FaBars, FaTimes } from 'react-icons/fa';
 
// const NavBar = () => {
//   const [showMegaMenu, setShowMegaMenu] = useState(false);
//   const [isOpen, setIsOpen] = useState(false);
 
 
//   const handleSubmenuItemClick = () => {
//     setIsOpen(false);
//     setShowMegaMenu(false);
//   };
 
//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//     if (showMegaMenu) {
//       setShowMegaMenu(false);
//     }
//   };
//   const handleNavLinkClick = (path) => {
//     window.location.href = path; // Navigate to the specified path
//     window.scrollTo(0, 0); // Scroll to the top
//     toggleMenu(); // Close the menu if open
//   };
 
//   return (
//     <nav>
//       <div className="wrapper">
//         <div className="logo">
//           <a href="/"><img src={logo} alt='vajravel traders' /></a>
//         </div>
//         <input type="checkbox" id="menu-btn" className="menu-btn" />
//         <label htmlFor="menu-btn" className="btn menu-btn">
//           <FaBars />
//         </label>
//         <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
//           <label htmlFor="menu-btn" className="btn close-btn">
//             <FaTimes />
//           </label>
//         <li>  <Link to="/" onClick={() => handleNavLinkClick('/')} className='block mb-4 text-gray-300 hover:text-white'>Home</Link></li>
//           <li>
//             <a href="#" className="desktop-item block mb-4 text-gray-300 hover:text-white" onClick={() => setShowMegaMenu(!showMegaMenu)}>Products</a>
//             <input type="checkbox" id="showMega" checked={showMegaMenu} onChange={() => setShowMegaMenu(!showMegaMenu)} />
//             <label htmlFor="showMega" className="mobile-item block mb-4 text-gray-300 hover:text-white">Product</label>
//             {showMegaMenu && (
//               <div className="mega-box">
//                 {/* <div className="content"> */}
//                   <div className="row  ">
//                     <header className='h5'>Categories</header>
//                     <div className="mega-links-container border shadow p-8">
//                       <ul className="mega-links col">
//                         <li className="mb-2" onClick={handleSubmenuItemClick}><Link to="/Bitumen" className="hover:text-gray-300">Bitumen</Link></li>
//                         <li className="mb-2" onClick={handleSubmenuItemClick}><Link to="/Ca-solvent" className="hover:text-gray-300">CA Solvent</Link></li>
//                         <li className="mb-2" onClick={handleSubmenuItemClick}><Link to="/Furnance-oil" className="hover:text-gray-300">Furnace Oil</Link></li>
//                         <li className="mb-2" onClick={handleSubmenuItemClick}><Link to="/Fuel-oil" className="hover:text-gray-300">Fuel Oil</Link></li>
//                         <li className="mb-2" onClick={handleSubmenuItemClick}><Link to="/Light-diesel-oil" className="hover:text-gray-300">Light Diesel Oil (LDO)</Link></li>
//                         <li className="mb-2" onClick={handleSubmenuItemClick}><Link to="/Mineral-turpentine-oil" className="hover:text-gray-300">Mineral Turpentine Oil (MTO)</Link></li>
//                         <li className="mb-2" onClick={handleSubmenuItemClick}><Link to="/Rubber-processing-oil" className="hover:text-gray-300">Rubber Processing Oil</Link></li>
//                         <li className="mb-2" onClick={handleSubmenuItemClick}><Link to="/Mixed-hydrocarbon-oil" className="hover:text-gray-300">Mixed Hydrocarbon Oil</Link></li>
//                       </ul>
//                       <ul className="mega-links">
//                         <li className="mb-2" onClick={handleSubmenuItemClick}><Link to="/base-fuel" className="hover:text-gray-300">Base Oil</Link></li>
//                         <li className="mb-2" onClick={handleSubmenuItemClick}><Link to="/import-diesel" className="hover:text-gray-300">Import Diesel</Link></li>
//                         <li className="mb-2" onClick={handleSubmenuItemClick}><Link to="/bio-diesel" className="hover:text-gray-300">Bio Diesel</Link></li>
//                         <li className="mb-2" onClick={handleSubmenuItemClick}><Link to="/indian-coal" className="hover:text-gray-300">Indian Coal</Link></li>
//                         <li className="mb-2" onClick={handleSubmenuItemClick}><Link to="/C9-solvent" className="hover:text-gray-300">C9 Solvent</Link></li>
//                         <li className="mb-2" onClick={handleSubmenuItemClick}><Link to="/Toluene" className="hover:text-gray-300">Toluene</Link></li>
//                         <li className="mb-2" onClick={handleSubmenuItemClick}><Link to="/Benzene" className="hover:text-gray-300">Benzene</Link></li>
//                         <li className="mb-2" onClick={handleSubmenuItemClick}><Link to="/glycol-ethers" className="hover:text-gray-300">Glycol Ethers</Link></li>
//                       </ul>
//                       <ul className="mega-links">
//                         <li className="mb-2" onClick={handleSubmenuItemClick}><Link to="/ketones" className="hover:text-gray-300">Ketones</Link></li>
//                         <li className="mb-2" onClick={handleSubmenuItemClick}><Link to="/methyle-alcohol" className="hover:text-gray-300">Methyle Alcohol</Link></li>
//                         <li className="mb-2" onClick={handleSubmenuItemClick}><Link to="/phenols" className="hover:text-gray-300">Phenols</Link></li>
//                         <li className="mb-2" onClick={handleSubmenuItemClick}><Link to="/xylene" className="hover:text-gray-300">Xylene</Link></li>
//                         <li className="mb-2" onClick={handleSubmenuItemClick}><Link to="/n-hexane" className="hover:text-gray-300">N-Hexane</Link></li>
//                         <li className="mb-2" onClick={handleSubmenuItemClick}><Link to="/Lime-stone" className="hover:text-gray-300">Lime Stone & Cement Grade</Link></li>
//                         <li className="mb-2" onClick={handleSubmenuItemClick}><Link to="/gypsum" className="hover:text-gray-300">Gypsum</Link></li>
//                         <li className="mb-2" onClick={handleSubmenuItemClick}><Link to="/pyroxenite" className="hover:text-gray-300">Pyroxenite</Link></li>
//             </ul>
 
//                       <ul className="mega-links">
//                       <li className="mb-2" onClick={handleSubmenuItemClick}><Link to="/recyling-oil" className="hover:text-gray-300">Recyling Oil</Link></li>
//                         <li className="mb-2" onClick={handleSubmenuItemClick}><Link to="/tyre-oil" className="hover:text-gray-300">Tyre Oil</Link></li>
//                       <li className="mb-2" onClick={handleSubmenuItemClick}><Link to="/industrial-oil" className="hover:text-gray-300">Industrial Oils</Link></li>
//                         <li className="mb-2" onClick={handleSubmenuItemClick}><Link to="/chrome-ore" className="hover:text-gray-300">Chrome Ore</Link></li>
//                         <li className="mb-2" onClick={handleSubmenuItemClick}><Link to="/manganese-ore" className="hover:text-gray-300">Manganese Ore</Link></li>
//                       </ul>
//                     </div>
//                   </div>
//                 {/* // </div> */}
//               </div>
//             )}
//           </li>
//           <li><Link to="/about"  className="block mb-4 text-gray-300 hover:text-white">About</Link></li>
//           <li><Link to="/contact-us"  className="block mb-4 text-gray-300 hover:text-white">Contact Us</Link></li>
     
//         </ul>
//         <div className="hidden md:flex items-center space-x-4">
//           <a href="https://wa.me/9311668312" className="text-gray-300 hover:text-white" style={{ color: '#25D366' }}>
//             <img src={whats} alt="WhatsApp" style={{ maxWidth: '33px' }} />
//           </a>
//           <div className="font-bold text-black">6380685643</div>
//         </div>
//       </div>
//     </nav>
//   );
// };
 
// export default NavBar;
