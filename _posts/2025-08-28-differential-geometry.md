---
layout: distill
title: A brief introduction to differential geometry
description: Foundational preliminaries of information geometry
tags: geometry
giscus_comments: false
date: 2025-08-28
featured: true

authors:
  - name: Galobel Wang
    affiliations:
      name: HKU

# Optionally, you can add a table of contents to your post.
# NOTES:
#   - make sure that TOC names match the actual section names
#     for hyperlinks within the post to work correctly.
#   - we may want to automate TOC generation in the future using
#     jekyll-toc plugin (https://github.com/toshimaru/jekyll-toc).
toc:
  - name: Smooth Manifolds and Tangent Spaces
    # if a section has subsections, you can add them as follows:
    # subsections:
    #   - name: Example Child Subsection 1
    #   - name: Example Child Subsection 2
  - name: Riemannian Metrics and Geodesics
  - name: Connections, Covariant Derivatives, and Curvature

llm-instructions: |
  I am using the Chirpy theme in Jekyll.

  For the metadata, you can have up to 2 levels of categories, e.g.:
    - Machine Learning
    - Mathematical Optimization
  For both tags and categories, please employ capitalization for distinction.

  Never introduce any non-existant path, like an image.
  This causes build errors. For example, simply put image: # placeholder

  For writing the posts, please use the Kramdown MathJax syntax.

  In regular Markdown, please use the following syntax:

  - Inline equations are surrounded by dollar signs on the same line: $$inline$$

  - Block equations are isolated by newlines between the text above and below,
    and newlines between the delimiters and the equation (even in lists):
    text

    $$
    block
    $$

    text... or:

    $$block$$

    text...
  Use LaTeX commands for symbols as much as possible (e.g. $$\vert$$ for
  absolute value, $$\ast$$ for asterisk). Avoid using the literal vertical bar
  symbol; use \vert and \Vert instead.

  The syntax for lists is:

  1. $$inline$$ item
  2. item $$inline$$
  3. item

      $$
      block
      $$

      (continued) item
  4. item

  Here are examples of syntaxes that do **not** work:

  1. text
    $$
    block
    $$
    text

  2. text
    $$
    text
    $$

    text

  And the correct way to include multiple block equations in a list item:

  1. text

    $$
    block 1
    $$

    $$
    block 2
    $$

    (continued) text

  Inside HTML environments, like blockquotes or details blocks, you **must** add the attribute
  `markdown="1"` to the opening tag so that MathJax and Markdown are parsed correctly.

  Here are some blockquote templates you can use:

  <blockquote class="box-definition" markdown="1">
  <div class="title" markdown="1">
  **Definition.** The natural numbers $$\mathbb{N}$$
  </div>
  The natural numbers are defined as $$inline$$.

  $$
  block
  $$

  </blockquote>

  And a details block template:

  <details class="details-block" markdown="1">
  <summary markdown="1">
  **Tip.** A concise title goes here.
  </summary>
  Here is content thatl can include **Markdown**, inline math $$a + b$$,
  and block math.

  $$
  E = mc^2
  $$

  More explanatory text.
  </details>

  Similarly, for boxed environments you can define:
    - box-definition          # Icon: `\f02e` (bookmark), Color: `#2563eb` (blue)
    - box-lemma               # Icon: `\f022` (list-alt/bars-staggered), Color: `#16a34a` (green)
    - box-proposition         # Icon: `\f0eb` (lightbulb), Color: `#eab308` (yellow/amber)
    - box-theorem             # Icon: `\f091` (trophy), Color: `#dc2626` (red)
    - box-example             # Icon: `\f0eb` (lightbulb), Color: `#8b5cf6` (purple) (for example blocks with lightbulb icon)
    - box-info                # Icon: `\f06a` (exclamation-circle), Color: `var(--prompt-info-icon-color)` (theme-defined)
    - box-tip                 # Icon: `\f0eb` (lightbulb, regular style), Color: `var(--prompt-tip-icon-color)` (theme-defined)
    - box-warning             # Icon: `\f06a` (exclamation-circle), Color: `var(--prompt-warning-icon-color)` (theme-defined)
    - box-danger              # Icon: `\f071` (exclamation-triangle), Color: `var(--prompt-danger-icon-color)` (theme-defined)

  For details blocks, use:
    - details-block           # main wrapper (styled like box-tip)
    - the `<summary>` inside will get tip/book icons automatically

  Please do not modify the sources, references, or further reading material
  without an explicit request.
---

# Smooth Manifolds and Tangent Spaces

### Introduction

Here is a brief note on Differential Geometry for Information Geometry! In this post, let's explore the fundamental concept of a **smooth manifold**. Think of manifolds as generalized surfaces – spaces that locally "look like" familiar Euclidean space (e.g., $$\mathbb{R}^n$$) but can have a more complex global structure.

Why are manifolds important in machine learning?
- The **parameter space** of many machine learning models (like neural networks) can be viewed as a high-dimensional manifold.
- The **loss landscape**, which we navigate during optimization, is often a function defined over such a manifold.
- Some models have **constraints** on their parameters (e.g., weights of an autoencoder forming a low-dimensional representation, orthogonal matrices in certain RNNs) which naturally define manifolds.

Our goal here is to build intuition for what manifolds are and introduce **tangent spaces**, which are crucial for understanding concepts like gradients in these curved settings.

### Beyond Euclidean Space: The Need for Manifolds

In basic calculus and linear algebra, we often work within Euclidean spaces like $$\mathbb{R}^2$$ (the plane) or $$\mathbb{R}^3$$ (3D space). These spaces are "flat" and have a global coordinate system. However, many interesting spaces are not globally flat.

Consider the surface of a sphere, $$S^2$$. Locally, any small patch on the sphere looks like a piece of the flat plane $$\mathbb{R}^2$$. But globally, you can't map the entire sphere to a single flat plane without distortion (think of world maps). The sphere is a simple example of a manifold.

