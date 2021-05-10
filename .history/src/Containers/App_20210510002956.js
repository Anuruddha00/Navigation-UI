import React, { useEffect, useState } from 'react';
import './App.scss';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import CareerGuidanceMenu from '../Components/CareerGuidanceMenu';
import ToLearnMenu from '../Components/ToLearnMenu';
import EntrepreneurMenu from '../Components/EntrepreneurMenu';

function App () {

    const menu = {
        careerGuidance: 0,
        toLearn: 1,
        entrepreneur: 2
    };

    const [selectedMenu, setSelectedMenu] = useState(0);

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
                        <a className='primaryBodyTitleCareer' dataIsActive={`${selectedMenu==0}`} onClick={() => setSelectedMenu(0)} >I Want <br/> <span>Career Guidance</span></a> 
                        <a className='primaryBodyTitleLearn' dataIsActive={`${selectedMenu==1}`} onClick={() => setSelectedMenu(1)} >I want <br/> <span>To learn</span></a>
                        <a className='primaryBodyTitleEntrepreneur' dataIsActive={`${selectedMenu==2}`} onClick={() => setSelectedMenu(2)} >Grow as an <br/> <span>Entrepreneur</span></a>
                    </div>
                    {
                        selectedMenu==0 ? (
                            <CareerGuidanceMenu />
                        ) : selectedMenu==1 ? (
                            <ToLearnMenu />
                        ) : (
                            <EntrepreneurMenu />
                        )
                    }
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
                                <div className='primaryBodyFooterContentIcons'>
                                    <a target='_blank' href=''><FacebookIcon /></a> 
                                    <a target='_blank' href=''><TwitterIcon/></a>
                                    <a target='_blank' href=''><InstagramIcon/></a> 
                                    <a target='_blank' href=''><YouTubeIcon/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default App;