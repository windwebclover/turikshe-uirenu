import articles from '../../articles/articles';
import './Home.scss';

export default function Home() {
  const latestArticles = [...articles]
    .filter((article) => article.section !== 'blog')
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);

  return (
    <div className="home">
      <section className="home__hero">
        <p className="home__eyebrow">Türkçe</p>
        <h1>Selam!</h1>
        <p className="home__lead">
          Оқылым, тыңдалым, сөйлеу, жазу, грамматика және сөздік — бәрі бір жерде.
        </p>
      </section>
    </div>
  );
}
