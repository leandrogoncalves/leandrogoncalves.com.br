import React from 'react';
import I18n from '../_services/i18n';

export default function Resume() {
    const _i = I18n.getTranslater();

    return (
        <div id="fh5co-resume" className="fh5co-bg-color">
            <div className="container">
                <div className="row animate-box">
                    <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
                        <h2>{_i.get("resume.h2")}</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 col-md-offset-0">
                        <ul className="timeline">
                            <li className="timeline-heading text-center animate-box">
                                <div><h3>{_i.get("resume.jobs.h3")}</h3></div>
                            </li>
                            <li className="animate-box timeline-unverted">
                                <div className="timeline-badge"><i className="icon-suitcase"></i></div>
                                <div className="timeline-panel">
                                    <div className="timeline-heading">
                                        <h3 className="timeline-title">
                                        {_i.get("resume.jobs.fde.h3")}
                                        </h3>
                                        <span className="company">
                                        {_i.get("resume.jobs.fde.span")}
                                        </span>
                                    </div>
                                    <div className="timeline-body">
                                    {_i.getHTML("resume.jobs.fde.content")}
                                    </div>
                                </div>
                            </li>
                            <li className="timeline-inverted animate-box">
                                <div className="timeline-badge"><i className="icon-suitcase"></i></div>
                                <div className="timeline-panel">
                                    <div className="timeline-heading">
                                        <h3 className="timeline-title">
                                        {_i.get("resume.jobs.interaktiv.h3")}
                                        </h3>
                                        <span className="company">
                                        {_i.get("resume.jobs.interaktiv.span")}
                                        </span>
                                    </div>
                                    <div className="timeline-body">
                                    {_i.getHTML("resume.jobs.interaktiv.content")}
                                    </div>
                                </div>
                            </li>
                            <li className="animate-box timeline-unverted">
                                <div className="timeline-badge"><i className="icon-suitcase"></i></div>
                                <div className="timeline-panel">
                                    <div className="timeline-heading">
                                        <h3 className="timeline-title">
                                        {_i.get("resume.jobs.knov.h3")}
                                        </h3>
                                        <span className="company">
                                        {_i.get("resume.jobs.knov.span")}
                                        </span>
                                    </div>
                                    <div className="timeline-body">
                                    {_i.getHTML("resume.jobs.knov.content")}
                                    </div>
                                </div>
                            </li>

                            <li className="timeline-inverted animate-box">
                                <div className="timeline-badge"><i className="icon-suitcase"></i></div>
                                <div className="timeline-panel">
                                    <div className="timeline-heading">
                                        <h3 className="timeline-title">
                                        {_i.get("resume.jobs.psychemedics.h3")}
                                        </h3>
                                        <span className="company">
                                        {_i.get("resume.jobs.psychemedics.span")}  
                                        </span>
                                    </div>
                                    <div className="timeline-body">
                                    {_i.getHTML("resume.jobs.psychemedics.content")}
                                    </div>
                                </div>
                            </li>

                            <li className="animate-box timeline-unverted">
                                <div className="timeline-badge"><i className="icon-suitcase"></i></div>
                                <div className="timeline-panel">
                                    <div className="timeline-heading">
                                        <h3 className="timeline-title">
                                        {_i.get("resume.jobs.nacaodesign1.h3")}
                                        </h3>
                                        <span className="company">
                                        {_i.get("resume.jobs.nacaodesign1.span")}  
                                        </span>
                                    </div>
                                    <div className="timeline-body">
                                    {_i.getHTML("resume.jobs.nacaodesign1.content")}
                                    </div>
                                </div>
                            </li>

                            <li className="timeline-inverted animate-box">
                                <div className="timeline-badge"><i className="icon-suitcase"></i></div>
                                <div className="timeline-panel">
                                    <div className="timeline-heading">
                                        <h3 className="timeline-title">
                                        {_i.get("resume.jobs.mds.h3")}
                                        </h3>
                                        <span className="company">
                                        {_i.get("resume.jobs.mds.span")}  
                                        </span>
                                    </div>
                                    <div className="timeline-body">
                                    {_i.getHTML("resume.jobs.mds.content")}
                                    </div>
                                </div>
                            </li>

                            <li className="animate-box timeline-unverted">
                                <div className="timeline-badge"><i className="icon-suitcase"></i></div>
                                <div className="timeline-panel">
                                    <div className="timeline-heading">
                                        <h3 className="timeline-title">
                                        {_i.get("resume.jobs.nacaodesign2.h3")}
                                        </h3>
                                        <span className="company">
                                        {_i.get("resume.jobs.nacaodesign2.span")} 
                                        </span>
                                    </div>
                                    <div className="timeline-body">
                                    {_i.getHTML("resume.jobs.nacaodesign2.content")}
                                    </div>
                                </div>
                            </li>

                            <br />
                            <li className="timeline-heading text-center animate-box">
                                <div><h3>{_i.get("resume.education.h3")}</h3></div>
                            </li>
                            <li className="timeline-inverted animate-box">
                                <div className="timeline-badge"><i className="icon-graduation-cap"></i></div>
                                <div className="timeline-panel">
                                    <div className="timeline-heading">
                                        <h3 className="timeline-title">
                                        {_i.get("resume.education.fiap.h3")}
                                        </h3>
                                        <span className="company">
                                        {_i.get("resume.education.fiap.span")}
                                        </span>
                                    </div>
                                    <div className="timeline-body">
                                    {_i.getHTML("resume.education.fiap.content")}
                                    </div>
                                </div>
                            </li>
                            <li className="animate-box timeline-unverted">
                                <div className="timeline-badge"><i className="icon-graduation-cap"></i></div>
                                <div className="timeline-panel">
                                    <div className="timeline-heading">
                                        <h3 className="timeline-title">
                                        {_i.get("resume.education.uninove.h3")}
                                        </h3>
                                        <span className="company">
                                        {_i.get("resume.education.uninove.span")}
                                        </span>
                                    </div>
                                    <div className="timeline-body">
                                    {_i.getHTML("resume.education.uninove.content")}
                                    </div>
                                </div>
                            </li>
                            <li className="timeline-inverted animate-box">
                                <div className="timeline-badge"><i className="icon-graduation-cap"></i></div>
                                <div className="timeline-panel">
                                    <div className="timeline-heading">
                                        <h3 className="timeline-title">
                                        {_i.get("resume.education.etec.h3")}
                                        </h3>
                                        <span className="company">
                                        {_i.get("resume.education.etec.span")}
                                        </span>
                                    </div>
                                    <div className="timeline-body">
                                    {_i.getHTML("resume.education.etec.content")}
                                    </div>
                                </div>
                            </li>
                            <li className="animate-box timeline-unverted">
                                <div className="timeline-badge"><i className="icon-graduation-cap"></i></div>
                                <div className="timeline-panel">
                                    <div className="timeline-heading">
                                        <h3 className="timeline-title">
                                        {_i.get("resume.education.college.h3")}
                                        </h3>
                                        <span className="company">
                                        {_i.get("resume.education.college.span")}
                                        </span>
                                    </div>
                                    <div className="timeline-body">
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
  )
};