import React from 'react';
import axios from 'axios';
import { useState,useEffect } from 'react';
import GetForm from './form.jsx';
import OnloadData from '../components/onload-data.jsx';

const Form = () => {
    const DataLoading = OnloadData(GetForm);
    let [usersData, setUsersData] = useState({
        loading: false,
        subject: null,
        city: null,
    });

    useEffect(() => {
    
        try {setUsersData({loading: true})
         const subApiUrl = 'https://api.repetit.ru/public/subjects';
         const cityApiUrl = 'https://api.repetit.ru/public/areas';
         Promise.all([
            axios.get(subApiUrl),
            axios.get(cityApiUrl)]).then((resp) => {
           const allSubjects = resp[0].data;
           const allCity = resp[1].data;
           setUsersData({
               loading: false,
               subject: allSubjects,
               city: allCity,
           });
         });
       }
       catch(error) {
         return console.log(error);
       }
       }, [setUsersData]);
    
    return (
        <section className="finding-tutors">
            <div className="finding-tutors__wrap wrap">
                {
                    <DataLoading isLoading={usersData.loading} subject={usersData.subject} city={usersData.city}/>
                }
            </div>
        </section>
    )
}

export default Form;