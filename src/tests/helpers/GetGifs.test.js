import { getGifs } from "../../helpers/getGifs"
import React from 'react';
import {shallow} from 'enzyme';
describe('Pruebas en getGifs Fetch', () => {
    test('Debe de traer 10 elementos', async () => {
        const gifs = await getGifs('Goku');
        expect(gifs.length).toBe(10);
    })

})
