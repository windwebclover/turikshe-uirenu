import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import './Layout.scss';

export default function Layout() {
  return (
    <div className="app-shell">
      <Header />
      <main className="app-main">
        <div className="container">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
