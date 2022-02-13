import getValue from 'utils/getValue';

export default function detailMaker(heading: string[], body: string[], data: any) {
  let res: string[][] = [];
  for (let i in heading) {
    let t = [`${heading[i]}`, `${getValue(data, body[i])}`];
    res.push(t);
  }
  return res;
}