In machine learning:
- The set of all probability distributions of a certain type (e.g., all Gaussian distributions) forms a manifold. The parameters (mean and covariance) live in this space.
- The set of weight matrices for a neural network layer, perhaps with some normalization constraints (e.g., weights on a sphere, orthogonal matrices), can form a manifold.
- The loss function of a neural network is a function $$L: \mathcal{W} \to \mathbb{R}$$, where $$\mathcal{W}$$ is the space of all possible weights. This space $$\mathcal{W}$$ is typically a very high-dimensional manifold (often just $$\mathbb{R}^N$$ for unconstrained networks, but its geometry under a suitable metric, like the Fisher Information Metric, can be non-trivial).

Differential geometry provides the tools to perform calculus on these more general spaces.

### What is a Smooth Manifold?

Intuitively, an $$n$$-dimensional manifold is a space that, if you "zoom in" enough at any point, looks like an open subset of $$\mathbb{R}^n$$.

<blockquote class="box-definition" markdown="1">
<div class="title" markdown="1">
**Definition.** An **$$n$$-dimensional topological manifold** $$M$$
</div>
A topological space $$M$$ is an $$n$$-dimensional topological manifold if:
1.  $$M$$ is **Hausdorff**: Any two distinct points have disjoint open neighborhoods.
2.  $$M$$ is **second-countable**: $$M$$ has a countable basis for its topology. (These ensure $$M$$ is "nice" enough.)
3.  $$M$$ is **locally Euclidean of dimension $$n$$**: Every point $$p \in M$$ has an open neighborhood $$U$$ that is homeomorphic to an open subset $$V \subseteq \mathbb{R}^n$$. A homeomorphism is a continuous bijection with a continuous inverse.

The pair $$(U, \phi)$$, where $$\phi: U \to V \subseteq \mathbb{R}^n$$ is such a homeomorphism, is called a **chart** (or coordinate system) around $$p$$. The functions $$x^i = \pi^i \circ \phi$$ (where $$\pi^i$$ are projections onto coordinate axes in $$\mathbb{R}^n$$) are local coordinate functions.
</blockquote>

<details class="details-block" markdown="1">
<summary markdown="1">
**Analogy.** Chart on Earth
</summary>
Think of a map of a small region on Earth (e.g., a city map). This map is a chart. It represents a piece of the curved surface of the Earth on a flat piece of paper ($$\mathbb{R}^2$$). You need many such maps (an atlas) to cover the entire Earth, and where they overlap, they must be consistent.
</details>

For calculus, we need more than just a topological manifold; we need a **smooth manifold**. This means that when two charts overlap, the transition from one set of coordinates to another must be smooth (infinitely differentiable, $$C^\infty$$).

<blockquote class="box-definition" markdown="1">
<div class="title" markdown="1">
**Definition.** **Smooth Atlas and Smooth Manifold**
</div>
Let $$M$$ be an $$n$$-dimensional topological manifold.
1.  Two charts $$(U_\alpha, \phi_\alpha)$$ and $$(U_\beta, \phi_\beta)$$ are **smoothly compatible** if $$U_\alpha \cap U_\beta = \emptyset$$, or the **transition map**

    $$
    \psi_{\beta\alpha} = \phi_\beta \circ \phi_\alpha^{-1} : \phi_\alpha(U_\alpha \cap U_\beta) \to \phi_\beta(U_\alpha \cap U_\beta)
    $$

    is a diffeomorphism (a smooth map with a smooth inverse). Both $$\phi_\alpha(U_\alpha \cap U_\beta)$$ and $$\phi_\beta(U_\alpha \cap U_\beta)$$ are open subsets of $$\mathbb{R}^n$$.
2.  An **atlas** for $$M$$ is a collection of charts $$\mathcal{A} = \{(U_\alpha, \phi_\alpha)\}$$ such that $$\bigcup_\alpha U_\alpha = M$$.
3.  A **smooth atlas** is an atlas whose charts are all pairwise smoothly compatible.
4.  A **smooth structure** on $$M$$ is a maximal smooth atlas (one that contains every chart compatible with it, and any two charts in it are smoothly compatible).
5.  A **smooth manifold** (or differentiable manifold) is a topological manifold equipped with a smooth structure.
</blockquote>

The key idea is that we can do calculus locally within each chart using standard multivariable calculus, and the smoothness of transition maps ensures that these local calculations are consistent across different charts.

<blockquote class="box-example" markdown="1">
<div class="title" markdown="1">
**Example.** The Circle $$S^1$$
</div>
The unit circle $$S^1 = \{(x, y) \in \mathbb{R}^2 \vert x^2 + y^2 = 1\}$$ is a 1-dimensional manifold.
We need at least two charts to cover $$S^1$$. A common way is using angular parameterizations:
- Chart 1: Let $$U_1 = S^1 \setminus \{(1,0)\}$$ (circle minus the point $$(1,0)$$). Define $$\phi_1: U_1 \to (0, 2\pi)$$ by $$\phi_1(\cos\theta, \sin\theta) = \theta$$.
- Chart 2: Let $$U_2 = S^1 \setminus \{(-1,0)\}$$ (circle minus the point $$(-1,0)$$). Define $$\phi_2: U_2 \to (-\pi, \pi)$$ by $$\phi_2(\cos\theta, \sin\theta) = \theta$$.

Consider the overlap. For instance, take the upper semi-circle, corresponding to $$\theta \in (0, \pi)$$.
Points here are in both $$U_1$$ and $$U_2$$.
$$\phi_1(U_1 \cap U_2) = (0, \pi) \cup (\pi, 2\pi)$$.
$$\phi_2(U_1 \cap U_2) = (-\pi, 0) \cup (0, \pi)$$.

Let $$p \in U_1 \cap U_2$$.
If $$\phi_1(p) = \theta_1 \in (0, \pi)$$, then $$\phi_2(p) = \theta_1$$. The transition map $$\phi_2 \circ \phi_1^{-1}(\theta_1) = \theta_1$$.
If $$\phi_1(p) = \theta_1 \in (\pi, 2\pi)$$ (e.g., lower semi-circle), then $$\phi_2(p) = \theta_1 - 2\pi$$. The transition map $$\phi_2 \circ \phi_1^{-1}(\theta_1) = \theta_1 - 2\pi$$.
These transition functions are smooth (linear, in fact).
(Another common way to define charts for spheres is using stereographic projection).
</blockquote>

