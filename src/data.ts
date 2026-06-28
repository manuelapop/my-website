// ---------------------------------------------------------------------------
// Single source of truth for all portfolio content.
// Edit values here to update the site — no component changes needed.
// ---------------------------------------------------------------------------

export const profile = {
  name: 'Manuela A. Pop',
  // Shown under the name in the hero
  title: 'AI Software Engineer',
  location: 'Beaverton, OR',
  email: 'manuela.pop.am@gmail.com',
  phone: '971-487-2147',
  // GitHub username used to build the profile link.
  github: 'manuelapop',
  linkedin: 'https://www.linkedin.com/in/manuela-anne-marie-pop-096146a4',
  resumePath: '/Manuela_Pop_Resume.pdf',
  summary:
    'Experienced software engineer building AI-enabled systems — retrieval-augmented generation, agentic workflows, LLM tool integration, ML pipelines, and optimization systems. I combine 15+ years of platform engineering leadership with current graduate work in artificial intelligence to deliver scalable, production-oriented AI applications.',
  // Short punchy lines that rotate / display in the hero
  taglines: [
    'Retrieval-Augmented Generation',
    'Agentic AI Workflows',
    'LLM Tool Integration',
    'ML Pipelines & Optimization',
  ],
} as const

export const githubUrl = `https://github.com/${profile.github}`

// ---------------------------------------------------------------------------
// AI Projects & Research — the centerpiece of the site
// ---------------------------------------------------------------------------

export type ProjectLink = {
  label: string
  url: string
  // 'github' | 'demo' | 'paper' — used to pick an icon
  kind?: 'github' | 'demo' | 'paper'
}

export type Project = {
  title: string
  blurb: string
  tags: string[]
  highlight?: string
  links?: ProjectLink[]
  // Raw URL to a Rerun .rrd recording; opens the interactive viewer in a new tab.
  rerunRrd?: string
  // Result images shown in an in-page gallery modal.
  gallery?: { src: string; caption: string }[]
}

// Rerun web viewer version (must match the SDK that wrote the .rrd recordings).
export const RERUN_VERSION = '0.33.0'

export const aiProjects: Project[] = [
  {
    title: 'Optimization Research — UT Austin',
    blurb:
      'Built optimization workflows for the Living and Working with Robots Lab, training and tuning neural networks at scale with reproducible experiment tracking. The interactive demo shows a Rerun visualization of human motion-prediction evaluation.',
    tags: ['PyTorch', 'Optuna', 'Ray Tune', 'Hydra', 'Rerun'],
    highlight: 'Research',
    rerunRrd:
      'https://raw.githubusercontent.com/manuelapop/my-website/main/public/rerun/eval_viz_darko_test.rrd',
    gallery: [
      {
        src: '/research/ade_trajectory_percentile_plot.png',
        caption:
          'ADE (Average Displacement Error) by prediction horizon — 5th/50th/95th percentile trajectories.',
      },
      {
        src: '/research/fde_trajectory_percentile_plot.png',
        caption:
          'FDE (Final Displacement Error) by prediction horizon — 5th/50th/95th percentile trajectories.',
      },
      {
        src: '/research/ade_pose_percentile_plot.png',
        caption: 'ADE per-pose error percentiles across the prediction horizon.',
      },
      {
        src: '/research/fde_pose_percentile_plot.png',
        caption: 'FDE per-pose error percentiles across the prediction horizon.',
      },
    ],
  },
  {
    title: 'Retrieval-Augmented Generation Chat System',
    blurb:
      'An AI chat system that answers questions over a document set using semantic retrieval, document chunking, embeddings, FAISS vector search, and Hugging Face models.',
    tags: ['RAG', 'Embeddings', 'FAISS', 'Hugging Face', 'NLP'],
    highlight: 'LLM / GenAI',
    links: [
      { label: 'Live Demo', url: 'https://huggingface.co/spaces/manupop99/rag-chat', kind: 'demo' },
      { label: 'Code', url: 'https://github.com/manuelapop/RAG-chat', kind: 'github' },
    ],
  },
  {
    title: 'Hospital Flow AI Agent',
    blurb:
      'An agent-based AI system that predicts ICU escalation risk and optimizes patient flow using structured clinical data.',
    tags: ['Agentic AI', 'Prediction', 'Healthcare', 'Python'],
    highlight: 'Agents',
    links: [
      {
        label: 'Live Demo',
        url: 'https://huggingface.co/spaces/manupop99/hospital-flow-agent',
        kind: 'demo',
      },
      { label: 'Code', url: 'https://github.com/manuelapop/hospital-flow-agent', kind: 'github' },
    ],
  },
  {
    title: 'Health Indicator Prediction from Lifestyle & Biometric Data',
    blurb:
      'End-to-end machine learning pipeline predicting lifestyle-driven health outcomes. Trained a recurrent neural network and tree-based classifiers, built visualizations, and interpreted results. Peer-published on EngrXiv.',
    tags: ['RNN', 'Classification', 'Pandas', 'Published'],
    highlight: 'Published Research',
    links: [
      { label: 'Read Paper', url: 'https://engrxiv.org/preprint/view/6038/10000', kind: 'paper' },
    ],
  },
]

