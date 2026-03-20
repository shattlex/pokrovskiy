# Backend Report

## Что реализовано

- Поднят отдельный backend на Express: `server/index.js`.
- Реализованы слои `routes/controllers/services/validators/middleware`.
- Добавлены endpoint'ы:
  - `GET /api/health`
  - `POST /api/contact`
  - `POST /api/actions/click`
- Добавлена валидация входных данных через `zod`.
- Добавлено файловое хранилище для заявок и событий кнопок:
  - `server/data/leads.json`
  - `server/data/button-events.json`
- Настроен Vite proxy для API в `vite.config.ts`.
- Подключена интеграция с Bitrix24 CRM для формы обратной связи.

## Интеграция с frontend

- Форма в `Contact.tsx` отправляет заявки на `POST /api/contact`.
- Кнопки ключевых CTA (Hero, CTA, Navbar, Footer) отправляют события в `POST /api/actions/click`.
- Добавлен общий API-клиент: `src/app/lib/api.ts`.

## Интеграция с Bitrix24

При каждом успешном `POST /api/contact` backend:

1. Сохраняет заявку локально в `server/data/leads.json`.
2. Отправляет лид в Bitrix24 через webhook `crm.lead.add`.

Используются переменные окружения:

- `BITRIX24_WEBHOOK_URL` — полный URL вебхука метода `crm.lead.add.json`.
- `BITRIX24_LEAD_SOURCE` — источник лида (по умолчанию `WEBSITE`).

Если Bitrix24 вернул ошибку/недоступен, API вернет `502` с текстом ошибки.

## Контракты API

### `POST /api/contact`

Запрос:

```json
{
  "name": "string (2..120)",
  "email": "valid email",
  "phone": "string (6..30)",
  "message": "string (10..5000)"
}
```

Ответ `201`:

```json
{
  "success": true,
  "message": "Заявка отправлена. Мы свяжемся с вами в ближайшее время."
}
```

### `POST /api/actions/click`

Запрос:

```json
{
  "buttonId": "string (2..120)",
  "page": "optional string",
  "details": {}
}
```

Ответ `202`:

```json
{
  "success": true,
  "message": "Событие кнопки зарегистрировано."
}
```

## Как проверить

1. Скопировать `.env.example` в `.env` и заполнить `BITRIX24_WEBHOOK_URL`.
2. Запустить API: `npm run dev:api`.
3. Запустить frontend: `npm run dev`.
4. Отправить форму на сайте.
5. Проверить лид в Bitrix24 и запись в `server/data/leads.json`.

## Ограничения и риски

- Используется файловое хранилище (без PostgreSQL): подходит для dev/прототипа.
- Нет авторизации и антиспам-ограничений (rate limiting/captcha).
- Для production желательно использовать БД и очередь/ретраи для CRM-интеграции.
