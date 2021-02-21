"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const slugify = (string, separator = '-') => {
    return string
        .normalize('NFD')
        .replace(/\[\u0300-\u036f]/g, '')
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9 ]/g, '')
        .replace(/\s+/g, separator);
};
console.log(slugify("C'est déjà l'été."));
exports.default = slugify;
//# sourceMappingURL=index.js.map