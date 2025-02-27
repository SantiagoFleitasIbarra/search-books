<script>
  let query = '';
  let results = [];

  async function searchBooks() {
    if (query.trim()) {
      try {
        const response = await fetch(
          `https://sxgnz94tph81l30op-1.a1.typesense.net/collections/books/documents/search?q=${query}&query_by=title,author`,
          {
            headers: {
              'X-TYPESENSE-API-KEY': '15zPEQdJxqtK0sHqT777Tnvb7r03Uat5'
            }
          }
        );
        const data = await response.json();
        results = data.hits || [];
      } catch (error) {
        console.error('Error al realizar la búsqueda:', error);
      }
    } else {
      results = [];
    }
  }
</script>

<main class="container">
  
  <div class="search-box">
    <svg class="book-icon" viewBox="0 0 24 24">
        <path d="M21,4H3A2,2 0 0,0 1,6V19A2,2 0 0,0 3,21H21A2,2 0 0,0 23,19V6A2,2 0 0,0 21,4M3,19V6H11V19H3M21,19H13V6H21V19M14,9.5H20V11H14V9.5M14,12H20V13.5H14V12M14,14.5H20V16H14V14.5Z"/>
    </svg>
    <input
      bind:value={query}
      placeholder="Buscar por título o autor"
      on:input={searchBooks}
    />
    <div class="search-icon">
        <svg viewBox="0 0 24 24">
            <path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"/>
        </svg>
    </div>
  </div>

  {#if results.length > 0}
    <div class="results">
      {#each results as result}
        <div class="card">
          <h3>{result.document.title}</h3>
          <p>Autor: {result.document.author}</p>
          <p>Año: {result.document.year}</p>
        </div>
      {/each}
    </div>
  {:else if query !== ""}
    <p class="no-results">No se encontraron resultados para "{query}".</p>
  {/if}
</main>

<style>
  :global(*) {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  :global(body) {
    min-height: 100vh;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .container {
    width: 100%;
    max-width: 600px;
    padding: 20px;
  }

  .search-box {
    position: relative;
    background: white;
    border-radius: 50px;
    padding: 15px 25px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    transition: all 0.3s ease;
}

  .search-box:hover {
    transform: translateY(-2px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  }

  .book-icon {
    width: 24px;
    height: 24px;
    fill: #764ba2;
    margin-right: 15px;
  }

  input {
    flex: 1;
    border: none;
    outline: none;
    font-size: 16px;
    color: #333;
  }

  input::placeholder {
    color: #999;
  }

  .search-icon {
    width: 24px;
    height: 24px;
    cursor: pointer;
  }

  .search-icon svg {
    fill: #764ba2;
    transition: transform 0.3s ease;
  }

  .search-icon:hover svg {
    transform: scale(1.1);
  }

  .results {
    margin-top: 20px;
    background: white;
    border-radius: 15px;
    padding: 20px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }

  .card {
    padding: 15px;
    border-bottom: 1px solid #eee;
    transition: all 0.3s ease;
  }

  .card:hover {
    background: #f8f9fa;
    transform: translateX(10px);
  }

  .card:last-child {
    border-bottom: none;
  }

  .card h3 {
    font-size: 18px;
    color: #333;
    margin-bottom: 5px;
  }

  .card p {
    font-size: 14px;
    color: #666;
  }

  .no-results {
    margin-top: 30px;
    color: #cfcece;
  }
</style>