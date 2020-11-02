import React from 'react';
import RoomsFilter from './RoomsFilter'
import RoomsList from './RoomsList';
import {withRoomConsumer} from '../Context'
import Loading from './Loading';

function RoomContainer ({context}){
    const {
            loading, 
            sortedRooms,
            rooms
        } = context
        if (loading) {
            return <Loading/>;
        }
            return  (
                <div> 
                <RoomsFilter rooms={rooms}/>
                <RoomsList rooms={sortedRooms}/> 
                </div>
            );
}

//Wrap container in the withRoomConsumer
export default withRoomConsumer(RoomContainer);


//Without using the hireachy function with content 
// import React from 'react';
// import RoomsFilter from './RoomsFilter'
// import RoomsList from './RoomsList';
// import {RoomConsumer} from '../Context'
// import Loading from './Loading';

// const roomsContainer = () => {
//     return ( 
//     <>
//     <RoomConsumer>
//     {
//         //This value is fromm Context.js given by RoomContext.Provider
//         //RoomsList store stored rooms
//         (value) => {
//             const {
//                 loading, 
//                 sortedRooms,
//                 rooms
//             } = value
//         console.log(loading);
//         if (loading) {
//             return <Loading/>;
//         }
//             return  (
//                 <div> Rooms roomsContainer
//                 <RoomsFilter rooms={rooms}/>
//                 <RoomsList rooms={sortedRooms}/> 
//                 </div>
//             );
//         }
//     }
//     </RoomConsumer>
//     </>
//     );
// }
// export default roomsContainer;