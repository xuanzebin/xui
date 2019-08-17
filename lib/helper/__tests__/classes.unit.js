import classes from '../classes'

describe('classnames', () => {
    it('可以接受一个参数', () => {
        const className = classes('a')
        expect(className).toEqual('a')
    })
    it('可以接受 undefined 作为参数', () => {
        const className = classes('a', undefined)
        expect(className).toEqual('a')
    })
    it('可以接受各种奇怪的参数', () => {
        const className = classes('a', undefined, '中文', false, null)
        expect(className).toEqual('a 中文')
    })
    it('可以不接受参数', () => {
        const className = classes()
        expect(className).toEqual('')
    })
})