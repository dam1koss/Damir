const paragraph = document.querySelector('p');
 paragraph.innerHTML = paragraph.innerText
.split(' ')
.map(word => word.length > 8 ? `<span style="background-color:yellow">${word}</span>` : word)
.join(' ');

const link = document.createElement('a');
link.href = 'https://www.inc.com/jeff-haden/this-new-linkedin-study-reveals-top-8-jobinterview-questions-and-how-great-job-candidates-answer-them.html';
link.innerText = 'link'
document.body.appendChild(link);

const a = paragraph.innerText.split(' ').length;
const b = document.createElement('div');
b.innerText = `${a} words`;
document.body.insertBefore(b,paragraph);

Array.from(document.querySelectorAll('p'))
.forEach(p =>{
  p.innerHTML=p.innerHTML
  .replace(/\?/g,'🤔')
  .replace(/\!/g,'😲')
})