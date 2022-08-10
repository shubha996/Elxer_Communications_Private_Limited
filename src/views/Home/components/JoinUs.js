import React, { useContext } from 'react'
import ApiContext from '../../../ContextApi'

const JoinUs = () => {
    const {home} = useContext(ApiContext);
  return (
    <>
        <div className="section_row download-app">
            <div className="section_inner clearfix">
                <div className="two_third">
                    <div className="features-wrapper">
                        <h2>Join us on mobile!</h2>
                        <p className="m-b-40">Download MyElxer app to stay updated and get in touch right from your phone.</p>
                        {
                            home?.joinus?.map((item, index) => {
                                return(
                                <div className="feature-item" key={index}>
                                    <div>
                                        <img src={item.image} alt={item.title}/>
                                    </div>
                                    <div>
                                        <h4>{item.title}</h4>
                                        <p>{item.content}</p>
                                    </div>
                                </div>
                                )
                            })
                        }
                        <div className="download-buttons m-t-40">
                            <a href="https://elxer.com/mobile-app?utm_source=website&utm_medium=banner&utm_campaign=appdownload" target="_blank" rel='noreferrer'>
                                <img loading="lazy" src="https://elxer.com/assets/images/svg/google-play-store-badge.svg" alt="Get it on Google Play" className="download-app-image"/>
                            </a>
                            <img loading="lazy" src="https://elxer.com/assets/images/svg/app-store-badge-coming-soon.svg" alt="Coming soon in App Store" className="download-app-image"/>
                            <p className="m-b-0"><small>Available on Android device</small></p>
                        </div>
                    </div>
                </div>
                <div className="one_third aligncenter">
                    <div className="vertical-center">
                        <img loading="lazy" src="https://elxer.com/assets/media/app/myelxer.png" alt="MyElxer App" className="app-screen w3-animate-zoom"/>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default JoinUs