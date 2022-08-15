import { useAppContext } from '../context/appContext';
import { Navigate } from 'react-router-dom';

//this component protects the routes in dashboard
const ProtectedRoute = ({ children }) => {
  const { user } = useAppContext();

  if (!user) {
    return <Navigate to="/landing" />;
  }
  return children;
};
export default ProtectedRoute;
