---
layout: portfolio
title: "Government Investigation Software"
order: 2
categories: ["react", "express.js"]
filter_group: ["Web Apps"]
thumbnail: "/assets/images/portfolio/criminalInv.png"
short_description: "A web application built to support and manage criminal investigation processes for Guatemala's Public Ministry."
description: "<p>I worked as a full-stack developer on a team that built a web application for criminal investigation for Guatemala's Public Ministry.</p>
<p>The project was sponsored by JES and developed in close collaboration with the Public Ministry to replace the organization's existing system. I worked across the application using the SERN stack: React, Express.js, and related technologies.</p>"
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
		<p>No, it is private for the orgnization.</p>
	</div>
	<div class="col-lg-6 text-center">
		<p class="text-color font-weight-bold mb-2">Available on github <i class="ti-github" style="vertical-align:middle;"></i></p>
		<p>Not FOSS</p>
	</div>
</div>

<hr class="my-5">

<div class="row">
	<div class="col-lg-12">
		<img alt="entry image" class="img-fluid" src="{{ page.thumbnail }}">
	</div>

</div>