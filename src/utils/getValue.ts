export default function getValue(o, s) {
  s = s.replace(/\[(\w+)\]/g, '.$1').replace(/^\./, '');
  var a = s.split('.');
  for (let i of a) {
    if (o && `${o[i]}`) {
      o = o[i];
    } else {
      return '';
    }
  }
  return o;
}
