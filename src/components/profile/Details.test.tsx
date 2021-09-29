import '@testing-library/jest-dom/extend-expect';
import { render, screen } from "@testing-library/react";
import Person from "../../models/person";
import Details from './Details';

describe('<Details />', () => {
  describe('professions', () => {
    it('should render the person\'s professions', () => {
      // Arrange
      const person = new Person();
      person.professions = [ 'Engineer', 'Carpenter' ];

      render(<Details person={person} />);

      // Assert
      const engineerElement = screen.getByText(person.professions[0]);
      expect(engineerElement).toBeInTheDocument();
      const carpenterElement = screen.getByText(person.professions[1]);
      expect(carpenterElement).toBeInTheDocument();
    });
  });
});

export {};