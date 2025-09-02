---
layout: page
title: Information and coding theory
img: assets/img/hkulogo.jpg
category: PhD
giscus_comments: false
---

This is the lecture notes for the Information and Coding Theory course in the Department of Mathematics at the University of Hong Kong, taught by [Prof. Han](https://hkumath.hku.hk/~ghan/).

* Click [here](https://galobelwang.github.io/file/InformationTheory.pdf) to access the lecture notes of **Information theory**. 

* Click [here](https://galobelwang.github.io/file/ChannelCodingTheory.pdf) to access the lecture notes of **Channel coding theory**. 

# A brief infroduction to the Information and Coding Theory

### What is Information theory about?

In 1948, Claude Shannon, in his paper **[A Mathematical Theory of Communication](https://people.math.harvard.edu/~ctm/home/text/others/shannon/entropy/entropy.pdf)**, turned “information” into a quantitatively measurable scientific object, introducing entropy $H(X)$ to quantify uncertainty and average information content, and using mutual information $I(X;Y)$ to describe informational dependence between variables. Since then, information theory has become a foundational discipline for studying uncertainty, information flow, and fundamental limits.

Shannon established two “limit laws” of information processing. **(Source coding theorem)** For an i.i.d. data source, the minimum average number of bits needed for **lossless compression** equals the source entropy $H(X)$; one can approach $H(X)$ arbitrarily closely but cannot do better in the long run. **(Channel coding theorem)** For a noisy channel there exists a **capacity** $C=\max_{p(x)} I(X;Y)$. If the transmission rate $R<C$, the error probability can in principle be driven arbitrarily small; if $R>C$, reliable communication is impossible.

> **Lossless Source Coding Theorem**
> Let $X_1,\dots,X_n\stackrel{\text{i.i.d.}}{\sim}p_X$ with entropy $H(X)=-\sum_x p_X(x)\log_2 p_X(x)$. For any $\varepsilon>0$ and sufficiently large $n$, there exist an encoder/decoder pair $(f_n,g_n)$ such that
> $$
> \Pr\{g_n(f_n(X^n))\neq X^n\}\le \varepsilon,
> \frac{1}{n}\,\mathbb E[\ell(f_n(X^n))]\le H(X)+\varepsilon,
> $$
> where $\ell(\cdot)$ is the codeword length for a prefix (or uniquely decodable) code. <br>**Converse:** if a sequence of codes satisfies $\Pr\{g_n(f_n(X^n))\neq X^n\}\to 0$, then
> $$
> \liminf_{n\to\infty}\frac{1}{n}\,\mathbb E[\ell(f_n(X^n))]\;\ge\; H(X).
> $$
> Hence the asymptotic minimum lossless compression rate equals $H(X)$.

> **Channel Coding Theorem**
> For a discrete memoryless channel $p(y|x)$, its capacity is
> $$
> C \;=\; \max_{p(x)} I(X;Y).
> $$
> Let the rate $R$ and blocklength $n$ relate to the code size by $M=2^{nR}$, and let $P_e^{(n)}$ denote the maximal error probability. Then:
> * **Achievability:** If $R<C$, for any $\varepsilon>0$ and sufficiently large $n$, there exists an $(n,2^{nR})$ code with $P_e^{(n)}\le \varepsilon$.
> * **Converse (weak):** If $R>C$, no sequence of codes can make $P_e^{(n)}\to 0$.

### What is Channel Coding about?

Following is the block diagram of adigital data transmission/storage system:
<img src="https://galobelwang.github.io/assets/img/channelcoding.png" width="35%">

Using channel codes, we can make data transmission/storage more reliable. The main idea is to add **redundancy**, and this redundancy allows us to correct, up to some limits, errors that happen during transmission/storage.

Information theory tells us what the largest possible transmission rates are (bits/channel use) for a given channel under the assumption of using the best possible encoder and decoder. However, information theory gives us “only” the existence of such encoders and decoders. Coding theory is about finding such encoding and decoding schemes and efficiency andpracticality of these schemes is also important!