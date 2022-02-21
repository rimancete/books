function serializedCardTitle(name: string) {
  let newName = name ? name : '';
  if (name && name.length > 20) {
    newName = newName.substring(0, 20) + '...';
  }
  return newName;
}
function serializedModalTitle(name: string) {
  let newName = name ? name : '';
  if (name && name.length > 30) {
    newName = newName.substring(0, 30) + '...';
  }
  return newName;
}

export { serializedCardTitle, serializedModalTitle };
