import { useState } from "react";
import Icon from "@/components/ui/icon";

interface FileUpload {
  id: string;
  name: string;
  size: number;
  uploadDate: string;
  downloadUrl: string;
}

const FileUpload = () => {
  const [files, setFiles] = useState<FileUpload[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  const handleFileSelect = (selectedFiles: FileList | null) => {
    if (!selectedFiles) return;

    const validFiles = Array.from(selectedFiles).filter(
      (file) => file.name.endsWith(".zip") || file.name.endsWith(".rar"),
    );

    if (validFiles.length === 0) {
      alert("Загружать можно только .zip и .rar файлы");
      return;
    }

    setIsUploading(true);

    // Симуляция загрузки
    setTimeout(() => {
      const newFiles = validFiles.map((file) => ({
        id: Date.now() + Math.random().toString(),
        name: file.name,
        size: file.size,
        uploadDate: new Date().toLocaleDateString("ru-RU"),
        downloadUrl: URL.createObjectURL(file),
      }));

      setFiles((prev) => [...prev, ...newFiles]);
      setIsUploading(false);
    }, 2000);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    handleFileSelect(e.dataTransfer.files);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const deleteFile = (id: string) => {
    setFiles((prev) => prev.filter((file) => file.id !== id));
  };

  return (
    <div className="minecraft-block stone-block">
      <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
        <Icon name="Upload" size={28} />
        Загрузка модпаков
      </h3>

      {/* Зона загрузки */}
      <div
        className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
          isDragging
            ? "border-yellow-400 bg-yellow-400/10"
            : "border-gray-400 hover:border-yellow-400"
        }`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
      >
        <Icon name="Upload" size={48} className="mx-auto mb-4 text-gray-400" />
        <p className="text-white mb-4">
          Перетащите файлы сюда или нажмите для выбора
        </p>
        <p className="text-gray-300 text-sm mb-4">
          Поддерживаются форматы: .zip, .rar
        </p>
        <input
          type="file"
          multiple
          accept=".zip,.rar"
          onChange={(e) => handleFileSelect(e.target.files)}
          className="hidden"
          id="file-input"
        />
        <label
          htmlFor="file-input"
          className="minecraft-btn minecraft-btn-primary cursor-pointer inline-flex items-center gap-2"
        >
          <Icon name="FolderOpen" size={20} />
          Выбрать файлы
        </label>
      </div>

      {/* Индикатор загрузки */}
      {isUploading && (
        <div className="mt-6 text-center">
          <div className="inline-flex items-center gap-3 text-yellow-400">
            <Icon name="Loader2" size={24} className="animate-spin" />
            <span>Загрузка файлов...</span>
          </div>
        </div>
      )}

      {/* Список файлов */}
      {files.length > 0 && (
        <div className="mt-8">
          <h4 className="text-xl font-bold text-white mb-4">
            📦 Загруженные модпаки ({files.length})
          </h4>
          <div className="space-y-4">
            {files.map((file) => (
              <div
                key={file.id}
                className="minecraft-block dirt-block flex items-center justify-between p-4"
              >
                <div className="flex items-center gap-4">
                  <Icon name="Package" size={24} className="text-yellow-400" />
                  <div>
                    <p className="text-white font-bold">{file.name}</p>
                    <p className="text-gray-300 text-sm">
                      {formatFileSize(file.size)} • {file.uploadDate}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={file.downloadUrl}
                    download={file.name}
                    className="minecraft-btn minecraft-btn-secondary text-sm"
                  >
                    <Icon name="Download" size={16} />
                  </a>
                  <button
                    onClick={() => deleteFile(file.id)}
                    className="minecraft-btn minecraft-btn-danger text-sm"
                  >
                    <Icon name="Trash2" size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FileUpload;
