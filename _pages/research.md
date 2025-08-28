---
layout: page
title: research
permalink: /research/
description: Interests and projects
nav: true
nav_order: 1
#display_categories: [work, fun]
horizontal: false
toc:
  sidebar: left

#  **Explainability of LLMs used as classifiers** *Joint project with Markus Marks.* We use large language models as classifiers and assign relevance scores (i.e. contributions to the prediction of the correct class) to all neurons using layer-wise relevance propagation {cite Montavon2019}, which has recently been extended to transformers {cite Achtibat2024}. The tensor of all these scores is a high dimensional object, that we reduce using the techniques in {cite Kondapaneni2024}, based on nonnegative matrix factorization (NMF) {cite Lee2000}. In {cite Kondapaneni2024}, image classifiers were applied to birds and the factors obtained by NMF (visualized directly on the input image) were aligned with expert criteria to make them interpretable. In the case of language, we aim to obtain similar interpretable clusters---not only at the input level but across all layers|postulating that more abstract concepts (e.g., criteria of textual analysis) become available at deeper levels in the network, analogous to what occurs in convolutional neural networks {cite Zeiler2014}. We are currently working on code implementation.)  

---

# Mathematics of information 

More broadly, I'm interested in mathematical aspects of **information theory**, particularly in connection with category theory, algebra and geometry (metric geometry, geometric measure theory, complex algebraic geometry...).

### Gaussian completely monotone conjecture

In the past decade, [J. Huh](https://web.math.princeton.edu/~huh/) solved several long-standing open problems on log-concave sequences in combinatorics. The ground-breaking techniques developed in those work are from algebraic geometry: "We believe that behind any log-concave sequence that appears in nature there is such a Hodge structure responsible for the log-concavity".

A function is called completely monotone if its derivatives alternate in signs; e.g., $e^{-t}$. A fundamental conjecture in mathematical physics and Shannon information theory is on the complete monotonicity of Gaussian distribution (GCM conjecture), which states that $I(X+Z_t)$ is completely monotone in $t$, where $I$ is Fisher information, random variables $X$ and $Z_t$ are independent and $Z_t \sim \mathcal{N}(0,t)$ is Gaussian. Inspired by the algebraic geometry method introduced by J. Huh, GCMC is reformulated in the form of a log-convex sequence. In general, a completely monotone function can admit a log-convex sequence and a log-convex sequence can further induce a log-concave sequence. The new formulation may guide GCM conjecture to the marvelous temple of algebraic geometry.

In another formulation, Gaussian completely monotone conjecture is referred to as: the $m$-th time-derivative of the entropy along the heat flow on $\mathbb{R}^d$ is positive for $m$ even and negative for $m$ odd. Recent progress on this topic is due to Guillaume Wang. In his article, [A Higher-Order Otto Calculus Approach to the Gaussian Completely Monotone Conjecture](https://ieeexplore.ieee.org/document/10979490), he have proven the GCM conjecture for orders up to $m=5$, assuming that the initial measure is log-concave, in any dimension. His work based on Otto calculus and on the interpretation of the heat flow as the Wasserstein gradient flow of the entropy.

### Algebraic approach to information theory

* [Topological characterization of information measures](/_Research/information-topology) 
* [Information dimension and measures with geometric structure](/_Research/information-dimension)
* [Magnitude and diversity](/Research/magnitude)

# Probability theory

### Integrable probability

**Integrable probability** is an area of research at the interface between probability theory, mathematical physics, combinatorics and representation theory. It refers to the study of probabilistic models that are exactly solvable.

The notion of **exact solvability** or **integrability** is somewhat vague. A model is called exactly solvable when observables of interest can be computed by a formula involving well-known functions (rational functions, $\exp$, $\sin$, $\Gamma$), so that the complexity of the formula does not increase as parameters go to $\infty$.

* [Introduction to Integrable Probability](https://galobelwang.github.io/file/IntegrableProbabilityIntroduction.pdf)
* [Topics in Representation Theory](https://galobelwang.github.io/file/IntegrableProbabilityRepresentation.pdf)

