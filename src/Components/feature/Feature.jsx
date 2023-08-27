import './feature.css'


const Feature = ({heading, text}) => {
    return ( 
        <div className='gpt3__feature-container'>
            <div className='gpt3__feature-content'>
                <div className="gpt3__feature-heading">
                    <div className='gpt3__feature-bar'/>
                    <h1>{heading}</h1>
                </div>
                <div className='gpt3__feature-text-container'>
                    <p>{text}</p>
                </div>
            </div>
        </div>
     );
}
 
export default Feature;