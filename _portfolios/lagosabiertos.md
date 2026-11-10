---
layout: portfolio
source_id: PRJ-12   # internal ID in the source database; not shown on the site
title: "Lagos Abiertos"
order: 3
category: data-analytics
tags: ["React", "Django", "ESP32", "C++"]
capabilities: [data-software]   # ids from _data/services.yml; only where documented
visibility: public   # featured | public | archive | private (archive/private also need published: false)
featured: 1   # 1, 2 or 3: shows first in Work (1 before 2 before 3); empty = after them
year:
client:
role: "Development and data visualization"
short_description: "A citizen science platform that uses IoT stations to monitor water quality in Guatemalan lakes."
description: |-
  <p>Lagos Abiertos (LakesSensor) is a citizen science platform for monitoring water quality in Guatemalan lakes.</p>
  <p>I built the software behind the platform, including a Django REST backend and React frontend. IoT stations deployed on the lakes collect water and air measurements and send them to the backend over MQTT, where the data is stored and made available for researchers and citizens to explore water quality over time.</p>
  <p>The project was developed as part of a CONCYT-funded initiative.</p>
thumbnail: "/assets/images/portfolio/lagosabiertos.jpg"
images: []
website: "https://www.lagosabiertos.org"
repository: "https://github.com/javiscript13/lakessensor"
components:
  - title: "IoT Device Water Quality Station"
    tags: ["ESP32", "C++"]
    short_description: "ESP32-based field station for collecting and transmitting water and environmental data."
    description: |-
      <p>I contributed most of the firmware for the current version of the Water Quality Station used by the Lagos Abiertos citizen science project.</p>
      <p>The ESP32-based field device measures ambient temperature and humidity, water temperature, pH, and GPS location. It displays readings locally and transmits them over MQTT to the project's backend.</p>
      <p>I worked on the C++/Arduino firmware, including Wi-Fi provisioning and offline data handling using LittleFS, allowing readings to be queued and resent when connectivity is temporarily unavailable.</p>
      <p>The PCB design and physical construction were developed by other members of the team.</p>
    image: "/assets/images/portfolio/lagosabiertosdispositivo.jpg"
    availability: device
    repository: "https://github.com/javiscript13/water-Quality-Station"
availability: online   # online | offline | private | device
parent_type: experience
parent_id: EXP-10
---
