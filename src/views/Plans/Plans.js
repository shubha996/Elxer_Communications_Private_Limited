import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./Plans.css";
import Header from '../Common/Header/Header';
import Footer from '../Common/Footer/Footer';

const Plans = () => {
  document.title =
    "Elxer Broadband | Best broadband plans in Raipur | Broadband Packages | Elxer Broadband";
  const [response, setResponse] = useState([]);
  const [filter, setFilter] = useState();
  const [connection, setConnection] = useState("Residential");

  const params = useParams();
  let { cityn } = params;
  // console.log(cityn);

  var [city, setCity] = useState(cityn);
  useEffect(() => {
    setCity(cityn);
  }, [cityn]);

  // ----------------- Setting initial state for month depending upon the city----------------//
  const [month, setMonth] = useState();
  useEffect(() => {
    if (city === "Raipur" || city === "Bhilai" || city === "Durg") {
      setMonth("3");
    } else {
      setMonth("1");
    }
  }, [city]);
  // ----------------- Setting initial state for month depending upon the city----------------//

  // ---------------- Storing City in local storage from state and params URL----------------------//
  if (cityn === undefined && window.localStorage.getItem("city") === null) {
    cityn = "Raipur";
    window.localStorage.setItem("city", cityn);
  } else if (
    cityn === undefined &&
    window.localStorage.getItem("city") !== null
  ) {
    cityn = window.localStorage.getItem("city");
  } else if (
    cityn !== undefined &&
    window.localStorage.getItem("city") === null
  ) {
    window.localStorage.setItem("city", cityn);
  } else if (
    cityn !== undefined &&
    window.localStorage.getItem("city") !== null
  ) {
    window.localStorage.setItem("city", cityn);
  }
  // ---------------- Storing City in local storage from state and params URL----------------------//

  // -------------------------- API CALL FOR FETCHING PLANS DATA ------------------------------------//
  useEffect(() => {
    axios
      .get("http://103.234.94.132/elxerone/api/test-plan")
      .then((data) => {
        var m1 = [1, 3, 6, 12];
        data.data.response.plans[0].mnths = m1;
        data.data.response.plans[4].mnths = m1;
        data.data.response.plans[5].mnths = m1;
        var m2 = [3, 6, 12];
        data.data.response.plans[1].mnths = m2;
        data.data.response.plans[2].mnths = m2;
        data.data.response.plans[6].mnths = m2;
        var m3 = [1];
        data.data.response.plans[3].mnths = m3;
        switch (city) {
          case "Raipur":
            setResponse(data.data.response.plans[6]);
            setFilter(
              data.data.response.plans[6].data.results.filter((e) => {
                if (connection === "Residential") {
                  return e.month === month && e.connection === "0";
                } else {
                  return e.month === month && e.connection === "1";
                }
              })
            );
            break;
          case "Korba":
            setResponse(data.data.response.plans[4]);
            setFilter(
              data.data.response.plans[4].data.results.filter((e) => {
                return e.month === month;
              })
            );
            break;
          case "Raigarh":
            setResponse(data.data.response.plans[5]);
            setFilter(
              data.data.response.plans[5].data.results.filter((e) => {
                return e.month === month;
              })
            );
            break;
          case "Kanker":
            setResponse(data.data.response.plans[3]);
            setFilter(
              data.data.response.plans[3].data.results.filter((e) => {
                return e.month === month;
              })
            );
            break;
          case "Bhatapara":
            setResponse(data.data.response.plans[0]);
            setFilter(
              data.data.response.plans[0].data.results.filter((e) => {
                return e.month === month;
              })
            );
            break;
          case "Bhilai":
            setResponse(data.data.response.plans[1]);
            setFilter(
              data.data.response.plans[1].data.results.filter((e) => {
                return e.month === month;
              })
            );
            break;
          case "Durg":
            setResponse(data.data.response.plans[2]);
            setFilter(
              data.data.response.plans[2].data.results.filter((e) => {
                return e.month === month;
              })
            );
            break;
          default:
            break;
        }
      })
      .catch((err) => console.log(err));
  }, [city, month, connection]);
  // -------------------------- API CALL FOR FETCHING PLANS DATA ------------------------------------//

  // ------------------------Style change for plans container-----------------------------------//
  useEffect(() => {
    if (connection === "Commercial") {
      document.getElementById(
        "plans-populator-container"
      ).style.justifyContent = "center";
    } else if (
      connection === "Residential" &&
      (month === "3" || month === "6" || month === "12")
    ) {
      document.getElementById(
        "plans-populator-container"
      ).style.justifyContent = "left";
    } else if (connection === "Residential" && month === "1") {
      document.getElementById(
        "plans-populator-container"
      ).style.justifyContent = "center";
    }
  }, [connection, month]);
  // ------------------------Style change for plans container-----------------------------------//
  return (
    <>
      <Header hideNotificationBar={{ display: "none" }} />
      <div id="main">
        <div id="primary" className="pagemid">
          <div id="subheader" className="sleft">
            <div className="subheader-inner">
              <div className="subdesc">
                <h1 className="page-title">
                  Broadband Plans for{" "}
                  <span className="choosenCityName">{city}</span>
                </h1>
              </div>
            </div>
          </div>
          <div className="section_row p-t-40 p-b-50">
            <div className="section_inner clearfix">
              <div className="city-section aligncenter">
                <h2>
                  All new Truly Unlimited Fiber Broadband plans for{" "}
                  <select
                    name="selectCity"
                    id="selectCity"
                    onChange={(e) => {
                      setCity(e.target.value);
                      window.localStorage.setItem("city", e.target.value);
                    }}
                    defaultValue={cityn}
                  >
                    <option value="Bhatapara">Bhatapara</option>
                    <option value="Bhilai">Bhilai</option>
                    <option value="Durg">Durg</option>
                    <option value="Kanker">Kanker</option>
                    <option value="Korba">Korba</option>
                    <option value="Raigarh">Raigarh</option>
                    <option value="Raipur">Raipur</option>
                  </select>
                </h2>
                <div id="selectCityError"></div>
                <h4>
                  With Internet speeds up to 300 Mbps - there's a speed that's
                  perfect for every budget and every digital lifestyle.
                </h4>
              </div>
              <div className="plans-filters aligncenter">
                <div className="connection-filters">
                  {response?.type?.map((item, index) => {
                    return (
                      <>
                        <div className="form-group" key={index}>
                          <input
                            type="radio"
                            id={`connection-${index}`}
                            name="connection"
                            value={`${index}`}
                            defaultChecked={index === 0}
                            onClick={() => {
                              if (index === 0) {
                                setConnection("Residential");
                              } else {
                                setConnection("Commercial");
                              }
                            }}
                          />
                          <label
                            htmlFor={`connection-${index}`}
                            style={{ textTransform: "uppercase" }}
                          >
                            {item}
                          </label>
                        </div>
                      </>
                    );
                  })}
                </div>
                <div
                  className="month-filters"
                  onChange={(e) => setMonth(e.target.value)}
                >
                  {response?.mnths?.map((item, index) => {
                    return (
                      <>
                        <div className="form-group" key={index}>
                          <input
                            
                            type="radio"
                            id={`month-${item}`}
                            name="month"
                            value={item}
                            defaultChecked={index === 0}
                          />
                          <label htmlFor={`month-${item}`}>
                            {item} {item === 1 ? "MONTH" : "MONTHS"}
                          </label>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
              <div className="plans-wrapper aligncenter">
                <div
                  className="plans"
                  id="plans-populator-container"
                  style={{ marginTop: "-14px" }}
                >
                  {filter?.map((item, index) =>
                    connection === "Residential" ? (
                      month === "1" ? (
                        <div key={index}>
                          <input
                            type="radio"
                            name="plan"
                            id={`plan-${item.id}`}
                            value={item.id}
                          />
                          <label
                            htmlFor={`plan-${item.id}`}
                            className="plan__button"
                            style={{ minHeight: "300px", maxWidth: "235px" }}
                          >
                            {item.ottcombo.length !== 0 ? (
                              <span className="plan__ribbon">OTT Plan</span>
                            ) : (
                              ""
                            )}
                            <span className="plan__feature">
                              <strong>{item.category}</strong>
                            </span>
                            <h3 className="plan__main-feature">
                              {item.speed} Mbps
                            </h3>
                            <span className="plan__price">
                              ₹ {item.original_price}
                              <small style={{ display: "inline" }}>
                                /month
                              </small>
                            </span>
                            <span className="plan__feature">
                              {item.month} Month
                            </span>
                            <span className="plan__feature">{item.data} Data</span>
                            {item.ottcombo.length !== 0 ? (
                              <span className="plan__feature">
                                {item.ottcombo["Combo 1"].length} OTT apps
                              </span>
                            ) : (
                              <span className="plan__feature">&nbsp;</span>
                            )}
                            {item.ottcombo.length !== 0 ? (
                              <span
                                className="plan__feature"
                                style={{
                                  height: "46px",
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                <img
                                  src="https://elxer.com/assets/media/ott/ic_amazon_prime.png"
                                  alt="Amazon Prime Video"
                                />
                                <img
                                  src="https://elxer.com/assets/media/ott/ic_Disney-Plus-Hotstar.webp"
                                  alt="Disney+ Hotstar"
                                  style={{ borderRadius: "6px" }}
                                />
                                <small id="ott-small">+5 more</small>
                              </span>
                            ) : (
                              <span
                                className="plan__feature"
                                style={{
                                  height: "46px",
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                &nbsp;
                              </span>
                            )}
                          </label>
                        </div>
                      ) : (
                        <div key={index}>
                          <input
                            type="radio"
                            name="plan"
                            id={`plan-${item.id}`}
                            value={item.id}
                          />
                          <label
                            htmlFor={`plan-${item.id}`}
                            className="plan__button"
                            style={{ minHeight: "300px" }}
                          >
                            {item.ottcombo.length !== 0 ? (
                              <span className="plan__ribbon">OTT Plan</span>
                            ) : (
                              ""
                            )}
                            <span className="plan__feature">
                              <strong>{item.category}</strong>
                            </span>
                            <h3 className="plan__main-feature">
                              {item.speed} Mbps
                            </h3>
                            <span className="plan__price">
                              ₹ {item.discounted_price}
                              <small style={{ display: "inline" }}>
                                /month
                              </small>
                            </span>
                            <span className="plan__feature">
                              {item.ottcombo.length !== 0 ? (
                                <span style={{ fontWeight: "bold" }}>-</span>
                              ) : (
                                <>
                                  <span
                                    style={{
                                      textDecoration: "line-through",
                                      fontWeight: "bold",
                                    }}
                                  >
                                    ₹ {item.per_month_price}
                                  </span>
                                  <small
                                    style={{
                                      color: "#fff",
                                      fontWeight: "600",
                                      background: "#f00",
                                      borderRadius: "5px",
                                      padding: "1px 5px",
                                      fontSize: "70%",
                                      verticalAlign: "middle",
                                    }}
                                  >
                                    {item.discounted_percentage}
                                  </small>
                                </>
                              )}
                            </span>
                            <span className="plan__feature">
                              {item.month} Months
                            </span>
                            <span className="plan__feature">{item.data} Data</span>
                            {item.ottcombo.length !== 0 ? (
                              <span className="plan__feature">
                                {item.ottcombo["Combo 1"].length} OTT apps
                              </span>
                            ) : (
                              <span className="plan__feature">&nbsp;</span>
                            )}
                            {item.ottcombo.length !== 0 ? (
                              item.ottcombo["Combo 1"].length === 4 ? (
                                <span
                                  className="plan__feature"
                                  style={{
                                    height: "46px",
                                    display: "flex",
                                    alignItems: "center",
                                  }}
                                >
                                  <img
                                    src="https://elxer.com/assets/media/ott/ic_sony_liv.png"
                                    alt="Sony Liv"
                                  />
                                  <img
                                    src="https://elxer.com/assets/media/ott/ic_voot.png"
                                    alt="Voot"
                                  />
                                  <small id="ott-small">+2 more</small>
                                </span>
                              ) : (
                                <span
                                  className="plan__feature"
                                  style={{
                                    height: "46px",
                                    display: "flex",
                                    alignItems: "center",
                                  }}
                                >
                                  <img
                                    src="https://elxer.com/assets/media/ott/ic_amazon_prime.png"
                                    alt="Amazon Prime Video"
                                  />
                                  <img
                                    src="https://elxer.com/assets/media/ott/ic_Disney-Plus-Hotstar.webp"
                                    alt="Disney+ Hotstar"
                                    style={{ borderRadius: "6px" }}
                                  />
                                  <small id="ott-small">+5 more</small>
                                </span>
                              )
                            ) : (
                              <span
                                className="plan__feature"
                                style={{
                                  height: "46px",
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                &nbsp;
                              </span>
                            )}
                            {item.ottcombo.length === 0 ? (
                              item.month === "3" ? (
                                <span className="plan__feature"></span>
                              ) : (
                                <span className="plan__feature">&nbsp;</span>
                              )
                            ) : (
                              <span className="plan__feature">{item.extra}</span>
                            )}
                          </label>
                        </div>
                      )
                    ) : (
                      <div key={index}>
                        <input
                          type="radio"
                          name="plan"
                          id={`plan-${item.id}`}
                          value={item.id}
                        />
                        <label
                          htmlFor={`plan-${item.id}`}
                          className="plan__button"
                          style={{ minHeight: "auto", maxWidth: "235px" }}
                        >
                          <span className="plan__feature">
                            <strong>{item.category}</strong>
                          </span>
                          <h3 className="plan__main-feature">
                            {item.speed} Mbps
                          </h3>
                          <span className="plan__price">
                            ₹ {item.discounted_price}
                            <small style={{ display: "inline" }}>/month</small>
                          </span>
                          <span className="plan__feature">
                            <span
                              style={{
                                textDecoration: "line-through",
                                fontWeight: "bold",
                              }}
                            >
                              ₹ {item.per_month_price}
                            </span>
                            <small
                              style={{
                                color: "#fff",
                                fontWeight: "600",
                                background: "#f00",
                                borderRadius: "5px",
                                padding: "1px 5px",
                                fontSize: "70%",
                                verticalAlign: "middle",
                              }}
                            >
                              {item.discounted_percentage}
                            </small>
                          </span>
                          <span className="plan__feature">
                            {item.month} Months
                          </span>
                          <span className="plan__feature">
                            {item.data} Data
                          </span>
                        </label>
                      </div>
                    )
                  )}
                </div>
              </div>
              <div className="ott-terms">
                <br />
                <div className="clearfix aligncenter">
                  <h5>
                    Get <strong>Free INTERNET</strong> on{" "}
                    <strong>ENTERTAINMENT</strong> /
                    <strong>ENTERTAINMENT+</strong> plans for 15 days on
                    half-yearly recharge and 30 days on Annual recharge!
                  </h5>
                  <div className="one_half">
                    <h5>
                      OTT apps on
                      <br />
                      <strong>ENTERTAINMENT</strong>
                    </h5>
                    <ul>
                      <li>
                        <img
                          src="https://elxer.com/assets/media/ott/playbox-tv.png"
                          alt="PlayBox TV"
                          width="48px"
                        />
                      </li>
                      <li>
                        <img
                          src="https://elxer.com/assets/media/ott/ic_voot.png"
                          alt="Voot"
                          width="48px"
                        />
                      </li>
                      <li>
                        <img
                          src="https://elxer.com/assets/media/ott/shemaroo.svg"
                          alt="ShemarooMe"
                          width="100px"
                        />
                      </li>
                      <li>
                        <img
                          src="https://elxer.com/assets/media/ott/epic-on.png"
                          alt="Epicon"
                          width="100px"
                        />
                      </li>
                    </ul>
                    or
                    <br />
                    <ul>
                      <li>
                        <img
                          src="https://elxer.com/assets/media/ott/playbox-tv.png"
                          alt="PlayBox TV"
                          width="48px"
                        />
                      </li>
                      <li>
                        <img
                          src="https://elxer.com/assets/media/ott/ic_sony_liv.png"
                          alt="Sony Liv"
                          width="48px"
                        />
                      </li>
                      <li>
                        <img
                          src="https://elxer.com/assets/media/ott/shemaroo.svg"
                          alt="ShemarooMe"
                          width="100px"
                        />
                      </li>
                      <li>
                        <img
                          src="https://elxer.com/assets/media/ott/epic-on.png"
                          alt="Epicon"
                          width="100px"
                        />
                      </li>
                    </ul>
                    or
                    <br />
                    <ul>
                      <li>
                        <img
                          src="https://elxer.com/assets/media/ott/playbox-tv.png"
                          alt="PlayBox TV"
                          width="48px"
                        />
                      </li>
                      <li>
                        <img
                          src="https://elxer.com/assets/media/ott/ic_zee5.png"
                          alt="Zee5"
                          width="48px"
                        />
                      </li>
                      <li>
                        <img
                          src="https://elxer.com/assets/media/ott/shemaroo.svg"
                          alt="ShemarooMe"
                          width="100px"
                        />
                      </li>
                      <li>
                        <img
                          src="https://elxer.com/assets/media/ott/epic-on.png"
                          alt="Epicon"
                          width="100px"
                        />
                      </li>
                    </ul>
                  </div>
                  <div className="one_half">
                    <h5>
                      OTT apps on
                      <br />
                      <strong>ENTERTAINMENT+</strong>
                    </h5>
                    <ul>
                      <li>
                        <img
                          src="https://elxer.com/assets/media/ott/playbox-tv.png"
                          alt="PlayBox TV"
                          width="48px"
                        />
                      </li>
                      <li>
                        <img
                          src="https://elxer.com/assets/media/ott/ic_amazon_prime.png"
                          alt="Amazon Prime Video"
                          width="48px"
                        />
                      </li>
                      <li>
                        <img
                          src="https://elxer.com/assets/media/ott/ic_sony_liv.png"
                          alt="Sony Liv"
                          width="48px"
                        />
                      </li>
                      <li>
                        <img
                          src="https://elxer.com/assets/media/ott/ic_zee5.png"
                          alt="Zee5"
                          width="48px"
                        />
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <img
                          src="https://elxer.com/assets/media/ott/ic_voot.png"
                          alt="Voot"
                          width="48px"
                        />
                      </li>
                      <li>
                        <img
                          src="https://elxer.com/assets/media/ott/shemaroo.svg"
                          alt="ShemarooMe"
                          width="100px"
                        />
                      </li>
                      <li>
                        <img
                          src="https://elxer.com/assets/media/ott/epic-on.png"
                          alt="Epicon"
                          width="100px"
                        />
                      </li>
                    </ul>
                    or
                    <br />
                    <ul>
                      <li>
                        <img
                          src="https://elxer.com/assets/media/ott/playbox-tv.png"
                          alt="PlayBox TV"
                          width="48px"
                        />
                      </li>
                      <li>
                        <img
                          src="https://elxer.com/assets/media/ott/ic_Disney-Plus-Hotstar.webp"
                          alt="Disney+ Hotstar"
                          width="100px"
                          style={{ borderRadius: "6px" }}
                        />
                      </li>
                      <li>
                        <img
                          src="https://elxer.com/assets/media/ott/ic_sony_liv.png"
                          alt="Sony Liv"
                          width="48px"
                        />
                      </li>
                      <li>
                        <img
                          src="https://elxer.com/assets/media/ott/ic_zee5.png"
                          alt="Zee5"
                          width="48px"
                        />
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <img
                          src="https://elxer.com/assets/media/ott/ic_voot.png"
                          alt="Voot"
                          width="48px"
                        />
                      </li>
                      <li>
                        <img
                          src="https://elxer.com/assets/media/ott/shemaroo.svg"
                          alt="ShemarooMe"
                          width="100px"
                        />
                      </li>
                      <li>
                        <img
                          src="https://elxer.com/assets/media/ott/epic-on.png"
                          alt="Epicon"
                          width="100px"
                        />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="section_inner clearfix">
              <div className="bb-description m-t-50 aligncenter">
                <div className="bb-description-content">
                  <h3>
                    Broadband Connection in{" "}
                    <span
                      className="choosenCityName"
                      style={{ textTransform: "capitalize" }}
                    >
                      {city}
                    </span>
                  </h3>
                  <p>
                    Get the best of internet plans in{" "}
                    <span
                      className="choosenCityName"
                      style={{ textTransform: "capitalize" }}
                    >
                      {city}{" "}
                    </span>
                    and experience ultra-fast speeds with fiber optic
                    technology.
                  </p>
                  <p>
                    With our Unlimited broadband plans & data, you can enjoy
                    unlimited movies, music and much more. Advance broadband
                    technology allows you to enjoy high-speed internet at up to
                    300 Mbps which gives you faster downloads and no-buffering
                    experience.
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- section_inner --> */}
          </div>
          {/* <!-- section_row --> */}
          <div className="section_row p-t-20 p-b-20">
            <div className="section_inner clearfix">
              <div className="tnc-section">
                <h4>Terms & Conditions</h4>
                <ul>
                  <li>
                    *Prices mentioned are after discount & exclusive of 18%
                    taxes
                  </li>
                  <li>
                    10%, 15%, 20% Discount applicable as Quarterly, Half yearly
                    and Annual plans respectively
                  </li>
                  <li>
                    Installation will be done within 3-7 days from the date of
                    realisation of payment
                  </li>
                  <li>Month refers to a period of 30 days</li>
                  <li>
                    200 Mbps & above plans are available in selected cities and
                    are subjected to technical feasibility
                  </li>
                </ul>
              </div>
            </div>
            {/* <!-- section_inner --> */}
          </div>
          {/* <!-- section_row --> */}
        </div>
        {/* <!-- .pagemid --> */}
      </div>
      {/* <!-- #main --> */}
      <Footer />
    </>
  );
};
export default Plans;