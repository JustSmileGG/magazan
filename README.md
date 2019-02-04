# Подготовка к работе и запуск!

## Установка ноды (Node.js) и npm(Node package manager).
Я предпочитаю пользоваться `nvm(Node Verson manager)` для установки ноды, так как нахожу это удобным.
Для того что бы скачать `nvm` и установить ноду нужно:

### Windows 
1. Перейти на <a> https://github.com/coreybutler/nvm-windows/releases </a> и скачать поcледний релиз `nvm-setup.zip`,
расспаковать архив и установить `nvm` запуском `.exe` файла, после чего перезагрузить кампуктер.
2. Открыть консоль (powershell желательно) и сделать следующие действия:
######2.1 - Установить ноду `nvm install <version>` например `nvm install 11.0.0`.
######2.2 - Выбрать ноду для  использования `nvm use <version>` например `nvm use 11.0.0`.
######2.3 Проверить версию node.js и npm командам `node -v` и `npm -v` вывод должен быть присерно такой: <b>v11.0.0</b> - для ноды и <b>v6.4.1</b> для npm.

## Установка Yarn
Yarn  используеться для управления пакетами node.js, как npm, только yarn быстрее и там есть свои нюансы, но мы сейчас не о них, так что не важно)
И так для становки нужно всего ничего:
1. Запустить Windows PowerShell
2. И установить yarn глобально через npm, тут есть 2 варианта команд, которые делают одно и тоже и обе установят одинаково `npm install -g yarn` или `npm install yarn --global` Можно использовать любую, это не важно. Всё, ярн у нас есть.
3. Перезагружаем ПК, уже и так много сделали, а это винда, мало ли, не помешает)

## Запуск проекта
Запускаеться всё очень просто.
1. Скачиваем `.zip` и распаковываем его в удобную для себя папку.
2. Заходим в папку что была в архиве.
4. Открывам PowerShell в этой папке или же можно напрямую с повершела добратся в эту директорию.
5. Устанавливаем пакеты, пишем `yarn install` и ждём пока установятся.
6. Запускаем проект `yarn start` и вуа ля, спустя время сборики всё работает.

Для того что бы всё работало как должно нужен <b>нормальный интернет</b>.

# Всё что описано ниже это CREATE-REACT-APP, если интересно можно и вникнуть(желательно вникнуть) но не обязательно



This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
