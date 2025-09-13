---
layout: distill
title: Topics in algebraic geometry codes
description: Some relative research of algebraic geometry codes
tags: geometry
giscus_comments: false
date: 2025-09-07
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
  - name: Riemann-Roch theorem in algebraic geometry
    # if a section has subsections, you can add them as follows:
    # subsections:
    #   - name: Example Child Subsection 1
    #   - name: Example Child Subsection 2
  - name: Riemann-Roch theorem for codes
  - name: Riemann-Roch theorem for matroids
  - name: Riemann-Roch theorem in tropical geometry

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

# Riemann-Roch theorem for linear codes

### Subspace pair cohomology

We introduce cohomology groups associated to triples $(E,A_1,A_2)$ where

* $E$ is a vector space,
* $A_1, A_2 \subseteq E$ are two linear subspaces.

>**Definition**: Given such a triple $(E,A_1,A_2)$ we set
>
>$$
>H^0(E; A_1, A_2)=A_1\cap A_2,
>$$
>
>and
>
>$$
>H^1(E; A_1, A_2)=E/(A_1 + A_2).
>$$
>
>of dimension, respectively:
>
>$$
>h^0(E; A_1, A_2)=\dim\!\big(H^0(E; A_1, A_2)\big),\qquad
>h^1(E; A_1, A_2)=\dim\!\big(H^1(E; A_1, A_2)\big).
>$$

It turns out these $H^0$ and $H^1$ can be identified with the cohomology groups of any of the following two quasi-isomorphic complexes of length 2:

$$
0 \longrightarrow A_1 \oplus A_2 \longrightarrow E \longrightarrow 0,
$$

or

$$
0 \longrightarrow E \longrightarrow E/A_1 \oplus E/A_2 \longrightarrow 0.
$$

To be more precise, the exact definition of these complexes, together with a quasi-isomorphism between them, and the identification of the above two complexes with their cohomology groups, all depend on some choice of signs. A possible choice is the following:

$$
\begin{CD}
0 @>>> A_1\cap A_2 @>++>> A_1\oplus A_2 @>+- >> E @>>> E/(A_1{+}A_2) @>>> 0 \\
@. @V=VV @VVV @VVV @V=VV @. \\
0 @>>> A_1\cap A_2 @>>> E @>-+>> E/A_1 \oplus E/A_2 @>++>> E/(A_1{+}A_2) @>>> 0
\end{CD}
$$

where the top left $+\,+$ means that $x\in A_1\cap A_2$ is sent to $(x,x)\in A_1\oplus A_2$, the $+\,-$ just next means that $(a_1,a_2)\in A_1\oplus A_2$ is sent to $a_1-a_2\in E$, etc.

Here is the proof of the cohomology groups for the quasi-isomorphic complexes above:

>$$
>0 \longrightarrow A_1\oplus A_2 \xrightarrow{\;\iota\;} E \longrightarrow 0,
>\qquad \iota(a_1,a_2)=a_1-a_2 .
>$$
>* $H^0$: $\ker\iota=\{(a_1,a_2):a_1-a_2=0\}\cong\{(a,a):a\in A_1\cap A_2\}\cong A_1\cap A_2$.
>* $H^1$: $\operatorname{im}\iota=\{a_1-a_2:a_i\in A_i\}=A_1+A_2$ (since $A_2=-A_2$).
  Hence $H^1=E/\operatorname{im}\iota=E/(A_1+A_2)$.


