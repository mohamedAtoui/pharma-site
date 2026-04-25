export type Language = "fr" | "en"

const fr = {
  nav: {
    products: "Produits",
    contact: "Contact",
    backToHome: "Retour à l'accueil",
  },
  hero: {
    subtitle: "Solutions pharmaceutiques innovantes pour votre santé et votre bien-être",
    underConstruction: "Site Web en Construction",
    viewProducts: "Voir les produits",
    contactUs: "Nous contacter",
  },
  products: {
    badge: "Nos produits",
    heading: "Découvrez nos solutions",
    subheading:
      "Produits pharmaceutiques de qualité conçus pour soutenir votre santé et votre bien-être cognitif.",
    dietarySupplement: "Complément alimentaire",
    synapgenBlurb:
      "Votre allié pour une mémoire plus claire et une meilleure concentration. Soutient la mémoire, la concentration et les fonctions cognitives grâce au Magnésium L-Thréonate.",
    features: [
      "Soutient la fonction mémorielle",
      "Améliore la concentration",
      "Contient du Magnésium L-Thréonate",
    ],
    learnMore: "En savoir plus",
  },
  contact: {
    badge: "Contact",
    heading: "Contactez-nous",
    subheading:
      "Notre équipe est à votre disposition pour répondre à vos questions et accompagner vos projets.",
    infoHeading: "Informations de contact",
    emailLabel: "E-mail",
    phoneLabel: "Téléphone",
    hours: "Dim – Jeu : 9h00 – 18h00",
  },
  form: {
    heading: "Envoyez-nous un message",
    nameLabel: "Nom complet",
    namePlaceholder: "Votre nom",
    emailLabel: "E-mail",
    emailPlaceholder: "vous@exemple.com",
    subjectLabel: "Sujet",
    subjectPlaceholder: "Sujet de votre message",
    messageLabel: "Message",
    messagePlaceholder: "Décrivez votre demande en détail...",
    submit: "Envoyer le message",
    submitting: "Envoi en cours...",
    successTitle: "Message envoyé avec succès !",
    successBody: "Nous vous répondrons dans les plus brefs délais.",
  },
  synapgen: {
    badgeFr: "Complément Alimentaire",
    badgeEn: "Dietary Supplement",
    tagline: "par HandSon",
    heading: "Synapgen – Une approche scientifique ciblée de la mémoire",
    paragraphs: [
      "Synapgen est un complément alimentaire innovant conçu pour agir directement au niveau cérébral et soutenir durablement les fonctions cognitives.",
      "Sa formule repose sur une technologie avancée permettant une action ciblée sur les mécanismes neuronaux impliqués dans la mémoire et la concentration. Contrairement aux approches classiques, Synapgen se distingue par sa capacité à intervenir au cœur des processus cognitifs.",
      "Des études scientifiques, incluant des essais cliniques randomisés en double aveugle, ont mis en évidence une amélioration significative des performances mnésiques ainsi que des fonctions cognitives globales après supplémentation.",
      "Les données expérimentales montrent également un effet positif sur la plasticité synaptique, un élément clé dans les processus d'apprentissage et de mémorisation.",
    ],
    benefitsHeading: "Bénéfices observés (BH) :",
    benefits: [
      "Amélioration de la mémoire",
      "Meilleure concentration",
      "Optimisation des performances cognitives",
      "Soutien des fonctions cérébrales",
    ],
    capsules: "60 gélules",
    dosage: "3 gélules / jour",
    availabilityHeading: "Disponibilité",
    availabilityBody:
      "Synapgen est disponible auprès des principaux grossistes pharmaceutiques. Pour toute demande de référencement, d'approvisionnement ou d'informations commerciales, notre équipe reste à votre disposition afin de vous accompagner dans l'intégration du produit au sein de votre officine.",
    telLabel: "Tél",
    telValue: "+213 664117011",
    emailLabel: "E-mail",
    emailValue: "sarl.handson@gmail.com",
  },
  footer: {
    tagline: "Solutions pharmaceutiques innovantes",
    rights: "Tous droits réservés",
  },
  toggle: {
    ariaLabel: "Changer de langue / Change language",
    fr: "FR",
    en: "EN",
  },
}

const en: typeof fr = {
  nav: {
    products: "Products",
    contact: "Contact",
    backToHome: "Back to Home",
  },
  hero: {
    subtitle: "Innovative pharmaceutical solutions for your health and well-being",
    underConstruction: "Website Under Construction",
    viewProducts: "View Products",
    contactUs: "Contact Us",
  },
  products: {
    badge: "Our Products",
    heading: "Discover Our Solutions",
    subheading:
      "Quality pharmaceutical products designed to support your health and cognitive well-being.",
    dietarySupplement: "Dietary Supplement",
    synapgenBlurb:
      "Your ally for clearer memory and better focus. Supports memory, concentration and cognitive functions with Magnesium L-Threonate.",
    features: [
      "Supports memory function",
      "Enhances concentration",
      "Contains Magnesium L-Threonate",
    ],
    learnMore: "Learn More",
  },
  contact: {
    badge: "Contact",
    heading: "Get In Touch",
    subheading:
      "Our team is at your disposal to answer your questions and support your projects.",
    infoHeading: "Contact Information",
    emailLabel: "Email",
    phoneLabel: "Phone",
    hours: "Sun – Thu: 9:00 AM – 6:00 PM",
  },
  form: {
    heading: "Send us a message",
    nameLabel: "Full Name",
    namePlaceholder: "Your name",
    emailLabel: "Email",
    emailPlaceholder: "your@email.com",
    subjectLabel: "Subject",
    subjectPlaceholder: "Subject of your message",
    messageLabel: "Message",
    messagePlaceholder: "Describe your request in detail...",
    submit: "Send Message",
    submitting: "Sending...",
    successTitle: "Message sent successfully!",
    successBody: "We will respond as soon as possible.",
  },
  synapgen: {
    badgeFr: "Complément Alimentaire",
    badgeEn: "Dietary Supplement",
    tagline: "by HandSon",
    heading: "Synapgen – A targeted scientific approach to memory",
    paragraphs: [
      "Synapgen is an innovative dietary supplement designed to act directly at the brain level and provide sustained support for cognitive functions.",
      "Its formula is based on advanced technology enabling targeted action on the neuronal mechanisms involved in memory and concentration. Unlike conventional approaches, Synapgen stands out for its ability to intervene at the heart of cognitive processes.",
      "Scientific studies, including randomized double-blind clinical trials, have demonstrated a significant improvement in memory performance as well as overall cognitive function following supplementation.",
      "Experimental data also show a positive effect on synaptic plasticity, a key factor in learning and memorization processes.",
    ],
    benefitsHeading: "Observed benefits:",
    benefits: [
      "Improved memory",
      "Enhanced concentration",
      "Optimized cognitive performance",
      "Support for brain functions",
    ],
    capsules: "60 capsules",
    dosage: "3 capsules / day",
    availabilityHeading: "Availability",
    availabilityBody:
      "Synapgen is available from major pharmaceutical wholesalers. For any listing requests, supply inquiries, or commercial information, our team remains at your disposal to support the integration of the product into your pharmacy.",
    telLabel: "Tel",
    telValue: "+213 664117011",
    emailLabel: "Email",
    emailValue: "sarl.handson@gmail.com",
  },
  footer: {
    tagline: "Innovative pharmaceutical solutions",
    rights: "All rights reserved",
  },
  toggle: {
    ariaLabel: "Changer de langue / Change language",
    fr: "FR",
    en: "EN",
  },
}

export const translations: Record<Language, typeof fr> = { fr, en }

export type Translations = typeof fr
