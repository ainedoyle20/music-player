import { useEffect } from 'react';
import { fetchUsers } from './utils';

const App = () => {

  useEffect(() => {
    console.log(import.meta.env.VITE_SANITY_TOKEN);

    fetchUsers();
  }, []);

  return (
    <div>Music Player</div>
  );
}

export default App;
