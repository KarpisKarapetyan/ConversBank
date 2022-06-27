import { linksArr } from "./constants"

export const AM = {
    linksHeader : linksArr[0] ,
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
    headerAction : 'Ակցիա'    
}
export const RU = {
    linksHeader : linksArr[1] ,
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
    headerAction : 'Акция'
}
export const EN = {
    linksHeader : linksArr[2],
    "onlineBanking" : 'Online banking',
    armenian: "Հայ",
    russian : "Рус",
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
    headerAction : 'Action'
}

const languages = {
    AM,
    RU,
    EN
}

export const getLanguage = lang => languages[lang];
