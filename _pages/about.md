---
permalink: /
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

<style>
  .home-hero {
    margin: 0 0 1.5rem;
  }

  .home-hero__name {
    margin: 0 0 0.25rem;
    font-family: "Newsreader", Georgia, serif;
    font-weight: 600;
    font-size: 1.85rem;
    line-height: 1.2;
    color: var(--global-text-color);
  }

  .home-hero__tagline {
    margin: 0;
    font-size: 0.95rem;
    color: var(--global-text-color-light, var(--global-text-color));
  }

  .edu-timeline {
    position: relative;
    display: flex;
    justify-content: space-between;
    gap: 1.25rem;
    list-style: none;
    margin: 1.75rem auto 2.25rem;
    padding: 0;
  }

  .edu-timeline::before {
    content: "";
    position: absolute;
    top: 19px;
    left: 6%;
    right: 6%;
    height: 2px;
    background: linear-gradient(90deg, var(--global-border-color), #667eea 25%, #764ba2 75%, var(--global-border-color));
    z-index: 0;
  }

  .edu-timeline-item {
    position: relative;
    z-index: 1;
    flex: 1;
    min-width: 0;
    text-align: center;
    padding: 0 0.5rem;
  }

  .edu-timeline-logo {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 56px;
    height: 56px;
    margin: 0 auto 0.85rem;
    border-radius: 50%;
    overflow: hidden;
    background:
      linear-gradient(#fff, #fff) padding-box,
      linear-gradient(135deg, #667eea 0%, #764ba2 100%) border-box;
    border: 2px solid transparent;
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.25), 0 2px 4px -2px rgb(0 0 0 / 0.25);
  }

  .edu-timeline-logo img {
    width: 76%;
    height: 76%;
    object-fit: contain;
  }

  .edu-timeline-item__title {
    font-weight: 700;
    font-size: 0.95rem;
    color: var(--global-text-color);
    margin-bottom: 0.2rem;
  }

  .edu-timeline-item__subtitle {
    font-size: 0.85rem;
    color: var(--global-text-color-light, var(--global-text-color));
  }

  .edu-timeline-item__location {
    font-size: 0.75rem;
    color: var(--global-text-color-light, var(--global-text-color));
  }

  @media (max-width: 600px) {
    .edu-timeline {
      flex-direction: column;
      align-items: stretch;
      gap: 1.5rem;
    }

    .edu-timeline::before {
      top: 0;
      bottom: 0;
      left: 19px;
      right: auto;
      width: 2px;
      height: auto;
      background: linear-gradient(180deg, var(--global-border-color), #667eea 25%, #764ba2 75%, var(--global-border-color));
    }

    .edu-timeline-item {
      display: flex;
      align-items: flex-start;
      gap: 1rem;
      text-align: left;
      padding: 0;
    }

    .edu-timeline-logo {
      margin: 0;
      flex-shrink: 0;
    }
  }

  .news-list {
    position: relative;
    padding-left: 1.5rem;
  }

  .news-list::before {
    content: "";
    position: absolute;
    left: 5px;
    top: 4px;
    bottom: 4px;
    width: 2px;
    background: linear-gradient(180deg, #667eea, #764ba2);
  }

  .news-list li {
    position: relative;
  }

  .news-list li::before {
    content: "";
    position: absolute;
    left: -1.5rem;
    top: 6px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border: 2px solid var(--global-bg-color);
    box-shadow: 0 0 0 1px var(--global-border-color);
  }
</style>

<div class="home-hero">
  <h1 class="home-hero__name">Hyunjoon Park</h1>
  <p class="home-hero__tagline">Computer Vision Researcher</p>
</div>

Hi! My name is Hyunjoon Park and I am a Master's student in Computer Software Engineering at Hanyang University and a member of [HYU CVLab](http://cvlab.hanyang.ac.kr/), advised by [Prof. Donghyeon Cho](https://scholar.google.com/citations?user=zj-NER4AAAAJ&hl=en). My research focuses on computer vision, particularly **3D Scene Understanding** and **Conditional Generative Models**, with a current focus on identity-preserving generation for video synthesis.

<div class="home-sections" markdown="1">

<h2 class="section-title">News</h2>

{% if site.data.news %}
  <ul class="news-list">
  {% for item in site.data.news limit: 5 %}
    <li>
      <div class="news-list__row">
        <span class="news-list__date">{{ item.date }}</span>
        <span class="news-list__content">
          <span class="news-list__text">{{ item.text | markdownify | remove: '<p>' | remove: '</p>' }}</span>
          {% if item.link %}<a href="{{ item.link }}">{{ item.link_label | default: "Link" }}</a>{% endif %}
        </span>
      </div>
    </li>
  {% endfor %}
  </ul>
{% endif %}

<h2 class="section-title">Publications</h2>

{% assign featured_publications = site.publications | reverse %}
{% for post in featured_publications limit: 3 %}
  {% include publication-card.html post=post view="compact" %}
{% endfor %}

<h2 class="section-title">Education</h2>

<div class="edu-timeline">
  <div class="edu-timeline-item">
    <span class="edu-timeline-logo"><img src="/images/hwanil.png" alt="Hwanil High School logo"></span>
    <div class="edu-timeline-item__title">Hwanil High School</div>
    <div class="edu-timeline-item__location">Seoul</div>
  </div>
  <div class="edu-timeline-item">
    <span class="edu-timeline-logo"><img src="/images/hanyang.png" alt="Hanyang University logo"></span>
    <div class="edu-timeline-item__title">Hanyang University</div>
    <div class="edu-timeline-item__subtitle">B.S. in Computer Software Engineering</div>
    <div class="edu-timeline-item__location">Seoul</div>
  </div>
  <div class="edu-timeline-item">
    <span class="edu-timeline-logo"><img src="/images/hanyang.png" alt="Hanyang University logo"></span>
    <div class="edu-timeline-item__title">Hanyang University</div>
    <div class="edu-timeline-item__subtitle">M.S. in Computer Software Engineering (~ing)</div>
    <div class="edu-timeline-item__location">Seoul</div>
  </div>
</div>

<h2 class="section-title">Patents</h2>

- "**Consistent Scene Understanding in 3D Gaussian Splatting via Multi-Cue Mask Refinement (다중 단서 기반 3차원 장면 이해 장치 및 방법)**", KR Patent No. 10-2026-0105246

</div>
