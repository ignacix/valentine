document.addEventListener('DOMContentLoaded', function() {
    const positiveBtn = document.getElementById('positiveBtn');
    const negativeBtn = document.getElementById('negativeBtn');
    const negativeResponses = [
      "Are you sure?",
      "Really sure? n.n",      
      "Is that your final answeer?",
      "Babyyyy",
      "REBEECAAAAAA!!!!",
      "I'm gonna cry u.u (not charot)",
      "you are breaking my hearth ;c",
      "Is that your final answeer?"
    ];
    let index = 0;
  
    negativeBtn.addEventListener('click', function() {
      let currentPadding = window.getComputedStyle(positiveBtn).padding;
      let currentPaddingArray = currentPadding.split(' ');
      let paddingTop = parseInt(currentPaddingArray[0]);
      let paddingLeft = parseInt(currentPaddingArray[1]);
  
      let currentFontSize = window.getComputedStyle(positiveBtn).fontSize;
      let currentFontSizeInt = parseInt(currentFontSize);
  
      positiveBtn.style.padding = (paddingTop + 5) + 'px ' + (paddingLeft + 5) + 'px';
      positiveBtn.style.fontSize = (currentFontSizeInt + 5) + 'px';
  
      if(index<7){
          negativeBtn.innerText = negativeResponses[index];
          index = (index + 1) % negativeResponses.length;
      }
    });
  
    positiveBtn.addEventListener('click', function() {
      window.location.href = 'otra_pagina.html';
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('audio');
    audio.play();
  });
  