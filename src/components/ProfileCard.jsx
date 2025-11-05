import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function ProfileCard({ name, likes, setPeople}) {
  return (
    <Card className="mb-3 shadow-sm">
      <Card.Body>
        <Card.Title className="h5 mb-1">{name}</Card.Title>
        <Card.Text className="mb-0">Likes: {likes}</Card.Text>
        <Button variant="primary" className="mt-2" onClick={() => {
          setPeople(prevPeople =>
            prevPeople.map(p =>
              p.name === name ? { ...p, likes: p.likes + 1 } : p
            )
          );
        }}>
            Like
        </Button>
      </Card.Body>
    </Card>
  );
}