// ---------------------------------------------------------------------------
// Skills grouped by category
// ---------------------------------------------------------------------------

export const skillGroups: { label: string; skills: string[] }[] = [
  {
    label: 'LLM / GenAI',
    skills: [
      'Retrieval-Augmented Generation',
      'Agentic AI',
      'OpenAI APIs',
      'MCP',
      'Embeddings',
      'Vector Search',
      'Hugging Face',
      'LLM Tool Integration',
    ],
  },
  {
    label: 'Machine Learning',
    skills: [
      'PyTorch',
      'TensorFlow',
      'scikit-learn',
      'Reinforcement Learning',
      'Quantization',
      'Neural Networks',
      'Optuna',
      'Ray Tune',
      'Hydra',
    ],
  },
  {
    label: 'Data & Visualization',
    skills: [
      'Pandas',
      'Matplotlib',
      'Seaborn',
      'Databricks',
      'BigQuery',
      'SQL Server',
      'MongoDB',
    ],
  },
  {
    label: 'Programming',
    skills: [
      'Python',
      'JavaScript',
      'TypeScript',
      'React',
      'Redux',
      'Angular',
      'Node.js',
      'GraphQL',
      'C#',
      '.NET',
      'REST APIs',
    ],
  },
  {
    label: 'Cloud & Tooling',
    skills: [
      'AWS',
      'Google Cloud',
      'Kubernetes',
      'CI/CD',
      'Jest',
      'Cypress',
      'Storybook',
      'Material UI',
      'Cursor',
    ],
  },
]

// ---------------------------------------------------------------------------
// Professional experience
// ---------------------------------------------------------------------------

export type Job = {
  role: string
  company: string
  location?: string
  period: string
  points: string[]
  tech?: string[]
}

export const experience: Job[] = [
  {
    role: 'Senior Software Engineer II',
    company: 'Nike',
    location: 'Portland, OR',
    period: 'Apr 2022 – Present',
    points: [
      'Built a Figma automation pipeline that reduced content creation time by 80%, improving delivery speed and operational efficiency.',
      'Developed a JavaScript MCP client integrating LLM tools, internal APIs, and Databricks to enable AI-assisted workflows.',
      'Designed and implemented an AI analytics innovation project, training models to analyze production data.',
      'Led the server-driven storytelling project to revamp the Nike app, and mentored team members.',
    ],
    tech: ['React', 'TypeScript', 'GraphQL', 'Node.js', 'Java', 'AWS', 'Kubernetes', 'Cursor'],
  },
  {
    role: 'Full Stack Engineer',
    company: 'Formative',
    location: 'Remote',
    period: 'May 2021 – Mar 2022',
    points: [
      'Built features for startup education software with reusable UI components, improving user experience.',
    ],
    tech: ['React', 'Node.js', 'GraphQL', 'MongoDB'],
  },
  {
    role: 'UI/UX Developer Lead',
    company: 'KPA',
    location: 'Portland, OR',
    period: 'Nov 2019 – May 2021',
    points: [
      'Led frontend development for a compliance platform, delivering features that generated $1.7M in operational savings and driving modernization of a legacy application.',
    ],
    tech: ['Angular', 'TypeScript', 'C#', '.NET Core', 'SQL'],
  },
  {
    role: 'Senior C# Developer (Contract)',
    company: 'Daimler Trucks',
    location: 'Portland, OR',
    period: 'Mar 2018 – May 2019',
    points: [
      'Re-architected an enterprise application to improve performance, reliability, and platform stability.',
    ],
    tech: ['Angular', 'TypeScript', 'C#', '.NET Core', 'SQL'],
  },
  {
    role: 'Full Stack Software Engineer',
    company: 'OIA Global',
    location: 'Portland, OR',
    period: '2016 – 2017',
    points: [
      'Implemented features for packaging logistics software: orders, shipments, and tracking.',
    ],
    tech: ['C#', 'SQL', 'JavaScript'],
  },
  {
    role: 'Software Engineer',
    company: 'Corvel',
    location: 'Portland, OR',
    period: '2014 – 2015',
    points: ['Implemented functionality for a health claims provider platform.'],
    tech: ['C#', 'Angular', 'JavaScript', 'Web API', 'SQL'],
  },
  {
    role: 'Software Engineer',
    company: 'Solera / GTS Services',
    location: 'Portland, OR',
    period: '2011 – 2013',
    points: [
      'Implemented features for a glass software application: scheduling, vendor sourcing, and workflows.',
    ],
    tech: ['C#', 'JavaScript', '.NET', 'SQL'],
  },
]

// ---------------------------------------------------------------------------
// Education
// ---------------------------------------------------------------------------

export const education = [
  {
    degree: 'M.S. Artificial Intelligence',
    school: 'The University of Texas at Austin',
    period: 'Expected Dec 2026',
  },
  {
    degree: 'B.S. Computer Engineering',
    school: 'McGill University',
    period: '',
  },
]
