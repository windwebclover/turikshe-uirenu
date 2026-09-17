import { Link } from 'react-router-dom';
import './NotFound.scss';

export default function NotFound() {
  return (
    <section className="not-found">
      <p>404</p>
      <h1>Бет табылмады</h1>
      <Link to="/">Басты бетке қайту</Link>
    </section>
  );
}
