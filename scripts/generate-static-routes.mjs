import fs from 'node:fs';
import path from 'node:path';

const distDir = path.resolve('dist');
const indexFile = path.join(distDir, 'index.html');

const html = fs.readFileSync(indexFile, 'utf8');

const routes = [
  'blog',
  'okylym',
  'tyndalym',
  'soyleu',
  'zhazu',
  'grammar',
  'vocabulary',
  'resources',

  'article/turkish-alter-ego',
  'article/unusual-turkish-learning-methods',
  'article/extreme-way-to-learn-turkish-fast',
  'article/24-hours-only-turkish',
  'article/okylym-how-to-read-turkish',
  'article/arabic-words-turkish-kazakh',
];

for (const route of routes) {
  const routeDir = path.join(distDir, route);

  fs.mkdirSync(routeDir, {
    recursive: true,
  });

  fs.writeFileSync(
    path.join(routeDir, 'index.html'),
    html,
    'utf8'
  );

  console.log(`Generated: /${route}`);
}