>$$
>0 \longrightarrow E \xrightarrow{\;\Delta\;} E/A_1 \oplus E/A_2 \longrightarrow 0,
>\qquad \Delta(x)=(x+A_1,\;x+A_2).
>$$
>* $H^0$: $\ker\Delta=\{x\in E:x\in A_1\text{ and }x\in A_2\}=A_1\cap A_2$.
>* $H^1$: Define a surjection
>
>$$
>\pi: E/A_1\oplus E/A_2 \longrightarrow E/(A_1+A_2),\qquad
>\pi(x+A_1,\;y+A_2)=(x-y)+(A_1+A_2).
>$$
>
>This is well defined: replacing $x$ by $x+a_1$ and $y$ by $y+a_2$ with $a_i\in A_i$ changes $x-y$ by $a_1-a_2\in A_1+A_2$.
>
>Its kernel is
>
>$$
>\ker\pi=\{(x+A_1,y+A_2):x-y\in A_1+A_2\}=\operatorname{im}\Delta,
>$$
>
>since if $x-y=a_1+a_2$ with $a_i\in A_i$, then
>$(x+A_1,y+A_2)=(y+a_2+A_1,\;y+A_2)=\Delta(y+a_2)$; conversely $\pi(\Delta(z))=0$ for all $z$.
>
>By the First Isomorphism Theorem,
>
>$$
>H^1=\operatorname{coker}\Delta=(E/A_1\oplus E/A_2)/\operatorname{im}\Delta
>\cong E/(A_1+A_2).
>$$


Let $(E,A_1,A_2)$ be a triple as above. If $E$ is finite dimensional, then in linear algebra we have:

$$
h^0(E;A_1,A_2)-h^1(E;A_1,A_2)=\dim(A_1)+\dim(A_2)-\dim(E).
$$

>**lemma**: Let $(E,A_1,A_2)$ be a triple as above. For any linear subspace $A'_2\subseteq A_2$ we have a long exact sequence
>
>$$
>0\longrightarrow H^0(E;A_1,A'_2)\longrightarrow H^0(E;A_1,A_2)
>\longrightarrow A_2/A'_2  \longrightarrow H^1(E;A_1,A'_2)\longrightarrow H^1(E;A_1,A_2)\longrightarrow 0.
>$$
>
>**Proof**: Direct from Definition, or via the snake lemma applied to
>
>$$
>\begin{CD}
>0 @>>> A_1\oplus A'_2 @>>> A_1\oplus A_2 @>>> A_2/A'_2 @>>> 0\\
>@. @VVV @VVV @VVV @.\\
>0 @>>> E @>>> E @>>> 0 @>>> 0
>\end{CD}
>$$

$E^\vee$ denotes the dual vector space of $E$ (linear forms on $E$).
Given a linear subspace $A\subseteq E$, let $A^\perp\subseteq E^\vee$ be the space of linear forms vanishing on $A$. Then there are natural identifications

$$
A^\perp \cong (E/A)^\vee,\qquad E^\vee / A^\perp \cong A^\vee .
$$


>**lemma**: Given a triple $(E,A_1,A_2)$ as above, we have a natural identification
>
>$$
>H^1(E;A_1,A_2)\;=\;H^0\!\big(E^\vee;A_1^\perp,A_2^\perp\big)^\vee, \quad\text{(equivalently) }E/(A_1{+}A_2)\cong (A_1^\perp\cap A_2^\perp)^\vee.
>$$
>**Proof**: 
>
>1. *Construct a natural map and factor through the quotient.* Using the evaluation pairing $\langle\,,\,\rangle:E^\vee\times E\to\Bbb F$, define
>
>$$
>J:E\to (A_1^\perp\cap A_2^\perp)^\vee,\qquad J(e)(\ell)=\ell(e).
>$$
>
>If $e\in A_1$ or $e\in A_2$, then $\ell(e)=0$ for all $\ell\in A_1^\perp\cap A_2^\perp$; hence
>$A_1+A_2\subseteq\ker J$. Therefore $J$ factors to a linear map
>
>$$
>\bar J:\ E/(A_1{+}A_2)\longrightarrow (A_1^\perp\cap A_2^\perp)^\vee,\qquad
>\bar J([e])(\ell)=\ell(e),
>$$
>
>which is natural with respect to maps preserving $A_1,A_2$.
>
>2. *Injectivity of $\bar J$.* If $\bar J([e])=0$, then $\ell(e)=0$ for all $\ell\in A_1^\perp\cap A_2^\perp$, so $e\in (A_1^\perp\cap A_2^\perp)^\perp$. In finite dimensions,
>
>$$
>(A_1^\perp\cap A_2^\perp)^\perp=(A_1^\perp)^\perp+(A_2^\perp)^\perp=A_1+A_2,
>$$
>
>hence $[e]=0$ and $\bar J$ is injective.
>
>3. *Surjectivity by a dimension count.*
>
>$$
>\dim(E/(A_1{+}A_2))=\dim E-\dim(A_1{+}A_2),
>$$
>
>while $(A_1{+}A_2)^\perp=A_1^\perp\cap A_2^\perp$ gives
>
>$$
>\dim\big((A_1^\perp\cap A_2^\perp)^\vee\big)=\dim(A_1^\perp\cap A_2^\perp)
>=\dim E-\dim(A_1{+}A_2).
>$$
>
>Thus $\bar J$ is an injective map between vector spaces of the same finite dimension, hence an isomorphism.
>
>Therefore
>
>$$
>H^1(E;A_1,A_2)=E/(A_1{+}A_2)\ \cong\ (A_1^\perp\cap A_2^\perp)^\vee
>=H^0(E^\vee;A_1^\perp,A_2^\perp)^\vee,
>$$
>
>naturally in $(E,A_1,A_2)$. 

