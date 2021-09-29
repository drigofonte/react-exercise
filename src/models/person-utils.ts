import Person from "./person";

class PersonUtils {
  public static mapNamesToIds(people: Person[]): Map<string, number> {
    const map: Map<string, number> = new Map<string, number>();
    for (let i = 0; i < people.length; i += 1) {
      map.set(people[i].name, people[i].id);
    }
    return map;
  }
}

export default PersonUtils;