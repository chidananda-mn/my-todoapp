import React from 'react';
import './RenderListItems.css';

export const RenderListItems = ({ selectedItemsList, setSelectedItemsList})=> {

  const deleteListItem = (key)=> {
    const newList = selectedItemsList.filter((_each)=> _each.key!==key)
    setSelectedItemsList(newList)
  }

  return (
    selectedItemsList.map((_each) => <ul key={_each.key} className="List-view"><li>{_each.item}</li><p onClick={() => deleteListItem(_each.key)}>x</p></ul>)
  )
}