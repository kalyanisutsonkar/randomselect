const textarea = document.querySelector('textarea');
const tagcontainer =document.querySelector('.tagcontainer')

function textElement(ele) {
    const string = ele.target.value;
    const taskarrray = string.split(',');
    
    tagcontainer.innerHTML ='';
    
    taskarrray.forEach(value => {
        const tagElement = document.createElement('div');
        tagElement.classList.add('tag');
        tagElement.innerHTML = value;
        tagcontainer.appendChild(tagElement)
    });

    if(ele.key === 'Enter'){
        const interval = setInterval(function() {
            const randomEle =  highlightTags();
            randomEle.classList.add('highlight')
          }, 100);

        setTimeout(function() {
            clearInterval(interval);
          }, 2000);
    }
}

function highlightTags() {
  const tags = document.querySelectorAll('.tag');
  tags.forEach(tag => tag.classList.remove('highlight'));
  const randomIndex = Math.floor(Math.random() * tags.length);

  return tags[randomIndex]
}

textarea.addEventListener('keyup', textElement);
