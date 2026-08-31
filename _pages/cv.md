---
layout: single
title: "CV"
permalink: /cv/
author_profile: false
redirect_from:
  - /resume
---

{% include base_path %}

<style>
  .cv-timeline {
    position: relative;
    margin: 1.5em 0 2.5em;
    padding-left: 28px;
  }

  .cv-timeline::before {
    content: "";
    position: absolute;
    left: 6px;
    top: 6px;
    bottom: 6px;
    width: 2px;
    background: var(--global-border-color);
  }

  .cv-timeline-item {
    position: relative;
    padding-bottom: 1.75em;
  }

  .cv-timeline-item:last-child {
    padding-bottom: 0;
  }

  .cv-timeline-item::before {
    content: "";
    position: absolute;
    left: -28px;
    top: 4px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: var(--global-bg-color);
    border: 2px solid var(--global-link-color);
  }

  .cv-timeline-item__title {
    font-weight: 600;
    color: var(--global-text-color);
  }

  .cv-timeline-item__subtitle {
    color: var(--global-text-color-light, var(--global-text-color));
    font-size: 0.95em;
  }
</style>

You can view my CV below or open the PDF in a new tab.

<p>
  <a href="{{ base_path }}/files/cv_HyunJoonPark.pdf" class="btn btn--primary" target="_blank">Open CV PDF</a>
</p>

## Education

<div class="cv-timeline">
  <div class="cv-timeline-item">
    <div class="cv-timeline-item__title">Seoul Hwanil High School</div>
  </div>
  <div class="cv-timeline-item">
    <div class="cv-timeline-item__title">B.S. in Computer Software Engineering</div>
    <div class="cv-timeline-item__subtitle">Hanyang University</div>
  </div>
  <div class="cv-timeline-item">
    <div class="cv-timeline-item__title">M.S. in Computer Software Engineering (current)</div>
    <div class="cv-timeline-item__subtitle">Hanyang University</div>
  </div>
</div>

## CV Preview

<div style="width: 100%; height: calc(100vh - 220px); min-height: 720px; max-height: 1100px; overflow: hidden; border: 1px solid var(--global-border-color); border-radius: 8px;">
  <iframe
    src="{{ base_path }}/files/cv_HyunJoonPark.pdf"
    title="CV PDF Preview"
    width="100%"
    height="100%"
    style="border: 0;">
    <p>
      The PDF preview is not available yet. Open the file directly at
      <a href="{{ base_path }}/files/cv_HyunJoonPark.pdf" target="_blank">cv_HyunJoonPark.pdf</a>.
    </p>
  </iframe>
</div>
