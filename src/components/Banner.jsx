import React  from 'react';

///Pasing three props
const banner = ({children, title, subtitle}) => {
    return (
        <div className="banner">
            <h1>{title}</h1>
            <p>{subtitle}</p>
            {children}
        </div>
    );
}

export default banner;
