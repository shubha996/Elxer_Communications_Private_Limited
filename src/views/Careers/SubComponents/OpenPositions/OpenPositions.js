import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Header from '../../../Common/Header/HeaderCareers';
import Footer from '../../../Common/Footer/Footer';

const OpenPositions = () => {
    document.title = 'Current Openings | Elxer Broadband';
    /*------------------------- API Response is stored in this useState hook------------------------  */
    const [response, setResponse] = useState([]);
    // console.log(response)
    /*------------------------- API Response is stored in this useState hook------------------------  */

    /*------------------------- State for Filtering department wise Opening ------------------------  */
    const [department, setDepartment] = useState('All');
    /*------------------------- State for Filtering department wise Opening ------------------------  */


    /*------------------------- API Response------------------------   */
    useEffect(() => {
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


    /*-------------------------Making New Array for department wise Data Population------------------------   */
    var jobData = [];
    const populateData = () => {
        if(department === 'Information Technology'){
            var it = response.filter(v => {
                return (v.department_name === 'Information Technology');
            })
            it.forEach(v => {
                v.designation.forEach(s => {
                    s.hiring.forEach(p => {
                        p.department = v.department_name;
                        jobData.push(p);
                    })
                })
            })
        }
        else if (department === 'NOC'){
            var noc = response.filter(v => {
                return (v.department_name === 'NOC');
            })
            noc.forEach(v => {
                v.designation.forEach(s => {
                    s.hiring.forEach(p => {
                        p.department = v.department_name;
                        jobData.push(p);
                    })
                })
            })
        } 
        else if (department === 'Marketing'){
            var marketing = response.filter(v => {
                return (v.department_name === 'Marketing');
            })
            marketing.forEach(v => {
                v.designation.forEach(s => {
                    s.hiring.forEach(p => {
                        p.department = v.department_name;
                        jobData.push(p);
                    })
                })
            })
        } 
        else if (department === 'Sales'){
            var sales = response.filter(v => {
                return (v.department_name === 'Sales');
            })
            sales.forEach(v => {
                v.designation.forEach(s => {
                    s.hiring.forEach(p => {
                        p.department = v.department_name;
                        jobData.push(p);
                    })
                })
            })
        }
        else if (department === 'All'){
            response.forEach(v => {
                v.designation.forEach(s => {
                    s.hiring.forEach(p => {
                        p.department = v.department_name;
                        jobData.push(p);
                    })
                })
            })
        }
    }
    populateData();
    /*-------------------------Making New Array for department wise Data Population------------------------   */

    
  return (
    <>
        <Header/>
        <div id="main">
            <div id="primary" className="pagemid">
                <div className="section_row p-t-50 p-b-60 career-hero-open-positions">
                    <div className="section_inner d-flex clearfix">
                        <div className="one_half p-40">
                            <h2>Open Positions</h2>
                            <h4>Come & join our fast growing team.</h4>
                        </div>
                        <div className="one_half last"><img
                                src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
                                alt="Careers as Elxer" /></div>
                    </div>
                </div>
                {/* <!-- career-hero --> */}
                <div className="section_row p-b-40">
                    <div className="section_inner aligncenter"
                        style={{color: '#222', fontSize: '1.2rem', lineHeight: '1.5', maxWidth: '800px'}}>
                        <p className="m-b-40">We have always believed in building things from scratch, and that needs
                            innovation and critical thinking by each and every individual associated with us. And
                            for such ideas to foster, we provide you an environment which is flexible, dynamic, and
                            challenging but at the same time let's you be yourself.</p>
                        <p className="m-b-10">Whether it's working from our offices or having the flexibility to work
                            from home a few days a week, we're providing more choices to employees for where they
                            can do their best work.</p>
                        <p className="m-b-10">Sounds interesting? Do check out our open positions below to know more.
                        </p>
                    </div>
                </div>
                <div className="section_row p-b-40">
                    <div className="section_inner">
                        <h2 className="aligncenter m-b-40" >Who are we looking for?</h2>
                        {/* <!-- .filters --> */}
                        <div className="filters" id='#who'> 
                            <ul>
                                <li>
                                    <a className={department === 'All' ? (`filter active`) : (`filter`)} onClick={() => setDepartment('All')}>All</a>
                                </li>
                                {
                                    response.map(data => {
                                        return(
                                            <li key={data.department_id}>
                                                <a className={department === `${data.department_name}` ? ('filter active') : ('filter')} onClick={() => setDepartment(`${data.department_name}`)}>{data.department_name}</a>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        {/* <!-- END .filters --> */}
                        {/* <!-- .jobs --> */}
                        <div className="jobs m-b-30 clearfix">
                        {
                            jobData.map(element => {
                            return(
                                <a key={element.id}
                                href={`/careers/open-positions/job-description/${element.id}`} className="one_half mix 5">
                                    <div className="job clearfix" id="job-eVcyV0I5N2daV2Rsd1FvRW1LWlNQZz09">
                                        <h5 className="title">{element.job_title}</h5>
                                        <div className="location"><i className="fa fa-fw fa-map-marker"></i>{element.city_name}</div>
                                        <div className="department">{element.department }</div>
                                    </div>
                                </a>
                            )
                            })
                        }
                        </div> 
                        {/* <!-- END .jobs --> */}
                        <div className="clearfix"></div>
                        <div className="aligncenter m-t-50 m-b-0"
                            style={{color: '#222', fontSize: '1.2rem', lineHeight: '1.5', maxWidth: '580px'}}>
                            <h3 className="text-bold" style={{fontFamily:"Montserrat,Helvetica,Arial,sans-serif"}}>Can't
                                find your perfect role?</h3>
                            <p>Drop your resume, we want to hear from you! Send us an email to <a
                                    href="mailto:hr&#64;elx&#101;&#114;.&#99;om?subject=Job%20at%20Elxer">h&#114;&#64;elxer.c&#111;&#109;</a>
                                and let us know about your work experience.</p>
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

export default OpenPositions