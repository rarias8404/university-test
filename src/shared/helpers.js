export const renderTableHeader = columns => {
  return columns.map((key, index) => {
    return <th key={index}>{key}</th>
  });
};

export const getItemNameById = (id, items) => {
  if (items.length > 0) {
    const item = items.filter(el => parseInt(el.id, 10) === parseInt(id, 10))[0];
    return item.name
  }
  else return id;
};