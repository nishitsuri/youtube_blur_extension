// Function to toggle blur class on the body
function toggleBlur(isBlurred) {
  if (isBlurred) {
    document.body.classList.add('blur-homepage');
  } else {
    document.body.classList.remove('blur-homepage');
  }
}

// Retrieve the blur setting from storage and apply it
chrome.storage.sync.get('isBlurred', (data) => {
  toggleBlur(data.isBlurred);
});

// Listen for changes in storage to update blur state
chrome.storage.onChanged.addListener((changes) => {
  if (changes.isBlurred) {
    toggleBlur(changes.isBlurred.newValue);
  }
});
