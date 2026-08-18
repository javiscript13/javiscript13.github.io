---
layout: portfolio
title: "Mirador Electoral (Electoral Observatory)"
categories: ["D3.js", "Jekyll"]
filter_group: ["Web Apps", "Data & Visualization"]
thumbnail: "/assets/images/portfolio/miradorElec1.png"
short_description: "An interactive data visualization platform for exploring information about Guatemala's 2019 elections."
description: "<p>Mirador Electoral was an interactive platform created to present and explore information from the Electoral Observatory during Guatemala's 2019 elections.</p>
<p>I developed the data visualizations while working at Guatecambia in collaboration with the International Republican Institute (IRI), using D3.js and Jekyll.</p>"
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
		<p>Not online anymore</p>
	</div>
	<div class="col-lg-6 text-center">
		<p class="text-color font-weight-bold mb-2">Available on github <i class="ti-github" style="vertical-align:middle;"></i></p>
		<p><a href="https://github.com/Guatecambia/miradorelectoral" target="_blank">at Github</a></p>
	</div>
</div>

<hr class="my-5">

<div class="row">
	<div class="col-lg-12">
		<img alt="entry image" class="img-fluid" src="{{ page.thumbnail }}">
	</div>
	<div class="col-lg-12">
		<img alt="entry image" class="img-fluid" src="/assets/images/portfolio/miradorElec2.png">
	</div>
	<div class="col-lg-12">
		<img alt="entry image" class="img-fluid" src="/assets/images/portfolio/miradorElec3.png">
	</div>

</div>