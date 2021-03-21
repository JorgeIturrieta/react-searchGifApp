import React from 'react';
import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';
import '@testing-library/jest-dom';

describe('Pruebas en < AddCategory />', () => {
    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories} />)
    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />)
    })
    test('Debe mostrar el componente correctamente', () => {
        expect(wrapper).toMatchSnapshot();

    })

    test('Debe de cambiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value = 'Hola mundo';
        input.simulate('change', { target: { value } });
    })

    test('No debe de postear la informacion con submit (prevent Default)', () => {
        wrapper.find('form').simulate('submit', { preventDefault() { } });
        expect(setCategories).not.toHaveBeenCalled();
    })

    test('Debe de llamar el setCategories y limpiar la caja de texto ', () => {
        /* 1 Simular el inputChange
           2 Simular el submit del formulario
           3 Set categories se debe de haber llamado
           4 el valor del input debe de estar vacio 
         */
        // Simular el inputChange
        const input = wrapper.find('input');
        const value = 'Hola soy Goku';
        input.simulate('change', { target: { value } });
        // Simular el submit del formulario
        wrapper.find('form').simulate('submit', { preventDefault() { } });
        // Set Categories se debe llamar
        expect(setCategories).toHaveBeenCalledWith( expect.any(Function) ); 
        // El valor del input debe quedar vacio cuando finaliza setCategories
        expect(wrapper.find('input').prop('value')).toBe('');
    })
})
