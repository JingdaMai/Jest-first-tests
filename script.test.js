const googleSearch = require('./script.js');

const dbMock = [
  'dog.com',
  'cheesepuff.com',
  'disney.com',
  'dogpictures.com'
];

describe('googleSearch', () => {
  it('this is a silly test', () => {
    expect('hello').toBe('hello');
    googleSearch('testtest', dbMock);
  });
  
  it('is search google', () => {
    expect(googleSearch('testtest', dbMock)).toEqual([]);
    expect(googleSearch('dog', dbMock)).toEqual(['dog.com', 'dogpictures.com']);
  });
  
  it('work with undefine and null input', () => {
    expect(googleSearch(undefined, dbMock)).toEqual([]);
    expect(googleSearch(null, dbMock)).toEqual([]);
  });
  
  it('does not return more than 3 matches', () => {
    expect(googleSearch('.com', dbMock).length).toEqual(3);
  });
});

