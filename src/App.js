import React, { Suspense } from 'react';
import { Route, Routes } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import './assets/css/style.css';
import './assets/css/responsive.css';
import 'react-toastify/dist/ReactToastify.css';

import Header from './layouts/include/Header';
import Footer from  './layouts/include/Footer';
import Home from  './layouts/pages/Home';
import WebsiteDesigningServices from  './layouts/pages/services/WebsiteDesigningServices';
import CorporateWebsiteDesigningServices from  './layouts/pages/services/CorporateWebsiteDesigningServices';
import ResponsiveWebsiteDesigningServices from  './layouts/pages/services/ResponsiveWebsiteDesigningServices';
import EcommerceWebsiteDesignDevelopmentServices from  './layouts/pages/services/EcommerceWebsiteDesignDevelopmentServices';
import CmsDevelopementServices from  './layouts/pages/services/CmsDevelopementServices';
import WordpressWebsiteDesignDevelopmentServices from  './layouts/pages/services/WordpressWebsiteDesignDevelopmentServices';
import CustomWebsiteDesigningServices from  './layouts/pages/services/CustomWebsiteDesigningServices';
import WebsiteDevelopmentServices from  './layouts/pages/services/WebsiteDevelopmentServices';
import DigitalMarketingServices from  './layouts/pages/services/DigitalMarketingServices';
import PpcManagementServices from  './layouts/pages/services/PpcManagementServices';
import GoogleAdsManagementServices from  './layouts/pages/services/GoogleAdsManagementServices';
import LinkedinAdsManagementServices from  './layouts/pages/services/LinkedinAdsManagementServices';
import FacebookAdsManagementServices from  './layouts/pages/services/FacebookAdsManagementServices';
import InstagramAdsManagementServices from  './layouts/pages/services/InstagramAdsManagementServices';
import SearchEngineOptimizationServices from  './layouts/pages/services/SearchEngineOptimizationServices';
import OnPageSeoServices from  './layouts/pages/services/OnPageSeoServices';
import OffPageSeoServices from  './layouts/pages/services/OffPageSeoServices';
import EcommerceSeoServices from  './layouts/pages/services/EcommerceSeoServices';
import MobileSeoServices from  './layouts/pages/services/MobileSeoServices';
import LocalSeoServices from  './layouts/pages/services/LocalSeoServices';
import SearchEngineOptimizationOutsourcingSeoServices from  './layouts/pages/services/SearchEngineOptimizationOutsourcingSeoServices';
import SocialMediaOptimizationServices from  './layouts/pages/services/SocialMediaOptimizationServices';
import ContentMarketingServices from  './layouts/pages/services/ContentMarketingServices';
import OnlineReputationManagementServices from  './layouts/pages/services/OnlineReputationManagementServices';
import BlogManagementServices from  './layouts/pages/services/BlogManagementServices';
import InfluencerMarketingServices from  './layouts/pages/services/InfluencerMarketingServices';
import SoftwareDevelopementServices from  './layouts/pages/services/SoftwareDevelopementServices';
import GraphicDesigningServices from  './layouts/pages/services/GraphicDesigningServices';
import PaidInclusionServicesMumbaiIndia from  './layouts/pages/services/PaidInclusionServicesMumbaiIndia';
import EmailMarketingServicesCompaniesMumbai from  './layouts/pages/services/EmailMarketingServicesCompaniesMumbai';
import PressReleaseSubmissionServices from  './layouts/pages/services/PressReleaseSubmissionServices';
import RegionalLocalSeoServices from  './layouts/pages/services/RegionalLocalSeoServices';
import ErpCrmSoftwareDevelopmentSolution from  './layouts/pages/services/ErpCrmSoftwareDevelopmentSolution';
import CustomWebDevelopmentCompany from  './layouts/pages/services/CustomWebDevelopmentCompany';
import CmsDevelopmentCompaniesMumbai from  './layouts/pages/services/CmsDevelopmentCompaniesMumbai';
import MagentoDevelopment from  './layouts/pages/services/MagentoDevelopment';
import DrupalCmsDevelopmentServices from  './layouts/pages/services/DrupalCmsDevelopmentServices';
import WordPressCmsServices from  './layouts/pages/services/WordPressCmsServices';
import JoomlaCmsDevelopmentServices from  './layouts/pages/services/JoomlaCmsDevelopmentServices';
import WebPortalCompanyMumbai from  './layouts/pages/services/WebPortalCompanyMumbai';
import EcommerceSolutionCompaniesMumbai from  './layouts/pages/services/EcommerceSolutionCompaniesMumbai';
import DynamicWebsiteDesigningServices from  './layouts/pages/services/DynamicWebsiteDesigningServices';
import WebsiteMaintenanceServices from  './layouts/pages/services/WebsiteMaintenanceServices';
import WebsiteRedesigningServices from  './layouts/pages/services/WebsiteRedesigningServices';
import MobileWebsiteDesigningServices from  './layouts/pages/services/MobileWebsiteDesigningServices';
import WebsiteAuditServicesCompanies from  './layouts/pages/services/WebsiteAuditServicesCompanies';
import XhtmlConversionServices from  './layouts/pages/services/XhtmlConversionServices';
import MobileAppDevelopmentServices from  './layouts/pages/services/MobileAppDevelopmentServices';
import SocialMediaMarketingServices from  './layouts/pages/services/SocialMediaMarketingServices';
import CodeigniterFrameworkDevelopmentServices from  './layouts/pages/services/CodeigniterFrameworkDevelopmentServices';
import ApiIntegrationServices from  './layouts/pages/services/ApiIntegrationServices';
import BootstrapDesigningServices from  './layouts/pages/services/BootstrapDesigningServices';
import CorporateBrandingServicesMumbai from  './layouts/pages/services/CorporateBrandingServicesMumbai';
import FacebookMarketing from  './layouts/pages/services/FacebookMarketing';
import AboutUs from  './layouts/pages/AboutUs';
import Portfolio from  './layouts/pages/Portfolio';
import Contact from  './layouts/pages/Contact';
import Career from  './layouts/pages/Career';
import ApplyNow from  './layouts/pages/ApplyNow';
import PrivacyPolicy from  './layouts/pages/PrivacyPolicy';
import TermsOfUse from  './layouts/pages/TermsOfUse';
import CookiesPolicy from  './layouts/pages/CookiesPolicy';
import Resource from  './layouts/pages/Resource';
import Thanks from  './layouts/pages/Thanks';
import Blog from  './layouts/blog/Blog';
import SingleBlog from  './layouts/blog/SingleBlog';
import ArticleSubmissionServices from  './layouts/pages/services/ArticleSubmissionServices';
import DirectorySubmissionServices from  './layouts/pages/services/DirectorySubmissionServices';
import EcommerceMarketingCompanyMumbai from  './layouts/pages/services/EcommerceMarketingCompanyMumbai';
import EcommerceSeoServicesPackages from  './layouts/pages/services/EcommerceSeoServicesPackages';
import GuaranteedTopSearchEngineRankingCompany from  './layouts/pages/services/GuaranteedTopSearchEngineRankingCompany';
import HireDedicatedSeoExperts from  './layouts/pages/services/HireDedicatedSeoExperts';
import LinkBuildingServices from  './layouts/pages/services/LinkBuildingServices';
import LinkedinMarketing from  './layouts/pages/services/LinkedinMarketing';
import LaravelCmsDevelopmentCompany from  './layouts/pages/services/LaravelCmsDevelopmentCompany';
import MultilingualSeoServices from  './layouts/pages/services/MultilingualSeoServices';
import PaymentGatewayIntegrationServices from  './layouts/pages/services/PaymentGatewayIntegrationServices';
import PhpWebsiteDevelopmentServices from  './layouts/pages/services/PhpWebsiteDevelopmentServices';
import KeywordResearchMumbaiIndia from  './layouts/pages/services/KeywordResearchMumbaiIndia';
import OnlineReputationRepairServices from  './layouts/pages/services/OnlineReputationRepairServices';
import PpcManagementServicesPackages from  './layouts/pages/services/PpcManagementServicesPackages';
import Pricing from  './layouts/pages/services/Pricing';
import ProfessionalWebsiteDesigningServices from  './layouts/pages/services/ProfessionalWebsiteDesigningServices';
import PsdHtmlConversionServices from  './layouts/pages/services/PsdHtmlConversionServices';
import LawWebsiteDevelopmentMumbai from  './layouts/pages/services/LawWebsiteDevelopmentMumbai';
import AspnetDevelopmentCompanyMumbai from  './layouts/pages/services/AspnetDevelopmentCompanyMumbai';
import BlackberryMobileApplicationDevelopmentServices from  './layouts/pages/services/BlackberryMobileApplicationDevelopmentServices';
import AndroidMobileApplicationDevelopmentServices from  './layouts/pages/services/AndroidMobileApplicationDevelopmentServices';
import OnlineLedGenerationServices from  './layouts/pages/services/OnlineLedGenerationServices';
import AmazonWebServicesAws from  './layouts/pages/services/AmazonWebServicesAws';
import WebsiteDesigningCompanies from  './layouts/pages/services/WebsiteDesigningCompanies';
import PinterestMarketing from  './layouts/pages/services/PinterestMarketing';
import WebsiteDesignMathodologyMumbai from  './layouts/pages/services/WebsiteDesignMathodologyMumbai';
import SearchEngineOptimizationSeoServicesPackages from  './layouts/pages/services/SearchEngineOptimizationSeoServicesPackages';
import SeoConsultancyServicesMumbaiIndia from  './layouts/pages/services/SeoConsultancyServicesMumbaiIndia';
import SeoContentWritingServices from  './layouts/pages/services/SeoContentWritingServices';
import SeoMethologyMumbaiIndia from  './layouts/pages/services/SeoMethologyMumbaiIndia';
import SeoMoneyBackGuranteerServicesIndia from  './layouts/pages/services/SeoMoneyBackGuranteerServicesIndia';
import ShopifyDevelopementServices from  './layouts/pages/services/ShopifyDevelopementServices';
import SharepointsDevelopmentCompanyMumbaiIndia from  './layouts/pages/services/SharepointsDevelopmentCompanyMumbaiIndia';
import SmsGatewayIntigrationServices from  './layouts/pages/services/SmsGatewayIntigrationServices';
import SmsMarketingServciesCompaniesMumbaiIndia from  './layouts/pages/services/SmsMarketingServciesCompaniesMumbaiIndia';
import SnapchatMarketing from  './layouts/pages/services/SnapchatMarketing';
import SocialBookmarkingServices from  './layouts/pages/services/SocialBookmarkingServices';
import SocialMediaMarketingSMMServicesPackages from  './layouts/pages/services/SocialMediaMarketingSMMServicesPackages';
import SocialNetworkingDevelopmentServices from  './layouts/pages/services/SocialNetworkingDevelopmentServices';
import SoftwareTestingQualityAssuranceServices from  './layouts/pages/services/SoftwareTestingQualityAssuranceServices';
import ThemeCustomizationServices from  './layouts/pages/services/ThemeCustomizationServices';
import TikTokAdsMangamentServices from  './layouts/pages/services/TikTokAdsMangamentServices';
import TravelApiIntegrationServices from  './layouts/pages/services/TravelApiIntegrationServices';
import TwitterMarketing from  './layouts/pages/services/TwitterMarketing';
import TwitterTrendingMarketing from  './layouts/pages/services/TwitterTrendingMarketing';
import W3cStandardsIndia from  './layouts/pages/services/W3cStandardsIndia';
import WebApplicationTestingMumbaiIndia from  './layouts/pages/services/WebApplicationTestingMumbaiIndia';
import WebsiteAnalysisServicesMumbai from  './layouts/pages/services/WebsiteAnalysisServicesMumbai';
import WebsiteDesignTechnologyProvideMumbai from  './layouts/pages/services/WebsiteDesignTechnologyProvideMumbai';
import RealEstateWebsiteDevelopmentServices from  './layouts/pages/services/RealEstateWebsiteDevelopmentServices';
import RecruitmentWebsiteDevelopmentServices from  './layouts/pages/services/RecruitmentWebsiteDevelopmentServices';
import RemoteMysqlDbaSupportServices from  './layouts/pages/services/RemoteMysqlDbaSupportServices';
import RichInternetApplicationServices from  './layouts/pages/services/RichInternetApplicationServices';
import RubyOnRailsCmsFrameworkDevelopmentServices from  './layouts/pages/services/RubyOnRailsCmsFrameworkDevelopmentServices';
import SearchEngineMarketingCompaniesMumbaiIndia from  './layouts/pages/services/SearchEngineMarketingCompaniesMumbaiIndia';
import SearchEngineOptimizationResearchMumbaiIndia from  './layouts/pages/services/SearchEngineOptimizationResearchMumbaiIndia';
import CakephpDevelopmentServices from  './layouts/pages/services/CakephpDevelopmentServices';
import DatabaseDevelopementMumbaiIndia from  './layouts/pages/services/DatabaseDevelopementMumbaiIndia';
import Dba2DbaServicesAdministration from  './layouts/pages/services/Dba2DbaServicesAdministration';
import DesktopApplicationDevelopmentServices from  './layouts/pages/services/DesktopApplicationDevelopmentServices';
import DesktopApplicationMumbaiIndia from  './layouts/pages/services/DesktopApplicationMumbaiIndia';
import TwoDAnimationServicesMumbaiIndia from  './layouts/pages/services/TwoDAnimationServicesMumbaiIndia';
import ThreeDAnimationServices from  './layouts/pages/services/ThreeDAnimationServices';
import AdobeAirDevelopmentCompanyMumbiaIndia from  './layouts/pages/services/AdobeAirDevelopmentCompanyMumbiaIndia';
import AffiliateMarketingServicesMumbaiIndia from  './layouts/pages/services/AffiliateMarketingServicesMumbaiIndia';
import AjaxDevelopmentCompaniesMumbaiIndia from  './layouts/pages/services/AjaxDevelopmentCompaniesMumbaiIndia';
import Expertise from  './layouts/pages/services/Expertise';
import FlashActionScriptDevelopmentCompaniesMumbaiIndia from  './layouts/pages/services/FlashActionScriptDevelopmentCompaniesMumbaiIndia';
import FlashBannerDesigningServicesMumbaiIndia from  './layouts/pages/services/FlashBannerDesigningServicesMumbaiIndia';
import FlashCommunicationServicesMumbaiIndia from  './layouts/pages/services/FlashCommunicationServicesMumbaiIndia';
import FlashDevelopmentCopaniesMumbaiIndia from  './layouts/pages/services/FlashDevelopmentCopaniesMumbaiIndia';
import FlashIntroDevelopmentMumbaiIndia from  './layouts/pages/services/FlashIntroDevelopmentMumbaiIndia';
import FlashRemotingServicesMumbaiIndia from  './layouts/pages/services/FlashRemotingServicesMumbaiIndia';
import FlashTemplatesDesingingServicesMumbaiIndia from  './layouts/pages/services/FlashWebsiteDesigningServices';
import FlashWebsiteDesigningServices from  './layouts/pages/services/FlashWebsiteDesigningServices';
import FlashGameDevelopmentCompanies from  './layouts/pages/services/FlashGameDevelopmentCompanies';
import FlexDevelopmentCompaniesMumbaiIndia from  './layouts/pages/services/FlexDevelopmentCompaniesMumbaiIndia';
import ForumPostingServices from  './layouts/pages/services/ForumPostingServices';
import HostedMarketingPagesServices from  './layouts/pages/services/HostedMarketingPagesServices';
import HrSolutionMumbaiIndia from  './layouts/pages/services/HrSolutionMumbaiIndia';
import InternetMarketingCompanyMumbaiIndia from  './layouts/pages/services/InternetMarketingCompanyMumbaiIndia';
import J2eeApplicationDevelopement from  './layouts/pages/services/J2eeApplicationDevelopement';
import JavaDevelopmentServices from  './layouts/pages/services/JavaDevelopmentServices';
import JavascriptDevelopmentServices from  './layouts/pages/services/JavascriptDevelopmentServices';
import JqueryDevelopmentServices from  './layouts/pages/services/JqueryDevelopmentServices';
import LexicalAnalysisBasedIsiSeoServices from  './layouts/pages/services/LexicalAnalysisBasedIsiSeoServices';
import MCommerceSolution from  './layouts/pages/services/MCommerceSolution';
import MicrosoftDevelopmentServices from  './layouts/pages/services/MicrosoftDevelopmentServices';
import MobileOptimizationTechniques from  './layouts/pages/services/MobileOptimizationTechniques';
import MobileWebStandards from  './layouts/pages/services/MobileWebStandards';
import MangoDbDatabaseSupportAdministration from  './layouts/pages/services/MangoDbDatabaseSupportAdministration';
import DotNetDevelopmentServices from  './layouts/pages/services/DotNetDevelopmentServices';
import OracleApplicationDevelopmentCompanies from  './layouts/pages/services/OracleApplicationDevelopmentCompanies';
import OrderDigitalMarketing from  './layouts/pages/services/OrderDigitalMarketing';
import PostGreSqlDatabaseServices from  './layouts/pages/services/PostGreSqlDatabaseServices';
import CustomCalculatorDevelopmentServices from  './layouts/pages/services/CustomCalculatorDevelopmentServices';
import SocialMediaOptimization from  './layouts/pages/services/SocialMediaOptimization';
import ServicesPayPerClickManagement from  './layouts/pages/services/ServicesPayPerClickManagement';
import WebsiteRedevelopmentServices from  './layouts/pages/services/WebsiteRedevelopmentServices';
import WebsiteUsabilityReportIndia from  './layouts/pages/services/WebsiteUsabilityReportIndia';
import WhatsappMarketing from  './layouts/pages/services/WhatsappMarketing';
import WindosMobileApplicationDevelopementServices from  './layouts/pages/services/WindosMobileApplicationDevelopementServices';
import XCartDevelopmentCompaniesMumbaiIndia from  './layouts/pages/services/XCartDevelopmentCompaniesMumbaiIndia';
import YahooStoreDevelopmentServices from  './layouts/pages/services/YahooStoreDevelopmentServices';
import YiiCmsFrameworkDevelopmentServices from  './layouts/pages/services/YiiCmsFrameworkDevelopmentServices';
import YoutubeMarketing from  './layouts/pages/services/YoutubeMarketing';
import YoutubeTrendingMarketing from  './layouts/pages/services/YoutubeTrendingMarketing';
import ZenCartDevelopmentCompaniesMumbaiIndia from  './layouts/pages/services/ZenCartDevelopmentCompaniesMumbaiIndia';
import ZendFramworkDevelopmentServices from  './layouts/pages/services/ZendFramworkDevelopmentServices';
import EcommercePortalDevelopment from './layouts/pages/services/EcommercePortalDevelopment';
import WordpressDevelopmentServices from './layouts/pages/services/WordpressDevelopmentServices';
import DigitalMarketingServicesNew from './layouts/pages/services/DigitalMarketingServicesNew';
import NotFound from  './layouts/pages/NotFound';


