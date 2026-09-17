import './SectionHeader.scss';

export default function SectionHeader({ title, description }) {
  return (
    <header className="section-header">
      <h1>{title}</h1>
      {description && <p className="section-header__description">{description}</p>}
    </header>
  );
}
