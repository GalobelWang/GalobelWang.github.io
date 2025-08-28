---
layout: page
title: Topological characterization of information measures
description: 
---


In "simple" terms, *information topology* regards a statistical system (a collection of interrelated observables) as a generalized topological space (a *topos*) and identifies Shannon entropy, along other important "measures of information" used in information theory, as a possible [invariant](https://en.wikipedia.org/wiki/Invariant_(mathematics)) associated to this space. 

[Toposes or topoi](https://en.wikipedia.org/wiki/Topos) are an abstraction of topological spaces in the language of category theory and sheaves introduced by Grothendieck and his collaborators (Artin, Verdier,...). Toposes allow richer cohomology theories than set-theoretic topological spaces, and some of these theories (e.g. étale cohomology) play a key role in modern algebraic geometry. Moreover, these *Grothendieck toposes* are particular cases of *elementary toposes*, which are "nice" categories with properties analogous to those of the category of sets that play an important role in logic. 

Baudot and Bennequin {% cite Baudot2015 %} first identified Shannon's discrete entropy as a toposic invariant of certain categories of discrete observables. My Ph.D. thesis {% cite Vigneaux2019-thesis %} and a series of articles extended their results in several directions. Namely, the general homological constructions were abstracted from the concrete setting of discrete variables via  *information structures* (categories that encode the relations of refinement between observables), allowing seamless extensions and generalizations to other settings such as continuous vector-valued observables {%cite Vigneaux2020information %}. 

When the information structure encodes discrete observables, the classical information functions—--
Shannon entropy, Tsallis $\alpha$-entropy, Kullback-Leibler divergence—--appear as 1-cocycles; the corresponding "coefficients" of the cohomology are probabilistic functionals (i.e. functions of probability laws).
There is also a combinatorial version of the theory (coefficients are  functions of histograms) where the only 0-cocycle is the exponential function and the 1-cocycles are generalized multinomial coefficients (Fontené-Ward) {% cite  Vigneaux2023characterization %}. There is an asymptotic relation between the combinatorial and probabilistic cocycles. 

For information structures that contain continuous vector-valued observables (besides discrete ones), the only new degree-one cocycles are Shannon's differential entropy entropy and the dimension (of the support of the measure) {% cite Vigneaux-GSI21-cohomology %}. This constitutes a novel algebraic characterization of differential entropy.

Information cohomology has seen some advances in the last years. Marcolli and Manin {% cite Manin2020homotopy %} related information structures with other homotopy- and category-theoretic models of neural information networks. Similar perspectives have been developed more recently by Belfiore and Bennequin {% cite belfiore2021topos %} to tackle the problem of interpretability of neural networks. They associate to each neural network a certain category equipped with a Grothendieck topology (determined by the connectivity of the neurons), and study the category of sheaves on it, which is a topos. Every topos has an internal logic, and they are linking this internal toposic logic with the classification capabilities that emerge in each layer of a trained neural network (these were previously studied in the experimental article {% cite belfiore2021logical %}). 

**Presentations:** 
* ["Cohomological Aspects of Information" [video]](https://www.youtube.com/watch?v=Nzx9MotxEas), Topos Institute, 2024: I summarize  the main results that I have obtained in this domain. 
* ["Information Cohomology of Classical Vector-valued Observables" [video]](https://www.youtube.com/watch?v=rW76AlxMbrU), GSI2021: I provide details on the characterization of the differential entropy and the dimension as the only cohomology classes in degree 1 for systems of vector-valued observables.
* ["Entropy under disintegrations" [video]](https://www.youtube.com/watch?v=uYoW-pGbEWY), GSI 2021: I explain how every disintegration of a reference measure $\lambda$ induces a chain rule for the generalized differential entropy $S(\rho) = -\int \log (\frac{d\rho}{d\lambda}) d\rho$, which gives a foundation to the extension of information cohomology to more general observables e.g. with values in locally compact topological groups. 
* ["Variations on Information Theory: Categories, Cohomology, Entropy" [video]](https://www.youtube.com/watch?v=eZqo_JcTk3I), IHES, 2016: an older presentation, aimed at probabilistists, where I introduce the notion of (de Rham) cohomology  and it's analogue in our theory.

**Other references:**
* ["On the Structure of Information Cohomology"](https://tspace.library.utoronto.ca/bitstream/1807/130552/3/Dub%EF%BF%BD_Hubert_202311_PhD_thesis.pdf), Ph.D. thesis by Hubert Dubé (U. Toronto), which introduces the Mayer-Vietoris long exact sequence, Shapiro's lemma and Hochschild-Serre spectral sequence in the framework of information cohomology, and provides some bounds on the cohomological dimension along with new cohomological computations. 
* ["Information cohomology and Entropy"](https://sites.unimi.it/barbieri/castiglioni.pdf), master thesis by Luca Castiglioni (University of Milan).

# Bibliography

{% bibliography --cited %}
