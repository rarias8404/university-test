export const renderTableHeader = columns => {
  return columns.map((key, index) => {
    return <th key={index}>{key}</th>
  });
};

export const getItemNameById = (id, items) => {
  if (items.length > 0) {
    const item = items.filter(el => el.id === id)[0];
    return item.name
  }
  else return id;
};