import React from 'react';
import {useContext} from 'react'
import {RoomContext} from '../Context' ///another way of accessing context data 
import Title from '../components/Title';

//get all unique type value
const getUnique = (items, value) => {
    return [...new Set(items.map( item => item[value]))] ;
    //Set only accept new values, using dynamic property 
    //Set will only add the item value that is unique into its list
} 
const RooomsFilter = ({rooms}) => {
    const context = useContext(RoomContext);
    const {
        handleChange,
        type, 
        capacity,
        price,
        minPrice,
        maxPrice,
        minSize,
        maxSize,
        breakfast,
        pets
    } = context;
    
    //get unique types
    let types = getUnique(rooms, 'type');

    //add all types
    types = ['all', ...types];

    //Map to jsx
    types = types.map ((item, index) => {
        return <option value={item} key={index}>
            {item}
        </option>
    });

    let people = getUnique(rooms,'capacity' );
    people = people.map ((item, idx) => {
        return <option value={item} key={idx}>{item}</option>
    } )

    return (
        <section className="filter-container">
           <Title title="search rooms"/>
           <form className="filter-form">
               {/* select type using type value in context*/}
                <div className="form-group">
                    <label htmlFor="type">room type</label>
                    <select name="type" 
                    id="type" 
                    value={type} 
                    className="form-control" 
                    onChange={handleChange} >
                        {types}
                    </select>                   
                </div>

                {/* guests*/}
                <div className="form-group">
                    <label htmlFor="capacity">Guests</label>
                    <select name="capacity" 
                    id="capacity" 
                    value={capacity} 
                    className="form-control" 
                    onChange={handleChange} >
                        {people}
                    </select>                   
                </div>
               {/*End of select type */}
            
                {/*room price  'name' will be used to match 
                the name in state
                value - the price get currently from state */}
                <div className="form-group">
                    <label htmlFor="price">
                        room price ${price}
                    </label>
                    <input type="range" 
                    name="price" 
                    min={minPrice}
                    max={maxPrice}
                    id = "price"
                    value={price}
                    onChange={handleChange}
                    className="form-control" />
                </div>
                {/* end of room price */}

                {/* size */}
                <div className="form-group">
                    <label htmlFor="size">
                        room size
                    </label>
                    <div className="size-inputs">
                        <input type="number" name="minSize" id="size" 
                        value={minSize} 
                        onChange={handleChange}
                        className="size-input"/>

                        <input type="number" name="maxSize" id="size" 
                        value={maxSize} 
                        onChange={handleChange}
                        className="size-input"/>
                    </div>
                </div>
                {/* end of size */}
                {/* etras */}
                    <div className="form-group">
                        <div className="single-extra">
                            <input type="checkbox" name="breakfast" 
                            id="breakfast" checked={breakfast} 
                            onChange={handleChange}/>
                            <label htmlFor="breakfast"> breakfast</label>
                        </div>
                    </div>
                {/* end of extra */}
                 {/* pets check box doesn't use value attribute it use the check
                 attributes   */}
                 <div className="form-group">
                        <div className="single-extra">
                            <input type="checkbox" name="pets" 
                            id="pets" checked={pets} 
                            onChange={handleChange}/>
                            <label htmlFor="pets"> pets</label>
                        </div>
                    </div>
                {/* end of pets */}


           </form>
        </section>
    );
}
export default RooomsFilter;