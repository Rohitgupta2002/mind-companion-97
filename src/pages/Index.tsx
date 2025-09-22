import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import CrisisSupport from "@/components/CrisisSupport";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Features />
        <CrisisSupport />
      </main>
    </div>
  );
};

export default Index;