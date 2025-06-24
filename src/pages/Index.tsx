import MinecraftHero from "@/components/MinecraftHero";
import ModpackFeatures from "@/components/ModpackFeatures";
import InstallationGuide from "@/components/InstallationGuide";
import SystemRequirements from "@/components/SystemRequirements";
import AdminPanel from "@/components/AdminPanel";

const Index = () => {
  return (
    <div className="min-h-screen">
      <MinecraftHero />
      <ModpackFeatures />
      <InstallationGuide />
      <SystemRequirements />
      <AdminPanel />
    </div>
  );
};

export default Index;
