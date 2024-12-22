document.addEventListener('DOMContentLoaded', function() {
    var year = new Date().getFullYear();
    document.getElementById('year').textContent = year;
});

import entries from './entries.js';

let lastShown = [];

function populateCategoryFilter() {
  const categories = [...new Set(entries.map(entry => entry.category))];
  const filter = document.getElementById('categoryFilter');
  categories.forEach(category => {
    const option = document.createElement('option');
    option.value = category;
    option.textContent = category;
    filter.appendChild(option);
  });
}

function getRandomEntry(filteredEntries) {
  const availableEntries = filteredEntries.filter(entry => !lastShown.includes(entry));
  if (!availableEntries.length) {
    lastShown = [];
    return filteredEntries[Math.floor(Math.random() * filteredEntries.length)];
  }
  const entry = availableEntries[Math.floor(Math.random() * availableEntries.length)];
  lastShown.push(entry);
  if (lastShown.length > 10) lastShown.shift();
  return entry;
}

function setPromptText(randomEntry) {
  document.getElementById('promptText').textContent = randomEntry.prompt;
  document.getElementById('examplePost').innerHTML = randomEntry.example;
}

function generatePrompt() {
  const categoryFilter = document.getElementById('categoryFilter').value;
  const filteredEntries = categoryFilter ? entries.filter(entry => entry.category === categoryFilter) : entries;
  const randomEntry = getRandomEntry(filteredEntries);
  const linkedinPostContent = document.querySelector('.linkedin-post-content');
  const existingMedia = document.getElementById('mediaPlaceholder');
  const output = document.getElementById('output');
  const placeholder = document.getElementById('placeholder');
  
  if (existingMedia) existingMedia.remove();

  if (randomEntry.media === "yes") {
    const mediaContainer = document.createElement('div');
    mediaContainer.id = 'mediaPlaceholder';
    mediaContainer.className = 'media-placeholder';
    mediaContainer.textContent = "Sample media";
    mediaContainer.hidden = 'true';
    linkedinPostContent.appendChild(mediaContainer);
    const sampleMedia = document.getElementById('mediaPlaceholder');
    output.addEventListener("transitionend", () => {
      sampleMedia.removeAttribute('hidden');
      sampleMedia.style.opacity = 1;
    });
  }

  if (placeholder.checkVisibility()) {
    placeholder.style.opacity = 0;
    placeholder.addEventListener("transitionend", () => {
      setPromptText(randomEntry);
      placeholder.hidden = 'true';
      output.removeAttribute('hidden');
      output.style.opacity = 1;
    });
  } else {
    output.style.opacity = 0;
    output.addEventListener("transitionend", () => {
      setPromptText(randomEntry);
      output.style.opacity = 1;
    });
  }
}

document.getElementById('toggleExample').addEventListener('change', function () {
  const examplePost = document.querySelector('.linkedin-post');
  
  if (this.checked) {
    examplePost.style.display = 'block';
  } else {
    examplePost.style.display = 'none';
  }
});

function downloadCsv() {
  const header = "Prompt,Category";
  const csvContent = [header, ...entries.map(e => `"${e.prompt}","${e.category}"`)].join('\n');
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', 'prompts.csv');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

document.getElementById('generatePrompt').addEventListener('click', generatePrompt);
document.getElementById('downloadCsv').addEventListener('click', downloadCsv);

populateCategoryFilter();