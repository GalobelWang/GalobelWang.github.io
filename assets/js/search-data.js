// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-research",
          title: "research",
          description: "Interests and projects",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/";
          },
        },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-notes",
          title: "notes",
          description: "A growing collection of your cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "You can find my academic CV at the top pdf download button.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-kolmogorov-39-s-axiomatization-of-probability",
        
          title: "Kolmogorov&#39;s axiomatization of probability",
        
        description: "Where I attempt to provide historical context for Kolmogorov&#39;s axiomatization of probability.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/axiomatization-of-probability/";
          
        },
      },{id: "projects-abstract-algebra",
          title: 'Abstract Algebra',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/AA/";
            },},{id: "projects-complex-algebraic-geometry",
          title: 'Complex algebraic geometry',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/AG/";
            },},{id: "projects-complex-analysis",
          title: 'Complex Analysis',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/CA/";
            },},{id: "projects-fourier-analysis",
          title: 'Fourier Analysis',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/FourierA/";
            },},{id: "projects-galois-theory",
          title: 'Galois Theory',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Galois/";
            },},{id: "projects-information-geometry",
          title: 'Information geometry',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/IGOT/";
            },},{id: "projects-integrals-with-parameters",
          title: 'Integrals with Parameters',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Integral/";
            },},{id: "projects-integration-on-manifolds",
          title: 'Integration on Manifolds',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/IntonManifolds/";
            },},{id: "projects-numerical-linear-algebra",
          title: 'Numerical Linear Algebra',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/NLA/";
            },},{id: "projects-probability-theory-and-mathematical-statistics",
          title: 'Probability Theory and Mathematical Statistics',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/PT/";
            },},{id: "projects-real-analysis-and-functional-analysis",
          title: 'Real Analysis and Functional Analysis',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/RAFA/";
            },},{id: "projects-series",
          title: 'Series',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Series/";
            },},{id: "projects-stability-theory",
          title: 'Stability Theory',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/StabilityT/";
            },},{id: "projects-statistical-mechanics",
          title: 'Statistical mechanics',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/StatMe/";
            },},{id: "projects-topics-in-algebra",
          title: 'Topics in algebra',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/TopicAlgebra/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%75%33%30%31%31%37%31%37@%63%6F%6E%6E%65%63%74.%68%6B%75.%68%6B", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/GalobelWang", "_blank");
        },
      },{
        id: 'social-researchgate',
        title: 'ResearchGate',
        section: 'Socials',
        handler: () => {
          window.open("https://www.researchgate.net/profile/Zhenpeng-Wang-9?ev=hdr_xprf/", "_blank");
        },
      },{
        id: 'social-wechat_qr',
        title: 'Wechat_qr',
        section: 'Socials',
        handler: () => {
          window.open("", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
