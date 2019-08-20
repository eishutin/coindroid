module.exports.adminpanel = {
  instances: {

    navigation: {
      title: 'Навигация',
      model: 'Navigation',
      fields:{
        name:'Имя',
        container:'Содержимое',
        createdAt: false,
        updatedAt: false
      },
      add:{
        fields:{
          container: {
            title:'Содержимое',
            type:'json',
            widget:'JsonEditor',
            JsonEditor: {
              height:400,
              mode:'code',
              modes:[
                'code',
                'tree',
                'text',
                'form',
                'view'
              ]
            }
          }
        }
      },
      edit:{
        fields:{
          container: {
            title:'Содержимое',
            type:'json',
            widget:'JsonEditor',
            JsonEditor: {
              height:400,
              mode:'code',
              modes:[
               'code',
                'tree',
                'text',
                'form',
                'view'
              ]
            }
          }
        }
      }
    },
    ourWorksStrip: {
      title: 'Наши работы',
      model: 'OurWorksStrip',

      fields:{
        urlImage:'Ссылка картинки',
        popText:'Всплывающий текст',
        createdAt: false,
        updatedAt: false
      }
    },
    possibStrip: {
      title: 'Слайд - меню возможностей',
      model: 'PossibStrip',
      fields:{
        urlImage: 'Ссылка картинки',
        text: 'Текст',
        popText: 'Всплывающий текст',
        popUrlImage: 'Ссылка всплывающей картинки',
        createdAt: false,
        updatedAt: false
      }
    },
    someText: {
      title: 'Какой-то текст',
      model: 'SomeText',
      fields:{
        name:'Имя',
        someText:'Текст',
        createdAt: false,
        updatedAt: false
      }
    },
    supportStrip: {
      title: 'Поддержка',
      model: 'SupportStrip',
      fields:{
        header: 'Заголовок',
        mainText: 'Основной текст',
        buttonText: 'Текст на кнопке',
        urlButton: 'Ссылка кнопки',
        createdAt: false,
        updatedAt: false
      }
    }

  }
};
