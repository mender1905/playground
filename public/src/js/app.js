import { generateSystemPrompt } from './modules/prompt.js';

const state = {
  currentStep: 1,
  activeMat: true,
  activeHus: false,
  activeCustom: false
};

document.addEventListener('DOMContentLoaded', () => {
  console.log("🚀 MyAgents Frontend Initialized");
  
  // Enkel stegnavigering
  const nextBtns = document.querySelectorAll('.btn-next[data-next]');
  const backBtns = document.querySelectorAll('.btn-back[data-next]');

  function showStep(stepNum) {
    document.querySelectorAll('.step-content').forEach(el => el.classList.remove('active'));
    const target = document.getElementById(`step-${stepNum}`);
    if (target) target.classList.add('active');

    // Uppdatera preview om vi når steg 4
    if (parseInt(stepNum) === 4) {
      const preview = document.getElementById('prompt-preview');
      if (preview) preview.innerText = generateSystemPrompt(state);
    }
  }

  nextBtns.forEach(btn => {
    btn.addEventListener('click', () => showStep(btn.getAttribute('data-next')));
  });

  backBtns.forEach(btn => {
    btn.addEventListener('click', () => showStep(btn.getAttribute('data-next')));
  });
});
