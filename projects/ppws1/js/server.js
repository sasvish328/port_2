const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Разрешаем обработку JSON-данных
app.use(bodyParser.json());

// Разрешаем обработку данных формы
app.use(bodyParser.urlencoded({ extended: true }));

// Разрешаем запросы с других доменов (если необходимо)
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'OPTIONS, POST');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// Обработчик POST-запроса
app.post('/', (req, res) => {
  const { lastName, email, phoneNumber } = req.body;
  console.log('Received data:', { lastName, email, phoneNumber });
  res.send('Data received successfully!');
  // если нужны другие поля - в index.html нужно добавить пар-р name="ksdjfsdkjf" в input-ы
});

// Запуск сервера
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
