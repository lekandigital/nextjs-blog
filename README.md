# Portfolio Essays Template

This project is based on the [Vercel Portfolio Blog Starter](https://github.com/vercel/examples/tree/main/solutions/blog) but has been significantly extended and refactored to serve as a modern, minimalist, and highly customizable portfolio/blog template.

## Original Repo

- [Vercel Portfolio Blog Starter](https://github.com/vercel/examples/tree/main/solutions/blog)

## Major Changes & Additions

- **Essays System**: Reworked the blog into an "essays"-focused system, with MDX support for long-form writing.
- **Dark/Light Mode**: Complete support for both modes, with carefully tuned CSS variables and color schemes for accessibility and aesthetics.
- **Essay Filter**: Custom filter menu with smooth transitions, fade effects, and improved scrollbar styling for both modes. Borders and box-shadows removed for a minimalist look.
- **Typography & Spacing**: Improved vertical and horizontal spacing, minimalist headings, and long-form text readability.
- **Footer**: Alphabetized, expanded, and restyled footer links for clarity and modern appearance. Footer border removed for a cleaner look.
- **Essay Navigation**: Enhanced navigation with better color contrast and hover states in both modes.
- **Long-form Text**: Distinct color schemes for summaries, about page, and essay detail pages, with special attention to link and hover colors.
- **Accessibility**: Improved color contrast and focus states for interactive elements.
- **MDX Support**: Write essays and posts in MDX for maximum flexibility.
- **Performance**: Retains all original optimizations (SEO, OG images, RSS, etc.)

## How to Use

1. **Install dependencies:**
   ```bash
   pnpm install
   ```
2. **Run locally:**
   ```bash
   pnpm dev
   ```
3. **Deploy:**
   Deploy to [Vercel](https://vercel.com/) or your preferred platform.

## Customization

- All styles are in `app/global.css` and use CSS variables for easy theming.
- Essays are in `app/essays/posts/` as MDX files.
- Components are in `app/components/` and are easy to extend or replace.

---

This project is intended to be used as a template for your own portfolio, blog, or digital garden. Fork it, customize it, and make it your own!
