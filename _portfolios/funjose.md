---
layout: portfolio
title: "FUNJOSE"
order: 10
categories: ["WordPress", "Web Design", "UX/UI"]
filter_group: ["Web Apps"]
thumbnail: "/assets/images/portfolio/funjose1.png"
short_description: "A new website for a Guatemalan foundation expanding access to university education through scholarships."
description: "<p>FUNJOSE is a Guatemalan nonprofit foundation that supports young people in pursuing higher education through scholarships.</p>
<p>I designed and developed the foundation's website to bring its mission, scholarship opportunities, and community impact together in a clear and accessible digital experience.</p>
<p>The website includes:</p>
<ul class='text-left'>
<li><strong>Scholarship information:</strong> Application process, timeline, requirements, and frequently asked questions.</li>
<li><strong>Scholarship directory:</strong> A visual directory of scholarship recipients, with filters to explore their academic backgrounds and profiles.</li>
<li><strong>Engagement:</strong> Dedicated sections for donations and volunteering, with contact forms.</li>
<li><strong>Responsive design:</strong> An experience adapted for desktop and mobile devices.</li>
</ul>
<p><strong>Technologies:</strong> WordPress (custom Kadence child theme) · Forminator · Advanced Custom Fields · Yoast SEO · Instagram Feed · Google Drive &amp; Sheets API · Cloudflare · Docker</p>"
---
<div class="col-lg-8 text-center">
	<h3 class="mb-3 mt-2">{{page.title}}</h3>
	<div class="category-pills mb-4">
		{% for category in page.categories %}<span class="badge">{{ category }}</span>{% endfor %}
	</div>
	{{page.description}}

<hr class="my-5">
	
<div class="row">
	<div class="col-lg-6 text-center">
		<p class="text-color font-weight-bold mb-2">Available online</p>
		<p><a href="https://www.funjose.org.gt/" target="_blank">funjose.org.gt</a></p>
	</div>
	<div class="col-lg-6 text-center">
		<p class="text-color font-weight-bold mb-2">Available on github <i class="ti-github" style="vertical-align:middle;"></i></p>
		<p>Website code not public available</p>
	</div>
</div>

<hr class="my-5">

<div class="row">
	<div class="col-lg-12">
		<img alt="entry image" class="img-fluid" src="{{ page.thumbnail }}">
	</div>
	<div class="col-lg-12">
		<img alt="entry image" class="img-fluid" src="/assets/images/portfolio/funjose2.png">
	</div>
	<div class="col-lg-12">
		<img alt="entry image" class="img-fluid" src="/assets/images/portfolio/funjose3.png">
	</div>

</div>
