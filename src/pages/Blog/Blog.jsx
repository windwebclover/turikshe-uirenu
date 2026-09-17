import { Link } from 'react-router-dom';

import SectionHeader from '../../components/SectionHeader/SectionHeader';
import articles from '../../articles/articles';

import './Blog.scss';

export default function Blog() {
  const posts = articles
    .filter((article) => article.section === 'blog')
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <section className="blog-page">
      <SectionHeader
        title="Блог"
        description="Тілді үйрену тәжірибесі, пайдалы тәсілдер және жеке оқу жүйесі туралы жазбалар."
      />

      <div className="blog-page__list">
        {posts.map((post) => (
          <Link
            key={post.id}
            to={`/article/${post.slug}`}
            className="blog-page__article"
          >
            {post.title}
          </Link>
        ))}
      </div>
    </section>
  );
}