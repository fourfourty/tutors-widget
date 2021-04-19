import React, { useState } from 'react';
import {GetSelectItem} from '../components/get-select-item.jsx';
import GetDistrict from './get-districts.jsx';
import ShowTutors from './show-tutor.jsx';
import GetBtn from './btn-state.jsx';

const GetForm = (props) => {
    let [userChoose, setUserChoose] = useState({
        subj: null,
        city: null,
    });
    let [flag, setFlag] = useState(false);
    let [areaId,setAriaId] = useState();
    let [district,setDistrict] = useState( {
        name: 'Укажите район',
        id: null
    });

    const {subject,city} = props;
    if(!subject || subject.length === 0) {
        return <li>Нет данных</li>
    }

    return (
        <React.Fragment>
        <form className="finding-tutors__form finding-form">
            <select 
            onChange={(e) => setUserChoose({
                subj: e.target.selectedIndex,
            })}
            required
            className="finding-form__subject select-form"
            defaultValue={'DEFAULT'}
            name="subject" 
            id="subjectSelect"
            >
                <option disabled value="DEFAULT">Укажите предмет</option>
                {subject.map((sub) => {
                    return (
                        <GetSelectItem 
                        key={sub.id}
                        id={sub.id}
                        name={sub.name}/>
                    )
                })}
            </select>
            <select  
            onChange={(e) => setAriaId(areaId = e.target.selectedIndex)}
            className="finding-form__city select-form"
            defaultValue={'DEFAULT'}
            name="city" 
            id="citySelect"
            >
                <option disabled value="DEFAULT">Укажите город</option>
                {city.map((cityName) => {
                    return (
                        <GetSelectItem 
                        key={cityName.id}
                        id={cityName.id}
                        name={cityName.name}/>
                    )
                })}
            </select>
            <select
            onChange={(e) => setDistrict({
                name: e.target.value,
                id: e.target.selectedIndex
            })}
            className="finding-form__district select-form" 
            value={district.name}
            name="district" 
            id="districtSelect"
            >
                <option disabled >Укажите район</option>
                { 
                     (areaId > 0) ? <GetDistrict districtId={areaId}/> : false
                }
            </select>
            {
                <GetBtn 
                flag={flag} 
                subj={userChoose} 
                areaId={areaId} 
                toggleFlag={setFlag}
                />
            }
        </form>
            {
                (flag) ? <ShowTutors key={userChoose.subj} cityId={areaId} districtId={district.id} subjId={userChoose.subj}/> : false 
            }
        </React.Fragment>
    )
}

export default GetForm;