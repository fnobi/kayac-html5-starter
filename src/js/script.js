import pug from 'pug';

const dom = `
.wrapper
  .title= title
  img(src="/images/sample.png")
`;

const fn = pug.compile(dom);

document.querySelector('.wrapper').innerHTML = fn({ title: 'タイトル' });
