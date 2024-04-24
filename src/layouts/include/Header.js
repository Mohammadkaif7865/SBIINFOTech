import React from 'react';
import {Link} from 'react-router-dom';
import { useEffect } from "react";
import { useLocation } from "react-router-dom"


export default function Header() {
    const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div>
        <header className="header stricky">
            <div className="topHeader d-none d-md-block">
                <div className="containerFull">
                    <div className="inlineHeader">
                        <div className="topHeaderLeft">
                            <ul>
                                <li><Link to="tel:+91-9222260000"><i className="fa fa-phone"></i> +91-9222260000</Link></li>
                                <li><Link to="mailto:contact@sibinfotech.com"><i className="fa fa-envelope"></i> contact@sibinfotech.com</Link></li>
                                <li><Link to="#"><i className="fa fa-map-marker-alt"></i> Mumbai, New Delhi</Link></li>
                            </ul>
                        </div>
                        <div className="topHeaderRight">
                            <ul>
                                <li><Link to="/career">We're Hiring Now</Link></li>
                                <li><Link to="/contact-us">Request a Quote</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mainHeader">
                <div className="container-fluid">
                    <div className="inlineHeader">
                        <div className="leftLogo">
                            <Link to="/">
                                <picture>
                                    <source media="(max-width:650px)" srcSet="https://www.sibinfotech.com//assets/images/m-logo.webp"></source>
                                    <img src="https://www.sibinfotech.com/assets/images/logo.webp" alt="Best Digital Marketing Company in India"/>
                                </picture>
                            </Link>
                        </div>
                        <div className="rightMenu d-md-block d-none">
                            <ul>
                                <li><Link to="/digital-marketing-services">Digital Marketing</Link></li>
                                <li><Link to="/pay-per-click-ppc-management-services">PPC</Link>
                                    <div class="megaMenus shadow">
                                        <div class="row">
                                            <div class="col-lg-4 px-lg-2">
                                                <Link to="/google-ads-management-services">
                                                    <div class="itemMega bgRedMenu">
                                                        <div class="leftCont">
                                                            <h4 class="title fontWeight700">Google Ads Management</h4>
                                                            <p>SIB Infotech is a Certified partner for Google AdWords management company offering all kinds...</p>
                                                        </div>
                                                        <div class="iconRight">
                                                            <i class="bi bi-arrow-right"></i>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div class="col-lg-4 px-lg-2">
                                                <Link to="/linkedin-ads-management-services">
                                                    <div class="itemMega bgBlueMenu">
                                                        <div class="leftCont">
                                                            <h4 class="title fontWeight700">LinkedIn Ads Management</h4>
                                                            <p>We are a professional Linkedin ad management and advertising...</p>
                                                        </div>
                                                        <div class="iconRight">
                                                            <i class="bi bi-arrow-right"></i>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div class="col-lg-4 px-lg-2">
                                                <Link to="/facebook-ads-management-services">
                                                    <div class="itemMega bgRedMenu">
                                                        <div class="leftCont">
                                                            <h4 class="title fontWeight700">Facebook Ads Marketing</h4>
                                                            <p>Our Facebook Specialists manage Facebook PPC Campaigns making your facebook ads reach millions...</p>
                                                        </div>
                                                        <div class="iconRight">
                                                            <i class="bi bi-arrow-right"></i>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div class="col-lg-4 px-lg-2 mt-3">
                                                <Link to="/instagram-ads-management-services">
                                                    <div class="itemMega bgBlueMenu">
                                                        <div class="leftCont">
                                                            <h4 class="title fontWeight700">Instagram Ads Management</h4>
                                                            <p>Best Instagram ad management company in Mumbai, India.  Grow your Instagram account with...</p>
                                                        </div>
                                                        <div class="iconRight">
                                                            <i class="bi bi-arrow-right"></i>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li><Link to="/search-engine-optimization-seo-services">SEO</Link>
                                    <div class="megaMenus shadow">
                                        <div class="row">
                                            <div class="col-lg-4 px-lg-2">
                                                <Link to="/on-page-seo-services">
                                                    <div class="itemMega bgRedMenu">
                                                        <div class="leftCont">
                                                            <h4 class="title fontWeight700">ON-Page SEO Services</h4>
                                                            <p>SIB Infotech is the Top SEO Company in India offers On-Page SEO & On-Site Optimization...</p>
                                                        </div>
                                                        <div class="iconRight">
                                                            <i class="bi bi-arrow-right"></i>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div class="col-lg-4 px-lg-2">
                                                <Link to="/off-page-seo-services">
                                                    <div class="itemMega bgBlueMenu">
                                                        <div class="leftCont">
                                                            <h4 class="title fontWeight700">OFF-Page SEO Services</h4>
                                                            <p>SIB Infotech is the Top SEO Company in India offers Off-Page SEO Optimization Services....</p>
                                                        </div>
                                                        <div class="iconRight">
                                                            <i class="bi bi-arrow-right"></i>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div class="col-lg-4 px-lg-2">
                                                <Link to="/e-commerce-seo-services">
                                                    <div class="itemMega bgRedMenu">
                                                        <div class="leftCont">
                                                            <h4 class="title fontWeight700">E-Commerce SEO</h4>
                                                            <p>SIB Infotech is a leading designing and development company in Mumbai, India offers...</p>
                                                        </div>
                                                        <div class="iconRight">
                                                            <i class="bi bi-arrow-right"></i>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div class="col-lg-4 px-lg-2 mt-3">
                                                <Link to="/mobile-seo-services">
                                                    <div class="itemMega bgBlueMenu">
                                                        <div class="leftCont">
                                                            <h4 class="title fontWeight700">Mobile SEO</h4>
                                                            <p>Top Rated Best Mobile SEO company in India  our focus is in offering customized...</p>
                                                        </div>
                                                        <div class="iconRight">
                                                            <i class="bi bi-arrow-right"></i>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div class="col-lg-4 px-lg-2 mt-3">
                                                <Link to="/search-engine-optimization-outsourcing-seo-services">
                                                    <div class="itemMega bgRedMenu">
                                                        <div class="leftCont">
                                                            <h4 class="title fontWeight700">SEO Outsourcing</h4>
                                                            <p>Outsource SEO service to India with SIB Infotech a 100% White Label SEO outsourcing company...</p>
                                                        </div>
                                                        <div class="iconRight">
                                                            <i class="bi bi-arrow-right"></i>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div class="col-lg-4 px-lg-2 mt-3">
                                                <Link to="/local-seo-services">
                                                    <div class="itemMega bgBlueMenu">
                                                        <div class="leftCont">
                                                            <h4 class="title fontWeight700">Local SEO</h4>
                                                            <p>SIB Infotech is rated as Top Local SEO Company In India, we offer local SEO services...</p>
                                                        </div>
                                                        <div class="iconRight">
                                                            <i class="bi bi-arrow-right"></i>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li><Link to="/social-media-optimization-services">SMO</Link>
                                    <div class="megaMenus shadow">
                                        <div class="row">
                                            <div class="col-lg-4 px-lg-2">
                                                <Link to="/social-media-optimization-services">
                                                    <div class="itemMega bgRedMenu">
                                                        <div class="leftCont">
                                                            <h4 class="title fontWeight700">Social Media Optimization</h4>
                                                            <p>SIB Infotech is a social media marketing services company that provides highly customized social...</p>
                                                        </div>
                                                        <div class="iconRight">
                                                            <i class="bi bi-arrow-right"></i>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div class="col-lg-4 px-lg-2">
                                                <Link to="/content-marketing-services">
                                                    <div class="itemMega bgBlueMenu">
                                                        <div class="leftCont">
                                                            <h4 class="title fontWeight700">Content Marketing</h4>
                                                            <p>Rated best content marketing agency in India telling brand stories better via its quality content...</p>
                                                        </div>
                                                        <div class="iconRight">
                                                            <i class="bi bi-arrow-right"></i>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div class="col-lg-4 px-lg-2">
                                                <Link to="/digital-marketing-services">
                                                    <div class="itemMega bgRedMenu">
                                                        <div class="leftCont">
                                                            <h4 class="title fontWeight700">Digital Marketing</h4>
                                                            <p>SIB infotech is the top leading Digital Marketing agency and Company in Mumbai, India. We are offering...</p>
                                                        </div>
                                                        <div class="iconRight">
                                                            <i class="bi bi-arrow-right"></i>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div class="col-lg-4 px-lg-2 mt-3">
                                                <Link to="/online-reputation-management-services">
                                                    <div class="itemMega bgBlueMenu">
                                                        <div class="leftCont">
                                                            <h4 class="title fontWeight700">Online Reputation Management Services</h4>
                                                            <p>Rated best online reputation management services company...</p>
                                                        </div>
                                                        <div class="iconRight">
                                                            <i class="bi bi-arrow-right"></i>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div class="col-lg-4 px-lg-2 mt-3">
                                                <Link to="/blog-management-services">
                                                    <div class="itemMega bgRedMenu">
                                                        <div class="leftCont">
                                                            <h4 class="title fontWeight700">Blog Management Service</h4>
                                                            <p>We offer  360<sup>.</sup> Blog Management Service that would bring traffic to your blog & increase your brand...</p>
                                                        </div>
                                                        <div class="iconRight">
                                                            <i class="bi bi-arrow-right"></i>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div class="col-lg-4 px-lg-2 mt-3">
                                                <Link to="/influencer-marketing-services">
                                                    <div class="itemMega bgBlueMenu">
                                                        <div class="leftCont">
                                                            <h4 class="title fontWeight700">Influencer Marketing</h4>
                                                            <p>SIB Infotech is leading influencer marketing agency in India , representing top social...</p>
                                                        </div>
                                                        <div class="iconRight">
                                                            <i class="bi bi-arrow-right"></i>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li><Link to="/graphic-designing-services">Graphic Design</Link></li>
                                <li><Link to="/website-designing-services">Website Designing</Link>
                                    <div className="megaMenus shadow">
                                        <div className="row">
                                            <div className="col-lg-4 px-lg-2">
                                                <Link to="/corporate-website-designing-services">
                                                    <div className="itemMega bgRedMenu">
                                                        <div className="leftCont">
                                                            <h4 className="title fontWeight700">Corporate Website Designing</h4>
                                                            <p>SIB Infotech's website design service can provide you can an edge over the contest with...</p>
                                                        </div>
                                                        <div className="iconRight">
                                                            <i className="bi bi-arrow-right"></i>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="col-lg-4 px-lg-2">
                                                <Link to="/responsive-website-designing-services">
                                                    <div className="itemMega bgBlueMenu">
                                                        <div className="leftCont">
                                                            <h4 className="title fontWeight700">Responsive Website Designing</h4>
                                                            <p>A responsive website design means massive increase in the number of visitors...</p>
                                                        </div>
                                                        <div className="iconRight">
                                                            <i className="bi bi-arrow-right"></i>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="col-lg-4 px-lg-2">
                                                <Link to="/e-commerce-website-design-development-services">
                                                    <div className="itemMega bgRedMenu">
                                                        <div className="leftCont">
                                                            <h4 className="title fontWeight700">E-commerce Website Designing</h4>
                                                            <p>With the help E-Commerce website you get an opportunity to have products and services available...</p>
                                                        </div>
                                                        <div className="iconRight">
                                                            <i className="bi bi-arrow-right"></i>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="col-lg-4 px-lg-2 mt-3">
                                                <Link to="/cms-website-design-development-services">
                                                    <div className="itemMega bgBlueMenu">
                                                        <div className="leftCont">
                                                            <h4 className="title fontWeight700">Content Management Systems</h4>
                                                            <p>Nowadays, Content Management Systems such as WordPress, Joomla, Drupal etc, are usually used...</p>
                                                        </div>
                                                        <div className="iconRight">
                                                            <i className="bi bi-arrow-right"></i>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="col-lg-4 px-lg-2 mt-3">
                                                <Link to="/wordpress-website-design-development-services">
                                                    <div className="itemMega bgRedMenu">
                                                        <div className="leftCont">
                                                            <h4 className="title fontWeight700">WordPress Website Design &amp; Development</h4>
                                                            <p>WordPress is an open source online website creation tool written in PHP and is the most...</p>
                                                        </div>
                                                        <div className="iconRight">
                                                            <i className="bi bi-arrow-right"></i>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="col-lg-4 px-lg-2 mt-3">
                                                <Link to="/custom-website-designing-services">
                                                    <div className="itemMega bgBlueMenu">
                                                        <div className="leftCont">
                                                            <h4 className="title fontWeight700">Custom Website Designing</h4>
                                                            <p>Using this one can start from just one simple page with an Email link, building up to a more complex...</p>
                                                        </div>
                                                        <div className="iconRight">
                                                            <i className="bi bi-arrow-right"></i>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li><Link to="/website-development-services">Web Development</Link></li>
                                <li><Link to="/software-development-services">Software Development</Link></li>
                            </ul>
                        </div>
                        <button className="extraMenu" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i className="fa fa-bars"></i></button>
                    </div>
                </div>
            </div>
        </header>
        <div className="offcanvas headerOffcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
            <div className="offcanvas-header">
                <h5 id="offcanvasRightLabel">&nbsp;</h5>
                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                <div className="extraMenuItems" id="mobileSub">
                    <ul>
                        <div className="d-block d-md-none">
                            <li data-bs-dismiss="offcanvas"><Link to="/digital-marketing-services">Digital Marketing</Link></li>
                            <li className="itemSub"><Link data-bs-dismiss="offcanvas" to="/pay-per-click-ppc-management-services">PPC Management</Link> <button className="subBtn" data-bs-toggle="collapse" data-bs-target="#ppcManagement" aria-expanded="true" aria-controls="ppcManagement"><i className="fa fa-chevron-down"></i></button>
                                <ul id="ppcManagement" className="collapse" data-bs-parent="#mobileSub">
                                    <li data-bs-dismiss="offcanvas"><Link to="/google-ads-management-services">Google Ads Management</Link></li>
                                    <li data-bs-dismiss="offcanvas"><Link to="/linkedin-ads-management-services">LinkedIn Ads Management</Link></li>
                                    <li data-bs-dismiss="offcanvas"><Link to="/facebook-ads-management-services">Facebook Ads Marketing</Link></li>
                                    <li data-bs-dismiss="offcanvas"><Link to="/instagram-ads-management-services">Instagram Ads Management</Link></li>
                                </ul>
                            </li>
                            <li className="itemSub"><Link data-bs-dismiss="offcanvas" to="/search-engine-optimization-seo-services">SEO</Link> <button className="subBtn" data-bs-toggle="collapse" data-bs-target="#seoMenu" aria-expanded="true" aria-controls="seoMenu"><i className="fa fa-chevron-down"></i></button>
                                <ul id="seoMenu" className="collapse" data-bs-parent="#mobileSub">
                                    <li data-bs-dismiss="offcanvas"><Link to="/on-page-seo-services">ON-Page SEO Services</Link></li>
                                    <li data-bs-dismiss="offcanvas"><Link to="/off-page-seo-services">OFF-Page SEO Services</Link></li>
                                    <li data-bs-dismiss="offcanvas"><Link to="/e-commerce-seo-services">E-Commerce SEO</Link></li>
                                    <li data-bs-dismiss="offcanvas"><Link to="/mobile-seo-services">Mobile SEO</Link></li>
                                    <li data-bs-dismiss="offcanvas"><Link to="/search-engine-optimization-outsourcing-seo-services">SEO Outsourcing</Link></li>
                                    <li data-bs-dismiss="offcanvas"><Link to="/local-seo-services">Local SEO</Link></li>
                                </ul>
                            </li>
                            <li className="itemSub"><Link data-bs-dismiss="offcanvas" to="/social-media-optimization-services">SMO</Link> <button className="subBtn" data-bs-toggle="collapse" data-bs-target="#smoMenu" aria-expanded="true" aria-controls="smoMenu"><i className="fa fa-chevron-down"></i></button>
                                <ul id="smoMenu" className="collapse" data-bs-parent="#mobileSub">
                                    <li data-bs-dismiss="offcanvas"><Link to="/social-media-optimization-services">Social Media Optimization</Link></li>
                                    <li data-bs-dismiss="offcanvas"><Link to="/content-marketing-services">Content Marketing</Link></li>
                                    <li data-bs-dismiss="offcanvas"><Link to="/digital-marketing-services">Digital Marketing</Link></li>
                                    <li data-bs-dismiss="offcanvas"><Link to="/online-reputation-management-services">Online Reputation Management Services</Link></li>
                                    <li data-bs-dismiss="offcanvas"><Link to="/blog-management-services">Blog Management Service</Link></li>
                                    <li data-bs-dismiss="offcanvas"><Link to="/influencer-marketing-services">Influencer Marketing</Link></li>
                                </ul>
                            </li>
                            <li data-bs-dismiss="offcanvas"><Link to="/graphic-designing-services">Graphic Design</Link></li>
                            <li className="itemSub"><Link data-bs-dismiss="offcanvas" to="/website-designing-services">Website Designing Services</Link> <button className="subBtn" data-bs-toggle="collapse" data-bs-target="#websiteDesign" aria-expanded="true" aria-controls="websiteDesign"><i className="fa fa-chevron-down"></i></button>
                                <ul id="websiteDesign" className="collapse"  data-bs-parent="#mobileSub">
                                    <li data-bs-dismiss="offcanvas"><Link to="/corporate-website-designing-services">Corporate Website Designing</Link></li>
                                    <li data-bs-dismiss="offcanvas"><Link to="/responsive-website-designing-services">Responsive Website Designing</Link></li>
                                    <li data-bs-dismiss="offcanvas"><Link to="/e-commerce-website-design-development-services">E-commerce Website Designing</Link></li>
                                    <li data-bs-dismiss="offcanvas"><Link to="/cms-website-design-development-services">Content Management Systems</Link></li>
                                    <li data-bs-dismiss="offcanvas"><Link to="/wordpress-website-design-development-services">WordPress Website Design & Development</Link></li>
                                    <li data-bs-dismiss="offcanvas"><Link to="/custom-website-designing-services">Custom Website Designing</Link></li>
                                </ul>
                            </li>
                            <li data-bs-dismiss="offcanvas"><Link to="/website-development-services">Web Development</Link></li>
                            <li data-bs-dismiss="offcanvas"><Link to="/software-development-services">Software Development</Link></li>
                        </div>
                        <li data-bs-dismiss="offcanvas"><Link to="/about-us">About Us</Link></li>
                        <li data-bs-dismiss="offcanvas"><Link to="/portfolio">Our Portfolio</Link></li>
                        <li data-bs-dismiss="offcanvas"><Link to="/blogs">Latest Blogs</Link></li>
                        <li data-bs-dismiss="offcanvas"><Link to="/career">Careers</Link></li>
                        <li data-bs-dismiss="offcanvas"><Link to="#">Our Clients</Link></li>
                        <li data-bs-dismiss="offcanvas"><Link to="#">SEO Tools</Link></li>
                        <li data-bs-dismiss="offcanvas"><Link to="/resource">Resources</Link></li>
                        <li data-bs-dismiss="offcanvas"><Link to="/contact-us">Contact Us</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}
