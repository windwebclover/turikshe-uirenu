import { Link } from 'react-router-dom';
import './ArticleCard.scss';

export default function ArticleCard({ article }) {
  return (
    <Link to={`/article/${article.slug}`} className="article-card">
      <div className="article-card__meta">
        <span>{article.level}</span>
        <span>{article.date}</span>
      </div>

      <h2>{article.title}</h2>
      <p>{article.description}</p>

      <span className="article-card__more">Оқу</span>
    </Link>
  );
}
