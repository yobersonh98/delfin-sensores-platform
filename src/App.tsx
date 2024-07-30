import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { TooltipProvider } from '@radix-ui/react-tooltip'; // Importa TooltipProvider
import PanelAdmin from './pages/admin/panelAdmin';
import Contacto from './pages/contacto';
import Privacidad from './pages/contacto/privacidad';
import Login from './pages/login';
import Inicio from './pages/inicio';
import GestionDatos from './pages/admin/gestion/gestionDatos';
import GestionUsuarios from './pages/admin/gestion/gestionUsuarios';
import GestionNodos from './pages/admin/gestion/gestionNodos';
import GestionUbicaciones from './pages/admin/gestion/gestionUbicaciones';
import GestionEstadisticas from './pages/admin/gestion/gestionEstadisticas';

const App = () => {
  return (
    <Router>
      <TooltipProvider> {/* Envuelve toda la aplicación con TooltipProvider */}
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/contacto/privacidad" element={<Privacidad />} />
          
          {/* PanelAdmin routes */}
          <Route path="/panelAdmin" element={<PanelAdmin />}>
            <Route index element={<Navigate to="gestion/gestionEstadisticas" replace />} />
            <Route path="gestion/gestionEstadisticas" element={<GestionEstadisticas />} />
            <Route path="gestion/gestionDatos" element={<GestionDatos />} />
            <Route path="gestion/gestionUsuarios" element={<GestionUsuarios />} />
            <Route path="gestion/gestionNodos" element={<GestionNodos />} />
            <Route path="gestion/gestionUbicaciones" element={<GestionUbicaciones />} />
          </Route>
        </Routes>
      </TooltipProvider>
    </Router>
  );
};

export default App;
