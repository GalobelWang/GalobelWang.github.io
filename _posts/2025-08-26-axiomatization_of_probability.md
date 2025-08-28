---
layout: distill
title: Kolmogorov's axiomatization of probability
description: Where I attempt to provide historical context for Kolmogorov's axiomatization of probability. 
tags: probability
giscus_comments: true
date: 2025-08-26
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
  - name: Origins
    # if a section has subsections, you can add them as follows:
    # subsections:
    #   - name: Example Child Subsection 1
    #   - name: Example Child Subsection 2
  - name: Law of large numbers and frequentism
  - name: Statistical mechanics
  - name: Hilbert's sixth problem
  - name: Axiomatization in the "elementary" (finite) case
  - name: Infinite families of events


---

*The history of probability is a complex and convoluted subject that has been treated at length in many books. What I've collected here are just a few aspects of it, that I'd discussed with my students during the first lecture of my course* Ma4 Probability *at Caltech. My aim was to contextualize Kolmogorov's axiomatization of probability theory; namely, to motivate the introduction of the seemingly complex machinery of measure theory to students that are usually only familiar with very elementary accounts of probability.* 

## Origins  

First, I'd like to talk a little bit about the history of probability to put certain ideas that you might already have about the subject in context. It'll also help us understand better the role of Kolmogorov's axiomatization. This won't be a historically thorough account by any means. 

Although randomness is present in ancient philosophy (e.g. in Democritus), there was no mathematical treatment of probability in antiquity.

The mathematical theory of randomness can be traced back to Cardano (Italy, 1501-1576), who was the first to attempt a systematic study of probability in connection with games of chance. But his work was only published posthumously.

Cardano still mixes the mathematical concept of probability with the unscientific concept of luck (an external force responsible for the fluctuations of outcomes).  

Moreover, he rather unsuccessfully attempted to base his theory on the notion of "odds", rather than probabilities.


