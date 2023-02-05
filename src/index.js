import _ from 'lodash'
import { NAME as NAME_OF_HIDE } from './utilities';
import tiger from './utilities';

// console.log(utilities.NiJou(3));
console.log(NAME_OF_HIDE);
console.log(tiger.say());

function component(){
    const element = document.createElement('div');
    const array = ['Hello', 'webpack', '!!!'];
    element.innerHTML = _.join(array, ' ')
    return element;
}

document.body.appendChild(component());