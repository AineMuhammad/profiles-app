import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import AddProfile from './components/AddProfile.jsx';
import ProfileTable from './components/ProfileTable.jsx';
import { profiles } from './data/profiles.js';

export default function App() {
  const [people, setPeople] = useState(profiles);

  return (
    <Container className="py-4">
      <h1 className="mb-4 text-center">Profiles</h1>
      <AddProfile people={people} setPeople={setPeople} />
      <ProfileTable people={people} setPeople={setPeople} />
    </Container>
  );
}
