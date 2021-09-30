export enum Feature {
  height,
  weight,
  hair_color,
  age
};

class Person {
  id: number = -1;
  age: number = 0;
  friends: string[] = [];
  hair_color: string = '';
  height: number = 0;
  name: string = '';
  professions: string[] = [];
  thumbnail: string = '';
  weight: number = 0;

  public get weightString(): string {
    return `${this.round(this.weight)}kg`;
  }

  public get heightString(): string {
    return `${this.round(this.height / 100)}m`;
  }

  public addFriend(val: string): void {
    if (!this.friends.includes(val)) {
      this.friends.push(val);
    }
  }

  private round(val: number): string {
    return (Math.round(val * 100) / 100).toFixed(2);
  }
}

export default Person;