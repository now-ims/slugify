import slugify from '../src/index';
import assert from 'assert';

describe('Slugify tests', () => {
  it('should convert a string to a slug and remove any trailing -', () => {
    const txt = 'This is a test ---';
    const slug = slugify(txt);
    assert.strictEqual(slug, 'this-is-a-test');
  });

  it('should convert a french string to a clean slug', () => {
    const txt = "C'est déjà l'été.";
    const slug = slugify(txt);
    assert.strictEqual(slug, 'c-est-deja-l-ete');
  });

  it('should convert a vietnamese string to a clean slug', () => {
    const txt = 'Nín hǎo. Wǒ shì zhōng guó rén';
    const slug = slugify(txt);
    assert.strictEqual(slug, 'nin-hao-wo-shi-zhong-guo-ren');
  });

  it('should collapse dashes', () => {
    const txt = 'jaja---lol-méméméoo--a';
    const slug = slugify(txt);
    assert.strictEqual(slug, 'jaja-lol-mememeoo-a');
  });

  it('should use a different separator', () => {
    const txt = 'Ford F150 King Ranch';
    const slug = slugify(txt, '+');
    assert.strictEqual(slug, 'ford+f150+king+ranch');
  });

  it('should keep dashes but use a different separator', () => {
    const txt = 'Ford F-150 King Ranch';
    const slug = slugify(txt, '+');
    assert.strictEqual(slug, 'ford+f-150+king+ranch');
  });
});
