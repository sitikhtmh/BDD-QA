const URL = 'http://zero.webappsecurity.com/'
const SERACH = '#searchTerm'

class LoginPage {
	static visit() {
		cy.visit(URL)
	}

	static fillSearch() {
		cy.get(SERACH).type('online {enter}')
	}

}
export default LoginPage;
