import './article.css'

const Article = ({ imgUrl, date, title }) => 
{
    return ( 
        <div className='gpt3__article'>
            <div className="gpt3__article-image">
                <img src={imgUrl} alt="" />
            </div>
            <div className="gpt3__article-content">
                <div className="gpt3__article-content-heading">
                    <p>{date}</p>
                    <h4>{title}</h4>
                </div>
                <p>Read Full Article</p>
            </div>
        </div>
     );
}
 
export default Article;