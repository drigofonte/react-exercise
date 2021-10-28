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

      expect(map[john.name]).toBe(1);
      expect(map[jane.name]).toBe(2);
    });
  });

  describe('normalise friends', () => {
    it('should make sure friends relations are transitive', () => {
      // Arrange
      const john = new Person();
      john.id = 1;
      john.name = 'John Doe';
      const jane = new Person();
      jane.id = 2;
      jane.name = 'Jane Doe';

      const lewis = new Person();
      lewis.id = 3;
      lewis.name = 'Lewis Smith';
      const friends = [ john.name, jane.name ]
      lewis.friends = [ ...friends ];

      const namesToIds = {
        [john.name]: john.id,
        [jane.name]: jane.id,
        [lewis.name]: lewis.id
      };

      // Act
      PersonUtils.normaliseFriends([ john, jane, lewis ], namesToIds);

      // Assert
      expect(lewis.friends).toEqual(friends);
      expect(john.friends).toEqual([ lewis.name ]);
      expect(jane.friends).toEqual([ lewis.name ]);
    });
  });
});

export {};