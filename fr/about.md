---
layout: page
permalink: /a-propos/
title: Nathan Prat
name: about
lang: fr
tags: [Nathan, Prat, nathanprat]
imagefeature: fourseasons.jpg
chart: true
---
<figure>
  <img src="{{ site.url }}/images/about/cover-about.jpg" alt="about">
</figure>

{% assign posts_number = 0 %}

{% assign postss=site.posts | where:"lang", page.lang %}
{% for post in postss %}
    {% assign posts_number = posts_number | plus: 1 %}
{% endfor %}


Je suis **Nathan Prat**, et ceci est mon blog. Actuellement il y a {{ posts_number }} posts dans {{ site.categories | size }} categories.
