import './footer.css';
import logo from '../../assets/logo.svg'


const Footer = () => {
    return ( 
        <div className='gpt3__footer' id='footer'>
            <div className='section__padding'>
                
                <div className="gpt3__footer-heading">
                    <h1 className='gradient-text'>Do you want to step in the future before others</h1>
                    <button>Request Early Access</button>
                </div>
               
                <div className="gpt3__footer-container-links">
                    <div className="gpt3__footer-container-links-logo">
                        <img src={logo} alt="" />
                        <p>Crechterwoord k12 182 DK Alknjkcb</p>
                    </div>
                    <div className='gpt3__footer-links'>
                        <h4>Links</h4>
                        <p><a href="/">Overons</a></p>
                        <p><a href="/">Social Media</a></p>
                        <p><a href="/">Counters</a></p>
                        <p><a href="/">Contact</a></p>
                    </div>
                    <div className='gpt3__footer-links'>
                        <h4>Company</h4>
                        <p><a href="/">Terms and Conditions</a></p>
                        <p><a href="/">Privacy Policy</a></p>
                        <p><a href="/">Contact</a></p>
                    </div>
                    <div className='gpt3__footer-links'>
                        <h4>Get in touch</h4>
                        <p><a href="/">Crechterwoord k12 182 DK Alknjkcb</a></p>
                        <p><a href="/">085-132567</a></p>
                        <p><a href="/">info@payme.net</a></p>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Footer;