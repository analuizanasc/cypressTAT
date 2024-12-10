#Aqui se encontra alguns apontamentos durante a prática e estudo do Cypress

- Cy.session é uma ótima forma de otimizar os testes, tornando-os mais rápidos e independentes.
- Clear() ótimo para limpar um campo
- Usar { log: false } faz com que dado não seja exibido no log. Exemplo de uso: cy.get('#password').type(password, { log: false })

- Parei na parte:Aula 06 (Em LIMITAÇÕES) - 10/12 - Verificar por que usar .its()
