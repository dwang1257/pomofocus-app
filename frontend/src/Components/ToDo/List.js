import React, { useState, useEffect } from 'react';
import './List.css';
import { getItems, createItem, deleteItem } from '../services/api';

const List = () => {
    const [items, setItems] = useState([]);
    const [newItemName, setNewItemName] = useState('');

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await getItems();
                setItems(response.data.getItems);
            } catch (error) {
                console.error('Error fetching items:', error);
            }
        };
    
        fetchItems();
    }, [items]);
    

    const handleCreateItem = async () => {
        try {
            const newItem = { name: newItemName, completed: false };
            const response = await createItem(newItem);
            setItems([...items, response.data.item1]);
            setNewItemName('');
        } catch (error) {
            console.error(error);
        }
    };

    const handleDeleteItem = async (id) => {
        try {
            await deleteItem(id);
        } catch (error) {
            console.error(error);
        }
    };
    

    return (
        <div className="main-block">
            <h1 className='TitleBlock'>Task List</h1>
            <div>
                <input
                    type="text"
                    value={newItemName}
                    onChange={(e) => setNewItemName(e.target.value)}
                    placeholder="New item name"
                />
                <button onClick={handleCreateItem}>Add Item</button>
            </div>
            <ul>
                {items.map(item => (
                    <li key={item._id}>
                        {item.name}
                        <button onClick={() => handleDeleteItem(item._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default List;
