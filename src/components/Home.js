import React from 'react';
import screenshot from '../assets/screenshot.JPG'

function Home() {
    return (
        <div className="row mt-5">
        <h3 className="col-12 col-sm-6 align-self-center">
        Get insights on your spending, <br/>
        set goals, and increase<br/>
        your savings.<br/><br/>
        <span className="text-success">Get started today. It's free.</span>
        </h3>
        <img alt="screenshot" className="img-fluid mx-auto d-block mb-5 w-50 col-12 col-sm-6" src={screenshot}/>
        </div>
    )
}

export default Home;
