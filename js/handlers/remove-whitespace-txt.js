// copy-code-handler.js

function initCopyCodeListener() {
  document.addEventListener('keydown', (e) => {
    const active = document.activeElement;
    const isCopyCode = active?.classList?.contains('copy-code');
    const isCopyCombo = (e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'c';

    if (isCopyCombo && isCopyCode) {
      e.preventDefault();
      const cleanText = active.textContent
        .split('\n')
        .map(line => line.trimStart())
        .join('\n')
        .trim();

      navigator.clipboard.writeText(cleanText).then(() => {
        console.log("Code copied cleanly");
      }).catch(err => {
        console.error("Copy failed:", err);
      });
    }
  });
}

// Optional: auto-run on page load
document.addEventListener('DOMContentLoaded', initCopyCodeListener);
