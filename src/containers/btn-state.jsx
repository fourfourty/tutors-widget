import React from 'react'

const GetBtn = ( { flag,subj,areaId,toggleFlag } ) => {

    return (
        <input type="submit" 
            onClick={(e) => {
                e.preventDefault();
                if (subj || areaId) return toggleFlag(flag = true)
            }}
            className="finding-form__btn-submit buttons"
            value="Применить фильтр"
            />
    )
}

export default GetBtn;