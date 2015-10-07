---
layout: page
permalink: /about/
title: About me
name: about
lang: en
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


My name is **Nathan Prat**, and this is my personal blog. It currently has {{ posts_number }} posts in {{ site.categories | size }} categories.
