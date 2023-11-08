export const menuList = [
    {
        name_en:'Sets',
        name_ru:'Наборы',
        link:'',
        submenu:false
    },
    {
        name_en:'All Products',
        name_ru:'Все Товары',
        link:'catalog',
        submenu:[
            {
                name_en:'Clothing',
                name_ru:'Одежда',
                link:'catalog',
                submenu:false,
            },
            {
                name_en:'Bags and accessories',
                name_ru:'Сумки и аксессуары',
                link:'catalog',
                submenu:[
                    {
                        name_en:'- backpack',
                        name_ru:'- рюкзак',
                        link:'catalog',
                        category:'backpack'
                    },
                    {
                        name_en:'- Bag/Eco-bag',
                        name_ru:'- Сумка/Экосумка',
                        link:'catalog',
                        category:'backpack'
                    },
                    {
                        name_en:'- Fanny pack',
                        name_ru:'- Бананка',
                        link:'catalog',
                        category:'bnp'
                    },
                    {
                        name_en:'- Hat',
                        name_ru:'- Шапка',
                        link:'catalog',
                        category:''
                    },
                    {
                        name_en:'- Cap',
                        name_ru:'- Кепка',
                        link:'catalog',
                        category:''
                    },
                    {
                        name_en:'- Mask for sleep',
                        name_ru:'- Маска для сна',
                        link:'catalog',
                        category:''
                    },
                    {
                        name_en:'- Keychains',
                        name_ru:'- Брелки',
                        link:'catalog',
                        category:''
                    },
                ]
            },
            {
                name_en:'For office',
                name_ru:'Для офиса',
                link:'',
                submenu:false,
            },
            {
                name_en:'Dishes',
                name_ru:'Посуда',
                link:'',
                submenu:false,
            },
            {
                name_en:'Leisure',
                name_ru:'Отдых',
                link:'',
                submenu:false,
            },
            {
                name_en:'Delicacies',
                name_ru:'Вкусности',
                link:'',
                submenu:false,
            },
            {
                name_en:'Electronics',
                name_ru:'Электроника',
                link:'',
                submenu:false,
            },
        ]
    },
    {
        name_en:'Sewing',
        name_ru:'Пошив',
        link:'',
        submenu:false
    },
    {
        name_en:'Production',
        name_ru:'Производство',
        link:'',
        submenu:false
    },
    {
        name_en:'Information',
        name_ru:'Информация',
        link:'',
        submenu:false
    },
]