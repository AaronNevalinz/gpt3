import { Article } from '../../Components';
import {blog01, blog02, blog03, blog04, blog05} from './imports'
import './blog.css';

const Blog = () => {
    return ( 
        <div className='gpt3__blog section__padding'>
            <div className="gpt3__blog-heading">
                <h1 className='gradient-text'>A lot is happening, We are blogging about it</h1>
            </div>

            <div className="gpt3__blog-container">

                <div className="gpt3__blog-groupA">
                    <Article imgUrl={blog01} date='27/08/2023' title='GPT3 and Open AI is the future. Let us explorehow it is...'/>
                </div>

                <div className="gpt3__blog-groupB">
                    <Article imgUrl={blog02} date='27/08/2023'  title='GPT3 and Open AI is the future. Let us explorehow it is...'/>
                    <Article imgUrl={blog03} date='27/08/2023' title='GPT3 and Open AI is the future. Let us explorehow it is...'/>
                    <Article imgUrl={blog04} date='27/08/2023' title='GPT3 and Open AI is the future. Let us explorehow it is...'/>
                    <Article imgUrl={blog05} date='27/08/2023' title='GPT3 and Open AI is the future. Let us explorehow it is...'/>
                </div>

            </div>
        </div>
     );
}
 
export default Blog;