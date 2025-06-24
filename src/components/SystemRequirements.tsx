import Icon from "@/components/ui/icon";

const SystemRequirements = () => {
  return (
    <section className="py-16 bg-minecraft-dirt">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          💻 Системные требования
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="minecraft-block stone-block text-white">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Icon name="CheckCircle" size={28} className="text-green-400" />
              Минимальные
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="font-bold">ОС:</span>
                <span>Windows 10/11, macOS, Linux</span>
              </div>
              <div className="flex justify-between">
                <span className="font-bold">Процессор:</span>
                <span>Intel i5-6400 / AMD FX-8320</span>
              </div>
              <div className="flex justify-between">
                <span className="font-bold">Память:</span>
                <span>6 GB RAM</span>
              </div>
              <div className="flex justify-between">
                <span className="font-bold">Видеокарта:</span>
                <span>GTX 1050 / RX 560</span>
              </div>
              <div className="flex justify-between">
                <span className="font-bold">Место:</span>
                <span>4 GB</span>
              </div>
            </div>
          </div>

          <div className="minecraft-block grass-block text-white">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Icon name="Star" size={28} className="text-yellow-400" />
              Рекомендуемые
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="font-bold">ОС:</span>
                <span>Windows 11, macOS Monterey+</span>
              </div>
              <div className="flex justify-between">
                <span className="font-bold">Процессор:</span>
                <span>Intel i7-8700K / AMD Ryzen 5 3600</span>
              </div>
              <div className="flex justify-between">
                <span className="font-bold">Память:</span>
                <span>8 GB RAM</span>
              </div>
              <div className="flex justify-between">
                <span className="font-bold">Видеокарта:</span>
                <span>GTX 1660 Super / RX 6600</span>
              </div>
              <div className="flex justify-between">
                <span className="font-bold">Место:</span>
                <span>6 GB</span>
              </div>
            </div>
          </div>
        </div>

        <div className="minecraft-block dirt-block max-w-2xl mx-auto mt-8 text-white text-center">
          <h3 className="text-xl font-bold mb-4">🚀 Дополнительно</h3>
          <p className="opacity-90">
            Для максимальной производительности рекомендуется использовать
            <strong> OptiFine</strong> или <strong>Sodium</strong> (уже включены
            в модпак)
          </p>
        </div>
      </div>
    </section>
  );
};

export default SystemRequirements;
