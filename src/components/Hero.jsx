import react from 'react';

//'children' refer to whatever that will be place inner
//the Hero function 
function Hero ({children, hero}) {
    return (
        <header  className={hero}>{children}</header>
    )
}
Hero.defaultProps = {
    hero: "defaultHero"
};
export default Hero;