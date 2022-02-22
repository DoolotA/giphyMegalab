import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {category_geta, category_inside, nullCategory} from "../../redux/actions";
import {Link} from "react-router-dom";


const Category = ({mapCategory}) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(category_geta())
    }, []);
    function btnCategory(name){
        dispatch(nullCategory())
        dispatch(category_inside(name))
    }
    const result = mapCategory.map((item, index) => <li key={index} className="pb-2"><Link onClick={() => btnCategory(item.name_encoded)} to={`/${item.name_encoded}`}>{item.name_encoded}</Link></li>);
    return (
        <div style={{textAlign:'left',backgroundColor:"orange"}}>
            <ul style={{listStyle:"none",width:"130px",paddingTop:"30px"}}>
                <h3 style={{fontSize:"20px"}}>CATEGORIES GIPHY</h3>
                {result.length ? result : <h3>...</h3>}
            </ul>
        </div>
    );
};

export default Category;

