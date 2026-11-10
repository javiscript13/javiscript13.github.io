# javiscript13 portfolio

This portfolio is based on Dizer Jekyll template:

Dizer Jekyll Creative Portfolio Template ported from [Dizer HTML Template](https://themefisher.com/products/dizer/)

[Live Preview or original demo](http://demo.themefisher.com/dizer-jekyll/)

[Please refer to their original repo to make your own](https://github.com/themefisher/dizer-jekyll)

<!-- licence -->
## License

Copyright (c) 2016 - Present, Designed & Developed by [Themefisher](https://themefisher.com)

**Code License:** Released under the [MIT](https://github.com/themefisher/dizer-jekyll/blob/main/LICENSE) license.

## Site structure
Two pages plus project pages: **Home** (hero, What I do, **Work**, About preview, Contact invitation) and **About** (a short narrative). Menu: Home | Work (`/#work`, a section of Home) | About. There is no separate Work, Services or Contact page: `/work/` only redirects to `/#work`, and contact lives at the end of Home (`/#contact`) and in the footer.

**Work lives on Home** and comes from the records in `_portfolios/`: every `public` project in one filterable grid, at most 9 at a time with a "Load more projects" button. Order: first the projects with `featured: 1`, then `featured: 2`, then `featured: 3`, then the ones without `featured`; within each rank by `order`. There is no second list to maintain.

## Languages
The site is in English and Spanish. English is the default and keeps the original URLs (`/`, `/about/`, `/portfolios/<name>`); Spanish is the same site under `/es/` (`/es/`, `/es/about/`, `/es/portfolios/<name>`).

**Which language a visitor sees** (small script in `_includes/head.html`):
1. If they picked a language with the EN | ES switcher in the header, that choice is remembered in the browser (`localStorage`) and always wins.
2. Otherwise, a browser set to Spanish that opens an English page is sent to the Spanish one. Any other browser stays on the page it opened (so a link to a Spanish page still opens in Spanish, and search engines can index both versions; each page declares its counterpart with `hreflang`).

**Where the texts are**
- Interface texts (menu, headings, labels, buttons, the About narrative): `_data/i18n.yml`, one block per language with the same keys.
- Content records carry their Spanish version in an `es:` block next to the English fields: projects (`_portfolios/*.md`, including each `components` item), `_data/categories.yml`, `_data/services.yml` (`title`, `summary`), `_data/skills.yml`, `_data/experiences.yml`, `_data/collaborations.yml`, `_data/profile.yml`. A field missing from `es:` falls back to English, so names of organizations or technologies don't need repeating.
- Page titles and meta descriptions: the front matter of each page (`index.html`, `about.html`, `404.html` and their twins in `es/`).
- English `description` and `footer_content` stay in `_config.yml`; their Spanish versions are `site_description` and `footer_content` in `_data/i18n.yml`.

**How it is built** (no plugins, so it works on GitHub Pages): the body of each page is a layout (`_layouts/home.html`, `about.html`, `notfound.html`, `portfolio.html`) used by both languages; `_includes/i18n.html` sets `lang`, `t` (the texts) and `lang_prefix` (`""` or `/es`) for it. Templates read a translated field as `{{ record[lang].field | default: record.field }}` and build internal links with `lang_prefix`.

**Adding a project**: write the English fields and the `es:` block in `_portfolios/<name>.md`, and add an empty stub with the same file name in `_portfolios_es/` (copy any existing one). The stub is what makes Jekyll generate `/es/portfolios/<name>`; without it the Spanish cards link to a page that doesn't exist. An `archive`/`private` project must not have a stub.

**Adding a page**: create it for English and again under `es/` with `lang: es` and a permalink that is the English one prefixed with `/es` (the switcher and `hreflang` rely on that rule).

Spanish copy is maintained in the `es:` fields and reviewed for accuracy and natural wording.

## Content model

### Projects (`_portfolios/`, one `.md` per project, front matter only)
Main fields (plus `es:` with the Spanish `title`, `tags`, `client`, `role`, `short_description`, `description`, `availability_note`, `repository_note`; see Languages): `title`, `category` (primary category, one of `_data/categories.yml`; it is the one shown on the card and the project page), `also_in` (optional list of other category ids where the project also appears in the Work filters, e.g. `also_in: [data-analytics]`), `tags`, `visibility`, `order`, `short_description` (plain text, also the meta description), `description` (HTML), `thumbnail`, `images`, `year`, `client`, `role`, `parent_type` + `parent_id` (an experience or collaboration), `source_id` (internal ID, never shown).
Projects without a `thumbnail` get a graphic cover on cards (`_includes/project_cover.html`): pure geometry in the site palette, one composition per category (the project's `order` varies the pattern), no text, logo or interface, so it can't be mistaken for a screenshot.

**Visibility** (single field):

| Value | Work (Home) | Page generated |
|---|---|---|
| `public` | yes, ordered by its `featured` rank (1, 2, 3) and then `order` | yes |
| `archive` | no | no |
| `private` | no | no |

**Every `archive` or `private` project must also have `published: false`** (that is what stops Jekyll from generating its page). `noindex` is not a privacy measure, and files in `_portfolios/` live in this repository: do not put confidential information in them.
The category buttons filter the Work grid (Shuffle, as in the original site). GitHub Pages builds with Jekyll 3.10, so avoid Jekyll 4-only features such as `and`/`or` inside `where_exp`.

**Availability** (what the project page says about where the work can be seen):
- `availability: online` + `website: <verified live URL>`
- `availability: offline` — was online, "No longer available online."
- `availability: private` — never public. With no repository and no notes it shows "No public demo or source code."
- `availability: device` — deployed hardware, not a web service.
- `repository:` only a verified public GitHub URL. Otherwise optionally `repository_note:` explains why there is none. `availability_note:` adds one extra line.
Check links before publishing them (an offline site must not be marked `online`).

### Experiences and collaborations (`_data/experiences.yml`, `_data/collaborations.yml`)
Shown on About; a project links to one with `parent_type: experience|collaboration` and `parent_id: <id>`. Only records approved for publication go in these files (the repository is public). Spanish descriptions are reviewed for accuracy and natural wording.

### Other data
- `_data/categories.yml`: the four project categories (name, description) used by the Work filters and cards.
- `_data/services.yml`: the three main service areas (title + summary shown in Home's "What I do"). The complementary capabilities are kept as reference copy but not rendered.
- `_data/skills.yml`, `_data/experiences.yml`, `_data/collaborations.yml` and `_includes/about_entry.html`: kept as content/reference data. About is now a short narrative and does not render them; project pages still show their "Experience"/"Collaboration" name from the first two.
- `_data/navigation.yml`: the menu items (`key` is the label in `_data/i18n.yml`, `url` the English URL).
- `_data/i18n.yml`: interface texts in English and Spanish (see Languages).
- `_config.yml`: `title`, `brand` (header name), `description`, `copyright` (rendered as "© <build year> <copyright>"), `footer_content`, `email`, `address`, `social`.

### Other notes
- `/about.html`, `/about-me.html` and the former URLs of two projects are static redirects (`_layouts/redirect.html`).
- Related Projects on project pages is switched off (`related_enabled` in `_layouts/portfolio.html`) until relations are defined.

## Run locally
`docker compose up` (serves http://localhost:4000). To only check that the site builds: `docker compose run --rm jekyll bundle exec jekyll build -d /tmp/site`.
