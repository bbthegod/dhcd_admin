export default function serialize(obj, prefix?) {
  const str: any = [];
  let p;
  for (p in obj) {
    if (`${obj[p]}` === 'null' || `${obj[p]}` === 'undefined') {
      continue;
    }
    if (obj.hasOwnProperty(p)) {
      if (typeof obj[p] === 'undefined') {
        continue;
      }
      const k = prefix ? `${prefix}[${p}]` : p;
      const v = obj[p];
      const newItem =
        v !== null && typeof v === 'object'
          ? serialize(v, k)
          : v !== null
          ? `${encodeURIComponent(k)}=${encodeURIComponent(v)}`
          : '';
      if (newItem.trim() !== '') {
        str.push(newItem);
      }
    }
  }
  return str.join('&');
}
