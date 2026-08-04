// Select all tab buttons and tab panels using ARIA roles
const tabs = document.querySelectorAll('[role="tab"]');
const panels = document.querySelectorAll('[role="tabpanel"]');
// Add click event listener to each tab
tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    // Step 1: Deselect all tabs
    tabs.forEach(t => t.setAttribute("aria-selected", "false"));
    // Step 2: Hide all panels
    panels.forEach(p => p.hidden = true);
    // Step 3: Select the clicked tab
    tab.setAttribute("aria-selected", "true");
    // Step 4: Show the associated panel
    const associatedPanel = tab.getAttribute("aria-controls");
    const panel = document.getElementById(associatedPanel);
    panel.hidden = false;

  });
});