Other examples of smooth manifolds:
- Any open subset of $$\mathbb{R}^n$$ is an $$n$$-manifold (with a single chart: the identity map).
- The sphere $$S^n = \{x \in \mathbb{R}^{n+1} \mid \Vert x \Vert = 1\}$$.
- The torus $$T^n = S^1 \times \dots \times S^1$$ ($$n$$ times).
- The space of $$m \times n$$ matrices, $$\mathbb{R}^{m \times n}$$, which is just Euclidean space.
- **Lie groups:** Manifolds with a compatible group structure. Examples:
    - $$GL(n, \mathbb{R})$$: invertible $$n \times n$$ real matrices.
    - $$O(n)$$: orthogonal $$n \times n$$ matrices ($$A^T A = I$$).
    - $$SO(n)$$: special orthogonal matrices ($$A^T A = I, \det A = 1$$).
    - These are crucial in physics and also appear in ML (e.g., orthogonal RNNs, parameterizing rotations).

##### Smooth Functions on Manifolds
A function $$f: M \to \mathbb{R}$$ is **smooth** if for every chart $$(U, \phi)$$ on $$M$$, the composite function $$f \circ \phi^{-1}: \phi(U) \to \mathbb{R}$$ is smooth in the usual sense of multivariable calculus (i.e., it has continuous partial derivatives of all orders on the open set $$\phi(U) \subseteq \mathbb{R}^n$$).
Similarly, a map $$F: M \to N$$ between two smooth manifolds is smooth if its representation in local coordinates is smooth. Loss functions in ML are typically assumed to be smooth (or at least twice differentiable) on the parameter manifold.

### Tangent Vectors and Tangent Spaces

Now that we have a notion of a smooth manifold, we want to do calculus. The first step is to define derivatives. On a manifold, derivatives are captured by **tangent vectors**.

Intuitively, a tangent vector at a point $$p \in M$$ is a vector that "points along" a curve passing through $$p$$, representing the instantaneous velocity of the curve.

There are several equivalent ways to define tangent vectors:

##### a) Equivalence Classes of Curves (Intuitive)
A smooth curve through $$p \in M$$ is a smooth map $$\gamma: (-\epsilon, \epsilon) \to M$$ such that $$\gamma(0) = p$$.
Two curves $$\gamma_1, \gamma_2$$ through $$p$$ are considered equivalent if their representations in any local chart $$(U, \phi)$$ around $$p$$ have the same derivative (velocity vector in $$\mathbb{R}^n$$) at $$t=0$$:

$$
\frac{d}{dt}(\phi \circ \gamma_1)(t) \Big\vert_{t=0} = \frac{d}{dt}(\phi \circ \gamma_2)(t) \Big\vert_{t=0}
$$

A tangent vector at $$p$$ is an equivalence class of such curves. The set of all tangent vectors at $$p$$ is the **tangent space** $$T_p M$$. This space can be shown to have the structure of an $$n$$-dimensional vector space.

##### b) Derivations (Abstract and Powerful)
A **derivation** at a point $$p \in M$$ is a linear map $$v: C^\infty(M) \to \mathbb{R}$$ (where $$C^\infty(M)$$ is the space of smooth real-valued functions on $$M$$) satisfying the Leibniz rule (product rule):

$$
v(fg) = f(p)v(g) + g(p)v(f) \quad \text{for all } f, g \in C^\infty(M)
$$

It can be shown that the set of all derivations at $$p$$ forms an $$n$$-dimensional vector space, and this vector space is isomorphic to the tangent space defined via curves. This is often taken as the formal definition of $$T_p M$$.

<blockquote class="box-definition" markdown="1">
<div class="title" markdown="1">
**Definition.** **Tangent Space $$T_p M$$**
</div>
The **tangent space** to a smooth manifold $$M$$ at a point $$p \in M$$, denoted $$T_p M$$, is the vector space of all derivations at $$p$$.
An element $$v \in T_p M$$ is called a **tangent vector** at $$p$$.
If $$M$$ is an $$n$$-dimensional manifold, then $$T_p M$$ is an $$n$$-dimensional real vector space.
</blockquote>

Given a chart $$(U, \phi)$$ with local coordinates $$(x^1, \dots, x^n)$$ around $$p$$, a natural basis for $$T_p M$$ is given by the partial derivative operators with respect to these coordinates, evaluated at $$p$$:

$$
\left\{ \frac{\partial}{\partial x^1}\Big\vert_p, \dots, \frac{\partial}{\partial x^n}\Big\vert_p \right\}
$$

Here, $$\frac{\partial}{\partial x^i}\Big\vert_p$$ is the derivation that acts on a function $$f \in C^\infty(M)$$ as:

$$
\left(\frac{\partial}{\partial x^i}\Big\vert_p\right)(f) := \frac{\partial (f \circ \phi^{-1})}{\partial u^i} \Big\vert_{\phi(p)}
$$

where $$(u^1, \dots, u^n)$$ are the standard coordinates on $$\mathbb{R}^n$$ corresponding to $$\phi(U)$$.
Any tangent vector $$v \in T_p M$$ can be written uniquely as a linear combination of these basis vectors:

$$
v = \sum_{i=1}^n v^i \frac{\partial}{\partial x^i}\Big\vert_p
$$

The coefficients $$v^i$$ are the **components** of the vector $$v$$ in the coordinate basis $$\{\partial/\partial x^i\vert_p\}$$.

