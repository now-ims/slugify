const slugify = (string: string, separator = '-'): string => {
  return string
    .normalize('NFD')
    .replace(/\[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9 ]/g, '')
    .replace(/\s+/g, separator);
};

export default slugify;
