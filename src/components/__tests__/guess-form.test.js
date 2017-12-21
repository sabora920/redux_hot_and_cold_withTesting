import '../testConfig'
import React from 'react';
import GuessForm from '../guess-form';
import { makeGuess } from '../../actions';
import { shallow, mount } from 'enzyme';

describe('<GuessForm />', () => {
    it('Renders without crashing', () => {
        shallow(<GuessForm />);
      });

    it('should set guess to the correct number input', () =>{
        const value = '10';
        const spy = jest.fn();
        const wrapper = mount(<GuessForm dispatch={spy} />);
        wrapper.find('input[type="number"]').instance().value = value;
        button.simulate('submit');
        expect(spy).toHaveBeenCalledWith(makeGuess(value))
    })
})