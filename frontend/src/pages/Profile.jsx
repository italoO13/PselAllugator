import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import { getClientById } from '../services/api/client';

function Profile() {
  const [client, setClient] = useState();

  useEffect(() => {
    const getClient = async () => {
      const response = await getClientById();
      setClient(response);
    };
    getClient();
  }, []);
  return (
    <div>
      {client

&& (
<div className="profile">
  <h2>{`Bem vindo ao seu perfil ${client.name}`}</h2>
  <h3>Estes são os aparelhos que você tem ativos no momento</h3>
</div>
)}

    </div>
  );
}

export default Profile;
