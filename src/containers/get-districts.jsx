import React, {useState,useEffect} from 'react';
import axios from 'axios';
import {getSelectDistrictItem} from '../components/get-select-item.jsx';
import OnloadData from '../components/onload-data.jsx';

const GetDistrict = ( { districtId } ) => {
    const DataLoading = OnloadData(getSelectDistrictItem);
    let [districtData, setDistrictData] = useState( {
        loading: false,
        districtList: null,
    });
    useEffect(() => { 
            try { setDistrictData( { loading:true } )
                const districtUrl = `https://api.repetit.ru/public/districts?AreaId=${districtId}`;
                axios.get(districtUrl).then((resp) => {
                    const alldistrict = resp.data;
                    setDistrictData({
                        loading: false,
                        districtList: alldistrict
                    });
                })
            }
            catch(error) {
                return console.log(error);
            }
    },[districtId],[setDistrictData]);

    return <DataLoading isLoading={districtData.loading} key={districtData.districtList} name={districtData.districtList}/>;
}

export default GetDistrict;