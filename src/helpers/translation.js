export const AM = {
    "onlineBanking" : 'Օնլայն բանկինգ',
    armenian: "Հայ",
    russian : "Рус",
    english : "Eng"
}
export const RU = {
    "onlineBanking" : 'Онлайн банкинг',
    armenian: "Հայ",
    russian : "Рус",
    english : "Eng"
}
export const EN = {
    "onlineBanking" : 'Online banking',
    armenian: "Հայ",
    russian : "Rus",
    english : "Eng"
}

const languages = {
    AM,
    RU,
    EN
}

export const getLanguage = lang => languages[lang];
