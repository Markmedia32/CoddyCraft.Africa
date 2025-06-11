import './Home.css';

function Home(){
    return (
        <div className="home-container">
            <section className="hero">
                <h1>Welcome to Coddy Craft Africa!</h1>
                <p>Your Trusted Partner in creative Solutions and innvoation. </p>
                <button className="hero-btn">Get Started</button>
            </section>

            <section className="services-overview">
                <h2>Our Services</h2>
                <div className="cards-container">

                    <div className="service-card">
                        <h3>Web Development</h3>
                        <p>Building modern, responsive websites tailored to your needs.</p>
                    </div>

                    <div className="service-card">
                        <h3>UI/UX Design</h3>
                        <p>Designing intuitive and engaging user experiences.</p>
                    </div>

                    <div className="service-card">
                        <h3>Consulting</h3>
                        <p>Expert advice to help your business grow and succeed.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;