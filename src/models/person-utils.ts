import Person from "./person";

class PersonUtils {
  public static mapNamesToIds(people: Person[]): {[key: string]: number} {
    const map: {[key: string]: number} = {};
    for (let i = 0; i < people.length; i += 1) {
      map[people[i].name] = people[i].id;
    }
    return map;
  }

  public static normaliseFriends(people: Person[], namesToIdsMap: {[key: string]: number}): void {
    for (let person of people) {
      for (let friend of person.friends) {
        const friendId = namesToIdsMap[friend];
        const friendPerson = people.find((p) => p.id === friendId);
        if (friendPerson) {
          friendPerson.addFriend(person.name);
        }
      }
    }
  }
}

export default PersonUtils;