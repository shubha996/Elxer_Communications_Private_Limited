import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';

const HeaderCareers = () => { 
    // State for Progress Bar onScroll
    const [scrollTop, setScrollTop] = useState(0);
    // State for Header Position Sticky
    const [fix, setFixed] = useState(false);


    // Progress Bar Handler Starts
    let progressBarHandler = () => {
        const totalScroll = document.documentElement.scrollTop;
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scroll = `${(totalScroll / windowHeight) * 100}`;

        setScrollTop(scroll);
        
    }
    useEffect(()=> {
        window.addEventListener('scroll', progressBarHandler);

        return () => window.removeEventListener('scroll', progressBarHandler);
    }, []);
    // Progress Bar Handler Ends



    // Header Position Sticky Starts
    var headerPosition = () => {
        if(window.scrollY >= 40){
            setFixed(true);
        }else{
            setFixed(false);
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', headerPosition);

        return () => window.removeEventListener('scroll', headerPosition);
    })
    // Header Position Sticky Ends

    /*-----------------------------Mobile Menu Toggle Function Starts---------------------------- */
    const mobileMenuHandler = () => {
        var menuDiv = document.getElementsByClassName('iva-mobile-menu')[0];
        menuDiv.style.display = 'flex';
    }
    /*-----------------------------Mobile Menu Toggle Function Ends---------------------------- */

  return (
    <>
        <header id="header" className="header-style-default">
                <div className="topbar">
                    <div className="inner">
                        <div className="topbar-left"><span>HR Desk: <a href="tel:07716777777">0771-677-7770</a>
                                (11AM-5PM)</span><span>|</span><span>Email: <a
                                    href="mailto:h&#114;&#64;elxer.co&#109;">hr&#64;&#101;l&#120;er.&#99;o&#109;</a></span>
                        </div>
                        <div className="topbar-right"><a href="#career-opportunities" className="hiring-btn">We're Hiring</a>
                        </div>
                    </div>
                </div>
                {/* <!-- .topbar --> */}
                <div className={fix ? 'header fixed' : 'header'}>
                    <div className="header-area">
                        <div className="logo">
                            <NavLink to="/" title="Elxer">
                                <h1 className="font-outer particletext confetti spaced" style={{fontSize: '2rem'}}>ELXER</h1>
                            </NavLink>
                            <span style={{fontSize: '1.06rem'}}>Stay Safe keep Social Distancing</span>
                        </div>
                        {/* <!-- .logo --> */}
                        <div className="primarymenu menuwrap">
                            <ul className="sf-menu">
                                <li><a href="#header">Home</a></li>
                                <li><a href="#who-are-we">Who are we?</a></li>
                                <li><a href="#why-join-us">Why join us?</a></li>
                                <li><a href="#career-opportunities">Opportunities</a></li>
                                <li><a href="#meet-the-team">Our Team</a></li>
                            </ul>
                            <div id="iva-mobile-nav-icon" className="iva-mobile-dropdown" onClick={() => mobileMenuHandler()}>
                                <span></span><span></span><span></span><span></span>
                            </div>
                        </div>
                        {/* <!-- .primarymenu--> */}
                    </div>
                    {/* <!-- .header-area --> */}
                    <div className="iva-mobile-menu">
                        <ul className="iva_mmenu">
                            <li><a href="#header">Home</a></li>
                            <li><a href="#who-are-we">Who are we?</a></li>
                            <li><a href="#why-join-us">Why join us?</a></li>
                            <li><a href="#career-opportunities">Opportunities</a></li>
                            <li><a href="#meet-the-team">Our Team</a></li>
                        </ul>
                    </div>
                    {/* <!-- .iva-mobile-menu --> */}
                    <div className="page-progress-container">
                        <div className="page-progress" style={{width: `${scrollTop}%`}}></div>
                    </div>
                    {/* <!-- page-progress-container --> */}
                </div>
                {/* <!-- .header --> */}
            </header>
            {/* <!-- #header --> */}
    </>
  )
}

export default HeaderCareers