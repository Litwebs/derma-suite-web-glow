import { useEffect, useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Index from "./pages/Index";
import Treatments from "./pages/Treatments";
import Pricing from "./pages/Pricing";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import NoService from "./pages/NoService";
import axios from "axios";

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }

    const id = decodeURIComponent(hash.replace(/^#/, ""));
    if (!id) {
      window.scrollTo(0, 0);
      return;
    }

    let attempts = 0;
    const maxAttempts = 10;

    const tryScroll = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }

      attempts += 1;
      if (attempts <= maxAttempts) {
        window.setTimeout(tryScroll, 100);
        return;
      }

      window.scrollTo(0, 0);
    };

    tryScroll();
  }, [pathname, hash]);
  return null;
}

const queryClient = new QueryClient();

async function checkStatus() {
  try {
    const res = await axios.post(
      "https://admin.litwebs.co.uk/api/websites/status",
      { url: "https://dermasuiteltd.com" },
    );
    return res.data?.data?.status === "live";
  } catch {
    return false; // or true if you want fail-open
  }
}

const isProd = import.meta.env.PROD;

function AppInner() {
  const [isLive, setIsLive] = useState(!isProd);
  const [checking, setChecking] = useState(isProd);

  useEffect(() => {
    if (!isProd) return;

    let mounted = true;

    (async () => {
      const live = await checkStatus();
      if (mounted) {
        setIsLive(live);
        setChecking(false);
      }
    })();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />

      {/* optional: while checking, you can render nothing or a small loader */}
      {checking ? null : !isLive ? (
        <NoService />
      ) : (
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/treatments" element={<Treatments />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/about" element={<About />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      )}
    </BrowserRouter>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <AppInner />
      </TooltipProvider>
    </QueryClientProvider>
  );
}
