import './brand.css'
import { google, slack, shopify, atlassian, dropbox } from './imports';

const Brand = () => {
    return ( 
        <div className='gpt3__brand-container'>
            <img src={google} alt="google" />
            <img src={slack} alt="Slack" />
            <img src={shopify} alt="Shopify" />
            <img src={atlassian} alt="Atlassian" />
            <img src={dropbox} alt="Dropbox" />
        </div>
     );
}
 
export default Brand;