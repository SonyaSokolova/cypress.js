describe('Тестирование покупки аватара', function () {
   it('Успешная покупка', function () {
        cy.visit('https://pokemonbattle.me/');
        cy.get(':nth-child(1) > .auth__input').type('s7297281@yandex.ru');
        cy.get('#password').type('Aa09041205');
        cy.get('.auth__button').click();
        cy.get('.header__btns > [href="/shop"]').click();
        cy.get(':nth-child(1) > .shop__button').click();
        cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('2202207167230633');
        cy.get(':nth-child(1) > .pay_base-input-v2').type('1227');
        cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');
        cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('sonya sokolova');
        cy.get('.pay-btn').click();
        cy.get('#cardnumber').type('56456');
        cy.get('.payment__submit-button').click();
        cy.get('.payment__font-for-success').should('be.visible');
        cy.get('.payment__font-for-success').contains('Покупка прошла успешно');
    })
    it('Смена аватара для изменения', function () {
        cy.visit('https://pokemonbattle.me/');
        cy.get(':nth-child(1) > .auth__input').type('s7297281@yandex.ru');
        cy.get('#password').type('Aa09041205');
        cy.get('.auth__button').click();
        cy.get('.header__btns > [href="/shop"]').click();
        cy.get(':nth-child(5) > .shop__button').click();
        cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('2202207167230633');
        cy.get(':nth-child(1) > .pay_base-input-v2').type('1227');
        cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');
        cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('sonya sokolova');
        cy.get('.pay-btn').click();
        cy.get('#cardnumber').type('56456');
        cy.get('.payment__submit-button').click();
        cy.get('.payment__font-for-success').should('be.visible'); 
        cy.get('.payment__font-for-success').contains('Покупка прошла успешно'); 
    })
})
