
import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid';


export const GifExpertApp = () => {


    const [categories, setCategories] = useState(['One Punch']);
    /*    const handleAdd = () => {
           setCategories([...categories, 'Ataque a los titanes']);
           setCategories(cats => [...cats ,'Ataque a los titanes'])
       } */
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
