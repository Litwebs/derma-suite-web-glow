import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Treatments", href: "/treatments" },
    { name: "Pricing", href: "/pricing" },
    { name: "Gallery", href: "/gallery" },
    { name: "About", href: "/about" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

  const treatments = [
    "The Perfect Facial",
    "Anti-wrinkle Injections",
    "Dermal Filler",
    "Fat Dissolving",
    "Vitamin Injections",
    "PRP Treatments",
    "Laser Hair Removal",
  ];

  return (
    <footer className="bg-dark text-white">
      {/* Main Footer Content */}
      <div className="container py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img
                src="/logo.png"
                alt="Derma Suite logo"
                className="h-10 w-auto"
              />
              <span className="font-heading font-semibold text-xl">
                Derma Suite
              </span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Step into a world where outstanding service meets cutting-edge
              technology. Our expert clinicians use the most advanced machines
              to deliver results that are nothing short of exceptional. Every
              treatment is guided by precision, comfort, and genuine care —
              because your confidence deserves nothing less than the very best.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/dermasuite"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary/10 hover:bg-primary rounded-full flex items-center justify-center text-white hover:text-white transition-colors"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/the_derma_suite?igsh=ODBmNnJyYm5oemk4"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary/10 hover:bg-primary rounded-full flex items-center justify-center text-white hover:text-white transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-lg">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Treatments */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-lg">
              Popular Treatments
            </h3>
            <ul className="space-y-2">
              {treatments.map((treatment) => (
                <li key={treatment}>
                  <Link
                    to="/treatments"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {treatment}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-lg">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Hudson Avenue</p>
                  <p className="text-gray-300">BD7 3ND</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="tel:07454853335"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  07454 853 335
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="mailto:dermasuiteltd@gmail.com"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  dermasuiteltd@gmail.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-gray-300">
                  <p>Sun-Fri: 9:00 AM - 6:00 PM</p>
                  <p>Sat: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-300 text-sm text-center md:text-left">
              © {currentYear} Derma Suite. All rights reserved.
            </p>
            <a
              href="https://litwebs.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 text-sm transition-colors hover:text-white"
            >
              Powered by Litwebs
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
