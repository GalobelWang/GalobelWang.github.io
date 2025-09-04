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

# Information theory

More broadly, I'm interested in mathematical aspects of **information theory**, particularly in connection with category theory, algebra and geometry (metric geometry, geometric measure theory, complex algebraic geometry...).

### Gaussian completely monotone conjecture

In the past decade, [J. Huh](https://web.math.princeton.edu/~huh/) solved several long-standing open problems on log-concave sequences in combinatorics. The ground-breaking techniques developed in those work are from algebraic geometry: "We believe that behind any log-concave sequence that appears in nature there is such a Hodge structure responsible for the log-concavity".

A function is called completely monotone if its derivatives alternate in signs; e.g., $e^{-t}$. A fundamental conjecture in mathematical physics and Shannon information theory is on the complete monotonicity of Gaussian distribution (GCM conjecture), which states that $I(X+Z_t)$ is completely monotone in $t$, where $I$ is Fisher information, random variables $X$ and $Z_t$ are independent and $Z_t \sim \mathcal{N}(0,t)$ is Gaussian. Inspired by the algebraic geometry method introduced by J. Huh, GCMC is reformulated in the form of a log-convex sequence. In general, a completely monotone function can admit a log-convex sequence and a log-convex sequence can further induce a log-concave sequence. The new formulation may guide GCM conjecture to the marvelous temple of algebraic geometry.

In another formulation, Gaussian completely monotone conjecture is referred to as: the $m$-th time-derivative of the entropy along the heat flow on $\mathbb{R}^d$ is positive for $m$ even and negative for $m$ odd. Recent progress on this topic is due to Guillaume Wang. In his article, [A Higher-Order Otto Calculus Approach to the Gaussian Completely Monotone Conjecture](https://ieeexplore.ieee.org/document/10979490), he have proven the GCM conjecture for orders up to $m=5$, assuming that the initial measure is log-concave, in any dimension. His work based on Otto calculus and on the interpretation of the heat flow as the Wasserstein gradient flow of the entropy.

* [Notes for GCM conjecture and Hodge theory](https://galobelwang.github.io/file/GCMC.pdf)

### Algebraic approach to information theory

In "simple" terms, *information topology* regards a statistical system (a collection of interrelated observables) as a generalized topological space (a *topos*) and identifies Shannon entropy, along other important "measures of information" used in information theory, as a possible [invariant](https://en.wikipedia.org/wiki/Invariant_(mathematics)) associated to this space. 

[Toposes or topoi](https://en.wikipedia.org/wiki/Topos) are an abstraction of topological spaces in the language of category theory and sheaves introduced by Grothendieck and his collaborators (Artin, Verdier,...). Toposes allow richer cohomology theories than set-theoretic topological spaces, and some of these theories (e.g. étale cohomology) play a key role in modern algebraic geometry. Moreover, these *Grothendieck toposes* are particular cases of *elementary toposes*, which are "nice" categories with properties analogous to those of the category of sets that play an important role in logic. 

[Baudot and Bennequin](https://www.mdpi.com/1099-4300/17/5/3253) first identified Shannon's discrete entropy as a toposic invariant of certain categories of discrete observables. [Juan Pablo Vigneaux](http://www.tac.mta.ca/tac/volumes/35/38/35-38abs.html) and a series of articles extended their results in several directions. Namely, the general homological constructions were abstracted from the concrete setting of discrete variables via  *information structures* (categories that encode the relations of refinement between observables), allowing seamless extensions and generalizations to other settings such as continuous vector-valued observables. 

<br>

# Channel coding theory

I'm also interested in algebraic approach to **coding theory and error-correcting codes**, particularly in connection with group theory, field theory and representation theory.

### Maximun distance separable codes conjecture

If an $[n, k, d_{\min}]_q$ code $\mathcal{C}$ satisfies the **singleton bound** with equality $d_{\min} = n-k+1$, then we call $\mathcal{C}$ a maximun distance separable codes (MDS code).

The main content of MDS conjecture is that, except for the trivial MDS codes or those with parameters \([2^m+2,\,3,\,2^m]_{q=2^m}\) or \([2^m+2,\,2^m-1,\,4]_{q=2^m}\), all MDS codes satisfy \(n \le q + 1\).

In algebraic formulation, MDS conjecture is that: a set S of vectors of the vector space F_q^k such that every subset of S of size k ≤ q is a basis, has size at most q + 1, unless q is even and k = 3 or k = q − 1, in which case it has size at most q + 2.

<br>

# Probability theory

### Integrable probability

**Integrable probability** is an area of research at the interface between probability theory, mathematical physics, combinatorics and representation theory. It refers to the study of probabilistic models that are exactly solvable.

The notion of **exact solvability** or **integrability** is somewhat vague. A model is called exactly solvable when observables of interest can be computed by a formula involving well-known functions (rational functions, $\exp$, $\sin$, $\Gamma$), so that the complexity of the formula does not increase as parameters go to $\infty$.

* [Introduction to Integrable Probability](https://galobelwang.github.io/file/IntegrableProbabilityIntroduction.pdf)
* [Topics in Representation Theory](https://galobelwang.github.io/file/IntegrableProbabilityRepresentation.pdf)

### Statistical mechanics

The field of applications of probabilistic ideas was considerably expanded in the XIX century. Most notably, Ludwig Boltzmann (Austria, 1844-1906) proposed that thermodynamic macroscopic observables, such as the temperature and the entropy, could be explained from microscopic considerations, using a probabilistic description of the possible configurations of the molecules that compose a given substance. For this, it was necessary to take limits as the number of particles goes to infinity and/or to consider continuous models (particles distributed in Euclidean space). 

Boltzmann ideas were further developed by Josiah Williard Gibbs (USA, 1839-1903), who also coined the term **statistical mechanics**. For instance, Boltzmann proposed that the entropy $S$ of a system is given by
$$
S=k_B \log(\#\text{ microscopic configurations of the system}),
$$
when all the configurations $X$ are equiprobable and the argument of the logarithm is finite. Here $k_B$ denotes a universal constant (Boltzmann's constant). More generally, Gibbs gave the formula
$$
S= - k_B \sum_{x\in X} p(x) \log p(x),
$$
where $p:X\to \mathbb R_{\geq 0}$ satisfies $\sum_{x\in X} p(x) = 1$. 

In actual systems, the number of configurations is a priori infinite. The formulas above only make sense on finite portions of the system, and one is forced to consider a limiting procedure. The simplest setting on which one can perform this kind of limiting operation is the *Ising model*: Consider a finite and discrete set 
$\Lambda \subset \mathbb Z^2$ of sites organized in a square array. Let $s_{x,y}\in \lbrace  +1,-1 \rbrace$ be a "spin" associated to the site $(x,y)\in \Lambda$. Then  $\vec s = \lbrace  s_{x,y} \rbrace_{(x,y)\in \Lambda}$ is a possible configuration of the system. The energy of this configuration is given by the Hamiltonian:
$$
 \mathcal{H}(\vec s, BC) = -  \sum\limits_{(x,y)} s_{x,y} \left(s_{x+1,y} + s_{x,y+1} \right) - h \sum\limits_{(x,y)} s_{x,y}
$$
Because of the interactions between neighbors in the sum, the hamiltonian depends on some given boundary conditions $BC$. Remark that two neighboring spins that are equal decrease the energy. The Boltzmann-Gibb's theory postulates that, in equilibrium, the configurations of the system are distributed according to the probability law 
$$
\mathbb P(\vec s) \propto \exp \left(- \frac{\mathcal{H}(\vec s)}{k_B T} \right),
$$
where $T$ is the temperature of the system. This is called today a *Gibb's state.* 

It turns out that the ``typical'' or more probable configurations are very different, depending on the value of $T$.  If $T$ is much smaller that a certain *critical temperature* $T_c$, then the alignment tendency of the spins predominates and one sees big clusters with the same spin. Whereas if $T\gg T_c$, disorder predominates. A phase transition happens at $T_c$. In fact, this $T_c$ is only well defined in the limit where the diameter of $\Lambda$ goes to infinity and the boundary conditions become irrelevant. 

<br>

# Algebra and Geometry

### Tropical algebraic geometry

Tropical geometry is the study of polynomials and their geometric properties when addition is replaced with minimization and multiplication is replaced with ordinary addition:

* $$
x \oplus y = \min\{x, y\},
$$

* $$
x \otimes y = x + y.
$$

Tropical geometry is a variant of algebraic geometry in which polynomial graphs resemble piecewise linear meshes, and in which numbers belong to the tropical semiring instead of a field. Because classical and tropical geometry are closely related, results and methods can be converted between them. Algebraic varieties can be mapped to a tropical counterpart and, since this process still retains some geometric information about the original variety, it can be used to help prove and generalize classical results from algebraic geometry.

Fruitful interactions are emerging between combinatorics and Hodge theory, both in the applications of Hodge theory to address problems in combinatorics. My interest is the tropical analog of the classical Hodge theory for Kähler manifolds, containing **Poincaré Duality**, **Hard Lefschetz theorem** and **Hodge-Riemann relations**, together with their applications in information and coding theory.
