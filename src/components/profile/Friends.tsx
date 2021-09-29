import { Link } from 'react-router-dom';
import { Avatar, Card, CardContent, CardHeader, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import Person from "../../models/person";
import { useStore } from "../../store/store";

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

        if (friend) {
          return (
            <Link
              to={`/people/${friend.id}`}
              style={{
                textDecoration: 'none',
                color: 'initial'
              }}
            >
              <ListItem key={friend.id}>
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
      })}
    </List>;
  }

  return (
    <Card sx={{
        marginBottom: 2,
        p: 2,
        border: '1px #e0dfdc solid',
        borderRadius: 3
      }}
      elevation={0}
    >
      <CardHeader
        title="Friends"
        titleTypographyProps={{
          fontWeight: 200
        }}
      />
      <CardContent>
        {content}
      </CardContent>
    </Card>
  );
};

export default Friends;