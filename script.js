const serviceContent={
  vk:{title:'Таргетированная реклама ВКонтакте',intro:'Полное ведение рекламной кампании — от подготовки рекламного кабинета до анализа результатов.',items:['Создаю и настраиваю рекламный кабинет, беру на себя маркировку рекламы, передачу данных в ЕРИР и обязательную отчётность.','Разрабатываю текстовые и графические объявления под разные аудитории и рекламные гипотезы.','Тестирую сегменты аудитории и подходы, сравниваю стоимость и качество получаемых результатов.','Регулярно анализирую кампании: отключаю неэффективные объявления и масштабирую рабочие связки.','Вы получаете понятный отчёт: расходы, запущенные объявления, протестированные аудитории, результаты и выводы.','С вашей стороны — согласование рекламных материалов и пополнение рекламного бюджета; остальную техническую работу беру на себя.']},
  tg:{title:'Таргетированная реклама в Telegram',intro:'Помогаю продвигать бизнес, Telegram-каналы и другие проекты внутри Telegram.',items:['Создаю и настраиваю рекламный кабинет, беру на себя техническую часть запуска рекламных кампаний.','Подготавливаю тексты и текстово-графические рекламные материалы под задачу проекта.','Подбираю подходящие форматы: размещения в Telegram-каналах, рекламные объявления внутри Telegram, поисковую выдачу и другие инструменты.','Анализирую тематику проекта, конкурентов и потенциальную аудиторию.','Тестирую варианты размещения и рекламные гипотезы, оставляя наиболее результативные.','По итогам периода анализирую результаты кампании и определяю дальнейшие действия.']},
  yandex:{title:'Контекстная реклама в Яндексе',intro:'Настраиваю продвижение в Яндекс Директе и Яндекс Бизнесе с учётом особенностей вашего проекта.',items:['Анализирую поисковый спрос, конкурентов и текущую ситуацию в вашей нише.','Подбираю инструмент с учётом бизнеса, географии, уровня спроса и рекламного бюджета.','Формирую структуру рекламной кампании и подготавливаю её к запуску.','Предлагаю предварительную стратегию продвижения и объясняю, какие решения подойдут именно вашему проекту.']},
  audit:{title:'Профессиональная консультация и разбор бизнеса',intro:'Это отдельная платная услуга с глубоким анализом бизнеса, маркетинга и текущей ситуации, а не бесплатное первичное знакомство.',items:['До консультации изучаю ваш проект, текущую рекламу, конкурентов и основные источники клиентов.','Разбираем ситуацию в бизнесе, целевую аудиторию и рекламные предложения.','Определяем подходящие рекламные каналы и находим возможные ошибки в действующих кампаниях.','Оцениваем сайт, социальные сети и другие точки контакта с клиентами.','Обсуждаем рекламный бюджет, варианты его распределения, идеи для контента и креативов.','При необходимости рассматриваем PR и продвижение через СМИ.','По итогам вы получаете конкретные рекомендации и дальнейший план действий.']},
  video:{title:'Видеоролики для бизнеса',intro:'Если проекту нужен профессиональный видеоконтент, организую производство совместно с опытным видеографом.',items:['Рекламные и имиджевые ролики для бизнеса.','Видео для социальных сетей и рекламных кампаний.','Съёмка продукта, услуги, команды или рабочего процесса.','Формат, объём работы и стоимость определяются индивидуально под задачу.']}
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
document.querySelector('.case-modal-close').addEventListener('click',()=>caseModal.close());
caseModal.addEventListener('click',event=>{if(event.target===caseModal)caseModal.close()});
caseModal.addEventListener('close',()=>document.body.classList.remove('modal-open'));
document.querySelector('.case-modal-action').addEventListener('click',()=>caseModal.close());
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
const legalContent={
  privacy:`
    <p class="legal-draft">Редакция от 29 августа 2026 года</p>
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
      <div><strong>Аналитика посещаемости</strong><span>Будет осуществляться только после подключения аналитических систем, обновления этой Политики и настройки уведомления о cookie.</span></div>
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

    <h3>5. Хранение, поручение обработки и передача</h3>
    <p>Форма размещена на сайте <strong>marketolog-penza.ru</strong> и обрабатывается на виртуальном сервере российского хостинг-провайдера ООО «Бегет». Заявки направляются оператору по адресу <a href="mailto:ivan_muzenitov@mail.ru">ivan_muzenitov@mail.ru</a> с использованием российского почтового сервиса Mail.ru. Указанные технические поставщики привлекаются только в объёме, необходимом для размещения сайта и доставки заявки.</p>
    <p>Технические журналы безопасности хранятся на сервере в Российской Федерации не более 30 календарных дней, если более длительный срок не требуется для расследования инцидента или исполнения требований законодательства.</p>
    <p>Публикация и распространение персональных данных не осуществляются. Трансграничная передача данных в рамках формы обратной связи не планируется. Первичный сбор и хранение данных граждан Российской Федерации должны осуществляться с использованием баз данных, находящихся на территории Российской Федерации.</p>

    <h3>6. Сроки обработки и уничтожение</h3>
    <ul>
      <li>если договор не заключён — до достижения цели обращения, но не более 90 календарных дней после последнего взаимодействия;</li>
      <li>если договор заключён — в течение срока его действия и далее в пределах сроков, предусмотренных законодательством и необходимостью защиты законных интересов сторон;</li>
      <li>при отзыве согласия или достижении цели данные прекращают обрабатываться и уничтожаются в установленные законом сроки, если отсутствует иное законное основание для обработки.</li>
    </ul>

    <h3>7. Права пользователя</h3>
    <p>Пользователь вправе получать сведения об обработке своих данных, требовать их уточнения, блокирования или удаления, отзывать согласие и обжаловать действия оператора. Запрос направляется на <a href="mailto:ivan-muzenitov@yandex.ru">ivan-muzenitov@yandex.ru</a>. Для защиты данных оператор может запросить сведения, позволяющие подтвердить личность заявителя и связь запроса с соответствующими данными.</p>

    <h3>8. Защита данных</h3>
    <p>Оператор принимает необходимые правовые, организационные и технические меры: ограничивает доступ к данным, использует защищённое соединение HTTPS, контролирует доступ к почте и серверу, обновляет программное обеспечение и удаляет данные после истечения срока обработки. При инцидентах оператор действует в порядке и сроки, установленные законодательством.</p>

    <h3>9. Cookie и системы аналитики</h3>
    <p>В текущей версии сайта Яндекс Метрика и VK Pixel не подключены. До их подключения оператор обновит эту Политику, укажет используемые технологии и добавит механизм получения согласия на необязательные cookie. Ссылки на Telegram и MAX ведут на внешние сервисы, обработка данных в которых регулируется документами соответствующих владельцев.</p>

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
    <p class="legal-draft">Редакция от 29 августа 2026 года · отдельное согласие пользователя</p>
    <h2>Согласие на обработку персональных данных</h2>
    <p>Устанавливая отдельную отметку под формой и нажимая кнопку «Отправить заявку», я свободно, своей волей и в своём интересе даю согласие оператору персональных данных:</p>

    <div class="legal-summary">
      <div><span>Оператор</span><strong>Музенитов Иван Георгиевич</strong></div>
      <div><span>ИНН</span><strong>582102782490</strong></div>
      <div><span>Адрес оператора</span><strong>440067, Пензенская область, р. п. Лунино, ул. Ломоносова, д. 50</strong></div>
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
    <p>Заявка обрабатывается на виртуальном сервере российского хостинг-провайдера ООО «Бегет» и направляется оператору по адресу <a href="mailto:ivan_muzenitov@mail.ru">ivan_muzenitov@mail.ru</a> с использованием российского почтового сервиса Mail.ru.</p>

    <h3>5. Срок согласия</h3>
    <p>Согласие действует до достижения целей обработки, но не более 90 календарных дней после последнего взаимодействия, если договор не был заключён, либо до отзыва согласия. Если стороны заключат договор, дальнейшая обработка необходимых данных осуществляется на основании договора и законодательства.</p>

    <h3>6. Отзыв согласия</h3>
    <p>Согласие можно отозвать, направив письмо на <a href="mailto:ivan-muzenitov@yandex.ru">ivan-muzenitov@yandex.ru</a> с темой «Отзыв согласия на обработку персональных данных». В запросе необходимо указать контакт, использованный при отправке заявки. После получения отзыва оператор прекратит обработку и удалит данные в установленный законом срок, если отсутствует иное законное основание для их сохранения.</p>

    <p>Я подтверждаю, что указанные в форме данные принадлежат мне либо я имею законное основание для их передачи, а также что ознакомился с Политикой обработки персональных данных.</p>

    <p class="legal-note">Согласие фиксируется только после установки отдельной отметки под формой. Чекбокс не отмечается заранее.</p>
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
const menu=document.querySelector('#nav');const menuButton=document.querySelector('.menu-toggle');menuButton.addEventListener('click',()=>{const open=menu.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open))});menu.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{menu.classList.remove('open');menuButton.setAttribute('aria-expanded','false')}));
const leadForm=document.querySelector('#lead-form');
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
    if(!response.ok||!data.ok)throw new Error(data.message||'Не удалось отправить заявку.');
    status.className='form-status success';
    status.textContent='Заявка отправлена. Я свяжусь с вами в ближайшее время.';
    leadForm.reset();
    contactField.setCustomValidity('');
  }catch(error){
    status.className='form-status error';
    status.textContent='Не удалось отправить заявку. Напишите в Telegram или позвоните по номеру на сайте.';
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
