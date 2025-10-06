---
layout: default
title: Blog
---
{# 'blog-list' 라는 클래스를 추가하여 이 페이지에만 특별한 스타일을 적용할 수 있도록 합니다. #}
<div class="container blog-list">
  <h3>Blog</h3>
  <ul>
    {% for post in site.posts %}
      <li>
        {# 링크가 올바르게 생성되도록 | relative_url 을 추가합니다. #}
        <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
        <p>{{ post.excerpt }}</p>
        <span class="post-date">{{ post.date | date: "%Y-%m-%d" }}</span>
      </li>
    {% endfor %}
  </ul>
</div>