window.addEventListener('hashchange', function() {
    playSectionSound(location.hash);
  });
  
  function playSectionSound(hash) {
    // Stop all sounds first
    document.querySelectorAll('audio').forEach(audio => audio.pause());
  
    // Play the sound corresponding to the current hash
    switch(hash) {
      case '#first-strip':
        document.getElementById('alarm').play();
        break;
      case '#second-strip':
        document.getElementById('alarm').play();
        break;
      case '#third-strip':
        document.getElementById('traffic').play();
        break;
      case '#fourth-strip':
        document.getElementById('office').play();
        break;
        case '#fifth-strip':
            document.getElementById('office').play();
            break;
        case '#sixth-strip':
            document.getElementById('scream').play();
            break;
      case '#seventh-strip':
        document.getElementById('jail').play();
        break;
        case '#eighth-strip':
            document.getElementById('birds').play();
            break;
        case '#ninth-strip':
            document.getElementById('bed').play();
        break;
      
      // Add cases for each section
    }
  }