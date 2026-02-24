import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';

function App() {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-100 flex flex-col">
      <Header />
      <main className="flex-grow pt-24">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>

      <footer className="py-12 border-t border-slate-900 bg-slate-950/50 backdrop-blur-sm text-center text-slate-500 text-sm">
        <div className="container mx-auto px-6">
          <p>© {new Date().getFullYear()} Richesse Souveraine. All rights reserved.</p>
          <p className="mt-2 text-xs opacity-60">
            Liberté • Souveraineté • Héritage
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;

