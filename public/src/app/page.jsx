'use client';

import React from "react";
import Footer from "airbnb/components/footer/Footer";
import Navbar from "airbnb/components/navbar/Navbar";
import AuthModal from "airbnb/components/auth/AuthModal";
import { useAppStore } from "airbnb/store/store";

const page = () => {

  const { isAuthModalOpen } = useAppStore();

  return <div>
    <Navbar/>
    <Footer/>
    { isAuthModalOpen && <AuthModal/> } 
  </div>;
};

export default page;
