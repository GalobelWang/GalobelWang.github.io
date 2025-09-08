---
layout: page
title: Complex algebraic geometry
img: assets/img/hkulogo.jpg
category: PhD
giscus_comments: false
---

These are the lecture notes for the course in Complex Geometry and Complex Analysis, taught by [Prof. Ngaiming Mok](https://hkumath.hku.hk/~nmok/).

* Click [here](https://galobelwang.github.io/file/ComplexAlgebraicGeometry.pdf) to access the lecture notes of **Complex algebraic geometry**, which is a brief introduction to the Kähler manifolds and Hodge structure of complex geometry.

* Click [here](https://galobelwang.github.io/file/AdvancedComplexAnalysis.pdf) to access the lecture notes of **Advanced complex analysis** containing Riemann surface, meromorphic vector bundle, elliptic function and some central problems on compact Riemann surface ([Mittag-Leffler problem](https://en.wikipedia.org/wiki/Mittag-Leffler%27s_theorem), [Weierstrass problem](https://en.wikipedia.org/wiki/Weierstrass_factorization_theorem)).

# A brief introduction to Mittag-Leffler problem and Weierstrass problem

> **Mittag–Leffler** <br> For every collection $\{g_n\}$ of meromorphic functions, where each $g_n$ is defined on a neighborhood of $a_n$ and has $a_n$ as its only pole, there exists a meromorphic function $g$ whose set of poles is exactly $\{a_n\}$, and whose principal part at $a_n$ agrees with $g_n$.

> **Weierstrass** <br> For every sequence $\{m_n\}\subset\mathbb{N}$, there exists a holomorphic function $f$ that has a zero of multiplicity $m_n$ at $a_n$ and no zeros elsewhere.

# Preface and Motivation of complex algebraic geometry

Kähler manifolds are at the intersection of complex analytic geometry, Riemannian geometry, and symplectic geometry. Moreover, every smooth projective variety is a Kähler manifold. All of this structure is reflected in a rich theory of geometric and topological invariants. In this course we will develop techniques from sheaf theory and linear elliptic theory to study the cohomology of Kähler manifolds.

Let $f_i(x_1, \cdots , x_n),\ i \in \{1, \cdots , k\}$ be polynomials with coefficients in $\mathbb{R}$ and $\mathbb{C}$.
An **affine algebraic variety** is the common zero set of
$$
X = X(f_1, \cdots , f_n) = \{ x : f_i(x) = 0,\ \forall i \}.
$$
We incorporate the field into the notation

$$
X(\mathbb{C}) = \{ x \in \mathbb{C}^n : f_i(x) = 0,\ \forall i \}, \text{ and } X(\mathbb{R}) = \{ x \in \mathbb{R}^n : f_i(x) = 0,\ \forall i \}, \text{ where } f_i \in \mathbb{R}[x]
$$

These can be thought of naturally as topological spaces with the topology they inherit from $\mathbb{C}^n$ or $\mathbb{R}^n$.
(Alternatively, one can see the Zariski topology induced by declaring that zero sets of polynomials are closed. And it's well known that $X(\mathbb{C})$ is essentially never compact.)

To remedy this, we shift our attention to complex projective space, which is defined as follows: for all $\lambda \ne 0$,

$$
\mathbb{C}P^n= \mathbb{C}^{n+1}\setminus\{0\}/\text{dilations}=\{(z_0,\cdots , z_n)\in \mathbb{C}^{n+1}\setminus\{0\}\}/\bigl((z_0,\cdots , z_n)\sim(\lambda z_0,\cdots , \lambda z_n)\bigr)= S^{2n+1}/U(1)
$$

By definition, it is compact.


Given homogeneous polynomials $F_i(x_0,\cdots,x_n)$, we obtain a “projective variety”
$$
X = X(F_1,\cdots,F_k)=\{x\in\mathbb{R}^k : F_i(x)=0,\ \forall i\}.
$$
As before, if the polynomial have real coefficients, the case becomes
$$
X(\mathbb{R})=\{x\in \mathbb{R}\mathbb{P}^n : F_i(x)=0,\ \forall i\}.
$$
We can ask about the relation between the topology and geometry of $X(\mathbb{R})$ and $X(\mathbb{C})$ and the algebraic properties of $X$.
For example, say $X$ is the zero set of a single homogeneous polynomial $F$ of degree $d$, can we recover $d$ from $X(\mathbb{C})$ and $X(\mathbb{R})$?
This is only a sensible question for irreducible $F$.

It turns out that $X_F(\mathbb{C})$ determines a homology class

$$[X_F(\mathbb{C})]\in H_{2n-2}(\mathbb{C}P^n;\mathbb{Z})$$

and this group is cyclic with generator $[H]$ induced by
$\mathbb{C}P^{n-1}\hookrightarrow \mathbb{C}P^n$ and $[X_F(\mathbb{C})]=d\cdot[H]$.

We can recover $d$ from the intrinsic geometry at $X_F(\mathbb{C})$ using its “Chern class” in $H^*(X_F(\mathbb{C}))$.
Over the real numbers, $H_{n-1}(\mathbb{R}P^b;\mathbb{Z}_2)$ is cyclic with generator $[H]$ and $[X_F(\mathbb{R})]=d\cdot[H]$, this gives us the recovery of $d$ mod $2$.
It’s possible to show that $X_F(\mathbb{R})$ does not provide an upper bound for $d$.

>From a different point of view, the **Nash embedding theorem** shows that any smooth, closed manifold over $\mathbb{R}$ is diffeomorphic to $X(\mathbb{R})$ for some real, smooth, projective variety. But for complex manifolds, the analogue statement is false.

>To be diffeomorphic to a complex projective variety, a manifold must be complex, **Kähler**, **Hodge** and then it will have an embedding into $\mathbb{C}P^N$ for some integer $N$ and Chow’s theorem guarantees that it’s algebraic.

In this note, we’ll show that compact submanifolds of $\mathbb{C}P^n$ satisfy these properties is a complex projective variety.