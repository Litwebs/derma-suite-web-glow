import { useState } from "react";
import { X, ChevronLeft, ChevronRight, Eye } from "lucide-react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Results" },
    { id: "anti-wrinkle", name: "Anti-wrinkle" },
    { id: "dermal-filler", name: "Dermal Fillers" },
    { id: "laser-hair", name: "Laser Hair Removal" },
    { id: "facial", name: "Facial Treatments" },
    { id: "prp", name: "PRP Treatments" },
  ];

  const galleryItems = [
    {
      id: 1,
      category: "anti-wrinkle",
      treatment: "Anti-wrinkle Injections",
      description:
        "Softening of expression lines while maintaining natural facial movement.",
      beforeAlt: "Before anti-wrinkle treatment showing forehead lines",
      afterAlt: "After anti-wrinkle treatment with smooth forehead",
    },
    {
      id: 2,
      category: "dermal-filler",
      treatment: "Lip Enhancement",
      description:
        "Subtle enhancement to improve lip definition and balance while maintaining a natural appearance.",
      beforeAlt: "Before lip filler treatment",
      afterAlt: "After lip filler showing natural enhancement",
    },
    {
      id: 3,
      category: "laser-hair",
      treatment: "Laser Hair Removal",
      description:
        "Long-term hair reduction across the treated area for smoother, more manageable skin.",
      beforeAlt: "Before laser hair removal showing hair growth",
      afterAlt: "After laser hair removal with smooth skin",
    },
    {
      id: 4,
      category: "facial",
      treatment: "Microneedling",
      description:
        "Refined skin texture with improved smoothness and reduced visible imperfections.",
      beforeAlt: "Before microneedling showing uneven skin texture",
      afterAlt: "After microneedling with improved skin texture",
    },
    {
      id: 5,
      category: "dermal-filler",
      treatment: "Cheek Augmentation",
      description:
        "Restored mid-face structure for a refreshed, more balanced facial profile.",
      beforeAlt: "Before cheek filler showing volume loss",
      afterAlt: "After cheek filler with restored volume",
    },
    {
      id: 6,
      category: "anti-wrinkle",
      treatment: "Anti-wrinkle Injections",
      description:
        "Softening of expression lines while maintaining natural facial movement.",
      beforeAlt: "Before neck treatment showing horizontal lines",
      afterAlt: "After neck treatment with smoother appearance",
    },
    {
      id: 7,
      category: "prp",
      treatment: "PRP Hair Restoration",
      description:
        "Support for natural hair growth stimulation and improved scalp health.",
      beforeAlt: "Before PRP hair treatment showing hair thinning",
      afterAlt: "After PRP treatment with increased hair density",
    },
    {
      id: 8,
      category: "facial",
      treatment: "Skin Boosters",
      description:
        "Improved hydration and skin luminosity for a healthier overall complexion.",
      beforeAlt: "Before skin booster treatment showing dull skin",
      afterAlt: "After skin booster treatment with glowing complexion",
    },
    {
      id: 9,
      category: "dermal-filler",
      treatment: "Chin Filler",
      description:
        "Improved lower-face projection to enhance profile harmony and facial balance.",
      beforeAlt: "Before chin filler showing profile imbalance",
      afterAlt: "After chin filler with improved profile balance",
    },
  ];

  const filteredItems =
    selectedCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: "prev" | "next") => {
    if (selectedImage === null) return;

    const currentIndex = selectedImage;
    let newIndex;

    if (direction === "prev") {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredItems.length - 1;
    } else {
      newIndex = currentIndex < filteredItems.length - 1 ? currentIndex + 1 : 0;
    }

    setSelectedImage(newIndex);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") navigateImage("prev");
    if (e.key === "ArrowRight") navigateImage("next");
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-subtle py-16 lg:py-24">
        <div className="container text-center">
          <h1 className="heading-xl mb-6">Treatment Gallery</h1>
          <p className="body-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            See real results from our clients. All images are used with
            permission and represent typical outcomes. Individual results may
            vary.
          </p>
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
            <Eye className="w-4 h-4 mr-2" />
            Before & after photos from real clients
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="section-sm">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-foreground hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className="card-elevated overflow-hidden group cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <div className="relative">
                  {/* Before/After Placeholder */}
                  <div className="aspect-[4/3] bg-gradient-subtle relative overflow-hidden">
                    <div className="absolute inset-0 flex">
                      {/* Before side */}
                      <div className="w-1/2 bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
                        <div className="text-center text-muted-foreground">
                          <div className="w-16 h-16 mx-auto mb-2 bg-primary/10 rounded-full flex items-center justify-center">
                            <Eye className="w-8 h-8 text-primary/60" />
                          </div>
                          <p className="text-xs font-medium">BEFORE</p>
                        </div>
                      </div>
                      {/* After side */}
                      <div className="w-1/2 bg-gradient-to-bl from-accent/10 to-primary/10 flex items-center justify-center">
                        <div className="text-center text-primary">
                          <div className="w-16 h-16 mx-auto mb-2 bg-primary/20 rounded-full flex items-center justify-center">
                            <Eye className="w-8 h-8 text-primary" />
                          </div>
                          <p className="text-xs font-medium">AFTER</p>
                        </div>
                      </div>
                    </div>

                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="bg-white/90 px-4 py-2 rounded-lg">
                        <p className="text-sm font-medium text-foreground">
                          View Details
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="heading-sm mb-2">{item.treatment}</h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="section bg-secondary">
        <div className="container text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="heading-md mb-4">Important Information</h2>
            <div className="space-y-4 text-sm text-muted-foreground">
              <p>
                All before and after photos are of real clients who have
                consented to their images being used. Results shown are typical
                but individual outcomes may vary based on skin type, age,
                lifestyle, and adherence to aftercare instructions.
              </p>
              <p>
                Photos have not been digitally altered beyond standard color
                correction and lighting adjustment. All treatments were
                performed by qualified medical practitioners at Derma Suite Ltd.
              </p>
              <p>
                For the most accurate expectation of your potential results, we
                recommend booking a free consultation where we can discuss your
                individual case.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            aria-label="Close gallery"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Navigation buttons */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigateImage("prev");
            }}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              navigateImage("next");
            }}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
            aria-label="Next image"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          {/* Image content */}
          <div
            className="max-w-4xl max-h-full overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-white rounded-lg p-6">
              <div className="aspect-[4/3] bg-gradient-subtle mb-4 rounded-lg flex">
                <div className="w-1/2 bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center rounded-l-lg">
                  <div className="text-center text-muted-foreground">
                    <div className="w-20 h-20 mx-auto mb-3 bg-primary/10 rounded-full flex items-center justify-center">
                      <Eye className="w-10 h-10 text-primary/60" />
                    </div>
                    <p className="font-medium">BEFORE</p>
                  </div>
                </div>
                <div className="w-1/2 bg-gradient-to-bl from-accent/10 to-primary/10 flex items-center justify-center rounded-r-lg">
                  <div className="text-center text-primary">
                    <div className="w-20 h-20 mx-auto mb-3 bg-primary/20 rounded-full flex items-center justify-center">
                      <Eye className="w-10 h-10 text-primary" />
                    </div>
                    <p className="font-medium">AFTER</p>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <h3 className="heading-md mb-2">
                  {filteredItems[selectedImage].treatment}
                </h3>
                <p className="text-muted-foreground">
                  {filteredItems[selectedImage].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
