import { Link } from 'react-router-dom';
import { Avatar, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import Person from "../../models/person";
import { useStore } from "../../store/store";
import { ProfileSection } from '@drigofonte_org/base.ui.person.profile-section';

function findPerson(id: number | undefined, people: Person[]): Person | undefined {
  return people.find((person) => person.id === id);
}

const Friends: React.FC<{ person: Person }> = ({ person }) => {
  const [ state ] = useStore();
  const { peopleNamesToIds, people }: { peopleNamesToIds?: Map<string, number>, people?: Person[] } = state;

  let content = <Typography variant="body1">{person.name} has no friends 🙁</Typography>;

  if (person.friends.length > 0) {
    content = <List>
      {person.friends.map((friendName) => {
        const friendId = peopleNamesToIds?.get(friendName);
        const friend = findPerson(friendId, people!);
        let content;

        if (friend) {
          content = (
            <Link
              key={friend.id}
              to={`/people/${friend.id}`}
              style={{
                textDecoration: 'none',
                color: 'initial'
              }}
            >
              <ListItem>
                <ListItemAvatar>
                  <Avatar alt={friend.name} src={friend.thumbnail} />
                </ListItemAvatar>
                <ListItemText
                  primary={friend.name}
                />
              </ListItem>
            </Link>
          );
        }

        return content;
      })}
    </List>;
  }

  return (
    <ProfileSection title="Friends">
      {content}
    </ProfileSection>
  );
};

export default Friends;