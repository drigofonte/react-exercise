import '@testing-library/jest-dom/extend-expect';
import { render, screen } from "@testing-library/react";
import Person from "../../models/person";
import Features from './Features';

describe('<Features />', () => {
  it('should list all person features', () => {
    // Arrange
    const person = new Person();
    person.weight = 10;
    person.height = 20;
    person.age = 30;
    person.hair_color = 'pink';

    render(<Features person={person} />);

    // Assert
    const weightElement = screen.getByText(person.weightString);
    expect(weightElement).toBeInTheDocument();
    const heightElement = screen.getByText(person.heightString);
    expect(heightElement).toBeInTheDocument();
    const ageElement = screen.getByText(person.age);
    expect(ageElement).toBeInTheDocument();
    const hairElement = screen.getByText(person.hair_color);
    expect(hairElement).toBeInTheDocument();
  });
});

export {};