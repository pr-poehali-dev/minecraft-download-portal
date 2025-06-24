import Icon from "@/components/ui/icon";

const InstallationGuide = () => {
  const steps = [
    {
      number: 1,
      title: "Скачайте модпак",
      description:
        "Нажмите кнопку 'Скачать модпак' и дождитесь завершения загрузки",
      icon: "Download",
    },
    {
      number: 2,
      title: "Установите Minecraft Forge",
      description: "Скачайте и установите Forge 47.2.0 для версии 1.20.1",
      icon: "Settings",
    },
    {
      number: 3,
      title: "Распакуйте архив",
      description: "Извлеките содержимое в папку .minecraft/mods",
      icon: "FolderOpen",
    },
    {
      number: 4,
      title: "Запустите игру",
      description: "Выберите профиль Forge 1.20.1 и наслаждайтесь игрой!",
      icon: "Play",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-minecraft-cobble to-minecraft-stone">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          🔧 Инструкция по установке
        </h2>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="minecraft-block grass-block mb-6 text-white"
            >
              <div className="flex items-start gap-4">
                <div className="minecraft-btn minecraft-btn-primary flex-shrink-0 w-12 h-12 flex items-center justify-center text-xl font-bold">
                  {step.number}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <Icon name={step.icon as any} size={24} />
                    <h3 className="text-xl font-bold">{step.title}</h3>
                  </div>
                  <p className="opacity-90 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="minecraft-block dirt-block max-w-2xl mx-auto mt-12 text-white">
          <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <Icon name="AlertTriangle" size={28} />
            Важно знать
          </h3>
          <ul className="space-y-2 opacity-90">
            <li>• Убедитесь, что у вас установлена Java 17 или выше</li>
            <li>• Выделите 6-8 GB RAM для комфортной игры</li>
            <li>• Создайте резервную копию существующих сохранений</li>
            <li>• Первый запуск может занять несколько минут</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default InstallationGuide;
