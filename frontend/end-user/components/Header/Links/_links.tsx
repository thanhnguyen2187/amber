interface ILink {
    label: string,
    url: string,
    language: string,
}

const _links_en: ILink[] = [
    {
        label: "Why us?",
        url: "",
        language: "en"
    },
    {
        label: "Bikes",
        url: "",
        language: "en"
    },
    {
        label: "Services",
        url: "",
        language: "en"
    },
    {
        label: "Book",
        url: "",
        language: "en"
    },
    {
        label: "Contact",
        url: "",
        language: "en"
    },
]
const _links_vi: ILink[] = [
    {
        label: "Về chúng tôi",
        url: "",
        language: "vi"
    },
    {
        label: "Xe",
        url: "",
        language: "vi"
    },
    {
        label: "Dịch vụ",
        url: "",
        language: "vi"
    },
    {
        label: "Đặt xe",
        url: "",
        language: "vi"
    },
    {
        label: "Liên hệ",
        url: "",
        language: "vi"
    },
]

export default [
    ..._links_en,
    ..._links_vi,
]