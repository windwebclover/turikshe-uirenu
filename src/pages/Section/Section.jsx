import { Link } from 'react-router-dom';

import articles from '../../articles/articles';

import './Section.scss';

const sectionNames = {
  okylym: 'Оқылым',
  tyndalym: 'Тыңдалым',
  soyleu: 'Сөйлеу',
  zhazu: 'Жазу',
  grammar: 'Грамматика',
  vocabulary: 'Сөздік',
};

function Section({ section }) {
  const filteredArticles = articles.filter(
    (article) => article.section === section
  );

  return (
    <section className="section-page">
      <div className="section-page__header">
        <h1>{sectionNames[section]}</h1>

        <p>
          Түрік тілін үйренуге арналған материалдар.
        </p>
      </div>

      <div className="section-page__list">
        {filteredArticles.map((article) => (
          <Link
            key={article.id}
            to={`/article/${article.slug}`}
            className="section-page__article"
          >
            {article.title}
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Section;