---
title: "Consistent Scene Understanding in 3D Gaussian Splatting via Multi-Cue Mask Refinement"
collection: publications
category: manuscripts
permalink: /publication/Consistent Scene Understanding in 3D Gaussian Splatting via Multi-Cue Mask Refinement
excerpt: 'This paper is about the number 1. The number 2 is left for future work.'
date: 2026-04-01
venue: 'Conference 1'
# slidesurl: 'https://academicpages.github.io/files/slides1.pdf'
paperurl: 'https://academicpages.github.io/files/paper1.pdf'
bibtexurl: 'https://academicpages.github.io/files/bibtex1.bib'
citation: 'Hyunjoon Park, *Donghyeon Cho. (2026). &quot;Consistent Scene Understanding in 3D Gaussian Splatting via Multi-Cue Mask Refinement.&quot; <i>ICPR</i>.'
---
Reliable instance-level scene understanding is a fundamental prerequisite for object-level interactions and high-fidelity 3D representations.
While current methods often leverage 2D foundation models, such as the Segment Anything Model (SAM), to obtain these priors, 2D centric design of SAM typically yields fragmented masks and inconsistent predictions across different views.
To address these issues, we propose a multi-cue mask refinement framework that produces consistent 2D instance masks to guide the optimization of 3D Gaussian Splatting (3DGS) feature fields.
Our framework consists of three main stages. (1) A Multi-Cue Extraction that generates synergistic semantic, geometric, and structural priors from input images.
(2) A Multi-Cue-Guided Mask Merging process that consolidates fragmented masks using a composite merge score derived from semantic, depth, and edge cues.
(3) A Cross-View Mask Matching that establishes globally consistent identity assignments across all viewpoints.
By transforming viewpoint-specific segments into coherent 3D primitives, our approach enables stable 3D instance segmentation and effective downstream editing tasks.
Experiments demonstrate that our method significantly improves cross-view consistency and segmentation stability over existing baselines while maintaining high-fidelity photometric reconstruction.
