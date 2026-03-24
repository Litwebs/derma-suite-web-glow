import { Link } from "react-router-dom";
import { Check, ArrowRight, Info } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Pricing = () => {
  const pricingData = [
    {
      id: "facials",
      category: "Facials",
      treatments: [
        { name: "The Perfect Facial (1 hr)", price: "£35", popular: true },
        { name: "Hydro Facial & Serum (1 hr 30 mins)", price: "£85" },
        { name: "Million Dollar Facial (1 hr 30 mins)", price: "£85" },
        { name: "Add-on: Dermaplaning Serum", price: "£10" },
        { name: "Add-on: Serum", price: "£12" },
        { name: "Add-on: Microneedling", price: "£50" },
      ],
    },
    {
      id: "anti-wrinkle",
      category: "Anti-Wrinkle Injections",
      treatments: [
        { name: "1 Area", price: "£130", popular: true },
        { name: "2 Areas", price: "£150" },
        { name: "3 Areas", price: "£200" },
        { name: "Masseter (Face Slimming)", price: "£150" },
      ],
    },
    {
      id: "dermal-filler",
      category: "Dermal Filler",
      treatments: [
        { name: "0.5ml", price: "£100" },
        { name: "1ml", price: "£140", popular: true },
        { name: "Russian Lips", price: "£150" },
        { name: "Jaw Contour", price: "£180" },
        { name: "Nasolabial", price: "£140" },
      ],
    },
    {
      id: "fat-dissolving",
      category: "Fat Dissolving",
      treatments: [
        { name: "Small Area - Chin, Jawline (30 mins)", price: "£50" },
        { name: "Large Area - Stomach, Thighs, Bingo Wings", price: "£150" },
      ],
    },
    {
      id: "vitamin-injections",
      category: "Vitamin Injections",
      treatments: [
        { name: "Vitamin D", price: "£35" },
        { name: "Vitamin C", price: "£35" },
        { name: "Vitamin B12", price: "£20", popular: true },
        { name: "Glutathione (600mg)", price: "£50" },
      ],
    },
    {
      id: "led-therapy",
      category: "LED Therapy",
      treatments: [
        {
          name: "The Perfect Facial & LED Therapy (1 hr 15 mins)",
          price: "£55",
          popular: true,
        },
      ],
    },
    {
      id: "mesotherapy",
      category: "Mesotherapy",
      treatments: [
        { name: "Vitaran 1 (Eyes)", price: "£180" },
        { name: "Vitaran 1 (Eyes) - 4 treatments", price: "£680" },
        { name: "Vitaran 2 (Face)", price: "£230" },
        { name: "Vitaran 2 (Face) - 4 treatments", price: "£800" },
        { name: "Vitaran (Face & Eyes)", price: "£350" },
        {
          name: "Vitaran (Face & Eyes) - 4 treatments",
          price: "£1200",
          popular: true,
        },
      ],
    },
    {
      id: "prp-treatments",
      category: "PRP Treatments",
      treatments: [
        { name: "PRP Undereyes", price: "£150" },
        { name: "PRP Undereyes - 4 sessions", price: "£520" },
        { name: "PRP Vampire Facial", price: "£170" },
        { name: "PRP Vampire Facial - 4 sessions", price: "£600" },
        { name: "PRP Hair Restoration - Hair Line (1 session)", price: "£120" },
        {
          name: "PRP Hair Restoration - Hair Line (4 sessions)",
          price: "£400",
        },
        { name: "PRP Hair Restoration - Full Head (1 session)", price: "£200" },
        {
          name: "PRP Hair Restoration - Full Head (4 sessions)",
          price: "£750",
          popular: true,
        },
        { name: "PRP Microneedling - Vampire Facial", price: "£120" },
        { name: "PRP Microneedling - 4 sessions", price: "£430" },
      ],
    },
    {
      id: "laser-hair-removal",
      category: "Laser Hair Removal",
      treatments: [
        { name: "Extra Small Area - Per session", price: "£20" },
        { name: "Extra Small Area - 6 sessions", price: "£110", popular: true },
        { name: "Small Area - Per session", price: "£35" },
        { name: "Small Area - 6 sessions", price: "£200" },
        { name: "Medium Area - Per session", price: "£45" },
        { name: "Medium Area - 6 sessions", price: "£250" },
        { name: "Large Area - Per session", price: "£55" },
        { name: "Large Area - 6 sessions", price: "£300" },
        { name: "Full Body - Per session", price: "£250" },
        { name: "Full Body - 8 sessions", price: "£1,499", popular: true },
      ],
    },
  ];

  const laserAreaInfo: Record<
    string,
    { items?: string[]; note?: string; priceLines: string[] }
  > = {
    "Extra Small Area": {
      items: [
        "Monobrow",
        "Earlobes",
        "Upper lip",
        "Chin",
        "Sideburns",
        "Fingers",
        "Nipples",
        "Toes",
      ],
      priceLines: ["Per session £20", "6 sessions £110"],
    },
    "Small Area": {
      items: [
        "Neck",
        "Beard Line",
        "Upper Lip & Chin",
        "Hands",
        "Feet",
        "Underarms",
        "Shoulder Blades",
        "Peri-Anal",
        "Bikini Line",
      ],
      priceLines: ["Per session £35", "6 sessions £200"],
    },
    "Medium Area": {
      items: [
        "Half Face & Neck",
        "Half Arms",
        "Abdomen",
        "Chest",
        "Back",
        "Half Legs",
        "Buttocks",
        "Hollywood",
      ],
      priceLines: ["Per session £45", "6 sessions £250"],
    },
    "Large Area": {
      items: [
        "Full Face & Neck",
        "Full Legs",
        "Full Arms",
        "Back & Shoulders",
        "Chest & Abdomen",
        "Back & Chest",
      ],
      priceLines: ["Per session £55", "6 sessions £300"],
    },
    "Full Body": {
      note: "Includes all desired areas",
      priceLines: ["Per session £250", "8 sessions £1,499"],
    },
  };

  const getLaserArea = (treatmentName: string) => {
    const area = treatmentName.split(" - ")[0]?.trim();
    return area;
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-subtle py-16 lg:py-24">
        <div className="container text-center">
          <h1 className="heading-xl mb-6">Treatment Pricing</h1>
          <p className="body-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Transparent pricing for all our medical aesthetic treatments. All
            prices include consultation, treatment, and aftercare advice.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 text-accent font-medium">
              <Check className="w-4 h-4 mr-2" />
              Payment plans available
            </div>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary border border-border font-medium">
              <Check className="w-4 h-4 mr-2" />
              Book: 07454 853 335
            </div>
          </div>
        </div>
      </section>

      {/* Individual Pricing */}
      <section className="section bg-secondary">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Individual Treatment Pricing</h2>
            <p className="body-md text-muted-foreground">
              Choose from our full range of individual treatments
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {pricingData.map((category) => (
              <div
                key={category.id}
                id={category.id}
                className="card-subtle p-8 scroll-mt-24"
              >
                <h3 className="heading-md mb-6 text-primary">
                  {category.category}
                </h3>
                {category.category === "Laser Hair Removal" ? (
                  <Accordion
                    type="single"
                    collapsible
                    className="divide-y divide-border/50"
                  >
                    {category.treatments.map((treatment, treatmentIndex) => {
                      const area = getLaserArea(treatment.name);
                      const info = area ? laserAreaInfo[area] : undefined;
                      const value = `${area}-${treatmentIndex}`
                        .toLowerCase()
                        .replace(/\s+/g, "-");
                      return (
                        <AccordionItem
                          value={value}
                          key={value}
                          className="border-b-0"
                        >
                          <AccordionTrigger className="py-3">
                            <div className="flex w-full items-center justify-between">
                              <div className="flex items-center space-x-2 text-left">
                                <span className="text-sm font-medium">
                                  {treatment.name}
                                </span>
                                {treatment.popular && (
                                  <span className="inline-flex items-center px-2 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium">
                                    Popular
                                  </span>
                                )}
                              </div>
                              <span className="font-semibold text-primary">
                                {treatment.price}
                              </span>
                            </div>
                          </AccordionTrigger>
                          {info && (
                            <AccordionContent>
                              <div className="text-muted-foreground space-y-3">
                                {info.items && (
                                  <div>
                                    <p className="text-sm font-medium text-foreground mb-1">
                                      Choose from one of the following:
                                    </p>
                                    <ul className="list-disc pl-5 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1">
                                      {info.items.map((item) => (
                                        <li key={item} className="text-sm">
                                          {item}
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                )}
                                {info.note && (
                                  <p className="text-sm">{info.note}</p>
                                )}
                                <div className="pt-1 border-t border-border/50">
                                  <p className="text-sm font-medium text-foreground mt-3">
                                    Pricing
                                  </p>
                                  <div className="text-sm flex flex-col sm:flex-row sm:items-center sm:space-x-4">
                                    {info.priceLines.map((line) => (
                                      <span key={line}>{line}</span>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </AccordionContent>
                          )}
                        </AccordionItem>
                      );
                    })}
                  </Accordion>
                ) : (
                  <div className="space-y-4">
                    {category.treatments.map((treatment, treatmentIndex) => (
                      <div
                        key={treatmentIndex}
                        className="flex items-center justify-between py-2 border-b border-border/50 last:border-b-0"
                      >
                        <div className="flex items-center space-x-2">
                          <span className="text-sm font-medium">
                            {treatment.name}
                          </span>
                          {treatment.popular && (
                            <span className="inline-flex items-center px-2 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium">
                              Popular
                            </span>
                          )}
                        </div>
                        <span className="font-semibold text-primary">
                          {treatment.price}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Notes */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="card-elevated p-8">
              <div className="flex items-start space-x-3 mb-6">
                <Info className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="heading-sm mb-2">
                    Important Pricing Information
                  </h3>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <p>
                      <strong>Consultation:</strong> All treatments include a
                      free initial consultation where we assess your suitability
                      and discuss expected outcomes.
                    </p>
                    <p>
                      <strong>Payment Plans:</strong> We offer flexible payment
                      plans to make treatments more accessible. Ask us about
                      available options when booking.
                    </p>
                    <p>
                      <strong>Package Discounts:</strong> Save money when
                      booking multiple treatments together. Our packages offer
                      significant savings compared to individual treatments.
                    </p>
                    <p>
                      <strong>Course Discounts:</strong> Multi-session courses
                      (e.g., PRP, Mesotherapy) are priced to save you money
                      versus single sessions.
                    </p>
                    <p>
                      <strong>Booking:</strong> Call us on 07454 853 335 or use
                      our contact form. We're open Sunday-Friday 9am-6pm (Closed
                      Saturdays).
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="btn-primary text-center">
                  Book Free Consultation
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <Link to="/faq" className="btn-outline text-center">
                  Payment FAQs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
