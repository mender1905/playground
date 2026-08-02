export function generateSystemPrompt(state) {
  let promptText = `SYSTEM PROMPT: Autonom Agent v1.0\n`;
  promptText += `------------------------------------\n`;
  promptText += `Du är en autonom AI-agent som agerar målinriktat utifrån nedanstående systeminstruktioner.\n\n`;

  if (state.activeMat) {
    const butik = document.getElementById('select-butik')?.value || '';
    promptText += `[MODUL: MAT & SÄSONG]\n`;
    promptText += `- Datakällor/Verktyg: Pris- och sortimentsdata från ${butik}\n\n`;
  }

  if (state.activeCustom) {
    const role = document.getElementById('custom-role')?.value || 'Personlig assistent';
    const memory = document.getElementById('custom-memory')?.value || 'Inga särskilda preferenser';
    const focus = document.getElementById('custom-focus')?.value || 'Inga verktyg angivna';
    const rules = document.getElementById('custom-rules')?.value || 'Inga särskilda begränsningar';

    promptText += `[MODUL: SKÄRDDARSYDD AGENT]\n`;
    promptText += `- Roll & Mål: ${role}\n`;
    promptText += `- Minne & Preferenser: ${memory}\n`;
    promptText += `- Omvärld & Datakällor: ${focus}\n`;
    promptText += `- Planering & Regler: ${rules}\n`;
  }

  return promptText;
}
