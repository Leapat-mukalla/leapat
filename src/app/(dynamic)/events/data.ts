type Company = {
  name: string
  url: string
  image: string
}

type Speaker = {
  name: string
  url: string
  image: string
  company: Company | null
}

type Events = {
  title: string
  speaker: Speaker
  date: string
  video: string | null
}[]


export const EVENTS: Events = [
  {
    title: 'ادارة المنتجات',
    date: '2025-03-11',
    video: null,
    speaker: {
      name: 'وليد العاقل',
      image: 'https://media.licdn.com/dms/image/v2/D4D35AQHVd-5rZx2Y4A/profile-framedphoto-shrink_400_400/B4DZUpxdqYG4Ag-/0/1740162587617?e=1741914000&v=beta&t=06IFigJGcE2LSupLdSyS49oUCJg9PNU5e6ZkVZz9aVo',
      url: 'https://www.linkedin.com/in/waleed-elaghil',
      company: {
        name: 'Salla.sa',
        image: 'https://media.licdn.com/dms/image/v2/D4D0BAQHu8ypRktsxYA/company-logo_200_200/company-logo_200_200/0/1737729379550?e=1749686400&v=beta&t=0OOEFgisvTvJ9zhYId-ZPhdmsCejSYhfc6m5Jn7VtrA',
        url: 'https://salla.com/',
      }
    },
  },
  {
    title: "امن المعلومات",
    date: '2025-03-15',
    video: null,
    speaker: {
      name: 'علي باوزير',
      image: "https://media.licdn.com/dms/image/v2/D4D03AQEXq8onhxgNOA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1720296238904?e=1746662400&v=beta&t=j8qLMZ3q8fBvfAxw_bkhJciNRseRt8JgWPTiCxuM7PA",
      url: "https://www.linkedin.com/in/alibawazeeer/",
      company: {
        name: "Yogosha",
        image: "https://media.licdn.com/dms/image/v2/D4E0BAQHx4qFaOWGKPQ/company-logo_200_200/company-logo_200_200/0/1713281798403/yogosha_logo?e=1749686400&v=beta&t=l56vGEoIpkjBxnjJrAaJW0dzA5MJXpQamykHSdHJ1ek",
        url: "https://yogosha.com/",
      }
    }
  },
  {
    title: "DevOps & Cloud",
    date: '2025-03-18',
    video: null,
    speaker: {
      name: 'عثمان البكري',
      image: 'https://media.licdn.com/dms/image/v2/D4E03AQGv33TOGasGIw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1689109879150?e=1746662400&v=beta&t=9hjFarlydcEzJnQnCMoGY4iajGRFCV9__o8b7xEY3_M',
      url: 'https://www.linkedin.com/in/othman-albakri-3278865a/',
      company: {
        name: "Jisr",
        image: "https://media.licdn.com/dms/image/v2/D4E0BAQFetid-VUq8Rg/company-logo_200_200/company-logo_200_200/0/1724245177363/jisr_hr_logo?e=1749686400&v=beta&t=cPhwkgdLt8L_-t-gSOSWd-UjO3PVMJCsHLz2ytpNok8",
        url: "https://jisr.net/",
      }
  },
},
{
  title: "البرمجة",
  date: '2025-03-21',
  video: null,
  speaker: {
    name: "نشوان",
    url:"https://www.linkedin.com/in/nash1ye/",
    image:"https://media.licdn.com/dms/image/v2/C4D03AQHuoVep11FVZA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1601823308485?e=1746662400&v=beta&t=FVaU9HUWDiXVlgU1tJ1H_uwQrEWkYvBG2SvfHAqijpQ",
    company: {
      name: "Salla.sa",
image:"https://media.licdn.com/dms/image/v2/D560BAQGCvEB7YjirVg/company-logo_200_200/company-logo_200_200/0/1734522995273/lifeatemma_logo?e=1749686400&v=beta&t=6HADZRftgybPta7r1gtzvio2L_QwEGU9Fv0P6LJ_SCw",      url: "https://team.emma-sleep.com/",
    }
  }
},
{
  title: "البرمجيات مفتوحة المصدر",
  date: '2025-03-25',
  video: null,
  speaker: {
    name: "هشام بن عطية",
    url: "https://www.linkedin.com/in/hishambinateya/",
    image: "https://media.licdn.com/dms/image/v2/C5603AQGzH6TXJQbAKg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1516994590383?e=1746662400&v=beta&t=yF9DbaIZm1mpL1Cn1v83uBEWIPWQfqa7FouMONf1-dU",
    company: null,
  }
},
{
  title: "تجربة المستخدم",
  date: '2025-03-28',
  video: null,
  speaker: {
    name: "محمد وبر",
    url: "https://www.linkedin.com/in/mohammedwabur/",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQFEhb7faWEXDQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1676366218760?e=1746662400&v=beta&t=XCCf3SFfn2409Y87wuFYqEtw9lE_7OTeTy5SGTpof2Q",
    company: {
      name: "قوافل",
      image: "https://media.licdn.com/dms/image/v2/D4E0BAQHIfBLVmobd6w/company-logo_200_200/company-logo_200_200/0/1697971135500?e=1749686400&v=beta&t=1uHN8joKehiSrcPpe3-QNYvVCdhK-NGv9xlxJfw059c",
      url: "https://www.qawafel.sa/",
    }
  }

}
]
