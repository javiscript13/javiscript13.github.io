---
layout: portfolio
source_id: PRJ-12   # internal ID in the source database; not shown on the site
title: "Lagos Abiertos"
order: 3
category: data-analytics
tags: ["React", "Django", "ESP32", "C++"]
capabilities: [data-software]   # ids from _data/services.yml; only where documented
visibility: public   # public | archive | private (archive/private also need published: false)
featured: 1   # 1, 2 or 3: shows first in Work (1 before 2 before 3); empty = after them
year:
client:
role: "Development and data visualization"
short_description: "A citizen science platform that uses IoT stations to monitor water quality in Guatemalan lakes."
description: |-
  <p>Lagos Abiertos (LakesSensor) is a citizen science initiative for monitoring water quality in Guatemalan lakes. The project combines a web-based data platform with IoT stations deployed in the field to collect and transmit environmental measurements.</p>
  <p>The two components work together: the stations collect measurements and transmit them to the platform, where the data is stored and made available for researchers and citizens to explore water quality over time.</p>
  <p>The project was developed as part of a CONCYT-funded initiative.</p>
thumbnail: "/assets/images/portfolio/lagosabiertos.jpg"
images: []
website: "https://www.lagosabiertos.org"
repository: "https://github.com/javiscript13/lakessensor"
showcase: true   # this page shows an introduction, one card per component and a detailed section for each (see _layouts/portfolio.html)
components:
  - id: "data-platform"
    number: "01"
    title: "Data Platform"
    card_tags: ["Django REST", "React", "MQTT"]
    card_text: "A web platform for collecting, storing, and exploring water quality measurements transmitted by the project's IoT stations."
    card_action: "Explore Data Platform"
    image: "/assets/images/portfolio/lagosabiertos.jpg"
    description: |-
      <p>I developed the software behind the Lagos Abiertos platform, including its Django REST backend and React frontend.</p>
      <p>The backend receives measurements transmitted by the field stations over MQTT, stores the collected data, and makes it available through the platform for researchers and citizens to explore water quality over time.</p>
    website: "https://www.lagosabiertos.org"
    repository: "https://github.com/javiscript13/lakessensor"
    availability: online
  - id: "iot-water-quality-station"
    number: "02"
    title: "IoT Water Quality Station"
    card_tags: ["ESP32", "C++", "Arduino", "MQTT"]
    card_text: "An ESP32-based field station that measures water and environmental conditions, displays readings locally, and transmits data to the Lagos Abiertos platform."
    card_action: "Explore IoT Station"
    image: "/assets/images/portfolio/lagosabiertosdispositivo.jpg"
    description: |-
      <p>I contributed most of the firmware for the current version of the Water Quality Station used by the Lagos Abiertos project.</p>
      <p>The ESP32-based device measures ambient temperature and humidity, water temperature, pH, and GPS location. It displays readings locally and transmits them over MQTT to the project's backend.</p>
      <p>My work focused on the C++/Arduino firmware, including Wi-Fi provisioning and offline data handling using LittleFS. This allows measurements to be queued locally and transmitted again when connectivity becomes available.</p>
      <p>The PCB design and physical construction were developed by other members of the team.</p>
    repository: "https://github.com/javiscript13/water-Quality-Station"
    availability: device
availability: online   # online | offline | private | device
parent_type: experience
parent_id: EXP-10
---
