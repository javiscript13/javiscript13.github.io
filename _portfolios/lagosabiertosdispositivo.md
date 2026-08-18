---
layout: portfolio
title: "IoT Device Water Quality Station"
categories: ["ESP32", "C++"]
thumbnail: "/assets/images/portfolio/lagosabiertosdispositivo.jpg"
short_description: "ESP32-based field station for collecting and transmitting water and environmental data."
description: "<p>I contributed most of the firmware for the current version of the Water Quality Station used by the Lagos Abiertos citizen science project.</p>
<p>The ESP32-based field device measures ambient temperature and humidity, water temperature, pH, and GPS location. It displays readings locally and transmits them over MQTT to the project's backend.</p>
<p>I worked on the C++/Arduino firmware, including Wi-Fi provisioning and offline data handling using LittleFS, allowing readings to be queued and resent when connectivity is temporarily unavailable.</p>
<p>The PCB design and physical construction were developed by other members of the team.</p>"
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
		<p>Deployed in the field, not a web service.</p>
	</div>
	<div class="col-lg-6 text-center">
		<p class="text-color font-weight-bold mb-2">Available on github</p>
		<p><a href="https://github.com/javiscript13/water-Quality-Station" target="_blank">at Github</a></p>
	</div>
</div>

<hr class="my-5">

<div class="row">
	<div class="col-lg-12">
		<img alt="entry image" class="img-fluid" src="{{ page.thumbnail }}">
	</div>

</div>
