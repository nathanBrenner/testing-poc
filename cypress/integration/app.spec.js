describe('App', () => {
	it('runs', () => {
		cy.visit('/')
			.assertRoute('/')
			.getByText('About')
			.click()
			.assertRoute('/about')
			.getByText('Home')
			.click()
			.assertRoute('/')
	});

	it('submits a form', () => {
		cy.visit('/')
			.assertRoute('/')
			.getByLabelText('todo:')
			.type('do something today')
			.getByText('Submit')
			.click()
			.assertRoute('/about')
	})
})