const tags = ['li', 'span', 'div', 'span', 'h3', 'a', 'div', 'span', 'a', 'li', 'div', 'div'];
const count = {};

for (const tag of tags) {
  count[tag] = (count[tag] ? count[tag] + 1 : 1);
}

console.log(count);
