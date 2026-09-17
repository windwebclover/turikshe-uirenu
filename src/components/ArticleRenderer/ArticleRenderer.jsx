import './ArticleRenderer.scss';

export default function ArticleRenderer({ content = [] }) {
  return (
    <div className="article-renderer">
      {content.map((block, index) => {
        if (block.type === 'paragraph') {
          return <p key={index}>{block.text}</p>;
        }

        if (block.type === 'heading') {
          return <h2 key={index}>{block.text}</h2>;
        }

        if (block.type === 'example') {
          return (
            <div className="article-renderer__example" key={index}>
              <strong>{block.turkish}</strong>
              <span>{block.kazakh}</span>
            </div>
          );
        }

        if (block.type === 'list') {
          return (
            <ul key={index}>
              {block.items?.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          );
        }

        if (block.type === 'vocabulary') {
          return (
            <div className="article-renderer__vocabulary" key={index}>
              {block.items?.map((item) => (
                <div className="article-renderer__word" key={item.word}>
                  <strong>{item.word}</strong>
                  <span>{item.translation}</span>
                </div>
              ))}
            </div>
          );
        }

        if (block.type === 'quote') {
          return <blockquote key={index}>{block.text}</blockquote>;
        }

        return null;
      })}
    </div>
  );
}
