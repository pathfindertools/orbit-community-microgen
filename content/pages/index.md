---
draft: true
blocks:
  - buttons:
      - label: Apply Now
        link: '#apply-now'
      - label: More Info
        link: '#more-info'
    _template: hero
  - tailwind:
      section: p-20
      wrap: >-
        max-w-desktop-full mx-auto bg-accent1 text-lg rounded-3xl p-16 border-4
        border-primary shadow-xl shadow-glow
      imageWrap: ''
      image: ''
      contentWrap: ''
      content: ''
      label: ''
      headline: text-white text-2xl font-2 font-bold uppercase text-center mb-8
      subhead: ''
      text: text-white text-xl font-1 font-bold mb-8
      buttons: ''
    background:
      fillStyles: bg-accent1
    label: ''
    headline: Welcome to the Orbit Community Program!
    subhead: ''
    body: >
      Filecoin Orbit 2021 was a major celebration marking the first anniversary
      of Mainnet Liftoff, and a look ahead to the future of the ecosystem. For
      one week, the global Filecoin community gathered at conferences,
      workshops, and meetups—both virtual and offline—held across the globe,
      from Italy to China, Nigeria to Japan, and more.


      Now launching is the Orbit Community Program, the next step towards
      building a thriving, engaged community, and a great way to dive into the
      deep end of the Filecoin ecosystem. Participants will help amplify the
      voice of Filecoin, IPFS, and libp2p in the web3 community (both online and
      offline!), organize meetups and events, and create content and educational
      resources. Whether you're a developer or a non-technical supporter, new to
      Filecoin, or a regular contributor, all that's required is an interest in
      advancing the mission to preserve humanity's most important information
      through events and content like Orbit.
    navigationLabel: More Info
    _template: tailwindFeature
  - background:
      fillStyles: bg-primary
    marqueeText: How to Apply
    _template: marquee
  - background:
      src: >-
        https://res.cloudinary.com/protocolai/image/upload/v1651180871/orbit-community/bluestars_lg0dxn.jpg
    headline: BECOME A CADET (INDIVIDUAL CONTRIBUTOR)
    body: >
      You can apply for Orbit Community Program if you are a an individual,
      partner, or collaborator who is interested in helping us grow the
      Community. If you join as an individual contributor you will have an
      opportunity to join our Program as Cadet and progress into Ensign,
      Lieutenant, or Captain once you reach certain milestones. As an
      individual, you will be focusing on growing the local community and
      unlocking presence in new regions. If you join as a business, you will be
      showcasing new use cases for Filecoin, IPFS, libp2p, giving talks at local
      meetups, organizing workshops, introducing new collaborators, and much
      more.
    items:
      - buttonLabel: Tier 1
        buttonLabelSub: (Cadet)
        headline: NEW MEMBERS
        body: >
          will join the Orbit Community Program as a Cadet. In this role, you
          will become an active participant in the community and meet other
          Orbit Community Members. As a Cadet, you will be helping us amplify
          Filecoin news and official announcements via social media channels,
          join local meetups, and expand your knowledge about Filecoin, IPFS,
          and libp2p.
      - buttonLabel: Tier 2
        buttonLabelSub: (Ensign)
        headline: YOU CAN TAKE ON THE ENSIGN ROLE
        body: >
          once you become an active contributor to the Orbit Community and have
          a working knowledge of Filecoin, IPFS, and libp2p. Ensigns will focus
          on supporting local community growth, joining meetups, giving talks at
          local events, helping community members organize events, and creating
          content.
      - buttonLabel: Tier 3
        buttonLabelSub: (Lieutenant)
        headline: EARNING YOUR LIEUTENANT ROLE
        body: >
          ensures you are knowledgeable about Filecoin, IPFS, and libp2p, and
          make impactful contributions to the community. As a Lieutenant, you’ll
          help Captains grow the local community, organize local meetups,
          participate as a speaker at different events, and create unique
          content pieces (videos, blogs, podcasts). You could also initiate your
          own meetup group, helping our community to unlock presence in the new
          regions.
      - buttonLabel: Tier 4
        buttonLabelSub: (Captain)
        headline: AS A CAPTAIN YOU WILL
        body: >
          manage the local community, implement necessary changes to the program
          and help scale it. You will also run multiple local events alongside
          speaking at these events and hosting workshops. You will become a
          mentor and a leader to Cadets, Ensigns, and Lieutenants while
          representing Filecoin Ecosystem at public conferences.
    _template: modals
  - style:
      minHeight: min-h-0
      fullWidth: true
      padding: pt-10 pb-5 pr-10 pl-10
    background:
      fillStyles: bg-accent1
    markup: |-
      <div class="my-8 text-center">
            <img class="inline-block mr-12 animate-pulse" src="./img/bubble-arrow-down.svg">
            <img class="inline-block mr-12 animate-pulse" src="./img/bubble-arrow-down.svg">
            <img class="inline-block animate-pulse" src="./img/bubble-arrow-down.svg">
          </div>
    _template: embed
  - tailwind:
      section: p-20
      wrap: >-
        max-w-desktop-full mx-auto bg-accent1 text-lg rounded-3xl p-16 border-4
        border-accent2 shadow-xl shadow-glow
      imageWrap: ''
      image: ''
      contentWrap: ''
      content: ''
      label: ''
      headline: text-white text-2xl font-2 font-bold uppercase text-center mb-8
      subhead: ''
      text: text-white text-xl font-1 font-bold mb-8
      buttons: ''
    background:
      fillStyles: bg-accent1
    label: ''
    headline: BECOME A SPACESHIP (FOR BUSINESS ORGANIZATIONS)
    subhead: ''
    body: >
      As a business, you can become a Spaceship as a part of our Orbit Community
      Program who is interested in helping us grow the Community. As a
      Spaceship, you will be showcasing new use cases for Filecoin, IPFS, Libp2p
      participate, have the opportunity to speak at and sponsor conferences at a
      high level, introduce new collaborators, and so much more.
    _template: tailwindFeature
  - background:
      fillStyles: bg-accent1
    marqueeText: Our Leaderboard
    _template: marquee
  - background:
      fillStyles: bg-gray-dark
      src: >-
        https://res.cloudinary.com/protocolai/image/upload/v1651180871/orbit-community/bluestars_lg0dxn.jpg
    headline: Active Members
    cardlabels:
      nameLabel: Name
      countryLabel: Country
      badgeLabel: Tier
    items:
      - name: Full Name
        twitter: Twitter Handle
        country: singapore
        badge: spaceship
      - name: Name
        twitter: Twitter
        country: us
        badge: cadet
      - name: Name
        twitter: Twitter
        country: us
        badge: cadet
    _template: leaderCards
  - style:
      minHeight: min-h-100
      fullWidth: true
      padding: pt-0 pb-0 pr-0 pl-0
    background:
      fillStyles: bg-accent1
    markup: |-
      <div class="p-0 flex">
        <div class="border-accent2 border-4 border-l-0 border-r-2 w-1/2">
          <div data-tf-widget="Dv6FWzlr" data-tf-iframe-props="title=Orbit - Cadet App" data-tf-medium="snippet" style="width:100%;height:400px;"></div>
          <script src="//embed.typeform.com/next/embed.js"></script>
        </div>
        <div class="border-accent2 border-4 border-r-0 border-l-2 w-1/2">
          <div data-tf-widget="XgSjcHyz" data-tf-iframe-props="title=Orbit - Spaceship App" data-tf-medium="snippet" style="width:100%;height:400px;"></div>
          <script src="//embed.typeform.com/next/embed.js"></script>
        </div>
      </div>
    navigationLabel: Apply Now
    _template: embed
  - background:
      fillStyles: bg-accent2
    marqueeText: Apply Here
    _template: marquee
meta:
  pageTitle: Microgen
  pageDescription: Make modern web 3.0 ready websites with a real-time visual editor.
---

