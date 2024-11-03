export function getInitialView() {
  const storedView = sessionStorage.getItem('view');

  return storedView ?? 'personal';
}

export function saveView(currentView) {
  sessionStorage.setItem('view', currentView);
}
