import '@testing-library/jest-dom/extend-expect';
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';
import Person from "../../models/person";
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
      const peopleNamesToIds = {
        [john.name]: john.id,
        [jane.name]: jane.id
      };

      const person = new Person();
      person.friends = [ john.name, jane.name ];

      render(<BrowserRouter><Friends person={person} users={people} namesToIds={peopleNamesToIds} /></BrowserRouter>);

      // Assert
      const johnAvatar = screen.getByAltText(john.name);
      expect(johnAvatar).toBeInTheDocument();
      const janeAvatar = screen.getByAltText(jane.name);
      expect(janeAvatar).toBeInTheDocument();
    });

    it('should render an empty list message', () => {
      // Arrange
      const people: Person[] = [];
      const peopleNamesToIds = {};
      const person = new Person();
      person.name = 'John Doe';

      render(<BrowserRouter><Friends person={person} users={people} namesToIds={peopleNamesToIds} /></BrowserRouter>);

      // Assert
      const message = screen.getByText(/no friends/gmi);
      expect(message).toBeInTheDocument();
    });
  });
});

export {};