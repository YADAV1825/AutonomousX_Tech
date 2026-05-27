import Hero from "@/components/Hero";
import LogoSlider from "@/components/LogoSlider";
import TracksOverview from "@/components/TracksOverview";
import ComparisonTable from "@/components/ComparisonTable";
import CurriculumTimeline from "@/components/CurriculumTimeline";
import Schedule from "@/components/Schedule";
import Instructor from "@/components/Instructor";
import Pricing from "@/components/Pricing";
import DemoBooking from "@/components/DemoBooking";

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Decorative divider */}
      <div className="section-divider mx-auto my-0" />

      <LogoSlider />

      <TracksOverview />

      <div className="section-divider mx-auto" />

      <ComparisonTable />

      <CurriculumTimeline />

      <div className="section-divider mx-auto" />

      <Schedule />

      <div className="section-divider mx-auto" />

      <Instructor />

      <Pricing />

      <div className="section-divider mx-auto" />

      <DemoBooking />
    </>
  );
}
