export const renderTableHeader = columns => {
  return columns.map((key, index) => {
    return <th key={index}>{key}</th>
  });
};

export const getItemNameById = (id, items) => {
  if (items.length > 0) {
    const item = items.filter(el => parseInt(el.id, 10) === parseInt(id, 10))[0];
    return item ? item.name : 'Please update';
  }
  else return 'Please update';
};

export const getAge = dateString => {
  let today = new Date();
  let birthdate = new Date(dateString);
  let age = today.getFullYear() - birthdate.getFullYear();
  let dif = today.getMonth() - birthdate.getMonth();
  if (dif < 0 || (dif === 0 && today.getDate() < birthdate.getDate()))
    age--;
  return age
}