<blockquote class="box-info" markdown="1">
**Connection to Gradients in ML.**
In Euclidean space $$\mathbb{R}^n$$, the gradient $$\nabla f(p)$$ of a function $$f$$ at $$p$$ is a vector. If we consider a path $$\gamma(t)$$ with $$\gamma(0)=p$$ and velocity $$\gamma'(0) = v$$, then the directional derivative of $$f$$ along $$v$$ is $$ D_v f(p) = \nabla f(p) \cdot v $$.
On a manifold, the concept analogous to the gradient is related to the **differential** $$df_p$$ of a function $$f: M \to \mathbb{R}$$. This differential $$df_p$$ is an element of the *cotangent space* $$T_p^\ast M$$ (the dual space of $$T_p M$$). It acts on tangent vectors: $$df_p(v) = v(f)$$.
If the manifold has a Riemannian metric (Part 2), there's a natural way to identify tangent vectors with cotangent vectors. This allows us to define a **gradient vector field** $$\text{grad } f$$ (or $$\nabla f$$) which is a tangent vector field. Its components in a local coordinate system are related to the partial derivatives $$\partial f / \partial x^i$$.
For now, think of tangent vectors as the "directions" in which one can move from $$p$$, and $$T_p M$$ is the space where these directions (and eventually gradients) live.
</blockquote>

### The Differential (Pushforward) of a Smooth Map

If we have a smooth map $$F: M \to N$$ between two smooth manifolds, it induces a linear map between their tangent spaces at corresponding points.

<blockquote class="box-definition" markdown="1">
<div class="title" markdown="1">
**Definition.** **Differential (or Pushforward)**
</div>
Let $$F: M \to N$$ be a smooth map between smooth manifolds. For any point $$p \in M$$, the **differential** of $$F$$ at $$p$$ (also called the **pushforward** by $$F$$ at $$p$$) is the linear map:

$$
(F_\ast )_p : T_p M \to T_{F(p)} N
$$

(also denoted $$dF_p$$ or $$DF(p)$$) defined as follows: for any tangent vector $$v \in T_p M$$ (viewed as a derivation) and any smooth function $$g \in C^\infty(N)$$,

$$
((F_\ast )_p v)(g) := v(g \circ F)
$$

The function $$g \circ F$$ is a smooth function on $$M$$, so $$v(g \circ F)$$ is well-defined.
Alternatively, if $$v \in T_p M$$ is represented by a curve $$\gamma: (-\epsilon, \epsilon) \to M$$ with $$\gamma(0)=p$$ and $$\gamma'(0)=v$$, then $$(F_\ast )_p v$$ is the tangent vector at $$F(p) \in N$$ represented by the curve $$F \circ \gamma: (-\epsilon, \epsilon) \to N$$. That is, $$(F_\ast )_p(\gamma'(0)) = (F \circ \gamma)'(0)$$.
</blockquote>

In local coordinates, let $$M$$ have coordinates $$(x^1, \dots, x^m)$$ near $$p$$ and $$N$$ have coordinates $$(y^1, \dots, y^n)$$ near $$F(p)$$. If $$F$$ is represented by coordinate functions $$y^j = F^j(x^1, \dots, x^m)$$, then the matrix representation of $$(F_\ast )_p$$ with respect to the coordinate bases $$\{\partial/\partial x^i\vert_p\}$$ and $$\{\partial/\partial y^j\vert_{F(p)}\}$$ is the **Jacobian matrix** of $$F$$ at $$p$$:

$$
[ (F_\ast )_p ]^j_i = \frac{\partial F^j}{\partial x^i} \Big\vert_p
$$

So, if $$v = \sum_i v^i \frac{\partial}{\partial x^i}\Big\vert_p$$, then $$(F_\ast )_p v = w = \sum_j w^j \frac{\partial}{\partial y^j}\Big\vert_{F(p)}$$, where

$$
w^j = \sum_{i=1}^m \left( \frac{\partial F^j}{\partial x^i} \Big\vert_p \right) v^i
$$

### Vector Fields

A **smooth vector field** $$X$$ on a manifold $$M$$ is a smooth assignment of a tangent vector $$X_p \in T_p M$$ to each point $$p \in M$$.
"Smooth" here means that if we express $$X$$ in any local coordinate system $$(x^1, \dots, x^n)$$ as

$$
X(p) = \sum_{i=1}^n X^i(p) \frac{\partial}{\partial x^i}\Big\vert_p
$$

then the component functions $$X^i: U \to \mathbb{R}$$ are smooth functions on the chart's domain $$U$$.
Equivalently, a vector field $$X$$ is smooth if for every smooth function $$f \in C^\infty(M)$$, the function $$p \mapsto X_p(f)$$ (which can be written as $$(Xf)(p)$$) is also a smooth function on $$M$$.

<blockquote class="box-example" markdown="1">
<div class="title" markdown="1">
**Example.** Gradient Fields in Optimization
</div>
If $$M = \mathbb{R}^n$$ (a trivial manifold), and $$L: \mathbb{R}^n \to \mathbb{R}$$ is a smooth loss function, its gradient

$$
\nabla L(p) = \left( \frac{\partial L}{\partial x^1}(p), \dots, \frac{\partial L}{\partial x^n}(p) \right)
$$

is typically identified with the vector field

$$
X_L(p) = \sum_{i=1}^n \frac{\partial L}{\partial x^i}(p) \frac{\partial}{\partial x^i}\Big\vert_p
$$

