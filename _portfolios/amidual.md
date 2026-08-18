---
layout: portfolio
title: "Amidual"
categories: ["Customization and Installation"]
filter_group: ["Web Apps"]
thumbnail: "/assets/images/portfolio/amidual.png"
short_description: "An online learning platform for journalists and communicators across Latin America."
description: "<p>Amidual is an online learning platform created by Radio Sónica in collaboration with DW Akademie for journalists and communicators across Latin America.</p>
<p>The platform was designed to provide training in Media and Information Literacy (MIL). My work focused on customizing and deploying the platform to meet the project's needs.</p>"
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
		<p><a href="https://amidual.sonica.gt/">Online</a>, but not used any more</p>
	</div>
	<div class="col-lg-6 text-center">
		<p class="text-color font-weight-bold mb-2">Available on github <i class="ti-github" style="vertical-align:middle;"></i></p>
		<p>Templating and docker file sources are not public</p>
	</div>
</div>

<hr class="my-5">

<div class="row">
	<div class="col-lg-12">
		<img alt="entry image" class="img-fluid" src="{{ page.thumbnail }}">
	</div>

</div>