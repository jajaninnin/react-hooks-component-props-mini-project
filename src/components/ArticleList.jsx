import Article from "./Article";
import blogData from "../data/blog";

function ArticleList() {
    return (
        <main>
            {blogData.posts.map(blog => {
                return <Article key={blog.id} title={blog.title} date={blog.date} preview={blog.preview} minutes={blog.minutes} />;
            })}
            
        </main>
    )
}

export default ArticleList