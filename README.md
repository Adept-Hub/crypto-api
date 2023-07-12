<p align=center>
<img width=380px height=150px src="https://sun9-68.userapi.com/impg/coh43x1yYc7EB15JBNaL5aBP_fkv05ryfeh7AA/yWA4NRqQOdc.jpg?size=512x512&quality=95&sign=6fc11c4ba3a07490c3be051da775b287&type=album"></img>
</p>
<p align=center>
<a href="https://www.npmjs.com/package/vk-crypto-api"><img src="https://img.shields.io/npm/v/vk-crypto-api.svg?style=flat-square" alt="NPM version"></a>
<a href="https://www.npmjs.com/package/vk-crypto-api"><img src="https://img.shields.io/npm/dt/vk-crypto-api.svg?style=flat-square" alt="NPM downloads"></a></p>
<div align="center">

**Модуль** для удобного использования **[Crypto API](https://vk.com/@crypto_play-api)**.
  
От **[AdepT-Hub](https://adept-hub.ru)** с  ❤.

</div>



## 📦 Установка

```sh
$ npm install vk-crypto-api
```
<br>

## 🚀 Использование

```js
const { CryptoApi } = require('vk-crypto-api')

const crypto = new CryptoApi({
    token: 'your_token'
})

```

## 💸 Получение баланса пользователей

|Параметры|Описание|Тип|
|-|-|-|
|user_id|Айди пользователя у которого нужно проверить баланс|Number|

```js
async function getUserCoins() {
    const result = await crypto.getUserCoins({ user_id: 'user_id' }) // Делаем запрос для получения баланса
    console.log(result); // Выводим результат в консоль 
}getUserCoins();
```

## 📄 Получение истории переводов

```js
async function getTransfers() {
    const result = await crypto.getTransfers({ user_id: 'your_id' }) // Делаем запрос для получения трансакицй
    console.log(result); // Выводим результат в консоль 
}getTransfers();
```
## 💳 Перевод коинов пользователю

|Параметры|Описание|Тип|
|-|-|-|
|recipient_id|Айди пользователя которому нужно сделать перевод|Number|
|sender_id| Ваш айди|Number
|amount|Сумма перевода (по дефолту 0.1)|Number|

```js
async function transfer() {
    const result = await crypto.transfer({ recipient_id: 'recipient_id', sender_id: 'your_id', amount: 'amount_coins' }) // Делаем запрос для перевода коинов другому пользователю
    console.log(result); // Выводим результат в консоль 
}transfer();
```


## 🔗 Настройка callback уведомлений

|Параметры|Описание|Тип|
|-|-|-|
|url|Адрес сервера для получения уведомлений|String|
|sender_id|Ваш айди|Number|

```js
async function connectServer() {
    const result = await crypto.connectServer({ url: 'your_address', user_id: 'your_id' }) // Делаем запрос для настройки отправки callback уведомлений на Ваш сервер
    console.log(result); // Выводим результат в консоль 
}connectServer();
```