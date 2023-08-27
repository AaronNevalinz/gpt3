import './possibility.css'
import possibilityImg  from '../../assets/possibility.png';

const Possibility = () => {
    return ( 
        <div className='gpt3__possibility section__padding'>
            <div className="gpt3__possibility-image">
                <img src={possibilityImg} alt="Possibility" />
            </div>
            <div className="gpt3__possibility-content">
                <h4>Request Early Access to Get Started</h4>
                <h1 className='gradient-text'>The possibilities are beyond your imagination</h1>
                <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessings. Indulgence way everything joy alternation boisterous the attachment. Party we years to order allow asked of.</p>
                <h4>Request Early Access to Get Started</h4>
            </div>
        </div>
     );
}
 
export default Possibility;