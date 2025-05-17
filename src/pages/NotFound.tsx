
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-6">
      <div className="text-center max-w-md">
        <h1 className="text-9xl font-bold text-pydah-primary mb-6">404</h1>
        <p className="text-2xl font-semibold text-pydah-dark mb-4">Page Not Found</p>
        <p className="text-pydah-gray mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <a 
          href="/" 
          className="inline-flex items-center gap-2 bg-pydah-primary text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:scale-105"
        >
          <ArrowLeft size={18} />
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
