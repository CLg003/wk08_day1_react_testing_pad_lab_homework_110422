import React from 'react';
import Calculator from '../containers/Calculator';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = mount(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.find('#number4');
    const runningTotal = container.find('#running-total');
    button4.simulate('click');
    expect(runningTotal.text()).toEqual('4');
  });
  

  // PDA tests...
  // calculator.add() - add 1 to 4 and get 5:
  it('should be able to add two numbers', () => {
    container.find('#number1').simulate('click');
    container.find('#operator-add').simulate('click');
    container.find('#number4').simulate('click');
    container.find('#operator-equals').simulate('click');
    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('5');
  });

  // calculator.subtract() subtract 4 from 7 and get 3:
  it('should be able to subtract one number from another', () => {
    container.find('#number7').simulate('click');
    container.find('#operator-subtract').simulate('click');
    container.find('#number4').simulate('click');
    container.find('#operator-equals').simulate('click');
    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('3');
  });

  // calculator.multiply() - multiply 3 by 5 and get 15:
  it('should be able to multiply two numbers', () => {
    container.find('#number3').simulate('click');
    container.find('#operator-multiply').simulate('click');
    container.find('#number5').simulate('click');
    container.find('#operator-equals').simulate('click');
    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('15');
  });

  // calculator.divide() - divide 21 by 7 and get 3:
  it('should be able to divide one number by another', () => {
    container.find('#number2').simulate('click');
    container.find('#number1').simulate('click');
    container.find('#operator-divide').simulate('click');
    container.find('#number7').simulate('click');
    container.find('#operator-equals').simulate('click');
    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('3');
  });

  // calculator.numberClick() - concatenate multiple number button clicks:
  it('should be able to accept numbers with multiple digits', () => {
    container.find('#number1').simulate('click');
    container.find('#number2').simulate('click');
    container.find('#number3').simulate('click');
    container.find('#number4').simulate('click');
    container.find('#number5').simulate('click');
    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('12345');
  });

  // calculator.operatorClick() - chain multiple operations together:
  it('should be able to carry out a sequence of operations', () => {
    container.find('#number3').simulate('click');
    container.find('#operator-add').simulate('click');
    container.find('#number4').simulate('click');
    container.find('#operator-multiply').simulate('click');
    container.find('#number5').simulate('click');
    container.find('#operator-equals').simulate('click');
    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('35');
  });

  // calculator.clearClick() - clear the running total without affecting the calculation:
  it('should be able to clear the screen mid-operation and continue the same operation', () => {
    container.find('#number3').simulate('click');
    container.find('#operator-add').simulate('click');
    container.find('#number1').simulate('click');
    container.find('#operator-add').simulate('click');
    container.find('#number9').simulate('click');
    container.find('#clear').simulate('click');
    container.find('#operator-add').simulate('click');
    container.find('#number8').simulate('click');
    container.find('#operator-equals').simulate('click');
    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('12');
  })
});



