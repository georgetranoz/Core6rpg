import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { AboutPage } from './pages/AboutPage';
import { AppPage } from './pages/AppPage';
import { BooksPage } from './pages/BooksPage';
import { CreatorsPage } from './pages/CreatorsPage';
import { FaqPage } from './pages/FaqPage';
import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { SystemPage } from './pages/SystemPage';
import { UniversesPage } from './pages/UniversesPage';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="system" element={<SystemPage />} />
        <Route path="books" element={<BooksPage />} />
        <Route path="universes" element={<UniversesPage />} />
        <Route path="app" element={<AppPage />} />
        <Route path="creators" element={<CreatorsPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="faq" element={<FaqPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
