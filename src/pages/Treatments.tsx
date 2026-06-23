import { Link } from "react-router-dom";
import { useState } from "react";
import { ArrowRight, CheckCircle, Clock, ChevronDown } from "lucide-react";

type Treatment = {
  id: string;
  title: string;
  description: string;
  benefits: string[];
  duration: string;
  downtime: string;
  contraindications: string;
  whatToExpect?: string;
  aftercare?: string[];
};

const TreatmentCard = ({ treatment }: { treatment: Treatment }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div id={treatment.id} className="card-elevated p-8 scroll-mt-24">
      <div className="grid md:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="md:col-span-2 space-y-4">
          <h2 className="heading-lg text-primary">{treatment.title}</h2>
          <p className="body-md text-muted-foreground">
            {treatment.description}
          </p>

          {/* Benefits */}
          <div>
            <h3 className="heading-sm mb-3">Key Benefits</h3>
            <ul className="grid sm:grid-cols-2 gap-2">
              {treatment.benefits.map((benefit, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                  <span className="text-sm">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* What to Expect & Aftercare */}
          {(treatment.whatToExpect || treatment.aftercare) && (
            <div className="border border-border rounded-lg overflow-hidden">
              <button
                onClick={() => setExpanded(!expanded)}
                className="w-full px-5 py-3 text-left flex items-center justify-between bg-secondary/50 hover:bg-secondary transition-colors text-sm font-medium"
              >
                What to Expect &amp; Aftercare
                <ChevronDown
                  className={`w-4 h-4 text-primary transition-transform ${expanded ? "rotate-180" : ""}`}
                />
              </button>
              {expanded && (
                <div className="px-5 py-4 space-y-4">
                  {treatment.whatToExpect && (
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wide text-primary mb-2">
                        What to Expect
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {treatment.whatToExpect}
                      </p>
                    </div>
                  )}
                  {treatment.aftercare && (
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wide text-primary mb-2">
                        Aftercare
                      </h4>
                      <ul className="space-y-1">
                        {treatment.aftercare.map((item, i) => (
                          <li
                            key={i}
                            className="flex items-start space-x-2 text-sm text-muted-foreground"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Treatment Details */}
        <div className="space-y-6">
          <div className="flex items-center space-x-3 p-3 bg-secondary rounded-lg">
            <Clock className="w-5 h-5 text-primary" />
            <div>
              <div className="font-medium text-sm">Duration</div>
              <div className="text-sm text-muted-foreground">
                {treatment.duration}
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <Link
              to={`/pricing#${treatment.id}`}
              className="btn-outline w-full text-center"
            >
              View Pricing
            </Link>
            <Link to="/contact" className="btn-primary w-full text-center">
              Book Consultation
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const Treatments = () => {
  const treatments: Treatment[] = [
    {
      id: "lip-fillers",
      title: "Lip Fillers",
      description:
        "Lip fillers can enhance shape, definition, hydration, and volume while maintaining a natural appearance tailored to your features. Treatment is personalised to your preferences and facial proportions.",
      benefits: [
        "Enhanced lip shape and definition",
        "Improved hydration and volume",
        "Natural, balanced enhancement",
        "Personalised to your features",
      ],
      duration: "30–45 minutes",
      downtime: "Mild swelling for a few days",
      contraindications: "Active infections, pregnancy",
      whatToExpect:
        "Your appointment begins with a detailed consultation and assessment of lip shape, symmetry, and desired outcome. The treatment involves precise placement of dermal filler to enhance definition, hydration, and volume in a balanced way. Results are visible immediately, although lips may appear slightly swollen before settling into their final appearance.",
      aftercare: [
        "Mild swelling, tenderness, or bruising is normal for a few days",
        "Avoid touching or applying pressure to the area for 24 hours",
        "Avoid strenuous exercise, heat exposure, and alcohol for 24 hours",
        "Keep lips clean and avoid makeup on the area initially",
        "Results typically settle within 1–2 weeks",
      ],
    },
    {
      id: "cheek-fillers",
      title: "Cheek Fillers",
      description:
        "Cheek fillers can restore volume, improve facial contours, and provide subtle structural support. Treatment is designed to create refined enhancement while preserving natural facial balance.",
      benefits: [
        "Restored mid-face volume",
        "Improved facial contours",
        "Subtle structural support",
        "Natural facial balance",
      ],
      duration: "30–45 minutes",
      downtime: "Mild swelling 24–72 hours",
      contraindications: "Active infections, pregnancy",
      whatToExpect:
        "Cheek filler treatment is used to restore structure and enhance facial contouring. Product is placed strategically to support natural lift and facial balance. Results are visible immediately, with subtle settling over the following days.",
      aftercare: [
        "Mild swelling or tenderness may occur for 24–72 hours",
        "Avoid excessive pressure on the treated area",
        "Avoid exercise and heat exposure for 24 hours",
        "Sleep slightly elevated if possible on the first night",
        "Final results settle within 1–2 weeks",
      ],
    },
    {
      id: "chin-fillers",
      title: "Chin Fillers",
      description:
        "Chin filler may improve profile balance, facial proportions, and lower-face definition. Treatment focuses on proportion and subtle enhancement rather than dramatic change.",
      benefits: [
        "Improved profile balance",
        "Enhanced lower-face definition",
        "Better facial proportions",
        "Natural, refined result",
      ],
      duration: "30–45 minutes",
      downtime: "Mild swelling temporarily",
      contraindications: "Active infections, pregnancy",
      whatToExpect:
        "Chin filler is used to improve lower-face proportion and profile balance. Treatment is tailored to your facial structure to ensure a natural and refined result. Results are visible immediately, with further refinement as swelling subsides.",
      aftercare: [
        "Temporary swelling or tenderness is common",
        "Avoid pressure to the chin area for 24–48 hours",
        "Avoid exercise, alcohol, and heat for 24 hours",
        "Maintain good hygiene around the area",
        "Final results typically settle within 1–2 weeks",
      ],
    },
    {
      id: "tear-trough",
      title: "Tear Trough Treatment",
      description:
        "This treatment is designed to soften the appearance of under-eye hollows and reduce shadowing. A conservative, precision-led approach is used to ensure natural results in this delicate area.",
      benefits: [
        "Softened under-eye hollows",
        "Reduced shadowing",
        "More rested appearance",
        "Precision-led technique",
      ],
      duration: "30–45 minutes",
      downtime: "Temporary swelling possible",
      contraindications:
        "Not suitable for all under-eye concerns — assessed at consultation",
      whatToExpect:
        "This treatment is performed with precision to address under-eye hollows and reduce shadowing. The area is delicate, so a conservative approach is used to ensure natural results. Improvement is visible immediately, though mild swelling may temporarily affect appearance.",
      aftercare: [
        "Mild swelling or bruising is common and expected",
        "Avoid rubbing or applying pressure under the eyes",
        "Avoid makeup for at least 12–24 hours",
        "Sleep slightly elevated for the first night",
        "Final results settle over 1–2 weeks",
      ],
    },
    {
      id: "anti-wrinkle",
      title: "Anti-wrinkle Injections",
      description:
        "Softens expression lines while maintaining natural facial movement. Treatment is used to smooth forehead lines, frown lines, and crow's feet with a precise, natural-looking approach.",
      benefits: [
        "Softens expression lines",
        "Maintains natural movement",
        "Natural-looking results",
        "Quick procedure",
      ],
      duration: "15–30 minutes",
      downtime: "Minimal bruising possible",
      contraindications: "Pregnancy, neuromuscular disorders",
    },
    {
      id: "dermal-filler",
      title: "Dermal Filler",
      description:
        "Hyaluronic acid fillers to restore volume, enhance facial contours, and create balanced, natural results. Suitable for lips, cheeks, chin, jaw, and nasolabial folds.",
      benefits: [
        "Restores facial volume",
        "Enhances facial contours",
        "Smooths deep lines",
        "Immediate results",
      ],
      duration: "30–60 minutes",
      downtime: "Mild swelling 24–48 hours",
      contraindications: "Active infections, autoimmune conditions",
    },
    {
      id: "profhilo",
      title: "Profhilo",
      description:
        "Profhilo is an injectable skin remodelling treatment designed to improve hydration and support skin quality. Unlike traditional fillers, it spreads beneath the skin to deeply hydrate and stimulate collagen and elastin production.",
      benefits: [
        "Deep skin hydration",
        "Stimulates collagen and elastin",
        "Improves skin quality",
        "Suitable for face and other areas",
      ],
      duration: "30 minutes",
      downtime: "Minimal — small raised areas settle quickly",
      contraindications: "Active infections, allergies to hyaluronic acid",
      whatToExpect:
        "Profhilo is delivered via a series of small injection points. The treatment spreads beneath the skin to deeply hydrate and stimulate collagen and elastin production. Initial improvement may be subtle, with best results developing after a course of treatment.",
      aftercare: [
        "Small raised areas at injection points may appear temporarily",
        "Avoid touching the treated area for several hours",
        "Avoid heat, saunas, and exercise for 24 hours",
        "Do not apply makeup for at least 12 hours",
        "Full results develop gradually over several weeks",
      ],
    },
    {
      id: "mesotherapy",
      title: "Polynucleotides",
      description:
        "Polynucleotides are regenerative injectables designed to support skin renewal and improve overall skin quality. Treatment may support hydration, texture, elasticity, and visible skin rejuvenation.",
      benefits: [
        "Supports skin renewal",
        "Improves hydration and texture",
        "Improves elasticity",
        "Long-lasting results",
      ],
      duration: "45–60 minutes",
      downtime: "Mild redness 24 hours",
      contraindications: "Active infections, allergies",
      whatToExpect:
        "Polynucleotide treatment supports skin regeneration and quality improvement over time. The treatment is typically delivered in a course for optimal results. You may notice initial hydration improvements followed by gradual enhancement in skin texture and resilience.",
      aftercare: [
        "Mild redness or swelling may occur temporarily",
        "Avoid touching the treated area for 24 hours",
        "Avoid heat, alcohol, and exercise for 24 hours",
        "Keep skin clean and avoid active skincare products for 48 hours",
        "Results build progressively over several weeks",
      ],
    },
    {
      id: "microneedling",
      title: "Microneedling",
      description:
        "Microneedling stimulates natural collagen production to improve skin texture, tone, and quality. It may improve uneven texture, fine lines, enlarged pores, and the appearance of acne scarring.",
      benefits: [
        "Improves skin texture and tone",
        "Stimulates collagen production",
        "Reduces fine lines and pores",
        "Helps with acne scarring",
      ],
      duration: "45–60 minutes",
      downtime: "Redness 24–48 hours",
      contraindications: "Active acne, open wounds, skin infections",
      whatToExpect:
        "Microneedling creates controlled micro-injuries in the skin to stimulate collagen production. The treatment is designed to improve texture, tone, and overall skin quality. Skin may appear red immediately afterwards, similar to mild sun exposure.",
      aftercare: [
        "Redness and sensitivity are expected for 24–48 hours",
        "Avoid makeup for at least 24 hours",
        "Avoid active skincare ingredients (retinol, acids) for 3–5 days",
        "Avoid sun exposure and always use SPF",
        "Keep skin clean and hydrated with gentle products",
        "Results develop gradually over a course of treatments",
      ],
    },
    {
      id: "laser-hair-removal",
      title: "Laser Hair Removal",
      description:
        "A medically guided treatment designed to significantly reduce unwanted hair growth safely and effectively. Using advanced laser technology, the treatment targets hair follicles at the root to reduce regrowth over time, leaving skin smoother and more manageable.",
      benefits: [
        "Long-term hair reduction",
        "Suitable for face and body",
        "Minimises ingrown hairs",
        "Minimal downtime",
      ],
      duration: "15–60 minutes (area dependent)",
      downtime: "None to minimal",
      contraindications:
        "Pregnancy, recent sun exposure, certain skin conditions",
      whatToExpect:
        "A typical session lasts between 15 and 60 minutes depending on the treatment area. During treatment, you may feel a mild warming or snapping sensation as the laser targets the hair follicles. Most clients find the treatment very tolerable. Protective eyewear is provided throughout the session. Every treatment begins with a consultation and patch test to ensure suitability and safety.",
      aftercare: [
        "Avoid sun exposure and use SPF on treated areas",
        "Avoid heat treatments such as saunas for 24–48 hours",
        "Do not wax or pluck between sessions — shaving is allowed",
        "Keep skin hydrated and avoid harsh products immediately after treatment",
        "Mild redness may occur but typically resolves quickly",
      ],
    },
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
      duration: "60–90 minutes",
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
      duration: "30–45 minutes",
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
      duration: "30–60 minutes",
      downtime: "Redness/peeling varies by peel strength",
      contraindications:
        "Pregnancy, active skin infections, recent isotretinoin use, very sensitive skin",
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
      duration: "30–45 minutes",
      downtime: "Mild swelling 3–5 days",
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
      duration: "15–20 minutes",
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
      duration: "20–30 minutes",
      downtime: "None",
      contraindications: "Pregnancy, certain medications",
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
      duration: "60–90 minutes",
      downtime: "Mild redness or tenderness",
      contraindications: "Blood disorders, recent medications",
    },
  ];
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-subtle py-16 lg:py-24">
        <div className="container text-center">
          <h1 className="heading-xl mb-6">Our Treatments</h1>
          <p className="body-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Advanced aesthetic and skin treatments designed to enhance natural
            features, improve skin quality, and deliver balanced, subtle
            results. All treatments are performed by qualified clinicians in a
            safe, professional environment.
          </p>
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
            Every treatment begins with a personalised consultation
          </div>
        </div>
      </section>

      {/* Treatments Grid */}
      <section className="section">
        <div className="container">
          <div className="grid gap-8">
            {treatments.map((treatment) => (
              <TreatmentCard key={treatment.id} treatment={treatment} />
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
                Every client receives a consultation where we assess your skin,
                discuss your concerns, and recommend the most suitable
                treatments for your goals. Contact us on 07454 853 335 to book.
              </p>
            </div>
            <div className="card-subtle p-6 text-left">
              <h3 className="font-medium mb-2">Do you offer payment plans?</h3>
              <p className="text-sm text-muted-foreground">
                Yes, we offer flexible payment plans to make treatments more
                accessible. Ask about your options when booking your
                consultation.
              </p>
            </div>
            <div className="card-subtle p-6 text-left">
              <h3 className="font-medium mb-2">
                How many sessions will I need?
              </h3>
              <p className="text-sm text-muted-foreground">
                The number of sessions varies by treatment and individual
                response. We offer multi-session courses for treatments like
                PRP, Microneedling, and Polynucleotides at discounted rates.
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
