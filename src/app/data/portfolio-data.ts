import { PortfolioData } from '../interfaces/data-models';

// Sample data - replace with your own content
export const portfolioData: PortfolioData = {
  personalInfo: {
    firstName: 'Lucas',
    lastName: 'Bailly',
    title: 'Full Stack & C++ Developer',
    tagline: 'Concevoir des applications efficaces pour répondre à des besoins concrets.',
    bio: `Développeur full-stack passionné, je combine expertise en C++ et technologies web modernes comme Angular, Node.js et Symfony.
          En alternance chez Natixis, j’ai travaillé sur des projets exigeants, en C++ côté finance et sur des applications web robustes en parallèle.
          Ce que j’aime : partir d’un besoin concret, concevoir une solution claire, et livrer un code propre, efficace et maintenable.
          J’ai le goût du détail, le souci de l’expérience utilisateur et l’envie de progresser constamment. 
          Je suis actuellement à la recherche d'une nouvelle alternance pour continuer à développer mes compétences sur des projets concrets`,
    avatarUrl: 'https://www.bew-web-agency.fr/wp-content/uploads/2022/01/developpeur-web.jpg',
    resumeUrl: 'assets/files/Bailly_Lucas_CV.pdf',
    contactInfo: {
      email: 'baillylucas04@gmail.com',
      phone: '+33 06 61 68 38 41',
      address: 'Paris, France'
    },
    socialLinks: [
      {
        id: '1',
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/lucas-bailly-b1287b24a/',
        icon: 'linkedin'
      },
      {
        id: '2',
        name: 'GitHub',
        url: 'https://github.com/Lcs-93',
        icon: 'github'
      }
    ]
  },
  skills: [
    { id: '1', name: 'C', level: 100, category: 'Languages', icon: 'code', prefix: 'fas' },
    { id: '2', name: 'C++', level: 100, category: 'Languages', icon: 'code', prefix: 'fas' },
    { id: '3', name: 'PHP 8.2', level: 100, category: 'Backend', icon: 'php', prefix: 'fab' },
    { id: '4', name: 'JavaScript', level: 100, category: 'Languages', icon: 'js', prefix: 'fab' },
    { id: '5', name: 'HTML5', level: 100, category: 'Frontend', icon: 'html5', prefix: 'fab' },
    { id: '6', name: 'CSS3', level: 100, category: 'Frontend', icon: 'css3', prefix: 'fab' },
    { id: '7', name: 'Python', level: 100, category: 'Languages', icon: 'python', prefix: 'fab' },
    { id: '8', name: 'MySQL', level: 100, category: 'Database', icon: 'database', prefix: 'fas' },
    { id: '9', name: 'PhpMyAdmin', level: 100, category: 'Tools', icon: 'server', prefix: 'fas' },
    { id: '10', name: 'PL/SQL', level: 100, category: 'Database', icon: 'database', prefix: 'fas' },
    { id: '11', name: 'MariaDB', level: 100, category: 'Database', icon: 'database', prefix: 'fas' },
    { id: '12', name: 'Sequelize', level: 100, category: 'ORM', icon: 'code', prefix: 'fas' },
    { id: '13', name: 'NoSQL', level: 100, category: 'Database', icon: 'database', prefix: 'fas' },
    { id: '14', name: 'MongoDB', level: 100, category: 'Database', icon: 'leaf', prefix: 'fas' },
    { id: '15', name: 'XAMPP', level: 100, category: 'Tools', icon: 'server', prefix: 'fas' },
    { id: '16', name: 'Arduino IDE', level: 100, category: 'Embedded', icon: 'microchip', prefix: 'fas' },
    { id: '17', name: 'Node-RED', level: 100, category: 'IoT', icon: 'code', prefix: 'fas' },
    { id: '18', name: 'Qt Creator', level: 100, category: 'IDE', icon: 'code', prefix: 'fas' },
    { id: '19', name: 'Figma', level: 100, category: 'Design', icon: 'paint-brush', prefix: 'fas' },
    { id: '20', name: 'Next.js', level: 100, category: 'Frontend', icon: 'js', prefix: 'fab' },
    { id: '21', name: 'React', level: 100, category: 'Frontend', icon: 'react', prefix: 'fab' },
    { id: '22', name: 'Vite', level: 100, category: 'Tools', icon: 'bolt', prefix: 'fas' },
    { id: '23', name: 'Node.js', level: 100, category: 'Backend', icon: 'node-js', prefix: 'fab' },
    { id: '24', name: 'Symfony', level: 100, category: 'Backend', icon: 'code', prefix: 'fas' },
    { id: '25', name: 'UX/UI', level: 100, category: 'Design', icon: 'pencil-ruler', prefix: 'fas' },
    { id: '26', name: 'UML2', level: 100, category: 'Modeling', icon: 'sitemap', prefix: 'fas' },
    { id: '27', name: 'Docker', level: 100, category: 'DevOps', icon: 'docker', prefix: 'fab' },
    { id: '28', name: 'Git', level: 100, category: 'Tools', icon: 'git-alt', prefix: 'fab' },
    { id: '29', name: 'GitHub', level: 100, category: 'Tools', icon: 'github', prefix: 'fab' },
    { id: '30', name: 'Bitbucket', level: 100, category: 'Tools', icon: 'bitbucket', prefix: 'fab' },
    { id: '31', name: 'JIRA', level: 100, category: 'Tools', icon: 'tasks', prefix: 'fas' },
    { id: '32', name: 'Grafana', level: 100, category: 'Monitoring', icon: 'chart-line', prefix: 'fas' },
    { id: '33', name: 'Raspberry Pi', level: 100, category: 'Embedded', icon: 'microchip', prefix: 'fas' },
    { id: '34', name: 'API', level: 100, category: 'Backend', icon: 'plug', prefix: 'fas' },
    { id: '35', name: 'API REST', level: 100, category: 'Backend', icon: 'plug', prefix: 'fas' },
    { id: '36', name: 'Postman', level: 100, category: 'Tools', icon: 'paper-plane', prefix: 'fas' },
    { id: '37', name: 'CI/CD', level: 100, category: 'DevOps', icon: 'sync-alt', prefix: 'fas' },
    { id: '38', name: 'Dart', level: 100, category: 'Languages', icon: 'code', prefix: 'fas' },
    { id: '39', name: 'Flutter', level: 100, category: 'Frontend', icon: 'mobile-alt', prefix: 'fas' }
  ],
  projects: [
    {
      id: '1',
      title: 'Binance-Like',
      description: `J’ai développé une application fullstack en React reproduisant les principales fonctionnalités d’une plateforme de trading comme Binance.
                    L’utilisateur peut consulter les prix en temps réel des cryptos, simuler des ordres d’achat/vente, gérer un portefeuille virtuel, consulter l’historique de ses transactions, et accéder à un mini blog dédié à chaque crypto.
                    L’authentification sécurisée et la gestion des comptes sont également intégrées.
                    Ce projet m’a permis d’approfondir la gestion d’état, les appels API WebSocket, le design UX, et les bonnes pratiques côté frontend.`,
      shortDescription: 'Plateforme de trading simulée avec portefeuille virtuel, graphiques en temps réel et authentification sécurisée.',
      technologies: ['React', 'Chart.js', 'WebSockets', 'API', 'Tailwind'],
      imageUrl: 'https://www.presse-citron.net/app/uploads/2021/09/Binance-meilleur-exchange-crypto.jpg',
      projectUrl: null,
      githubUrl: 'https://github.com/Lcs-93/Binance-like',
      featured: true,
      category: 'Web Application',
      date: '2025/01',
      screenshots: [
  'assets/images/binance1.jpg',
  'assets/images/binance2.jpg',
  'assets/images/binance3.jpg',
  'assets/images/binance4.jpg',
  'assets/images/binance5.jpg',
  'assets/images/binance6.jpg',
  'assets/images/binance7.jpg',
  'assets/images/binance8.jpg',
  'assets/images/binance9.jpg'
],
    },
    {
      id: '2',
      title: 'Plateforme de Location de Véhicules',
      description: `J’ai conçu une application web complète pour la gestion d’une agence de location de véhicules. Elle permet aux administrateurs de gérer le parc automobile (ajout, modification, suppression, disponibilité), de consulter les réservations clients, et de superviser les retours. Les clients peuvent consulter les véhicules disponibles, effectuer une réservation, annuler ou modifier celle-ci, et laisser des avis.
L'application intègre une interface d’authentification avec rôles (admin/client), une interface utilisateur fluide avec un design responsive, et une gestion relationnelle des données via MariaDB. Ce projet m’a permis de mettre en pratique mes compétences fullstack (Node.js, EJS, MySQL) en suivant des principes de clarté et de modularité.`,
      shortDescription: 'Application web pour gérer la location de véhicules avec comptes client/admin, réservations et gestion de flotte.',
      technologies: ['Node.js', 'Express', 'EJS', 'MySQL', 'MariaDB', 'Bootstrap', 'JavaScript', 'CSS'],
      imageUrl: 'https://gitu.net/gituimg/free-psd-app-design/freebie-rental-car-app-light-dark-l6.jpg',
      projectUrl: null,
      githubUrl: 'https://github.com/Lcs-93/Location_2',
      featured: true,
      category: 'Web Application',
      date: '2025/02',
      screenshots: [
  'assets/images/car-rental1.jpg',
  'assets/images/car-rental2.jpg',
  'assets/images/car-rental3.jpg',
  'assets/images/car-rental4.jpg',
  'assets/images/car-rental5.jpg',
  'assets/images/car-rental6.jpg',
  'assets/images/car-rental7.jpg',
  'assets/images/car-rental8.jpg',
  'assets/images/car-rental9.jpg',
  'assets/images/car-rental10.jpg'
],
    },
    {
      id: '3',
      title: 'EdifisPro - Gestion des Chantiers et des Employers',
      description: `EdifisPro est une application web professionnelle conçue pour simplifier la gestion des chantiers et des employers en entreprise. Elle permet aux administrateurs de créer et planifier des chantiers, d’associer des employés à des projets spécifiques, et de suivre leur avancement. Les utilisateurs disposent d’un espace personnel leur indiquant les chantiers auxquels ils sont affectés. L'application offre une interface claire et intuitive, avec des rôles distincts pour les administrateurs et les utilisateurs. Un système d’authentification sécurisé garantit un accès adapté aux différents profils.`,
      shortDescription: 'Application web de gestion des chantiers et des stagiaires avec interface sécurisée et rôles distincts.',
      technologies: ['Symfony', 'PHP', 'Twig', 'Doctrine', 'MariaDB','Bootstrap'],
      imageUrl: 'https://m.infoentrepreneurs.org/fr/conseils-et-orientation/embauche-et-gestion-du-personnel/~/media/83014B4D6B354672AF60C19BE4226D1F.ashx',
      projectUrl: null,
      githubUrl: 'https://github.com/Lcs-93/EdifisPro',
      featured: true,
      category: 'Web Application',
      date: '2025/03',
      screenshots: [
  'assets/images/EdifisPro-1.jpg',
  'assets/images/EdifisPro-2.jpg',
  'assets/images/EdifisPro-3.jpg',
  'assets/images/EdifisPro-4.jpg',
  'assets/images/EdifisPro-5.jpg',
  'assets/images/EdifisPro-6.jpg',
  'assets/images/EdifisPro-7.jpg',
  'assets/images/EdifisPro-8.jpg',
  'assets/images/EdifisPro-9.jpg',
  'assets/images/EdifisPro-10.jpg',
  'assets/images/EdifisPro-11.jpg',
  'assets/images/EdifisPro-12.jpg'
],
    },
    {
      id: '4',
      title: 'Plateforme de location de véhicules',
      description: `J’ai développé une application web complète en Node.js et EJS permettant de gérer une ou plusieurs agences de location de véhicules. L’application offre une interface intuitive`,
      shortDescription: 'Application Node.js pour gérer des agences de location de véhicules avec authentification et tableau de bord.',
      technologies: ['Node.js', 'Express', 'EJS', 'MySQL2', 'bcrypt', 'express-session', 'method-override'],
      imageUrl: 'https://vonews.net/wp-content/uploads/2023/01/agence-de-location-de-voiture-scaled.jpg',
      projectUrl: null,
      githubUrl: 'https://github.com/Lcs-93/NodeAgencesLocations',
      featured: true,
      category: 'Web Application',
      date: '2025/04',
      screenshots: [
  'assets/images/Agences_Locations-1.jpg',
  'assets/images/Agences_Locations-2.jpg',
  'assets/images/Agences_Locations-3.jpg',
  'assets/images/Agences_Locations-4.jpg',
  'assets/images/Agences_Locations-5.jpg',
  'assets/images/Agences_Locations-6.jpg',
  'assets/images/Agences_Locations-7.jpg',
  'assets/images/Agences_Locations-8.jpg'
  ],
    },
  ],
  testimonials: [
    {
      id: '1',
      name: 'Sarah Johnson',
      role: 'Product Manager',
      company: 'TechCorp Inc.',
      content: `John delivered an exceptional product that exceeded our expectations. His attention to detail and commitment to quality made our collaboration a great success. I would highly recommend John for any web development project.`,
      imageUrl: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: '2',
      name: 'Michael Chen',
      role: 'CTO',
      company: 'Startup Ventures',
      content: `Working with John was a pleasure. He not only developed a high-quality application but also provided valuable insights that improved our product. His technical expertise and communication skills are outstanding.`,
      imageUrl: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: '3',
      name: 'Emily Rodriguez',
      role: 'Marketing Director',
      company: 'Creative Solutions',
      content: `John translated our vision into a beautiful, functional website that has significantly improved our online presence. His responsiveness and professionalism made the development process smooth and enjoyable.`,
      imageUrl: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
  ],
  experience: [
    {
      id: '1',
      title: 'Full Stack Developer/C++ Developer',
      company: 'Natixis',
      location: 'Paris, France',
      startDate: '2025-09',
      endDate: '2026-09',
      current: true,
      description: [
        'Participation au développement d’un moteur financier C++ utilisé en production par les traders.',
        'Conception d’une interface d’appel unique simplifiant les entrées/sorties de la bibliothèque principale.',
        'Développement d’une application web interne avec Angular',
        'Collaboration avec les équipes DevOps'
      ],
      technologies: ['C++', 'Angular', 'TypeScript', 'SCSS', 'Jira', 'Git','Dotnet','Bitbucket']
    },
    {
      id: '2',
      title: 'Technicien Informatique Stagiaire',
      company: 'Ramsay Health Care',
      location: 'Drancy, France',
      startDate: '2023-06',
      endDate: '2023-07',
      current: false,
      description: [
       'Assistance technique aux utilisateurs (postes, imprimantes, logiciels bureautiques, VPN).',
       'Installation, configuration et maintenance des postes de travail Windows et du matériel réseau.',
      'Gestion des tickets via un outil ITOP : résolution, suivi et documentation des incidents.',
    'Participation à des projets de migration et de déploiement de nouveaux outils.',
    'Rédaction de procédures techniques et contribution à la base de connaissances interne.'
      ],
       technologies: ['Windows 10/11', 'Active Directory', 'Office 365', 'GLPI', 'Teams', 'Imprimantes réseau']
    },
    {
      id: '3',
      title: 'Caissier Polyvalent',
      company: 'Cora',
      location: 'Paris, France',
      startDate: '2023-08',
      endDate: '2024-08',
      current: false,
      description: [
      'Accueil et encaissement des clients avec rapidité et précision.',
      'Gestion des litiges en caisse et assistance aux clients.',
      'Mise en rayon et vérification des stocks.',
      'Maintien de la propreté de l’espace de travail.'
      ],
    technologies: ['Caisse enregistreuse', 'TPE', 'Relation client']
      },
      {
      id: '4',
      title: 'Employé polyvalent',
      company: 'Lacoste',
      location: 'Paris, France',
      startDate: '2023-05',
      endDate: '2023-06',
      current: false,
      description: [
      'Réception, tri et mise en rayon des produits.',
      'Participation à l’inventaire et contrôle qualité des articles.',
      'Gestion du réassort et rangement de la réserve.',
      'Collaboration avec l’équipe de vente pour répondre aux besoins des clients.'
      ],
      technologies: ['PDA', 'ERP interne', 'Travail d’équipe']
      }


  ],
education: [
  {
    id: '1',
    degree: 'Bachelor Développeur Fullstack & DevOps',
    institution: 'IPSSI',
    location: 'Paris, France',
    startDate: '2024-09',
    endDate: '2025-09',
    description: 'Formation axée sur le développement web, DevOps, gestion de projet et cloud computing.'
  },
  {
    id: '2',
    degree: 'BTS Systèmes Numériques – option Informatique et Réseaux (CIEL)',
    institution: 'Lycée Le Corbusier',
    location: 'Aubervilliers, France',
    startDate: '2022-09',
    endDate: '2024-07',
    description: 'Étude des architectures réseau, programmation embarquée, cybersécurité et maintenance informatique.'
  }
]

};