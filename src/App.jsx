import { useState } from 'react';
import { Grid } from '@mui/material';

import './App.css'
import { userService } from './services/users.service';
import { Login } from './components/Login/Login';

function App() {

  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const result = await userService.getAll();
    setUsers(result.data)
  }

  return (
    <>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: '100vh' }}
      >
        <Grid item xs={3}>
          <Login />
        </Grid>
      </Grid>

    </>
  )
}

export default App
