import React from 'react';
import { Helmet } from 'react-helmet-async';
import {Link} from 'react-router-dom';

export default function Thanks() {
  return (
    <div>
        <Helmet>
            <title>Thanks</title>
            <meta name="keywords" content=""/>
            <meta name="description" content=""/>
			<meta name="robots" content="noindex"/>
        </Helmet>
        <section className="border-top">
		    <div className="containerFull">
		        <div className="row">
		            <div className="col-lg-10 offset-lg-1">
		                <div className="thankBlock text-center">
		                    <h3 className="large_heading fw-bold"><i className="far fa-check-circle text-success"></i></h3>
		                    <h1 className="heading my-3">Thank You !</h1>
		                    <h4 className="small_heading mb-3">Your submission is received and we will contact you soon. </h4>
		                    <Link to="/" className="mt-3"><i className="bi bi-arrow-left"></i> Back to Home</Link>
		                </div>
		            </div>
		        </div>
		    </div>
		</section>
    </div>
  )
}
