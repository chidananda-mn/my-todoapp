import React from 'react';
import './RenderListItems.css';

export const RenderListItems = ({ selectedItemsList, setSelectedItemsList})=> {

  const deleteListItem = (key)=> {
    const newList = selectedItemsList.filter((_each)=> _each.key!==key)
    setSelectedItemsList(newList)
  }

  return (
    selectedItemsList.map((_each) => <div key={_each.key} className="List-view"><p>{_each.item}</p><button onClick={() => deleteListItem(_each.key)}>x</button></div>)
  )
}