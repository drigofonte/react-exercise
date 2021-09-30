import Person from "./person";

class PersonLoader {
  private static readonly DATA_URL: string | undefined = process.env.REACT_APP_DATA_URL;

  public static async getPeople(): Promise<Person[]> {
    let people = [];
    if (this.DATA_URL) {
      const res = await fetch(this.DATA_URL);
      const { Brastlewark: data } = await res.json();
      people = data.map((d: {}) => Object.assign(new Person(), d));
    }
    return people;
  }
}

export default PersonLoader;