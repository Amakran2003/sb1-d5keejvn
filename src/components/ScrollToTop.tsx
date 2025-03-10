import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname, search } = useLocation();
  
  useEffect(() => {
    // Ne pas faire défiler automatiquement vers le haut si nous naviguons vers le menu avec des paramètres de requête
    // car nous voulons défiler vers l'élément spécifique
    if (pathname === '/menu' && search.includes('item=')) {
      return;
    }
    
    // Sinon, revenir en haut de la page
    window.scrollTo(0, 0);
  }, [pathname, search]);
  
  return null;
}
