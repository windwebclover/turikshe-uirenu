import SectionHeader from '../../components/SectionHeader/SectionHeader';
import resources from '../../data/resources.json';
import './Resources.scss';

export default function Resources() {
  return (
    <section className="resources-page">
      <SectionHeader
        title="Ресурстар / Құралдар"
        description="Тіл үйренуді жоспарлауға, қайталауға және материалдарды реттеуге арналған пайдалы бөлім."
      />

      <div className="resources-page__grid">
        {resources.map((resource) => (
          <article className="resource-card" key={resource.id}>
            <span className="resource-card__type">{resource.type}</span>
            <h2>{resource.title}</h2>
            <p>{resource.description}</p>
            <a href={resource.url}>Ашу</a>
          </article>
        ))}
      </div>
    </section>
  );
}
