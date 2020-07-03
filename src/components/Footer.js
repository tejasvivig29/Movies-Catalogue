import React from 'react';

function Footer(){
    return(
        <div>
            <div className="row">
                <div className="col-md-12">
                    <div className="footer p-3 mt-4 text-center bg-dark text-light">
                        Developed by:
                        <span className="text-warning font-weight-normal">
                            Tejasvi Vig
                        </span>
                        , Using <i className="fab fa-react"></i>
                        React JS &amp; Redux JS
                        integrated with external movies data API
                        <a href="http://www.omdbapi.com/" target="blank">
                            OMDB
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;