import React from 'react';
import './App.scss';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

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
                        <a href='' className='primaryBodyTitleLearn' dataIsActive='false' >I want <br/> <span>To learn</span></a>
                        <a href='' className='primaryBodyTitleEntrepreneur' dataIsActive='false' >Grow as an <br/> <span>Entrepreneur</span></a>
                    </div>
                    <div className='primaryBodyOverview'>
                        <a href='' className='primaryBodyOverviewTitle' dataIsActive='true'>Overview <ArrowForwardIcon/></a>
                        <a href='' className='primaryBodyOverviewPara1'>I want to get better<br/> at my current job<span>@</span></a>
                        <a href='' className='primaryBodyOverviewPara2'>I want to know what<br/> I’m good at<span>@</span></a>
                        <a href='' className='primaryBodyOverviewPara3'>I want to find a job<br/> I’m good at<span>@</span></a>
                    </div>
                    <div className='primaryBodyFooter'>
                        <div className='primaryBodyFooterContent'>
                            <div className='primaryBodyFooterContentTitle'>
                                <a href=''>About Us</a>
                                <a href=''>Courses</a>
                                <a href=''>YouLead Partners</a>
                                <a href=''>Blog</a>
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