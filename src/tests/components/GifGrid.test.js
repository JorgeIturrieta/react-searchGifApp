import React from 'react';
import { GifGrid } from "../../components/GifGrid";
import { shallow } from "enzyme";
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => {
    const category = 'Dragon Ball' ;
    
    test('Debe de mostrar el componente correctamente ', () => {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true,
        }) ;
        const wrapper = shallow(<GifGrid category={category} />)
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de mostrar items cuando se cargan imágenes con el custum hock useFetchGifs', () => {
        const gifs = [{
            id: '1' ,
            title: 'Anime 1' ,
            url: 'https://localhost/cualquier/cosa.jpg'
        },
        {
            id: '2' ,
            title: 'Anime 2' ,
            url: 'https://localhost/cualquier/cosa.jpg'
        }]
        useFetchGifs.mockReturnValue({

            data: gifs,
            loading: false,
        }) ;
        const wrapper = shallow(<GifGrid category={category} />)
       // expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);       
    })


})
