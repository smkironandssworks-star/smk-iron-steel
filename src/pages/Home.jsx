import Hero from "../components/home/Hero";
import ProductGrid from "../components/home/ProductGrid";
import TrustBar from "../components/home/TrustBar";
import AboutSection from "../components/home/AboutSection";
import GalleryPreview from "../components/home/GalleryPreview";
import CTASection from "../components/home/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <ProductGrid />
      <TrustBar />
      <AboutSection />
      <GalleryPreview />
      <CTASection />
    </>
  );
}