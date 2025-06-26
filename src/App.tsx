import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Blog from "./pages/Blog";
import WebDevelopment from "./pages/WebDevelopment";
import Contact from "./components/Contact";
import Vacancies from "./components/vacancies";
import Navbar from './components/Navbar';
import WhatsAppChat from './components/WhatsAppChat';
import SoftwareProducts from "./pages/SoftwareProducts";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/vacancies" element={<Vacancies />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/web-development" element={<WebDevelopment />} />
            <Route path="/software-products" element={<SoftwareProducts />} />
            <Route path="/#:section" element={<Navigate to="/" />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <WhatsAppChat />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
