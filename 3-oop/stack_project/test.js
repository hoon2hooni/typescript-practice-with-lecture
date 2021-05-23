/**
 *
 *
 *
 *
 *
 *
 */
const $pushBtn = document.querySelector('.buttons__push');
const $popBtn = document.querySelector('.buttons__pop');
const $stack = document.querySelector('.stack');
const $ul = document.createElement('ul');
const $fragment = document.createDocumentFragment();

$pushBtn.addEventListener('click', (e) => {
  //이벤트 전파로인해 에러가 발생했었음
  e.stopPropagation();
  const li = document.createElement('li');
  li.textContent = 'helloWorld';
  $fragment.appendChild(li);
  $ul.appendChild($fragment);
  $stack.appendChild($ul);
});

$popBtn = addEventListener('click', (e) => {
  e.stopPropagation();
  if ($ul.childNodes.length >= 1) {
    $ul.removeChild($ul.lastChild); 
    console.log($ul.childNodes)
    console.log($popBtn);
  }
});
