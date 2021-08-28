const animateCSS = (element, animation, prefix = 'animate__') =>
  // We create a Promise and return it
  new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`;
    const node = document.querySelector(element);

    node.classList.add(`${prefix}animated`, animationName);

    // When the animation ends, we clean the classes and resolve the Promise
    function handleAnimationEnd(event) {
      event.stopPropagation();
      node.classList.remove(`${prefix}animated`, animationName);
      resolve('Animation ended');
    }

    node.addEventListener('animationend', handleAnimationEnd, {once: true});
  });

  const getMessageHTML = (message, { emotes }, size) => {
    if (!emotes) return message;
    if(!size) size = 1
    if(size > 3) size = 3
    // store all emote keywords
    // ! you have to first scan through 
    // the message string and replace later
    const stringReplacements = [];
  
    // iterate of emotes to access ids and positions
    Object.entries(emotes).forEach(([id, positions]) => {
      // use only the first position to find out the emote key word
      const position = positions[0];
      const [start, end] = position.split("-");
      const stringToReplace = message.substring(
        parseInt(start, 10),
        parseInt(end, 10) + 1
      );
  
      stringReplacements.push({
        stringToReplace: stringToReplace,
        replacement: `<img src="https://static-cdn.jtvnw.net/emoticons/v1/${id}/${size}.0">`,
      });
    });
  
    // generate HTML and replace all emote keywords with image elements
    const messageHTML = stringReplacements.reduce(
      (acc, { stringToReplace, replacement }) => {
        // obs browser doesn't seam to know about replaceAll
        return acc.split(stringToReplace).join(replacement);
      },
      message
    );
  
    return messageHTML;
  }

  function GetTime(){
     var date = new Date( Date.now());
     var time = date.toLocaleString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1").split(':');
    return time[0]+':'+time[1];
  }