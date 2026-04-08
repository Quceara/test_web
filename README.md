# Test Assignment - Landing Page (Next.js)

Это выполненное тестовое задание: адаптивный лендинг с тарифами, таймером, валидацией согласия, анимациями и страницей политики.

## Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4

## Что реализовано

- Компоненты:
  - `Header`
  - `Body`
  - `TariffCard`
- Получение тарифов с API:
  - `https://t-core.fit-hub.pro/Test/GetTariffs`
- Сортировка тарифов:
  - `Навсегда` -> `3 месяца` -> `1 месяц` -> `1 неделя`
- Интерактив:
  - выбор активной карточки
  - чекбокс согласия
  - валидация перед покупкой (если чекбокс не отмечен, показывается ошибка)
- Анимации:
  - мигание кнопки `Купить` при успешном клике
  - плавное исчезновение скидочных элементов после завершения таймера
- Таймер:
  - стартует с `00:05`
  - на последних `30` сек становится красным и мигает
- Fallback:
  - если тарифы не загрузились, отображаются градиентные skeleton-плашки
- Навигация:
  - отдельная страница политики `app/policy/page.tsx`
  - рабочий переход по ссылке из блока согласия
- Семантика и доступность:
  - карточки тарифа реализованы как `button`
  - чекбокс реализован через `input type="checkbox"` + `label`
  - таймер размечен тегом `time`
- Типографика:
  - Montserrat
  - Raleway (таймер)
  - Gilroy (текст скидки)

## Структура

- `app/page.tsx` - связь `Header` и `Body`
- `app/components/Header.tsx` - верхняя плашка и таймер
- `app/components/Body.tsx` - основной контент и пользовательские действия
- `app/components/TariffCard.tsx` - карточка тарифа
- `app/policy/page.tsx` - страница политики
- `app/globals.css` - глобальные стили и шрифты

## Запуск

```bash
npm install
npm run dev
```

