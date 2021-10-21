
# Search Gif App 
## Descripcion
Esta aplicacion muestra 10 gifs que coinciden con el parametro de busqueda.
## Pasos parar realzar test para react 17.

1. Instalamos Enzyme : npm install --save-dev enzyme

2. Instalamos Enzyme-to-json : npm install --save-dev enzyme-to-json

3. Instalamos Adaptador para React 17 (noten que agregamos algo adicional al final para que pueda correr) : npm install --save-dev @wojtekmaj/enzyme-adapter-react-17 --legacy-peer-deps

4. En el archivo setupTests.js agregamos
``
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import {createSerializer} from 'enzyme-to-json';
 
Enzyme.configure({ adapter: new Adapter() });
expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));
``
