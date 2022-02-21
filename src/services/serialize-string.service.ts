function serializedCardTitle(name: string) {
  let newName = name ? name : '';
  if (name && name.length > 20) {
    newName = newName.substring(0, 20) + '...';
  }
  return newName;
}

export { serializedCardTitle };
