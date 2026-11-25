// High Fidelity clerk integration helper
const clerkStates = {
  idle: 'assets/characters/clerk/idle.png',
  perfect: 'assets/characters/clerk/perfect.png',
  groove: 'assets/characters/clerk/groove.png',
  rare: 'assets/characters/clerk/rare.png',
  nervous: 'assets/characters/clerk/nervous.png',
  panic: 'assets/characters/clerk/panic.png'
};

const clerkImages = Object.fromEntries(
  Object.entries(clerkStates).map(([key, src]) => {
    const img = new Image();
    img.src = src;
    return [key, img];
  })
);

let clerkState = 'idle';
let clerkUntil = 0;

function triggerClerk(state, duration = 0.8) {
  clerkState = state;
  clerkUntil = t + duration;
}

function updateClerkState() {
  if (mode !== 'play') return;
  if (t < clerkUntil) return;
  if (stability < 0.18) clerkState = 'panic';
  else if (stability < 0.34) clerkState = 'nervous';
  else if (grooveLeft > 0) clerkState = 'groove';
  else if (moving && rareIds && rareIds.has(moving.id)) clerkState = 'rare';
  else clerkState = 'idle';
}

function drawClerk() {
  const img = clerkImages[clerkState] || clerkImages.idle;
  if (!img || !img.complete || !img.naturalWidth) return;
  const targetH = Math.min(H * 0.42, 520);
  const scaleChar = targetH / img.naturalHeight;
  const dw = img.naturalWidth * scaleChar;
  const dh = img.naturalHeight * scaleChar;
  const x = W - dw - 24;
  const y = H - dh - 8;
  g.drawImage(img, x, y, dw, dh);
}

// call triggerClerk('perfect') on perfect drop
// call triggerClerk('groove', 1.2) when groove activates
// call triggerClerk('rare', 1.0) when rare pressing appears or lands
// call updateClerkState() in your frame loop before drawClerk()
