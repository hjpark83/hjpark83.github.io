---
layout: default
title: Blog
---
<div class="container">
  <h3>Blog</h3>
  <ul>
    {% for post in site.posts %}
      <li>
        <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
        <p>{{ post.excerpt }}</p>
        <span>{{ post.date | date: "%Y-%m-%d" }}</span>
      </li>
    {% endfor %}
  </ul>
</div>