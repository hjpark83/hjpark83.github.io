---
layout: default
title: Publications
---
{% for section in site.content %}
  {% if section.title == "Publications" %}
    <div class="container {{ section.layout }}-container">
      <h3 id="{{ section.title | slugify }}">{{ section.title }}</h3>
      <div class="collapsible-content" style="max-height: none; padding-top: 20px;">
         {% include {{ section.layout | prepend: "section-" | append: ".html" }} content=section.content %}
      </div>
    </div>
  {% endif %}
{% endfor %}