Gradient descent involves taking steps in the direction of $$-X_L(p)$$. More generally, on a Riemannian manifold (which we'll introduce later), the gradient vector field $$\nabla L$$ is intrinsically defined. Optimization algorithms often aim to follow trajectories of such (or related) vector fields to find minima of $$L$$.
</blockquote>

# Riemannian Metrics and Geodesics

### Introduction

We have already introduced smooth manifolds as generalized spaces and tangent spaces as the local linear approximations where derivatives live. However, manifolds themselves don't inherently come with a way to measure distances, angles, or volumes. To do this, we need to equip them with additional structure: a **Riemannian metric**.

A Riemannian metric provides an inner product on each tangent space, varying smoothly from point to point. This is the key to unlocking a wealth of geometric notions:
- How long is a curve on the manifold?
- What is the shortest path (geodesic) between two points?
- What is the angle between two intersecting curves?
- How can we define volumes and integrate functions over manifolds?

Understanding these concepts is crucial for appreciating how the "shape" of a parameter space influences optimization algorithms in machine learning.

### Riemannian Metrics: Defining Local Geometry

<blockquote class="box-definition" markdown="1">
<div class="title" markdown="1">
**Definition.** **Riemannian Metric**
</div>
A **Riemannian metric** $$g$$ on a smooth manifold $$M$$ is a smooth assignment of an inner product $$g_p: T_p M \times T_p M \to \mathbb{R}$$ to each tangent space $$T_p M$$.
This means that for each $$p \in M$$, $$g_p$$ is a symmetric, positive-definite bilinear form on $$T_p M$$.
"Smooth assignment" means that if $$X, Y$$ are smooth vector fields on $$M$$, then the function $$p \mapsto g_p(X_p, Y_p)$$ is a smooth function on $$M$$.
A smooth manifold $$M$$ equipped with a Riemannian metric $$g$$ is called a **Riemannian manifold**, denoted $$(M, g)$$.
</blockquote>

In local coordinates $$(x^1, \dots, x^n)$$ around a point $$p$$, the metric $$g_p$$ is completely determined by its values on the basis vectors $$\{\partial_i = \partial/\partial x^i\vert_p\}$$:

$$
g_{ij}(p) := g_p\left(\frac{\partial}{\partial x^i}\Big\vert_p, \frac{\partial}{\partial x^j}\Big\vert_p\right)
$$

The functions $$g_{ij}(p)$$ are the **components of the metric tensor** in these coordinates. They form a symmetric, positive-definite matrix $$[g_{ij}(p)]$$ for each $$p$$.
If $$v = v^i \partial_i$$ and $$w = w^j \partial_j$$ are two tangent vectors at $$p$$ (using Einstein summation convention), their inner product is:

$$
g_p(v, w) = \sum_{i,j=1}^n g_{ij}(p) v^i w^j
$$

The length (or norm) of a tangent vector $$v$$ is $$\Vert v \Vert_p = \sqrt{g_p(v,v)}$$.
The angle $$\theta$$ between two non-zero tangent vectors $$v, w$$ at $$p$$ is defined by $$\cos \theta = \frac{g_p(v,w)}{\Vert v \Vert_p \Vert w \Vert_p}$$.

<blockquote class="box-example" markdown="1">
<div class="title" markdown="1">
**Example.** Euclidean Metric on $$\mathbb{R}^n$$
</div>
On $$M = \mathbb{R}^n$$ with standard Cartesian coordinates $$(x^1, \dots, x^n)$$, the standard Euclidean metric has $$g_{ij}(p) = \delta_{ij}$$ (the Kronecker delta) for all $$p$$.
So, $$g_p(v,w) = \sum_{i=1}^n v^i w^i = v \cdot w$$ (the usual dot product).
</blockquote>

<blockquote class="box-example" markdown="1">
<div class="title" markdown="1">
**Example.** Metric on the Sphere $$S^2$$
</div>
The sphere $$S^2$$ can be parameterized by spherical coordinates $$(\theta, \phi)$$. The metric induced from the standard Euclidean metric in $$\mathbb{R}^3$$ is (for radius $$R=1$$):

$$
(g_{ij}) = \begin{pmatrix} 1 & 0 \\ 0 & \sin^2\theta \end{pmatrix}
$$

So $$ds^2 = d\theta^2 + \sin^2\theta \, d\phi^2$$. This is non-Euclidean; the components $$g_{ij}$$ are not constant.
</blockquote>

### Arc Length, Distance, and Volume

With a Riemannian metric, we can define:
- **Length of a Curve:** If $$\gamma: [a,b] \to M$$ is a smooth curve, its length is

  $$
  L(\gamma) = \int_a^b \Vert \gamma'(t) \Vert_{\gamma(t)} \, dt = \int_a^b \sqrt{g_{\gamma(t)}(\gamma'(t), \gamma'(t))} \, dt
  $$

  In local coordinates $$x^i(t) = (\phi \circ \gamma)^i(t)$$, this becomes

  $$
  L(\gamma) = \int_a^b \sqrt{\sum_{i,j} g_{ij}(x(t)) \frac{dx^i}{dt} \frac{dx^j}{dt}} \, dt
  $$

  The infinitesimal arc length element is often written as $$ds^2 = \sum_{i,j} g_{ij} dx^i dx^j$$.

- **Distance (Riemannian Distance):** The distance $$d(p,q)$$ between two points $$p, q \in M$$ is the infimum of the lengths of all piecewise smooth curves connecting $$p$$ to $$q$$:

  $$
  d(p,q) = \inf \{ L(\gamma) \mid \gamma \text{ is a piecewise smooth curve from } p \text{ to } q \}
  $$

- **Volume Form and Integration:** On an oriented $$n$$-dimensional Riemannian manifold $$(M,g)$$, there's a natural **volume form** (an $$n$$-form) $$\text{vol}_g$$. In local oriented coordinates $$(x^1, \dots, x^n)$$, it's given by:

  $$
  \text{vol}_g = \sqrt{\det(g_{ij})} \, dx^1 \wedge \dots \wedge dx^n
  $$

  This allows us to integrate functions $$f: M \to \mathbb{R}$$ over $$M$$:

  $$
  \int_M f \, \text{vol}_g = \int_{\phi(U)} (f \circ \phi^{-1})(x) \sqrt{\det(g_{ij}(x))} \, dx^1 \dots dx^n
  $$

  (using a partition of unity for global integration).

<blockquote class="box-info" markdown="1">
<div class="title" markdown="1">
**A Note on Metrics in Machine Learning: The Fisher Information Metric**
</div>
While we are discussing general Riemannian metrics, it's worth noting a particularly important one in statistics and machine learning: the **Fisher Information Metric (FIM)**.
If our manifold $$M$$ is a space of probability distributions $$p(x; \theta)$$ parameterized by $$\theta = (\theta^1, \dots, \theta^n)$$, the FIM provides a natural way to measure "distance" or "distinguishability" between nearby distributions. Its components are given by:

$$
(g_{ij})_{\text{Fisher}}(\theta) = E_{p(x;\theta)}\left[ \frac{\partial \log p(x;\theta)}{\partial \theta^i} \frac{\partial \log p(x;\theta)}{\partial \theta^j} \right]
$$

The FIM captures the sensitivity of the distribution to changes in its parameters. Optimization algorithms that use the FIM (like Natural Gradient Descent) often exhibit better convergence properties by taking into account the geometry of this parameter space.

We will *not* delve into the details or derivations of the FIM here. It serves as a prime example of how Riemannian geometry finds deep applications in ML. The FIM and its consequences will be the central topic of the **Information Geometry crash course**.
</blockquote>

### Geodesics: "Straightest" Paths

In Euclidean space, the shortest path between two points is a straight line. On a curved manifold, the concept of a "straight line" is replaced by a **geodesic**.

Intuitively, a geodesic is a curve that is locally distance-minimizing. More formally:
- A curve $$\gamma(t)$$ is a geodesic if its tangent vector $$\gamma'(t)$$ is "parallel transported" along itself. (We'll formalize parallel transport in Part 3 with connections).
- Equivalently, geodesics are critical points of the **energy functional** $$E(\gamma) = \frac{1}{2} \int_a^b g(\gamma'(t), \gamma'(t)) \, dt$$. Curves that minimize length also minimize energy (if parameterized by arc length).
- Geodesics are curves with zero "acceleration" in the context of the manifold's geometry.

