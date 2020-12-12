interface ILanguage {
    key: string,
    value: string,
    lang: string,
}

const _languages: ILanguage[] = [
    {
        key: "vi",
        value: "Vietnamese",
        lang: "en",
    },
    {
        key: "en",
        value: "English",
        lang: "en",
    },
    {
        key: "vi",
        value: "Tiếng Việt",
        lang: "vi",
    },
    {
        key: "en",
        value: "Tiếng Anh",
        lang: "vi",
    },
]

export default _languages