const reviews = [
    {
        avatar: 'I',
        hardCodeColorBg: 'red',
        title: 'Дуже зручно, що є фізичний офіс, рекомендую!',
        description: 'Вітаю, дякую за надану послугу з розрахунку податків та перенесення діяльності до міста Варшави! Дуже зручно, що є фізичний офіс, куди можна звернутись у разі потреби консультації та зустрічі офлайн, усім рекомендую, звертайтесь!',
        srcToOpinion: 'https://www.google.com/maps/place/The+Best+Result+-+Biuro+Rachunkowe+Ksi%C4%99gowe+Leasing+Ubezpieczenia+Warszawa+%D0%91%D1%83%D1%85%D0%B3%D0%B0%D0%BB%D1%82%D0%B5%D1%80%D1%96%D1%8F+%D0%A1%D1%82%D1%80%D0%B0%D1%85%D1%83%D0%B2%D0%B0%D0%BD%D0%BD%D1%8F+%D0%9B%D1%96%D0%B7%D0%B8%D0%BD%D0%B3+%D0%86%D0%BF%D0%BE%D1%82%D0%B5%D0%BA%D0%B0+%D0%9F%D0%BE%D0%BB%D1%8C%D1%89%D0%B0/@51.8740848,19.7943448,7.2z/data=!4m6!3m5!1s0x471ecd3b7061cd29:0x282dcd5a6166385!8m2!3d52.2700284!4d21.0475275!16s%2Fg%2F11vwn_01wk?hl=pl-PL&entry=ttu'
    },
    {
        avatar: 'C',
        hardCodeColorBg: 'blue',
        title: 'Только им доверяю ведение своей фирмы',
        description: 'Уже несколько лет знакома с  TheBestResult и название говорит само за себя! Только им доверяю ведение своей фирмы и всегда советую друзьям,что свидетельствует о высоком уровне профессионализма и качества услуг. Команда TheBestResult от A до Я „the best“ в своем деле.Всегда оперативно получаю ответы на вопросы,помощь и поддержку как в вопросах ведения фирмы,трудоустройства ,налогообложения,так же и других областях,даже не совсем касающихся бухгалтерский услуг,что подчеркивает заботу о своих клиентах.',
        srcToOpinion: 'https://www.google.com/maps/place/The+Best+Result+-+Biuro+Rachunkowe+Ksi%C4%99gowe+Leasing+Ubezpieczenia+Warszawa+%D0%91%D1%83%D1%85%D0%B3%D0%B0%D0%BB%D1%82%D0%B5%D1%80%D1%96%D1%8F+%D0%A1%D1%82%D1%80%D0%B0%D1%85%D1%83%D0%B2%D0%B0%D0%BD%D0%BD%D1%8F+%D0%9B%D1%96%D0%B7%D0%B8%D0%BD%D0%B3+%D0%86%D0%BF%D0%BE%D1%82%D0%B5%D0%BA%D0%B0+%D0%9F%D0%BE%D0%BB%D1%8C%D1%89%D0%B0/@51.8740848,19.7943448,7.2z/data=!4m6!3m5!1s0x471ecd3b7061cd29:0x282dcd5a6166385!8m2!3d52.2700284!4d21.0475275!16s%2Fg%2F11vwn_01wk?hl=pl-PL&entry=ttu'
    },
    {
        avatar: 'A',
        hardCodeColorBg: 'green',
        title: 'Chcę podziękować chłopakom za tak wysoki poziom profesjonalizmu',
        description: 'Chociaż nie mam jeszcze swojej działaności gospodarczej, ale chcę podziękować chłopakom za tak wysoki poziom profesjonalizmu! Z ich pomocą udało się nie tylko zminimalizować podatki i dodatkowe koszty przy zwykłej umowie zlecenia, ale też wybudować strategię biznesówą oraz konkretny plan działania w drodze do własnej firmy',
        srcToOpinion: 'https://www.google.com/maps/place/The+Best+Result+-+Biuro+Rachunkowe+Ksi%C4%99gowe+Leasing+Ubezpieczenia+Warszawa+%D0%91%D1%83%D1%85%D0%B3%D0%B0%D0%BB%D1%82%D0%B5%D1%80%D1%96%D1%8F+%D0%A1%D1%82%D1%80%D0%B0%D1%85%D1%83%D0%B2%D0%B0%D0%BD%D0%BD%D1%8F+%D0%9B%D1%96%D0%B7%D0%B8%D0%BD%D0%B3+%D0%86%D0%BF%D0%BE%D1%82%D0%B5%D0%BA%D0%B0+%D0%9F%D0%BE%D0%BB%D1%8C%D1%89%D0%B0/@51.8740848,19.7943448,7.2z/data=!4m6!3m5!1s0x471ecd3b7061cd29:0x282dcd5a6166385!8m2!3d52.2700284!4d21.0475275!16s%2Fg%2F11vwn_01wk?hl=pl-PL&entry=ttu'
    },
    {
        avatar: 'O',
        hardCodeColorBg: 'yellow',
        title: 'Profesjonalne odpowiedzi, cudowny servis',
        description: 'Jesteśmy zadowoleni ze wsparcia pracowników . Na wszystkie pytania dostajemy szybkie i profesjonalne odpowiedzi.',
        srcToOpinion: 'https://www.google.com/maps/place/The+Best+Result+-+Biuro+Rachunkowe+Ksi%C4%99gowe+Leasing+Ubezpieczenia+Warszawa+%D0%91%D1%83%D1%85%D0%B3%D0%B0%D0%BB%D1%82%D0%B5%D1%80%D1%96%D1%8F+%D0%A1%D1%82%D1%80%D0%B0%D1%85%D1%83%D0%B2%D0%B0%D0%BD%D0%BD%D1%8F+%D0%9B%D1%96%D0%B7%D0%B8%D0%BD%D0%B3+%D0%86%D0%BF%D0%BE%D1%82%D0%B5%D0%BA%D0%B0+%D0%9F%D0%BE%D0%BB%D1%8C%D1%89%D0%B0/@51.8740848,19.7943448,7.2z/data=!4m6!3m5!1s0x471ecd3b7061cd29:0x282dcd5a6166385!8m2!3d52.2700284!4d21.0475275!16s%2Fg%2F11vwn_01wk?hl=pl-PL&entry=ttu'
    },
]

export default reviews;