function App() {
  return (
    <div>
      <ToastContainer position="bottom-center" limit={1} />
      <Header/>
      <Routes>
          <Route path='/' element = {<Home/>}/>
          <Route path='/website-designing-services' element = { <WebsiteDesigningServices/>}/>
          <Route path='/corporate-website-designing-services' element = { <CorporateWebsiteDesigningServices/>}/>
          <Route path='/responsive-website-designing-services' element = { <ResponsiveWebsiteDesigningServices/>}/>
          <Route path='/e-commerce-website-design-development-services' element ={ <EcommerceWebsiteDesignDevelopmentServices/>}/>
          <Route path='/cms-website-design-development-services' element ={ <CmsDevelopementServices/>}/>
          <Route path='/wordpress-website-design-development-services' element ={ <WordpressWebsiteDesignDevelopmentServices/>}/>
          <Route path='/custom-website-designing-services' element ={ <CustomWebsiteDesigningServices/>}/>
          <Route path='/website-development-services' element = { <WebsiteDevelopmentServices/>}/>
          <Route path='/digital-marketing-services' element = { <DigitalMarketingServices/>}/>
          <Route path='/pay-per-click-ppc-management-services' element ={ <PpcManagementServices/>}/>
          <Route path='/google-ads-management-services' element ={ <GoogleAdsManagementServices/>}/>
          <Route path='/linkedin-ads-management-services' element ={ <LinkedinAdsManagementServices/>}/>
          <Route path='/facebook-ads-management-services' element ={ <FacebookAdsManagementServices/>}/>
          <Route path='/instagram-ads-management-services' element ={ <InstagramAdsManagementServices/>}/>
          <Route path='/search-engine-optimization-seo-services' element ={ <SearchEngineOptimizationServices/>}/>
          <Route path='/on-page-seo-services' element ={ <OnPageSeoServices/>}/>
          <Route path='/off-page-seo-services' element ={ <OffPageSeoServices/>}/>
          <Route path='/e-commerce-seo-services' element ={ <EcommerceSeoServices/>}/>
          <Route path='/mobile-seo-services' element ={ <MobileSeoServices/>}/>
          <Route path='/local-seo-services' element ={ <LocalSeoServices/>}/>
          <Route path='/search-engine-optimization-outsourcing-seo-services' element ={ <SearchEngineOptimizationOutsourcingSeoServices/>}/>
          <Route path='/social-media-optimization-services' element ={ <SocialMediaOptimizationServices/>}/>
          <Route path='/content-marketing-services' element ={ <ContentMarketingServices/>}/>
          <Route path='/online-reputation-management-services' element ={ <OnlineReputationManagementServices/>}/>
          <Route path='/blog-management-services' element ={ <BlogManagementServices/>}/>
          <Route path='/influencer-marketing-services' element ={ <InfluencerMarketingServices/>}/>
          <Route path='/software-development-services' element ={ <SoftwareDevelopementServices/>}/>
          <Route path='/graphic-designing-services' element ={ <GraphicDesigningServices/>}/>
          <Route path='/paid-inclusion-services-mumbai-india' element ={ <PaidInclusionServicesMumbaiIndia/>}/>
          <Route path='/email-marketing-services-companies-mumbai-india' element ={ <EmailMarketingServicesCompaniesMumbai/>}/>
          <Route path='/press-release-submission-services' element ={ <PressReleaseSubmissionServices/>}/>
          <Route path='/regional-local-seo-services' element ={ <RegionalLocalSeoServices/>}/>
          <Route path='/erp-crm-software-development-solutions' element ={ <ErpCrmSoftwareDevelopmentSolution/>}/>
          <Route path='/custom-website-development-companies-mumbai-india' element ={<CustomWebDevelopmentCompany/>}/>
          <Route path='/cms-development-companies-mumbai-india' element ={<CmsDevelopmentCompaniesMumbai/>}/>
          <Route path='/magento-development-services-mumbai-india' element ={<MagentoDevelopment/>}/>
          <Route path='/drupal-cms-framework-development-services' element ={<DrupalCmsDevelopmentServices/>}/>
          <Route path='/wordpress-cms-website-development-companies-mumbai-india' element ={<WordPressCmsServices/>}/>
          <Route path='/joomla-cms-framework-development-services' element ={<JoomlaCmsDevelopmentServices/>}/>
          <Route path='/webportal-development-companies-mumbai-india' element ={<WebPortalCompanyMumbai/>}/>
          <Route path='/ecommerce-solutions-company-mumbai-india' element ={<EcommerceSolutionCompaniesMumbai/>}/>
          <Route path='/dynamic-website-designing-services' element ={<DynamicWebsiteDesigningServices/>}/>
          <Route path='/website-maintenance-services' element ={<WebsiteMaintenanceServices/>}/>
          <Route path='/website-redesigning-services' element ={<WebsiteRedesigningServices/>}/>
          <Route path='/mobile-website-designing-services' element ={<MobileWebsiteDesigningServices/>}/>
          <Route path='/website-audit-services-mumbai-india' element ={<WebsiteAuditServicesCompanies/>}/>
          <Route path='/xhtml-conversion-services' element ={<XhtmlConversionServices/>}/>
          <Route path='/mobile-application-development-services' element ={<MobileAppDevelopmentServices/>}/>
          <Route path='/social-media-marketing-services' element ={<SocialMediaMarketingServices/>}/>
          <Route path='/codeigniter-cms-framework-development-services' element ={<CodeigniterFrameworkDevelopmentServices/>}/>
          <Route path='/api-integration-services' element ={<ApiIntegrationServices/>}/>
          <Route path='/bootstrap-website-designing-services' element ={<BootstrapDesigningServices/>}/>
          <Route path='/corporate-branding-service-mumbai-india' element ={<CorporateBrandingServicesMumbai/>}/>
          <Route path='/facebook-marketing' element ={<FacebookMarketing/>}/>
          <Route path='/about-us' element ={ <AboutUs/>}/>
          <Route path='/portfolio' element ={ <Portfolio/>}/>
          <Route path='/contact-us' element ={ <Contact/>}/>
          <Route path='/career' element ={ <Career/>}/>
          <Route path='/apply-now' element ={ <ApplyNow/>}/>
          <Route path='/privacy-policy' element ={ <PrivacyPolicy/>}/>
          <Route path='/terms-and-conditions' element ={ <TermsOfUse/>}/>
          <Route path='/cookie-policy' element ={ <CookiesPolicy/>}/>
          <Route path='/resource' element ={ <Resource/>}/>
          <Route path='/thanks' element ={ <Thanks/>}/>
          <Route path='/blogs' element ={ <Blog/>}/>
          <Route path='/blogs/:slug' element ={ <SingleBlog/>}/>
          <Route path='/article-submission-services' element ={<ArticleSubmissionServices/>}/>
          <Route path='/directory-submission-services' element ={ <DirectorySubmissionServices/>}/>
          <Route path='/ecommerce-marketing-companies-mumbai-india' element ={ <EcommerceMarketingCompanyMumbai/>}/>
          <Route path='/ecommerce-seo-services-packages' element ={ <EcommerceSeoServicesPackages/>}/>
          <Route path='/guaranteed-top-10-search-engine-ranking-mumbai-india' element ={ <GuaranteedTopSearchEngineRankingCompany/>}/>
          <Route path='/hire-dedicated-seo-experts-mumbai-india' element ={ <HireDedicatedSeoExperts/>}/>
          <Route path='/link-building-services' element ={ <LinkBuildingServices/>}/>
          <Route path='/linkedin-marketing' element ={ <LinkedinMarketing/>}/>
          <Route path='/laravel-cms-framework-development-services' element ={ <LaravelCmsDevelopmentCompany/>}/>
          <Route path='/multilingual-seo-services' element ={ <MultilingualSeoServices/>}/>
          <Route path='/payment-gateway-integration-services' element ={ <PaymentGatewayIntegrationServices/>}/>
          <Route path='/php-website-development-services' element ={ <PhpWebsiteDevelopmentServices/>}/>
          <Route path='/keyword-research-services-mumbai-india' element ={ <KeywordResearchMumbaiIndia/>}/>
          <Route path='/online-reputation-repair-service' element ={ <OnlineReputationRepairServices/>}/>
          <Route path='/ppc-management-services-packages' element ={ <PpcManagementServicesPackages/>}/>
          <Route path='/pricing' element ={ <Pricing/>}/>
          <Route path='/professional-website-designing-services' element ={ <ProfessionalWebsiteDesigningServices/>}/>
          <Route path='/psd-to-html-conversion-services' element ={ <PsdHtmlConversionServices/>}/>
          <Route path='/law-website-development-mumbai-india' element ={ <LawWebsiteDevelopmentMumbai/>}/>
          <Route path='/aspnet-development-companies-mumbai-india' element ={ <AspnetDevelopmentCompanyMumbai/>}/>
          <Route path='/blackberry-mobile-application-development-services' element ={ <BlackberryMobileApplicationDevelopmentServices/>}/>
          <Route path='/android-mobile-application-development-services' element ={ <AndroidMobileApplicationDevelopmentServices/>}/>
          <Route path='/online-lead-generation-services' element ={ <OnlineLedGenerationServices/>}/>
          <Route path='/amazon-web-services-aws' element ={ <AmazonWebServicesAws/>}/>
          <Route path='/website-designing-companies' element={<WebsiteDesigningCompanies/>}/>
          <Route path='/pinterest-marketing' element={<PinterestMarketing/>}/>
          <Route path='/website-designing-methodology-mumbai-india' element={<WebsiteDesignMathodologyMumbai/>}/>
          <Route path='/search-engine-optimization-seo-services-packages' element={<SearchEngineOptimizationSeoServicesPackages/>}/>
          <Route path='/seo-consultancy-services-mumbai-india' element={<SeoConsultancyServicesMumbaiIndia/>}/>
          <Route path='/seo-content-writing-services' element={<SeoContentWritingServices/>}/>
          <Route path='/seo-methodology-mumbai-india' element={<SeoMethologyMumbaiIndia/>}/>
          <Route path='/seo-money-back-guarantee-service-india' element={<SeoMoneyBackGuranteerServicesIndia/>}/>
          <Route path='/shopify-development-services' element={<ShopifyDevelopementServices/>}/>
          <Route path='/sharepoint-application-development-companies-mumbai-india' element={<SharepointsDevelopmentCompanyMumbaiIndia/>}/>
          <Route path='/sms-gateway-integration-services' element={<SmsGatewayIntigrationServices/>}/>
          <Route path='/sms-marketing-services-companies-mumbai-india' element={<SmsMarketingServciesCompaniesMumbaiIndia/>}/>
          <Route path='/snapchat-marketing' element={<SnapchatMarketing/>}/>
          <Route path='/social-bookmarking-services' element={<SocialBookmarkingServices/>}/>
          <Route path='/social-media-marketing-smm-services-packages' element={<SocialMediaMarketingSMMServicesPackages/>}/>
          <Route path='/social-networking-website-development-services' element={<SocialNetworkingDevelopmentServices/>}/>
          <Route path='/software-testing-and-quality-assurance-services' element={<SoftwareTestingQualityAssuranceServices/>}/>
          <Route path='/themes-customization-services' element={<ThemeCustomizationServices/>}/>
          <Route path='/tiktok-ads-management-services' element={<TikTokAdsMangamentServices/>}/>
          <Route path='/travel-api-integration-services' element={<TravelApiIntegrationServices/>}/>
          <Route path='/twitter-marketing' element={<TwitterMarketing/>}/>
          <Route path='/twitter-trending-marketing' element={<TwitterTrendingMarketing/>}/>
          <Route path='/w3c-standards-india' element={<W3cStandardsIndia/>}/>
          <Route path='/web-application-testing-mumbai-india' element={<WebApplicationTestingMumbaiIndia/>}/>
          <Route path='/website-analysis-services-mumbai-india' element={<WebsiteAnalysisServicesMumbai/>}/>
          <Route path='/website-design-technology-providers-mumbai-india' element={<WebsiteDesignTechnologyProvideMumbai/>}/>
          <Route path='/real-estate-website-development-services' element={<RealEstateWebsiteDevelopmentServices/>}/>
          <Route path='/recruitment-website-development-services' element={<RecruitmentWebsiteDevelopmentServices/>}/>
          <Route path='/remote-mysql-dba-services-support' element={<RemoteMysqlDbaSupportServices/>}/>
          <Route path='/rich-internet-applications-mumbai-india' element={<RichInternetApplicationServices/>}/>
          <Route path='/ruby-on-rails-cms-framework-development-services' element={<RubyOnRailsCmsFrameworkDevelopmentServices/>}/>
          <Route path='/search-engine-marketing-companies-mumbai-india' element={<SearchEngineMarketingCompaniesMumbaiIndia/>}/>
          <Route path='/search-engine-optimization-research-mumbai-india' element={<SearchEngineOptimizationResearchMumbaiIndia/>}/>
          <Route path='/cakephp-development-services' element={<CakephpDevelopmentServices/>}/>
          <Route path='/database-development-mumbai-india' element={<DatabaseDevelopementMumbaiIndia/>}/>
          <Route path='/db2-dba-services-administration' element={<Dba2DbaServicesAdministration/>}/>
          <Route path='/desktop-application-development-companies-india' element={<DesktopApplicationDevelopmentServices/>}/>
          <Route path='/desktop-applications-mumbai-india' element={<DesktopApplicationMumbaiIndia/>}/>
          <Route path='/2d-animation-services-mumbai-india' element={<TwoDAnimationServicesMumbaiIndia/>}/>
          <Route path='/3d-animation-services-mumbai-india' element={<ThreeDAnimationServices/>}/>
          <Route path='/adobe-air-development-companies-mumbai-india' element={<AdobeAirDevelopmentCompanyMumbiaIndia/>}/>
          <Route path='/affiliate-marketing-services-mumbai-india' element={<AffiliateMarketingServicesMumbaiIndia/>}/>
          <Route path='/ajax-development-companies-mumbai-india' element={<AjaxDevelopmentCompaniesMumbaiIndia/>}/>
          <Route path='/expertise' element={<Expertise/>}/>
          <Route path='/flash-actionscript-services-mumbai-india' element={<FlashActionScriptDevelopmentCompaniesMumbaiIndia/>}/>
          <Route path='/flash-banner-designing-services-mumbai-india' element={<FlashBannerDesigningServicesMumbaiIndia/>}/>
          <Route path='/flash-communication-services-mumbai-india' element={<FlashCommunicationServicesMumbaiIndia/>}/>
          <Route path='/flash-development-companies-mumbai-india' element={<FlashDevelopmentCopaniesMumbaiIndia/>}/>
          <Route path='/flash-intro-development-mumbai-india' element={<FlashIntroDevelopmentMumbaiIndia/>}/>
          <Route path='/flash-remoting-services-mumbai-india' element={<FlashRemotingServicesMumbaiIndia/>}/>
          <Route path='/flash-templates-designing-services-mumbai-india' element={<FlashTemplatesDesingingServicesMumbaiIndia/>}/>
          <Route path='/flash-website-designing-services' element={<FlashWebsiteDesigningServices/>}/>
          <Route path='/flashgame-development-companies-mumbai-india' element={<FlashGameDevelopmentCompanies/>}/>
          <Route path='/flex-development-companies-mumbai-india' element={<FlexDevelopmentCompaniesMumbaiIndia/>}/>
          <Route path='/forum-postings-services' element={<ForumPostingServices/>}/>
          <Route path='/hosted-marketing-pages-services-india' element={<HostedMarketingPagesServices/>}/>
          <Route path='/hr-solutions-mumbai-india' element={<HrSolutionMumbaiIndia/>}/>
          <Route path='/internet-marketing-company-mumbai-india' element={<InternetMarketingCompanyMumbaiIndia/>}/>
          <Route path='/j2ee-application-development-companies-india' element={<J2eeApplicationDevelopement/>}/>
          <Route path='/java-development-services' element={<JavaDevelopmentServices/>}/>
          <Route path='/javascript-development-services' element={<JavascriptDevelopmentServices/>}/>
          <Route path='/jquery-development-services' element={<JqueryDevelopmentServices/>}/>
          <Route path='/lexical-analysis-based-lsi-seo-services' element={<LexicalAnalysisBasedIsiSeoServices/>}/>
          <Route path='/m-commerce-solution' element={<MCommerceSolution/>}/>
          <Route path='/microsoft-application-development-services' element={<MicrosoftDevelopmentServices/>}/>
          <Route path='/mobile-optimization-techniques-india' element={<MobileOptimizationTechniques/>}/>
          <Route path='/mobile-web-standards-mumbai-india' element={<MobileWebStandards/>}/>
          <Route path='/mongodb-database-support-administration' element={<MangoDbDatabaseSupportAdministration/>}/>
          <Route path='/net-development-services' element={<DotNetDevelopmentServices/>}/>
          <Route path='/oracle-applications-development-companies-mumbai-india' element={<OracleApplicationDevelopmentCompanies/>}/>
          <Route path='/order-digital-marketing-services' element={<OrderDigitalMarketing/>}/>
          <Route path='/postgresql-database-services' element={<PostGreSqlDatabaseServices/>}/>
          <Route path='/custom-calculator-development-services' element={<CustomCalculatorDevelopmentServices/>}/>
          <Route path='/social-media-optimization' element={<SocialMediaOptimization/>}/>
          <Route path='/services-pay-per-click-management-services' element={<ServicesPayPerClickManagement/>}/>
          <Route path='/website-redevelopment-services' element={<WebsiteRedevelopmentServices/>}/>
          <Route path='/website-usability-report-india' element={<WebsiteUsabilityReportIndia/>}/>
          <Route path='/whatsapp-marketing' element={<WhatsappMarketing/>}/>
          <Route path='/windows-mobile-application-development-services' element={<WindosMobileApplicationDevelopementServices/>}/>
          <Route path='/x-cart-development-companies-mumbai-india' element={<XCartDevelopmentCompaniesMumbaiIndia/>}/>
          <Route path='/yahoo-store-development-services' element={<YahooStoreDevelopmentServices/>}/>
          <Route path='/yii-cms-framework-development-services' element={<YiiCmsFrameworkDevelopmentServices/>}/>
          <Route path='/youtube-marketing' element={<YoutubeMarketing/>}/>
          <Route path='/youtube-trending-marketing' element={<YoutubeTrendingMarketing/>}/>
          <Route path='/zen-cart-development-companies-mumbai-india' element={<ZenCartDevelopmentCompaniesMumbaiIndia/>}/>
          <Route path='/ecommerce-portal-development' element={<EcommercePortalDevelopment/>}/>
          <Route path='/zend-framework-development-services' element={<ZendFramworkDevelopmentServices/>}/>
          <Route path='/wordpess-development-services' element={<WordpressDevelopmentServices/>}/>
          <Route path='/digital-marketing-services-new' element={<DigitalMarketingServicesNew/>}/>
          <Route path='*' element = {<NotFound/>}/>
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
