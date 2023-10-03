import React from 'react';

const title = 'Todo List';
const todoList = [ 
  {
    title: "Complete lesson material",
    objectID: 0,
  },
  {
    title: "Complete assignment",
    objectID: 1,
  },
  {
    title: "Submit assignment",
    objectID: 2,
  }
];

function App() {
  return (
    <div style={{ textAlign: 'center' }}>
      <header>
        <h1>
          {title}
        </h1>
        </header>

        <ul>
            {todoList.map(function(item) {
              return (
                <li key={item.objectID}>
                  <span>{item.title}</span>
                </li>
              );
            })};
        </ul>
    </div>
  );
}

export default App;
