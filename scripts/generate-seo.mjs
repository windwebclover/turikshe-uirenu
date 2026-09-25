import fs from 'node:fs';
import path from 'node:path';
import { parse } from '@babel/parser';

const ROOT = process.cwd();

const ARTICLES_FILE = path.join(
  ROOT,
  'src',
  'articles',
  'articles.jsx'
);

const DIST_DIR = path.join(ROOT, 'dist');
const PUBLIC_DIR = path.join(ROOT, 'public');

const SITE_URL =
  'https://windwebclover.github.io/turikshe-uirenu';

const sectionMeta = {
  '': {
    title: 'Түрік тілін үйрену — қазақша материалдар',
    description:
      'Түрік тілін қазақша үйренуге арналған сайт: оқылым, тыңдалым, сөйлеу, жазу, грамматика, сөздік, пайдалы ресурстар және мақалалар.',
  },

  okylym: {
    title: 'Оқылым — түрік тілін үйрену',
    description:
      'Түрік тілінде оқуды дамытуға арналған қазақша материалдар.',
  },

  tyndalym: {
    title: 'Тыңдалым — түрік тілін үйрену',
    description:
      'Түрік тіліндегі тыңдалымды дамытуға арналған материалдар.',
  },

  soyleu: {
    title: 'Сөйлеу — түрік тілін үйрену',
    description:
      'Түрік тілінде еркін сөйлеуді дамытуға арналған материалдар.',
  },

  zhazu: {
    title: 'Жазу — түрік тілін үйрену',
    description:
      'Түрік тілінде жазуды дамытуға арналған материалдар.',
  },

  grammar: {
    title: 'Түрік тілі грамматикасы',
    description:
      'Түрік тілі грамматикасын қазақша түсіндіретін материалдар.',
  },

  vocabulary: {
    title: 'Сөздік — түрікше-қазақша сөздер',
    description:
      'Түрік тілінің сөздік қорын дамытуға арналған қазақша материалдар.',
  },

  resources: {
    title: 'Ресурстар мен құралдар — түрік тілін үйрену',
    description:
      'Түрік тілін үйренуге арналған пайдалы ресурстар мен құралдар.',
  },

  blog: {
    title: 'Блог — түрік тілін үйрену',
    description:
      'Түрік тілін үйрену тәжірибесі, әдістері және пайдалы кеңестер.',
  },
};

function getProperty(objectNode, propertyName) {
  const property = objectNode.properties.find((item) => {
    if (item.type !== 'ObjectProperty') {
      return false;
    }

    if (item.key.type === 'Identifier') {
      return item.key.name === propertyName;
    }

    if (item.key.type === 'StringLiteral') {
      return item.key.value === propertyName;
    }

    return false;
  });

  if (!property) {
    return null;
  }

  const value = property.value;

  if (
    [
      'StringLiteral',
      'NumericLiteral',
      'BooleanLiteral',
    ].includes(value.type)
  ) {
    return value.value;
  }

  return null;
}

function readArticles() {
  const source = fs.readFileSync(
    ARTICLES_FILE,
    'utf8'
  );

  const ast = parse(source, {
    sourceType: 'module',
    plugins: ['jsx'],
  });

  let articlesArray = null;

  for (const node of ast.program.body) {
    if (node.type !== 'VariableDeclaration') {
      continue;
    }

    for (const declaration of node.declarations) {
      if (
        declaration.id.type === 'Identifier' &&
        declaration.id.name === 'articles' &&
        declaration.init?.type === 'ArrayExpression'
      ) {
        articlesArray = declaration.init;
      }
    }
  }

  if (!articlesArray) {
    throw new Error(
      'Не найден массив "articles" в src/articles/articles.jsx'
    );
  }

  return articlesArray.elements
    .filter(
      (item) =>
        item?.type === 'ObjectExpression'
    )
    .map((item) => ({
      slug: getProperty(item, 'slug'),
      section: getProperty(item, 'section'),
      title: getProperty(item, 'title'),
      description: getProperty(
        item,
        'description'
      ),
      date: getProperty(item, 'date'),
    }))
    .filter(
      (article) =>
        article.slug && article.title
    );
}

function escapeHtml(value = '') {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;');
}

function escapeXml(value = '') {
  return escapeHtml(value).replaceAll(
    "'",
    '&apos;'
  );
}

function injectBeforeHeadEnd(html, value) {
  return html.replace(
    '</head>',
    `  ${value}\n</head>`
  );
}

function setTitle(html, title) {
  const tag = `<title>${escapeHtml(
    title
  )}</title>`;

  if (
    /<title>[\s\S]*?<\/title>/i.test(html)
  ) {
    return html.replace(
      /<title>[\s\S]*?<\/title>/i,
      tag
    );
  }

  return injectBeforeHeadEnd(html, tag);
}

