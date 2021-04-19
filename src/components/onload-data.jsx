import React from 'react';

const OnloadData = (Component) => {
    return function LoadingData ({ isLoading, ...props}) {
        if (!isLoading) return <Component {...props} />

        else return (
                <option className="tutors-loading">'Подождите, данные загружаются!'</option>
        )
    }
}
export default OnloadData;
