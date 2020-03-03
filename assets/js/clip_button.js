



const onClick = evt => {
  const link = document.querySelector('.clip');
  const range = document.createRange();
  range.selectNode(link);
  const selection = window.getSelection();
  selection.removeAllRanges();
  selection.addRange(range);

  const successful = document.execCommand('copy');
};

document.querySelector('button').addEventListener('click', onClick);