Открыть в браузере: [http://localhost:3000](http://localhost:3000)

## Примечание по Gilroy

Для корректного применения Gilroy нужен файл:

- `public/fonts/Gilroy-Medium.woff2`
# Test Assignment - Landing Page (Next.js)

Это выполненное тестовое задание: адаптивный лендинг с тарифами, таймером, валидацией согласия и базовой навигацией.

## Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4

## Что реализовано

- Компоненты:
  - `Header`
  - `Body`
  - `TariffCard`
- Получение тарифов с API:
  - `https://t-core.fit-hub.pro/Test/GetTariffs`
- Сортировка тарифов:
  - `Навсегда` -> `3 месяца` -> `1 месяц` -> `1 неделя`
- Интерактив:
  - выбор активной карточки тарифа
  - чекбокс согласия
  - валидация перед покупкой (ошибка, если чекбокс не отмечен)
- Анимации:
  - мигание кнопки `Купить` при успешном клике
  - плавное скрытие скидок после завершения таймера
- Таймер в хедере:
  - дефолтное значение `00:05`
  - на последних 30 сек становится красным и мигает
- Fallback UI:
  - если данные тарифов не пришли, отображаются градиентные skeleton-плашки
- Навигация:
  - добавлена отдельная страница политики `app/policy/page.tsx`
  - ссылка на политику подключена из блока согласия
- Типографика:
  - Montserrat
  - Raleway (таймер)
  - Gilroy (текст скидки)

## Структура

- `app/page.tsx` - корневая страница и связь `Header`/`Body`
- `app/components/Header.tsx` - верхняя плашка и логика таймера
- `app/components/Body.tsx` - основной контент страницы
- `app/components/TariffCard.tsx` - карточка тарифа
- `app/policy/page.tsx` - страница политики конфиденциальности
- `app/globals.css` - глобальные стили и шрифты

## Запуск

```bash
npm install
npm run dev
```

Открыть в браузере: [http://localhost:3000](http://localhost:3000)

## Примечание по Gilroy

Для корректного применения Gilroy нужен файл:

- `public/fonts/Gilroy-Medium.woff2`
# Test Assignment - Landing Page (Next.js)

Это выполненное тестовое задание: адаптивный лендинг с выбором тарифа, таймером, валидацией чекбокса и анимациями.

## Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4

## Функциональность

- Компоненты:
  - `Header`
  - `Body`
  - `TariffCard`
- Получение тарифов с API:
  - `https://t-core.fit-hub.pro/Test/GetTariffs`
- Сортировка тарифов:
  - `Навсегда` -> `3 месяца` -> `1 месяц` -> `1 неделя`
- Выбор активной карточки (подсветка активной цены и рамки)
- Проверка согласия перед покупкой:
  - если чекбокс не отмечен, при клике `Купить` чекбокс подсвечивается красным
- Анимации:
  - кнопка `Купить` мигает при успешном клике (когда чекбокс отмечен)
  - после завершения таймера скидочные элементы карточек плавно исчезают
- Таймер в хедере:
  - дефолтное значение `00:05`
  - на последних 30 сек становится красным и мигает
- Резервный UI:
  - если тарифы не загрузились, отображаются градиентные skeleton-плашки вместо карточек
- Типографика:
  - Montserrat
  - Raleway (таймер)
  - Gilroy (текст скидки)

## Структура

- `app/page.tsx` - связывает `Header` и `Body`
- `app/components/Header.tsx` - верхняя плашка и таймер
- `app/components/Body.tsx` - основная логика страницы
- `app/components/TariffCard.tsx` - карточка тарифа
- `app/globals.css` - глобальные стили и подключение шрифтов

## Запуск

```bash
npm install
npm run dev
```

Открыть: [http://localhost:3000](http://localhost:3000)

## Примечание по Gilroy

Для корректного применения Gilroy нужен файл:

- `public/fonts/Gilroy-Medium.woff2`
# Test Assignment - Landing Page (Next.js)

Это выполненное тестовое задание: адаптивный лендинг с тарифами, таймером и валидацией согласия перед покупкой.

## Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4

## Реализовано

- Компоненты:
  - `Header`
  - `Body`
  - `TariffCard`
- Загрузка тарифов с API:
  - `https://t-core.fit-hub.pro/Test/GetTariffs`
- Сортировка тарифов:
  - `Навсегда` -> `3 месяца` -> `1 месяц` -> `1 неделя`
- Выбор активного тарифа по клику
- Валидация согласия:
  - при клике `Купить` без чекбокса чекбокс подсвечивается красным
- Анимации:
  - кнопка `Купить` мигает при успешном клике (если чекбокс отмечен)
  - после окончания таймера скидки в карточках плавно исчезают
- Таймер в хедере:
  - дефолт `00:05` (для демонстрации)
  - на последних `30` сек становится красным и мигает
- Типографика:
  - Montserrat
  - Raleway (таймер)
  - Gilroy (текст скидки)

## Структура

- `app/page.tsx` - сборка страницы и связь `Header`/`Body`
- `app/components/Header.tsx` - верхняя плашка и таймер
- `app/components/Body.tsx` - основная логика и контент
- `app/components/TariffCard.tsx` - карточка тарифа
- `app/globals.css` - глобальные стили и подключение шрифтов

## Запуск

```bash
npm install
npm run dev
```

Открыть: [http://localhost:3000](http://localhost:3000)

## Примечание по Gilroy

Для корректного применения Gilroy нужен файл:

- `public/fonts/Gilroy-Medium.woff2`
# Test Assignment - Landing Page (Next.js)

Это выполненное тестовое задание: адаптивный лендинг с выбором тарифа, таймером и валидацией согласия перед покупкой.

## Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4

## Что реализовано

- Компонентная структура:
  - `Header`
  - `Body`
  - `TariffCard`
- Загрузка тарифов с API:
  - `https://t-core.fit-hub.pro/Test/GetTariffs`
- Сортировка тарифов в порядке:
  - `Навсегда` -> `3 месяца` -> `1 месяц` -> `1 неделя`
- Рендер карточек из данных API
- Выбор активной карточки тарифа
- Валидация согласия перед покупкой:
  - если чекбокс не отмечен, при клике `Купить` чекбокс выделяется красным
- Закрепленный хедер с таймером:
  - старт `02:00`
  - на последних `30` сек таймер мигает и становится красным
- Типографика по макету:
  - Montserrat
  - Raleway (таймер)
  - Gilroy (текст скидки)

## Структура проекта

- `app/page.tsx` - сборка страницы
- `app/components/Header.tsx` - верхняя плашка и таймер
- `app/components/Body.tsx` - основной контент и логика страницы
- `app/components/TariffCard.tsx` - карточка тарифа
- `app/globals.css` - глобальные стили и подключение шрифтов

## Запуск

```bash
npm install
npm run dev
```

Открыть: [http://localhost:3000](http://localhost:3000)

## Примечание по Gilroy

Для корректного применения Gilroy нужен файл:

- `public/fonts/Gilroy-Medium.woff2`
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
