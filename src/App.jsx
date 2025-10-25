import { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from 'react-router-dom';
import Auth from './pages/Auth';
import Dashboard from './pages/Dashboard';
import Layout from './components/layout';
import './fontawesome';
import UpdateAndFaq from './pages/UpdatesAndFaq';
import Subscriptions from './pages/Subscriptions';
import Settings from './pages/Setting';
import './style.css';
import NewChat from './pages/NewChat';

// Protected route component
function PrivateRoute({ children }) {
  const isLoggedIn = localStorage.getItem('authToken');
  return isLoggedIn ? children : <Navigate to='/login' replace />;
}

// Prevent access to /login when already logged in
function PublicRoute({ children }) {
  const isLoggedIn = localStorage.getItem('authToken');
  return isLoggedIn ? <Navigate to='/' replace /> : children;
}

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    !!localStorage.getItem('authToken')
  );

  const handleLogin = () => {
    localStorage.setItem('authToken', 'loggedin');
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    setIsLoggedIn(false);
  };

  // Keep UI in sync with localStorage
  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem('authToken'));
  }, []);

  return (
    <Router>
      <Routes>
        {/* Public route (login) */}
        <Route
          path='/login'
          element={
            <PublicRoute>
              <Auth onLogin={handleLogin} />
            </PublicRoute>
          }
        />

        {/* Protected dashboard */}

        <Route
          path='/'
          element={
            <PrivateRoute>
              <Layout onLogout={handleLogout}>
                <Dashboard />
              </Layout>
            </PrivateRoute>
          }
        />
        <Route
          path='/new-chat'
          element={
            <PrivateRoute>
              <Layout onLogout={handleLogout}>
                <NewChat />
              </Layout>
            </PrivateRoute>
          }
        />
        <Route
          path='/updates-faq'
          element={
            <PrivateRoute>
              <Layout onLogout={handleLogout}>
                <UpdateAndFaq />
              </Layout>
            </PrivateRoute>
          }
        />
        <Route
          path='/subscriptions'
          element={
            <PrivateRoute>
              <Layout onLogout={handleLogout}>
                <Subscriptions />
              </Layout>
            </PrivateRoute>
          }
        />
        <Route
          path='/settings'
          element={
            <PrivateRoute>
              <Layout onLogout={handleLogout}>
                <Settings />
              </Layout>
            </PrivateRoute>
          }
        />

        {/* Fallback redirect */}
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </Router>
  );
}
