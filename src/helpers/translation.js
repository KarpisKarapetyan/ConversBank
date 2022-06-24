export const AM = {
    "onlineBanking" : 'Օնլայն բանկինգ',
    armenian: "Հայ",
    russian : "Рус",
    english : "Eng",
    "$ exchange_Rate" : "Փոխարժեք",
    "currency_and_gold_exchnage_rate": "Տարադրամի և ոսկու փոխարժեք",
    updated : "Թարմացվել է",
    currency : "Արժույթ",
    buy : 'Առք',
    sell : 'Վաճառք',
    currency_Tab : 'Տարադրամ',
    gold : 'Ոսկի',
    individuals : 'Անհատներ',
    business : "Բիզնես",    
}
export const RU = {
    "onlineBanking" : 'Онлайн банкинг',
    armenian: "Հայ",
    russian : "Рус",
    english : "Eng",
    "$ exchange_Rate" : "Курс",
    "currency_and_gold_exchnage_rate": "Курс валюты и золота",
    updated : "Обновлено",
    currency : "Валюта",
    buy : 'Купля',
    sell : 'Продажа',
    currency_Tab : 'Курсы',
    gold : 'Золото',
    individuals : 'Лица',
    business : "Бизнес",
}
export const EN = {
    "onlineBanking" : 'Online banking',
    armenian: "Հայ",
    russian : "Rus",
    english : "Eng",
    "$ exchange_Rate" : "Rate",
    "currency_and_gold_exchnage_rate": "Currency and gold exchnage rate",
    updated : "Updated",
    currency : "Currency",
    buy : 'Buy',
    sell : 'Sell',
    currency_Tab : 'Exchnage rate',
    gold : 'Gold',
    individuals : 'Individuals',
    business : "Business",
}

const languages = {
    AM,
    RU,
    EN
}

export const getLanguage = lang => languages[lang];
