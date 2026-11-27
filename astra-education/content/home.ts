export const home = {
  hero: {
    eyebrow: 'Learn · Explore · Innovate · NEP 2020 and CBSE Kaushal Bodh',
    headlineLine1: 'Give your school the lab',
    headlineLine2: 'parents ask about first.',
    subheading:
      'Turn an existing computer room into a managed Coding, AI, Electronics and 3D design lab across Classes 1 to 9. Curriculum, kits, teaching support and upkeep built for CBSE, ASSEB Division I (formerly SEBA) and ICSE schools.',
    primaryCta: { label: 'Request a curriculum briefing', href: '/contact' },
  },

  labTracks: {
    sectionLabel: 'Inside an Astra technology lab',
    heading: 'A place to write code, work with real components and give an idea physical form.',
    pillars: [
      {
        icon: 'code' as const,
        title: 'Coding',
        description: 'Stories, games and apps built sequentially from visual logic to Python.',
        image: '/images/lab-coding-real.jpg',
        imageAlt: 'Student developer writing code across dual laptops inside a modern workspace',
      },
      {
        icon: 'ai' as const,
        title: 'Artificial intelligence',
        description: 'Patterns, data and models tested on live inputs in guided sessions.',
        image: '/images/lab-ai-real.jpg',
        imageAlt: 'Robotic hand interacting with a neural network computing diagram',
      },
      {
        icon: 'electronics' as const,
        title: 'Electronics',
        description: 'Circuits, switches and sensors wired and tested directly by hand.',
        image: '/images/lab-electronics-real.jpg',
        imageAlt: 'Student in protective glasses examining an electronic motherboard above a lab bench',
      },
      {
        icon: 'design3d' as const,
        title: '3D design',
        description: 'Sketches, CAD assemblies and physical prototypes prepared for fabrication.',
        image: '/images/lab-3d-real.jpg',
        imageAlt: '3D CAD design tablet beside a modern 3D printer station with printed prototype parts',
      },
    ],
    studentSkillsHeading: 'Skills students develop',
    studentSkills: [
      { icon: 'inquiry' as const, title: 'Inquiry', description: 'Frame a question' },
      { icon: 'design' as const, title: 'Design', description: 'Test an idea' },
      { icon: 'teamwork' as const, title: 'Teamwork', description: 'Refine it together' },
      { icon: 'communication' as const, title: 'Communication', description: 'Explain the result' },
    ],
    beyondTechnical: {
      label: 'Beyond technical skills',
      heading: 'A good design asks more than "Does it work?"',
      body: 'What will it cost? Who will use it? What could be reused? These questions bring financial literacy, ethics and environmental thinking into the lab.',
    },
  },

  videoShowcase: {
    sectionLabel: 'Inside the lab in motion',
    heading: 'From schematic sketch to working hardware inside one school period',
    body: 'Students work with physical sensors, microcontrollers, 3D printed enclosures, and live AI vision tools inside an existing school room.',
  },

  taglineReveal: {
    lines: [
      'An existing computer room',
      'can become a working technology lab',
      'across every week of the school year.',
    ],
  },

  schoolFit: {
    sectionLabel: 'How the lab fits into your school',
    heading: 'What Astra plans with your team',
    plans: [
      {
        icon: 'kits' as const,
        title: 'Lab kits and tools',
        description: 'Components for practical work delivered and organized for every batch.',
      },
      {
        icon: 'curriculum' as const,
        title: 'Structured curriculum',
        description: 'A progressive sequence across Classes 1 to 9 aligned to board goals.',
      },
      {
        icon: 'teaching' as const,
        title: 'Teaching support',
        description: 'Dedicated instructor roles and structured lesson preparation.',
      },
      {
        icon: 'upkeep' as const,
        title: 'Lab upkeep',
        description: 'Care, inventory storage and timely component replacements.',
      },
      {
        icon: 'assessment' as const,
        title: 'Student assessment',
        description: 'Hands on project builds, portfolios and structured student reflection.',
      },
      {
        icon: 'timetable' as const,
        title: 'Timetable planning',
        description: 'Weekly lab sessions scheduled cleanly inside the school timetable.',
      },
    ],
    beforeFirstSessionHeading: 'Before the first session',
    planningTable: [
      {
        decision: 'Learning space',
        schoolIdentifies: 'Room, computers and storage',
        astraPlans: 'Equipment and materials',
      },
      {
        decision: 'Teaching time',
        schoolIdentifies: 'Classes and available periods',
        astraPlans: 'Lesson sequence and pacing',
      },
      {
        decision: 'People',
        schoolIdentifies: 'School coordinator',
        astraPlans: 'Teaching and support roles',
      },
    ],
    startingPoint: {
      heading: 'A starting point for the conversation',
      body: 'An existing computer room can be the starting point. Together we can review what the school already has and what the first sessions would need.',
    },
  },

  roadmap: {
    sectionLabel: 'Where the lab can go next',
    heading: 'A five year direction for partner schools',
    subheading:
      'Later tracks are introduced gradually as students build foundations and school facilities are ready.',
    years: [
      {
        year: 'Year 01',
        icon: 'foundations' as const,
        title: 'Technology foundations',
        description: 'Coding, AI, basic electronics and 3D design.',
      },
      {
        year: 'Year 02',
        icon: 'robotics' as const,
        title: 'Robotics and 3D printing',
        description: 'Mechanisms, control and digital fabrication.',
      },
      {
        year: 'Year 03',
        icon: 'iot' as const,
        title: 'Connected devices',
        description: 'Internet of Things, digital safety and enterprise.',
      },
      {
        year: 'Year 04',
        icon: 'immersive' as const,
        title: 'Immersive technology and flight',
        description: 'AR, VR, aerodynamics and drones.',
      },
      {
        year: 'Year 05',
        icon: 'space' as const,
        title: 'Space and astronomy',
        description: 'Observation, investigation and independent projects.',
      },
    ],
    alignments: [
      {
        title: 'National Education Policy 2020',
        body: 'Building and testing models develops practical understanding (§4.6). Middle Stage coding develops computational thinking by breaking problems into steps (§4.25).',
      },
      {
        title: 'CBSE Kaushal Bodh',
        body: 'Electronics and fabrication support practical work with machines and materials in Classes 6 to 8, tailored for CBSE, ASSEB Division I (formerly SEBA) and ICSE schools.',
      },
    ],
  },

  leadership: {
    sectionLabel: 'Leadership and academic guidance',
    heading: 'Built by engineers from Assam Engineering College',
    body: 'Founded in Dibrugarh by graduates who know Assam classrooms firsthand, with academic standards reviewed in collaboration with faculty at Assam Engineering College.',
  },

  faq: {
    sectionLabel: 'Common questions',
    heading: 'Answers for principals, coordinators and parents',
    items: [
      {
        question: 'Can we start using an existing computer room?',
        answer:
          'Yes. An existing computer room with storage is a practical starting point. During our first review we look at what your school already has and map out the exact kits and materials needed.',
      },
      {
        question: 'Which school boards is the curriculum designed for?',
        answer:
          'The curriculum aligns with National Education Policy 2020 (§4.6 and §4.25) and CBSE Kaushal Bodh (Classes 6 to 8), and is built for CBSE, ASSEB Division I (formerly SEBA) and ICSE schools.',
      },
      {
        question: 'What does the school identify versus what Astra plans?',
        answer:
          'Your school identifies the room, computers, storage, available class periods, and a school coordinator. Astra plans equipment, materials, lesson pacing, instructor roles, upkeep, and assessment.',
      },
      {
        question: 'What happens in Year 01 compared to later years?',
        answer:
          'Year 01 establishes Technology foundations across Coding, AI, basic electronics, and 3D design. Subsequent years expand into Robotics and 3D printing, Connected devices, Immersive technology and flight, and Space and astronomy as readiness grows.',
      },
      {
        question: 'How are lab upkeep and replacements handled?',
        answer:
          'Astra plans care, storage organization, and replacements for lab kits and components so teachers do not lose instructional time troubleshooting damaged parts.',
      },
      {
        question: 'What is included in a 2027 to 2028 curriculum briefing?',
        answer:
          'We walk school leadership through the class wise sequence for Classes 1 to 9, assess existing room and timetable readiness, and outline instructor and hardware support.',
      },
    ],
  },

  contactCta: {
    sectionLabel: 'School partnerships · 2027 to 2028',
    heading: 'Request a curriculum briefing',
    subtext:
      'Review the class wise curriculum with Astra and plan for your rooms, staffing and timetable.',
    guarantee: 'Zero obligation briefing · Existing computer room assessment included',
    button: { label: 'Request a curriculum briefing', href: '/contact' },
  },
};
