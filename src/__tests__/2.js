

const sum = (a, b) => a + b;

test('sum adds numbers', () => {
    const result = sum(3,7);
    const expected = 10;
    expect(result).toBe(expected)

})


it('runs toBe tests', () => {
    
    expect(1).toBe(1);
    expect(true).toBe(true)
    expect({}).not.toBe({})
})

it('demonstrates that toEqual runs a visual check as oppose to comparing references', () => {
    const actual =   {"a": 1, "b": [1,2,3]}
    const expected = {"a": 1, "b": [1,2,3]}
    expect(actual).toEqual(expected);
})

it('demonstrates toMatchObject which does partial match of object being compared', () => {
    const actual = {a: {b: 'd'}, d: 'e'}
    const expected = {a: {b: 'd'}}
    expect(actual).toMatchObject(expected)
})

it('shows the mock function usage', () => {
    const mockFn = jest.fn();

    expect(mockFn).toHaveBeenCalledTimes(0);
    mockFn()

    expect(mockFn).toHaveBeenCalledTimes(1);

})

it('show usage of toHaveBeenCalledWith', () => {
    const funk = jest.fn();
    funk('abc', {'a': 123})
    expect(funk).toHaveBeenCalledWith('abc', {'a': 123});

})

it('demonstrates the jest schema feature', () => {
    const myObj = {
        count: 23,
        meta: {display: "some value"}
    }

    const schema = {
        count: expect.any(Number),
        meta: {display: expect.stringContaining('value')}
    }

    expect(myObj).toEqual(schema);

})

it("demos the mock function mock object with calls array", () => {
    const funk = jest.fn()
    funk('a', {a: 12})
    const firstCall = funk.mock.calls[0];
    const [first, second] = firstCall[0];
    expect(first).toEqual('a')
    

})