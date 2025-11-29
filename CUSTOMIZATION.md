# Customization Guide

This guide will help you personalize the blog template to make it your own.

## 1. Personal Information

### Bio and Introduction
Open `app/page.tsx` and update the text inside the `<p>` tag to reflect your own bio. You can also change the heading `<h1>` to your name.

### Footer Links
Open `app/components/footer.tsx` and update the `href` attributes of the anchor tags to point to your own social media profiles.

### Metadata
Open `app/layout.tsx` and update the `title`, `description`, and `openGraph` fields to match your site's identity.

### Sitemap
Open `app/sitemap.ts` and update the `baseUrl` variable to your domain.

## 2. Adding New Essays

1.  Create a new `.mdx` file in `app/essays/posts/`.
2.  Name it with a number (e.g., `8.mdx`) or a slug.
3.  Add the frontmatter at the top of the file:
    ```yaml
    ---
    title: 'Your Essay Title'
    publishedAt: 'YYYY-MM-DD'
    summary: 'A brief summary of your essay.'
    ---
    ```
4.  Write your content below the frontmatter.

## 3. Modifying Theme/Styles

The project uses Tailwind CSS. You can customize the theme in `tailwind.config.js` (if present) or by modifying `app/global.css`.

## 4. Configuring Audio Player

To add audio to an essay:
1.  Place your audio file (e.g., `8-1.mp3`) in `public/audio/`.
2.  The audio player component automatically looks for a file matching the essay slug in the `public/audio/` directory. *Note: You may need to adjust the audio player logic in `app/components/posts.tsx` or wherever it is implemented if it relies on specific naming conventions.*

## 5. Setting Up Custom Domain

If deploying to Vercel:
1.  Go to your project settings.
2.  Navigate to "Domains".
3.  Add your custom domain and follow the verification steps.
