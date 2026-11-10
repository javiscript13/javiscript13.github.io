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

## Content model

### Projects (`_portfolios/`, one `.md` per project, front matter only)
Main fields: `title`, `category` (primary category, one of `_data/categories.yml`; it is the one shown on the card and the project page), `also_in` (optional list of other category ids where the project also appears in the Work filters, e.g. `also_in: [data-analytics]`), `tags`, `visibility`, `order`, `short_description` (plain text, also the meta description), `description` (HTML), `thumbnail`, `images`, `year`, `client`, `role`, `parent_type` + `parent_id` (an experience or collaboration), `source_id` (internal ID, never shown).
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
Shown on About; a project links to one with `parent_type: experience|collaboration` and `parent_id: <id>`. Only records approved for publication go in these files (the repository is public). Texts are a translation pending the author's review.

### Other data
- `_data/categories.yml`: the four project categories (name, description) used by the Work filters and cards.
- `_data/services.yml`: the three main service areas (title + summary shown in Home's "What I do"). `description` and the complementary capabilities are kept as reference copy but not rendered.
- `_data/skills.yml`, `_data/experiences.yml`, `_data/collaborations.yml` and `_includes/about_entry.html`: kept as content/reference data. About is now a short narrative and does not render them; project pages still show their "Experience"/"Collaboration" name from the first two.
- `_config.yml`: `title`, `brand` (header name), `description`, `copyright` (rendered as "© <build year> <copyright>"), `footer_content`, `email`, `address`, `social`.

### Other notes
- `/about.html`, `/about-me.html` and the former URLs of two projects are static redirects (`_layouts/redirect.html`).
- Related Projects on project pages is switched off (`related_enabled` in `_layouts/portfolio.html`) until relations are defined.

## Run locally
`docker compose up` (serves http://localhost:4000). To only check that the site builds: `docker compose run --rm jekyll jekyll build -d /tmp/site`.
