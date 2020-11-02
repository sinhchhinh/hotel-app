import React from 'react';
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import {Link} from 'react-router-dom';
const error = () => {
    return (
        <Hero>
            <Banner title='404' subtitle="pagge not found">
                <Link to='/' className='btn-primary'>
                    return home
                </Link>
            </Banner>
        </Hero>
    );
}
export default error;