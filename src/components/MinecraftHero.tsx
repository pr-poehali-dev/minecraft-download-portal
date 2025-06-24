import Icon from "@/components/ui/icon";

const MinecraftHero = () => {
  const handleDownload = () => {
    // В реальном проекте здесь будет ссылка на файл
    console.log("Скачивание модпака...");
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-blue-400 via-green-400 to-green-600 flex items-center justify-center relative overflow-hidden">
      {/* Пиксельные облака */}
      <div className="absolute top-10 left-10 w-16 h-8 bg-white opacity-80 pixelated"></div>
      <div className="absolute top-20 right-20 w-20 h-10 bg-white opacity-70 pixelated"></div>
      <div className="absolute top-16 left-1/3 w-12 h-6 bg-white opacity-60 pixelated"></div>

      <div className="container mx-auto px-4 text-center text-white z-10">
        <div className="minecraft-block grass-block max-w-2xl mx-auto">
          <h1 className="text-6xl font-bold mb-4 text-shadow-lg">
            🎮 ULTIMATE MODPACK
          </h1>
          <p className="text-xl mb-2 opacity-90">Версия 1.20.1</p>
          <p className="text-lg mb-8 opacity-80">
            Более 150 модов для невероятного игрового опыта
          </p>

          <button
            onClick={handleDownload}
            className="minecraft-btn minecraft-btn-primary text-2xl px-12 py-4 mb-6 inline-flex items-center gap-3"
          >
            <Icon name="Download" size={28} />
            СКАЧАТЬ МОДПАК
          </button>

          <div className="flex justify-center gap-6 text-sm opacity-75">
            <span>📦 Размер: 2.1 GB</span>
            <span>⚡ Установка: Ручная</span>
            <span>🔧 Java 17+</span>
          </div>
        </div>
      </div>

      {/* Декоративные блоки */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-minecraft-dirt"></div>
      <div className="absolute bottom-20 left-0 w-full h-4 bg-minecraft-grass"></div>
    </section>
  );
};

export default MinecraftHero;
