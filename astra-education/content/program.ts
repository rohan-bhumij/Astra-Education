export const program = {
  hero: {
    heading: 'What we teach across Classes 1 to 9',
    subheading:
      'A structured curriculum spanning Coding, Artificial intelligence, Electronics and 3D design, aligned with NEP 2020 and CBSE Kaushal Bodh.',
  },

  juniorBand: {
    label: 'Junior band',
    title: 'Classes 1 to 5',
    subtitle: 'Foundation years focused on inquiry, visual logic, circuits and early 3D thinking.',
    classes: [
      {
        classLabel: 'Class 1 and 2',
        terms: [
          {
            term: 'Term 1',
            topic: 'Computational thinking',
            description: 'Patterns, sequencing, and framing questions through guided puzzles.',
          },
          {
            term: 'Term 2',
            topic: 'Scratch Jr visual coding',
            description: 'Stories, animations and interactive sequences using Scratch Jr.',
          },
          {
            term: 'Term 3',
            topic: 'LED circuits and switches',
            description: 'Practical circuits, physical switches, and simple paper to 3D shapes.',
          },
        ],
      },
      {
        classLabel: 'Class 3 and 4',
        terms: [
          {
            term: 'Term 1',
            topic: 'Algorithms in Scratch',
            description: 'Loops, conditionals, and structured algorithmic thinking in Scratch.',
          },
          {
            term: 'Term 2',
            topic: 'Interactive games',
            description: 'Designing multi stage interactive games and presenting results.',
          },
          {
            term: 'Term 3',
            topic: 'Sensors, buzzers and CAD sketches',
            description: 'Working with buzzers, basic sensors, and introductory 3D sketches.',
          },
        ],
      },
      {
        classLabel: 'Class 5',
        terms: [
          {
            term: 'Term 1',
            topic: 'Microcontroller introduction',
            description: 'Board setup, circuit safety, and first hardware programs.',
          },
          {
            term: 'Term 2',
            topic: 'Block to text coding',
            description: 'Transitioning from visual blocks to text logic and simple automation.',
          },
          {
            term: 'Term 3',
            topic: 'Prototype enclosure build',
            description: 'Sensor driven model paired with a student designed physical prototype.',
          },
        ],
      },
    ],
  },

  seniorBand: {
    label: 'Senior band',
    title: 'Classes 6 to 9',
    subtitle: 'Applied years aligned with NEP 2020 (§4.6, §4.25) and CBSE Kaushal Bodh for Classes 6 to 8.',
    classes: [
      {
        classLabel: 'Class 6',
        terms: [
          {
            term: 'Term 1',
            topic: 'Python fundamentals',
            description: 'Variables, input and output, and conditionals in first text programs.',
          },
          {
            term: 'Term 2',
            topic: 'Electronics and digital I/O',
            description: 'Controlling LEDs, switches, and serial readings on microcontrollers.',
          },
          {
            term: 'Term 3',
            topic: 'Automated system project',
            description: 'Students design, wire, test cost and reuse, and present a working build.',
          },
        ],
      },
      {
        classLabel: 'Class 7',
        terms: [
          {
            term: 'Term 1',
            topic: 'Python loops and functions',
            description: 'Reusable functions, iteration, and structured data in Python.',
          },
          {
            term: 'Term 2',
            topic: 'Sensors and CAD fabrication',
            description: 'Reading temperature, IR, and ultrasonic sensors with 3D CAD mounts.',
          },
          {
            term: 'Term 3',
            topic: 'Sensor controlled robot',
            description: 'Students assemble and program a mechanism guided by sensor feedback.',
          },
        ],
      },
      {
        classLabel: 'Class 8',
        terms: [
          {
            term: 'Term 1',
            topic: 'Python libraries and data',
            description: 'Working with Python libraries, data analysis, and applied scripts.',
          },
          {
            term: 'Term 2',
            topic: 'Mechanisms, CAD and control',
            description: '3D printed brackets, motor drivers, and pathfinding logic.',
          },
          {
            term: 'Term 3',
            topic: 'Autonomous hardware project',
            description: 'Programmable prototype built, tested, and defended by student teams.',
          },
        ],
      },
      {
        classLabel: 'Class 9',
        terms: [
          {
            term: 'Term 1',
            topic: 'Artificial intelligence fundamentals',
            description: 'Patterns, training data, model ethics, and responsible design questions.',
          },
          {
            term: 'Term 2',
            topic: 'Model training labs',
            description: 'Training classification and vision models on curated student datasets.',
          },
          {
            term: 'Term 3',
            topic: 'AI and physical hardware capstone',
            description: 'Final capstone combining trained AI models with circuits and 3D design.',
          },
        ],
      },
    ],
  },

  builds: {
    sectionLabel: 'What students build',
    heading: 'Every student leaves with tested work and clear reflection',
    items: [
      {
        number: '01',
        title: 'Software apps and games',
        description: 'Stories, interactive games, and Python applications written from scratch.',
      },
      {
        number: '02',
        title: 'Trained AI models',
        description: 'Pattern recognition and vision models trained and evaluated on real data.',
      },
      {
        number: '03',
        title: 'Wired electronics',
        description: 'Circuits, switches, and sensor rigs built, calibrated, and debugged by hand.',
      },
      {
        number: '04',
        title: '3D CAD prototypes',
        description: 'Sketches translated into parametric 3D designs and physical prototypes.',
      },
    ],
  },
};
