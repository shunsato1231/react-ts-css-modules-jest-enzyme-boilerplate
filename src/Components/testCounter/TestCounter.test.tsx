// import React from 'react';
// import { shallow } from 'enzyme'
// import TestCounter from './testCounter.conponent'
// import useIncrement from './testCounter.hook'

// const mockedUseIncrement = useIncrement as jest.Mock<useIncrement>

// describe('[COMPOENNT] Increment', () => {
// 	it('should render with value from custom hook', () => {
// 		mockedUseIncrement.mockImplementation(() => {
// 			return {
// 				count: '50',
// 				increment: () => {}
// 			};
// 		});

// 		const wrapper = shallow(<TestCounter />);
// 		expect(wrapper.find('.value').text()).toEqual('50');
// 	});

// 	it('shold call counter increment when clicking +1', () => {
// 		const incrementMock = jest.fn();
// 		mockedUseIncrement.mockImplementation(() => {
// 			return {
// 				count: '50',
// 				increment: incrementMock
// 			};
// 		});
// 		const wrapper = shallow(<TestCounter />);
// 		wrapper.find('.increment-btn').simulate('click');
// 		expect(incrementMock).toBeCalled();
// 	});
// });