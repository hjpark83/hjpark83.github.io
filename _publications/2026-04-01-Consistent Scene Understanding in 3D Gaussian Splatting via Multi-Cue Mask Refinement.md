---
title: "Consistent Scene Understanding in 3D Gaussian Splatting via Multi-Cue Mask Refinement"
collection: publications
category: conferences
permalink: /publication/Consistent Scene Understanding in 3D Gaussian Splatting via Multi-Cue Mask Refinement
excerpt: 'Multi-cue mask refinement for more consistent instance understanding in 3D Gaussian Splatting.'
authors: 'Hyunjoon Park, Donghyeon Cho'
date: 2026-04-01
venue: 'ICPR'
project_page: 'https://hjpark83.github.io/consisGS.github.io/'
github_url: 'https://github.com/hjpark83/Consistent-Scene-Understanding-in-3DGS-via-MCM'
# slidesurl: 'https://academicpages.github.io/files/slides1.pdf'
paperurl: 'https://arxiv.org/abs/2607.01708'
# bibtexurl: 'https://academicpages.github.io/files/bibtex1.bib'
header:
  teaser: "/images/ICPR/ICPR_qualitative.png"
paper_pipeline: "/images/ICPR/ICPR_pipeline.png"
paper_pipeline_alt: "Pipeline overview for multi-cue mask refinement"
paper_pipeline_caption: "Overview of the proposed multi-cue refinement pipeline."
# contribution: "Your main personal contribution summary."
contributions:
  - "A Multi-Cue Mask Refinement framework that mitigates SAM-induced over-segmentation based on multiple cues."
  - "A cross-view mask matching method that establishes globally consistent object identities and suppresses view-dependent label inconsistencies across all viewpoints."
  - "A multiview consensus lifting procedure that transfers 2D identities to 3D Gaussians while filtering unreliable assignments through majority voting and variance analysis."
  - Extensive evaluation on LERF, Replica, and several real-world scenes, demonstrating substantial gains in correct object assignment and a significant reduction in over-segmented object counts.
qualitative_results:
  - image: "/images/ICPR/ICPR_qualitative.png"
    alt: "Qualitative results for multi-cue mask refinement"
    caption: "This figure demonstrates how faithfully our refinement results represent the scene and maintain view consistency across different viewpoints."
  - image: "/images/ICPR/ICPR_consistency.png"
    alt: "Qualitative Comparison of View consistency"
    caption: "Compared to the baseline (GaussianGrouping), which exhibits over-segmentation and inconsistent object identities across different views, our approach successfully produces coherent, view-consistent object masks across changing viewpoints."
bibtex: |
  @inproceedings{TO DO,
    title={Consistent Scene Understanding in 3D Gaussian Splatting via Multi-Cue Mask Refinement},
    author={Hyunjoon Park, Donghyeon Cho},
    booktitle={ICPR},
    year={2026}
  }
# paper_gif: "/images/publications/your-demo.gif"
# paper_gif_alt: "Short qualitative demo"
# paper_gif_caption: "Example qualitative results."
---
Reliable instance-level scene understanding is a fundamental prerequisite for object-level interactions and high-fidelity 3D representations.
While current methods often leverage 2D foundation models, such as the Segment Anything Model (SAM), to obtain these priors, 2D centric design of SAM typically yields fragmented masks and inconsistent predictions across different views.
To address these issues, we propose a multi-cue mask refinement framework that produces consistent 2D instance masks to guide the optimization of 3D Gaussian Splatting (3DGS) feature fields.
Our framework consists of three main stages. (1) A Multi-Cue Extraction that generates synergistic semantic, geometric, and structural priors from input images.
(2) A Multi-Cue-Guided Mask Merging process that consolidates fragmented masks using a composite merge score derived from semantic, depth, and edge cues.
(3) A Cross-View Mask Matching that establishes globally consistent identity assignments across all viewpoints.
By transforming viewpoint-specific segments into coherent 3D primitives, our approach enables stable 3D instance segmentation and effective downstream editing tasks.
Experiments demonstrate that our method significantly improves cross-view consistency and segmentation stability over existing baselines while maintaining high-fidelity photometric reconstruction.
