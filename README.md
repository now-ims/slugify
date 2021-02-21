# slugify

A simple package to create slugs from strings while keeping it DRY.

![CI](https://github.com/now-ims/slugify/actions/workflows/ci.yaml/badge.svg)
![npm (scoped)](https://img.shields.io/npm/v/@now-ims/slugify?color=C64434)

## How to install

```
npm install @now-ims/slugify -S
```

## API

- `string` - **is required** the string you want to slugify
- `separator` - (_Default: `'-'`_) **optional** character to use as separator `+` is another good option

## How to use

```js
const slugify = require('@now-ims/slugify');
const assert = require('assert'); // not needed to work

let txt = 'This is a test ---';
let slug = slugify(txt);
assert.strictEqual(slug, 'this-is-a-test');

txt = "C'est déjà l'été.";
slug = slugify(txt);
assert.strictEqual(slug, 'c-est-deja-l-ete');

txt = 'Nín hǎo. Wǒ shì zhōng guó rén';
slug = slugify(txt);
assert.strictEqual(slug, 'nin-hao-wo-shi-zhong-guo-ren');

txt = 'jaja---lol-méméméoo--a';
r = slugify(txt);
assert.strictEqual(slug, 'jaja-lol-mememeoo-a');

txt = 'Ford F150 King Ranch';
slug = slugify(txt, '+');
assert.strictEqual(slug, 'ford+f150+king+ranch');

txt = 'Ford F-150 King Ranch';
slug = slugify(txt, '+');
assert.strictEqual(slug, 'ford+f-150+king+ranch');
```

## License

Licensed under [MIT](./LICENSE)

## Acknowledgements

This project is sponsored and maintained by:

- [Now IMS](https://nowims.com)
