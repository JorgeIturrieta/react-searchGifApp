
import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid';


export const GifExpertApp = ( {defaultCategories = []}) => {


    const [categories, setCategories] = useState(defaultCategories);

    return (
        <>
            <h1>GifExpertApp</h1>
            <hr />
            <AddCategory setCategories={setCategories} />
            <ol>
                {categories.map((category) => (
                    <GifGrid
                     key= {category}
                     category = { category }/>
                )
                   
                )
                }
            </ol>
        </>
    )
}
