# Astro Flow - Simple Blog

```sh
npm create astro@latest -- --template DawidRyczko/astro-flow-blog-theme
```

See the demo: https://dawidryczko.github.io/astro-flow-blog-theme/

![screen.png](screen.jpg)

## Features:

### Pros:

- ✅ Flowbite / Tailwind styling - easy to customize
- ✅ 100/100 Lighthouse performance
- ✅ SEO-friendly with canonical URLs and OpenGraph data
- ✅ Sitemap support
- ✅ Simple config file
- ✅ RSS Feed support
- ✅ Markdown & MDX support
- ✅ Google Analytics
- ✅ Dark / light mode
- ✅ Responsive
- ✅ Pagination
- ✅ Social media
- ✅ Github Pages configured
- ✅ Support subfolder deploy
- ✅ Just fast

### Cons:

- ✅ No image support for posts
- ✅ No search implemented

## Important configuration

1. Open `astro.config.mjs` and change the `base` and `site` properties.
   
You can also deploy this blog in subfolder. For example, this theme is deployed on Github Pages without custom domain. The
   repo `astro-flow-blog-theme` is a subfolder for my Github domain `https://dawidryczko.github.io/`.

The `base` property for URL and subfolder `https://dawidryczko.github.io/astro-flow-blog-theme` is:

```aiignore
base: '/astro-flow-blog-theme'
```

If you deploy without subfolder set the `base`:

```aiignore
base: '.'
```

2. Visist the `/src/const.ts` file and setup your configuration
3. Replace the:
   - `/public/favicon.png`
   - `/public/logo.png`
   - `/public/og-image.png`
4. You can ovveride the Tailwind styles in `/styles/global.css`

## Deploy on Github Pages

1. Fork or create a repository for your project
2. Go to Settings and select "Pages"
3. Setup "Source" as GitHub Actions
4. Go to the Actions tab and run the workflow "Deploy Astro site to Pages"
5. Check the Configuration section to setup `base` property for subfolder or custom domain.

## Flowbite and Tailwind

Flowbite use Tailwind to create ready to use components. Go to https://flowbite.com/ select any component you like,
align colors and styling if you need and use on your page.

More about configuration you can find here: https://flowbite.com/docs/getting-started/astro/

### Typography

The theme for content creation use Tailwind CSS Typography - Flowbite:

```html

<div class="mb-9 format dark:format-invert">
  <content />
</div>
```

You can customize the typography for post. Check the docs here: https://flowbite.com/docs/components/typography/

## Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
|:--------------------------|:-------------------------------------------------|
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## Credits

This theme is inspired by:

Astro Zen Blog - https://github.com/larry-xue/astro-zen-blog

Astro Starter Kit: Blog - https://github.com/withastro/astro/tree/main/examples/blog
