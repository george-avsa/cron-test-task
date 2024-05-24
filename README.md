Проект доступен по [ссылке](https://george-avsa.github.io/cron-test-task/) <==

#### Установка и запуск

Прописать в нужной директории:  
`git clone https://github.com/george-avsa/cron-test-task`,  
чтобы склонировать репозиторий на локальную машину  

Установить зависмости  
`npm i`  

Запустить проект  
`npm run`  

p.s. Версия ноды `v16.16.0` или `v18.20.1`

#### Шаблон

Для создания проекта использовал свой шаблон, реализованном на:

- typescript - для типизации;
- React;
- Webpack - в качестве сборщика, в нем уже готово все для работы с основными сущностями, например, различными медиа-файлами;
- scss - для стилей. Обычно его и использую для работы с методологией БЭМ;
- уже готовая архитектура основная на подходе FSD (feature-sliced-design);
- некоторые готовые scss файлы с mixin, которые я часто использую для разработки.

#### axios

Использовал axios для получения данных. Помимо кейсов, также делаю запрос на получение фильтров. Запрос делаю через метод axios.all, который позволяет делать n-ое количество запросов, использую spread для разделения данных.

#### effector

Разделил стейты на 3 группы:

- $fetchedData = {cases, filters}, где cases - данные, полученные с сервера, которые не будут изменены. На основе их будет производится фильтрация; filters - группа фильтров;
- $effectsStore = {isMenuVisible, isFilterVisible} и тому подобное;
- $store = {filteredCases, filters}, где filteredCases - фильтрованные кейсы, filters - массив id выбранных фильтров.
  В редких случаях использовал локальные стейты, также пропсы для передачи данных в переиспользуемые компоненты.

#### FSD

В проекте использовал FSD. Данная архитектура предназначена для больших проектов. Основная идея в разделении компонентов на слои: app - общие файлы; pages - страницы; widgets - самостоятельные ui-компоненты, объединяющие в себя entities и features; entities - сущность (в моем случае: filters, cases); features - тут все то, что пользователь может делать с сущностями (например, поменять фильтр); shared - переиспользуемые компоненты (в моем случае "потенциально переиспользуемые компоненты").

#### Анимации

Анимации по наведению работают через :hover, сама анимация при этом создана через keyframes
Для анимации по условию используется мой компонент Animation. Компонент представляет собой оберточный div, который может принимать html-класс, условие отрисовки, время анимации (опционально, изначально 300ms), children - то, что будет оборачивается в анимацию. Оберточный элемент имеет 4 состояния: "entering", "entered", "finishing", "finished". На основе этого реализованы html-классы: ".{baseClass}--{status}", к которым применяется нужная анимация через scss. (Простенький аналог React Transition Group).

#### верстка и шрифт

Не получилось найти такой же. Брал по названию, в итоговой версии шрифты сильно отличаются. Ну и верстка "на глаз", все-таки без макета. Старался учитывать все отступы, с этим тоже сложности, так как у нас отступы на разных экранах разные и они без привязки.

p.s. Не стал сильно все разбивать, решил оставить основной store в директории app.
