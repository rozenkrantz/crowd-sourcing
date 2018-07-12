/**
 * Mocking client-server processing
 */

const _request = [
    {"id": 1, "status": "pending", "title": "Нет укрытий от солнца и ветра в сквере у кампуса", "date": "13.45.67", "time":"13:55", "sender": "Сергей Чуплыгин", "description": "Мы часто гуляем в сквере напротив общежитий, иногда я там работаю. Но создает дискомфорт абсолютное отсутствие навесов, которые бы защищали от солнечного света и осадков.", "location": {lat: 55.752951, lng: 48.740328  }, "type": "problem"},
    {"id": 2, "status": "completed", "title": "Непонятные навигационные указатели", "date": "13.45.67", "time":"13:55", "sender": "Юлия Шадрина", "description": "В городе проблема с указателями на здания. Ничего не понятно.", "location": {lat: 55.752347, lng: 48.742260  }, "type": "problem"},
    {"id": 3, "status": "discussed", "title": "Отсутствуют места для отдыха во внутреннем дворе офисного центра", "date": "13.45.67", "time":"13:55", "sender": "Дмитрий Чернышов", "description": "Я работаю в ит компании и работаю до поздна. Большая просьба сделать хоть минимальное благоустройство во внутреннем дворе - хорошее пространство пропадает!", "location": {lat: 55.751767, lng: 48.752366  }, "type": "problem"},
    {"id": 4, "status": "ignored", "title": "Низкое качество дорожного покрытия, провалы в асфальте", "date": "13.45.67", "time":"13:55", "sender": "Антон Кузнецов", "description": "На дорогах замечены многократные дефекты.", "location": {lat: 55.751574, lng: 48.746830  }, "type": "problem"},
    {"id": 5, "status": "pending", "title": "Велосипедная дорожка обрывается", "date": "13.45.67", "time":"13:55", "sender": "Михаил Свердлов", "description": "Было бы намного приятней и удобнее ездить на велосипеде как в современном городе - по размеченным велодорожкам. А у нас они обрываются в самых неожиданных местах...", "location": {lat: 55.751985, lng: 48.743912  }, "type": "problem"},
    {"id": 6, "status": "completed", "title": "Засыхают деревья", "date": "13.45.67", "time":"13:55", "sender": "Анна Прохоренко", "description": "Замечено несколько деревьев в плохом состоянии. Фото прилагаю.", "location": {lat: 55.749183, lng: 48.740908  }, "type": "problem"},
    {"id": 7, "status": "discussed", "title": "Недостаточно света во дворе", "date": "13.45.67", "time":"13:55", "sender": "Андрей Кожевников", "description": "Мы с ребенком часто гуляем вечером во дворе, но приходится искать хорошо освещенное место, хочется больше света во дворах!", "location": {lat: 55.748519, lng: 48.745006  }, "type": "problem"},
    {"id": 8, "status": "ignored", "title": "Нехватает велосипедных парковок", "date": "13.45.67", "time":"13:55", "sender": "Ксения Демченко", "description": "Возле детского садика множество средств передвижения, но они лежат буквально горой. Давайте установим там парковки - детям будет удобнее.", "location": {lat: 55.746856, lng: 48.745250  }, "type": "problem"},
    {"id": 9, "status": "pending", "title": "Не благоустроена центральная территория парка", "date": "13.45.67", "time":"13:55", "sender": "Мария Щевелева", "description": " самом центре парка возле наших домов огромное пустое пространство. ", "location": {lat: 55.746638, lng: 48.741945  }, "type": "problem"},
    {"id": 10, "status": "completed", "title": "Не хватает питьевого фонтанчика возле спортивных площадок", "date": "13.45.67", "time":"13:55", "sender": "Тимур Рамазанов", "description": "Мы с друзьями каждое утро ходим заниматься на новой спортивной площадке, спасибо! Но там критически не хватает фонтанчика с питьевой водой - это было бы отличное дополнение!", "location": {lat: 55.745380, lng: 48.745207  }, "type": "problem"},
    {"id": 11, "status": "discussed", "title": "Благоустроить сквер за Университетом", "date": "13.45.67", "time":"13:55", "sender": "Роман Гаврилов", "description": "За Университетом прекрасный сквер, где было бы удобно отдохнуть, почитать, но там нет мест для отдыха. Было бы здорово сделать там уютное пространство с беседками и цветниками!", "location": {lat: 55.754205, lng: 48.744407  }, "type": "idea"},
    {"id": 12, "status": "ignored", "title": "Установить смотровую площадку в сквере возле кампуса", "date": "13.45.67", "time":"13:55", "sender": "Лейсан Василова", "description": "У нас в городе потрясающие закаты! Если поставить в парке возле кампуса смотровую площадку, можно будет наблюдать красивейшие пейзажи!", "location": {lat: 55.753131, lng: 48.738850  }, "type": "idea"},
    {"id": 13, "status": "pending", "title": "Транслировать кино на стене спортивного комплекса", "date": "13.45.67", "time":"13:55", "sender": " Максим Милованов", "description": "У спортивного комплекса со стороны парковки хорошее место для кинопоказов под открытым небом.", "location": {lat: 55.750945, lng: 48.742111  }, "type": "idea"},
    {"id": 14, "status": "completed", "title": "Проложить пешеходные маршруты в лесу", "date": "13.45.67", "time":"13:55", "sender": "Игорь Зубов", "description": "Давайте сделаем в лесу деревянные дорожки, я и мои друзья готовы помочь с маршрутами!", "location": {lat: 55.749822, lng: 48.737519  }, "type": "idea"},
    {"id": 15, "status": "discussed", "title": "Установить во внутреннем дворе офисного центра беседки", "date": "13.45.67", "time":"13:55", "sender": "Наталья Борисова", "description": "Предложение поставить несколько беседок.", "location": {lat: 55.751778, lng: 48.752432  }, "type": "idea"},
    {"id": 16, "status": "ignored", "title": "Сделать во дворах нового жк современные детские площадки", "date": "13.45.67", "time":"13:55", "sender": "Станислав Диденко", "description": "Добрый день! Хочу предложить не повторять ошибок и оборудовать дворы новых жилых кварталов современным игровым оборудованием, иначе мы ничем не будем отличаться от типичного двора типичного города...", "location": {lat: 55.749930, lng: 48.745094  }, "type": "idea"},
    {"id": 17, "status": "pending", "title": "Установить на бульваре арт-объект", "date": "13.45.67", "time":"13:55", "sender": "Вероника Сабитова", "description": "Бульвар от парка до технопарка - это отличное место для выставок, например, фотографий или объектов искусства.", "location": {lat: 55.747781, lng: 48.747304  }, "type": "idea"},
    {"id": 18, "status": "completed", "title": "Сделать водоем в парке", "date": "13.45.67", "time":"13:55", "sender": " Владимир Марочко", "description": "Городу очень нужна вода! Предлагаю вернуться к теме установки в парке фонтана, но не классического, а современного, как и сам Иннополис!", "location": {lat: 55.746658, lng: 48.741897  }, "type": "idea"},
    {"id": 19, "status": "discussed", "title": "Создать пространство для игр в парке", "date": "13.45.67", "time":"13:55", "sender": "Регина Курбанова", "description": "В парке хотелось бы видеть детский городок.", "location": {lat: 55.746114, lng: 48.743570  }, "type": "idea"},
    {"id": 20, "status": "ignored", "title": "Построить культурный центр", "date": "13.45.67", "time":"13:55", "sender": "Гузель Габдуллина", "description": "У нас в городе не хватает места, где можно будет заниматься творчеством и смотреть кино с семьей или с друзьями. Было бы здорово построить культурный центр, хотя, такая идея даже была где-то озвучена.", "location": {lat: 55.744145, lng: 48.748699  }, "type": "idea"},
   ]

export default {
  getRequests (cb) {
    setTimeout(() => cb(_request), 1000)
  }

  /*buyProducts (products, cb, errorCb) {
    setTimeout(() => {
      // simulate random checkout failure.
      (Math.random() > 0.5 || navigator.userAgent.indexOf('PhantomJS') > -1)
        ? cb()
        : errorCb()
    }, 100)
}*/
}
