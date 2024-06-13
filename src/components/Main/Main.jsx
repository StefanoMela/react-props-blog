import Card from '../Card/Card';
import './Main.css';
import posts from '../../data/db';

function Main() {
  return (
    <>
    <section className="main">
      <h2>Il mio blog</h2>
      {posts.map(post => (
        <Card
        key={`postCard${post.id}`} 
        title={post.title}
        image={post.image}
        content={post.content}
        tags={post.tags}
        published={post.published}
        />
      ))}
    </section>
    </>
  );
}

export default Main;
