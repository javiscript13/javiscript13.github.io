---
layout: portfolio
title: "Lagos Abiertos"
categories: ["React", "Django"]
thumbnail: "/assets/images/portfolio/lagosabiertos.jpg"
short_description: "A citizen science platform that uses IoT stations to monitor water quality in Guatemalan lakes."
description: "<p>Lagos Abiertos (LakesSensor) is a citizen science platform for monitoring water quality in Guatemalan lakes.</p>
<p>I built the software behind the platform, including a Django REST backend and React frontend. IoT stations deployed on the lakes collect water and air measurements and send them to the backend over MQTT, where the data is stored and made available for researchers and citizens to explore water quality over time.</p>
<p>The project was developed as part of a CONCYT-funded initiative.</p>"
---
<div class="col-lg-8 text-center">
	<h3 class="mb-5 mt-2">{{page.title}}</h3>
	{{page.description}}

<hr class="my-5">
	
<div class="row">
	<div class="col-lg-6 text-center">
		<p class="text-color font-weight-bold mb-2">Available online</p>
		<p><a href="https://www.lagosabiertos.org" target="_blank">lagosabiertos.org</a></p>
	</div>
	<div class="col-lg-6 text-center">
		<p class="text-color font-weight-bold mb-2">Available on github</p>
		<p><a href="https://github.com/javiscript13/lakessensor" target="_blank">at Github</a></p>
	</div>
</div>

<hr class="my-5">

<div class="row">
	<div class="col-lg-12">
		<img alt="entry image" class="img-fluid" src="{{ page.thumbnail }}">
	</div>

</div>
