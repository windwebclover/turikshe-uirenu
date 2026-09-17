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
    </section>
  );
}
