import React from 'react'

const PayRecharge = () => {
  return (
    <>
        <div id="pay-recharge" className="section_row pay-recharge p-t-50 p-b-40">
            <div className="section_inner clearfix">
                <div className="one_half whitetext">
                    <h3>We are the fastest & most reliable Internet Service Provider you have been looking
                        for!</h3>
                    <p>Elxer brings high-speed internet for Residential & Commercial/Business customers
                        through the latest technology of Fiber Broadband starting @ just
                        <strong> ₹699</strong>/-</p>
                    <p>We constantly strive to give a flawless experience to our customers and for this
                        purpose, we have tailored our services for More speed, entertainment, time, devices,
                        experience & overall more value.</p>
                </div>
                <div className="one_half last p-b-10">
                    <div className="recharge-box">
                        <h4>It's now easier to pay your bill/recharge anytime, anywhere.</h4>

                        
                        <div id="requestRechargeOTP"><form id="requestRechargeOTPForm"><p className="m-b-10">Enter your Registered mobile number</p><div className="input-wrapper"><input type="tel" name="mobile" id="mobile" pattern="[6789][0-9]{9}" required="" maxLength="10" title="Mobile number should starts with 6-9 only!" placeholder="Registered mobile number" autoComplete="off"/><button type="submit">Get OTP</button></div><div className="textcenter"><small>Mobile number should be 10 digit long and starts with 6-9 only without +91</small></div></form></div>
                        <div id="verifyRechargeOTP"></div>



                        {/* <response></response> */}
                        <div className="payment-methods">
                            <h5>We Accept Secure Payment</h5>
                            <ul className="list-inline">
                                <li>​<svg viewBox="0 0 21 24" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M9.516 20.254l9.15-8.388-6.1-8.388-1.185 6.516 1.629 2.042-2.359 1.974-1.135 6.244zM12.809.412l8 11a1 1 0 0 1-.133 1.325l-12 11c-.707.648-1.831.027-1.66-.916l1.42-7.805 3.547-3.01-1.986-5.579 1.02-5.606c.157-.865 1.274-1.12 1.792-.41z"
                                            fill="rgba(0, 119, 219, .5)"></path>
                                        <path
                                            d="M5.566 3.479l-3.05 16.775 9.147-8.388-6.097-8.387zM5.809.412l7.997 11a1 1 0 0 1-.133 1.325l-11.997 11c-.706.648-1.831.027-1.66-.916l4-22C4.174-.044 5.292-.299 5.81.412z"
                                            fill="rgba(0, 119, 219, 1)"></path>
                                    </svg><small>UPI</small></li>
                                <li><svg viewBox="0 0 28 25" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M4 15a1 1 0 0 1 2 0v5a1 1 0 0 1-2 0v-5zm6 0a1 1 0 0 1 2 0v5a1 1 0 0 1-2 0v-5zm6 0a1 1 0 0 1 2 0v5a1 1 0 0 1-2 0v-5zM1 25a1 1 0 0 1 0-2h20a1 1 0 0 1 0 2H1zm0-13c-.978 0-1.374-1.259-.573-1.82l10-7a1 1 0 0 1 1.146 0l1.426 1L13 9l1 3H1zm3.172-2h8.814l.017-3.378L11 5.221 4.172 10z"
                                            fill="rgba(0, 119, 219, 1)"></path>
                                        <path
                                            d="M20 16a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm0-2a6 6 0 1 0 0-12 6 6 0 0 0 0 12zm3.663-7H27v2h-3.338c-.162 2.156-.85 4.275-2.057 6.352l-1.21-.704c1.084-1.863 1.703-3.744 1.863-5.648H13V7h9.258c-.16-1.904-.78-3.785-1.863-5.648l1.21-.704C22.814 2.725 23.501 4.844 23.663 7zm-4.058 7.648l-1.21.704C17 12.955 16.3 10.502 16.3 8c0-2.501.701-4.955 2.095-7.352l1.21.704C18.332 3.54 17.7 5.754 17.7 8c0 2.246.632 4.46 1.905 6.648z"
                                            fill="rgba(0, 119, 219, .5)"></path>
                                    </svg><small>Net Banking</small></li>
                                <li><svg viewBox="0 0 25 23" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M2 7v14h19v-5h2.011v-6H21V7H2zm0-2h19a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2zm15 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
                                            fill="rgba(0, 119, 219, 1)"></path>
                                        <path
                                            d="M7.326 5L16 2.11V5h2V2.11c0-.643-.308-1.352-.83-1.728a2 2 0 0 0-1.802-.276L2 5h5.326zM15 12v4h8v-4h-8zm0-2h8a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2z"
                                            fill="rgba(0, 119, 219, .5)"></path>
                                    </svg><small>Wallet</small></li>
                                <li><svg viewBox="0 0 27 22" xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink">
                                        <path
                                            d="M2 7v13h18v-5H7V7H2zm0-2h5v10h15v5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z"
                                            fill="rgba(0, 119, 219, .5)"></path>
                                        <path
                                            d="M10.004 13.003a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2h-2zM7 0h18a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm0 2v13h18V2H7zm-.282 5.005a1 1 0 1 1 0-2h19a1 1 0 0 1 0 2h-19z"
                                            fill="rgba(0, 119, 219, 1)"></path>
                                    </svg><small>Cards</small></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default PayRecharge