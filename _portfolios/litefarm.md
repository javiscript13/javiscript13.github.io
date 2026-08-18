---
layout: portfolio
title: "LiteFarm"
categories: ["React", "Express.js"]
filter_group: ["Web Apps"]
thumbnail: "/assets/images/portfolio/lf1.png"
short_description: "An open-source farm management platform for current and aspiring sustainable farmers."
description: "<p>LiteFarm is a free and open-source farm management platform built for current and aspiring sustainable farmers.</p>
<p>I contribute to the project as a full-stack developer, working on both backend and frontend features, fixing bugs, and participating in the team's Scrum ceremonies.</p>"
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
		<p><a href="https://app.litefarm.org/" target="_blank">check the webapp</a></p>
	</div>
	<div class="col-lg-6 text-center">
		<p class="text-color font-weight-bold mb-2">Available on github</p>
		<p><a href="https://github.com/LiteFarmOrg/LiteFarm" target="_blank">at Github</a></p>
	</div>
</div>

<hr class="my-5">

<div class="row">
	<div class="col-lg-12">
		<img alt="entry image" class="img-fluid" src="{{ page.thumbnail }}">
	</div>

</div>
<div class="row">
	<div class="col-lg-12">
		<img alt="entry image" class="img-fluid" src="/assets/images/portfolio/lf2.png">
	</div>

</div>
<div class="row">
	<div class="col-lg-12">
		<img alt="entry image" class="img-fluid" src="/assets/images/portfolio/lf3.png">
	</div>

</div>