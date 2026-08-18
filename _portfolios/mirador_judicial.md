---
layout: portfolio
title: "Mirador Judicial (Judicial Observatory)"
order: 8
categories: ["D3.js"]
filter_group: ["Data & Visualization"]
thumbnail: "/assets/images/portfolio/miradorJudicial1.png"
short_description: "Interactive data visualizations exploring Guatemala's justice system."
description: "<p>Mirador Judicial presents data visualizations developed for an investigation into Guatemala's justice system.</p>
<p>My role was to transform the research findings into interactive visualizations using D3.js. The research was conducted by the Instituto de Estudios Comparados en Ciencias Penales de Guatemala (ICCPG).</p>"
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
		<p><a href="https://iccpg.org.gt/mirador-judicial/" target="_blank">at Mirador page</a></p>
	</div>
	<div class="col-lg-6 text-center">
		<p class="text-color font-weight-bold mb-2">Available on github <i class="ti-github" style="vertical-align:middle;"></i></p>
		<p>Visualizations code not public available</p>
	</div>
</div>

<hr class="my-5">

<div class="row">
	<div class="col-lg-12">
		<img alt="entry image" class="img-fluid" src="{{ page.thumbnail }}">
	</div>
	<div class="col-lg-12">
		<img alt="entry image" class="img-fluid" src="/assets/images/portfolio/miradorJudicial2.png">
	</div>
	<div class="col-lg-12">
		<img alt="entry image" class="img-fluid" src="/assets/images/portfolio/miradorJudicial3.png">
	</div>

</div>