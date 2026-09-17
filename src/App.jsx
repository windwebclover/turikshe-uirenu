import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import Section from './pages/Section/Section';
import Article from './pages/Article/Article';
import Resources from './pages/Resources/Resources';
import Blog from './pages/Blog/Blog';
import NotFound from './pages/NotFound/NotFound';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/okylym" element={<Section section="okylym" />} />
        <Route path="/tyndalym" element={<Section section="tyndalym" />} />
        <Route path="/soyleu" element={<Section section="soyleu" />} />
        <Route path="/zhazu" element={<Section section="zhazu" />} />
        <Route path="/grammar" element={<Section section="grammar" />} />
        <Route path="/vocabulary" element={<Section section="vocabulary" />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/article/:slug" element={<Article />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