### Serre duality and Riemann–Roch for codes

Let $C \subseteq \mathbb F^n$ be a $[n,k]$-code. We apply the above formalism to the triple:

* $E=\mathbb F^n$ (viewed as an “adèle space”)
* $A_1=C$ (the subspace of principal adèles)
* $A_2=\mathbb F^{J}$ (the subspace of adèles with poles in a subset $J\subseteq [n]$).

Then we obtain the cohomology groups:

$$
\begin{aligned}
H^0(C,J)
 \;=\; H^0(\mathbb F^n; C, \mathbb F^{J})
 \;=\; C \cap \mathbb F^{J}
 \;=\; C_J, 
\end{aligned}
$$

the largest (a.k.a. “shortened”) subcode of $C$ with support in $J$, and

$$
\begin{aligned}
H^1(C,J)
 \;=\; H^1(\mathbb F^n; C, \mathbb F^{J})
 \;=\; \mathbb F^{n}/(C+\mathbb F^{J})
 \;=\; \mathbb F^{[n]\setminus J}\big/\pi_{[n]\setminus J}(C), 
\end{aligned}
$$

where $\pi_{[n]\setminus J}:\mathbb F^{n}\to \mathbb F^{[n]\setminus J}$ is the natural projection.
(Here $H^1$ can be viewed in terms of syndromes; it may be useful for decoding algorithms.)

By above lemma and definitions, for any disjoint $J,J'\subseteq [n]$, there is a long exact sequence

$$
0 \longrightarrow H^0(C,J)
\longrightarrow H^0(C,J\!\cup\! J')
\xrightarrow{\ \pi_{J'}\ } \mathbb F^{J'}
\longrightarrow H^1(C,J)
\longrightarrow H^1(C,J\!\cup\! J')
\longrightarrow 0. 
$$

As before, set $h^0(C,J)=\dim H^0(C,J)$ and $h^1(C,J)=\dim H^1(C,J)$.

>**Serre duality theorem** in coding theory: Let $C \subseteq \mathbb{F}^n$ be a $[n,k]$-code. Then for any subset $J \subseteq [n]$ we have a canonical identification

$$
H^1(C,J)=H^0(C^\perp,\,[n]\setminus J)^\vee .
$$

>**Riemann-Roch theorem** in coding theory: Let $C \subseteq \mathbb{F}^n$ be a $[n,k]$-code. Then for any $J \subseteq [n]$,

$$
h^0(C,J)-h^0\!\big(C^\perp,[n]\setminus J\big)=\#J+k-n .
$$

Since $$h^0(C,J)=0$$ for $$\#J<d=d_{\min}(C)$$, introduce the normalized cardinality

$$
|J|_{\mathrm{norm}}=\#J-d.
$$

Then Riemann-Roch theorem becomes

$$
h^0(C,J)-h^0\!\big(C^\perp,[n]\setminus J\big)=|J|_{\mathrm{norm}}+1-g \tag{8}
$$

where $g=n-k-d+1$ is the MDS defect of $C$.
