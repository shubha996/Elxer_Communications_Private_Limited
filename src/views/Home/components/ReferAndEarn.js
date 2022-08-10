import React from 'react'
import { NavLink } from 'react-router-dom';

const ReferAndEarn = () => {
    const impStyle = {
        padding: '5px 14px',
        letterSpacing: '0.02rem'
      }
  return (
    <>
        <div className="section_row promo-box p-t-20 p-b-0">
            <div className="section_inner clearfix">
                <div className="one_third m-b-0">
                    <h3>Refer and Earn</h3>
                </div>
                <div className="two_third m-b-0">
                    <div className="two_third m-b-0">
                        <h4>Refer Elxer Internet services to your friends or family and get the <strong>DISCOUNT</strong> of <strong>₹250</strong> on your next bill!</h4>
                    </div>
                    <div className="one_third textcenter m-b-0">
                        <NavLink to="/refer-friends" target="_blank" rel='noreferrer' className="btn btn-primary medium">
                            <span className="btn-text" style={impStyle}>REFER NOW</span>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ReferAndEarn