import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [items, setItems] = React.useState([]);

  function addNote(newNote) {
    setItems(prevItems => {
      return [...prevItems, newNote];
    });
  }

  function deleteNote(id) {
    setItems(prevItems => {
      return prevItems.filter((prevItem, index) => {
        return index !== id;
      }); 
    });
  }

  return (
    <div>
      <Header />

      <CreateArea
        onAdd={addNote}  />

      {items.map((item, index) => {
        return (
          <Note 
            key={index}
            id={index} 
            title={item.title}
            content={item.content}
            onDelete={deleteNote} />
        );
      })}

      

      <Footer />
    </div>
  );
}

export default App;
