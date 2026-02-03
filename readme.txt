Automatización de pruebas E2E y API Testing - Cypress (OPCION 3 E2E y OPCION 3 API)

En este proyecto se incluye tanto la Automatización de pruebas E2E asi como las pruebas de API, ambas realizadas utilizando el framework de Cypress.

Se utilizó:
- Node.js
- Cypress
- Mochawesome (Reportes)

Requisitos de instalación:
- Node.js
- Navegador Chrome

Estructura:
- Dentro del proyecto se crearon diferentes carpetas:
    - E2E
    - API
    - Reports

Pasos de ejecución:
1. Clonar el repositorio de Github.
2. En la raiz del proyecto ejecutar el comando a traves de una terminal: npm install
3. Ejecutar las pruebas haciendo uso del navegador: npx cypress open
4. Ejecutar las pruebas a nivel de consola: npx cypress run
5. Para la generación de reportes ejecutar el siguiente orden:
    - npx cypress run
    - npx marge cypress/reports/*.json -f report -o cypress/reports/html
6. Los reportes se generan en la carpeta de reports.

