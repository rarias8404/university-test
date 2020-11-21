export const getGroupNameById = (id, groups) => {
  if (groups.length > 0) {
    const group = groups.filter(group => group.id === id)[0];
    return group.name
  }
  else return id;
};

export const getCityNameById = (id, cities) => {
  if (cities.length > 0) {
    const city = cities.filter(group => group.id === id)[0];
    return city.name
  }
  else return id;
};