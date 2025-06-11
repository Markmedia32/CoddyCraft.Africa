import './Services.css';

function Services(){
    return (
        <div className='services-container'>
            <h1>Our Services</h1>
            <div className='services-grid'>

                <div className='service-card'>
                    <h3>Website Development</h3>
                    <p>We build fast, secure and modern websites that convert visitors into clients.</p>
                </div>

                <div className='service-card'>
                    <h3>Mobile App Development</h3>
                    <p>High-performance apps for android and IOS tailored to your needs.</p>
                </div>

                <div className='service-card'>
                    <h3>UI/UX Design</h3>
                    <p>Design that speaks to users and delivers exceptional digital experiences</p>
                </div>

                <div className='service-card'>
                    <h3>IT consulting</h3>
                    <p>Expert Advice to help streamline your tech infrastructure and business Processes.</p>
                </div>

            </div>
        </div>
    );
}

export default Services;