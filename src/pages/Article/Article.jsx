import { Link, useParams } from 'react-router-dom';
import articles from '../../articles/articles';
import '../../articles/ArticleContent.scss';
import './Article.scss';

const sectionLabels = {
  okylym: 'Оқылым',
  tyndalym: 'Тыңдалым',
  soyleu: 'Сөйлеу',
  zhazu: 'Жазу',
  grammar: 'Грамматика',
  vocabulary: 'Сөздік',
  blog: 'Блог',
};

const sectionPaths = {
  okylym: '/okylym',
  tyndalym: '/tyndalym',
  soyleu: '/soyleu',
  zhazu: '/zhazu',
  grammar: '/grammar',
  vocabulary: '/vocabulary',
  blog: '/blog',
};

export default function Article() {
  const { slug } = useParams();
  const article = articles.find((item) => item.slug === slug);

  if (!article) {
    return (
      <section className="article-page article-page--missing">
        <h1>Мақала табылмады</h1>
        <Link to="/">Басты бетке қайту</Link>
      </section>
    );
  }

  return (
    <article className="article-page">
      <div className="article-page__topline">
        <Link to={sectionPaths[article.section] ?? '/'}>{sectionLabels[article.section]}</Link>
        <span>{article.level}</span>
        <span>{article.date}</span>
      </div>

      <header className="article-page__header">
        <h1>{article.title}</h1>
        <p>{article.description}</p>
      </header>

      {article.content}
    </article>
  );
}
