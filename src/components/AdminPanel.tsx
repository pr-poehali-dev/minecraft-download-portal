import { useState } from "react";
import Icon from "@/components/ui/icon";
import FileUpload from "./FileUpload";

const AdminPanel = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Простая проверка пароля (в реальном проекте используйте безопасную аутентификацию)
    if (password === "admin123") {
      setIsAuthenticated(true);
      setPassword("");
    } else {
      alert("Неверный пароль");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setIsOpen(false);
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 minecraft-btn minecraft-btn-primary z-50"
        title="Админ-панель"
      >
        <Icon name="Settings" size={24} />
      </button>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-minecraft-stone rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto">
        <div className="minecraft-block stone-block mb-0">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <Icon name="Shield" size={32} />
              Админ-панель
            </h2>
            <button
              onClick={() => setIsOpen(false)}
              className="minecraft-btn minecraft-btn-danger"
            >
              <Icon name="X" size={20} />
            </button>
          </div>

          {!isAuthenticated ? (
            <div className="text-center max-w-md mx-auto">
              <Icon
                name="Lock"
                size={48}
                className="mx-auto mb-4 text-yellow-400"
              />
              <h3 className="text-xl text-white mb-6">
                Введите пароль для доступа
              </h3>
              <div className="space-y-4">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Пароль администратора"
                  className="w-full p-3 rounded bg-gray-700 text-white border border-gray-600 focus:border-yellow-400 focus:outline-none"
                  onKeyPress={(e) => e.key === "Enter" && handleLogin()}
                />
                <button
                  onClick={handleLogin}
                  className="minecraft-btn minecraft-btn-primary w-full"
                >
                  <Icon name="LogIn" size={20} />
                  Войти
                </button>
              </div>
              <p className="text-gray-400 text-sm mt-4">
                Демо пароль: admin123
              </p>
            </div>
          ) : (
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3 text-green-400">
                  <Icon name="CheckCircle" size={24} />
                  <span>Вы авторизованы как администратор</span>
                </div>
                <button
                  onClick={handleLogout}
                  className="minecraft-btn minecraft-btn-secondary"
                >
                  <Icon name="LogOut" size={20} />
                  Выйти
                </button>
              </div>

              <FileUpload />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
