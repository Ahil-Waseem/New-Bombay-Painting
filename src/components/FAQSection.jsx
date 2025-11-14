import React, { useState, useRef, useEffect } from 'react';
import { Plus, Minus } from 'lucide-react';

// Use explicit imports from three.js to ensure module availability
// We assume the necessary packages are available in the build environment.
import * as THREE from 'three'; 

// Data for the FAQ items
const faqData = [
  {
    id: 1,
    question: "Which brands of paint do you use?",
    answer:
      "We use only top-quality branded paints like Asian Paints, Nerolac, Dulux, and Berger to ensure a long-lasting finish. \nThese paints are known for their durability, smooth texture, and vibrant shades — keeping your walls looking fresh for years.",
  },
  {
    id: 2,
    question: "How long does the paint last?",
    answer:
      "With proper surface preparation and premium paint materials, our finishes typically last 8 to 10 years (or even longer). We guarantee that our coatings resist fading, peeling, and stains — maintaining their shine and protection even in humid conditions. \nOur experts use digital color tools and real samples so you can visualize your dream space before we begin.",
  },
  {
    id: 3,
    question: "Do you provide color consultation before starting?",
    answer:
      "Yes! We provide free color consultation to help you choose the perfect shades that match your interiors, lighting, and style. \nOur experts use digital color tools and real samples so you can visualize your dream space before we begin.",
  },
  {
    id: 4,
    question: "Will the painting process create a mess at my home?",
    answer:
      "Our team follows a “Clean Work, Clean Finish” policy — covering furniture, cleaning surfaces daily, and ensuring your space stays neat. \nWe treat your home with the same care as ours.",
  },
  {
    id: 5,
    question: "Do you take both residential and commercial projects?",
    answer:
      "Yes! we handle residential, commercial, and industrial painting projects.\nFrom modern apartments and villas to offices and showrooms — our painters are trained for all scales of work.",
  },
  {
    id: 6,
    question: "How can I book a free site visit or quotation?",
    answer:
      "Just click on the “Contact” button or call us directly at 📞 +91 98195 84682 \nWe’ll schedule a free site inspection and provide a detailed quotation on the same day.",
  },
  {
id: 7,
    question: "Are your clients satisfied with your services?",
    answer: "We’re proud to say that 100% of our clients are happy and recommend us to their friends and family.\nOur focus on quality, timely work, and transparent pricing keeps our clients coming back again and again.",
  },
];

// Individual FAQ item component
const FAQItem = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div
      className={`border-b border-gray-700 transition-all duration-300 ${
        isOpen ? 'bg-gray-900/90' : 'bg-gray-900/70'
      }`}
    >
      {/* Question Header */}
      <button
        className={`flex justify-between items-center w-full p-6 text-left transition-colors duration-200 ${
          isOpen ? 'font-semibold text-yellow-400' : 'font-medium text-white hover:text-yellow-400'
        }`}
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span>{question}</span>
        {/* Icon */}
        <div
          className={`p-1 rounded-full text-black transition-all duration-300 transform ${
            isOpen ? 'bg-yellow-500' : 'bg-yellow-400 hover:bg-yellow-500'
          }`}
        >
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </div>
      </button>

      {/* Answer Content */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100 p-6 pt-0' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-gray-400 leading-relaxed text-sm md:text-base whitespace-pre-line">
          {answer}
        </p>
      </div>
    </div>
  );
};

// 3D House component logic
const ThreeDHouse = () => {
  const mountRef = useRef(null);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);

    const camera = new THREE.PerspectiveCamera(
      75,
      currentMount.clientWidth / currentMount.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    currentMount.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.5);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
    directionalLight.position.set(5, 10, 5);
    scene.add(directionalLight);

    // House body
    const houseMaterial = new THREE.MeshPhongMaterial({ color: 0xffd700 });
    const roofMaterial = new THREE.MeshPhongMaterial({ color: 0x444444 });
    const bodyGeometry = new THREE.BoxGeometry(2, 2, 2);
    const roofGeometry = new THREE.ConeGeometry(1.6, 1, 4);

    const houseBody = new THREE.Mesh(bodyGeometry, houseMaterial);
    const roof = new THREE.Mesh(roofGeometry, roofMaterial);
    roof.position.y = 1.5;
    roof.rotation.y = Math.PI / 4;

    const houseGroup = new THREE.Group();
    houseGroup.add(houseBody);
    houseGroup.add(roof);
    scene.add(houseGroup);

    // Animate
    const animate = () => {
      requestAnimationFrame(animate);
      houseGroup.rotation.y += 0.01;
      renderer.render(scene, camera);

      // ✅ Set initialized only after the first frame renders
      if (!isInitialized) setIsInitialized(true);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    };
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      if (currentMount.contains(renderer.domElement)) {
        currentMount.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="w-full h-full min-h-[300px] lg:min-h-[500px] flex items-center justify-center text-gray-500"
    >
      {!isInitialized && <p>Initializing 3D Home...</p>}
    </div>
  );
};



// Main FAQ Section component
const FAQSection = () => {
  const [openId, setOpenId] = useState(faqData[0].id); // Open the first item by default

  const handleToggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <>
      <section className="pt-10 pb-16 md:pb-24 bg-black font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">
            <span className="text-yellow-500">Frequently Asked</span> Questions.
          </h2>

          {/* Two-Column Layout for Desktop */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            {/* Left Column: FAQ Accordion */}
            <div className="order-2 lg:order-1">
              {/* FAQ Container - Dark theme with yellow accents */}
              <div className="bg-gray-900 border border-gray-700 rounded-2xl shadow-2xl shadow-yellow-500/10 overflow-hidden">
                {faqData.map((item) => (
                  <FAQItem
                    key={item.id}
                    question={item.question}
                    answer={item.answer}
                    isOpen={item.id === openId}
                    onToggle={() => handleToggle(item.id)}
                  />
                ))}
              </div>
            </div>

            {/* Right Column: 3D House Animation */}
            <div className="order-1 lg:order-2 w-full">
              <div className="relative rounded-3xl overflow-hidden bg-gray-900 border-2 border-yellow-500/50 shadow-xl shadow-yellow-500/30">
                <div className="absolute top-0 left-0 p-4 z-10 text-yellow-500 font-bold text-xl">
                    Our Digital Home
                </div>
                <ThreeDHouse />
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default FAQSection;