function setMetaName(
  html,
  name,
  content
) {
  const regex = new RegExp(
    `<meta\\s+[^>]*name=["']${name}["'][^>]*>`,
    'i'
  );

  const tag = `<meta name="${name}" content="${escapeHtml(
    content
  )}" />`;

  if (regex.test(html)) {
    return html.replace(regex, tag);
  }

  return injectBeforeHeadEnd(html, tag);
}

function setMetaProperty(
  html,
  property,
  content
) {
  const regex = new RegExp(
    `<meta\\s+[^>]*property=["']${property}["'][^>]*>`,
    'i'
  );

  const tag = `<meta property="${property}" content="${escapeHtml(
    content
  )}" />`;

  if (regex.test(html)) {
    return html.replace(regex, tag);
  }

  return injectBeforeHeadEnd(html, tag);
}

function setCanonical(html, url) {
  const regex =
    /<link\s+[^>]*rel=["']canonical["'][^>]*>/i;

  const tag = `<link rel="canonical" href="${escapeHtml(
    url
  )}" />`;

  if (regex.test(html)) {
    return html.replace(regex, tag);
  }

  return injectBeforeHeadEnd(html, tag);
}

function buildHtml(
  baseHtml,
  {
    title,
    description,
    url,
  }
) {
  let html = baseHtml;

  html = setTitle(html, title);

  html = setMetaName(
    html,
    'description',
    description
  );

  html = setCanonical(html, url);

  html = setMetaProperty(
    html,
    'og:type',
    'website'
  );

  html = setMetaProperty(
    html,
    'og:title',
    title
  );

  html = setMetaProperty(
    html,
    'og:description',
    description
  );

  html = setMetaProperty(
    html,
    'og:url',
    url
  );

  return html;
}

function normalizeRoute(route) {
  return route.replace(
    /^\/+|\/+$/g,
    ''
  );
}

function routeUrl(route) {
  const clean =
    normalizeRoute(route);

  return clean
    ? `${SITE_URL}/${clean}/`
    : `${SITE_URL}/`;
}

function writeRoute(route, html) {
  const clean =
    normalizeRoute(route);

  if (!clean) {
    fs.writeFileSync(
      path.join(
        DIST_DIR,
        'index.html'
      ),
      html,
      'utf8'
    );

    return;
  }

  const routeDir = path.join(
    DIST_DIR,
    ...clean.split('/')
  );

  fs.mkdirSync(routeDir, {
    recursive: true,
  });

  fs.writeFileSync(
    path.join(
      routeDir,
      'index.html'
    ),
    html,
    'utf8'
  );
}

function newestDate(items) {
  return (
    items
      .map((item) => item.date)
      .filter((date) =>
        /^\d{4}-\d{2}-\d{2}$/.test(
          String(date ?? '')
        )
      )
      .sort()
      .at(-1) ?? null
  );
}

function sitemapEntry(
  url,
  lastmod
) {
  const lastmodTag = lastmod
    ? `\n    <lastmod>${escapeXml(
        lastmod
      )}</lastmod>`
    : '';

  return `  <url>
    <loc>${escapeXml(
      url
    )}</loc>${lastmodTag}
  </url>`;
}

const articles = readArticles();

const baseHtml =
  fs.readFileSync(
    path.join(
      DIST_DIR,
      'index.html'
    ),
    'utf8'
  );

const staticRoutes =
  Object.entries(
    sectionMeta
  ).map(
    ([route, meta]) => {
      const relatedArticles =
        route
          ? articles.filter(
              (article) =>
                article.section ===
                route
            )
          : articles;

      return {
        route,
        ...meta,
        lastmod:
          newestDate(
            relatedArticles
          ),
      };
    }
  );

const articleRoutes =
  articles.map((article) => ({
    route: `article/${article.slug}`,

    title: `${article.title} | Түрік тілін үйрену`,

    description:
      article.description ||
      `${article.title} — түрік тілін қазақша үйренуге арналған материал.`,

    lastmod:
      article.date || null,
  }));

const routes = [
  ...staticRoutes,
  ...articleRoutes,
];

for (const route of routes) {
  const url = routeUrl(
    route.route
  );

  const html = buildHtml(
    baseHtml,
    {
      title: route.title,
      description:
        route.description,
      url,
    }
  );

  writeRoute(
    route.route,
    html
  );

  console.log(`✓ ${url}`);
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map((route) =>
    sitemapEntry(
      routeUrl(route.route),
      route.lastmod
    )
  )
  .join('\n')}
</urlset>
`;

fs.mkdirSync(PUBLIC_DIR, {
  recursive: true,
});

fs.writeFileSync(
  path.join(
    DIST_DIR,
    'sitemap.xml'
  ),
  sitemap,
  'utf8'
);

fs.writeFileSync(
  path.join(
    PUBLIC_DIR,
    'sitemap.xml'
  ),
  sitemap,
  'utf8'
);

console.log(
  `\nГотово: ${routes.length} URL`
);

console.log(
  '✓ dist/sitemap.xml'
);

console.log(
  '✓ public/sitemap.xml'
);