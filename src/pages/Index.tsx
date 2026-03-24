import { Link } from 'react-router-dom';
import { ArrowRight, Check, Star, Award, Users, Clock, Shield, Heart, Zap, Eye } from 'lucide-react';
import Hero from '../components/Hero/Hero';

const Index = () => {
  const services = [
    {
      id: 'laser-hair-removal',
      title: 'Laser Hair Removal',
      description: 'Advanced laser technology for long-lasting hair reduction with minimal discomfort.',
      icon: Zap,
      popular: true
    },
    {
      id: 'anti-wrinkle',
      title: 'Anti-wrinkle Injections',
      description: 'FDA-approved treatments to smooth fine lines and prevent new wrinkles.',
      icon: Award,
      popular: true
    },
    {
      id: 'dermal-filler',
      title: 'Dermal Filler',
      description: 'Hyaluronic acid fillers to restore volume and enhance facial contours naturally.',
      icon: Heart,
      popular: true
    },
    {
      id: 'chemical-peels',
      title: 'Chemical Peels',
      description: 'Professional-grade peels to improve skin texture, tone, and clarity.',
      icon: Shield
    },
    {
      id: 'vitamin-injections',
      title: 'Vitamin Injections',
      description: 'Targeted vitamin therapy to boost energy, immunity, and overall wellness.',
      icon: Zap
    },
    {
      id: 'dermaplaning',
      title: 'Dermaplaning',
      description: 'Gentle exfoliation removing dead skin cells and fine facial hair.',
      icon: Award
    }
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: 'Qualified Clinicians',
      description: 'All practitioners have advanced aesthetic training and expertise.'
    },
    {
      icon: Shield,
      title: 'Medical-Grade Devices',
      description: 'Latest FDA-approved equipment and medical-grade products for optimal safety.'
    },
    {
      icon: Heart,
      title: 'Personalised Plans',
      description: 'Every treatment plan is tailored to your individual needs and goals.'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah M.',
      treatment: 'Laser Hair Removal',
      rating: 5,
      text: 'Amazing results after just 4 sessions! Professional staff made me feel comfortable.',
      initials: 'SM'
    },
    {
      name: 'James R.',
      treatment: 'Anti-wrinkle Treatment',
      rating: 5,
      text: 'Very natural results - exactly what I wanted. Professional and virtually painless.',
      initials: 'JR'
    },
    {
      name: 'Emma L.',
      treatment: 'The Perfect Facial',
      rating: 5,
      text: 'My skin has never looked better! Highly recommend Derma Suite.',
      initials: 'EL'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Services Overview */}
      <section id="treatments" className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Our Treatments</h2>
            <p className="body-md text-muted-foreground max-w-2xl mx-auto">
              Discover the art of confidence with our advanced medical aesthetic treatments. Here at Derma Suite our highly skilled clinicians combine expertise with the latest technology to deliver safe, comfortable, and transformative results. From the moment you step into our care, you'll experience a personalised approach designed to enhance your natural beauty and leave you looking and feeling your absolute best.
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
                    <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
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
            <h2 className="heading-lg mb-4">Why Choose Derma Suite</h2>
            <p className="body-md text-muted-foreground max-w-2xl mx-auto">
              We combine medical expertise with artistic vision to deliver exceptional results 
              in a safe, professional environment.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="heading-sm mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">What Our Clients Say</h2>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card-subtle p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, starIndex) => (
                    <Star key={starIndex} className="w-4 h-4 text-accent fill-current" />
                  ))}
                </div>
                <p className="body-md text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium text-primary">{testimonial.initials}</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">{testimonial.name}</h4>
                    <p className="text-xs text-muted-foreground">{testimonial.treatment}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="section bg-gradient-primary text-white">
        <div className="container text-center">
          <h2 className="heading-lg mb-4">Ready to Transform Your Look?</h2>
          <p className="body-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Book your free consultation today and take the first step towards achieving your aesthetic goals.
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