---
layout: portfolio
title: "Lagos Abiertos"
categories: ["React", "Django"]
thumbnail: "/assets/images/portfolio/lagosabiertos.jpg"
description: "I built the software behind Lagos Abiertos (LakesSensor): a Django REST backend and React frontend for a citizen science platform that monitors water quality in Guatemalan lakes, developed for a CONCYT-funded project. IoT stations deployed on the lakes send water and air readings over MQTT, the backend stores them in PostgreSQL, and the frontend exposes them so researchers and citizens can track lake health over time."
---
<div class="col-lg-8 text-center">
	<h3 class="mb-5 mt-2">{{page.title}}</h3>
	<p>{{page.description}}</p>

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
