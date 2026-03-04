// build.js (запустите локально)
const fs = require("fs-extra");
const path = require("path");

async function build() {
  // Создаем папку dist
  await fs.ensureDir("dist");

  // Копируем HTML
  await fs.copy("src/pages", "dist");

  // Копируем assets
  await fs.copy("src/assets", "dist/assets");

  // Копируем styles
  await fs.copy("src/styles", "dist/styles");

  // Переименовываем home.html в index.html
  await fs.move("dist/home.html", "dist/index.html", { overwrite: true });
}

build();
