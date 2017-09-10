test('Element', ({assert, done}) => {
	assert(isValidElement(h('div')), '#isValidElement(element)')
	assert(cloneElement(h('h1', {className: 'head'})).props.className === 'head', '#cloneElement(element)')
	assert(h('h1', 'Hello World').type === 'h1', '#createElement(tag)')
	assert(h('h1', {key: 'bar'}).key === 'bar', '#createElement(..., {key: ...})')
	assert(h('h1', {ref: 'bar'}).ref === 'bar', '#createElement(..., {ref: ...})')
	assert(h('h1', {xmlns: 'bar'}).xmlns === 'bar', '#createElement(..., {xmlns: ...})')
	assert(h('div', [1, 2], 3, h('h1')).children.length===4, '#createElement(..., children)')
	done()
})
