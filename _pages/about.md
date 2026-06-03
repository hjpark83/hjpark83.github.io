---
permalink: /
title: "Hyunjoon Park"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

I am a Master's student in Computer Software Engineering at Hanyang University and a member of [HYU CVLab](https://sites.google.com/view/hyu-cv), advised by [Prof. Donghyeon Cho](https://scholar.google.com/citations?user=zj-NER4AAAAJ&hl=en). My research focuses on computer vision, with interests spanning 3D computer vision, conditional generative models, and video understanding.

Recently, I have been particularly interested in **3D scene understanding** and **human video generation**.

## Selected Publications

{% assign featured_publications = site.publications | reverse %}
{% for post in featured_publications limit: 3 %}
  {% include archive-single.html %}
{% endfor %}

<p><a href="{{ base_path }}/publications/" class="btn btn--primary">View All Publications</a></p>
