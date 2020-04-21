import React from 'react';
import I18n from '../_services/i18n';

export default function Skills() {
    const _i = I18n.getTranslater();

    return (
        <div id="fh5co-skills" className="animate-box">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
                        <h2>{_i.get("skills.h2")}</h2>
                    </div>
                </div>
                <div className="row row-pb-md">

                    <div className="col-md-3 col-sm-6 col-xs-12 text-center">
                        <div className="chart" data-percent="92"><span><strong>PHP</strong>92%</span></div>
                    </div>

                    <div className="col-md-3 col-sm-6 col-xs-12 text-center">
                        <div className="chart" data-percent="70"><span><strong>C#</strong>70%</span></div>
                    </div>

                    <div className="col-md-3 col-sm-6 col-xs-12 text-center">
                        <div className="chart" data-percent="85"><span><strong>React</strong>85%</span></div>
                    </div>

                    <div className="col-md-3 col-sm-6 col-xs-12 text-center">
                        <div className="chart" data-percent="74"><span><strong>React Native</strong>74%</span></div>
                    </div>

                    <div className="col-md-3 col-sm-6 col-xs-12 text-center">
                        <div className="chart" data-percent="95"><span><strong>HTML5</strong>95%</span></div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-12 text-center">
                        <div className="chart" data-percent="93"><span><strong>CSS3</strong>93%</span></div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-12 text-center">
                        <div className="chart" data-percent="90"><span><strong>jQuery</strong>90%</span></div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-12 text-center">
                        <div className="chart" data-percent="88"><span><strong>NodeJs</strong>80%</span></div>
                    </div>

                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="progress-wrap">
                            <h3><span className="name-left">HTML5/CSS3/Javascript</span><span className="value-right">95%</span></h3>
                            <div className="progress">
                            <div className="progress-bar progress-bar-1 progress-bar-striped active" role="progressbar"
                            aria-valuenow="95" aria-valuemin="0" aria-valuemax="100" style={{width:'95%'}}>
                            </div>
                            </div>
                        </div>
                        <div className="progress-wrap">
                            <h3><span className="name-left">Laravel/Synfony/WordPress</span><span className="value-right">88%</span></h3>
                            <div className="progress">
                            <div className="progress-bar progress-bar-2 progress-bar-striped active" role="progressbar"
                            aria-valuenow="88" aria-valuemin="0" aria-valuemax="100" style={{width:'88%'}}>
                            </div>
                            </div>
                        </div>
                        <div className="progress-wrap">
                            <h3><span className="name-left">PHP</span><span className="value-right">90%</span></h3>
                            <div className="progress">
                            <div className="progress-bar progress-bar-3 progress-bar-striped active" role="progressbar"
                            aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{width:'90%'}}>
                            </div>
                            </div>
                        </div>
                        <div className="progress-wrap">
                            <h3><span className="name-left">C#</span><span className="value-right">92%</span></h3>
                            <div className="progress">
                            <div className="progress-bar progress-bar-4 progress-bar-striped active" role="progressbar"
                            aria-valuenow="92" aria-valuemin="0" aria-valuemax="100" style={{width:'92%'}}>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="progress-wrap">
                            <h3><span className="name-left">React/React Native</span><span className="value-right">78%</span></h3>
                            <div className="progress">
                            <div className="progress-bar progress-bar-5 progress-bar-striped active" role="progressbar"
                            aria-valuenow="78" aria-valuemin="0" aria-valuemax="100" style={{width:'78%'}}>
                            </div>
                            </div>
                        </div>
                        <div className="progress-wrap">
                            <h3><span className="name-left">Android/IOS</span><span className="value-right">65%</span></h3>
                            <div className="progress">
                            <div className="progress-bar progress-bar-striped active" role="progressbar"
                            aria-valuenow="65" aria-valuemin="0" aria-valuemax="100" style={{width:'65%'}}>
                            </div>
                            </div>
                        </div>
                        <div className="progress-wrap">
                            <h3><span className="name-left">Python</span><span className="value-right">55%</span></h3>
                            <div className="progress">
                            <div className="progress-bar progress-bar-1 progress-bar-striped active" role="progressbar"
                            aria-valuenow="55" aria-valuemin="0" aria-valuemax="100" style={{width:'55%'}}>
                            </div>
                            </div>
                        </div>
                        <div className="progress-wrap">
                            <h3><span className="name-left">jQuery</span><span className="value-right">75%</span></h3>
                            <div className="progress">
                            <div className="progress-bar progress-bar-3 progress-bar-striped active" role="progressbar"
                            aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width:'75%'}}>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};