$$
\operatorname{Odds}(\text{event E}) =  \frac{\#\text{ of outcomes favorable to } E}{\#\text{ of outcomes unfavorable to } E}.
$$


Partially because Cardano's work was not published, and also because the "odds" were not the good quantity for convenient computations, the historical origin of probability theory is attributed to the [correspondence between Blaise Pascal and Pierre de Fermat](https://www.york.ac.uk/depts/maths/histstat/pascal.pdf) around 1654. They discussed the "problem of the division of a stake between two players whose game was interrupted before its close."

For them and their successors in the XVII and XVIII centuries, probability was understood as follows. 



> **Principle of Indifference (sometimes called Laplace's principle).**<br>
>The probability of an event is the ratio of the number of cases favorable to it, to the number of all cases possible when nothing else leads us to expect that any one of these cases should occur more than any other, which renders them, for us, equally possible.<br><br>
>—Laplace, "Analytical Theory of Probability", 1812
 

In practice, they introduced a set $S$ of possible outcomes of a certain "experiment" (such as tossing a die), and an *event* $A$ is defined by a set of "favorable" outcomes, whose probability is 
$$
\mathbb P(A)=|A|/|S|.$$

Here's an example of a "classical" problem, the likes of which you might have already seen. Two dice are thrown together; let $X$ be the sum of both outcomes. The problem is to show that $X=9$ is more probable than $X=10$. To solve it, one introduces the set   $S= \lbrace 1,2,3,4,5,6 \rbrace^2=\lbrace (i,j)\mid 1\leq i,j\leq 6 \rbrace$ as a model of the possible outcomes; $S$ has  has 36 elements. 
The favorable cases to $X=9$ are $(3,6),\, (6,3) \,(4,5)$ and $(5,4)$, hence $\mathbb P(X=9)=4/36$ according to the principle of indifference. Similarly, the favorable cases to $X=10$ are $(4,6)\,, (5,4)$ and $(5,5)$, hence $\mathbb P(X=10)=3/36$. 

We see in this example that the *events* "the sum of both outcomes is $9$" and "the sum of both outcomes is $10$" are represented by *subsets* of the set $S$ of possible outcomes. This change of perspective, from *outcomes to events*, plays a key role in the axiomatization of probability. 



## Law of large numbers and frequentism

One can also attach a number to the occurrence of a certain event. One obtains in this way the notion of a **random variable**. For example, at least for rational $p=n/(n+m)$, one might realize 
$$
X= \begin{cases}
1 & \text{ with probability } p \\
0 & \text{ with probability } 1-p
\end{cases}. 
$$
 under the paradigm of the principle of indifference: for instance, by filling an urn with $n$ white balls and $m$ red balls, all identical in shape, and assigning the value $1$ to $X$ whenever a white is drawn.  (Today we say that $X$ is a random variable *with Bernoulli distribution* of parameter $p$, denoted $\operatorname{Ber}(p)$.)

By introducing numbers this way, one can combine several random variables using arithmetic operations $+$, $-$, $/$, and $\cdot$. 

Very fundamental was also the notion of *independence* of random variables: $X$ and $Y$ are independent if for any possible values $x$ and $y$ that they may respectively take
$$
\mathbb P(X=x \text{ and } Y=y) = \mathbb P (X=x)\mathbb P(Y=y).$$

In 1962, Jakob Bernoulli (1655-1705) proved a first version of the law of large numbers (published in 1713): if $(X_i)_{i=1}^\infty$ is a sequence of independent random variables, each with distribution $\operatorname{Ber}(p)$, then 
$$
\frac{\sum_{i=1}^n X_n}{n} \to p \quad \text{as} \quad n\to \infty.
$$

This is a first example of an **asymptotic law of randomness**: a random quantity, $\frac{\sum_{i=1}^n X_n}{n}$, is shown to approximate a deterministic one, $p$, as $n\to \infty$. The central limit theory is another example of such a law. ([This video is a nice introduction to the central limit theorem.](https://www.youtube.com/watch?v=AwEaHCjgeXk))

In fact, Bernoulli proved something more refined: that 
$$
\mathbb P\left(\left| \frac{ \sum_{i=1}^n X_n}{n} - p\right| >\epsilon \right) \leq b(n,\epsilon)
$$ 
for an explicit upper bound $b(n,\epsilon)$ that vanishes as $n\to \infty$. (Nowadays, we call this *convergence in probability*.)



The principle of indifference is well adapted to problems that have some natural symmetry, such as those connected with games of chance.  In turn, the law of large numbers led to a *frequentist* interpretation of probability, under which symmetry is no longer needed: the probability of an event could be *defined* as the limit of its relative frequency under many trials. Probabilistic ideas were progressively applied to situations without evident symmetries, in the context of lawsuits, insurance, and demographics (tables of natality and mortality). 




## Statistical mechanics
 

The field of applications of probabilistic ideas was considerably expanded in the XIX century. 

Most notably, Ludwig Boltzmann (Austria, 1844-1906) proposed that thermodynamic macroscopic observables, such as the temperature and the entropy, could be explained from microscopic considerations, using a probabilistic description of the possible configurations of the molecules that compose a given substance. 

For this, it was necessary to take limits as the number of particles goes to infinity and/or to consider continuous models (particles distributed in Euclidean space). 

Boltzmann ideas were further developed by Josiah Williard Gibbs (USA, 1839-1903), who also coined the term **statistical mechanics**. 

For instance, Boltzmann proposed that the entropy $S$ of a system is given by
$$
S=k_B \log(\#\text{ microscopic configurations of the system}),
$$
when all the configurations $X$ are equiprobable and the argument of the logarithm is finite. Here $k_B$ denotes a universal constant (Boltzmann's constant). More generally, Gibbs gave the formula
$$
S= - k_B \sum_{x\in X} p(x) \log p(x),
$$
where $p:X\to \mathbb R_{\geq 0}$ satisfies $\sum_{x\in X} p(x) = 1$. 


In actual systems, the number of configurations is a priori infinite. The formulas above only make sense on finite portions of the system, and one is forced to consider a limiting procedure. 

The simplest setting on which one can perform this kind of limiting operation is the *Ising model*: 

Consider a finite and discrete set 
$\Lambda \subset \mathbb Z^2$ of sites organized in a square array. 

Let $s_{x,y}\in \lbrace  +1,-1 \rbrace$ be a "spin" associated to the site $(x,y)\in \Lambda$. Then  $\vec s = \lbrace  s_{x,y} \rbrace_{(x,y)\in \Lambda}$ is a possible configuration of the system. 

The energy of this configuration is given by the Hamiltonian:
$$
 \mathcal{H}(\vec s, BC) = -  \sum\limits_{(x,y)} s_{x,y} \left(s_{x+1,y} + s_{x,y+1} \right) - h \sum\limits_{(x,y)} s_{x,y}
$$
Because of the interactions between neighbors in the sum, the hamiltonian depends on some given boundary conditions $BC$. Remark that two neighboring spins that are equal decrease the energy. 

The Boltzmann-Gibb's theory postulates that, in equilibrium, the configurations of the system are distributed according to the probability law 
$$
\mathbb P(\vec s) \propto \exp \left(- \frac{\mathcal{H}(\vec s)}{k_B T} \right),
$$
where $T$ is the temperature of the system. This is called today a *Gibb's state.* 

It turns out that the ``typical'' or more probable configurations are very different, depending on the value of $T$.  If $T$ is much smaller that a certain *critical temperature* $T_c$, then the alignment tendency of the spins predominates and one sees big clusters with the same spin. Whereas if $T\gg T_c$, disorder predominates. A phase transition happens at $T_c$. In fact, this $T_c$ is only well defined in the limit where the diameter of $\Lambda$ goes to infinity and the boundary conditions become irrelevant. 


[You can see some simulations of this phenomenon here.](https://rf.mokslasplius.lt/ising-model/)



## Hilbert's sixth problem

Hilbert, who was one of the most important mathematicians of his time, proposed in 1900 a list of the most important problems in mathematics, which still inspires mathematicians today. Some of them had to do with the axiomatization of physics under the model of mathematics. His sixth problem concerned statistical mechanics:

>"The investigations on the foundations of geometry suggest
the problem: To treat in the same manner, by means of axioms, those physical sciences in which mathematics plays an important part; in the first rank are the theory of probabilities and mechanics.<br>
>As to the axioms of the theory of probabilities,* it seems
to me desirable that their logical investigation should be
accompanied by a rigorous and satisfactory development
of the method of mean values in mathematical physics, and
in particular in the kinetic theory of gases" <br>
>[...]
>Thus Boltzmann's
work on the principles of mechanics suggests the problem
of developing mathematically the limiting processes, there
merely indicated, which lead from the atomistic view to the
laws of motion of continua. 

An axiomatization of the theory of probability was proposed by the russian mathematician Andrei Kolmogorov in the monograph ["Foundations of the Theory of Probability"](https://altexploit.files.wordpress.com/2017/07/a-n-kolmogorov-foundations-of-the-theory-of-probability-chelsea-pub-co-1960.pdf), first published in German (as *Grundbegriffe der Wahrsckeinlichkeitrecknung*)  in 1933. In its preface, Kolmogorov says:

> [The axiomatization of probability] would have been a rather hopeless one before the
introduction of Lebesgue's theories of measure and integration.
However, after Lebesgue's publication of his investigations, the
analogies between measure of a set and probability of an event,
and between integral of a function and mathematical expectation
of a random variable, became apparent. These analogies allowed
of further extensions ; thus, for example, various properties of
independent random variables were seen to be in complete analogy
with the corresponding properties of orthogonal functions. 

Although Kolmogorov humbly claimed that the basic ideas were already known to the specialists, his was the first "complete exposition of the
whole system". (I advise you to read Kolmogorov's monograph: it remains one of the clearest expositions of the foundations of the theory.)

Lebesgue's theory of measure, extended later by Fréchet, was based on set theory (itself axiomatized by Zermelo in 1908). The theory of sets arose from problems concerning limits in analysis and the quest for ``foundations'' for mathematics based on formal, logical procedures (see the work by Frege, Cantor, Zermelo, Russell and Whitehead...). At the beginning of the XXth century, set theory was imposing itself as the foundational tool of mathematics. Hence Kolmogorov's probability is intrinsically set-theoretic; this has not been revisited until very recently, in the attempt to develop a categorical approach ([see this workshop](http:*tobiasfritz.science/2019/cps_workshop/schedule.html); category-theorists also have in mind a completely new approach to the foundation of mathematics called [Univalent foundations](https:*en.wikipedia.org/wiki/Univalent_foundation)). 



## Axiomatization in the "elementary" (finite) case

Let $X$ denote an experiment with possible outcomes $E_X= \lbrace   x_1 ,...., x_n \rbrace$. 
According to the principle of indifference,  each outcome has probability $ 1/n$.  Similarly, any subset $A$ of $E_X$ (an event) has probability $|A| / n$. "Elementary" probability theory deals with many examples of this kind, involving coins, cards, urns, etc. 

However, the principle of indifference has limitations: maybe *something* leads us to expect that one of the cases occurs more than the others. So more generally, one introduces a function of probabilities $p:E_X \to [0,1]$ such that  $\sum_{x\in E_X} p(x) = 1$. This induces a probability for every subset $A$ of $E_X$ via the formula
$$
\mathbb P(A) = \sum_{x\in A} p(x).
$$
The equality $P(E_X)=1$ expresses that with certainty one of the possible outcomes is going to be observed. 

 Where do these $p(x)$ come from? It depends on your philosophical views. For frequentists,  $p(x)$ should be an asymptotic approximation to the relative frequency of the output $x$ if the experiment $X$ is repeated a large number of times; the existence of a limit of this relative frequencies is thus supposed. Some claim that  $p(x)$ expresses some propensity of nature to give the output $x$. For bayesians, the numbers $p(x)$ are just a quantification of our beliefs (i.e. a reasonable expectation); so a Bayesian might start supposing that a coin is fair (a *prior* belief), and then update this belief after some measurements using Bayes' theorem, getting a *posterior*.  (Bayesianism is not necessarily subjective i.e. "influenced by personal feelings, tastes, or opinions.", as some claim; the question is rather: what are the beliefs that an *idealized rational observer* of a situation can have about it, given limited information e.g. certain observations?). See  [Interpretations of probability](https://plato.stanford.edu/archives/win2012/entries/probability-interpret/) in *The Stanford Encyclopedia of Philosophy*.

As we briefly mentioned above, for the purpose of generalizing this story to infinite sets $E$, it is convenient to reformulate the definition of probability in terms of events rather than outcomes. This is done in two stages, defining first an *algebra of sets (a.k.a. events)* and then a *probability measure*. 

Let $E$ be a set. A set $\mathfrak F$ of subsets of $E$ is called an *algebra of sets* if 
* $\mathfrak F$ contains $E$;
* $\mathfrak F$ is closed under complementation: If $A$ belongs to $\mathfrak F$, its complement $\bar A$ too.
*  $\mathfrak F$ is closed under binary unions:  If $A$ and $B$ belong to $\mathfrak F$, their union $A\cup B$  too.

**Exercise.** Prove that $\mathfrak F$ is also closed under binary intersections, finite unions, and finite intersections. 

**Exercise/Remark:** When $\mathfrak F$ is finite, one can restate the definition in purely algebraic terms, without reference to the set $E$.   (In case you run out of ideas, [the answer is here](https://en.wikipedia.org/wiki/Field_of_sets#Fields_of_sets_in_the_representation_theory_of_Boolean_algebras).)

A *finite probability space* is given by a set $E$ (of any cardinality), a *finite* algebra of sets $\mathfrak F$, and a function $P:\mathfrak F\to [0,\infty)$ (*probability measure*, finite case)  such that $P(E)=1$ and 
$$
P(A\cup B)= P(A) + P(B)
$$
whenever $A$ and $B$ have no elements in common. This last property is called *additivity*.

The elements of $\mathfrak F$ are called *random events*, and $P(A)$ is called the *probability* of the event $A$. 

If we think about $P(A)$ in frequentist terms i.e. as a quotient $ N(A)/N$ where $N(A)$ are occurrences of the event $A$ among $N$ trials, we can justify the requirements of $0 \leq P(A) \leq 1$ and additivity of disjoint events, since $N(A\sqcup B) = N(A) + N(B)$ (the symbol $\sqcup $ is disjoint union), hence $P(A\sqcup B) = P(A) + P(B).$ But of course this is just an heuristic motivation for the axioms.

When $E$ is a finite set $E = \lbrace  x_1,..., x_n  \rbrace $ and $\mathfrak F$ equals the set of all subsets of $E$, the function $P:\mathfrak F\to [0,1]$ is uniquely determined by $\lbrace P(x_i) \rbrace _{i=1}^n$ and one recovers the outcome-based description that we introduced above. 

There is a dictionary between the language of sets and that of events. 

* If $A\cap B= \emptyset$, then the random events $A$ and $B$ are *incompatible* or *mutually exclusive*. 
*  If $X=A\cap B$, the event $X$ corresponds to the simultaneous occurrence of $A$ and $B$; if $X=A\cup B$, the event $X$ is the occurrence of $A$ or $B$. 
* The complementary set $\bar A$ corresponds to the non-occurrence of $A$. 
* $\emptyset$ is the impossible event; $E$ is certitude (contains all possible outputs). 
* If $B\subset A$, then the occurrence of $B$ implies the occurrence of $A$. 

**Exercise.** Prove the elementary formulas:
* $P(\bar A) = 1-P(A). $ 
* If $A_1,...,A_n$ are incompatible, then 
$$
P(A_1) + \cdots + P(A_n) = 1.
$$


## Infinite families of events

At first sight, the previous definition should work just fine if one allows algebras of fields of arbitrary cardinality, and not just finite ones.  But infinities always come with delicate unwanted problems.

At least two types of problems arise. First, there is no consistent way of assigning a probability $P(A)$ to *all* subsets of an infinite set respecting additivity; one runs into paradoxes ultimately connected with the axiom of choice (beware, one cannot picture the wildest sets!). Second, one wants to guarantee that limits are '"well behaved"; as we saw, one of the main reasons for axiomatizing probability  was to make formal the "limiting processes" used in statistical physics.

An illustration of the first kind of problem [was provided by Hausdorff in 1914](https://proofwiki.org/wiki/Hausdorff_Paradox). He showed that, if one first removes certain countable set of points of $S^2$ (the 2-dimensional sphere in $\mathbb R^3$), the remainder $E$ can be divided into three disjoint subsets $A$, $B$ and $C$ such that $A$, $B$, $C$, and $B\cup C$ are all congruent (i.e. equivalent under a rotation of the sphere). Therefore it is not possible to have an additive probability on all subsets of $E$ that would assign the same probability to congruent sets (in accordance with our geometrical intuitions), since $B\cup C$ should have probability $1/3$, $1/2$ and $2/3$ at the same time. 

Concerning limits, one requires a language rich enough to talk about an arbitrarily large number of events (or of conditions imposed on the outcomes of an experiment). For instance, consider the set $E=\lbrace H,T \rbrace^{\mathbb N}$, which models the fact of throwing a coin infinitely many times (i.e. an arbitrarily large number of times); an element $\omega = (\omega_0,\omega_1, \omega_2,...)$ is a particular sequence of heads and tails obtained performing the experiment. Then the (intuitively very unlikely) event of getting only heads can be written as an countable intersection of simpler events of the form $\lbrace \omega_i = H \rbrace$. Hence it's natural to require that the algebra of events $\mathcal F$ be also closed under countable unions (equivalently, intersections): we call these $\sigma$-algebras. Similarly, the probability measures $P$ should be $\sigma$-additive: given a sequence $A_1,A_2,...$ of mutually exclusive events, 
$$
P(\bigcup_{i=1}^\infty A_i) = \sum_{i=1}^\infty P(A_i) := \lim_{N\to \infty}  \sum_{i=1}^N P(A_i).
$$

A pair $(E, \mathfrak F)$ made of a set $E$ and a $\sigma$-algebra of subsets of $E$ is called a measurable space. A triple $(E, \mathfrak F, P)$ such that $(E, \mathfrak F)$ is a measurable space and $P:\mathfrak F\to [0,\infty)$ is a $\sigma$-additive function such that $P(E)=1$ is called a *probability space*. 

Kolmogorov provided an equivalent characterization, that we propose here as an exercise. 


**Exercise.** Let $(E,\mathfrak F)$ be a measurable space and  $P:\mathfrak F\to [0,1)$ an additive function. Prove that $\sigma$-additivity of $P$ is equivalent to the following property (Kolmogorov's axiom VI): if 
$(B_i)_{i=1}^{\infty}$  is a sequence of elements of $\mathfrak F$ such that 

$B_1 \supset B_2 \supset B_3 \supset \cdots$ and $\bigcap_i B_i = \emptyset,$ 

then $\lim_{k\to \infty} P(B_k) = 0$. 

If $\mathfrak F$ is finite, this axiom VI (or $\sigma$-additivity) adds nothing new. Kolmogorov remarks that, in the truly infinite case, many events "are generally merely ideal events to which
nothing corresponds in the outside world." However, "if reasoning
which utilizes the probabilities of such ideal events leads us to a
determination of the probability of an actual event, then,
from an empirical point of view also, this determination will
automatically fail to be contradictory." There is no "empirical" motivation of axiom VI, but it is an arbitrary limitation that turn out to be very useful and connected with the intuitive ideas about probability.
