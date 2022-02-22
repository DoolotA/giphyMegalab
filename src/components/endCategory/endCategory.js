import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import { category_inside } from '../../redux/actions';
import InfiniteScroll from "react-infinite-scroll-component";
import "../../index"
let counter = 20;
const EndCategory = ({name}) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(category_inside(name, counter))
    }, [])

    const endState = useSelector(state => state.CategoriesReducer.insideCategory);
    const mapEnd = endState.map((item, index) => <p key={index} className="px-2"><img className='doni-img1' src={item.images.fixed_height.url}/> </p>);
    const fetchMoreEnd = () => {
        if (counter > 199){
            alert("Больше гивок нет")
        } else {
            setTimeout(() => {
                counter += 5
                dispatch(category_inside(name,counter));
            }, 1500)
        }
    }
    return (
        <div>
            <h1 style={{color:"white", paddingTop:"40px"}}>{name}</h1>
            <div>
                <div>
                    <InfiniteScroll
                        dataLength={mapEnd.length}
                        next={fetchMoreEnd}
                        hasMore={true}
                        loader={<h4>load</h4>}
                    >
                    <div className='doni1'>
                        {mapEnd}
                    </div>
                    </InfiniteScroll>
                </div>
            </div>
        </div>
    );
};

export default EndCategory; 