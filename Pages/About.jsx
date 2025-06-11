import './about.css';
function About(){
    return(
   <div className="about-container">
    <h1>About CoddyCraft Africa</h1>
    <p>CoddyCraft Africa is a forward-thinking tech company providing innovative and custom digital solutions across the continent.
        Our team of passionate developers, designers and consulants work to bring your vision to life using cutting-edge technology.
    </p>

    <div className="mission-vision">
        <div className="card">
            <h2>Our Mission</h2>
            <p>To empower African businesses through smart, accessible and scalable tech solutions.</p>
        </div>

        <div className="card">
            <h2>Our Vision</h2>
            <p> To be a leading digital transformation partner in Africa by delivering excellence in technology.</p>
        </div>
    </div>

   </div>
    );
}
export default About;