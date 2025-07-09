document.addEventListener('DOMContentLoaded', () => {
    for (let i = 0; i < 40; i++) {
      const spark = document.createElement('div');
      spark.className = 'spark';
      spark.style.left = `${Math.random() * 100}%`;
      spark.style.animationDelay = `${Math.random() * 5}s`;
      document.body.appendChild(spark);
    }
  });
  
  const style = document.createElement('style');
  style.innerHTML = `
  .spark {
    position: fixed;
    top: -10px;
    width: 4px;
    height: 4px;
    background: #fffacd;
    border-radius: 50%;
    opacity: 0.8;
    animation: fall 5s linear infinite;
    pointer-events: none;
  }
  @keyframes fall {
    0% { transform: translateY(0); opacity: 1; }
    100% { transform: translateY(100vh); opacity: 0; }
  }
  `;
  document.head.appendChild(style);
  
  window.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('bg-audio');
  
    setTimeout(() => {
      audio.muted = false;  // unmute
      const playPromise = audio.play();
  
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.warn("Autoplay diblokir. Musik akan mulai setelah interaksi.");
        });
      }
    }, 500);
  });
  
  const audio = document.getElementById("bg-audio");

function enableAudio() {
  audio.play().catch(e => {
    console.warn("Autoplay diblokir, menunggu interaksi pengguna...");
  });
  document.removeEventListener("click", enableAudio);
  document.removeEventListener("touchstart", enableAudio);
  document.removeEventListener("keydown", enableAudio);
}

document.addEventListener("click", enableAudio);
document.addEventListener("touchstart", enableAudio);
document.addEventListener("keydown", enableAudio);
