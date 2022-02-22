import React from 'react';
import {Route} from "react-router-dom";
import { Routes } from "react-router-dom";
import {useSelector} from "react-redux";
import Category from '../components/Categories/categories';
import Trands from '../pages/Trands';
import Random from '../pages/Random';
import InsideCategory from '../components/inside-category/insideCadegory';
import EndCategory from '../components/endCategory/endCategory';

const Router = () => {
    const categoryState = useSelector(state => state.CategoriesReducer.categories);
    const categoryInside =  categoryState.map((item, index) => <Route exact key={index} path={`/${item.name_encoded}`} element={<InsideCategory name={item.name_encoded}/>} />)
    const categoryEnd = categoryState.map(item => {
            return item.subcategories.map(item => {
                return <Route path={`${item.name_encoded}`} element={<EndCategory name={item.name_encoded} />} />
            })
        })
    return (
        <div className="d-flex" style={{display:"flex"}}>
            <Category mapCategory={categoryState}/>
                <Routes>
                <Route path={'/'} element={ <Trands /> } />
                <Route path={'/random'} element={ <Random /> } />
                    {categoryInside}
                    {categoryEnd}
                </Routes>
        </div>
    );
};

export default Router;