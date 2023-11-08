// import Book from './components/Book.js'; 
// import booksData from './components/booksData.js';

// function App() {
//   return (
//     <div className="App">
//       <h1>Book List</h1>
//       <div className="book-list">
//         {booksData.map((book) => (
//           <Book book={book} key={book.id} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;


// Part 2: Nested lists in one component

import { recipes } from './components/data.js'; 

export default function RecipeList() {
  return (
    <div>
      <h1>Recipes</h1>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            <h2>{recipe.name}</h2>
            <ul>
              {recipe.ingredients.map((ingredient) => (
                <li key={ingredient}>{ingredient}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}