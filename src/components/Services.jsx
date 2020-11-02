import React, { Component } from 'react';
import Title from './Title';
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa'
class Services extends Component {
    state = { 
        services: [
            {
                icon:<FaCocktail/>,
                title:"free cocktails",
                info:'Learuses ting, React context API for state management, Contentful headless CMS for data management, and Netlify to host the application.'              
            },
            {
                icon:<FaHiking/>,
                title:"Mountain Hiking",
                info:'Learuses ting, React context API for state management, Contentful headless CMS for data management, and Netlify to host the application.'              
            },
            {
                icon:<FaShuttleVan/>,
                title:"Free Shuttle",
                info:'Learuses ting, React context API for state management, Contentful headless CMS for data management, and Netlify to host the application.'              
            },
            {
                icon:<FaBeer/>,
                title:"Draft Beer",
                info:'Learuses ting, React context API for state management, Contentful headless CMS for data management, and Netlify to host the application.'              
            }
        ]
     }
    render() { 
        return ( 
        <section className="services">
            <Title title='services'/>
            <div className='services-center'>
                {this.state.services.map((item, idx) => 
                    {
                        return <article key={idx} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
            </div>
        </section> );
    }
}
 
export default Services; 