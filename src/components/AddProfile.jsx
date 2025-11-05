import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function AddProfile({ people, setPeople }) {
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const trimmed = name.trim();

    if (!trimmed) {
      setError('Name is required.');
      return;
    }

    const exists = people.some(
      p => p.name.toLowerCase() === trimmed.toLowerCase()
    );

    if (exists) {
      setError('This name already exists.');
      return;
    }

    setPeople(prev => [
      ...prev,
      { id: Date.now(), name: trimmed, likes: 0 }
    ]);

    setName('');
    setError('');
  };

  return (
    <Form onSubmit={handleSubmit} className="mb-4">
      <Form.Group controlId="profileName" className="mb-2">
        <Form.Label>Add New Profile</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={e => setName(e.target.value)}
          isInvalid={!!error}
        />
        <Form.Control.Feedback type="invalid">
          {error}
        </Form.Control.Feedback>
      </Form.Group>

      <Button variant="success" type="submit">
        Add
      </Button>
    </Form>
  );
}
