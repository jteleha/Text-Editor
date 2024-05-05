const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    window.deferredPrompt = event;
    butInstall.style.display = 'block';
  });
  
  butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
      return;
    }
    promptEvent.prompt();
    const result = await promptEvent.userChoice;
    console.log('User choice', result.outcome);
    window.deferredPrompt = null;
    butInstall.style.display = 'none';
  });
  
  window.addEventListener('appinstalled', (event) => {
    console.log('App installed');
  });