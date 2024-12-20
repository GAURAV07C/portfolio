const fs = require('fs');
const path = require('path');

const colors = [
  ['#4c1d95', '#8b5cf6'], // Purple
  ['#1d4ed8', '#60a5fa'], // Blue
  ['#047857', '#34d399'], // Green
];

function generateProjectSVG(title, colors) {
  return `<svg width="1200" height="675" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:${colors[0]};stop-opacity:1" />
        <stop offset="100%" style="stop-color:${colors[1]};stop-opacity:1" />
      </linearGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#grad)"/>
    <text
      x="50%"
      y="50%"
      font-family="system-ui, -apple-system, sans-serif"
      font-size="48"
      font-weight="bold"
      fill="white"
      text-anchor="middle"
      dominant-baseline="middle"
    >${title}</text>
  </svg>`;
}

function generateResumePreviewSVG() {
  return `<svg width="800" height="1132" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="headerGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style="stop-color:#4c1d95;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#8b5cf6;stop-opacity:1" />
      </linearGradient>
    </defs>
    <rect width="800" height="1132" fill="#ffffff"/>
    <rect width="800" height="200" fill="url(#headerGrad)"/>
    <text x="40" y="100" font-family="system-ui" font-size="36" font-weight="bold" fill="white">Gaurav Chaudhary</text>
    <text x="40" y="140" font-family="system-ui" font-size="20" fill="white">Full Stack Developer</text>
    
    <!-- Content Placeholder -->
    <rect x="40" y="240" width="720" height="24" fill="#e5e7eb" rx="4"/>
    <rect x="40" y="280" width="680" height="24" fill="#e5e7eb" rx="4"/>
    <rect x="40" y="320" width="700" height="24" fill="#e5e7eb" rx="4"/>
    
    <!-- Skills Section -->
    <text x="40" y="400" font-family="system-ui" font-size="24" font-weight="bold" fill="#1f2937">Skills</text>
    <rect x="40" y="420" width="720" height="2" fill="#e5e7eb"/>
    <rect x="40" y="440" width="200" height="32" fill="#f3f4f6" rx="4"/>
    <rect x="260" y="440" width="200" height="32" fill="#f3f4f6" rx="4"/>
    <rect x="480" y="440" width="200" height="32" fill="#f3f4f6" rx="4"/>
    
    <!-- Experience Section -->
    <text x="40" y="520" font-family="system-ui" font-size="24" font-weight="bold" fill="#1f2937">Experience</text>
    <rect x="40" y="540" width="720" height="2" fill="#e5e7eb"/>
    <rect x="40" y="560" width="720" height="100" fill="#f3f4f6" rx="4"/>
    <rect x="40" y="680" width="720" height="100" fill="#f3f4f6" rx="4"/>
    
    <!-- Education Section -->
    <text x="40" y="840" font-family="system-ui" font-size="24" font-weight="bold" fill="#1f2937">Education</text>
    <rect x="40" y="860" width="720" height="2" fill="#e5e7eb"/>
    <rect x="40" y="880" width="720" height="80" fill="#f3f4f6" rx="4"/>
  </svg>`;
}

// Create directories if they don't exist
const publicDir = path.join(__dirname, '../public');
const projectsDir = path.join(publicDir, 'projects');

[publicDir, projectsDir].forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// Generate project preview images
const projects = [
  { name: 'threads', title: 'Threads Clone' },
  { name: 'portfolio', title: 'Portfolio Website' },
  { name: 'task-manager', title: 'Task Manager' },
];

projects.forEach((project, index) => {
  const svg = generateProjectSVG(project.title, colors[index]);
  fs.writeFileSync(
    path.join(projectsDir, `${project.name}.svg`),
    svg
  );
});

// Generate resume preview
fs.writeFileSync(
  path.join(publicDir, 'resume-preview.svg'),
  generateResumePreviewSVG()
);

console.log('All preview images generated successfully!'); 