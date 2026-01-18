/**
 * Brutalist Portfolio - Minimal JavaScript
 * Only essential interactions
 */

document.addEventListener('DOMContentLoaded', () => {
  // Add subtle mouse parallax to data points
  const dataPoints = document.querySelectorAll('.data-point');

  document.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 10;
    const y = (e.clientY / window.innerHeight - 0.5) * 10;

    dataPoints.forEach((point) => {
      point.style.transform = `translate(calc(-50% + ${x}px), ${y}px)`;
    });
  });

  // Update system time in meta
  const updateTime = () => {
    const now = new Date();
    const timeStr = now.toLocaleTimeString('en-US', {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit'
    });
    const sysReady = document.querySelector('.bottom-data');
    if (sysReady) {
      sysReady.textContent = `SYS.ACTIVE ${timeStr}`;
    }
  };

  updateTime();
  setInterval(updateTime, 60000);
});
