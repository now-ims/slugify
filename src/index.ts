const slugify = (string: string, separator = '-'): string => {
  return string
    .normalize('NFD')
    .replace(/\[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9 ]/g, '')
    .replace(/\s+/g, separator);
};

console.log(slugify("C'est déjà l'été."));

export default slugify;
