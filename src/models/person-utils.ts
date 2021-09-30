import Person from "./person";

class PersonUtils {
  public static mapNamesToIds(people: Person[]): Map<string, number> {
    const map: Map<string, number> = new Map<string, number>();
    for (let i = 0; i < people.length; i += 1) {
      map.set(people[i].name, people[i].id);
    }
    return map;
  }

  public static normaliseFriends(people: Person[], namesToIdsMap: Map<string, number>): void {
    for (let person of people) {
      for (let friend of person.friends) {
        const friendId = namesToIdsMap.get(friend);
        const friendPerson = people.find((p) => p.id === friendId);
        if (friendPerson) {
          friendPerson.addFriend(person.name);
        }
      }
    }
  }
}

export default PersonUtils;