import client from './typesense.js';

const addData = async () => {
  try {
    const documents = [
      {
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        year: 1925,
      },
      {
        title: '1984',
        author: 'George Orwell',
        year: 1949,
      },
      {
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        year: 1960,
      },
      {
        title: 'Caperucita Roja',
        author: 'Charles Perrault',
        year: 1697,
      },
    ];

    const result = await client
      .collections('books')
      .documents()
      .import(documents, { action: 'upsert' });

    console.log('Datos agregados:', result);
  } catch (error) {
    console.error('Error al agregar datos:', error);
  }
};

addData();