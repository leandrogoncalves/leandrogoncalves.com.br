import React from 'react';
import I18n from '../_services/i18n';

export default function Features() {
    const _i = I18n.getTranslater();

    return (

        <div id="fh5co-features" className="animate-box">
            <div className="container">
                <div className="services-padding">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
                            <h2>{_i.get("features.h2")}</h2>
                        </div>
                    </div>
                    <div className="row">

                        <div className="col-md-4 text-center">

                            <div className="feature-left">
                                <span className="icon">
                                    <i className="icon-bargraph"></i>
                                </span>
                                <div className="feature-copy">
                                    <h3>{_i.get("features.services.one.h3")}</h3>
                                    <p>{_i.get("features.services.one.p")}</p>
                                </div>
                            </div>

                        </div>

                        <div className="col-md-4 text-center">
                            <div className="feature-left">
                                <span className="icon">
                                    <i className="icon-genius"></i>
                                </span>
                                <div className="feature-copy">
                                    <h3>{_i.get("features.services.two.h3")}</h3>
                                    <p>{_i.get("features.services.two.p")}</p>
                                </div>
                            </div>
                        </div>

                        
                        <div className="col-md-4 text-center">
                            <div className="feature-left">
                                <span className="icon">
                                    <i className="icon-paintbrush"></i>
                                </span>
                                <div className="feature-copy">
                                    <h3>{_i.get("features.services.three.h3")}</h3>
                                    <p>{_i.get("features.services.three.p")}</p>
                                </div>
                            </div>

                        </div>


                    </div>


                    <div className="row">
                     

                        <div className="col-md-4 text-center">
                            <div className="feature-left">
                                <span className="icon">
                                    <i className="icon-search"></i>
                                </span>
                                <div className="feature-copy">
                                    <h3>{_i.get("features.services.four.h3")}</h3>
                                    <p>{_i.get("features.services.four.p")}</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 text-center">
                            <div className="feature-left">
                                <span className="icon">
                                    <i className="icon-briefcase"></i>
                                </span>
                                <div className="feature-copy">
                                    <h3>{_i.get("features.services.five.h3")}</h3>
                                    <p>{_i.get("features.services.five.p")}</p>
                                </div>
                            </div>

                        </div>

                        <div className="col-md-4 text-center">
                            <div className="feature-left">
                                <span className="icon">
                                    <i className="icon-chat"></i>
                                </span>
                                <div className="feature-copy">
                                    <h3>{_i.get("features.services.six.h3")}</h3>
                                    <p>{_i.get("features.services.six.p")}</p>>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
};