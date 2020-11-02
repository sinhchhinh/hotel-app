import React, { Component } from 'react';
import defaultBcg from '../images/room-1.jpeg';
import Hero from './Hero';
import Banner from './Banner';
import {Link} from 'react-router-dom'
import {RoomContext} from "../Context";
import StyledHero from "../components/StyledHero";
import StyleHero from '../components/StyledHero';

class SingleRoom extends Component {
    constructor(props){
        super(props);
        this.state = {
            slug : this.props.match.params.slug , 
            defaultBcg
        };
    }
    static contextType = RoomContext;


   
    render() { 
        let { getRoom } = this.context;
        const room = getRoom(this.state.slug);
        if (!room)
        {
            return  (<div className="error">
                <h3>No room found...</h3>
                <Link to='/rooms' className="btn-primary">
                    back to rooms
                </Link>
            </div> 
            );
        }
        const {
            name,
            description, 
            capacity, 
            size,
            price, 
            extras,
            breakfast,
            pets, 
            images} = room
        
            ///grabing item out of 
            //the imagges array, doing array destructring using the rest operator
            //const [mainImg, ...defaultImg] = images;


        return (  
                <React.Fragment>
                <StyleHero img={images[0] || this.state.defaultBcg } hero='roomsHero'>
                    <Banner title={`${name} room`}>
                    <Link to='/rooms' className='btn-primary'> 
                        back to rooms
                    </Link>
                    </Banner>
                </StyleHero>
                <section className="single-room">
                    <div className="single-room-images">
                        {images.map ((item, index) => {
                           return <img key={index} src={item} alt={name} />
                        })}
                    </div>
                    <div className="single-room-info">
                        <article className="desc">
                            <h3>details</h3>
                            <p>{description}</p>
                        </article>
                        <article className="info">
                            <h3>info</h3>
                            <h6>price: $ {price}</h6>
                            <h6>size: $ {size} SQFT</h6>
                            <h6> max capacity : {""}
                            {   capacity > 1 ? `${capacity} people` 
                                :`${capacity} person` }
                            </h6>

                            <h6> {pets ? "pets allowed" : "no pets allowed"} </h6>
                            <h6> {breakfast && "free breakfast included"} </h6>
                        </article>
                    </div>
                </section>
                <section className="room-extra">
                    <h6> extras</h6>
                    <ul className="extras">
                        {extras.map((item, index) => 
                        {
                            return <li key={index}> - {item}</li>
                            
                        })}
                    </ul>
                </section>
                </React.Fragment>  
         );
    }
}
 
export default SingleRoom;