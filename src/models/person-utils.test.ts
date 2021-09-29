import Person from "./person";
import PersonUtils from "./person-utils";

describe('PersonUtils', () => {
  describe('names to ids', () => {
    it('should person names to ids', () => {
      const john = new Person();
      john.id = 1;
      john.name = 'John Doe';
      const jane = new Person();
      jane.id = 2;
      jane.name = 'Jane Doe';
      const people = [ john, jane ];

      const map = PersonUtils.mapNamesToIds(people);

      expect(map.get(john.name)).toBe(1);
      expect(map.get(jane.name)).toBe(2);
    });
  });  
});

export {};