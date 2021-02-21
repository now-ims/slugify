const slugify = (string: string, separator = '-'): string => {
  return string
    .normalize('NFD')
    .replace(/\[\u0300-\u036f]/g, '')
    .replace(/'/g, ' ')
    .replace(/-{1,}/g, '-')
    .replace(/-$/, '')
    .toLowerCase()
    .replace(/[^a-z0-9\- ]/g, '')
    .trim()
    .replace(/\s+/g, separator);
};

export default slugify;
