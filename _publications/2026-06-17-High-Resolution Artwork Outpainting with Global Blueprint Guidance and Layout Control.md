---
title: "High-Resolution Artwork Outpainting with Global Blueprint Guidance and Layout Control"
collection: publications
category: conferences
permalink: /publication/High-Resolution Artwork Outpainting with Global Blueprint Guidance and Layout Control
excerpt: 'High resolution artwork outpainting guided by global blueprint and layout'
authors: 'Junha Kim, Hyunjoon Park, Donghyeon Cho'
date: 2026-06-17
venue: 'ECCV'
project_page: ''
github_url: ''
# slidesurl: 'https://academicpages.github.io/files/slides1.pdf'
# paperurl: 'https://your-paper-url'
# bibtexurl: 'https://academicpages.github.io/files/bibtex1.bib'
citation: ''
header:
  teaser: "/images/ECCV/ECCV_pipeline.png"
paper_pipeline: "/images/ECCV/ECCV_pipeline.png"
paper_pipeline_alt: "Pipeline overview for High-Resolution Artwork Outpainting"
paper_pipeline_caption: "Overview of the proposed outpainting framework"
# contribution: "Your main personal contribution summary."
contributions:
  - "**Global Blueprint-Guided Planning**: We generate a low-resolution global blueprint prior to local synthesis, preventing error accumulation in sequential generation."
  - "**Layout-Controllable Framework**: We propose a control mechanism that introduces a layout adapter during the planning stage to place objects at user-specified locations."
  - "**Efficient Parallel Synthesis with Global Guidance**: We enable parallel patch generation for high-resolution artwork outpainting by utilizing the global blueprint and injecting local positional information."
qualitative_results:
  - image: "/images/ECCV/ECCV_qualitative.png"
    alt: "Qualitative results for artwork outpainting"
    caption: "The red dashed box in the GT indicates the source region. The area outside the box is masked during inference and serves as the target-region to be generated. PQDiff produces blurry results and SD-Inpainting creates visible seams, while PowerPaint and ProOut often introduce artificial frames or out-of-context. In contrast, out method synthesizes seamless, high-fidelity extensions that faithfully preserve the original style and global structure."
  - image: "/images/ECCV/ECCV_layout.png"
    alt: "Qualitative results on Layout-guided Generation"
    caption: "Bounding boxes and object descriptions are provided as layout conditions to guide the generatin. Baselines rely solely on text prompts and thus struggle to control spatial placements, whereas our method accurately generates specified objects at designated locations."
bibtex: |
  @inproceedings{TO DO,
    title={High-Resolution Artwork Outpainting with Global Blueprint Guidance and Layout Control},
    author={Junha Kim, Hyunjoon Park, and Donghyeon Cho},
    booktitle={ECCV},
    year={2026}
  }
# paper_gif: "/images/publications/your-demo.gif"
# paper_gif_alt: "Short qualitative demo"
# paper_gif_caption: "Example qualitative results."
---
Image outpainting extends an image beyond its original borders, requiring seamless style integration and globally coherent scene completion.
Building on the success of diffusion models, recent methods have achieved substantial improvements in visual quality.
In practice, however, high-resolution outpainting is commonly performed via progressive expansion around a fixed source image, particularly in artwork scenarios.
Despite this progress, existing approaches still suffer from three key limitations:
(i) the absence of a reliable global planning mechanism, which leads to structural instability and error accumulation at high resolutions;
(ii) limited spatial controllability beyond text prompts, making it difficult to place objects at user-specified locations;
and (iii) high inference latency caused by inherently sequential patch generation.
To address these issues, we propose a global blueprint-guided two-stage diffusion framework for layout-controllable high-resolution outpainting with efficient parallel synthesis.
In Stage 1, we generate a low-resolution global blueprint using a layout adapter that injects bounding-box conditions into a Stable Diffusion inpainting backbone, producing a globally consistent structural plan while extracting global guidance features.
In Stage 2, we synthesize high-resolution local patches in parallel by injecting the blueprint-derived global guidance and initializing each patch from the blueprint using the low-frequency preservation property of forward diffusion.
This design eliminates sequential dependency while maintaining global coherence.
Extensive experiments on large-scale artwork datasets demonstrate improved visual fidelity, stronger semantic consistency, and substantially reduced inference time compared to prior baselines, while uniquely supporting explicit layout control for artwork outpainting.
