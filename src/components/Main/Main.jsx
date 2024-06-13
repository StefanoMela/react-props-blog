import Card from "../Card/Card";
import "./Main.css";
import posts from "../../data/db";

function Main() {
  const uniqueTags = posts.reduce((acc, post) => {
    post.tags.forEach((tag) => {
      if (!acc.includes(tag)) {
        acc.push(tag);
      }
    });
    return acc;
  }, []);

  return (
    <>
      <section className="main">
        <div>
        <h1>Il mio blog</h1>
        </div>
        <div className="cards">
        {posts.map((post) => (
          <Card
            key={`postCard${post.id}`}
            title={post.title}
            image={post.image}
            content={post.content}
            tags={post.tags}
            published={post.published}
          />
        ))}
        </div>

        <div>
        <section className="tags">
          <h2>Tags</h2>
          <div>
            {uniqueTags.map((tag, index) => (
              <span key={`uniqueTag${index}`} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </section>
        </div>
      </section>
    </>
  );
}

export default Main;
