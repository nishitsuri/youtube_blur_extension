document.addEventListener('DOMContentLoaded', () => {
  const blurToggle = document.getElementById('blurToggle');

  // Load the current blur setting
  chrome.storage.sync.get('isBlurred', (data) => {
    blurToggle.checked = data.isBlurred || false;
  });

  // Update the blur setting when the checkbox is toggled
  blurToggle.addEventListener('change', () => {
    chrome.storage.sync.set({ isBlurred: blurToggle.checked });
  });
});
