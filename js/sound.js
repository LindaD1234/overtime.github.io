window.addEventListener('hashchange', function() {
    playSectionSound(location.hash);
  });
  
  function playSectionSound(hash) {
    // Stop all sounds first
    document.querySelectorAll('audio').forEach(audio => audio.pause());
  
    // Play the sound corresponding to the current hash
    switch(hash) {
      case '#intro-city':
        document.getElementById('alarm').play();
        break;
      case '#first-strip':
        document.getElementById('traffic').play();
        break;
      case '#second-strip':
        document.getElementById('office').play();
        break;
      case '#third-strip':
        document.getElementById('scream').play();
        break;
      case '#fourth-strip':
        document.getElementById('birds').play();
        break;
      case '#fifth-strip':
        document.getElementById('jail').play();
        break;
      
      // Add cases for each section
    }
  }