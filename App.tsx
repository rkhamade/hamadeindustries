import React, { useState, useEffect, createContext, useContext, lazy, Suspense } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

// Pages (lazy loaded)
const Home = lazy(() => import('./pages/Home').then(m => ({ default: m.Home })));
const ServicesPage = lazy(() => import('./pages/ServicesPage').then(m => ({ default: m.ServicesPage })));
const ProcessPage = lazy(() => import('./pages/ProcessPage').then(m => ({ default: m.ProcessPage })));
const WhyUsPage = lazy(() => import('./pages/WhyUsPage').then(m => ({ default: m.WhyUsPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then(m => ({ default: m.ContactPage })));
const SchedulePage = lazy(() => import('./pages/SchedulePage').then(m => ({ default: m.SchedulePage })));
const DemoHub = lazy(() => import('./pages/DemoHub').then(m => ({ default: m.DemoHub })));
const DemoDetail = lazy(() => import('./pages/DemoDetail').then(m => ({ default: m.DemoDetail })));
const ResultsPage = lazy(() => import('./pages/ResultsPage').then(m => ({ default: m.ResultsPage })));

// Router Context
type RouterContextType = {
  currentPath: string;
  params: Record<string, string>;
  navigate: (path: string) => void;
};

export const RouterContext = createContext<RouterContextType>({
  currentPath: '/',
  params: {},
  navigate: () => {},
});

export const useRouter = () => useContext(RouterContext);

function toRoute(pathname: string) {
  const path = pathname || '/';

  if (path.startsWith('/demo/')) {
    const id = path.split('/')[2] || '';
    return { route: '/demo/:id', params: { id } };
  }

  return { route: path, params: {} };
}

const App: React.FC = () => {
  const initial = toRoute(window.location.pathname);

  const [currentPath, setCurrentPath] = useState(initial.route);
  const [params, setParams] = useState<Record<string, string>>(initial.params);

  useEffect(() => {
    const syncFromUrl = () => {
      const next = toRoute(window.location.pathname);
      setCurrentPath(next.route);
      setParams(next.params);
      window.scrollTo(0, 0);
    };

    window.addEventListener('popstate', syncFromUrl);
    return () => window.removeEventListener('popstate', syncFromUrl);
  }, []);

  const navigate = (path: string) => {
    window.history.pushState({}, '', path);
    const next = toRoute(path);
    setCurrentPath(next.route);
    setParams(next.params);
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (currentPath) {
      case '/': return <Home />;
      case '/services': return <ServicesPage />;
      case '/process': return <ProcessPage />;
      case '/why-us': return <WhyUsPage />;
      case '/contact': return <ContactPage />;
      case '/schedule': return <SchedulePage />;
      case '/demo': return <DemoHub />;
      case '/demo/:id': return <DemoDetail />;
      case '/results': return <ResultsPage />;
      default: return <Home />;
    }
  };

  return (
    <RouterContext.Provider value={{ currentPath, params, navigate }}>
      <div className="relative min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Suspense fallback={<div className="p-6 text-white/70">Loading…</div>}>
            {renderPage()}
          </Suspense>
        </main>
        <Footer />
      </div>
    </RouterContext.Provider>
  );
};

export default App;