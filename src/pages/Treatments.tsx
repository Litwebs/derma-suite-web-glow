import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Clock, AlertTriangle } from "lucide-react";

const Treatments = () => {
  const treatments = [
    {
      id: "facials",
      title: "Facial Treatments",
      description:
        "Professional facial treatments combining advanced techniques for optimal skin health and radiance.",
      benefits: [
        "Improves skin texture and tone",
        "Deep cleansing and hydration",
        "Reduces fine lines and wrinkles",
        "Enhances natural glow",
      ],
      duration: "60-90 minutes",
      downtime: "None to minimal",
      contraindications: "Active skin infections, recent sunburn",
    },
    {
      id: "dermaplaning",
      title: "Dermaplaning",
      description:
        "A gentle exfoliation treatment that removes dead skin cells and fine facial hair for instantly smoother, brighter skin.",
      benefits: [
        "Smoother makeup application",
        "Brighter, more even-looking skin",
        "Improves product absorption",
        "Gentle physical exfoliation",
      ],
      duration: "30-45 minutes",
      downtime: "None to minimal",
      contraindications: "Active acne breakouts, open wounds, skin infections",
    },
    {
      id: "chemical-peels",
      title: "Chemical Peels",
      description:
        "Professional-grade exfoliation to improve skin texture, tone, and clarity by targeting dullness, congestion, and uneven pigmentation.",
      benefits: [
        "Improves texture and tone",
        "Helps reduce congestion",
        "Brightens dull skin",
        "Supports clearer-looking pores",
      ],
      duration: "30-60 minutes",
      downtime: "Redness/peeling varies by peel strength",
      contraindications:
        "Pregnancy, active skin infections, recent isotretinoin use, very sensitive skin",
    },
    {
      id: "anti-wrinkle",
      title: "Anti-wrinkle Injections",
      description:
        "FDA-approved treatments to smooth fine lines and prevent new wrinkles from forming naturally.",
      benefits: [
        "Smooths expression lines",
        "Prevents new wrinkles",
        "Natural-looking results",
        "Quick procedure",
      ],
      duration: "15-30 minutes",
      downtime: "Minimal bruising possible",
      contraindications: "Pregnancy, neuromuscular disorders",
    },
    {
      id: "dermal-filler",
      title: "Dermal Filler",
      description:
        "Hyaluronic acid fillers to restore volume, enhance facial contours, and create beautiful natural results.",
      benefits: [
        "Restores facial volume",
        "Enhances lip shape",
        "Smooths deep lines",
        "Immediate results",
      ],
      duration: "30-60 minutes",
      downtime: "Mild swelling 24-48 hours",
      contraindications: "Active infections, autoimmune conditions",
    },
    {
      id: "fat-dissolving",
      title: "Fat Dissolving Injections",
      description:
        "Advanced fat dissolution treatment for targeted body contouring and reduction of stubborn fat areas.",
      benefits: [
        "Targeted fat reduction",
        "Non-surgical approach",
        "Gradual natural results",
        "Minimal recovery time",
      ],
      duration: "30-45 minutes",
      downtime: "Mild swelling 3-5 days",
      contraindications: "Pregnancy, liver conditions",
    },
    {
      id: "vitamin-injections",
      title: "Vitamin Injections",
      description:
        "Targeted vitamin therapy to boost energy, immunity, and overall wellness with fast absorption.",
      benefits: [
        "Boosts energy levels",
        "Enhances immunity",
        "Improves skin health",
        "Fast absorption",
      ],
      duration: "15-20 minutes",
      downtime: "None",
      contraindications: "Vitamin allergies, certain medical conditions",
    },
    {
      id: "led-therapy",
      title: "LED Therapy",
      description:
        "Advanced light therapy for various skin concerns and healing acceleration. Often combined with facials.",
      benefits: [
        "Accelerates healing",
        "Reduces inflammation",
        "Stimulates collagen",
        "Pain-free treatment",
      ],
      duration: "20-30 minutes",
      downtime: "None",
      contraindications: "Pregnancy, certain medications",
    },
    {
      id: "mesotherapy",
      title: "Mesotherapy – Polynucleotides",
      description:
        "Regenerative treatment using polynucleotides for deep skin rejuvenation and anti-aging benefits.",
      benefits: [
        "Deep skin hydration",
        "Collagen stimulation",
        "Improved elasticity",
        "Long-lasting results",
      ],
      duration: "45-60 minutes",
      downtime: "Mild redness 24 hours",
      contraindications: "Active infections, allergies",
    },
    {
      id: "prp-treatments",
      title: "PRP Treatments",
      description:
        "Platelet-rich plasma therapy for hair restoration, facial rejuvenation, and undereye treatment using your own blood.",
      benefits: [
        "Natural hair growth",
        "Skin regeneration",
        "Minimal side effects",
        "Long-lasting improvements",
      ],
      duration: "60-90 minutes",
      downtime: "Mild redness or tenderness",
      contraindications: "Blood disorders, recent medications",
    },
    {
      id: "laser-hair-removal",
      title: "Laser Hair Removal",
      description:
        "Advanced laser technology for safe, effective, and long-lasting hair removal on all body areas.",
      benefits: [
        "Permanent hair reduction",
        "Smooth, hair-free skin",
        "Suitable for all areas",
        "Cost-effective long-term",
      ],
      duration: "15-90 minutes (area dependent)",
      downtime: "None",
      contraindications:
        "Pregnancy, recent sun exposure, certain skin conditions",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-subtle py-16 lg:py-24">
        <div className="container text-center">
          <h1 className="heading-xl mb-6">Our Treatments</h1>
          <p className="body-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Discover our comprehensive range of medical aesthetic treatments,
            each designed to help you look and feel your best. All treatments
            are performed by qualified clinicians in a safe, professional
            environment.
          </p>
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
            <AlertTriangle className="w-4 h-4 mr-2" />
            Payment plans available
          </div>
        </div>
      </section>

      {/* Treatments Grid */}
      <section className="section">
        <div className="container">
          <div className="grid gap-8">
            {treatments.map((treatment) => (
              <div
                key={treatment.id}
                id={treatment.id}
                className="card-elevated p-8 scroll-mt-24"
              >
                <div className="grid md:grid-cols-3 gap-8">
                  {/* Main Content */}
                  <div className="md:col-span-2 space-y-4">
                    <h2 className="heading-lg text-primary">
                      {treatment.title}
                    </h2>
                    <p className="body-md text-muted-foreground">
                      {treatment.description}
                    </p>

                    {/* Benefits */}
                    <div>
                      <h3 className="heading-sm mb-3">Key Benefits</h3>
                      <ul className="grid sm:grid-cols-2 gap-2">
                        {treatment.benefits.map((benefit, index) => (
                          <li
                            key={index}
                            className="flex items-center space-x-2"
                          >
                            <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                            <span className="text-sm">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Treatment Details */}
                  <div className="space-y-6">
                    {/* Duration */}
                    <div className="flex items-center space-x-3 p-3 bg-secondary rounded-lg">
                      <Clock className="w-5 h-5 text-primary" />
                      <div>
                        <div className="font-medium text-sm">Duration</div>
                        <div className="text-sm text-muted-foreground">
                          {treatment.duration}
                        </div>
                      </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="space-y-3">
                      <Link
                        to={`/pricing#${treatment.id}`}
                        className="btn-outline w-full text-center"
                      >
                        View Pricing
                      </Link>
                      <Link
                        to="/contact"
                        className="btn-primary w-full text-center"
                      >
                        Book Consultation
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-secondary">
        <div className="container text-center">
          <h2 className="heading-lg mb-8">Treatment FAQs</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="card-subtle p-6 text-left">
              <h3 className="font-medium mb-2">
                How do I know which treatment is right for me?
              </h3>
              <p className="text-sm text-muted-foreground">
                Every client receives a free consultation where we assess your
                skin, discuss your concerns, and recommend the most suitable
                treatments for your goals. Contact us on 07454 853 335 to book.
              </p>
            </div>
            <div className="card-subtle p-6 text-left">
              <h3 className="font-medium mb-2">Do you offer payment plans?</h3>
              <p className="text-sm text-muted-foreground">
                Yes, we offer flexible payment plans to make treatments more
                accessible. Ask about our payment options when booking your
                consultation.
              </p>
            </div>
            <div className="card-subtle p-6 text-left">
              <h3 className="font-medium mb-2">
                How many sessions will I need?
              </h3>
              <p className="text-sm text-muted-foreground">
                The number of sessions varies by treatment and individual
                response. We offer multi-session courses for treatments like PRP
                and Mesotherapy at discounted rates.
              </p>
            </div>
          </div>
          <div className="mt-8">
            <Link to="/faq" className="btn-primary">
              View All FAQs
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Treatments;
