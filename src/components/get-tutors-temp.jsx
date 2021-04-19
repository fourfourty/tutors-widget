import React,{useState} from 'react';

const GetTutorsTemp = ({data}) => {
    let [slicesCoutn, setSlicesCount] = useState(10);
 return (
        <section className="tutors">
            <div className="tutors__wrap wrap">
                <ul className="tutors__list">
                {
                    (data && data.length !== 0) ? data.slice(0,slicesCoutn).map(el => {
                    return (
                    <li key={el.id} className="tutors__item">
                        <div class="tutors__img-content">
                            <img className="tutors__img" src={el.photoPath} alt="tutor-img"></img>
                        </div>
                        <div className="tutors__discript">
                            <span className="tutors__name">{el.firstName} {el.patrName}</span>
                            <span className="tutors__subj">{el.teachingSubjects[0].subject.name}</span>
                            <span className="tutors__price"> От {el.teachingSubjects[0].price} р</span>
                        </div> 
                    </li>
                    )
                    }) : <li id="error">Сведения отсутствуют</li>
                }
                </ul>
                <div className="tutors__btns">
                    <button onClick={() => setSlicesCount(slicesCoutn += 10)} className="tutors__btn-more buttons">Загрузить еще</button>
                </div>
            </div>
        </section>
     )
}

export default GetTutorsTemp;