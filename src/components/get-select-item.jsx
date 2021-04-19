import React from 'react';

export const GetSelectItem = ( {id,name} ) => {
    return <option id={id}>{name}</option>
}

export const getSelectDistrictItem = ({name}) => {
     return (
        (name !== null) ? name.map(el => <option id={el.id}>{el.name}</option>) : <option id="error">Пожалуйста выберите город</option>
     )
}
