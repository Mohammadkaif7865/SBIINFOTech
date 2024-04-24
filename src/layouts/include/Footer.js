import React from 'react';
import {Link} from 'react-router-dom';

export default function Footer() {
  return (
    <div>
        <section className="footerForm" id="requestQuote">
            <div className="containerFull">
                <div className="row">
                    <div className="col-lg-2">
                        <div className="leftFooterForm">
                            <h4 className="small_heading">Get a Free Quote</h4>
                        </div>
                    </div>
                    <div className="col-lg-10">
                        <form>
                            <div className="formRightFooter">
                                <input required="" type="text" name="name" placeholder="Name"/>
                                <input required="" type="email" name="email" placeholder="E-mail"/>
                                <div className="form_fax" style={{display: 'none'}}>
                                    <input type="text" className="form-control" placeholder="Please enter fax" name="fax" title="Please enter fax"/>
                                </div>
                                <textarea required="" name="message" placeholder="Message"></textarea>
                                <button type="submit" name="submit" className="btnThemeRed">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        <footer className="footerNew">
            <div className="container-fluid ps-0">
                <div className="row">
                <div className="col-lg-3 px-0 px-lg-2">
                    <div className="firstColumn position-relative text-center">
                    <h4 className="sub_heading text_white"><i className="fa fa-mobile-alt pe-3 text_red"></i> Let's Talk</h4>
                    <Link className="sub_heading2 text-white my-3 d-inline-block" to="tel:+91-92222-60000">+91-92222-60000</Link>
                    <h4 className="sub_heading fontWeight300 text_white_light">Need some<br/> great marketing?<br/> We deliver.</h4>
                    <div>
                        <Link to="/contact-us" className="footerLeft">Get Started</Link>
                    </div>
                    </div>
                </div>
                <div className="col-lg-9">
                    <div className="row">
                    <div className="col-lg-11">
                        <div className="rightFooterColumn">
                        <div className="row">
                            <div className="col-lg-3">
                            <div className="footerColumn">
                                <h4>Internet Marketing</h4>
                                <ul>
                                <li><Link to="/social-media-optimization-services">Social Media Optimization</Link></li>
                                <li><Link to="/pay-per-click-ppc-management-services">PPC Management</Link></li>
                                <li><Link to="/search-engine-marketing-companies-mumbai-india">Search Engine Marketing</Link></li>
                                <li><Link to="/online-reputation-management-services">Reputation Management</Link></li>
                                <li><Link to="/paid-inclusion-services-mumbai-india">Paid Search Engine Inclusion</Link></li>
                                <li><Link to="/email-marketing-services-companies-mumbai-india">Email Marketing</Link></li>
                                <li><Link to="/press-release-submission-services">PR Submission</Link></li>
                                <li><Link to="/regional-local-seo-services">Google Local Listing</Link></li>
                                </ul>
                            </div>
                            </div>
                            <div className="col-lg-3">
                            <div className="footerColumn">
                                <h4>Website Development</h4>
                                <ul>
                                <li><Link to="/erp-crm-software-development-solutions">ERP & CRM Solutions</Link></li>
                                <li><Link to="/custom-website-development-companies-mumbai-india">Custom Web Development</Link></li>
                                <li><Link to="/cms-development-companies-mumbai-india">CMS Development Services</Link></li>
                                <li><Link to="/magento-development-services-mumbai-india">Magento Development</Link></li>
                                <li><Link to="/drupal-cms-framework-development-services">Drupal Development</Link></li>
                                <li><Link to="/wordpress-cms-website-development-companies-mumbai-india">WordPress Experts</Link></li>
                                <li><Link to="/joomla-cms-framework-development-services">Joomla Development</Link></li>
                                <li><Link to="/webportal-development-companies-mumbai-india">Web Portal Development</Link></li>
                                <li><Link to="/ecommerce-solutions-company-mumbai-india">E-Commerce Solutions</Link></li>
                                </ul>
                            </div>
                            </div>
                            <div className="col-lg-3">
                            <div className="footerColumn">
                                <h4>Website Designing</h4>
                                <ul>
                                <li><Link to="/cms-website-design-development-services">CMS Based Website</Link></li>
                                <li><Link to="/dynamic-website-designing-services">Dynamic Website Designing</Link></li>
                                <li><Link to="/website-maintenance-services">Website Maintenance</Link></li>
                                <li><Link to="/website-redesigning-services">Website Redesigning</Link></li>
                                <li><Link to="/mobile-website-designing-services">Mobile Website Designing</Link></li>
                                <li><Link to="/corporate-website-designing-services">Corporate Web Designing</Link></li>
                                <li><Link to="/website-audit-services-mumbai-india">Website Audit Report</Link></li>
                                <li><Link to="/xhtml-conversion-services">XHTML Conversion</Link></li>
                                </ul>
                            </div>
                            </div>
                            <div className="col-lg-3">
                            <div className="footerColumn">
                                <h4>PPC Management</h4>
                                <ul>
                                <li><Link to="/google-ads-management-services">Google Ads Management</Link></li>
                                <li><Link to="/linkedin-ads-management-services">Linkedin Ads Management</Link></li>
                                <li><Link to="/instagram-ads-management-services">Instagram Ads Management</Link></li>
                                <li><Link to="/facebook-ads-management-services">Facebook Ads Management</Link></li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-1">
                        <div className="socialColumn">
                        <ul>
                            <li><Link to="https://www.facebook.com/sibinfotech/" target="_blank"><i className="fab fa-facebook-f"></i></Link></li>
                            <li><Link to="https://www.twitter.com/sibinfotech" target="_blank"><i className="fab fa-twitter"></i></Link></li>
                            <li><Link to="https://www.linkedin.com/company/sib-infotech/" target="_blank"><i className="fab fa-linkedin-in"></i></Link></li>
                            <li><Link to="https://www.youtube.com/user/sibinfotech" target="_blank"><i className="fab fa-youtube"></i></Link></li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <section className="mapBlock py-5">
                <div className="containerFull">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="mapItem">
                                <div class="leftImgMap">
                                    <picture>
                                        <source srcset="assets/images/mumbai-office.webp" type="image/webp"/>
                                        <img src="assets/images/mumbai-office.jpg" class="img-fluid" alt="Mumbai Office"/>
                                    </picture>
                                    <div className="officeAddress">
                                        <h4 className="small_heading fontWeight600">Mumbai Office</h4>
                                        <p>107, Orbit Premises, Mindspace Near Inorbit Mall, Malad West, Mumbai, Maharashtra 400064</p>
                                        <Link to="tel:+91-92222-60000"><i class="fa fa-phone"></i>&nbsp; +91-92222-60000</Link>
                                    </div>
                                </div>
                                <div className="rightMapItem">
                                    <iframe className="img-taken" 
                                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15073.646558593871!2d72.833803!3d19.177215!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce92f56b4ccd%3A0x965180085bc69862!2sSIB%20Infotech!5e0!3m2!1sen!2sin!4v1678696876200!5m2!1sen!2sin"
                                        allowfullscreen=""
                                        loading="lazy"
                                        title="Mumbai Office Map"
                                        referrerpolicy="no-referrer-when-downgrade">
                                    </iframe>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="mapItem">
                                <div class="leftImgMap">
                                    <picture>
                                        <source srcset="assets/images/delhi-office.webp" type="image/webp"/>
                                        <img src="assets/images/delhi-office.jpg" class="img-fluid" alt="Delhi Office"/>
                                    </picture>
                                    <div className="officeAddress">
                                        <h4 className="small_heading fontWeight600">Delhi Office</h4>
                                        <p>2nd Floor, Office No 205, DDA-2 Building, Janakpuri District Center, Janakpuri, New Delhi, Delhi 110058</p>
                                        <Link to="tel:+91-92222-60000"><i class="fa fa-phone"></i>&nbsp; +91-92222-60000</Link>
                                    </div>
                                </div>
                                <div className="rightMapItem">
                                    {/* <iframe className="img-taken" 
                                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14007.962243140857!2d77.081604!3d28.630045!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d05e1990aeceb%3A0x7e39edabda3510f5!2sSIB%20Infotech!5e0!3m2!1sen!2sin!4v1678696653308!5m2!1sen!2sin"
                                        allowfullscreen=""
                                        loading="lazy"
                                        title="Delhi Office Map"
                                        referrerpolicy="no-referrer-when-downgrade">
                                    </iframe> */}
                                    <iframe title="Delhi Office Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.9866641582603!2d77.0791146745727!3d28.630161784190033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d05e1990aeceb%3A0x7e39edabda3510f5!2sSIB%20Infotech!5e0!3m2!1sen!2sin!4v1709614692297!5m2!1sen!2sin" width="600" height="450" style={{border:'0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="footerBottom">
                <div className="containerFull">
                <div className="footerLogos">
                    <div className="itemFooterLogo">
                        <a href="https://www.google.com/partners/agency?id=4328223643" rel="noreferrer" target="_blank">
                            <img src="https://www.gstatic.com/partners/badge/images/2024/PremierBadgeClickable.svg" alt="Google Partner"/>
                        </a>
                    </div>
                    <div className="itemFooterLogo">
                    <img alt="Meta Partner Company" src="assets/images/meta-partner.jpg"/>
                    </div>
                    <div className="itemFooterLogo">
                    <img alt="clutch Partner Company" src="assets/images/clutch.png"/>
                    </div>
                    <div className="itemFooterLogo">
                    <img alt="Shopify Partner Company" src="assets/images/shopify-partner.png"/>
                    </div>
                    <div className="itemFooterLogo">
                    <img alt="Trustpilot Partner Company" src="assets/images/trustpilot.jpg"/>
                    </div>
                    <div className="itemFooterLogo">
                    <img alt="Google Analytics Partner Company" src="assets/images/google-analytics.jpg"/>
                    </div>
                    <div className="itemFooterLogo">
                    <img alt="Bing Partner Company" src="assets/images/bing.png"/>
                    </div>
                </div>
                <div className="text-center mt-2 countryCenter">
                    <p>Serving Clients from : USA, UK, Australia, Canada, Europe, Germany, Singapore, Portugal, Belgium, Netherlands, Turkey, New Zealand, Japan & more</p>
                </div>
                <div className="footer_copyright d-flex mb-2 align-items-center justify-content-between">
                    <div className="rightFooterBottom">
                        <ul>
                            <li><Link to="#">Clients</Link></li>
                            <li><Link to="/career">Career</Link></li>
                            <li><Link to="/blogs">Blog</Link></li>
                            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                            <li><Link to="/sitemap.xml">Sitemap</Link></li>
                            <li><Link to="/terms-and-conditions">Terms of Use</Link></li>
                            <li><Link to="/cookie-policy">Cookies Policy</Link></li>
                            <li><Link to="#">SEO Tools</Link></li>
                            <li><Link to="/resource">Resources</Link></li>
                            <li><Link to="/contact-us">Contact Us</Link></li>
                        </ul>
                    </div>
                    <div className="copyRightFooter">
                        <p>© {(new Date().getFullYear())}. SIB Infotech. All Rights Reserved.</p>
                    </div>
                </div>
                </div>
            </div>
        </footer>
    </div>
  )
}
