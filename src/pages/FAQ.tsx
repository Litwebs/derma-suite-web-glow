import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const FAQ = () => {
  const [openItem, setOpenItem] = useState<number | null>(0);
  const [openAftercare, setOpenAftercare] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  const toggleAftercare = (index: number) => {
    setOpenAftercare(openAftercare === index ? null : index);
  };

  const faqCategories = [
    {
      category: "Lip Fillers",
      faqs: [
        {
          question: "What do lip fillers help with?",
          answer:
            "Lip fillers can enhance shape, definition, hydration, and volume while maintaining a natural appearance tailored to your features.",
        },
        {
          question: "Will my lips look natural?",
          answer:
            "Our approach prioritises balanced, subtle enhancement. Treatment plans are personalised according to your preferences and facial proportions.",
        },
        {
          question: "Are lip fillers painful?",
          answer:
            "Most clients describe treatment as manageable. A numbing agent may be used to improve comfort.",
        },
        {
          question: "How long does treatment take?",
          answer: "Appointments are typically completed within 30–45 minutes.",
        },
        {
          question: "Is there downtime?",
          answer:
            "Mild swelling and tenderness may occur following treatment and generally improve over several days.",
        },
        {
          question: "How long do results last?",
          answer:
            "Longevity varies between individuals depending on metabolism, product used, and lifestyle factors.",
        },
      ],
    },
    {
      category: "Cheek Fillers",
      faqs: [
        {
          question: "What are cheek fillers used for?",
          answer:
            "Cheek fillers can restore volume, improve facial contours, and provide subtle structural support.",
        },
        {
          question: "Will cheek filler make my face look overfilled?",
          answer:
            "Treatment is designed to create refined enhancement while preserving natural facial balance.",
        },
        {
          question: "How soon will I see results?",
          answer:
            "Results are visible immediately, although final appearance settles over the following days.",
        },
        {
          question: "Is there recovery time?",
          answer:
            "Minor swelling or tenderness may occur and usually settles quickly.",
        },
        {
          question: "Can cheek fillers be combined with other treatments?",
          answer:
            "Treatment plans may combine procedures where clinically appropriate and discussed during consultation.",
        },
      ],
    },
    {
      category: "Chin Fillers",
      faqs: [
        {
          question: "What does chin filler improve?",
          answer:
            "Chin filler may improve profile balance, facial proportions, and lower-face definition.",
        },
        {
          question: "Is chin filler suitable for everyone?",
          answer:
            "Suitability is assessed during consultation based on anatomy, goals, and medical considerations.",
        },
        {
          question: "Will results look natural?",
          answer:
            "Treatment focuses on proportion and subtle enhancement rather than dramatic change.",
        },
        {
          question: "How long does the appointment take?",
          answer: "Appointments are usually completed within 30–45 minutes.",
        },
        {
          question: "Is there downtime?",
          answer: "Mild swelling or sensitivity may occur temporarily.",
        },
      ],
    },
    {
      category: "Tear Trough Treatment",
      faqs: [
        {
          question: "What does tear trough treatment address?",
          answer:
            "This treatment is designed to soften the appearance of under-eye hollows and reduce shadowing.",
        },
        {
          question: "Will this remove dark circles completely?",
          answer:
            "Results vary depending on the cause of dark circles and treatment suitability.",
        },
        {
          question: "Is tear trough treatment suitable for everyone?",
          answer:
            "Not all under-eye concerns are treated with filler. Suitability is determined during consultation.",
        },
        {
          question: "Is recovery required?",
          answer:
            "Temporary swelling may occur before the final result settles.",
        },
        {
          question: "When will I see final results?",
          answer:
            "Initial results are immediate with continued settling over approximately one to two weeks.",
        },
      ],
    },
    {
      category: "Profhilo",
      faqs: [
        {
          question: "What is Profhilo?",
          answer:
            "Profhilo is an injectable skin remodelling treatment designed to improve hydration and support skin quality.",
        },
        {
          question: "Does Profhilo add volume?",
          answer:
            "Profhilo is not designed to create volume; it focuses on hydration and skin rejuvenation.",
        },
        {
          question: "What areas can be treated?",
          answer:
            "Profhilo is commonly used on the face and may also be considered for other suitable areas.",
        },
        {
          question: "How many sessions are recommended?",
          answer:
            "Treatment plans vary and will be discussed during consultation.",
        },
        {
          question: "When will I notice results?",
          answer: "Results develop progressively as skin quality improves.",
        },
      ],
    },
    {
      category: "Polynucleotides",
      faqs: [
        {
          question: "What are polynucleotides?",
          answer:
            "Polynucleotides are regenerative injectables designed to support skin renewal and improve overall skin quality.",
        },
        {
          question: "What concerns can this treatment help with?",
          answer:
            "Treatment may support hydration, texture, elasticity, and visible skin rejuvenation.",
        },
        {
          question: "How many sessions are needed?",
          answer:
            "A treatment course is often recommended depending on your goals.",
        },
        {
          question: "Is there downtime?",
          answer:
            "Temporary redness or mild swelling may occur after treatment.",
        },
        {
          question: "When will results appear?",
          answer: "Results develop gradually as skin regeneration progresses.",
        },
      ],
    },
    {
      category: "Microneedling",
      faqs: [
        {
          question: "What is microneedling?",
          answer:
            "Microneedling is a treatment that stimulates natural collagen production to improve skin texture and quality.",
        },
        {
          question: "What concerns does microneedling help with?",
          answer:
            "It may improve uneven texture, fine lines, enlarged pores, and the appearance of acne scarring.",
        },
        {
          question: "Is treatment uncomfortable?",
          answer:
            "Most clients find treatment manageable and comfort measures can be discussed.",
        },
        {
          question: "How many sessions will I need?",
          answer:
            "Treatment frequency depends on individual goals and skin concerns.",
        },
        {
          question: "Is there downtime?",
          answer:
            "Temporary redness similar to mild sun exposure may occur for a short period.",
        },
        {
          question: "When will I see results?",
          answer:
            "Improvements develop gradually following treatment and over a recommended course.",
        },
      ],
    },
    {
      category: "Laser Hair Removal",
      faqs: [
        {
          question: "How does laser hair removal work?",
          answer:
            "Laser hair removal uses concentrated light energy to target pigment in the hair follicle. The heat generated reduces the follicle's ability to produce new hair over time, resulting in long-term hair reduction.",
        },
        {
          question: "Is laser hair removal permanent?",
          answer:
            "Laser hair removal significantly reduces hair growth, but results vary between individuals. Most clients experience long-term reduction in hair density and regrowth. Occasional maintenance sessions may be required.",
        },
        {
          question: "How many sessions will I need?",
          answer:
            "Most clients require a course of treatments due to the natural hair growth cycle. The exact number depends on factors such as hair thickness, area being treated, skin type, and hormonal influences.",
        },
        {
          question: "Does laser hair removal hurt?",
          answer:
            "Most clients describe the sensation as mild and tolerable, often compared to a light snapping feeling on the skin. Discomfort varies depending on the treatment area and individual sensitivity.",
        },
        {
          question: "Is there any downtime?",
          answer:
            "There is minimal to no downtime. Some mild redness or warmth in the treated area is normal and usually resolves within a few hours.",
        },
        {
          question: "What areas can be treated?",
          answer:
            "Laser hair removal can be used on most areas of the face and body, including underarms, legs, bikini line, arms, chest, back, and facial areas such as the upper lip and chin.",
        },
        {
          question: "What should I avoid after treatment?",
          answer:
            "After treatment, it is recommended to avoid heat exposure (such as saunas and hot baths), sun exposure, and vigorous exercise for 24–48 hours. SPF should be used on exposed areas.",
        },
        {
          question: "Can I shave between sessions?",
          answer:
            "Yes, shaving is allowed and recommended between sessions. Waxing, plucking, or threading should be avoided as these remove the hair follicle targeted by the laser.",
        },
        {
          question: "When will I see results?",
          answer:
            "Hair reduction becomes noticeable gradually after each session. Treated hair typically grows back finer, lighter, and more sparsely over time.",
        },
      ],
    },
  ];

  const aftercareGuides = [
    {
      treatment: "Lip Fillers",
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
      treatment: "Cheek Fillers",
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
      treatment: "Chin Fillers",
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
      treatment: "Tear Trough Treatment",
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
      treatment: "Profhilo",
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
      treatment: "Polynucleotides",
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
      treatment: "Microneedling",
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
      treatment: "Laser Hair Removal",
      whatToExpect:
        "A typical session lasts between 15 and 60 minutes depending on the treatment area. During treatment, you may feel a mild warming or snapping sensation as the laser targets the hair follicles. Most clients find the treatment very tolerable. Protective eyewear is provided throughout the session.",
      aftercare: [
        "Avoid sun exposure and use SPF on treated areas",
        "Avoid heat treatments such as saunas for 24–48 hours",
        "Do not wax or pluck between sessions — shaving is allowed",
        "Keep skin hydrated and avoid harsh products immediately after treatment",
        "Mild redness may occur but typically resolves quickly",
      ],
    },
  ];

  // Build a flat index map for FAQ items
  const faqIndexMap: number[] = [];
  let counter = 0;
  faqCategories.forEach((cat) => {
    cat.faqs.forEach(() => {
      faqIndexMap.push(counter++);
    });
  });

  let faqIndex = 0;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-subtle py-16 lg:py-24">
        <div className="container text-center">
          <h1 className="heading-xl mb-6">Treatment FAQs</h1>
          <p className="body-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Find answers to common questions about our treatments. Can't find
            what you're looking for? Book a free consultation.
          </p>
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
            <HelpCircle className="w-4 h-4 mr-2" />
            Still have questions? Book a free consultation
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="section">
        <div className="container max-w-4xl">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h2 className="heading-lg mb-8 text-primary">
                {category.category}
              </h2>
              <div className="space-y-4">
                {category.faqs.map((faq, faqIndexInCategory) => {
                  const currentFaqIndex = faqIndex++;
                  return (
                    <div
                      key={faqIndexInCategory}
                      className="card-subtle overflow-hidden"
                    >
                      <button
                        onClick={() => toggleItem(currentFaqIndex)}
                        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-secondary/50 transition-colors"
                        aria-expanded={openItem === currentFaqIndex}
                      >
                        <span className="heading-sm pr-4">{faq.question}</span>
                        <ChevronDown
                          className={`w-5 h-5 text-primary flex-shrink-0 transition-transform ${
                            openItem === currentFaqIndex ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {openItem === currentFaqIndex && (
                        <div className="px-6 pb-6">
                          <div className="pt-2 border-t border-border">
                            <p className="body-md text-muted-foreground leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* What to Expect & Aftercare */}
      <section className="section bg-secondary">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">What to Expect &amp; Aftercare</h2>
            <p className="body-md text-muted-foreground max-w-2xl mx-auto">
              Detailed guidance on what to expect during your treatment and how
              to care for your skin afterwards.
            </p>
          </div>
          <div className="space-y-4">
            {aftercareGuides.map((guide, index) => (
              <div key={index} className="card-elevated overflow-hidden">
                <button
                  onClick={() => toggleAftercare(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-secondary/50 transition-colors"
                  aria-expanded={openAftercare === index}
                >
                  <span className="heading-sm">{guide.treatment}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-primary flex-shrink-0 transition-transform ${
                      openAftercare === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {openAftercare === index && (
                  <div className="px-6 pb-6">
                    <div className="pt-4 border-t border-border space-y-6">
                      <div>
                        <h3 className="font-semibold text-sm uppercase tracking-wide text-primary mb-3">
                          What to Expect
                        </h3>
                        <p className="body-md text-muted-foreground leading-relaxed">
                          {guide.whatToExpect}
                        </p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm uppercase tracking-wide text-primary mb-3">
                          Aftercare
                        </h3>
                        <ul className="space-y-2">
                          {guide.aftercare.map((item, i) => (
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
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section">
        <div className="container text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="heading-lg mb-4">Still Have Questions?</h2>
            <p className="body-md text-muted-foreground mb-8">
              Our team is here to help. Book a free consultation or get in touch
              to discuss your specific needs and goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-primary">
                Book Free Consultation
              </a>
              <a href="tel:07454853335" className="btn-outline">
                Call Us Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
