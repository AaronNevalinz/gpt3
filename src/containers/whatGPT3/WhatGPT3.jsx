import { Feature } from '../../Components';
import './whatgpt3.css';

const features = [
    {"title":"Chatbots", "text":"We so opinion friends me message as delight. Whole front do of plate heard oh ought. "},
    {"title":"Knowledgebase", "text":"At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments."},
    {"title":"Education", "text":"At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments."}
]

const WhatGPT3 = () => {
    return ( 
        <div className='gpt3__whatgpt-container section__margin'>
            <Feature 
                heading="What is GPT-3"
                text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."
            
            />
            <div className="gpt3_whatgpt-possibilites">
                <h2 className="gradient-text">
                    The possibilites are beyond your Imagination
                </h2>
                <p>Explore the Library</p>
            </div>
            <div className="gpt3__whatgpt-feature-container">
                {
                    features.map((feature, indexOf)=>(
                        <>
                            <Feature heading={feature.title} text={feature.text} key={feature.title + indexOf}/>
                        </>
                    ))
                }
            </div>
        </div>
     );
}
 
export default WhatGPT3;