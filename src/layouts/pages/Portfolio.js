import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import {Link} from 'react-router-dom';
import BannerForm from './component/BannerForm';

export default function Portfolio() {
    const [activeTab, setActiveTab] = useState('tab1');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };
  return (
    <div>
        <Helmet>
            <title>Best Web Designing & SEO Company in Mumbai India</title>
            <meta name="keywords" content="portfolio"/>
            <meta name="description" content="portfolio"/>
        </Helmet>
        <div className="innerWebDesign">
            <div className="container-fluid">
                 <div className="row">
			        <div className="col-lg-7 ps-lg-5">
    					<div className="innerBannerTitle venter">
    						<h3 className="heading fontWeight700 text-white">Portfolio</h3>
    						<div className="mt-4">
    							<Link to="#requestQuote" className="btnThemeRed me-3"><i class="fa-solid fa-comment-dots"></i> Get a Quote</Link>
    							<Link to="#" className="btnThemewhiteBorder"><i className="fa-solid fa-circle-question"></i> Ask a Question</Link>
    						</div>
    					</div>
        			</div>
                    <div className="col-lg-5 d-none d-lg-block pe-lg-5">
                        <div className="bannerForm">
                            <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
                            <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">Influencer Marketing</span> Company in India</strong></p>
                            <BannerForm/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-5 d-block d-lg-none pe-lg-5">
            <div className="bannerForm">
                <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
                <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">Influencer Marketing</span> Company in India</strong></p>
                <BannerForm/>
            </div>
        </div>
        <section>
            <div className="containerFull">
                <div className="tabPortfolio">
                    <ul className="d-flex align-items-center justify-content-center">
                        <li 
                            className={activeTab === 'tab1' ? 'active' : ''} 
                            onClick={() => handleTabClick('tab1')}>
                            Static Websites
                        </li>
                        <li
                            className={activeTab === 'tab2' ? 'active' : ''}
                            onClick={() => handleTabClick('tab2')}>
                            Dynamic Websites
                        </li>
                        <li
                            className={activeTab === 'tab3' ? 'active' : ''}
                            onClick={() => handleTabClick('tab3')}>
                            Wordpress
                        </li>
                        <li
                            className={activeTab === 'tab4' ? 'active' : ''}
                            onClick={() => handleTabClick('tab4')}>
                            Portals
                        </li>
                    </ul>
                </div>
                <div className="portfolioBlock">
                    {activeTab === 'tab1' && <div id="tab1">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="itemImgP shadow">
                                    <Link to="https://www.3solutions.co.in" target="_blank">
                                        <img src="assets/images/portfolio/3solutions.jpg" alt="3 Solution"/>
                                        <div className="overlayText">
                                            <h4 className="sub_heading">3 Solutions</h4>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="itemImgP shadow">
                                    <Link to="http://axisy.in" target="_blank">
                                        <img src="assets/images/portfolio/axisy.jpg" alt="AxisY"/>
                                        <div className="overlayText">
                                            <h4 className="sub_heading">AxisY</h4>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="itemImgP shadow">
                                    <Link to="http://mindspring.co.in" target="_blank">
                                        <img src="assets/images/portfolio/mindspring.jpg" alt="Mindspring"/>
                                        <div className="overlayText">
                                            <h4 className="sub_heading">Mindspring</h4>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="itemImgP shadow">
                                    <Link to="http://mrmunim.com" target="_blank">
                                        <img src="assets/images/portfolio/mrmunim.jpg" alt="Mr. Munim"/>
                                        <div className="overlayText">
                                            <h4 className="sub_heading">Mr. Munim</h4>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="itemImgP shadow">
                                    <Link to="http://navyugchemicals.com" target="_blank">
                                        <img src="assets/images/portfolio/navyugchemicals.jpg" alt="Navyoug Chemicals"/>
                                        <div className="overlayText">
                                            <h4 className="sub_heading">Navyug Chemicals</h4>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="itemImgP shadow">
                                    <Link to="http://www.herniaindia.com" target="_blank">
                                        <img src="assets/images/portfolio/herniaindia.jpg" alt="Hernia India"/>
                                        <div className="overlayText">
                                            <h4 className="sub_heading">Hernia India</h4>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>}
                    {activeTab === 'tab2' && <div id="tab2">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="itemImgP shadow">
                                    <Link to="https://bardahl.com/" target="_blank">
                                        <img src="assets/images/portfolio/bardahl.jpg" alt="Bardahl"/>
                                        <div className="overlayText">
                                            <h4 className="sub_heading">Bardahl</h4>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="itemImgP shadow">
                                    <Link to="http://emilpharma.in" target="_blank">
                                        <img src="assets/images/portfolio/emilpharma.jpg" alt="Emil Pharma"/>
                                        <div className="overlayText">
                                            <h4 className="sub_heading">Emil Pharma</h4>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="itemImgP shadow">
                                    <Link to="https://narainindia.com/" target="_blank">
                                        <img src="assets/images/portfolio/narainindia.jpg" alt="Narain India"/>
                                        <div className="overlayText">
                                            <h4 className="sub_heading">Narain India</h4>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="itemImgP shadow">
                                    <Link to="http://nsaarchitects.in" target="_blank">
                                        <img src="assets/images/portfolio/nsaarchitects.jpg" alt="Nsaarchitects"/>
                                        <div className="overlayText">
                                            <h4 className="sub_heading">NSA Architects</h4>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="itemImgP shadow">
                                    <Link to="http://brillianttutorsacademy.com" target="_blank">
                                        <img src="assets/images/portfolio/brillianttutorsacademy.jpg" alt="Brillianttutorsacademy"/>
                                        <div className="overlayText">
                                            <h4 className="sub_heading">Brilliant Tutors Academy</h4>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="itemImgP shadow">
                                    <Link to="http://www.repaircity.in" target="_blank">
                                        <img src="assets/images/portfolio/repaircity.jpg" alt="Repair City"/>
                                        <div className="overlayText">
                                            <h4 className="sub_heading">Repair City</h4>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>}
                    {activeTab === 'tab3' && <div id="tab3">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="itemImgP shadow">
                                    <Link to="https://designmyoffice.in/" target="_blank">
                                        <img src="assets/images/portfolio/designmyoffice.jpg" alt="Design My Office"/>
                                        <div className="overlayText">
                                            <h4 className="sub_heading">Design My Office</h4>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="itemImgP shadow">
                                    <Link to="http://in-pl.com" target="_blank">
                                        <img src="assets/images/portfolio/in-pl.jpg" alt="Infinite Possibilities"/>
                                        <div className="overlayText">
                                            <h4 className="sub_heading">Infinite Possibilities</h4>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="itemImgP shadow">
                                    <Link to="https://naturalandessential.co.in/" target="_blank">
                                        <img src="assets/images/portfolio/naturalandessential.jpg" alt="Natural &amp; Essential"/>
                                        <div className="overlayText">
                                            <h4 className="sub_heading">Natural &amp; Essential</h4>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="itemImgP shadow">
                                    <Link to="http://pravaasah.com" target="_blank">
                                        <img src="assets/images/portfolio/pravaasah.jpg" alt="Pravaasah"/>
                                        <div className="overlayText">
                                            <h4 className="sub_heading">Pravaasah</h4>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="itemImgP shadow">
                                    <Link to="http://reimagineparenthood.com" target="_blank">
                                        <img src="assets/images/portfolio/reimagineparenthood.jpg" alt="Reimagine Parenthood"/>
                                        <div className="overlayText">
                                            <h4 className="sub_heading">Reimagine Parenthood</h4>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>}
                    {activeTab === 'tab4' && <div id="tab4">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="itemImgP shadow">
                                    <Link to="https://www.smartexamresources.com" target="_blank">
                                        <img src="assets/images/portfolio/smartexamresources.jpg" alt="Smart Exam Resources"/>
                                        <div className="overlayText">
                                            <h4 className="sub_heading">Smart Exam Resources</h4>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="itemImgP shadow">
                                    <Link to="http://thegreatmentor.com" target="_blank">
                                        <img src="assets/images/portfolio/thegreatmentor.jpg" alt="The Great Mentor"/>
                                        <div className="overlayText">
                                            <h4 className="sub_heading">The Great Mentor</h4>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="itemImgP shadow">
                                    <Link to="https://vivahsaptapadi.com/" target="_blank">
                                        <img src="assets/images/portfolio/vivahsaptapadi.jpg" alt="Vivah Saptapadi"/>
                                        <div className="overlayText">
                                            <h4 className="sub_heading">Vivah Saptapadi</h4>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="itemImgP shadow">
                                    <Link to="http://worlddigitalcard.com" target="_blank">
                                        <img src="assets/images/portfolio/worlddigitalcard.jpg" alt="World Digital Card"/>
                                        <div className="overlayText">
                                            <h4 className="sub_heading">World Digital Card</h4>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="itemImgP shadow">
                                    <Link to="http://tripplannersworld.travel" target="_blank">
                                        <img src="assets/images/portfolio/tripplannersworld.jpg" alt="Tripplanners World"/>
                                        <div className="overlayText">
                                            <h4 className="sub_heading">Tripplanners World</h4>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>}
                </div>
            </div>
        </section>
    </div>
  )
}
