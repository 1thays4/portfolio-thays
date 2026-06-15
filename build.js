const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, 'dist');
const srcDir = __dirname;

// Pastas e arquivos para copiar
const items = [
  'index.html',
  'sobre.html',
  'projetos.html',
  'contato.html',
  'favicon.svg',
  'css',
  'js',
  'img',
];

// Limpa dist se existir
if (fs.existsSync(distDir)) {
  fs.rmSync(distDir, { recursive: true, force: true });
}

// Garante que dist existe
fs.mkdirSync(distDir, { recursive: true });

function copyRecursive(src, dest) {
  const stats = fs.statSync(src);
  if (stats.isDirectory()) {
    fs.mkdirSync(dest, { recursive: true });
    const entries = fs.readdirSync(src);
    for (const entry of entries) {
      copyRecursive(path.join(src, entry), path.join(dest, entry));
    }
  } else {
    fs.copyFileSync(src, dest);
  }
}

for (const item of items) {
  const srcPath = path.join(srcDir, item);
  const destPath = path.join(distDir, item);
  if (fs.existsSync(srcPath)) {
    copyRecursive(srcPath, destPath);
    console.log(`✓ ${item}`);
  } else {
    console.log(`⚠ ${item} não encontrado`);
  }
}

console.log('\n✅ Build completo! Arquivos em /dist');
