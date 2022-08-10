import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './views/Home/Home';
import AboutUs from './views/AboutUs/AboutUs';
import Business from './views/Business/Business';
import ScrollToTop from './views/Common/ScrollToTop/ScrollToTop';
import Broadband from './views/Business/SubComponents/Broadband/Broadband';
import LeasedLine from './views/Business/SubComponents/LeasedLine/LeasedLine';
import Careers from './views/Careers/Careers';
import Internship from './views/Careers/SubComponents/Internships/Internship';
import OpenPositions from './views/Careers/SubComponents/OpenPositions/OpenPositions';
import JobDescription from './views/Careers/SubComponents/OpenPositions/SubComponent/JobDescription';
import PageNotFound from './views/PageNotFound/PageNotFound';
import Terms from './views/Compliance/Terms';
import PrivacyPolicy from './views/Compliance/PrivacyPolicy';
import Feedback from './views/Compliance/Feedback';
import ContactUs from './views/ContactUs/ContactUs';
import Loader from './views/Common/Loaders/Loader';
import Faqs from './views/Help And Support/Faqs';
import Support from './views/Help And Support/Support';
import KnowledgeBase from './views/Help And Support/KnowledgeBase';
import Videos from './views/Help And Support/KbVideos';
import Plans from './views/Plans/Plans';
import Pay from './views/Pay/Pay';
import ReferFriends from './views/ReferFriends/ReferFriends';
import NewConnection from './views/NewConnection/NewConnection';
import { useEffect } from 'react';
import axios from 'axios';
import ApiContext from './ContextApi';

const Controller = () => {
  const [home, setHome] = useState([]);
  const [careers, setCareers] = useState([]);
  const [corporate, setCorporate] = useState([]);
  const [aboutUs, setAboutUs] = useState([]);
  const [terms, setTerms] = useState([]);
  const [privacy, setPrivacy] = useState([]);
  const [knowledgebase, setKnowledgebase] = useState([]);
  const [videos, setVideos] = useState([]);
  const [faqs, setFaqs] = useState([]);
  const [plans, setPlans] = useState([]);
  
  useEffect(() => {
    const getData = async () => {
      try{
        const home = await axios.get('http://localhost:4000/home');
        setHome(home.data);
        const corporate = await axios.get('http://localhost:4000/corporate');
        setCorporate(corporate.data);
        const aboutus = await axios.get('http://localhost:4000/aboutus');
        setAboutUs(aboutus.data);
        const terms = await axios.get('http://localhost:4000/terms');
        setTerms(terms.data);
        const privacy = await axios.get('http://localhost:4000/privacy');
        setPrivacy(privacy.data);
        const knowledgebase = await axios.get('http://localhost:4000/knowledgebase');
        setKnowledgebase(knowledgebase.data);
        const videos = await axios.get('http://localhost:4000/videos');
        setVideos(videos.data);
        const faqs = await axios.get('http://localhost:4000/faqs');
        setFaqs(faqs.data);
        const careers = await axios.get('http://localhost:4000/careers');
        setCareers(careers.data);
        const plans = await axios.get('http://localhost:4000/plans');
        setPlans(plans.data);
        
      }
      catch(err){
        console.log(err);
      }
    }
    getData();

  }, []);
  return (
    <>
      <ApiContext.Provider value = {{home, careers, corporate, plans, faqs, 
                                    knowledgebase, terms, privacy, videos, aboutUs}}>
        <Router>
        <ScrollToTop/>
          <Routes>
            <Route path='/' element = {<Home />}/>
            <Route path='/packages' element = {<Plans/>}/>
            <Route path='/packages/:cityn' element = {<Plans/>}/>
            <Route path='/careers' element = {<Careers/>}/>
            <Route path='/support' element = {<Support/>}/>
            <Route path='/corporate' element = {<Business/>}/>
            <Route path='/corporate/leased-line' element = {<LeasedLine/>}/>
            <Route path='/corporate/broadband' element={<Broadband/>}/>
            <Route path='/contact' element = {<ContactUs/>}/>
            <Route path='/terms' element = {<Terms/>}/>
            <Route path='/privacy' element = {<PrivacyPolicy/>}/>
            <Route path='/kb' element = {<KnowledgeBase/>}/>
            <Route path='/kb/videos' element = {<Videos/>}/>
            <Route path='/faqs' element = {<Faqs/>}/>
            <Route path='/refer-friends' element = {<ReferFriends/>}/>
            <Route path='/feedback' element = {<Feedback/>}/>
            <Route path='/pay' element = {<Pay/>}/>
            <Route path='/new-connection' element = {<NewConnection/>}/>
            <Route path='/careers/open-positions' element = {<OpenPositions/>}/>
            <Route path='/careers/open-positions/job-description/:id' element = {<JobDescription/>}/>
            <Route path='/careers/internship' element = {<Internship/>}/>
            <Route path='/about' element = {<AboutUs/>}/>
            <Route path='*' element = {<PageNotFound/>}/>
            <Route path='/loader' element = {<Loader/>}/>
          </Routes>
        </Router>
      </ApiContext.Provider>
    </>
  )
}

export default Controller