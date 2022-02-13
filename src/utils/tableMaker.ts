import getValue from 'utils/getValue';

export default function tableMaker(heading: string[], body: string[], data: any) {
  let t: Table = {
    heading,
    body: [],
  };
  for (let i of data) {
    const b: BodyTable = {
      id: i._id,
      array: [],
    };
    for (let j of body) {
      b.array.push(`${getValue(i, j)}`);
    }
    t.body.push(b);
  }
  return t;
}
