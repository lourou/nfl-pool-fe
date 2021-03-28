/// <reference types="cypress" />
// ts-prune-ignore-next
export {};

describe('Login', () => {
	// For desktop view
	context('720p resolution', () => {
		beforeEach(() => {
			/**
			 * Run these tests as if in a desktop browser,
			 * with a 720p monitor
			 */
			cy.viewport(1280, 720);
		});
		describe('When you visit home', () => {
			it('should redirect to login', () => {
				cy.visit('/');
				cy.url().should('include', '/auth/login');
				cy.percySnapshot();
			});
		});
	});

	context('iphone-5 resolution', () => {
		beforeEach(() => {
			/**
			 * Run these tests as if in an iPhone 5
			 */
			cy.viewport('iphone-5');
		});
		describe('When you visit home', () => {
			it('should redirect to login', () => {
				cy.visit('/');
				cy.url().should('include', '/auth/login');
				cy.percySnapshot();
			});
		});
	});
});
