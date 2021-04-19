import React,{useState,useEffect} from 'react';
import GetTutorsTemp from '../components/get-tutors-temp';
import OnloadData from '../components/onload-data.jsx';
import axios from 'axios';

const ShowTutors = ( { cityId,districtId,subjId } ) => {
    const DataLoading = OnloadData(GetTutorsTemp);
    let [searchParam, setSearchParam] = useState({
        subjectId: subjId,
        distId: districtId,
        areaId: cityId,
    });

    let [tutors, setTutors] = useState({
        loading: false,
        tut: null
    });
    useEffect(() => { 
        try { setTutors( {loading: true} )
            const searchUrl = `https://api.repetit.ru/public/search/teacherIds`;
            const tutorsUrl = `https://api.repetit.ru/public/teachers/short`;
            Promise.all([
                axios.get(searchUrl, {
                    params: {
                        'AreaId': searchParam.areaId,
                        'DistrictId': searchParam.distId,
                        'SubjectId': searchParam.subjectId
                    }
                }).then((resp) => {
                        const allTutorsId = resp.data;
                        console.log(allTutorsId)
                        axios.get(tutorsUrl, {
                            params: {
                                Ids: allTutorsId
                            }
                        })
                        .then((resp) => {
                            console.log(resp);
                            if(resp.status === 200) {
                                const tutorsArr = resp.data;
                            setTutors({
                                loading: false,
                                tut: tutorsArr
                            });
                            }
                        })
                    })
            ])
            }
            catch(error) {
                return console.log(error);
            }
    },[searchParam],[setTutors]);
     return (
           <DataLoading isLoading={tutors.loading} key={tutors.tut} data={tutors.tut}/>
    )
}

export default ShowTutors;