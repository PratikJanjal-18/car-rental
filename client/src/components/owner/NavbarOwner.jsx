import React from "react";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";
import { motion } from "motion/react";

const NavbarOwner = () => {
  const { user } = useAppContext();
  return (
    <div className="flex items-center justify-between px-6 md:px-10 py-4 text-gray-500 border-b border-borderColor relative transition-all">
      <Link to="/">
        {/* <img src={assets.logo} alt="" className="h-7" /> */}
        <motion.p
          whileHover={{ scale: 1.1 }}
          alt="logo"
          className="text-2xl font-extrabold italic text-primary"
        >
          DriveEase
        </motion.p>
      </Link>
      <p>Welcome, {user?.name || "Owner"}</p>
    </div>
  );
};

export default NavbarOwner;
