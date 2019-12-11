/**
 * @description composeObjectProperties, combine the properties of two objects in one level object with their nested properties
 * @param {object} firstObjectProperties, this object is with structure, example: { first: { name: 'superhero', age: 19 } }
 * @param {object} secondObjectProperties, this object is with structure, example: { second: { circle: 'big', color: 'rainbow' } }
 * @return {object} resultObject, object will be with structure example: { name: 'superhero', age: 19, circle: 'big', color: 'rainbow' }
 */
const composeObjectProperties = (firstObjectProperties, secondObjectProperties) => {
  const { first: { name, age } } = firstObjectProperties; 
  const { second: { circle, color } } = secondObjectProperties;

  const resultObject = { name, age, circle, color }
  return resultObject;
}

export { 
  composeObjectProperties
}