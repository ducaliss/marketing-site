const serviceContent={
  vk:{title:'Таргетированная реклама ВКонтакте',intro:'Полное ведение рекламной кампании — от подготовки рекламного кабинета до анализа результатов.',items:['Создаю и настраиваю рекламный кабинет, беру на себя маркировку рекламы, передачу данных в ЕРИР и обязательную отчётность.','Разрабатываю текстовые и графические объявления под разные аудитории и рекламные гипотезы.','Тестирую сегменты аудитории и подходы, сравниваю стоимость и качество получаемых результатов.','Регулярно анализирую кампании: отключаю неэффективные объявления и масштабирую рабочие связки.','Вы получаете понятный отчёт: расходы, запущенные объявления, протестированные аудитории, результаты и выводы.','С вашей стороны — согласование рекламных материалов и пополнение рекламного бюджета; остальную техническую работу беру на себя.']},
  tg:{title:'Таргетированная реклама в Telegram',intro:'Помогаю продвигать бизнес, Telegram-каналы и другие проекты внутри Telegram.',items:['Создаю и настраиваю рекламный кабинет, беру на себя техническую часть запуска рекламных кампаний.','Подготавливаю тексты и текстово-графические рекламные материалы под задачу проекта.','Подбираю подходящие форматы: размещения в Telegram-каналах, рекламные объявления внутри Telegram, поисковую выдачу и другие инструменты.','Анализирую тематику проекта, конкурентов и потенциальную аудиторию.','Тестирую варианты размещения и рекламные гипотезы, оставляя наиболее результативные.','По итогам периода анализирую результаты кампании и определяю дальнейшие действия.']},
  yandex:{title:'Контекстная реклама в Яндексе',intro:'Настраиваю продвижение в Яндекс Директе и Яндекс Бизнесе с учётом особенностей вашего проекта.',items:['Анализирую поисковый спрос, конкурентов и текущую ситуацию в вашей нише.','Подбираю инструмент с учётом бизнеса, географии, уровня спроса и рекламного бюджета.','Формирую структуру рекламной кампании и подготавливаю её к запуску.','Предлагаю предварительную стратегию продвижения и объясняю, какие решения подойдут именно вашему проекту.']},
  audit:{title:'Профессиональная консультация и разбор бизнеса',intro:'Это отдельная платная услуга с глубоким анализом бизнеса, маркетинга и текущей ситуации, а не бесплатное первичное знакомство.',items:['До консультации изучаю ваш проект, текущую рекламу, конкурентов и основные источники клиентов.','Разбираем ситуацию в бизнесе, целевую аудиторию и рекламные предложения.','Определяем подходящие рекламные каналы и находим возможные ошибки в действующих кампаниях.','Оцениваем сайт, социальные сети и другие точки контакта с клиентами.','Обсуждаем рекламный бюджет, варианты его распределения, идеи для контента и креативов.','При необходимости рассматриваем PR и продвижение через СМИ.','По итогам вы получаете конкретные рекомендации и дальнейший план действий.']},
  copywriting:{title:'Копирайтинг и ведение соцсетей',intro:'Помогаю подготовить контент для ваших социальных сетей и организовать его публикацию. Подробнее о ведении соцсетей можно обсудить на бесплатной консультации.',items:['Разработка контент-плана под ваши задачи.','Подготовка текстов для публикаций в социальных сетях.','Кросспостинг по всем вашим социальным сетям.','Список площадок, объём контента и график публикаций согласовываем под ваш проект.']}
};
const modal=document.querySelector('#service-modal');const modalContent=document.querySelector('#modal-content');
document.querySelectorAll('[data-service]').forEach(button=>button.addEventListener('click',()=>{const item=serviceContent[button.dataset.service];modalContent.innerHTML=`<p class="eyebrow">Услуга</p><h2>${item.title}</h2><p>${item.intro}</p><h3>Что входит в работу</h3><ul>${item.items.map(text=>`<li>${text}</li>`).join('')}</ul>`;modal.showModal();document.body.classList.add('modal-open')}));
document.querySelector('.modal-close').addEventListener('click',()=>modal.close());modal.addEventListener('click',event=>{if(event.target===modal)modal.close()});modal.addEventListener('close',()=>document.body.classList.remove('modal-open'));document.querySelector('#modal-action').addEventListener('click',()=>modal.close());
const experienceModal=document.querySelector('#experience-modal');
document.querySelectorAll('[data-experience]').forEach(button=>button.addEventListener('click',()=>{experienceModal.showModal();document.body.classList.add('modal-open')}));
document.querySelector('.experience-modal-close').addEventListener('click',()=>experienceModal.close());
experienceModal.addEventListener('click',event=>{if(event.target===experienceModal)experienceModal.close()});
experienceModal.addEventListener('close',()=>document.body.classList.remove('modal-open'));
document.querySelector('.experience-modal-action').addEventListener('click',()=>experienceModal.close());
const barModal=document.querySelector('#bar-modal');
document.querySelector('[data-bar-case]').addEventListener('click',()=>{barModal.showModal();document.body.classList.add('modal-open')});
document.querySelector('.bar-modal-close').addEventListener('click',()=>barModal.close());
barModal.addEventListener('click',event=>{if(event.target===barModal)barModal.close()});
barModal.addEventListener('close',()=>document.body.classList.remove('modal-open'));
document.querySelector('.bar-modal-action').addEventListener('click',()=>barModal.close());
const caseModal=document.querySelector('#case-modal');
document.querySelectorAll('[data-case]').forEach(button=>button.addEventListener('click',()=>{caseModal.showModal();document.body.classList.add('modal-open')}));
caseModal.querySelector('.case-modal-close').addEventListener('click',()=>caseModal.close());
caseModal.addEventListener('click',event=>{if(event.target===caseModal)caseModal.close()});
caseModal.addEventListener('close',()=>document.body.classList.remove('modal-open'));
caseModal.querySelector('.case-modal-action').addEventListener('click',()=>caseModal.close());
const kitchenModal=document.querySelector('#kitchen-modal');
document.querySelector('[data-kitchen-case]').addEventListener('click',()=>{kitchenModal.showModal();document.body.classList.add('modal-open')});
document.querySelector('.kitchen-modal-close').addEventListener('click',()=>kitchenModal.close());
kitchenModal.addEventListener('click',event=>{if(event.target===kitchenModal)kitchenModal.close()});
kitchenModal.addEventListener('close',()=>document.body.classList.remove('modal-open'));
document.querySelector('.kitchen-modal-action').addEventListener('click',()=>kitchenModal.close());
const seafoodModal=document.querySelector('#seafood-modal');
document.querySelector('[data-seafood-case]').addEventListener('click',()=>{seafoodModal.showModal();document.body.classList.add('modal-open')});
document.querySelector('.seafood-modal-close').addEventListener('click',()=>seafoodModal.close());
seafoodModal.addEventListener('click',event=>{if(event.target===seafoodModal)seafoodModal.close()});
seafoodModal.addEventListener('close',()=>document.body.classList.remove('modal-open'));
document.querySelector('.seafood-modal-action').addEventListener('click',()=>seafoodModal.close());
const LEAD_CONSENT_VERSION='2026-10-22-v2';
const LEAD_CONSENT_ARCHIVE='legal/lead-consent-2026-10-22-v2.html';
const legalContent={
  privacy:`
    <p class="legal-draft">Редакция от 22 октября 2026 года</p>
    <h2>Политика обработки персональных данных</h2>
    <p>Настоящая Политика определяет порядок обработки и защиты персональных данных посетителей сайта, на котором она опубликована. Политика применяется ко всем данным, которые оператор получает через форму обратной связи, при прямом обращении пользователя и в процессе технической работы сайта.</p>

    <div class="legal-summary">
      <div><span>Оператор</span><strong>Музенитов Иван Георгиевич</strong></div>
      <div><span>Статус</span><strong>Самозанятый, плательщик НПД</strong></div>
      <div><span>ИНН</span><strong>582102782490</strong></div>
      <div><span>Адрес оператора</span><strong>440067, Пензенская область, р. п. Лунино, ул. Ломоносова, д. 50</strong></div>
      <div><span>Контакт</span><strong><a href="mailto:ivan-muzenitov@yandex.ru">ivan-muzenitov@yandex.ru</a></strong></div>
    </div>

    <h3>1. Сведения об операторе</h3>
    <p>Оператор персональных данных: Музенитов Иван Георгиевич, самозанятый, плательщик налога на профессиональный доход, ИНН 582102782490. Адрес оператора: 440067, Пензенская область, р. п. Лунино, ул. Ломоносова, д. 50. Регион деятельности: Пенза и Пензенская область, услуги оказываются по всей России. Телефон: <a href="tel:+79875149977">+7 987 514-99-77</a>. Электронная почта для обращений по вопросам персональных данных: <a href="mailto:ivan-muzenitov@yandex.ru">ivan-muzenitov@yandex.ru</a>.</p>

    <h3>2. Цели обработки и состав данных</h3>
    <div class="legal-table">
      <div><strong>Обработка заявки и обратная связь</strong><span>Имя, номер телефона или имя пользователя в Telegram, текст обращения, сведения о бизнесе и задаче.</span></div>
      <div><strong>Подготовка к возможному заключению договора</strong><span>Данные из обращения и сведения, которые пользователь дополнительно сообщает в ходе общения.</span></div>
      <div><strong>Работа и безопасность сайта</strong><span>IP-адрес, дата и время обращения, адрес запрошенной страницы, сведения о браузере и устройстве, технические журналы сервера.</span></div>
      <div><strong>Аналитика посещаемости</strong><span>Сведения о просмотренных страницах, действиях на сайте, устройстве, браузере, примерном регионе, источнике перехода и технических параметрах визита. Обрабатываются Яндекс Метрикой после согласия посетителя.</span></div>
    </div>
    <p>Оператор не запрашивает специальные категории и биометрические персональные данные. Пользователю не следует указывать такие сведения, а также персональные данные третьих лиц, если у него отсутствует законное основание для их передачи.</p>

    <h3>3. Правовые основания</h3>
    <ul>
      <li>согласие пользователя на обработку персональных данных;</li>
      <li>необходимость обработки для рассмотрения обращения пользователя и заключения договора по его инициативе;</li>
      <li>исполнение заключённого договора и обязанностей, установленных законодательством Российской Федерации;</li>
      <li>законный интерес оператора в обеспечении работоспособности и безопасности сайта при условии соблюдения прав пользователя.</li>
    </ul>

    <h3>4. Действия с данными и способы обработки</h3>
    <p>Оператор может осуществлять сбор, запись, систематизацию, накопление, хранение, уточнение, извлечение, использование, предоставление в предусмотренных законом случаях, блокирование, удаление и уничтожение данных. Обработка ведётся смешанным способом: с использованием средств автоматизации и без их использования.</p>
    <p>Источник данных — непосредственно пользователь либо технические журналы сайта. Решения, порождающие юридические последствия для пользователя, исключительно на основании автоматизированной обработки не принимаются.</p>
    <p>Для подтверждения согласия при отправке заявки в письмо включаются отметка согласия, дата и время, IP-адрес, номер редакции согласия, ссылка на её архив и контрольная сумма архивного файла SHA-256. Эти сведения хранятся вместе с заявкой в пределах сроков, указанных в разделе 6; отдельная бессрочная база подтверждений не создаётся. Запись версии фиксирует, какой текст был представлен при отправке, но сама по себе не подтверждает личность посетителя или факт прочтения документа.</p>

    <h3>5. Хранение, поручение обработки и передача</h3>
    <p>Форма размещена на сайте <strong>marketolog-penza.ru</strong> и обрабатывается на виртуальном сервере ООО «Бегет», расположенном в Санкт-Петербурге, Российская Федерация (локация SPB в панели провайдера; проверено 22 октября 2026 года). Обработчик формы принимает имя, контакт, текст обращения, IP-адрес, дату, время и отметку согласия, формирует письмо и передаёт его оператору. Отдельная база заявок в приложении сайта не создаётся.</p>
    <p>Заявки направляются по адресу <a href="mailto:ivan_muzenitov@mail.ru">ivan_muzenitov@mail.ru</a> через почтовый сервис Почта Mail, предоставляемый ООО «ВК». Обработка и хранение писем происходят также в инфраструктуре почтового сервиса. Условия поставщиков доступны в <a href="https://beget.com/ru/cloud-rules-ru" target="_blank" rel="noopener noreferrer">правилах облачных услуг Beget</a> и <a href="https://help.mail.ru/legal/terms/mail/privacy/" target="_blank" rel="noopener noreferrer">политике конфиденциальности Почты Mail</a>. Поставщики используются для размещения сайта, обработки и доставки заявки в необходимом для этих целей объёме.</p>
    <p>Для анализа посещаемости применяется сервис Яндекс Метрика, предоставляемый ООО «ЯНДЕКС». Сервис получает технические сведения о визите и действиях на сайте в объёме, определяемом настройками счётчика и условиями Яндекс Метрики. Оператор использует статистические отчёты и записи отдельных посещений в Вебвизоре. Технические идентификаторы браузера и записи посещений не считаются автоматически анонимными данными. Содержимое полей формы исключено из записи Вебвизором.</p>
    <p>Технические журналы безопасности хранятся на сервере в Российской Федерации не более 30 календарных дней, если более длительный срок не требуется для расследования инцидента или исполнения требований законодательства.</p>
    <p>Публикация и распространение персональных данных не осуществляются. Приём и обработка формы на VPS осуществляются в Российской Федерации. Сайт не настроен на отправку заявок в иностранные CRM или на зарубежный сервер оператора. При этом расположение VPS не является подтверждением расположения всех систем привлечённых поставщиков: политика Почты Mail предусматривает возможность отдельных трансграничных передач информации третьим лицам. Применимость таких положений к конкретным данным и основания передачи оцениваются отдельно; при необходимости оператор выполняет требования статьи 12 Федерального закона № 152-ФЗ. Указание российской локации VPS не заменяет соблюдение требований к локализации баз данных и к обработке данных привлечёнными лицами.</p>

    <h3>6. Сроки обработки и уничтожение</h3>
    <ul>
      <li>если договор не заключён — до достижения цели обращения, но не более 90 календарных дней после последнего взаимодействия; этот предельный срок установлен оператором, а не является универсальным сроком, предусмотренным законом;</li>
      <li>если договор заключён — в течение срока его действия и далее в пределах сроков, предусмотренных законодательством и необходимостью защиты законных интересов сторон;</li>
      <li>после достижения цели или получения отзыва согласия ненужные для иных законных целей данные подлежат уничтожению не позднее 30 календарных дней, если законом или допустимым соглашением не предусмотрено иное; предельный срок хранения заявки без договора в любом случае не продлевается;</li>
      <li>по требованию о прекращении обработки оператор прекращает её в течение 10 рабочих дней, кроме предусмотренных законом случаев; срок может быть продлён не более чем на 5 рабочих дней с направлением мотивированного уведомления.</li>
    </ul>
    <p>Порядок уничтожения: оператор определяет относящиеся к обращению данные, удаляет их из рабочей почты, включая папки «Отправленные» и «Корзина», и из используемых им рабочих файлов и переписки, если для сохранения этих данных нет другого законного основания. Для данных у привлечённых обработчиков направляется соответствующее требование. Резервные копии учитываются отдельно: если немедленное уничтожение технически невозможно, данные блокируются и уничтожаются в срок не более 6 месяцев, если иной срок не установлен федеральным законом. Подтверждение уничтожения оформляется в соответствии с применимыми требованиями Роскомнадзора. Это порядок выполнения оператором обязанности, а не обещание автоматического удаления писем программой сайта.</p>

    <h3>7. Права пользователя</h3>
    <p>Пользователь вправе получать сведения об обработке своих данных, требовать их уточнения, блокирования или удаления, отзывать согласие и обжаловать действия оператора. Запрос направляется на <a href="mailto:ivan-muzenitov@yandex.ru">ivan-muzenitov@yandex.ru</a>. Для защиты данных оператор может запросить сведения, позволяющие подтвердить личность заявителя и связь запроса с соответствующими данными.</p>
    <p>В обращении следует указать требование и контакт, использованный при отправке заявки. Информация об обработке предоставляется в течение 10 рабочих дней с момента обращения или получения запроса; продление не более чем на 5 рабочих дней допускается с мотивированным уведомлением. Подтверждённые неточные данные уточняются в течение 7 рабочих дней. Если закон предусматривает для конкретного нарушения иной, более короткий срок блокирования, прекращения обработки или уничтожения, применяется этот срок. Обжаловать действия оператора можно в Роскомнадзор или в суд.</p>

    <h3>8. Защита данных</h3>
    <p>Оператор принимает необходимые правовые, организационные и технические меры: ограничивает доступ к данным, использует защищённое соединение HTTPS, контролирует доступ к почте и серверу, обновляет программное обеспечение и удаляет данные после истечения срока обработки. При инцидентах оператор действует в порядке и сроки, установленные законодательством.</p>

    <h3>9. Cookie и системы аналитики</h3>
    <p>На сайте подключена Яндекс Метрика, счётчик № 112086047, с функциями Вебвизора, карты кликов, карты скроллинга и аналитики форм. Метрика может использовать cookie и получать сведения об устройстве и браузере, IP-адресе, примерном регионе, источнике перехода, просмотренных страницах и действиях посетителя. Эти сведения используются для анализа посещаемости и улучшения сайта.</p>
    <p>Метрика и Вебвизор запускаются только после нажатия «Принять» в уведомлении об аналитике или «Разрешить аналитику» в её настройках. Можно выбрать «Не принимать» и пользоваться сайтом и формой заявки без аналитики. Согласие относится к техническим данным и действиям, перечисленным в этом разделе, для анализа посещаемости и улучшения сайта с использованием ООО «ЯНДЕКС»; оно не является согласием на обработку заявки или рекламные рассылки.</p>
    <p>Выбор, дата и версия условий сохраняются в localStorage этого браузера на срок до 180 календарных дней. Это техническая запись настройки, а не отдельная серверная база заявок. Если браузер запрещает сохранение, выбор действует только на текущей странице. При изменении версии условий или истечении срока сайт запрашивает выбор заново. Аналитические cookie Яндекса имеют собственные сроки действия, описанные в документах сервиса.</p>
    <p>Изменить выбор или отозвать согласие можно в любой момент кнопкой «Настройки аналитики» в разделе «Документы» внизу каждой страницы. При отключении сайт прекращает отправку новых событий в счётчик и вызывает остановку Метрики, включая Вебвизор. Доступные сайту cookie и локальные идентификаторы Метрики удаляются; cookie на доменах Яндекса сайт удалить не может. Отключение не отменяет законность предшествующей обработки и не означает автоматического удаления ранее собранных данных из Яндекса. По вопросам ранее собранных данных можно обратиться к оператору по указанной в разделе 7 почте; при необходимости можно использовать инструменты управления данными Яндекса.</p>
    <p>Поля формы отмечены техническим запретом записи содержимого Вебвизором. Не следует передавать персональные данные в адресах страниц, UTM-метках и иных параметрах ссылок.</p>
    <p>Подробнее об обработке данных сервисом Яндекс Метрика можно узнать в <a href="https://yandex.ru/legal/confidential/" target="_blank" rel="noopener noreferrer">Политике конфиденциальности Яндекса</a> и <a href="https://yandex.ru/legal/metrica_termsofuse/" target="_blank" rel="noopener noreferrer">условиях использования Яндекс Метрики</a>. VK Pixel на сайте не подключён. Ссылки на Telegram и MAX ведут на внешние сервисы, обработка данных в которых регулируется документами соответствующих владельцев.</p>

    <h3>10. Изменение Политики</h3>
    <p>Оператор вправе обновлять Политику при изменении сайта, состава сервисов или законодательства. Новая редакция действует с момента публикации на сайте, если в ней не указан иной срок.</p>

    <p class="legal-note">Политика применяется с момента начала приёма заявок на сайте marketolog-penza.ru. До начала обработки оператор выполняет предусмотренные законодательством уведомительные и организационные обязанности.</p>
  `,
  terms:`
    <p class="legal-draft">Редакция от 29 августа 2026 года</p>
    <h2>Пользовательское соглашение</h2>
    <p>Настоящее Соглашение регулирует использование сайта, на котором оно опубликовано. Владелец сайта — Музенитов Иван Георгиевич, самозанятый, плательщик налога на профессиональный доход, ИНН 582102782490.</p>

    <h3>1. Назначение сайта</h3>
    <p>Сайт содержит информацию об услугах интернет-маркетинга, рекламе, консультациях, видеопроизводстве, опыте и проектах владельца. Посетитель может ознакомиться с материалами, связаться с владельцем или направить заявку на предварительное обсуждение.</p>

    <h3>2. Отсутствие публичной оферты и оплаты</h3>
    <p>Информация на сайте, включая описания услуг и примеры результатов, носит информационный характер и не является публичной офертой. Отправка заявки не означает заключение договора, не создаёт обязанности оплатить услуги и не гарантирует принятие проекта в работу.</p>
    <p>Состав работ, сроки, стоимость, рекламный бюджет, ответственность и иные существенные условия определяются в отдельном договоре или ином письменном соглашении сторон. Оплата непосредственно на сайте не производится.</p>

    <h3>3. Правила использования</h3>
    <p>Пользователь обязуется:</p>
    <ul>
      <li>указывать достоверные контактные данные в форме обратной связи;</li>
      <li>не передавать данные третьих лиц без законного основания;</li>
      <li>не размещать противоправные, оскорбительные или вредоносные материалы;</li>
      <li>не предпринимать действий, нарушающих работу и безопасность сайта;</li>
      <li>соблюдать законодательство Российской Федерации и права третьих лиц.</li>
    </ul>

    <h3>4. Материалы сайта и интеллектуальные права</h3>
    <p>Тексты, структура, дизайн, изображения, примеры рекламных материалов и иные результаты, размещённые на сайте, охраняются законодательством. Их копирование, публикация, переработка или коммерческое использование без разрешения правообладателя не допускаются, кроме случаев, прямо предусмотренных законом.</p>
    <p>Товарные знаки и материалы третьих лиц принадлежат их правообладателям и используются в информационных целях либо как иллюстрация выполненных проектов.</p>

    <h3>5. Кейсы и результаты</h3>
    <p>Показатели в кейсах относятся к конкретным проектам, периодам, бюджетам и условиям. Они подтверждают опыт владельца сайта, но не являются обещанием получения таких же результатов в другом проекте. Итог продвижения зависит от рынка, продукта, предложения, бюджета, сезонности, работы отдела продаж и других факторов.</p>

    <h3>6. Внешние ссылки</h3>
    <p>Сайт может содержать ссылки на Telegram, MAX и другие внешние ресурсы. Владелец сайта не управляет такими ресурсами и не отвечает за их содержание, доступность и правила обработки данных. Перед использованием внешнего сервиса пользователю следует ознакомиться с его условиями.</p>

    <h3>7. Персональные данные</h3>
    <p>Обработка персональных данных регулируется <button class="legal-inline-link" type="button" data-open-legal="privacy">Политикой обработки персональных данных</button>. Отправка формы допускается только после отдельного согласия пользователя на обработку данных. Согласие на рекламные рассылки на сайте не запрашивается, рассылки не осуществляются.</p>

    <h3>8. Ответственность</h3>
    <p>Владелец стремится поддерживать информацию в актуальном состоянии, но не гарантирует отсутствие технических ошибок или временных перерывов в работе сайта. Ответственность сторон определяется законодательством Российской Федерации и условиями отдельно заключённого договора.</p>

    <h3>9. Изменение Соглашения</h3>
    <p>Соглашение может быть обновлено при изменении сайта или законодательства. Новая редакция действует с момента размещения на сайте. Продолжая использовать сайт после обновления, пользователь подтверждает ознакомление с действующей редакцией.</p>

    <h3>10. Контакты владельца</h3>
    <p>Музенитов Иван Георгиевич, самозанятый, плательщик налога на профессиональный доход, ИНН 582102782490. Адрес: 440067, Пензенская область, р. п. Лунино, ул. Ломоносова, д. 50. Регион деятельности: Пенза и Пензенская область, услуги оказываются по всей России. Телефон: <a href="tel:+79875149977">+7 987 514-99-77</a>. Электронная почта: <a href="mailto:ivan-muzenitov@yandex.ru">ivan-muzenitov@yandex.ru</a>.</p>

    <p class="legal-note">Соглашение вступает в силу с момента публикации на сайте marketolog-penza.ru и действует до размещения новой редакции.</p>
  `,
  consent:`
    <p class="legal-draft">Редакция от 22 октября 2026 года · версия 2026-10-22-v2 · отдельное согласие пользователя</p>
    <h2>Согласие на обработку персональных данных</h2>
    <p>Устанавливая отдельную отметку под формой и нажимая кнопку «Отправить заявку», я свободно, своей волей и в своём интересе даю согласие оператору персональных данных:</p>

    <div class="legal-summary">
      <div><span>Оператор</span><strong>Музенитов Иван Георгиевич</strong></div>
      <div><span>ИНН</span><strong>582102782490</strong></div>
      <div><span>Для отзыва</span><strong><a href="mailto:ivan-muzenitov@yandex.ru">ivan-muzenitov@yandex.ru</a></strong></div>
    </div>

    <h3>1. Персональные данные</h3>
    <ul>
      <li>имя;</li>
      <li>номер телефона или имя пользователя в Telegram;</li>
      <li>текст обращения, сведения о бизнесе и поставленной задаче;</li>
      <li>IP-адрес, дата и время отправки формы, сведения о браузере и устройстве, необходимые для безопасности и подтверждения факта отправки.</li>
    </ul>

    <h3>2. Цели обработки</h3>
    <ul>
      <li>получение и рассмотрение моей заявки;</li>
      <li>связь со мной по указанным контактам;</li>
      <li>предварительное обсуждение проекта, условий услуг и возможного заключения договора;</li>
      <li>обеспечение безопасности формы и предотвращение злоупотреблений.</li>
    </ul>
    <p>Настоящее согласие не распространяется на рекламные и информационные рассылки. Такие рассылки оператором не планируются.</p>

    <h3>3. Разрешённые действия и способ обработки</h3>
    <p>Я разрешаю сбор, запись, систематизацию, накопление, хранение, уточнение, извлечение, использование, предоставление техническим поставщикам в необходимом объёме, блокирование, удаление и уничтожение данных. Обработка может выполняться с использованием средств автоматизации и без них.</p>

    <h3>4. Доставка заявки</h3>
    <p>Заявка обрабатывается на виртуальном сервере ООО «Бегет» в Санкт-Петербурге, Российская Федерация, и направляется оператору по адресу <a href="mailto:ivan_muzenitov@mail.ru">ivan_muzenitov@mail.ru</a> с использованием сервиса Почта Mail, предоставляемого ООО «ВК». Подробности обработки привлечёнными поставщиками изложены в Политике обработки персональных данных сайта.</p>

    <h3>5. Срок согласия</h3>
    <p>Согласие действует до достижения целей обработки, но не более 90 календарных дней после последнего взаимодействия, если договор не был заключён, либо до отзыва согласия. Если стороны заключат договор, дальнейшая обработка необходимых данных осуществляется на основании договора и законодательства.</p>

    <h3>6. Отзыв согласия</h3>
    <p>Согласие можно отозвать, направив письмо на <a href="mailto:ivan-muzenitov@yandex.ru">ivan-muzenitov@yandex.ru</a> с темой «Отзыв согласия на обработку персональных данных». В запросе необходимо указать контакт, использованный при отправке заявки. После получения отзыва оператор прекратит обработку и удалит данные в установленный законом срок, если отсутствует иное законное основание для их сохранения.</p>

    <h3>7. Реквизиты оператора</h3>
    <p>Адрес оператора: 440067, Пензенская область, р. п. Лунино, ул. Ломоносова, д. 50.</p>

    <p>Я подтверждаю, что указанные в форме данные принадлежат мне либо я имею законное основание для их передачи, а также что ознакомился с Политикой обработки персональных данных.</p>

    <p class="legal-note">Согласие фиксируется только после установки отдельной отметки под формой и отправки заявки. Чекбокс не отмечается заранее. Номер редакции, ссылка на архив, контрольная сумма архивного файла, дата, время и IP-адрес включаются в письмо с заявкой и хранятся вместе с ней в пределах указанных сроков.</p>
    <p><a href="https://marketolog-penza.ru/legal/lead-consent-2026-10-22-v2.html" target="_blank" rel="noopener noreferrer">Архив редакции согласия 2026-10-22-v2</a></p>
  `
};
const legalModal=document.querySelector('#legal-modal');
const legalModalContent=document.querySelector('#legal-modal-content');
const showLegalDocument=key=>{
  if(!legalContent[key])return;
  legalModalContent.innerHTML=legalContent[key];
  legalModal.scrollTop=0;
  legalModalContent.scrollTop=0;
  if(!legalModal.open)legalModal.showModal();
  document.body.classList.add('modal-open');
};
document.querySelectorAll('[data-legal-doc]').forEach(button=>button.addEventListener('click',()=>showLegalDocument(button.dataset.legalDoc)));
legalModalContent.addEventListener('click',event=>{
  const link=event.target.closest('[data-open-legal]');
  if(link)showLegalDocument(link.dataset.openLegal);
});
document.querySelector('.legal-modal-close').addEventListener('click',()=>legalModal.close());
legalModal.addEventListener('click',event=>{if(event.target===legalModal)legalModal.close()});
legalModal.addEventListener('close',()=>document.body.classList.remove('modal-open'));

