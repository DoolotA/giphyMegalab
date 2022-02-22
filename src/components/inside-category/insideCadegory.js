import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {category_inside} from "../../redux/actions";
import Category from '../Categories/categories';
import InfiniteScroll from "react-infinite-scroll-component";
import "../../index"
let counter = 20;

const InsideCategory = ({name}) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(category_inside(name, counter))
    }, [])
    const categoryState = useSelector(state => state.CategoriesReducer.categories);
    const resSearch = categoryState.find(item =>  item.name_encoded === name);
    const insideState = useSelector(state => state.CategoriesReducer.insideCategory);
    const mapInside = insideState.map((item, index) => <p key={index} className="px-2"><img className='doni-img' src={item.images.fixed_height.url}/> </p>);
    const fetchMoreInside = () => {
        if (counter > 199){
            alert("Больше гифки нетууууу")
        } else {
            setTimeout(() => {
                counter += 5
                dispatch(category_inside(name,counter));
            }, 1500)
        }
    }
    return (
        <div style={{display:"flex"}}>
            <Category mapCategory={resSearch.subcategories} />
        <div>
            <h1 style={{color:"white", paddingTop:"40px"}}>{name}</h1>
                <div>
                    <div>
                        </div>
                        <InfiniteScroll
                            dataLength={insideState.length}
                            next={fetchMoreInside}
                            hasMore={true}
                            loader={<h4>Загрузка</h4>}
                        >
                            <div className='doni'>
                                {mapInside}
                            </div>
                        </InfiniteScroll>
                    </div>
            </div>
        </div>
    );
};

export default InsideCategory;