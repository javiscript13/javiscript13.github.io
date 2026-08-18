---
layout: portfolio
title: "Infotepequez"
categories: ["Customization and Installation", "Rails Templating"]
filter_group: ["Web Apps"]
thumbnail: "/assets/images/portfolio/infotepequez.png"
short_description: "A platform for managing requests for public information from municipalities in Guatemala."
description: "<p>Infotepequez was a platform for keeping track of requests for public information made to municipalities in Guatemala.</p>
<p>The project was based on Alaveteli, an open-source platform for freedom of information requests. I customized the platform using Ruby on Rails templates while working at Guatecambia.</p>"
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
		<p>Not online anymore.</p>
	</div>
	<div class="col-lg-6 text-center">
		<p class="text-color font-weight-bold mb-2">Available on github <i class="ti-github" style="vertical-align:middle;"></i></p>
		<p><a href="https://github.com/Guatecambia/publitopia-alaveteli-theme" target="_blank">at Github</a></p>
	</div>
</div>

<hr class="my-5">

<div class="row">
	<div class="col-lg-12">
		<img alt="entry image" class="img-fluid" src="{{ page.thumbnail }}">
	</div>

</div>