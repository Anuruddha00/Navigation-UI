import React from 'react';
import './App.scss';

function App () {
    return(
        <div className='container'>
            <div className='primary'>
                <nav className='primaryNavbar'>
                    <ul className='primaryNavbarLanguage'>
                        <li className='primaryNavbarLanguageEnglish'>English</li>
                        <li className='primaryNavbarLanguageSinhala'>සිංහල</li>
                        <li>தமிழ்</li>
                    </ul>
                    <div className='primaryNavbarSign'>
                        <button className='primaryNavbarSignIn'>Sign In</button>
                        <button className='primaryNavbarSignClose'>X</button>
                    </div>
                </nav>
                <div className='primaryBody'>
                    <div className='primaryBodyTitle'>
                        <a href='' className='primaryBodyTitleCareer' dataIsActive='true' >I Want <br/> <span>Career Guidance</span></a>
                        <p className='primaryBodyTitleLearn' dataIsActive='false' >I want <br/> <span>To learn</span></p>
                        <p className='primaryBodyTitleEntrepreneur' dataIsActive='false' >Grow as an <br/> <span>Entrepreneur</span></p>
                    </div>
                    <div className='primaryBodyOverview'>
                        <h3 className='primaryBodyOverviewTitle' dataIsActive='true'>Overview <span>@</span></h3>
                        <p className='primaryBodyOverviewPara1'>I want to get better<br/> at my current job<span>@</span></p>
                        <p className='primaryBodyOverviewPara2'>I want to know what<br/> I’m good at<span>@</span></p>
                        <p className='primaryBodyOverviewPara3'>I want to find a job<br/> I’m good at<span>@</span></p>
                    </div>
                    <div className='primaryBodyFooter'>
                        <div className='primaryBodyFooterContent'>
                            <div className='primaryBodyFooterContentTitle'>
                                <p>About Us</p>
                                <p>Courses</p>
                                <p>YouLead Partners</p>
                                <p>Blog</p>
                            </div>
                            <div className='primaryBodyFooterContentFollow'>
                                <p>Follow us on</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default App;