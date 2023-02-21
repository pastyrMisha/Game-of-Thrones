Game of Thrones API (React + Redux)
https://zvendinov.ru/got

https://airbnb.io/enzyme/
https://reactjs.org/docs/test-renderer.html — библиотека для работы с react-компонентами

npm install enzyme enzyme-adapter-react-16 react-test-renderer

<!-- Тестировать от малого к большему -->
<!-- JEST — фреймворк чисто для тестирования -->
<!-- Test Renderer — библиотека для работы с react-компонентами -->

https://jestjs.io/en/

npm run test

<!-- Snapshot - снимок, с ним будет сравниваться различия с тестом -->

shallow — поверхностный снимок Enzyme

npm run test -u перезаписать Snapshot

https://github.com/jest-community/jest-extended  — проверка на тип данных на массив, объект, data

npm install jest-extended --save-dev

"jest": {
  "setupTestFrameworkScriptFile": "jest-extended"
}

import {mount} from 'enzyme'; — протестировать события на вложенных элементах
