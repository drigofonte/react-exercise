import '@testing-library/jest-dom/extend-expect';
import { render, screen } from "@testing-library/react";
import Person from "../../models/person";
import * as Store from "../../store/store";
import Friends from "./Friends";

describe('<Friends />', () => {
  describe('friends list', () => {
    it('should render a list of friends', () => {
      // Arrange
      const john = new Person();
      john.id = 1;
      john.name = 'John Doe';
      john.thumbnail = 'https://test.domain/john.jpeg';
      const jane = new Person();
      jane.id = 2;
      jane.name = 'Jane Doe';
      jane.thumbnail = 'https://test.domain/jane.jpeg';
      const people = [ john, jane ];
      const peopleNamesToIds = new Map<string, number>();
      peopleNamesToIds.set(john.name, john.id);
      peopleNamesToIds.set(jane.name, jane.id);

      const person = new Person();
      person.friends = [ john.name, jane.name ];

      jest.spyOn(Store, 'useStore').mockReturnValue([ { peopleNamesToIds, people }, (id, payload) => {} ]);

      render(<Friends person={person} />);

      // Assert
      const johnAvatar = screen.getByAltText(john.name);
      expect(johnAvatar).toBeInTheDocument();
      const janeAvatar = screen.getByAltText(jane.name);
      expect(janeAvatar).toBeInTheDocument();
    });

    it('should render an empty list message', () => {
      // Arrange
      const people: Person[] = [];
      const peopleNamesToIds = new Map<string, number>();
      const person = new Person();
      person.name = 'John Doe';

      jest.spyOn(Store, 'useStore').mockReturnValue([ { peopleNamesToIds, people }, (id, payload) => {} ]);

      render(<Friends person={person} />);

      // Assert
      const message = screen.getByText(/no friends/gmi);
      expect(message).toBeInTheDocument();
    });
  });
});

export {};