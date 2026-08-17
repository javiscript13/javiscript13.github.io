---
layout: portfolio
title: "IoT Device Water Quality Station"
categories: ["ESP32", "C++"]
thumbnail: "/assets/images/portfolio/lagosabiertosdispositivo.jpg"
description: "Water Quality Station is the ESP32-based field device for the Lagos Abiertos / LakesSensor citizen science project (SinerCyT/CONCYT). It reads ambient temperature and humidity (AHT10), water temperature (DS18B20), pH (calibrated analog probe) and GPS location, shows live readings on a SH1106 OLED display, and publishes them over MQTT so they reach the Django backend. Provisioning uses WiFiManager for on-site WiFi configuration, and readings are queued to LittleFS and resent automatically when connectivity or MQTT delivery is temporarily lost. I designed the PCB (KiCad) and wrote the firmware in C++ with the Arduino framework."
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
		<p>Not public yet</p>
	</div>
</div>

<hr class="my-5">

<div class="row">
	<div class="col-lg-12">
		<img alt="entry image" class="img-fluid" src="{{ page.thumbnail }}">
	</div>

</div>