const METRIKA_ID=112086047;
const ANALYTICS_CONSENT_KEY='marketing-site-analytics-consent-v2';
const ANALYTICS_CONSENT_VERSION='2026-10-22';
const ANALYTICS_CONSENT_LIFETIME=180*24*60*60*1000;
const readAnalyticsChoice=()=>{
  try{
    const record=JSON.parse(window.localStorage.getItem(ANALYTICS_CONSENT_KEY));
    const age=Date.now()-Date.parse(record?.updatedAt);
    return record?.version===ANALYTICS_CONSENT_VERSION&&['accepted','rejected'].includes(record.choice)&&age>=0&&age<ANALYTICS_CONSENT_LIFETIME?record.choice:null;
  }catch{return null}
};
let analyticsChoice=readAnalyticsChoice();
let metrikaScript=null;
let metrikaReady=false;
let metrikaInitialized=false;
const initializeMetrika=()=>{
  if(analyticsChoice!=='accepted'||!metrikaReady||metrikaInitialized)return;
  metrikaInitialized=true;
  window.ym(METRIKA_ID,'init',{
    webvisor:true,
    clickmap:true,
    accurateTrackBounce:true,
    trackLinks:true
  });
};
const loadYandexMetrika=()=>{
  if(analyticsChoice!=='accepted')return;
  if(metrikaReady){initializeMetrika();return}
  if(metrikaScript)return;
  window.ym=window.ym||function(){(window.ym.a=window.ym.a||[]).push(arguments)};
  window.ym.l=Date.now();
  metrikaScript=document.createElement('script');
  metrikaScript.async=true;
  metrikaScript.src=`https://mc.yandex.ru/metrika/tag.js?id=${METRIKA_ID}`;
  // A revoked choice while tag.js is loading must never enqueue init.
  metrikaScript.onload=()=>{metrikaReady=true;initializeMetrika()};
  metrikaScript.onerror=()=>{metrikaScript.remove();metrikaScript=null};
  document.head.appendChild(metrikaScript);
};
const reachMetrikaGoal=(goal,params)=>{
  if(analyticsChoice!=='accepted'||!metrikaInitialized||typeof window.ym!=='function')return;
  window.ym(METRIKA_ID,'reachGoal',goal,params||{});
};
const clearMetrikaIdentifiers=()=>{
  // Only identifiers belonging to Metrica, never the visitor's other site data.
  try{
    for(let i=window.localStorage.length-1;i>=0;i--){
      const key=window.localStorage.key(i);
      if(key&&/^_ym(?:_|$)/.test(key))window.localStorage.removeItem(key);
    }
  }catch{}
  const host=window.location.hostname;
  const domains=[''];
  const labels=host.split('.');
  if(host!=='localhost'&&!/^\d+(?:\.\d+){3}$/.test(host)){
    for(let i=0;i<labels.length-1;i++)domains.push(labels.slice(i).join('.'));
  }
  const paths=new Set(['/']);
  const segments=window.location.pathname.split('/').filter(Boolean);
  for(let i=1;i<=segments.length;i++){
    const path='/'+segments.slice(0,i).join('/');
    paths.add(path);paths.add(path+'/');
  }
  document.cookie.split(';').forEach(cookie=>{
    const name=cookie.split('=')[0].trim();
    if(!/^_ym(?:_|$)/.test(name))return;
    for(const domain of domains)for(const path of paths){
      document.cookie=`${name}=; Max-Age=0; Path=${path}${domain?`; Domain=${domain}`:''}; SameSite=Lax`;
    }
  });
};
const stopYandexMetrika=()=>{
  if(metrikaInitialized&&typeof window.ym==='function')window.ym(METRIKA_ID,'destruct');
  metrikaInitialized=false;
  clearMetrikaIdentifiers();
};
const cookieConsent=document.querySelector('#cookie-consent');
const cookieConsentAccept=cookieConsent.querySelector('.cookie-consent-accept');
const cookieConsentDetails=cookieConsent.querySelector('.cookie-consent-details');
const forceCookiePreview=new URLSearchParams(window.location.search).has('cookie-preview');
if(forceCookiePreview){analyticsChoice=null;stopYandexMetrika()}
const rememberAnalyticsChoice=choice=>{
  analyticsChoice=choice;
  try{
    window.localStorage.setItem(ANALYTICS_CONSENT_KEY,JSON.stringify({choice,version:ANALYTICS_CONSENT_VERSION,updatedAt:new Date().toISOString()}));
    window.localStorage.removeItem('marketing-site-analytics-consent-v1');
    return true;
  }catch{return false}
};
const applyAnalyticsChoice=choice=>{
  if(!['accepted','rejected'].includes(choice))return false;
  const saved=rememberAnalyticsChoice(choice);
  cookieConsent.hidden=true;
  if(choice==='accepted')loadYandexMetrika();
  else stopYandexMetrika();
  return saved;
};
cookieConsent.querySelector('.cookie-consent-copy p').textContent='С вашего согласия Яндекс Метрика и Вебвизор собирают технические данные и действия на сайте для анализа посещаемости. Без аналитики сайт и форма заявки тоже работают. Изменить выбор можно в настройках внизу страницы.';
const cookieConsentReject=document.createElement('button');
cookieConsentReject.type='button';
cookieConsentReject.className='cookie-consent-reject';
cookieConsentReject.textContent='Не принимать';
cookieConsentAccept.before(cookieConsentReject);
cookieConsentAccept.addEventListener('click',()=>applyAnalyticsChoice('accepted'));
cookieConsentReject.addEventListener('click',()=>applyAnalyticsChoice('rejected'));
cookieConsentDetails.addEventListener('click',()=>showLegalDocument('privacy'));
const showAnalyticsSettings=(notice='')=>{
  const state=analyticsChoice==='accepted'?'Аналитика разрешена':analyticsChoice==='rejected'?'Аналитика отключена':'Решение ещё не принято';
  legalModalContent.innerHTML=`<h2>Настройки аналитики</h2><p class="analytics-status" role="status">${state}${notice?'. '+notice:''}</p><p>Яндекс Метрика и Вебвизор собирают технические данные и действия на сайте для анализа посещаемости. Содержимое полей заявки исключено из записи. Сайт и форма работают независимо от вашего выбора.</p><p>Вы можете разрешить аналитику или отозвать согласие. Отключение прекращает дальнейший сбор, но не удаляет автоматически ранее собранные данные у Яндекса. Для обращения по этим данным: <a href="mailto:ivan-muzenitov@yandex.ru">ivan-muzenitov@yandex.ru</a>.</p><div class="analytics-settings-actions"><button type="button" data-analytics-choice="rejected">Отключить аналитику</button><button type="button" data-analytics-choice="accepted">Разрешить аналитику</button></div><p><button class="legal-inline-link" type="button" data-open-legal="privacy">Политика обработки персональных данных</button></p>`;
  legalModal.scrollTop=0;
  legalModalContent.scrollTop=0;
  if(!legalModal.open)legalModal.showModal();
  document.body.classList.add('modal-open');
};
legalModalContent.addEventListener('click',event=>{
  const button=event.target.closest('[data-analytics-choice]');
  if(!button)return;
  const saved=applyAnalyticsChoice(button.dataset.analyticsChoice);
  showAnalyticsSettings(saved?'Выбор сохранён':'Браузер не разрешил сохранить выбор; он действует только на текущей странице');
  legalModalContent.querySelector(`[data-analytics-choice="${button.dataset.analyticsChoice}"]`).focus();
});
document.querySelectorAll('.footer-documents').forEach(container=>{
  const button=document.createElement('button');
  button.type='button';
  button.dataset.analyticsSettings='';
  button.textContent='Настройки аналитики';
  button.addEventListener('click',()=>showAnalyticsSettings());
  container.appendChild(button);
});
window.addEventListener('storage',event=>{
  if(event.key!==ANALYTICS_CONSENT_KEY&&event.key!==null)return;
  analyticsChoice=readAnalyticsChoice();
  if(analyticsChoice==='accepted')loadYandexMetrika();else stopYandexMetrika();
  cookieConsent.hidden=analyticsChoice!==null;
  if(legalModal.open&&legalModalContent.querySelector('.analytics-status'))showAnalyticsSettings();
});
cookieConsent.hidden=analyticsChoice!==null;
if(analyticsChoice==='accepted')loadYandexMetrika();
else clearMetrikaIdentifiers();

