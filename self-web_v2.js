const app = document.getElementById('app');

//create canvas for animation use
// const canvas = document.querySelector('canvas');
// canvas.id = 'main-canvas';
// app.appendChild(canvas);

// create navbar
const navBar = document.createElement('div');
navBar.className = 'nav_bar';
navBar.innerHTML = `
    <ul class="nav_list">
        <li class="nav_content"><a href="https://github.com/Changyu123Chen" target="_blank">GitHub</a></li>
        <li class="nav_content">Phone: 226-201-2618</li>
        <li class="nav_content">Email: <a href="mailto:c536chen@uwaterloo.ca">c536chen@uwaterloo.ca</a></li>
        <li class="nav_content"><a href="resume.pdf" target="_blank">Resume</a></li>
        <li class="dropdown">
            <a href="#projects" class="nav_content">Projects</a>
            <div class="dropdown-content">
                <a href="#" onclick="alert('MirrorSelf page will update later')">MirrorSelf</a>
                <a href="#" onclick="alert('Crowdfunding page will update later')">Crowdfunding</a>
                <a href="https://transform-video-audio-to-transcript.vercel.app" target="_blank">TransformVideotoTranscript</a>
            </div>
        </li>
    </ul>
`;
app.appendChild(navBar);

// Create center information circle
const centerDiv = document.createElement('div');
centerDiv.className = 'center_circle';
centerDiv.innerHTML = `
  <div class="circle_content">
    <h1>CHANGYU CHEN</h1>
    <h2>Computer Engineering (4A)</h2>
    <h2>University of Waterloo</h2>
  </div>
`;
app.appendChild(centerDiv);

// Make .center_circle "run away" from the cursor when nearby
const centerCircleElement = document.querySelector('.center_circle');

// remove animation on interaction
function stopFloating() {
  centerCircleElement.style.animationName = 'gradientShift';
  centerCircleElement.style.animationDuration = '10s';
  centerCircleElement.style.animationIterationCount = 'infinite';
  centerCircleElement.style.animationTimingFunction = 'ease';
}

let mouseTimeout;

document.addEventListener('mousemove', (e) => {
  clearTimeout(mouseTimeout);

  stopFloating();
  const rect = centerCircleElement.getBoundingClientRect();
  const cx = rect.left + rect.width / 2;
  const cy = rect.top + rect.height / 2;

  const dx = cx - e.clientX;
  const dy = cy - e.clientY;
  const distance = Math.sqrt(dx * dx + dy * dy);

  const threshold = 400;
  if (distance < threshold) {
    const moveFactor = (threshold - distance) / threshold * 50;
    const moveX = (dx / distance) * moveFactor;
    const moveY = (dy / distance) * moveFactor;

    centerCircleElement.style.transform = `translate(calc(-50% + ${moveX}px), calc(-50% + ${moveY}px))`;
  } else {
    centerCircleElement.style.transform = 'translate(-50%, -50%)';
  }

  mouseTimeout = setTimeout(() => {
    centerCircleElement.style.animationName = 'floatUpDown, gradientShift';
    centerCircleElement.style.animationDuration = '3s, 10s';
    centerCircleElement.style.animationIterationCount = 'infinite, infinite';
    centerCircleElement.style.animationTimingFunction = 'ease-in-out, ease';
    centerCircleElement.style.transform = 'translate(-50%, -50%)';
  }, 2000);
});
