import { shallow } from "enzyme" ;
import {GifExpertApp} from '../GifExpertApp'

describe('Tests de componente <GifExpertApp />', () => {
    
})

test('Debe ser igual al snapshot', () => {
    
    const wrapper = shallow(<GifExpertApp />);
      expect(wrapper).toMatchSnapshot();
});

test('Debe de mostrar una lista de categorias', () => {
    const categories = ['Dragon Ball','Samurai x'];
    const wrapper = shallow(<GifExpertApp defaultCategories = {categories} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('GifGrid').length).toBe(categories.length);

})

