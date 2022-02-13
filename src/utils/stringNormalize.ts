export default function stringNormalize(str: string) {
  str = str.trim();
  str = str.toLowerCase();
  while (str.indexOf('  ') !== -1) str = str.slice(str.indexOf('  '), 1);
  let s = str.split(' ');
  let res: string[] = [];
  for (let i of s) {
    let newString = i.charAt(0).toUpperCase() + i.substring(1);
    res.push(newString);
  }
  return res.join(' ');
}
