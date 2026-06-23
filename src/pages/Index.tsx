import { Link } from "react-router-dom";
import {
  ArrowRight,
  Check,
  Star,
  Award,
  Users,
  Clock,
  Shield,
  Heart,
  Zap,
  Eye,
} from "lucide-react";
import Hero from "../components/Hero/Hero";

const Index = () => {
  const services = [
    {
      id: "laser-hair-removal",
      title: "Laser Hair Removal",
      description:
        "Long-term reduction of unwanted hair growth using advanced laser technology.",
      icon: Zap,
      popular: true,
    },
    {
      id: "anti-wrinkle",
      title: "Anti-Wrinkle Injections",
      description:
        "Softens expression lines while maintaining natural facial movement.",
      icon: Award,
      popular: true,
    },
    {
      id: "dermal-filler",
      title: "Dermal Fillers",
      description:
        "Restore volume and refine facial contours with precise injectable treatments.",
      icon: Heart,
      popular: true,
    },
    {
      id: "microneedling",
      title: "Microneedling",
      description:
        "Stimulates natural collagen production to improve skin texture and quality.",
      icon: Shield,
    },
    {
      id: "mesotherapy",
      title: "Skin Boosters & Polynucleotides",
      description:
        "Deep hydration and skin regeneration for long-term skin quality improvement.",
      icon: Eye,
    },
    {
      id: "prp-treatments",
      title: "PRP Treatments",
      description:
        "Platelet-rich plasma therapy for facial rejuvenation and hair restoration.",
      icon: Users,
    },
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: "Medical-Led Approach",
      description:
        "All treatments are clinically guided with a focus on safety and appropriate outcomes.",
    },
    {
      icon: Heart,
      title: "Natural-Looking Results",
      description:
        "Treatment plans are designed to enhance your features while maintaining facial harmony.",
    },
    {
      icon: Shield,
      title: "Personalised Treatment Plans",
      description:
        "Every plan is tailored to your individual needs, anatomy, and goals.",
    },
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      treatment: "Lip Fillers",
      rating: 5,
      text: "Subtle, natural results that still feel like me. The consultation was thorough and I felt reassured throughout.",
      initials: "SM",
    },
    {
      name: "James R.",
      treatment: "Laser Hair Removal",
      rating: 5,
      text: "Professional, honest advice from consultation to aftercare. Very happy with my results.",
      initials: "JR",
    },
    {
      name: "Emma L.",
      treatment: "Polynucleotides",
      rating: 5,
      text: "Clean, clinical environment and excellent results. My skin quality has genuinely improved.",
      initials: "EL",
    },
    {
      name: "Emma L.",
      treatment: "The Perfect Facial",
      rating: 5,
      text: "My skin has never looked better! Highly recommend Derma Suite.",
      initials: "EL",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Services Overview */}
      <section id="treatments" className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Popular Treatments</h2>
            <p className="body-md text-muted-foreground max-w-2xl mx-auto">
              Advanced aesthetic and skin treatments designed to enhance facial
              harmony, improve skin quality, and deliver subtle, refined
              results.
            </p>
          </div>

          <div className="grid-services mb-8">
            {services.map((service) => (
              <Link
                key={service.id}
                to={`/treatments#${service.id}`}
                aria-label={`View ${service.title} on treatments page`}
                className="card-elevated p-6 group hover:shadow-strong transition-all duration-300 block"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h3 className="heading-sm">{service.title}</h3>
                      {service.popular && (
                        <span className="inline-flex items-center px-2 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium">
                          Popular
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      {service.description}
                    </p>
                    <span className="inline-flex items-center text-primary group-hover:text-primary/80 text-sm font-medium transition-colors">
                      Learn more
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link to="/treatments" className="btn-primary">
              View All Treatments
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-secondary">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Why Clients Choose Derma Suite</h2>
            <p className="body-md text-muted-foreground max-w-2xl mx-auto">
              A medical-led approach to aesthetics, focused on natural results,
              personalised care, and advanced techniques.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="heading-sm mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Philosophy */}
      <section className="section">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-lg mb-6">Treatment Philosophy</h2>
            <p className="body-lg text-muted-foreground mb-8">
              We do not believe in overcorrection or one-size-fits-all
              aesthetics. Our focus is on subtle, refined enhancement that
              respects your natural features.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 text-left">
              {[
                "Facial harmony",
                "Skin health improvement",
                "Subtle, refined enhancement",
                "Long-term treatment planning",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center space-x-3 p-4 card-subtle rounded-lg"
                >
                  <Check className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="font-medium text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-secondary">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">What Our Clients Say</h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card-subtle p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      className="w-4 h-4 text-accent fill-current"
                    />
                  ))}
                </div>
                <p className="body-md text-muted-foreground mb-4 italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium text-primary">
                      {testimonial.initials}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">{testimonial.name}</h4>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.treatment}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-6 bg-secondary border-t border-border">
        <div className="container text-center">
          <p className="text-sm text-muted-foreground">
            Serving clients from{" "}
            <span className="font-medium text-foreground">Leeds</span>
            {" · "}
            <span className="font-medium text-foreground">Horsforth</span>
            {" · "}
            <span className="font-medium text-foreground">Headingley</span>
            {" · "}
            <span className="font-medium text-foreground">Roundhay</span>
            {" · "}
            <span className="font-medium text-foreground">West Yorkshire</span>
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="section bg-gradient-primary text-white">
        <div className="container text-center">
          <h2 className="heading-lg mb-4">Begin Your Treatment Journey</h2>
          <p className="body-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Start with a consultation and receive a personalised treatment plan
            tailored to your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-accent">
              Book Free Consultation
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <a
              href="tel:07454853335"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/40 px-6 py-3 rounded-lg font-medium transition-colors inline-flex items-center justify-center"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
