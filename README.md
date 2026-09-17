# Türkçe Learning

Frontend-only сайт на React + Vite + SCSS.

## Запуск

```bash
npm install
npm run dev
```

## Сборка

```bash
npm run build
npm run preview
```

## Как устроены статьи

Статьи больше не хранятся в JSON.

Реестр статей:

- `src/articles/articles.jsx`

Каждая статья — отдельный React JSX-компонент:

- `src/articles/content/MisMisGrammar.jsx`
- `src/articles/content/SimpleReadingA1.jsx`
- и т.д.

Пример записи в `articles.jsx`:

```jsx
{
  id: 8,
  slug: 'my-new-article',
  section: 'grammar',
  title: 'Новая статья',
  description: 'Описание статьи',
  level: 'B1',
  date: '2026-09-18',
  content: <MyNewArticle />,
}
```

То есть контент каждой статьи можно писать обычным JSX без фиксированной JSON-схемы: использовать `p`, `h2`, списки, таблицы, собственные компоненты и любую нужную разметку.

Доступные `section`:

- `okylym`
- `tyndalym`
- `soyleu`
- `zhazu`
- `grammar`
- `vocabulary`
- `blog`

`navigation.json` и `resources.json` по-прежнему находятся в `src/data`.
