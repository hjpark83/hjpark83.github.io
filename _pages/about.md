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

## News

{% if site.data.news %}
  <ul class="news-list">
  {% for item in site.data.news limit: 5 %}
    <li>
      <span class="news-list__date">{{ item.date }}</span>
      <span class="news-list__text">{{ item.text | markdownify | remove: '<p>' | remove: '</p>' }}</span>
      {% if item.link %}<a href="{{ item.link }}">{{ item.link_label | default: "Link" }}</a>{% endif %}
    </li>
  {% endfor %}
  </ul>
{% endif %}

## Publications

{% assign featured_publications = site.publications | reverse %}
{% for post in featured_publications limit: 3 %}
  {% include publication-card.html post=post view="compact" %}
{% endfor %}
