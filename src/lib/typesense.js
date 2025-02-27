import Typesense from 'typesense';

const client = new Typesense.Client({
  nodes: [
    {
      host: 'sxgnz94tph81l30op-1.a1.typesense.net', // Host de tu clúster
      port: '443',
      protocol: 'https',
    },
  ],
  apiKey: '15zPEQdJxqtK0sHqT777Tnvb7r03Uat5', // API Key de administración
});

export default client;