


import HeadText from "../head/HeadText";
import bgimg from "../../images/headimage.jpg"

function Head() {
    return (
        <>
            <section className="header" style={{ backgroundImage: `url(${bgimg})` }}>
                
                <HeadText />
            </section>

        </>
    )
}



export default Head; 