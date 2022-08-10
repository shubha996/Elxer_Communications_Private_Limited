import React, { useEffect, useState } from 'react'
import { useParams, NavLink } from 'react-router-dom'
import Footer from '../../../../Common/Footer/Footer';
import HeaderCareers from '../../../../Common/Header/HeaderCareers';
import axios from 'axios';

const JobDescription = () => {
    /*------------------------- API Response is stored in this useState hook------------------------   */
    const [response, setResponse] = useState([]);
    /*------------------------- API Response is stored in this useState hook------------------------   */

    
    /*------------------------- API Response------------------------   */
    useEffect(() =>{
        const getData = () => {
            axios.get('http://103.234.94.132/elxerone/api/job')
                .then(element => {
                    setResponse(element.data.data)
                    })
                .catch(err => console.log(err))
        }
        getData();
    }, [])
    /*------------------------- API Response------------------------   */


    /*------------------------- Getting Job Position ID from URL PARAMS------------------------   */
    const params = useParams();
    const { id } = params;
    /*------------------------- Getting Job Position ID from URL PARAMS------------------------   */
    


    /*-------------------------Making New Array for Data Population------------------------   */
    var jobData = [];
    const populateData = () => {
        response.forEach(item => {
            // console.log(item)
            item.designation.forEach(element => {
                // console.log(element)
                element.hiring.forEach(data => {
                    data.department = item.department_name;
                    data.designation = element.designation_name;
                    jobData.push(data);
                })
                })
            })
        }
    populateData();
    // console.log(jobData)
    /*-------------------------Making New Array for Data Population------------------------   */


    /*----------------------Filter Data According to fetched data from url params------------------   */
    const filterData = jobData.filter((value) => {
        return(value.id === id)
    })
    console.log(filterData)
    /*----------------------Filter Data According to fetched data from url params------------------   */


    /*----------Job description data function as it gets rendered before virtual dom creation --------   */
    const jd = () => {
        setTimeout(() => {
            var ptag = document.getElementById('job_description');
            ptag.innerHTML = `${filterData[0].job_description}`
        })
    }
    jd();
    /*----------Job description data function as it gets rendered before virtual dom creation --------   */


    /*---------Toggle for Displaying Job Application Form --------   */
    const displayJobApplicationForm = () => {
        var backToOpenings = document.getElementById('back-to-openings');
        var applyBTN = document.getElementById('job-application-form');
        applyBTN.style.display = 'block';
        backToOpenings.style.display = 'none';
    }
    /*---------Toggle for Displaying Job Application Form --------   */

  return (
    <>
        <HeaderCareers/>
        <div id="main">
            <div id="primary" className="pagemid">
                <div className="section_row p-t-40 p-b-40" style={{background: '#f5fafd', color: '#233141'}}>
                    <div className="section_inner clearfix">
                        <div className="three_fourth">
                        {
                            filterData.map((element) => {
                                return(
                                    <>
                                        <h3 className="font-montserrat text-bold">{element.job_title}</h3>
                                        <p className="text-bold m-b-10">Designation: {element.designation}</p>
                                        <p className="text-bold m-b-10">Location: {element.city_name}</p>
                                        <p className="text-bold m-b-10" style={{textTransform: 'capitalize'}}>Position: {element.job_type.replace('_', ' ')}</p>
                                        <p className="text-bold m-b-10">Total Openings: {element.no_of_openings}</p>
                                    </>
                                )
                            })
                        }
                            
                        </div>
                        <div className="one_fourth">
                            <div className="aligncenter">
                            <a href="#back-to-openings"
                                    className="btn btn-primary medium d-block apply-job"><span
                                        className="btn-text text-upper">Apply for this Job</span></a>
                                <div className="share-job">
                                    <h4>Share this Job Opening</h4>
                                    <ul>
                                        <li><a href="http://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Felxer.com%2Fcareers%2Fopen-positions%2FeVcyV0I5N2daV2Rsd1FvRW1LWlNQZz09&title=Great+opportunity%21+Check+out+the+Software+Developer+position&summary=Great+opportunity%21+Check+out+the+Software+Developer+position"
                                                className="linkedin" target="_blank" rel='noreferrer'><i
                                                    className="fa fa-fw fa-linkedin"></i></a></li>
                                        <li><a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Felxer.com%2Fcareers%2Fopen-positions%2FeVcyV0I5N2daV2Rsd1FvRW1LWlNQZz09"
                                                className="facebook" target="_blank" rel='noreferrer'><i
                                                    className="fa fa-fw fa-facebook"></i></a></li>
                                        <li><a href="https://twitter.com/intent/tweet?url=https%3A%2F%2Felxer.com%2Fcareers%2Fopen-positions%2FeVcyV0I5N2daV2Rsd1FvRW1LWlNQZz09&text=Great+opportunity%21+Check+out+the+Software+Developer+position&via=elxercom&hashtags=workatelxer%2Celxerjobs%2Celxercommunications"
                                                className="twitter" target="_blank" rel='noreferrer'><i
                                                    className="fa fa-fw fa-twitter"></i></a></li>
                                        <li><a
                                                href="mailto:?subject=Software Developer - Job opportunity at Elxer Communications, Raipur&body=Hi, There's a opening at Elxer Communications, Raipur for: Software Developer. I thought you'd like to check it out! For more details please use this link: https://elxer.com/careers/open-positions/eVcyV0I5N2daV2Rsd1FvRW1LWlNQZz09"><i
                                                    className="fa fa-fw fa-envelope"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section_row p-t-30 p-b-50" style={{fontSize: '1rem', color: '#233141'}}>
                    <div className="section_inner">
                        <h4 className="text-bold">Job Description</h4>
                        <p id='job_description'></p>
                        <div id="back-to-openings" className="aligncenter">
                            <span className="btn btn-primary medium m-t-20 apply-job">
                                <span className="btn-text text-upper" onClick={() => displayJobApplicationForm()}>Apply for this Job</span>
                            </span>
                            <div className="m-t-20">
                                <NavLink to="/careers/open-positions">
                                    <i className="fa fa-long-arrow-left"></i> 
                                    Back to Open Positions
                                </NavLink>
                            </div>
                        </div>
                        <div id="job-application-form" className="job-application-form">
                            <div className="aligncenter m-t-20">
                                <h2>Apply for this Job</h2>
                                <p>Please submit a detailed CV and fill out all the fields in the form.</p>
                            </div>
                            <form action="https://elxer.com/careers/apply"
                                className="job-application-form-inner submit-frm" enctype="multipart/form-data"
                                method="post" accept-charset="utf-8"><input type="hidden" name="ref_tenant_id"
                                    value="" /><input type="hidden" name="ref_candidate_id" value="" /><input
                                    type="hidden" name="ref_datetime" value="" /><input type="hidden"
                                    name="tenant_id" value="" /><input type="hidden" name="department_id"
                                    value="5" /><input type="hidden" name="designation_id" value="3" />
                                {/* <response></response> */}
                                <div className="ats-columns-wrap clearfix">
                                    <div className="ats-column__1_2 at-checkaval__inputs one_half"><input type="text"
                                            name="first_name" className="first_name" placeholder="First Name" required
                                            autoComplete="off" pattern="[A-Za-z ]+"
                                            title="No Special characters allowed!"/></div>
                                    <div className="ats-column__1_2 at-checkaval__inputs one_half"><input type="text"
                                            name="last_name" className="last_name" placeholder="Last Name" required
                                            autoComplete="off" pattern="[A-Za-z ]+"
                                            title="No Special characters allowed!"/></div>
                                </div>
                                <div className="ats-columns-wrap clearfix">
                                    <div className="ats-column__1_2 at-checkaval__inputs one_half"><input type="email"
                                            name="email" className="email" placeholder="Email" required
                                            autoComplete="off"/></div>
                                    <div className="ats-column__1_2 at-checkaval__inputs one_half"><input type="tel"
                                            name="mobile_number" className="mobile_number" placeholder="Mobile number"
                                            pattern="[6789][0-9]{9}" required autoComplete="off" maxLength="10"
                                            title="Mobile number should starts with 6-9 only!"/></div>
                                </div>
                                <div className="ats-columns-wrap clearfix">
                                    <div className="ats-column__1_2 at-checkaval__inputs one_half"><input type="file"
                                            name="resume" className="resume" placeholder="Resume/CV" required
                                            data-type="Resume/CV"/><small>Please upload a .doc, .docx or .pdf file
                                            limited to 1MB</small></div>
                                    <div className="ats-column__1_2 at-checkaval__inputs one_half"><input type="file"
                                            name="cl" className="cl" placeholder="Cover Letter"
                                            data-type="Cover Letter"/><small>Please upload a .doc, .docx or .pdf file
                                            limited to 1MB ( Optional )</small></div>
                                </div>
                                <div className="ats-column__1_2 at-checkaval__inputs"><input type="text" name="linkedin"
                                        className="linkedin" placeholder="LinkedIn Profile ( Optional )"
                                        autoComplete="off"/></div>
                                <div className="ats-column__1_2 at-checkaval__inputs"><input type="text" name="source"
                                        className="source" placeholder="How did you hear about this job?" required
                                        autoComplete="off"/></div><button type="button" onClick="validateform_new()"
                                    className="text-upper m-t-30 submit-btn">Submit Application</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- .pagemid --> */}
        </div>
        {/* <!-- #main --> */}
        <Footer/>
    </>
  )
}

export default JobDescription