document.querySelectorAll('a[href^="tel:"]').forEach(link=>link.addEventListener('click',()=>reachMetrikaGoal('phone_click')));
document.querySelectorAll('a[href^="https://t.me/"]').forEach(link=>link.addEventListener('click',()=>reachMetrikaGoal('telegram_click')));
document.querySelectorAll('a[href^="https://max.ru/"]').forEach(link=>link.addEventListener('click',()=>reachMetrikaGoal('max_click')));
document.querySelectorAll('a[href="#contact"]').forEach(link=>{
  if(link.closest('.nav,.footer-nav'))return;
  link.addEventListener('click',()=>reachMetrikaGoal('consultation_click'));
});

const menu=document.querySelector('#nav');const menuButton=document.querySelector('.menu-toggle');menuButton.addEventListener('click',()=>{const open=menu.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open))});menu.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{menu.classList.remove('open');menuButton.setAttribute('aria-expanded','false')}));
const leadForm=document.querySelector('#lead-form');
const leadConsentVersionField=document.createElement('input');
leadConsentVersionField.type='hidden';
leadConsentVersionField.name='consent_version';
leadConsentVersionField.defaultValue=LEAD_CONSENT_VERSION;
leadForm.appendChild(leadConsentVersionField);
const contactField=leadForm.elements.contact;
const submitButton=leadForm.querySelector('button[type="submit"]');
const phonePattern=/^[+()\d\s-]{10,24}$/;
const telegramPattern=/^@[A-Za-z][A-Za-z0-9_]{4,31}$/;
const validateContact=()=>{
  const value=contactField.value.trim();
  const digits=value.replace(/\D/g,'');
  const validPhone=phonePattern.test(value)&&digits.length>=10&&digits.length<=15;
  const validTelegram=telegramPattern.test(value);
  contactField.setCustomValidity(validPhone||validTelegram?'':'Укажите номер телефона или Telegram-ник в формате @username.');
};
contactField.addEventListener('input',validateContact);
leadForm.addEventListener('submit',async event=>{
  event.preventDefault();
  validateContact();
  if(!leadForm.reportValidity())return;
  const status=leadForm.querySelector('.form-status');
  status.className='form-status';
  status.textContent='Отправляю заявку…';
  submitButton.disabled=true;
  submitButton.setAttribute('aria-busy','true');
  try{
    const response=await fetch('api/lead.php',{method:'POST',headers:{Accept:'application/json'},body:new FormData(leadForm)});
    const data=await response.json().catch(()=>({}));
    if(!response.ok||!data.ok){
      const error=new Error(data.message||'Не удалось отправить заявку.');
      error.userFacing=true;
      throw error;
    }
    status.className='form-status success';
    status.textContent='Заявка отправлена. Я свяжусь с вами в ближайшее время.';
    reachMetrikaGoal('lead_form_success');
    leadForm.reset();
    contactField.setCustomValidity('');
  }catch(error){
    status.className='form-status error';
    status.textContent=error.userFacing?error.message:'Не удалось отправить заявку. Напишите в Telegram или позвоните по номеру на сайте.';
  }finally{
    submitButton.disabled=false;
    submitButton.removeAttribute('aria-busy');
  }
});
document.querySelector('#year').textContent=new Date().getFullYear();

const header=document.querySelector('.header');
const backToTop=document.querySelector('.back-to-top');
const sectionLinks=[...document.querySelectorAll('.nav a[href^="#"]')];
const observedSections=sectionLinks.map(link=>document.querySelector(link.getAttribute('href'))).filter(Boolean);

const updateScrollUi=()=>{
  const hasScrolled=window.scrollY>24;
  header.classList.toggle('scrolled',hasScrolled);
  backToTop.classList.toggle('visible',window.scrollY>650);
};

window.addEventListener('scroll',updateScrollUi,{passive:true});
updateScrollUi();
backToTop.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));

const sectionObserver=new IntersectionObserver(entries=>{
  const current=entries.filter(entry=>entry.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];
  if(!current)return;
  sectionLinks.forEach(link=>link.classList.toggle('active',link.getAttribute('href')===`#${current.target.id}`));
},{rootMargin:'-30% 0px -60% 0px',threshold:[0,.2,.5]});
observedSections.forEach(section=>sectionObserver.observe(section));
