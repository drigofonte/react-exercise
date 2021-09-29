import Person from "./person";

class PersonLoader {
  public static async getPeople(): Promise<Person[]> {
    const res = await fetch('https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json');
    const { Brastlewark: data } = await res.json();
    const people = data.map((d: {}) => Object.assign(new Person(), d));
    return people;
  }
}

export default PersonLoader;