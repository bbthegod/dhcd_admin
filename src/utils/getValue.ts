export default function getValue(o, s) {
  s = s.replace(/\[(\w+)\]/g, '.$1').replace(/^\./, '');
  var a = s.split('.');
  for (let i of a) {
    if (o && `${o[i]}`) {
      if (o[i] === true) {
        o = 'Có';
      } else if (o[i] === false) {
        o = 'Không';
      } else if (o[i] === 'delegate') {
        o = 'Đại biểu';
      } else if (o[i] === 'user') {
        o = 'Đoàn viên';
      } else if (o[i] === 'admin') {
        o = 'Người quản trị';
      } else {
        o = o[i];
      }
    } else {
      return '';
    }
  }
  return o;
}
