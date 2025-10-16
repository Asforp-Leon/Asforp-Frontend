import { useState } from 'react';
import { X, Mail, User, Lock, Phone, UserCircle } from 'lucide-react';

export default function Register({ onClose, onSwitchToLogin }) {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    full_name: '',
    phone: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Validaciones
    if (formData.password !== formData.confirmPassword) {
      setError('Las contraseñas no coinciden');
      setLoading(false);
      return;
    }

    if (formData.password.length < 8) {
      setError('La contraseña debe tener al menos 8 caracteres');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: formData.username,
          email: formData.email,
          password: formData.password,
          full_name: formData.full_name,
          phone: formData.phone
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess(true);
      } else {
        setError(data.error || 'Error al registrar usuario');
      }
    } catch (err) {
      setError('Error de conexión. Intenta nuevamente.');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
        <div className="bg-gray-900 p-8 rounded-lg max-w-md w-full border border-white/10">
          <div className="text-center">
            <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-black" />
            </div>
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">¡Registro Exitoso!</h2>
            <p className="text-gray-300 mb-6">
              Hemos enviado un email de verificación a <strong className="text-white">{formData.email}</strong>. 
              Por favor, revisa tu bandeja de entrada y haz clic en el enlace para activar tu cuenta.
            </p>
            <button 
              onClick={onClose}
              className="w-full px-4 py-2 bg-yellow-400 text-black rounded hover:bg-yellow-500 transition font-semibold"
            >
              Entendido
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-gray-900 p-8 rounded-lg max-w-md w-full border border-white/10 my-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-yellow-400">Registrarse en ASFORP</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X size={24} />
          </button>
        </div>

        {error && (
          <div className="bg-red-500/20 border border-red-500 text-red-200 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-300 mb-2 text-sm">
              <User className="w-4 h-4 inline mr-2" />
              Nombre de usuario
            </label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              minLength={3}
              className="w-full px-4 py-2 bg-black/50 border border-white/20 rounded text-white focus:border-yellow-400 focus:outline-none"
              placeholder="usuario123"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-2 text-sm">
              <UserCircle className="w-4 h-4 inline mr-2" />
              Nombre completo
            </label>
            <input
              type="text"
              name="full_name"
              value={formData.full_name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-black/50 border border-white/20 rounded text-white focus:border-yellow-400 focus:outline-none"
              placeholder="Juan Pérez"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-2 text-sm">
              <Mail className="w-4 h-4 inline mr-2" />
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-black/50 border border-white/20 rounded text-white focus:border-yellow-400 focus:outline-none"
              placeholder="correo@ejemplo.com"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-2 text-sm">
              <Phone className="w-4 h-4 inline mr-2" />
              Teléfono (opcional)
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-black/50 border border-white/20 rounded text-white focus:border-yellow-400 focus:outline-none"
              placeholder="+34 600 000 000"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-2 text-sm">
              <Lock className="w-4 h-4 inline mr-2" />
              Contraseña
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              minLength={8}
              className="w-full px-4 py-2 bg-black/50 border border-white/20 rounded text-white focus:border-yellow-400 focus:outline-none"
              placeholder="Mínimo 8 caracteres"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-2 text-sm">
              <Lock className="w-4 h-4 inline mr-2" />
              Confirmar contraseña
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-black/50 border border-white/20 rounded text-white focus:border-yellow-400 focus:outline-none"
              placeholder="Repite la contraseña"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full px-4 py-3 bg-yellow-400 text-black rounded hover:bg-yellow-500 transition font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Registrando...' : 'Crear Cuenta'}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-400 text-sm">
            ¿Ya tienes una cuenta?{' '}
            <button 
              onClick={onSwitchToLogin}
              className="text-yellow-400 hover:text-yellow-300 font-semibold"
            >
              Iniciar Sesión
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

