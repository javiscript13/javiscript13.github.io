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
components:   # each component has its own `es:` block (Spanish title, card texts and description)
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
    es:
      title: "Plataforma de datos"
      card_text: "Plataforma web para recopilar, almacenar y explorar las mediciones de calidad del agua que transmiten las estaciones IoT del proyecto."
      card_action: "Ver la plataforma de datos"
      description: |-
        <p>Desarrollé el software de la plataforma Lagos Abiertos, incluido su backend en Django REST y su frontend en React.</p>
        <p>El backend recibe por MQTT las mediciones que transmiten las estaciones de campo, almacena los datos recopilados y los pone a disposición en la plataforma para que investigadores y ciudadanos exploren la calidad del agua a lo largo del tiempo.</p>
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
    es:
      title: "Estación IoT de calidad del agua"
      card_text: "Estación de campo basada en ESP32 que mide condiciones del agua y del ambiente, muestra las lecturas localmente y transmite los datos a la plataforma Lagos Abiertos."
      card_action: "Ver la estación IoT"
      description: |-
        <p>Aporté la mayor parte del firmware de la versión actual de la estación de calidad del agua que usa el proyecto Lagos Abiertos.</p>
        <p>El dispositivo, basado en ESP32, mide temperatura y humedad ambiente, temperatura del agua, pH y ubicación GPS. Muestra las lecturas localmente y las transmite por MQTT al backend del proyecto.</p>
        <p>Mi trabajo se centró en el firmware en C++/Arduino, incluido el aprovisionamiento de Wi-Fi y el manejo de datos sin conexión con LittleFS. Esto permite almacenar temporalmente las mediciones y transmitirlas cuando se restablece la conexión.</p>
        <p>El diseño del PCB y la construcción física estuvieron a cargo de otros miembros del equipo.</p>
availability: online   # online | offline | private | device
parent_type: experience
parent_id: EXP-10
# Spanish version (page /es/portfolios/lagosabiertos). Fields left out stay as in English.
es:
  role: "Desarrollo y visualización de datos"
  short_description: "Plataforma de ciencia ciudadana que usa estaciones IoT para monitorear la calidad del agua en lagos de Guatemala."
  description: |-
    <p>Lagos Abiertos (LakesSensor) es una iniciativa de ciencia ciudadana para monitorear la calidad del agua en lagos de Guatemala. El proyecto combina una plataforma web de datos con estaciones IoT instaladas en campo que recogen y transmiten mediciones ambientales.</p>
    <p>Los dos componentes trabajan juntos: las estaciones toman las mediciones y las transmiten a la plataforma, donde los datos se almacenan y quedan disponibles para que investigadores y ciudadanos exploren la calidad del agua a lo largo del tiempo.</p>
    <p>El proyecto se desarrolló como parte de una iniciativa financiada por CONCYT.</p>
---
