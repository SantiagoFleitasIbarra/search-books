const createIndex = async () => {
    try {
      // Verificar si la colección ya existe
      const existingCollection = await client.collections('books').retrieve();
      if (existingCollection) {
        console.log('El índice ya existe, no es necesario crear uno nuevo');
      } else {
        // Crear el índice
        const result = await client.collections().create({
          name: 'books',
          fields: [
            { name: 'title', type: 'string', index: true, store: true, infix: true },
            { name: 'author', type: 'string', index: true, store: true, infix: true },
            { name: 'year', type: 'int32', index: true, store: true, sort: true },
          ],
          default_sorting_field: 'year',
        });
        console.log('Índice creado:', result);
      }
    } catch (error) {
      console.error('Error al crear el índice:', error);
    }
  };
  
  createIndex();