# Jekyll Blog Template with Bootstrap 5

A modern, fully-featured Jekyll blog template using Bootstrap 5, designed to help you quickly create beautiful static websites and blogs. This template comes with a responsive carousel homepage, category archives, client-side search, and is optimized for deployment on GitHub Pages.

## Features

- **Bootstrap 5.3 Design** – Modern, mobile-first responsive layout with a dark navbar and clean typography
- **Homepage Carousel** – Showcase your latest posts in a dynamic sliding carousel
- **Category Archives** – Automatically generated category pages listing all posts by topic
- **Client-Side Search** – Fast fuzzy search powered by Fuse.js with highlighted results
- **Responsive Sidebar** – Dynamic category list with post counts and social links
- **GitHub Pages Ready** – Deploys seamlessly via GitHub Actions with full plugin support
- **SEO Optimized** – Includes sitemap, RSS feed, meta tags, and social sharing metadata

## Quick Start

### 1. Use This Template

Click the **"Use this template"** button at the top of this repository to create your own copy, or fork/clone the repo:

```bash
git clone https://github.com/crpietschmann/jekyll-blog.git
cd jekyll-blog
```

### 2. Install Dependencies

Make sure you have Ruby installed, then:

```bash
bundle install
```

### 3. Run Locally

Start the Jekyll development server:

```bash
bundle exec jekyll serve
```

Visit `http://localhost:4000/jekyll-blog/` to preview your site.

### 4. Customize

- **Site Settings** – Edit `_config.yml` to update your site title, description, baseurl, author, and social links
- **Content** – Add new posts in `_posts/` following the `YYYY-MM-DD-title.md` naming convention
- **Pages** – Modify `about.md` or create new pages as needed
- **Styling** – Customize `css/site.css` to match your brand

### 5. Deploy to GitHub Pages

This template includes a GitHub Actions workflow (`.github/workflows/pages.yml`) that automatically builds and deploys your site when you push to the `main` branch.

**One-time setup:**
1. Go to your repository **Settings > Pages**
2. Under **Source**, select **GitHub Actions**

That's it! Every push to `main` will build and deploy your site with full plugin support.

## Structure

```
.
├── _config.yml          # Site configuration
├── _includes/           # Reusable components (header, footer, sidebar)
├── _layouts/            # Page templates (default, post, page, category)
├── _posts/              # Your blog posts
├── css/                 # Custom styles
├── js/                  # JavaScript (search functionality)
├── search.html          # Search results page
├── search.json          # Search index (auto-generated)
└── index.md             # Homepage with carousel
```

## Plugins Used

- `jekyll-feed` – RSS/Atom feed generation
- `jekyll-sitemap` – XML sitemap for SEO
- `jekyll-archives` – Category and tag archive pages
- `jekyll-redirect-from` – URL redirects and aliases
- `jekyll-sass-converter` – Sass/SCSS compilation

## Customization Tips

### Add a New Post

Create a file in `_posts/` with the format `YYYY-MM-DD-title.md`:

```markdown
---
layout: post
title: "Your Post Title"
date: 2025-11-24 12:00:00 -0400
categories: technology blog
author: Your Name
---

Your content here...
```

### Change Categories

Edit the `categories:` front matter in your posts. The sidebar and archives will update automatically.

### Modify the Carousel

Edit `index.md` to customize which posts appear in the homepage carousel or change the layout.

### Update Social Links

Edit `_config.yml` and update the `github_username`, `twitter_username`, `facebook_username`, and `youtube_channelid` fields.

## License

This project is licensed under the [Creative Commons Attribution 3.0 United States License](LICENSE).

## Credits

- **Bootstrap** – Front-end framework by the Bootstrap team
- **Jekyll** – Static site generator
- **Fuse.js** – Fuzzy search library
- **Template** – Created and maintained by [Chris Pietschmann](https://pietschsoft.com)

---

**Ready to build your blog?** Use this template, customize it, and share your ideas with the world!
