import React, { useEffect, useState } from 'react';
import '../Containers/App.scss';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

function CareerGuidanceMenu () {

    return(
        <div className='primaryBodyOverview'>
            <a href='' className='primaryBodyOverviewTitle' dataIsActive='true'>Overview <span><ArrowForwardIcon/></span></a>
            <a href='' className='primaryBodyOverviewPara1'>I want to get better<br/> at my current job<span><ArrowForwardIcon/></span></a>
        </div>
    )
}
export default CareerGuidanceMenu;