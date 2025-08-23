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

# AI interpretability

I am currently working on AI interpretability, with a particular focus on transformer-based large language models (LLMs). I am actively working on two projects:

### Geometry of LLMs' latent representations and emergence of compositional features.

  Previous work point to a nontrivial intrinsic geometry of token embeddings: they can be seen as points of a stratified space {% cite Robinson2024 %}, and different models (even trained on different modalities) have comparable embeddings {% cite Roads2020 Luo2024a Jha2025 %}. I have computed that in language models such as GPT-2, k-means clustering or hierarchical clustering of the token embeddings reveal some degree of organization that combines semantics and potential syntactic roles.  For the purpose of this investigation, I propose that a *primitive feature* is a characteristic of an embedded token (possibly shared by members of cluster) that is exploited by some attention or MLP block. Instead of taking the *matrices* of these blocks as the main objects of interest, my focus is on the coordinate-independent geometric entities (e.g. linear subspaces) that the matrices define in residual space,  e.g. via  their kernels, images, and singular vectors. Rather than interpreting the singular vectors directly in terms of input tokens, as in {% cite Elhage2021 %} or {% cite Dar2023 %}, I interpret them as providing incremental modifications to the initial embeddings, "constructing" new context-dependent features from the primitives (thus obtaining *compositional features*); the interaction with layer norm might thus induce discrete classes via clustering as in the toy examples of {% cite Winsor2022 %}. Since deeper layers do not only read the initial token embeddings but also the modifications introduced by previous blocks, we need new tools to quantify the relevance of modifications introduced at each layer. A combination of hierarchical clustering and matrix-based input-independent analysis of heads will give us a hierarchy of coarse grained descriptions of the action of each block on tokens and a coarse grained view of the interaction between different blocks. 
  
### Understanding internal representations of syntax in LLMs via mechanistic interpretability
  
   *Joint project with Aman Burman  (undergraduate student) and Matilde Marcolli.* Transformer-based language models are able to produce text that follows syntactic rules; such ability suddenly emerges in a brief period during training {% cite Chen2024 %}. By analogy with some toy models (see e.g. {% cite Li2023 %}), we can hypothesize that a transformer encodes syntax as part of an internal "world representation". We are using tools from mechanistic interpretability on small language models to extract encoded syntactic features, understand how they are distributed across layers, and identify which subnetworks or *circuits* utilize this information. We are investigating whether the syntactic processing in language models is hierarchical and analogous to syntactic trees in linguistics. Here we have in mind, in particular, the mathematical formalization of Chomsky's minimalist program in the language of Hopf algebras {% cite Marcolli2023 Marcolli2023a %}. We want to refine the analysis in {% cite Manning2020 %}, which shows that the activations of attention heads are correlated with syntactic binary relations, but did not explore the mechanisms by which these relations are assembled into more complex trees.  

# Mathematics of information 

More broadly, I'm interested in mathematical aspects of **information theory**, particularly in connection with category theory and  geometry (metric geometry, geometric measure theory, ...).  My work in this regard can be organized around three axes: 
* [Topological characterization of information measures](/Research/information-topology) 
* [Information dimension and measures with geometric structure](/Research/information-dimension)
* [Magnitude and diversity](/Research/magnitude)

Follow the links for descriptions, videos and slides of relevant presentations, along other resources. 





