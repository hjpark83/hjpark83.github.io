layout: default title: Blog
<div class="container blog-list">
<h3>Blog</h3>

<!-- 포스트 목록 시작 -->

{% for post in paginator.posts %}

<div class="blog-post-item row">
<!-- 왼쪽: 이미지와 제목 -->
<div class="post-left col-md-4">
<a href="{{ post.url | relative_url }}">
{% if post.image %}
<img src="{{ post.image | relative_url }}" alt="{{ post.title }}">
{% else %}
<img src="https://www.google.com/search?q=https://placehold.co/600x400/eee/ccc%3Ftext%3DNo%2BImage" alt="No Image">
{% endif %}
<h2>{{ post.title }}</h2>
</a>
</div>
<!-- 오른쪽: 요약과 날짜 -->
<div class="post-right col-md-8">
<p>{{ post.excerpt }}</p>
<span class="post-date">{{ post.date | date: "%Y-%m-%d" }}</span>
</div>
</div>
{% endfor %}

<!-- 페이지 번호 시작 -->

<div class="pagination">
{% if paginator.previous_page %}
<a href="{{ paginator.previous_page_path | relative_url }}">&laquo; Prev</a>
{% else %}
<span>&laquo; Prev</span>
{% endif %}

{% for page in (1..paginator.total_pages) %}
  {% if page == paginator.page %}
    <span class="active">{{ page }}</span>
  {% elsif page == 1 %}
    <a href="{{ '/blog.html' | relative_url }}">{{ page }}</a>
  {% else %}
    <a href="{{ site.paginate_path | relative_url | replace: ':num', page }}">{{ page }}</a>
  {% endif %}
{% endfor %}

{% if paginator.next_page %}
  <a href="{{ paginator.next_page_path | relative_url }}">Next &raquo;</a>
{% else %}
  <span>Next &raquo;</span>
{% endif %}

</div>
</div>