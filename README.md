# Шаблон приложения ReactJS: быстрый старт пустого проекта.

Привет! Рады приветствовать вас в текущем репозитории.
Этот шаблон [React](https://react.dev/) приложения позволяет быстро начать разработку проекта.
Включает в себя пример структуры каталогов компонентов и содержит минимальный набор файлов и настроек, который нужен для запуска разработки своего приложения в кратчайший срок.

## Описание ключевых особенностей проекта

Данный проект является полноценным стартовым шаблоном, который включает все необходимые функции для начала разработки.

Одной из ключевых особенностей является удобный интерфейс авторизации, который реализован через мощный менеджер состояний MobX.

Для работы с данными в проекте реализовано общее ядро, которое позволяет удобно работать с элементами сущности, такими как атрибуты,
связи, коллекции. Это значительно упрощает процесс создания новых компонентов и функциональность, а также позволяет более гибко ими оперировать.

Работа с конечными точками и запросами на API также была реализована с помощью удобного инструмента.
Это позволяет быстро получать необходимые данные для отображения пользователю, а также легко отправлять данные на сервер.

Проект также содержит удобную настройку окружения тестирования сервисов и компонентов на базе Jest,
что позволяет тестировать весь функционал приложения.

Стилизация компонентов реализована на основе библиотеки Bootstrap, что позволяет создавать универсальные интерфейсы для пользователей.

Для версии dev настройки контейнеров Docker позволяют удобно и быстро запускать приложение в различных окружениях.
Для версии prod, настройки контейнеров Docker также включают проксирование сервера Nginx, что позволяет безопасно обновлять приложение в продакшн.
Это значительно упрощает процесс разработки, позволяя сосредоточиться на создании функциональности в команде.

## Быстрый запуск через: `локального окружения`
Прежде всего, убедитесь, что установлен `Node.js`, рекомендуем версию `^22.12.0`.

### 1. Установка
Затем в терминале перейдите в корневую директорию проекта и выполните команду `npm install`, чтобы установить все необходимые зависимости.

### 2. Запуск режима разработки
Далее, вы можете запустить приложение в режиме разработки, используя команду `npm run dev`.
По умолчанию сервер разработки инициализируется на порту 3010 и будет доступен по адресу [http://localhost:3010](http://localhost:3010).

### 3. Запуск режима развертывания
Когда вы будете готовы перейти в режим производства, выполните команду `npm run prod`.
Эта команда соберет оптимизированную версию приложения, которая готова к развертыванию в продакшн.

## Быстрый запуск через:`окружения docker`

В проекте используется утилита `Docker` для создания виртуального окружения в контексте контейнерах.
Это помогает создавать универсальное окружение для разработки, тестирования и развертывания приложения на различных машинах.

### 1. Запуск среды разработки
- Сборка и запуск контейнера

```shell
docker-compose up -d dev-node --build
```

- Установка всех зависимостей

```shell
docker-compose exec dev-node npm install
```

- Запуск dev сервера

```shell
docker-compose exec dev-node npm run dev
```

Команда запустит приложение React в Docker-контейнере и сделает его доступным по адресу [http://localhost:3010](http://localhost:3010).

### 2. Запуск среды развертывания
```shell
docker-compose up -d prod-nginx --build
```
Команда сформирует производственную сборку проекта и сконфигурирует nginx для отображения статических файлов приложение React
в Docker-контейнере, и сделает его доступным по адресу [http://localhost:3030](http://localhost:3030).

Для получения дополнительной информации по использованию Docker в проекте,
рекомендуется обратиться к официальной документации на сайте [https://docs.docker.com/.](https://docs.docker.com/).