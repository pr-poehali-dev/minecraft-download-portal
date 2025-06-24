import MinecraftHero from "@/components/MinecraftHero";
import ModpackFeatures from "@/components/ModpackFeatures";
import InstallationGuide from "@/components/InstallationGuide";
import SystemRequirements from "@/components/SystemRequirements";

const Index = () => {
  return (
    <div className="min-h-screen">
      <MinecraftHero />
      <ModpackFeatures />
      <InstallationGuide />
      <SystemRequirements />
    </div>
  );
};

export default Index;
