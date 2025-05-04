# Astro Flow - Simple Blog

```sh
npm create astro@latest -- --template DawidRyczko/astro-flow-blog
```

See the demo: https://dawidryczko.github.io/astro-flow-blog/

![screen.png](screen.png)

## Flowbite and Tailwind

Flowbite use Tailwind to create ready to use components. Go to https://flowbite.com/ select any component you like, align colors and styling if you need and use on your page.

More about configuration you can find here: https://flowbite.com/docs/getting-started/astro/

### Typography

The theme for content creation use Tailwind CSS Typography - Flowbite:

```html
<div class="mb-9 format dark:format-invert">
  <content />
</div>
```

You can customize the typography for post. Check the docs here: https://flowbite.com/docs/components/typography/

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
- ✅ Social media
- ✅ Github Pages configured
- ✅ Just fast

### Cons:

- ✅ No image support for posts
- ✅ No search implemented

## Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## Deploy on Github Pages

1. Fork or create a repository for your project
2. Go to Settings and select "Pages"
3. Setup "Source" as GitHub Actions
4. Go to the Actions tab and run the workflow "Deploy Astro site to Pages"
5. Check the Configuration section to setup `base` property

## Configuration

1. Open `astro.config.mjs` and change the `base` and `site` properties.
   If you deploy in subfolder for example in GithubPages withoud custom domain set the base like this:

Example configuration for url `https://dawidryczko.github.io/astro-flow-blog/`

```aiignore
base: '/astro-flow-blog/'
```

If you deploy without subfolder set the `base`:

```aiignore
base: '/'
```

## Credit

This theme is inspired by:

Astro Zen Blog - https://github.com/larry-xue/astro-zen-blog

Astro Starter Kit: Blog - https://github.com/withastro/astro/tree/main/examples/blog
