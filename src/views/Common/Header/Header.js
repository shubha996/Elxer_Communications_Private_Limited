import React, { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom';

const Header = (props) => {
    /* -------------------------State for Progress Bar onScroll-------------------------*/
    const [scrollTop, setScrollTop] = useState(0);

    /* -------------------------State for Header Position Sticky-------------------------*/
    const [fix, setFixed] = useState(false);




    /* -------------------------Progress Bar Handler function Starts------------------------- */
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
    /* -------------------------Progress Bar Handler Function Ends------------------------- */



    
    /* -------------------------Header Position Sticky Starts------------------------- */
    var headerPosition = () => {
        if(window.scrollY >= 80){
            setFixed(true);
        }else{
            setFixed(false);
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', headerPosition);

        return() => window.removeEventListener('scroll', headerPosition);
    })
    /* -------------------------Header Position Sticky Ends------------------------- */




    /* ------------Active Nav Link Class According to Pathname using Location Hook Starts-------------- */
    const location = useLocation();
    const locationName = location.pathname.split("/")[1];
    /* ------------Active Nav Link Class According to Pathname using Location Hook Ends-------------- */



    /*-----------------------------Mobile Menu Toggle Function Starts---------------------------- */
    const mobileMenuHandler = () => {
        var menuDiv = document.getElementsByClassName('iva-mobile-menu')[0];
        menuDiv.style.display = 'flex';
    }
    /*-----------------------------Mobile Menu Toggle Function Ends---------------------------- */

  return (
    <>
    <header id="header" className="header-style-default">

    {/* -----------------------------Notification Bar Starts---------------------------- */}
        <div className="notification-bar" style={props.hideNotificationBar}>
            <div className="container">
                <div className="message" style={{fontSize: '1rem'}}>
                    <span className="blink">📺</span> Watch your favourites shows! Bring home the fun with all new <strong>Elxer OTT</strong> plans.
                </div>
                <div className="button">
                    <NavLink to="/packages">Subscribe Now</NavLink>
                </div>
            </div>
        </div>
    {/* -----------------------------Notification Bar Ends---------------------------- */}



        <div>
    {/* -----------------------------Top Bar Starts---------------------------- */}
            <div className="topbar">
                <div className="inner">
                    <div className="topbar-left">
                        <span>Customer Support: <a href="tel:07716777777">0771-677-7777</a> (24/7)</span>
                        <span>|</span>
                        <span>Email: <a href="mailto:&#115;u&#112;p&#111;r&#116;&#64;&#101;l&#120;&#101;&#114;&#46;&#99;om">s&#117;&#112;port&#64;&#101;&#108;xer.&#99;&#111;m</a></span>
                    </div>
                    <div className="topbar-right">
                        <NavLink to="/careers" className="hiring-btn" target='_blank'>We're Hiring</NavLink>
                        <a href="http://care.elxer.com" className="topbar-btn" target='_blank' rel="noreferrer">Customer Portal</a>
                    </div>
                </div>
            </div>
    {/* -----------------------------Top Bar Ends---------------------------- */}


    {/* -----------------------------Header Bar Starts---------------------------- */}
            <div className={fix ? 'header fixed' : 'header'}>
                <div className='header-area'>
                    <div className="logo">
                        <NavLink to="/" title="Elxer">
                            <h1 className="font-outer particletext confetti spaced" style={{fontSize: '2rem'}}>ELXER</h1>
                        </NavLink>
                        <span style={{fontSize: '1.06rem'}}>Stay Safe keep Social Distancing</span>
                    </div>
                    {/* .logo */}
                    <div className="primarymenu menuwrap">
                        <ul className="sf-menu">
                            <li className={locationName === "" ? 'current-menu-item current_page_item' : '' }><NavLink to="/" activeclassname = "">Home</NavLink></li>
                            <li className={locationName === "corporate" ? 'current-menu-item current_page_item' : '' }><NavLink to="/corporate">Business</NavLink></li>
                            <li className={locationName === "packages" ? 'current-menu-item current_page_item' : '' }><NavLink to="/packages">Plans</NavLink></li>
                            <li className={locationName === "support" ? 'current-menu-item current_page_item' : '' }><NavLink to="/support">Support</NavLink></li>
                            <li className={locationName === "contact" ? 'current-menu-item current_page_item' : '' }><NavLink to="/contact">Contact Us</NavLink></li>
                            <li><NavLink to="#pay-recharge" className="navbar-btn">Pay & Recharge</NavLink></li>
                            <li><NavLink to="/new-connection" className="navbar-btn" target="_blank">New Connection</NavLink></li>
                        </ul>
                        <div id="iva-mobile-nav-icon" className="iva-mobile-dropdown" onClick={() => mobileMenuHandler()}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                    {/* <!-- .primarymenu--> */}
                </div>
                {/* <!-- .header-area --> */}
                <div className="iva-mobile-menu">
                    <ul className="iva_mmenu">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/corporate">Business</NavLink></li>
                        <li><NavLink to="#pay-recharge">Pay & Recharge</NavLink></li>
                        <li><NavLink to="/new-connection" target="_blank">New Connection</NavLink></li>
                        <li><NavLink to="/packages">Plans</NavLink></li>
                        <li><NavLink to="/support">Support</NavLink></li>
                        <li><NavLink to="/contact">Contact Us</NavLink></li>
                    </ul>
                </div>
                {/* <!-- .iva-mobile-menu --> */}
            {/* -----------------------------Page Progress Bar Starts---------------------------- */}
            <div className="page-progress-container">
                <div className="page-progress" style={{width: `${scrollTop}%`}} ></div>
            </div>
            {/* -----------------------------Page Progress Bar Ends---------------------------- */}
            </div>
            {/* <!-- .header --> */}
        </div>
    {/* -----------------------------Header Bar Ends---------------------------- */}
    </header>
    {/* <!-- #header --> */}
    </>
  )
}

export default Header;