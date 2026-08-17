---
layout: portfolio
title: "IoT Device Water Quality Station"
categories: ["ESP32", "C++"]
thumbnail: "/assets/images/portfolio/lagosabiertosdispositivo.jpg"
description: "I contributed most of the firmware in the current version of the Water Quality Station, the ESP32-based field device for the Lagos Abiertos / LakesSensor citizen science project (SinerCyT/CONCYT). It reads ambient temperature and humidity (AHT10), water temperature (DS18B20), pH (calibrated analog probe) and GPS location, shows live readings on a SH1106 OLED display, and publishes them over MQTT so they reach the Django backend. Provisioning uses WiFiManager for on-site WiFi configuration, and readings are queued to LittleFS and resent automatically when connectivity or MQTT delivery is temporarily lost. My work was on the C++/Arduino firmware; the PCB design and physical build were done by other members of the team."
---
<div class="col-lg-8 text-center">
	<h3 class="mb-5 mt-2">{{page.title}}</h3>
	<p>{{page.description}}</p>

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
