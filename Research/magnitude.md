---
layout: page
title: Magnitude and diversity
description: 
---

Magnitude {% cite Leinster2008 %} is a common categorical generalization of cardinality and of the Euler characteristic of a simplicial complex. It applies to enriched categories, of which metric spaces are a notable example, and in that case gives a new isometric invariant of metric spaces {% cite Leinster2013 %}. Applied to infinite metric spaces, this metric invariant---somehow surprisingly---encodes a lot of nontrivial geometric information, such as Minkowski dimension, volume, surface area, etc.{% cite Meckes2015 Barcelo2018 Gimperlein2021 %}. Partial differential equations, pseudodifferential operators and potential theory have played an important role in establishing these results.

In joint work with Stephanie Chen {% cite Chen2023formula %} (SURF program 2022), we gave a new formula for the magnitude of a finite category $\cat{A}$ in terms of the pseudoinverse of the  matrix 
\begin{equation}
\zeta:\Ob\cat{A}\times \Ob \cat{A}\to \Zz, \, (a,b)\mapsto |\Hom(a,b)|.
\end{equation}
This was closer to the definition for posets {% cite Rota1964 %} that had inspired Leinster. Our work also rederived algebraic properties of the magnitude from properties of the pseudoinverse.
 
 In {% cite Vigneaux2024combinatorial %} I propose a novel combinatorial interpretation for the inverse or pseudoinverse of $\zeta$, along the lines of {% cite Brualdi2008 %}. The interpretation generalizes a celebrated theorem by Philip Hall {% cite Rota1964 %}:
 \begin{equation}
 \zeta^{-1}(a,b)=\sum_{k\geq 0} (-1)^k \\# \\{ \text{nondegenerate paths between  }a\text{ and }b \\}
 \end{equation}
  when $a$ and $b$ are elements of a finite poset (in this case $\zeta$ is invertible; its inverse is known as Möbius function). 

  What does this have to do with information? Following Boltzmann ideas, entropy can be seen as an extension of cardinality: when all elements of a finite set $X$ are equiprobable, the entropy is $\ln |X|$. In turn, magnitude is a generalization of cardinality, and it is natural to introduce a probabilistic extension of it: "categorical entropy". Stephanie and I 
  {% cite Chen2023formula %} proposed that categorical entropy is defined on finite categories equipped with a probability $p$ on objects and a "kernel" $\theta:\Ob\cat{A} \times \Ob \cat{A} \to [0,\infty)$ such that $\theta(a,a')=0$ whenever $a\not\to a'$ via the formula 
 \begin{equation}\label{eq:cat_entropy}
 \mathcal H(A,p,\theta) = - \sum_{a\in \Ob \cat A} p(a) \ln \left(\sum_{b\in \Ob \cat A} \theta(a,b)p(b) \right).
 \end{equation}
This function shares many "nice" properties with Shannon entropy. In the context of metric spaces equipped with probability, \eqref{eq:cat_entropy} appears as a measure of diversity between species when $p$ is its relative abundance and $\theta$ measures their similarity {% cite Leinster2012 %}.

**Presentations:**
* ["A Combinatorial Approach to Categorical Möbius Inversion and Magnitude" [video]](https://www.youtube.com/watch?v=CGzOVeQLLnA), Applied Algebraic Topology Network, 2024.
* ["Categorical Magnitude and Entropy" [slides]]({{site.baseurl}}/assets/pdf/slides/GSI23-magnitude.pdf), GSI 2023, Saint Malo, France.


# Bibliography

{% bibliography --cited %}
