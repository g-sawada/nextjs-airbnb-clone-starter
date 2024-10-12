import React from "react";
import Footer from "airbnb/components/footer/Footer";
import Navbar from "airbnb/components/navbar/Navbar";
import AuthModal from "airbnb/components/auth/AuthModal";

const page = () => {
  return <div>
    <Navbar/>
    <Footer/>
    <AuthModal/>
  </div>;
};

export default page;
