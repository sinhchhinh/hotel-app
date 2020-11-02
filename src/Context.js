import React, { Component } from 'react';
import items from './data'
const RoomContext = React.createContext();

// {this.props.children}  accessingg the children
// ... copy all the property we have in the state object
class RoomProvider extends Component {
    state = { 
        rooms: [],
        sortedRooms: [],
        featuredRooms: [],
        loading : true,
        type: 'all', //default type = all
        capacity : 1,
        price : 0,
        minPrice : 0,
        maxPrice : 0,
        minSize : 0,
        maxSize : 0,
        breakfast: false,
        pets : false
     };

     //run getData when component will mount
   
    
    //Update value when compoment didmount
    componentDidMount () {
        let rooms = this.formatData(items);
        let featuredRooms = rooms.filter(room => 
            room.featured === true);
        
            let maxPrice = Math.max(...rooms.map(item => item.price));
            let maxSize = Math.max(...rooms.map(item => item.size));



        //Changing values in the state 
        this.setState({
            rooms, 
            featuredRooms,
            sortedRooms:rooms,
            loading : false,
            price:maxPrice,
            maxPrice: maxPrice,
            maxSize // = maxSize :maxSize
        });
    }

    formatData (items) {
        let tempItems = items.map(item => {
            let id = item.sys.id
            let images = item.fields.images.map (image => 
                image.fields.file.url);
            
            let room = { ...item.fields, images, id};
            return room;
        });
        return tempItems;
    }
    //Will make getRoom aviable in context for future access from SingleRoom.jsx
    getRoom = (slug) => {
        let tempRooms = [ ...this.state.rooms];
        //Get the room that slug matches that slug parameter
        //find will find the first match and its is an object 
        const room = tempRooms.find((room)  => 
            room.slug === slug );
        return room;
    }

    //handleChange function
    handleChange = event => {
        const target = event.target
        const value = target.type === "checkbox" ? target.checked
        : target.value //value is what ever we selected
        const name = event.target.name
       
        //Dynamically checking the name evertime there is changes
        this.setState ( {
            [name]:value 
        }, this.filterRooms)

    };

    filterRooms = () => {
        //Destruture state values 
        let {
            rooms, 
            type,
            capacity, 
            price, 
            minSize,
             maxSize, 
             breakfast,
             pets
        } = this.state;

        //all the rooms 
        let tempRooms = [...rooms];
        
        //transform values 
        capacity = parseInt(capacity);
        price = parseInt(price);
        //filter by type
        if (type !== 'all') {
            //fillter temp room
            tempRooms = tempRooms.filter(
                room => room.type === type
            )
        }
        //filter by capacity
        if (capacity !== 1){
            tempRooms = tempRooms.filter(
                room => room.capacity >= capacity
            )
        }

         //Filter rooms size
         tempRooms = tempRooms.filter(room => 
         room.size >= minSize && room.size < maxSize);

        //Filter by breakfast
        if (breakfast) {
            tempRooms = tempRooms.filter(room => room.breakfast
                === true);
        }
        //Filter by pets
        if (pets) {
            tempRooms = tempRooms.filter(room => room.pets
                === true);
        }

         //filter by price 
         //if the room.price is less than the current price
         tempRooms = tempRooms.filter(room => 
            room.price <= price);

        //Change state
        this.setState ({
            sortedRooms: tempRooms
        })
       
    }

     render() { 
        return ( 
        //Passing an object will need two set of {{}}
        //getRoom function is now can be access using context
        <RoomContext.Provider value={{
            ...this.state, 
            getRoom : this.getRoom, 
            handleChange : this.handleChange}}>
            
            {this.props.children} 
        </RoomContext.Provider> );
    }
}

const RoomConsumer = RoomContext.Consumer;

//hirechical order component
export function withRoomConsumer (Component) {
    //the function will take in props
    return function ConsumerWrapper (props) {
        return (
            <RoomConsumer>
                {value => <Component {...props} context={value}/> }
            </RoomConsumer>
        );
    }
}
export  {RoomProvider, RoomConsumer, RoomContext};