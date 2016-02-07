export default function filter(item) {
  if (!item.children || !item.children.length) {
    return `<c:${item.type} ${formatAttrs(item.attrs)}/>`;
  }

  let children = item.children;
  if (typeof children != 'string') {
    children = item.children.map(filter).join('');
  }

  return `<c:${item.type} ${formatAttrs(item.attrs)}>
            ${children}
          </c:${item.type}>`;
}

function formatAttrs(attrs) {
  if (typeof attrs !== 'object') {
    return '';
  }

  return Object.keys(attrs)
    .map(attr => `${attr}="${attrs[attr]}"`)
    .join(' ');
}
