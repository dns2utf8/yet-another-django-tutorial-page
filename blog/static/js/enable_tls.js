(function(){
  if (location.protocol.indexOf('http:') === 0 && location.hostname.indexOf('pythonanywhere.com') > 0) {
    location.protocol = 'https:';
  }
})()
