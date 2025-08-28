---
layout: page
title: Information dimension and measures with geometric structure
description: 
---


From an analytic perspective, the *dimension* has played an important in information theory since its inception, mainly in connection with quantization.  By partitioning $\Rr^d$ into cubes with vertexes in $\mathbb Z^d/n$, one might quantize a continuous probability measure $\rho$ into a measure $\rho_n$ with countable support, whose entropy satisfies
\begin{equation}\label{eq:expansion_law}
H(\rho_n) = D\ln n + h + o(1),
\end{equation}
where $D=d$ and $h=h(\rho)$ is the differential entropy of $\rho$ {% cite Kolmogorov1993 %}. Renyi {% cite Renyi1959 %} turned this into a definition: if $\rho$ is now a general law and the expansion \eqref{eq:expansion_law} holds for some constants $D,h\in \Rr$, one calls $D$ the information dimension of $\rho$ and $h$ its $d$-dimensional entropy. He wondered about the "topological meaning" of the entropic dimension, which might be  noninteger. 


In {% cite Vigneaux2023typicality %} I introduced an *asymptotic equipartition property* for discrete-continuous mixtures or, more generally, of convex combination of rectifiable measures on $\Rr^d$. In particular, it gives an interpretation for the information dimension $D$ of one of these measures $\rho$: 
the product $(\Rr^d)^n$ naturally splits into strata of different dimensions, and the typical realizations of $\rho^{\otimes n}$ concentrate on strata of a few dimensions close to $nD$. I also obtained volume estimates (in terms of Hausdorff measures) for the typical realizations in each typical stratum. (A measure $\rho$ is $m$-rectifiable if there exists a set $E$, equal to a  countable union of $C^1$ manifolds, such that $\rho$ has a density with respect to the restricted HAusdorff measure $\mathcal H^m|_E$, which is the natural notion of $m$-dimensional volume on $E$.)

**Presentations:**
* ["On the entropy of rectifiable and stratified measures" [slides]]({{site.baseurl}}/assets/pdf/slides/GSI23-stratified.pdf), GSI 2023, Saint Malò, France. 
* ["Typicality for stratified measures" [slides]]({{site.baseurl}}/assets/pdf/slides/ETH-2023-stratified.pdf), ETH Zurich, 2023. 
  
  
# Bibliography

{% bibliography --cited %}
