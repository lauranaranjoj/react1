import React from "react";

function useLocalStorage(itemName, initialValue)
{
  const[error, setError] = React.useState(false);
  const[loading, setLoading] = React.useState(true);
  const [items, setItems,] = React.useState(initialValue);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        console.log('loadLocalStorage');
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItems;
      
        if(!localStorageItem){
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItems = initialValue;
        }
        else{
          parsedItems = JSON.parse(localStorageItem);
        } 
        
        setItems(parsedItems);
        setLoading(false);
        
      } catch (error) {
        setError(true);
      }
    }, 5000);
  }, []);

  const saveItems = (newTodos) => {
    try {
      const stringJsonTodos = JSON.stringify(newTodos);
      localStorage.setItem(itemName, stringJsonTodos);
      setItems(newTodos);
    } catch (error) {
      setError(error);
    }
  };

  return {items, saveItems, loading, error};

}

export { useLocalStorage };