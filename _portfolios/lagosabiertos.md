---
layout: portfolio
title: "Lagos Abiertos"
categories: ["React", "Django"]
thumbnail: "/assets/images/portfolio/lagosabiertos.jpg"
description: "Lagos Abiertos (LakesSensor) is a citizen science IoT platform for water quality monitoring in Guatemalan lakes, developed for a CONCYT-funded project. IoT devices deployed on the lakes collect water and air readings and transmit them via MQTT to a Django REST backend, which stores the data in PostgreSQL and exposes it through a React frontend so researchers and citizens can track lake health over time. I built the full stack, including the MQTT listener that bridges the sensors to the API."
---
<div class="col-lg-8 text-center">
	<h3 class="mb-5 mt-2">{{page.title}}</h3>
	<p>{{page.description}}</p>

<hr class="my-5">
	
<div class="row">
	<div class="col-lg-6 text-center">
		<p class="text-color font-weight-bold mb-2">Available online</p>
		<p>Not public yet, still in development.</p>
	</div>
	<div class="col-lg-6 text-center">
		<p class="text-color font-weight-bold mb-2">Available on github</p>
		<p>Not public yet</p>
	</div>
</div>

<hr class="my-5">

<div class="row">
	<div class="col-lg-12">
		<img alt="entry image" class="img-fluid" src="{{ page.thumbnail }}">
	</div>

</div>
