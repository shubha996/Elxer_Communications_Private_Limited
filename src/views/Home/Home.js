import React from "react";
import Header from "../Common/Header/Header";
import Footer from "../Common/Footer/Footer";
import "./Home.css";
import '../../assets/css/common.css';
import CarouselComponent from './components/CarouselComponent';
import HappyCustomers from './components/HappyCustomers';
import JoinUs from './components/JoinUs';
import PayRecharge from './components/PayRecharge';
import ReferAndEarn from './components/ReferAndEarn';
import WhyUs from './components/WhyUs';

const Home = () => {
  document.title = 'Elxer Best Broadband Service Provider in Raipur, Bhilai-Durg, Bhatapara, Raigarh - Fastest Internet Speed';

  return (
    <>
      <Header />
        <CarouselComponent />
        <ReferAndEarn/>
        <PayRecharge/>
        <WhyUs/>
        <JoinUs/>
        <HappyCustomers/>
      <Footer />
    </>
  );
};

export default Home;
