import renderer from 'react-test-renderer'
import React from 'react'
import Button from '../Button'

describe('button', () => {
    it('是个 div', () => {
        const json = renderer.create(<Button/>).toJSON()
        expect(json).toMatchSnapshot()
        // expect(1).toEqual(1)
    })
})