<blockquote class="box-definition" markdown="1">
<div class="title" markdown="1">
**Definition.** **Geodesic Equation**
</div>
A curve $$\gamma(t)$$ with local coordinates $$x^i(t)$$ is a geodesic if it satisfies the geodesic equations:

$$
\frac{d^2 x^k}{dt^2} + \sum_{i,j=1}^n \Gamma^k_{ij}(x(t)) \frac{dx^i}{dt} \frac{dx^j}{dt} = 0 \quad \text{for } k=1, \dots, n
$$

Here, $$\Gamma^k_{ij}$$ are the **Christoffel symbols** (of the second kind), which depend on the metric $$g_{ij}$$ and its first derivatives:

$$
\Gamma^k_{ij} = \frac{1}{2} \sum_{l=1}^n g^{kl} \left( \frac{\partial g_{jl}}{\partial x^i} + \frac{\partial g_{il}}{\partial x^j} - \frac{\partial g_{ij}}{\partial x^l} \right)
$$

where $$[g^{kl}]$$ is the inverse matrix of $$[g_{kl}]$$.
(We will formally introduce Christoffel symbols as components of a connection in Part 3).
</blockquote>

<blockquote class="box-example" markdown="1">
<div class="title" markdown="1">
**Examples of Geodesics**
</div>
- On $$\mathbb{R}^n$$ with the Euclidean metric, $$g_{ij} = \delta_{ij}$$, so all $$\Gamma^k_{ij} = 0$$. The geodesic equations become $$\frac{d^2 x^k}{dt^2} = 0$$, whose solutions are straight lines $$x^k(t) = a^k t + b^k$$.
- On the sphere $$S^2$$, geodesics are great circles (e.g., lines of longitude, the equator).
- On a cylinder, geodesics are helices, circles, and straight lines along the axis.
</blockquote>

**Existence and Uniqueness:** For any point $$p \in M$$ and any tangent vector $$v \in T_p M$$, there exists a unique geodesic $$\gamma_v(t)$$ defined on some interval $$(-\epsilon, \epsilon)$$ such that $$\gamma_v(0)=p$$ and $$\gamma_v'(0)=v$$.

**Exponential Map:** The **exponential map** at $$p$$, denoted $$\exp_p: T_p M \to M$$, is defined by $$\exp_p(v) = \gamma_v(1)$$. It maps a tangent vector $$v$$ (thought of as an initial velocity) to the point reached by following the geodesic starting at $$p$$ with velocity $$v$$ for unit time. This map is a local diffeomorphism near the origin of $$T_p M$$.

<blockquote class="box-tip" markdown="1">
<summary markdown="1">
**Geodesics and Optimization**
</summary>
In optimization, we often think of gradient descent as following the "steepest descent" direction. If the parameter space has a non-Euclidean Riemannian metric (like the FIM), the "straightest path" for an optimization update might not be a straight line in the coordinate representation but rather a geodesic of this metric.
- **Gradient Flow:** The continuous version of gradient descent, $$\frac{dx}{dt} = -\nabla_g L(x)$$, describes curves whose tangent is the negative gradient vector field (with respect to the metric $$g$$). Understanding geodesics helps understand the behavior of such flows.
- Some optimization methods (like trust-region methods on manifolds) explicitly try to take steps along geodesics.
</details>
</blockquote>

# Connections, Covariant Derivatives, and Curvature

### Introduction

In the previous parts, we established smooth manifolds as our geometric spaces (Part 1) and endowed them with Riemannian metrics to measure lengths and angles. Now, we need tools to understand how geometric objects, particularly vector fields, *change* as we move across the manifold.
- How do we differentiate a vector field in a way that is intrinsic to the manifold, not dependent on a specific embedding in a higher-dimensional Euclidean space?
- How can we compare tangent vectors at different points? This leads to the idea of **parallel transport**.
- How do we quantify the "bending" or **curvature** of a manifold?

These concepts are captured by **connections**, **covariant derivatives**, and the **Riemann curvature tensor**. They are vital for a deeper understanding of optimization on manifolds, as curvature, for instance, directly impacts the behavior of geodesics and the complexity of loss landscapes.

### The Need for a Covariant Derivative

