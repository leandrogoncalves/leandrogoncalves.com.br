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
                        <div className="chart" data-percent="90"><span><strong>Javascript</strong>90%</span></div>
                    </div>

                    <div className="col-md-3 col-sm-6 col-xs-12 text-center">
                        <div className="chart" data-percent="85"><span><strong>React</strong>85%</span></div>
                    </div>

                    <div className="col-md-3 col-sm-6 col-xs-12 text-center">
                        <div className="chart" data-percent="74"><span><strong>React Native</strong>74%</span></div>
                    </div>

                    <div className="col-md-3 col-sm-6 col-xs-12 text-center">
                        <div className="chart" data-percent="95"><span><strong>HTML5/CSS3</strong>95%</span></div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-12 text-center">
                        <div className="chart" data-percent="85"><span><strong>Chatbot</strong>85%</span></div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-12 text-center">
                        <div className="chart" data-percent="90"><span><strong>Python</strong>90%</span></div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-12 text-center">
                        <div className="chart" data-percent="80"><span><strong>NodeJs</strong>80%</span></div>
                    </div>

                    <div className="col-md-3 col-sm-6 col-xs-12 text-center">
                        <div className="chart" data-percent="98"><span><strong>Solid</strong>98%</span></div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-12 text-center">
                        <div className="chart" data-percent="99"><span><strong>Clean Code</strong>99%</span></div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-12 text-center">
                        <div className="chart" data-percent="92"><span><strong>AWS Cloud</strong>92%</span></div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-12 text-center">
                        <div className="chart" data-percent="87"><span><strong>Desing Patterns</strong>87%</span></div>
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
                            <h3><span className="name-left">Laravel/Synfony/WordPress</span><span className="value-right">98%</span></h3>
                            <div className="progress">
                            <div className="progress-bar progress-bar-2 progress-bar-striped active" role="progressbar"
                            aria-valuenow="88" aria-valuemin="0" aria-valuemax="100" style={{width:'98%'}}>
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
                            <h3><span className="name-left">Java/Go Lang</span><span className="value-right">75%</span></h3>
                            <div className="progress">
                            <div className="progress-bar progress-bar-4 progress-bar-striped active" role="progressbar"
                            aria-valuenow="92" aria-valuemin="0" aria-valuemax="100" style={{width:'75%'}}>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="progress-wrap">
                            <h3><span className="name-left">ReactJs / React Native</span><span className="value-right">78%</span></h3>
                            <div className="progress">
                            <div className="progress-bar progress-bar-5 progress-bar-striped active" role="progressbar"
                            aria-valuenow="78" aria-valuemin="0" aria-valuemax="100" style={{width:'78%'}}>
                            </div>
                            </div>
                        </div>
                        <div className="progress-wrap">
                            <h3><span className="name-left">Android / IOS</span><span className="value-right">65%</span></h3>
                            <div className="progress">
                            <div className="progress-bar progress-bar-striped active" role="progressbar"
                            aria-valuenow="65" aria-valuemin="0" aria-valuemax="100" style={{width:'65%'}}>
                            </div>
                            </div>
                        </div>
                        <div className="progress-wrap">
                            <h3><span className="name-left">Python</span><span className="value-right">70%</span></h3>
                            <div className="progress">
                            <div className="progress-bar progress-bar-1 progress-bar-striped active" role="progressbar"
                            aria-valuenow="55" aria-valuemin="0" aria-valuemax="100" style={{width:'70%'}}>
                            </div>
                            </div>
                        </div>
                        <div className="progress-wrap">
                            <h3><span className="name-left">VueJs</span><span className="value-right">75%</span></h3>
                            <div className="progress">
                            <div className="progress-bar progress-bar-3 progress-bar-striped active" role="progressbar"
                            aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width:'75%'}}>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="progress-wrap">
                            <h3><span className="name-left">Apache Kafka / SQS</span><span className="value-right">78%</span></h3>
                            <div className="progress">
                            <div className="progress-bar progress-bar-5 progress-bar-striped active" role="progressbar"
                            aria-valuenow="78" aria-valuemin="0" aria-valuemax="100" style={{width:'78%'}}>
                            </div>
                            </div>
                        </div>
                        <div className="progress-wrap">
                            <h3><span className="name-left">Open Search</span><span className="value-right">65%</span></h3>
                            <div className="progress">
                            <div className="progress-bar progress-bar-striped active" role="progressbar"
                            aria-valuenow="65" aria-valuemin="0" aria-valuemax="100" style={{width:'65%'}}>
                            </div>
                            </div>
                        </div>
                        <div className="progress-wrap">
                            <h3><span className="name-left">AWS / GCP</span><span className="value-right">55%</span></h3>
                            <div className="progress">
                            <div className="progress-bar progress-bar-1 progress-bar-striped active" role="progressbar"
                            aria-valuenow="55" aria-valuemin="0" aria-valuemax="100" style={{width:'55%'}}>
                            </div>
                            </div>
                        </div>
                        <div className="progress-wrap">
                            <h3><span className="name-left">Dynatrace / New Relic</span><span className="value-right">75%</span></h3>
                            <div className="progress">
                            <div className="progress-bar progress-bar-3 progress-bar-striped active" role="progressbar"
                            aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width:'75%'}}>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="progress-wrap">
                            <h3><span className="name-left">MongoDB</span><span className="value-right">75%</span></h3>
                            <div className="progress">
                            <div className="progress-bar progress-bar-5 progress-bar-striped active" role="progressbar"
                            aria-valuenow="78" aria-valuemin="0" aria-valuemax="100" style={{width:'75%'}}>
                            </div>
                            </div>
                        </div>
                        <div className="progress-wrap">
                            <h3><span className="name-left">Mysql</span><span className="value-right">85%</span></h3>
                            <div className="progress">
                            <div className="progress-bar progress-bar-striped active" role="progressbar"
                            aria-valuenow="65" aria-valuemin="0" aria-valuemax="100" style={{width:'85%'}}>
                            </div>
                            </div>
                        </div>
                        <div className="progress-wrap">
                            <h3><span className="name-left">Kubernetes</span><span className="value-right">55%</span></h3>
                            <div className="progress">
                            <div className="progress-bar progress-bar-1 progress-bar-striped active" role="progressbar"
                            aria-valuenow="55" aria-valuemin="0" aria-valuemax="100" style={{width:'55%'}}>
                            </div>
                            </div>
                        </div>
                        <div className="progress-wrap">
                            <h3><span className="name-left">AI / ChatGPT</span><span className="value-right">65%</span></h3>
                            <div className="progress">
                            <div className="progress-bar progress-bar-3 progress-bar-striped active" role="progressbar"
                            aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width:'65%'}}>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};