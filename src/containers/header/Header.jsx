import peopleImg from '../../assets/people.png';
import headerImg from '../../assets/ai.png';

import './header.css'

const Header = () => {
    return ( 
        <div className='gpt3__header-container '>
            <div className="gpt3__header-groupA">
                <h1 className="gradient-text">
                    Let's Build Something amazing with GPT-3 OpenAI
                </h1>
                <p>
                    Yet bed any of travelling assistance indulgence unpleasing. Not thoughts all exercising blessings.Indulgence way everything joy alternation boisterous the attachment. Party we years to order allow asked of.
                </p>
                <div className='gpt3__header-subscribe'>
                        <input 
                            type="text" 
                            placeholder='Your Email Address...'
                         />
                         <button type='submit'>Get Started</button>
                </div>
                <div className='gpt3__header-people'>
                    <img src={peopleImg} alt="people" />
                    <p>1,600 people requested access visit in last 24 hours</p>
                </div>
            </div>
            <div className="gpt3__header-img">
                <img src={headerImg} alt="header-img" />
            </div>
        </div>
     );
}
 
export default Header;