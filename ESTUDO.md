#Aqui se encontra alguns apontamentos durante a prática e estudo do Cypress

- Eslint é uma ótima forma de realizar uma análise estática

- Clear() ótimo para limpar um campo
- Realização de estes com fluxos que necessitam de código de acesso enviado por e-mai pode ser utilizado o serviço  [Mailsaour](https://github.com/analuizanasc). Existe uma biblioteca que auxilia a integração dele com o cypress, mantida pelos mesmos.
- Proteção de dados sensíveiS: Cria-se um arquivo "cypress.env.example.json". O mesmo será uma cópia do "cypress.env.json" com dados ficticios. Tem como objetivo passar um exemplo da estrutura de dados utilizada no ambiente. 
- Usar { log: false } faz com que dado não seja exibido no log. Exemplo de uso: cy.get('#password').type(password, { log: false })
- Cy.session é uma ótima forma de otimizar os testes, tornando-os mais rápidos e independentes. Esse comando evita ter que utilizar sempre a interface gráfica para a realização de testes. Assim testes ficam mais rápidos e independentes. 
- Para a realização de testes com formulário de cartão dentro de um iframe é necessário uma biblioteca "cypress-iframe". O Cypress ainda não suporta nativamente iframes.
- Utilizar o GitHub Actions para criar workflows de integração contínua e Cypress Cloud para gestão de testes online. 

# Notes from Practicing and Studying Cypress

- ESLint is a great tool for static code analysis.  
- Clear() is excellent for clearing input fields.  
- Testing flows that require access codes sent via email can leverage the [Mailsaour](https://github.com/analuizanasc) service. There’s a library maintained by the same team that facilitates its integration with Cypress.  
- Sensitive Data Protection: Create a file named `cypress.env.example.json` as a copy of `cypress.env.json` with dummy data. This provides an example of the data structure used in the environment without exposing sensitive information.  
- Using `{ log: false }` ensures that sensitive data is not displayed in the log. Example: Cy.get('#password').type(password, { log: false });
- Cy.session is a great way to optimize tests, making them faster and more independent. This command avoids the need to always use the graphical interface for testing, resulting in quicker and more independent tests.
- For testing credit card forms inside an iframe, you’ll need a library called cypress-iframe. Cypress does not yet natively support iframes.
- Use GitHub Actions to create continuous integration workflows and Cypress Cloud for online test management.

