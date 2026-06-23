import { Link } from "react-router-dom";
import { ArrowRight, Award, Users, Clock } from "lucide-react";

const Hero = () => {
  const stats = [
    {
      icon: Users,
      number: "5000+",
      label: "Happy Clients",
    },
    {
      icon: Award,
      number: "15+",
      label: "Years Experience",
    },
    {
      icon: Clock,
      number: "98%",
      label: "On-Time Appointments",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-background">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-subtle opacity-50"></div>
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(28,124,84,0.05),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(39,174,96,0.05),transparent_50%)]"></div>
      </div>

      <div className="relative container py-20 lg:py-28">
        <div className="max-w-4xl mx-auto">
          {/* Content */}
          <div className="text-center">
            <h1 className="heading-hero text-foreground mb-6">
              Welcome to{" "}
              <span className="text-6xl lg:text-7xl">Derma Suite</span>
            </h1>

            <p className="body-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              Advanced aesthetic treatments designed to enhance facial harmony,
              improve skin quality, and deliver subtle, refined results. Every
              treatment begins with a consultation to ensure a personalised plan
              tailored to your features and goals.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link to="/contact" className="btn-primary text-lg px-8 py-4">
                Book Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link to="/treatments" className="btn-outline text-lg px-8 py-4">
                View Treatments
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border max-w-2xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="heading-md text-foreground">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
