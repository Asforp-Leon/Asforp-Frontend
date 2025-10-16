import { useState } from 'react';
import { Menu, X, User, LogOut } from 'lucide-react';

export default function Header({ onNavigate, onShowLogin, onShowRegister, user, onLogout }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="text-2xl font-bold text-yellow-400 cursor-pointer" onClick={() => scrollToSection('inicio')}>
            ASFORP
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('inicio')} className="text-white hover:text-yellow-400 transition">
              Inicio
            </button>
            <button onClick={() => scrollToSection('servicios')} className="text-white hover:text-yellow-400 transition">
              Servicios
            </button>
            <button onClick={() => scrollToSection('academia')} className="text-white hover:text-yellow-400 transition">
              Academia
            </button>
            <button onClick={() => scrollToSection('galeria')} className="text-white hover:text-yellow-400 transition">
              Galería
            </button>
            <button onClick={() => scrollToSection('contacto')} className="text-white hover:text-yellow-400 transition">
              Contacto
            </button>
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <>
                <div className="flex items-center space-x-2 text-white">
                  <User size={20} className="text-yellow-400" />
                  <span className="text-sm">{user.username}</span>
                  {user.is_premium && (
                    <span className="bg-yellow-400 text-black text-xs px-2 py-1 rounded font-semibold">
                      PREMIUM
                    </span>
                  )}
                </div>
                <button 
                  onClick={onLogout}
                  className="px-4 py-2 text-white border border-white/30 rounded hover:bg-white/10 transition flex items-center space-x-2"
                >
                  <LogOut size={16} />
                  <span>Salir</span>
                </button>
              </>
            ) : (
              <>
                <button 
                  onClick={onShowLogin}
                  className="px-4 py-2 text-white border border-yellow-400 rounded hover:bg-yellow-400 hover:text-black transition"
                >
                  Iniciar Sesión
                </button>
                <button 
                  onClick={onShowRegister}
                  className="px-4 py-2 bg-yellow-400 text-black rounded hover:bg-yellow-500 transition font-semibold"
                >
                  Registrarse
                </button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <button onClick={() => scrollToSection('inicio')} className="block w-full text-left text-white hover:text-yellow-400 transition py-2">
              Inicio
            </button>
            <button onClick={() => scrollToSection('servicios')} className="block w-full text-left text-white hover:text-yellow-400 transition py-2">
              Servicios
            </button>
            <button onClick={() => scrollToSection('academia')} className="block w-full text-left text-white hover:text-yellow-400 transition py-2">
              Academia
            </button>
            <button onClick={() => scrollToSection('galeria')} className="block w-full text-left text-white hover:text-yellow-400 transition py-2">
              Galería
            </button>
            <button onClick={() => scrollToSection('contacto')} className="block w-full text-left text-white hover:text-yellow-400 transition py-2">
              Contacto
            </button>
            <div className="pt-4 space-y-2 border-t border-white/10">
              {user ? (
                <>
                  <div className="flex items-center space-x-2 text-white py-2">
                    <User size={20} className="text-yellow-400" />
                    <span>{user.username}</span>
                    {user.is_premium && (
                      <span className="bg-yellow-400 text-black text-xs px-2 py-1 rounded font-semibold">
                        PREMIUM
                      </span>
                    )}
                  </div>
                  <button 
                    onClick={onLogout}
                    className="block w-full px-4 py-2 text-white border border-white/30 rounded hover:bg-white/10 transition"
                  >
                    Cerrar Sesión
                  </button>
                </>
              ) : (
                <>
                  <button 
                    onClick={onShowLogin}
                    className="block w-full px-4 py-2 text-white border border-yellow-400 rounded hover:bg-yellow-400 hover:text-black transition"
                  >
                    Iniciar Sesión
                  </button>
                  <button 
                    onClick={onShowRegister}
                    className="block w-full px-4 py-2 bg-yellow-400 text-black rounded hover:bg-yellow-500 transition font-semibold"
                  >
                    Registrarse
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

