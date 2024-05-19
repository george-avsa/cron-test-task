type Filter = {
  Id: string;
  Name: string;
};

export type FilterGroup = {
  Id: string;
  Name: string;
  Filters: Filter[];
};

export default Filter;

export const filters: FilterGroup[] = [
  {
    Id: "b301f958-3638-4b11-9a17-14bb679d56cf",
    Name: "Отрасль",
    Filters: [
      {
        Id: "250899b4-252d-417d-8280-418b88cc9a34",
        Name: "BI-отчеты",
      },
      {
        Id: "df9db9cb-a623-45c9-9500-f8310ae769a7",
        Name: "Гос. заказ",
      },
      {
        Id: "3f122e34-6081-44c8-806f-29eeadd9bd00",
        Name: "Энергетика",
      },
      {
        Id: "6fe0e6ba-db5c-4815-9614-11bfcaf5a7e5",
        Name: "Образование",
      },
      {
        Id: "1b7ac93c-72c5-4d9c-8324-2832ab78eafb",
        Name: "Финтех",
      },
      {
        Id: "98ec4b41-8797-4c29-9502-2b5c5db47dd2",
        Name: "Образ жизни",
      },
      {
        Id: "5388adb4-c44f-4cf5-8ff1-5510096e5134",
        Name: "Медицина",
      },
      {
        Id: "19a57a21-2f21-4ab4-ad52-1ab8c3c21fdd",
        Name: "E-commerce",
      },
      {
        Id: "9daf73d2-6ca2-4fc7-a831-7f4fcfc4347b",
        Name: "Безопасность",
      },
      {
        Id: "c5fd8f03-75e6-4b4c-907c-d7de77eb981d",
        Name: "Развлечения",
      },
      {
        Id: "519aed7a-f518-4ae2-acc6-94a20c282f34",
        Name: "Картография",
      },
    ],
  },
  {
    Id: "1ac611be-e5d5-4c65-8d5b-c0abe1bb611a",
    Name: "Платформы",
    Filters: [
      {
        Id: "088216bf-dc52-4838-8748-5a8260785866",
        Name: "Android",
      },
      {
        Id: "6aef4516-5ba5-47b1-9134-c8f25116f2b7",
        Name: "Chat-system",
      },
      {
        Id: "8c8ac1b4-0262-4653-a059-0cbafd90eeef",
        Name: "Telegram",
      },
      {
        Id: "c38d645a-3163-4d4f-97dd-00ac18c2f4f5",
        Name: "Backend",
      },
      {
        Id: "d5c634ea-0d8d-42d1-b972-144fef46dd7f",
        Name: "Windows",
      },
      {
        Id: "e70af8bc-7739-4a0c-80df-68750850aa63",
        Name: "Панель управления",
      },
      {
        Id: "ec3b51f9-cf32-48d0-a2bd-2372b6b54b38",
        Name: "Web",
      },
      {
        Id: "fe85a416-2f0c-470a-b3ee-c750248d81a3",
        Name: "iOS",
      },
    ],
  },
  {
    Id: "5d1830bc-ff72-4807-9b54-6464230b575b",
    Name: "Услуги",
    Filters: [
      {
        Id: "0ba1e7d1-4d37-4372-bff6-2da6a289109b",
        Name: "Релиз",
      },
      {
        Id: "1b373e59-1513-4fc1-9767-21c9fac81497",
        Name: "Сопровождение",
      },
      {
        Id: "1e9f7a13-f29a-4a4c-b86f-f0d01ba4d0fd",
        Name: "Дизайн",
      },
      {
        Id: "1fde874e-953a-4feb-8411-bbf173453d23",
        Name: "Тестирование",
      },
      {
        Id: "85123c2f-6cbb-4268-a02c-4d2bb36a072c",
        Name: "Разработка",
      },
      {
        Id: "859b4c50-d842-4f57-b00b-016539886853",
        Name: "Предпроектная деятельность",
      },
      {
        Id: "eefbd20d-e59c-42dc-8ebc-7cf81dede2d4",
        Name: "Аналитика",
      },
      {
        Id: "f2df6242-206c-4184-bc31-a6d93275a7d8",
        Name: "Приемка",
      },
    ],
  },
  {
    Id: "0e663c76-3a4a-4584-8d60-9d251dc5aa3e",
    Name: "Языки",
    Filters: [
      {
        Id: "0b6c9851-3e78-458c-9bf7-dcd44a20bf54",
        Name: "Node.JS",
      },
      {
        Id: "0c466738-dea1-41cd-8c51-e57a1871a78a",
        Name: "Java",
      },
      {
        Id: "1031475b-a085-4e1c-b034-815105b759a8",
        Name: "Xamarin",
      },
      {
        Id: "13512701-c378-4d5a-b160-bce6867ce138",
        Name: "Wordpress",
      },
      {
        Id: "1ac10528-15ab-4e03-9f15-2db124dc7d0a",
        Name: "Drupal 8, Angular",
      },
      {
        Id: "24f568d5-c6ce-4aad-bf51-6a3afa802966",
        Name: "ASP.NET Core, Azure",
      },
      {
        Id: "2fb079e8-5ff5-4c1b-bd8b-fd800cd6f7f9",
        Name: "MS Power BI",
      },
      {
        Id: "573dd628-7e06-4429-a1fd-80b0544746e9",
        Name: "1C-Битрикс",
      },
      {
        Id: "818aa928-7e44-46df-92bd-3544307f48e5",
        Name: "Objective-C",
      },
      {
        Id: "8658033d-f5c1-41e0-b29f-97780795ffdb",
        Name: "C#, UWP",
      },
      {
        Id: "8b9267c3-ffa4-4396-a9ed-9deb6150677a",
        Name: "Python",
      },
      {
        Id: "af996dd8-2ef9-40b9-9d61-3a2f877d98d9",
        Name: "PHP",
      },
      {
        Id: "b0e51f01-6142-48f7-b018-7df6acb7d3d4",
        Name: "Kotlin",
      },
      {
        Id: "b8367bcd-e6d4-4928-996c-0e50351a0806",
        Name: "MODX",
      },
      {
        Id: "c33029c0-85ff-4d5b-ad2d-ba2b67e5d970",
        Name: "Swift",
      },
      {
        Id: "cacb5e2a-a26d-4a47-b3c0-4cd087eca719",
        Name: "PhoneGap",
      },
      {
        Id: "cbb79b74-c678-466e-9240-af80a2510f44",
        Name: "React",
      },
      {
        Id: "d44f2a89-c2f9-4385-b051-31c6e954e04b",
        Name: "Java, Kotlin",
      },
      {
        Id: "dd365f79-0af8-41c3-9d5b-ea19f2fff55f",
        Name: "Cordova",
      },
      {
        Id: "eb90f73c-87cb-442c-9ac2-f2eb9dcdd441",
        Name: "C++",
      },
    ],
  },
];
