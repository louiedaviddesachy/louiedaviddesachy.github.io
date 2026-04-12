import { RouterProvider } from 'react-router';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './context/ThemeContext';
import { router } from './routes';
import '../styles/animations.css';

export default function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <noscript>
          <div style={{ padding: '2rem', textAlign: 'center', background: '#242943', color: 'white', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Louie-David Desachy</h1>
            <p style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>PhD Student in Applied Mathematics</p>
            <p>Ce site nécessite JavaScript pour fonctionner correctement.</p>
            <p>Veuillez activer JavaScript dans votre navigateur.</p>
          </div>
        </noscript>
        <RouterProvider router={router} />
      </ThemeProvider>
    </HelmetProvider>
  );
}