import Header from './Header';
import AddItem from './AddItem';
import { Content } from './Content';
import Footer from './Footer';
import { useState } from 'react';
import SearchItem from './SearchItem';

function App() {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("shoppingList")).length ? 
    JSON.parse(localStorage.getItem("shoppingList")) :
    [{
        id:1,
        checked:false, 
        item:"One Kg of onion and 1 Kg of sugar"
    },
    {
        id:2,
        checked:false,
        item:"Item 2"
    },
    {
        id:3,
        checked:false,
        item:"Item 3"
    }]
  )
  
  const [newItem, setNewItem] = useState('')
  const [search, setSearch] = useState('')
  
  const saveToStorage = (newItems) => {
    setItems(newItems)
    localStorage.setItem("shoppingList", JSON.stringify(newItems))
  }
  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1
    const myNewItem = {id, checked: false, item}
    const listItems = [...items, myNewItem]
    saveToStorage(listItems)
  }


  const handleCheck = (id) => {
      const listItems =  items.map((item) => (
          item.id === id ? {...item, checked: !item.checked} : item
      ))
      saveToStorage(listItems)
  }

  const handleDelete = (id) => {
      const listItems = items.filter((item) => (
          item.id !== id
      ))
      saveToStorage(listItems)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!newItem) return;
    addItem(newItem);
    setNewItem('');
  }
  return (
    <div className="App">
      <Header title="Grocery List" />
      <AddItem 
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem
        search={search}
        setSearch={setSearch}
      />
      <Content 
        items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer 
        length={items.length}
      />
    </div>
  );
}

export default App;
