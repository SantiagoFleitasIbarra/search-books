import Typesense from 'typesense';

const client = new Typesense.Client({
  nodes: [{
    host: 'sxgnz94tph81l30op-1.a1.typesense.net',
    port: 443,
    protocol: 'https'
  }],
  apiKey: '15zPEQdJxqtK0sHqT777Tnvb7r03Uat5'
});

const newDocuments = [
    { id: "5", title: "El Gran Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
    { id: "6", title: "1984", author: "George Orwell", year: 1949 },
    { id: "7", title: "Matar a un ruiseñor", author: "Harper Lee", year: 1960 }
  ];
  
  client.collections('books').documents().import(newDocuments, { action: 'upsert' })
  .then(response => {
    console.log("Documentos agregados:", response);
  })
  .catch(error => {
    console.error("Error al agregar documentos:", error);
  });