Consider a vector field $$Y$$ on a manifold $$M$$ and another vector field $$X$$ (or a curve $$\gamma(t)$$ with tangent $$X = \gamma'(t)$$). We want to define the derivative of $$Y$$ in the "direction" of $$X$$, denoted $$\nabla_X Y$$.
In $$\mathbb{R}^n$$, if $$Y(x) = (Y^1(x), \dots, Y^n(x))$$ and $$X_p = (X^1, \dots, X^n)$$, the directional derivative is

$$
(\nabla_X Y)(p) = \lim_{h \to 0} \frac{Y(p+hX_p) - Y(p)}{h} = \sum_j X^j \frac{\partial Y}{\partial x^j}(p)
$$

Each component $$(\nabla_X Y)^i = X(Y^i) = \sum_j X^j \frac{\partial Y^i}{\partial x^j}$$.
This simple component-wise differentiation doesn't work directly on a general manifold because:
1.  $$Y(p+hX_p)$$ is not well-defined: there's no canonical "addition" on a manifold.
2.  Even if we use charts, $$Y(q) - Y(p)$$ is not meaningful as $$T_q M$$ and $$T_p M$$ are different vector spaces.
3.  The basis vectors $$\partial/\partial x^i$$ themselves change from point to point if the coordinates are curvilinear. Taking partial derivatives of components $$Y^j$$ of $$Y = Y^j \partial_j$$ does not capture this change in basis vectors.

We need a derivative operator that produces a tangent vector and behaves like a derivative. This is an **affine connection**.

<blockquote class="box-definition" markdown="1">
<div class="title" markdown="1">
**Definition.** **Affine Connection (Covariant Derivative)**
</div>
An **affine connection** $$\nabla$$ on a smooth manifold $$M$$ is an operator

$$
\nabla: \mathfrak{X}(M) \times \mathfrak{X}(M) \to \mathfrak{X}(M), \quad (X, Y) \mapsto \nabla_X Y
$$

(where $$\mathfrak{X}(M)$$ is the space of smooth vector fields on $$M$$) satisfying:
1.  **$$C^\infty(M)$$-linearity in $$X$$:** $$\nabla_{fX_1 + gX_2} Y = f \nabla_{X_1} Y + g \nabla_{X_2} Y$$ for $$f,g \in C^\infty(M)$$.
2.  **$$\mathbb{R}$$-linearity in $$Y$$:** $$\nabla_X (aY_1 + bY_2) = a \nabla_X Y_1 + b \nabla_X Y_2$$ for $$a,b \in \mathbb{R}$$.
3.  **Leibniz rule (product rule) in $$Y$$:** $$\nabla_X (fY) = (Xf)Y + f \nabla_X Y$$ for $$f \in C^\infty(M)$$.

The vector field $$\nabla_X Y$$ is called the **covariant derivative** of $$Y$$ with respect to $$X$$.
If $$X_p \in T_pM$$, then $$(\nabla_X Y)_p$$ depends only on $$X_p$$ and the values of $$Y$$ in a neighborhood of $$p$$. So we can also define $$\nabla_v Y$$ for $$v \in T_p M$$.
</blockquote>

In local coordinates $$(x^1, \dots, x^n)$$ with basis vector fields $$\partial_i = \partial/\partial x^i$$, the connection is determined by how it acts on these basis fields:

$$
\nabla_{\partial_i} \partial_j = \sum_{k=1}^n \Gamma^k_{ij} \partial_k
$$

The $$n^3$$ functions $$\Gamma^k_{ij}$$ are called the **Christoffel symbols** (or connection coefficients) of $$\nabla$$. These are the same symbols that appeared in the geodesic equation in Part 2 if we use a specific connection.
With these, the covariant derivative of $$Y = Y^j \partial_j$$ along $$X = X^i \partial_i$$ has components:

$$
(\nabla_X Y)^k = X(Y^k) + \sum_{i,j=1}^n X^i Y^j \Gamma^k_{ij} = \sum_{i=1}^n X^i \left( \frac{\partial Y^k}{\partial x^i} + \sum_{j=1}^n Y^j \Gamma^k_{ij} \right)
$$

The term $$\sum Y^j \Gamma^k_{ij}$$ corrects for the change in the coordinate basis vectors.

### The Levi-Civita Connection

A general manifold can have many affine connections. If $$(M,g)$$ is a Riemannian manifold, there is a unique connection that is "compatible" with the metric and "symmetric": the **Levi-Civita connection**.

<blockquote class="box-theorem" markdown="1">
<div class="title" markdown="1">
**Theorem.** **Fundamental Theorem of Riemannian Geometry**
</div>
On any Riemannian manifold $$(M,g)$$, there exists a unique affine connection $$\nabla$$ (called the **Levi-Civita connection** or Riemannian connection) satisfying:
1.  **Metric compatibility:** $$\nabla$$ preserves the metric. That is, for any vector fields $$X, Y, Z$$:

    $$
    X(g(Y,Z)) = g(\nabla_X Y, Z) + g(Y, \nabla_X Z)
    $$

    (This means the metric is "covariantly constant": $$\nabla g = 0$$).
2.  **Torsion-free (Symmetry):** For any vector fields $$X, Y$$:

    $$
    \nabla_X Y - \nabla_Y X = [X,Y]
    $$

    where $$[X,Y]$$ is the Lie bracket of vector fields. In local coordinates, this is equivalent to $$\Gamma^k_{ij} = \Gamma^k_{ji}$$ (symmetry of Christoffel symbols in lower indices).
</blockquote>

The Christoffel symbols for the Levi-Civita connection are precisely those given in Part 2, derived from the metric $$g_{ij}$$:

$$
\Gamma^k_{ij} = \frac{1}{2} \sum_{l=1}^n g^{kl} \left( \frac{\partial g_{jl}}{\partial x^i} + \frac{\partial g_{il}}{\partial x^j} - \frac{\partial g_{ij}}{\partial x^l} \right)
$$

From now on, unless stated otherwise, $$\nabla$$ will refer to the Levi-Civita connection on a Riemannian manifold.

### Parallel Transport

The covariant derivative allows us to define what it means for a vector field to be "constant" along a curve.
Let $$\gamma: I \to M$$ be a smooth curve, and let $$V(t)$$ be a vector field along $$\gamma$$ (i.e., $$V(t) \in T_{\gamma(t)}M$$ for each $$t \in I$$).
The **covariant derivative of $$V$$ along $$\gamma$$** is denoted $$\frac{DV}{dt}$$ or $$\nabla_{\gamma'(t)} V$$.

<blockquote class="box-definition" markdown="1">
<div class="title" markdown="1">
**Definition.** **Parallel Transport**
</div>
A vector field $$V(t)$$ along a curve $$\gamma(t)$$ is said to be **parallel transported** along $$\gamma$$ if its covariant derivative along $$\gamma$$ is zero:

$$
\frac{DV}{dt}(t) = \nabla_{\gamma'(t)} V(t) = 0 \quad \text{for all } t \in I
$$

</blockquote>
Given a vector $$v_0 \in T_{\gamma(t_0)}M$$ at a point $$\gamma(t_0)$$ on the curve, there exists a unique parallel vector field $$V(t)$$ along $$\gamma$$ such that $$V(t_0) = v_0$$. This process defines a linear isomorphism, called **parallel transport map** $$P_{\gamma, t_0, t_1}: T_{\gamma(t_0)}M \to T_{\gamma(t_1)}M$$, by $$P_{\gamma, t_0, t_1}(v_0) = V(t_1)$$.
If the connection is metric-compatible (like Levi-Civita), parallel transport preserves inner products, lengths, and angles: $$g(V(t), W(t)) = \text{const}$$ if $$V,W$$ are parallel along $$\gamma$$.

<blockquote class="box-info" markdown="1">
**Holonomy.**
If you parallel transport a vector around a closed loop $$\gamma$$, it may not return to its original orientation. The difference measures the **holonomy** of the connection, which is related to curvature. On a flat space like $$\mathbb{R}^n$$ with the standard connection, a vector always returns to itself. On a sphere, parallel transporting a vector around a latitude (other than the equator) will result in a rotated vector.
</blockquote>

**Geodesics Revisited:** A curve $$\gamma(t)$$ is a geodesic if and only if its tangent vector $$\gamma'(t)$$ is parallel transported along itself: $$\nabla_{\gamma'(t)} \gamma'(t) = 0$$. This is exactly the geodesic equation we saw earlier.

### Curvature: Measuring the "Bending" of a Manifold

Curvature quantifies how much the geometry of a Riemannian manifold deviates from being Euclidean ("flat"). A key way it manifests is that the result of parallel transporting a vector between two points can depend on the path taken.

The **Riemann curvature tensor** (or Riemann tensor) $$R$$ measures the non-commutativity of covariant derivatives, or equivalently, the failure of second covariant derivatives to commute.
For vector fields $$X, Y, Z$$, the Riemann tensor is defined as:

$$
R(X,Y)Z = \nabla_X \nabla_Y Z - \nabla_Y \nabla_X Z - \nabla_{[X,Y]} Z
$$

It's a $$(1,3)$$-tensor, meaning it takes three vector fields and produces one vector field. Its components in a local coordinate system $$(\partial_i = \partial/\partial x^i)$$ are $$R^l_{ijk}$$, where

$$
R(\partial_i, \partial_j)\partial_k = \sum_l R^l_{ijk} \partial_l
$$

Explicitly:

$$
R^l_{ijk} = \frac{\partial \Gamma^l_{kj}}{\partial x^i} - \frac{\partial \Gamma^l_{ki}}{\partial x^j} + \sum_m (\Gamma^m_{kj} \Gamma^l_{im} - \Gamma^m_{ki} \Gamma^l_{jm})
$$

A manifold is **flat** (locally isometric to Euclidean space) if and only if its Riemann curvature tensor is identically zero.

**Symmetries of the Riemann Tensor:**
The Riemann tensor (in its $$(0,4)$$ form, $$R_{lijk} = g_{lm}R^m_{ijk}$$) has several symmetries:
1.  $$R_{lijk} = -R_{ljik}$$
2.  $$R_{lijk} = -R_{klij}$$ (from $$R(X,Y)Z = -R(Y,X)Z$$ and others)
3.  First Bianchi Identity: $$R(X,Y)Z + R(Y,Z)X + R(Z,X)Y = 0$$ (or $$R_{lijk} + R_{ljki} + R_{lkij} = 0$$)

These symmetries reduce the number of independent components. For an $$n$$-manifold, there are $$n^2(n^2-1)/12$$ independent components.
- For $$n=2$$ (surfaces), there is 1 independent component.
- For $$n=3$$, there are 6 independent components.
- For $$n=4$$, there are 20 independent components.

##### Sectional Curvature
For a 2D plane $$\sigma \subset T_p M$$ spanned by orthonormal vectors $$u, v$$, the **sectional curvature** $$K(\sigma)$$ or $$K(u,v)$$ is given by:

$$
K(u,v) = g(R(u,v)v, u)
$$

This measures the Gaussian curvature of the 2D surface formed by geodesics starting at $$p$$ in directions within $$\sigma$$. If all sectional curvatures are constant $$c$$, the manifold is a **space of constant curvature**.
- $$c > 0$$: e.g., sphere (locally).
- $$c = 0$$: e.g., Euclidean space.
- $$c < 0$$: e.g., hyperbolic space (locally).

##### Ricci Curvature and Scalar Curvature
By contracting the Riemann tensor, we get simpler curvature measures:
- **Ricci Tensor ($$(0,2)$$-tensor):**

  $$
  \text{Ric}(X,Y) = \sum_i g(R(E_i, X)Y, E_i) \quad \text{(trace over first and third index of } R^l_{ijk})$$
  In coordinates: $$R_{jk} = \sum_i R^i_{jik}$$.
  The Ricci tensor measures how the volume of a small geodesic ball deviates from that of a Euclidean ball. It plays a key role in Einstein's theory of general relativity.

- Scalar Curvature ($$0$$-tensor, i.e., a scalar function):
  $$
  S = \text{tr}_g(\text{Ric}) = \sum_i \text{Ric}(E_i, E_i)
  $$
  In coordinates: $$S = \sum_j g^{jk} R_{jk}$$.
  It's the "total" curvature at a point. For surfaces ($$n=2$$), $$S = 2K$$, where $$K$$ is the Gaussian curvature.
