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
	})
})