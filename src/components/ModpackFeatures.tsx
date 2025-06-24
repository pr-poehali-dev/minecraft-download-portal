import Icon from "@/components/ui/icon";

const ModpackFeatures = () => {
  const features = [
    {
      icon: "Zap",
      title: "Технические моды",
      description: "Industrial Craft, Thermal Expansion, Applied Energistics",
      blockType: "stone-block",
    },
    {
      icon: "TreePine",
      title: "Природа и биомы",
      description: "Biomes O' Plenty, Forestry, Natura",
      blockType: "grass-block",
    },
    {
      icon: "Sword",
      title: "Приключения",
      description: "Twilight Forest, Thaumcraft, Botania",
      blockType: "dirt-block",
    },
  ];

  return (
    <section className="py-16 bg-minecraft-stone">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          🎯 Что включено в модпак
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`minecraft-block ${feature.blockType} text-white`}
            >
              <div className="flex items-center gap-3 mb-4">
                <Icon name={feature.icon as any} size={32} />
                <h3 className="text-xl font-bold">{feature.title}</h3>
              </div>
              <p className="opacity-90 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="minecraft-block stone-block inline-block text-white">
            <h3 className="text-2xl font-bold mb-4">📊 Характеристики</h3>
            <div className="grid grid-cols-2 gap-6 text-left">
              <div>
                <span className="font-bold">Модов:</span> 157
              </div>
              <div>
                <span className="font-bold">Версия:</span> 1.20.1
              </div>
              <div>
                <span className="font-bold">Forge:</span> 47.2.0
              </div>
              <div>
                <span className="font-bold">RAM:</span> 6-8 GB
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModpackFeatures;
