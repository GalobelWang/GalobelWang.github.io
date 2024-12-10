---
layout: page
permalink: /blogs/Fourier analysis/index.html
title: Fourier analysis
---


\chapter{基本概念}

\begin{mdframed}
    Fourier 级数是以杰出的法国数学物理学家 Joseph Fourier(1768-1830)命名的级数。 在 19 世纪早期，Fourier 从事于热传导理论， 并且在 1822年发表了他的巨著《La Thérie Analytique de la Chaleur》， 在该巨著中他大量利用现在冠以他的名字的这种级数。 实际上 Fourier只从事三角多项式的研究， 历史学家中的多数人的看法似乎为 Fourier 对 Fourier 级数的数学理论所做的贡献几乎没有。 不过，这些级数在更早对于 Lenhard Euler(1707-1783), Daniel Bernoulli(1700-1782), Joseph Lagrange (1736-1813)和其他学者的确是熟知的
\end{mdframed}

\section{正则性与规范正交系}

\begin{definition}[Euclid空间]
线性空间$\mathcal{L}$称为Euclid空间，若对$\forall f, g \in \mathcal{L}$，存在映射（称为内积、标量积）$(f, g): \mathcal{L} \times \mathcal{L} \mapsto$并满足条件：
\begin{enumerate}[1)]
    \item 对称性：$\forall f, g \in \mathcal{L} \Rightarrow(f, g)=(g, f)$
    \item 线性性：$\forall f, g \in \mathcal{L}, \forall \alpha, \beta \in \Rightarrow(\alpha f \pm \beta g, h)=\alpha(f, h) \pm \beta(g, h)$
    \item 正定性：$\forall f \in \mathcal{L} \Rightarrow(f, f) \geqslant 0$，并且$(f, f)=0 \Leftrightarrow f \equiv 0$
\end{enumerate}
\end{definition}

\begin{definition}[伪Euclid空间/псевдоевклидовое пространство]
线性空间$\mathcal{L}$称为伪Euclid空间，若空间$\mathcal{L}$上引入满足条件1)，2)的内积，而$(f, f)=0$不仅仅当$f$为零元素时成立
\end{definition}
\begin{remark}
    任何Euclid空间都是伪Euclid空间，任何在伪Euclid空间成立的命题，在Euclid空间中也成立
\end{remark}

\begin{definition}[正则点与正则函数/Lebesgue定义]
若函数$f(x)$在点$x_{0}$的值 $f\left(x_{0}\right)$等于在此点的左极限与右极限的和的一半，则称函数 $f(x)$ 在点$x=x_{0}$ 处正则，称 点 $x_{0}$ 为函数 $f(x)$ 的正则点。

称在区间 $I$ 的每点处都正则的函数 $f(x)$为在区间$I$上正则函数。若周期函数在实轴的每个闭 区间内仅有有限个间断点且在间断点处正则，则称函数为严格正则函数

若周期函数 $g(x)$可表示成
$$
g(x)=\int_{\mathfrak{a}}^{x} f(t) d t+g(a)
$$
其中 $f(t)$为严格正则函数， 则称函数 $g(x)$为严格逐段光滑函数
\end{definition}

\begin{example}
（正则分段连续函数）

$\widehat{\mathcal{C}}[a;b]$ 为$[a;b]$上分段连续空间，有有限数量的第一类间断点(разрыв І-ого рода)$x_{1}, x_{2}, \ldots, x_{n} \in[a;b]$。 在这些点上函数值定义为
$$
f\left(x_{i}\right)=\frac{f\left(x_{i}-0\right)+f\left(x_{i}+0\right)}{2}
$$
即函数为正则函数。引入标量积如下：
$$
(f, g)_{\widehat{\mathcal{C}}}=\int_{a}^{b} f(x) g(x) d x
$$
则具有这种内积的给定空间为Euclid空间
\end{example}
\begin{solution}
\begin{enumerate}[1)]
\item 对称性： $(f, g)_{\widehat{\mathcal{C}}}=(g, f)_{\widehat{\mathcal{C}}}$ 由 $$\int_{a}^{b} f(x) g(x) d x=\int_{a}^{b} g(x) f(x) d x$$即得
\item 线性性：显然有
$$
\begin{aligned}
(\alpha f \pm \beta g, h)_{\widehat{\mathcal{C}}}&=\int_{a}^{b}(\alpha f(x) \pm \beta g(x)) h(x) d x
=\alpha \int_{a}^{b} f(x) h(x) d x \pm \beta \int_{a}^{b} g(x) h(x) d x\\
&=\alpha(f, h)_{\hat{C}} \pm \beta(g, h)_{\widehat{\mathcal{C}}}
\end{aligned}
$$
\item 正定性： $(f, f)_{\widehat{\mathcal{C}}}\geqslant 0$，且 $(f, f)_{\widehat{\mathcal{C}}}=0 \Leftrightarrow f \equiv 0$。
事实上，区间 $[a;b]$ 被点$x_{1}, \ldots, x_{n}$分为了 $n+1$个区间，若端点值分别取左右极限的值 ，则函数在这些区间上连续。

另一方面，若 $f(x) \in \mathcal{C}[a;b]$，在 $[a; b]$有$f(x) \geqslant 0$ 且 $(\exists x_{0} \in[a; b]): f\left(x_{0}\right)>0$，则有
$
\int_{a}^{b} f(x) d x>0
$
，由此得
$$
\left(\int_{x_{i-1}}^{x_{i}} f^{2}(x) d x=0\right)\Leftrightarrow \left((\forall x\in\left[x_{i-1};x_{i}\right]):f(x) \equiv 0\right)
$$
则有
$
f\left(x_{i}-0\right)=f\left(x_{i}+0\right)=0 \Rightarrow f\left(x_{i}\right)=0
$
，因此有
$$
\left(\int_{a}^{b} f^{2}(x) d x=0\right) \Leftrightarrow \left((\forall x\in[a;b]):f(x) \equiv 0\right)
$$
正定性得证
\end{enumerate}
\end{solution}
