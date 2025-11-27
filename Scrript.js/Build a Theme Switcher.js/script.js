const themes = [
  { name: "light", message: "Hello sunshine - Light theme is on!" },
  { name: "dark",  message: "The night is yours - Dark theme is on!" }
];

document.addEventListener('DOMContentLoaded', function() {
  const themeSwitcherButton = document.getElementById('theme-switcher-button');
  const themeDropdown = document.getElementById('theme-dropdown');
  const themeStatus = document.getElementById('theme-status');
  const bodyElement = document.body;
  const themeItems = themeDropdown.querySelectorAll('li'); 

  function toggleThemeDropdown() {
    const isExpanded = themeSwitcherButton.getAttribute('aria-expanded') === 'true';
    const newExpandedState = !isExpanded;

    themeSwitcherButton.setAttribute('aria-expanded', newExpandedState.toString());

    if (newExpandedState) {
      themeDropdown.removeAttribute('hidden'); 
    } else {
      themeDropdown.setAttribute('hidden', ''); 
    }
  }

  function switchTheme(themeName, themeMessage) {
    
    bodyElement.classList.remove('theme-light', 'theme-dark');
    bodyElement.classList.add(`theme-${themeName}`);

    // Update status message
    themeStatus.textContent = themeMessage;

    // Close dropdown after selection
    themeDropdown.setAttribute('hidden', '');
    themeSwitcherButton.setAttribute('aria-expanded', 'false');
  }

  themeSwitcherButton.addEventListener('click', toggleThemeDropdown);

  themeItems.forEach(item => {
    item.addEventListener('click', (event) => {
      const itemId = event.currentTarget.id;
      const themeName = itemId.replace('theme-', '');
      const selectedTheme = themes.find(theme => theme.name === themeName);

      if (selectedTheme) {
        switchTheme(selectedTheme.name, selectedTheme.message);
      }
    });
  });
});
