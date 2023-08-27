import './features.css'
import { Feature } from '../../Components';

const features = [
    {
        "title":"Improving the distrusts instantly", 
        "body":"From the fine john he gave rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded"
    },
    {
        "title":"Become the tended active",
        "body":"From the fine john he gave rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded"
    },
    {
        "title":"Message or am Nothing",
        "body":"From the fine john he gave rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded"
    },
    {
        "title":"Really boy law county",
        "body":"From the fine john he gave rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded"
    }
]

const Features = () => {
    return ( 
        <div className='gpt3__features section__padding'>
            <div className="gpt3__features-content">
                <h1 className='gradient-text'>The future is now and you just need to realize it. Step into the Future today & make it happen.</h1>
                <p>Request Early Access To Get Started</p>
            </div>

            <div className="gpt3__features-container">
                {
                    features.map((feature, indexOf)=>(
                        <Feature heading={feature.title} text={feature.body} key={feature.title + indexOf}/>
                    ))
                }
            </div>
        </div>
     );
}
 
export default Features;