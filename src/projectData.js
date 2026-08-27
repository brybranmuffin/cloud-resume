/* Portfolio entries, newest first.

   image:  filename in public/projects/. A missing file falls back to a styled
            placeholder rather than a broken image.
   fit:    'contain' for wide diagrams/strips that cropping would destroy.
   body:   paragraphs for the detail page at #/projects/<slug>.
   tools:  keys into src/icons.js; rendered as brand marks.
   models: named only, never given icons (a model isn't a product).
   links:  assets and destinations, listed at the foot of the detail page. */
export const PROJECTS = [
  {
    slug: 'congressional-record',
    title: 'The Congressional Record',
    year: '2026',
    tags: ['GPT-2', 'BERT', 'Sparse Autoencoders'],
    blurb:
      'A gpt2-medium model finetuned on 8M US House speeches, with prefix prompting and a hosted GUI. An interpretability layer rebuilds Evidence-Minus-Intuition scoring on BERT and GPT-2 embeddings using sparse autoencoders.',
    href: 'https://github.com/brybranmuffin/congressional_speech_generator',
    image: 'congressional-record.jpg',
    body: [
      'A gpt2-medium model finetuned on roughly 8 million non-procedural speeches delivered on the floor of the US House between 1879 and 2022. Zero-shot prefix prompting lets you generate speeches on any topic in the register of the last 150 years, served through a containerised FastAPI backend on Azure with a front end that exposes the prompt controls.',
      'The second half of the project is interpretability. Aroyehun et al. scored congressional speeches on an Evidence-Minus-Intuition axis using Word2Vec and a curated seed-word list. That approach has two weaknesses: word meanings drift over 145 years, and static embeddings carry no context. I rebuilt EMI on contextual embeddings, finetuning BERT and GPT-2 on the same corpus and training sparse autoencoders on their mean-pooled final-layer activations to pull monosemantic features out of otherwise polysemantic space.',
      'Raw pole vectors turned out to overlap almost completely (cosine 0.95 for BERT, 0.91 for GPT-2), so a mean feature representation is subtracted from each pole to separate them, dropping the pair to −0.64 and −0.13. Scored across 72 congressional sessions, the three methods agree at the level of individual speeches but diverge sharply over time: BERT and Word2Vec correlate at r = 0.53 speech-by-speech yet collapse to 0.03 session-by-session, which is the most interesting result in the project and still an open question.',
    ],
    tools: ['pytorch', 'huggingface', 'fastapi', 'docker', 'microsoftazure', 'python'],
    models: ['gpt2-medium', 'bert-base-uncased', 'Word2Vec', 'Sparse Autoencoder'],
    links: [
      { label: 'Speech generator', href: 'https://github.com/brybranmuffin/congressional_speech_generator', kind: 'repo' },
      { label: 'EMI analysis', href: 'https://github.com/brybranmuffin/text-generation-project', kind: 'repo' },
    ],
  },
  {
    slug: 'pokae-interpolator',
    title: 'PokAE Interpolator',
    year: '2026',
    tags: ['VAE', 'SLERP', 'Azure'],
    blurb:
      'A variational autoencoder trained on sprites for all 1,025 Pokémon. Spherical interpolation walks the latent space between any two species to fuse them, served live from a containerised FastAPI backend.',
    href: 'https://github.com/brybranmuffin/gen_ai_image_project',
    image: 'pokae-interpolation.png',
    fit: 'contain',
    body: [
      'A variational autoencoder trained on sprites for 1,024 of the 1,025 currently discovered Pokémon; Tyrunt was excluded because its source image was corrupt and unrecoverable. Pick any two species and the app encodes both into latent space, interpolates between them, and decodes the result into a new creature.',
      'Linear interpolation was the first approach and it blended poorly between distant species, cutting straight through the latent space rather than following it. Switching to spherical linear interpolation (travelling along the surface instead of through the middle) sharpened the fusions noticeably. Training plateaued around epoch 300 and never recovered; moving augmentation from offline pre-generation to sampling at training time didn’t shift it, which suggests the model had reached its capacity ceiling for a dataset this size.',
      'The inference backend runs as a containerised FastAPI service on Azure Container Apps, with the front end on Azure Static Web Apps. An earlier version sat behind Azure API Management, which worked but cost far more than the project warranted; exposing the container app directly lost nothing functionally, and instance caps handle abuse.',
    ],
    tools: ['pytorch', 'fastapi', 'docker', 'microsoftazure', 'react', 'numpy'],
    models: ['Variational Autoencoder', 'SLERP'],
    links: [
      { label: 'Live app', href: 'https://brave-water-0f1e3a510.7.azurestaticapps.net/', kind: 'live' },
      { label: 'Source', href: 'https://github.com/brybranmuffin/gen_ai_image_project', kind: 'repo' },
    ],
  },
  {
    slug: 'sigcse-ai-tutorial',
    title: 'Teaching AI with Snap!',
    year: '2026',
    tags: ['SIGCSE TS', 'Q-Learning', 'Curriculum'],
    blurb:
      'A hands-on SIGCSE 2026 tutorial introducing AI fundamentals through Snap!. I wrote and delivered the reinforcement learning strand: Q-learning from the update rule to a playable Mazeworld agent, pitched at high-school classrooms.',
    href: 'https://sigcse2026.sigcse.org/details/sigcse-ts-2026-tutorials/9/Tutorial-304-A-Hands-on-and-Interactive-Introduction-to-the-Fundamentals-of-Artifici',
    image: 'sigcse-qlearning.png',
    body: [
      'Tutorial 304 at SIGCSE TS 2026 is a three-hour hands-on introduction to AI fundamentals for computing educators, taught through Snap!. It is a ten-presenter session; my contribution was the reinforcement learning strand: the curriculum, the explanation, and the accompanying activity.',
      'The RL section builds from an intuition of an agent exploring for rewards up to the full Q-learning update rule, then works the arithmetic by hand across a three-cell Mazeworld until participants can see Q-values propagate backwards from the goal one move at a time. That temporal-difference behaviour is the thing worth internalising: the agent learns from every step, not only on reaching the terminal state, and the policy converges even when exploration is suboptimal.',
      'The pedagogical problem is that the full update rule carries five symbols, which is a lot to hold at once for a high-school audience. The material addresses this head-on by asking what happens when the learning rate and discount factor are both raised to 1: the expression collapses to Q(s, a) ← r + max Q(s′, a′), which is tractable for a first pass and still correct for simple environments. Participants then modify the exploration function and the update themselves in a live Trinket environment.',
    ],
    tools: ['python', 'github'],
    models: ['Q-Learning', 'K-Nearest Neighbors'],
    links: [
      { label: 'SIGCSE TS 2026 listing', href: 'https://sigcse2026.sigcse.org/details/sigcse-ts-2026-tutorials/9/Tutorial-304-A-Hands-on-and-Interactive-Introduction-to-the-Fundamentals-of-Artifici', kind: 'link' },
      { label: 'Mazeworld code (Trinket)', href: 'https://trinket.io/python/4484351cface?showInstructions=true', kind: 'link' },
      { label: 'Q-learning maze solver (Snap!)', href: 'https://snap.berkeley.edu/snap/snap.html#present:Username=bryantbett&ProjectName=RL%20Maze%20solver', kind: 'link' },
      { label: 'Nims Q-learning (Snap!)', href: 'https://snap.berkeley.edu/snap/snap.html#present:Username=bryantbett&ProjectName=Nims%20Q-Learning', kind: 'link' },
    ],
  },
  {
    slug: 'centroid-detection',
    title: 'Tumour Centroid Detection',
    year: '2026',
    tags: ['SCPM-Net', 'PyTorch', 'HPC'],
    blurb:
      'Anchor-free 3D detection of tumour centroids in thoracic CT. A ResNet-34 SCPM-Net trained on Northwestern’s Quest cluster, decoded with sphere NMS and a full-volume sliding-window heatmap. F1 0.746 at 0.80 precision.',
    // Repo is private, so the card and page deliberately have no destination.
    image: 'centroid-pipeline.png',
    fit: 'contain',
    body: [
      'Anchor-free 3D detection of tumour centroids in thoracic CT volumes, built on SCPM-Net (Luo et al., Medical Image Analysis 2022) with a ResNet-34 backbone and a feature pyramid. Rather than classifying voxels or regressing boxes, the network predicts centre points directly, which suits the problem, since clinicians care where a lesion is, not its precise extent.',
      'The pipeline starts by reading paired CT and segmentation NIfTI files, extracting centroid coordinates and radii in millimetres, and writing a manifest that every downstream script consumes. No resampling or copying happens at this stage; the manifest holds absolute paths. Training runs on Northwestern’s Quest cluster over 96³ patches, monitored live through Weights & Biases, with a SLURM wrapper that captures a datestamp at submission so log filenames map back to specific runs.',
      'Evaluation happens two ways. A threshold sweep over held-out validation patches decodes predictions via sphere NMS and matches them to ground truth, finding the operating point: best F1 of 0.746 at t = 0.30, sensitivity 0.698, precision 0.803. Full-volume inference then tiles an entire scan with a sliding window, builds a float32 score map, smooths it to remove upsampling grid artefacts, thresholds it, and takes score-weighted centroids of the surviving connected components.',
    ],
    tools: ['pytorch', 'lightning', 'weightsandbiases', 'numpy', 'scipy', 'python'],
    models: ['SCPM-Net', 'ResNet-34', 'Feature Pyramid Network'],
    links: [],
  },
]

export const bySlug = (slug) => PROJECTS.find((p) => p.slug === slug)
