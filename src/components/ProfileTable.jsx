import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from 'react-bootstrap';

export default function ProfileTable({ people, setPeople }) {
  const handleLike = (name) => {
    setPeople(prev =>
      prev.map(p =>
        p.name === name ? { ...p, likes: p.likes + 1 } : p
      )
    );
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'name', headerName: 'Name', flex: 1 },
    { field: 'likes', headerName: 'Likes', width: 120 },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 150,
      renderCell: (params) => (
        <Button
          size="sm"
          variant="primary"
          onClick={() => handleLike(params.row.name)}
        >
          Like
        </Button>
      ),
    },
  ];

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={people}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5, 10]}
        disableRowSelectionOnClick
        sx={{
          backgroundColor: 'white',
          borderRadius: 2,
          '& .MuiDataGrid-columnHeaders': {
            backgroundColor: '#f8f9fa',
            fontWeight: 600,
          },
        }}
      />
    </div>
  );
}
