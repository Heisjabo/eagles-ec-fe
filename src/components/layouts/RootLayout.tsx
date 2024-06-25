import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Divider } from "@mui/material";

import Header from "../common/header/Header";
import Footer from "../common/footer/Footer";
import HeaderInfo from "../common/header/Info";
import Navbar from "../common/header/Navbar";
import BreadCrums from "../common/breadcrum/BreadCrum";

export interface IOutletProps {
  searchQuery: string;
  showFilters: boolean;
}

const RootLayout = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isHeaderInfoVisible, setIsHeaderInfoVisible] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(true);

  const location = useLocation();

  const toggleFilters = () => {
    setShowFilters((state) => !state);
  };

  useEffect(() => {
    const handleScroll = () => {
      const headerInfo = document.getElementById("header-info");

      if (headerInfo) {
        const headerInfoRect = headerInfo.getBoundingClientRect();
        const scrollPosition = window.scrollY || window.pageYOffset;
        if (scrollPosition > headerInfoRect.bottom) {
          setIsSticky(true);
          setIsHeaderInfoVisible(false);
        } else {
          setIsSticky(false);
          setIsHeaderInfoVisible(true);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <div className={`soleil ${isSticky ? "sticky top-0 z-50" : ""}`}>
        <div className="max-w-[1440px] lg:mx-auto lg:w-[90%] w-full">
          {isHeaderInfoVisible && <HeaderInfo />}
          <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        </div>
        <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </div>
      <div className="flex-1 max-w-[1440px] mx-auto lg:w-[90%] w-[100%]">
        <BreadCrums showFilters={showFilters} toggleFilter={toggleFilters} />
        {location.pathname !== "/" && <Divider className="mb-3" />}
        <Outlet context={{ searchQuery, showFilters } satisfies IOutletProps} />
      </div>
      <Footer />
    </div>
  );
};

export default RootLayout;
