import React from 'react'
import Header from '../Common/Header/Header';
import Footer from '../Common/Footer/Footer';

const Pay = () => {
  return (
    <>
    <Header/>
        <div id="main" onbeforeunload="HandleBackFunctionality()">
            <div id="primary" className="pagemid">
                <div className="section_row p-b-10">
                    <div className="section_inner clearfix m-b-30">
                        <div className="one_half" id="connect_devices">
                            <figure className="m-b-30"><img loading="lazy"
                                    src="https://elxer.com/assets/images/svg/payments.svg" alt="Online Payments"/>
                            </figure>
                        </div>
                        <div className="one_half last p-40">
                            <h2 className="at-fancy-title-v1 m-b-30">Pay bills/recharge quickly and easily.</h2>
                            <div id="payment_mobile_input" className="m-b-30">
                                {/* <!-- Form open --> */}
                                <form id="online__payment" action="https://elxer.com/pay/checkout" method="post"
                                    className="wpcf7">
                                    {/* <!-- billing type and mobile div start --> */}
                                    <div id="bill_info" className="ats-columns-wrap" >
                                        <h4 className="m-b-0">Enter your Registered mobile number</h4>
                                        <h5 className="m-b-0">We will send an <strong>One Time Password</strong> to your
                                            number</h5>
                                        <div className="ats-column__1_2 at-checkaval__inputs m-t-10"><span><small>Mobile
                                                    number should be 10 digit long and starts with 6-9 only without
                                                    +91</small><input type="tel" name="mobile" id="mobile"
                                                    pattern="[6789][0-9]{9}" required maxLength="10"
                                                    title="Mobile number should starts with 6-9 only!"
                                                    placeholder="Registered mobile number" autoComplete="off" />
                                                <div id="error_mobile"></div>
                                            </span></div>
                                            {/* <!-- Button --> */}
                                            <input type="button" value="Proceed"
                                            id="request_payment" />
                                    </div>
                                    {/* <!-- billing type and mobile div end --> */}
                                    {/* <!-- OTP entry div start --> */}
                                    <div id="otp_verification" style={{display: "none"}}>
                                        <div className="ats-columns-wrap" >
                                            <h4 className="m-b-0">Verify OTP</h4>
                                            <h5>Please enter the 4-digit verification code we sent via SMS</h5>
                                            <div className="ats-column__1_2 at-checkaval__inputs"><span><input
                                                        type="tel" name="otp" id="otp" value="" maxLength="4"
                                                        placeholder="Enter OTP" autoComplete="off" />
                                                    <div id="error_otp"></div>
                                                </span></div>
                                        </div><input className="m-b-10" type="button" value="Verify" id="otp_verify" />
                                        <div className="countdown text-danger"></div><button type="button"
                                            className="resend_otp m-b-10" id="resend_otp" >Resend
                                            OTP</button>
                                    </div>
                                    {/* <!-- OTP entry div end --> */}
                                </form>
                                {/* <!-- Form Closed --> */}
                            </div>
                            <div className="ats-columns-wrap">
                                <h4 className="m-b-10">Like and Share us on Facebook</h4>
                                 {/* <div className="fb-like" data-href="https://www.facebook.com/elxercommunications" data-width="" data-layout="button_count" data-action="recommend" data-size="large" data-share="false"></div> */}
                                <div className="fb-like" data-href="https://www.facebook.com/elxercommunications"
                                    data-width="" data-layout="button_count" data-action="like" data-size="large"
                                    data-share="true"></div>
                                <h5>Your likes reflect your ❤️ for us</h5>
                            </div>
                        </div>
                    </div>
                    {/* <!-- section_inner --> */}
                    <div className="section_inner clearfix">
                        <div id="payment-methods">
                            <h3>We Accept Secure Payment</h3>
                            <p>All major Debit and Credit cards, UPI, 50+ Netbanking Banks and Popular Wallets.</p>
                            <div className="clearfix">
                                {/* <!-- <div className="two_third"> --> */}
                                <div className="one_half">
                                    <h4><svg width="36" height="24" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M0 2.005C0 .8975.89 0 1.9997 0h32.0006C35.1047 0 36 .897 36 2.005v19.99C36 23.1025 35.11 24 34.0003 24H1.9997C.8953 24 0 23.103 0 21.995V2.005zm30 9.745l-1.383-3-.3887 1.4418.7185 1.5582-1.5582 1.5582L27 14.75l3-3zm-2.2184-1.5582L27.117 8.75l-1.617 6 1.4416-1.4415L28.5 11.7502l-.7184-1.5584zM9.4904 15.5c2.3638 0 3.4684-1.2923 3.4684-3.126V8h-1.922v4.319c0 .8725-.5302 1.502-1.5464 1.502-1.0272 0-1.5574-.6295-1.5574-1.502V8H6v4.385C6 14.1967 7.1267 15.5 9.4904 15.5zm6.6937-.1325v-2.4743h1.7895c1.6568 0 2.5626-1.1156 2.5626-2.441C20.536 9.1155 19.6304 8 17.9736 8h-3.6893v7.3675h1.9zm1.5023-4.131H16.184V9.6567h1.5023c.508 0 .9168.2872.9168.7953 0 .4972-.4086.7844-.9167.7844zm5.6002 4.131V8h-1.9v7.3675h1.9z"
                                                fill="#233141" fill-rule="evenodd"></path>
                                        </svg>UPI</h4>
                                    <p>UPI is a new mobile first payment mode for making payments to friends or
                                        businesses.</p>
                                </div>
                                <div className="one_half">
                                    <h4><svg width="36" height="24" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M0 2.005C0 .8975.89 0 1.9997 0h32.0006C35.1047 0 36 .897 36 2.005v19.99C36 23.1025 35.11 24 34.0003 24H1.9997C.8953 24 0 23.103 0 21.995V2.005zM0 6h36v5.25H0V6zm3 8.25h12v1.5H3v-1.5zm0 3h6.75v1.5H3v-1.5z"
                                                fill="#233141" fill-rule="evenodd"></path>
                                        </svg>Cards</h4>
                                    <p>We accept all major debit/credit card networks including Visa, Mastercard,
                                        American Express, BAJAJ, DICL, Maestro and Rupay.</p>
                                </div>
                                <div className="one_half">
                                    <h4><svg width="36" height="24" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M33.75 8.064V18.46c0 .5483-.4453.9927-.9948.9927H3.2448c-.5494 0-.9948-.4492-.9948-.9927V8.064H1.0004C.448 8.064 0 7.609 0 7.0708v-.2632c0-.5486.4244-1.1358.9488-1.3118L16.9338.1324c.524-.1758 1.3787-.176 1.8973-.0042L35.0515 5.5c.524.1735.9486.7694.9486 1.3075v.2632c0 .5486-.4552.9934-1.0004.9934H33.75zM0 21.9516c0-.5517.4552-.999 1.0004-.999h33.9992c.5525 0 1.0004.4427 1.0004.999v1.002c0 .5518-.4552.999-1.0004.999H1.0004C.448 23.9525 0 23.5098 0 22.9535v-1.002zM5.25 9.95c0-.551.4427-.9975.999-.9975h1.002c.5518 0 .999.4463.999.9976v7.005c0 .551-.4427.9975-.999.9975H6.249c-.5518 0-.999-.4463-.999-.9975V9.95zm7.5 0c0-.551.4427-.9975.999-.9975h1.002c.5518 0 .999.4463.999.9976v7.005c0 .551-.4427.9975-.999.9975h-1.002c-.5518 0-.999-.4463-.999-.9975V9.95zm7.5 0c0-.551.4427-.9975.999-.9975h1.002c.5518 0 .999.4463.999.9976v7.005c0 .551-.4427.9975-.999.9975h-1.002c-.5518 0-.999-.4463-.999-.9975V9.95zm7.5 0c0-.551.4427-.9975.999-.9975h1.002c.5518 0 .999.4463.999.9976v7.005c0 .551-.4427.9975-.999.9975h-1.002c-.5518 0-.999-.4463-.999-.9975V9.95z"
                                                fill="#233141" fill-rule="evenodd"></path>
                                        </svg>Netbanking</h4>
                                    <p>Accept payments through 50+ banks using netbanking.</p>
                                </div>
                                <div className="one_half">
                                    <h4><svg width="36" height="24" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M36 6v3.4013c-.1217-.0173-.246-.0263-.3725-.0263h-5.255C28.934 9.375 27.75 10.5503 27.75 12c0 1.4468 1.174 2.625 2.6225 2.625h5.255c.1263 0 .2507-.009.3725-.0266v7.3967C36 23.1025 35.11 24 34.0003 24H1.9997C.8953 24 0 23.103 0 21.995V2.005C0 .8975.89 0 1.9997 0h32.0006C35.1047 0 36 .897 36 2.005V3H6.7537C5.924 3 5.25 3.6716 5.25 4.5c0 .8342.6732 1.5 1.5037 1.5H36zm-5.625 7.125c.6213 0 1.125-.5037 1.125-1.125s-.5037-1.125-1.125-1.125-1.125.5037-1.125 1.125.5037 1.125 1.125 1.125z"
                                                fill="#233141" fill-rule="evenodd"></path>
                                        </svg>Wallets</h4>
                                    <div className="desc">Accept payments through your favorite wallets including Amazon
                                        Pay, PhonePe, JioMoney, Freecharge, Mobikwik, Airtel Money and PayZapp.
                                    </div>
                                </div>
                                {/* <!-- </div> --> */}
                                {/* <!-- <div className="one_third"></div> --> */}
                            </div>
                        </div>
                        {/* <!-- payment-methods --> */}
                    </div>
                    {/* <!-- section_row --> */}
                </div>
                {/* <!-- section_row --> */}
            </div>
            {/* <!-- .pagemid --> */}
        </div>
        {/* <!-- #main --> */}
        <Footer/>
    </>
  )
}

export default Pay