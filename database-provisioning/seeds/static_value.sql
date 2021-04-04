set @id = 0;

delete from static_value;
insert into static_value
    (id, module_name, `key`, data)
values
    -- end user home page covers
    (
        (select generate_next_id()), 'end_user.cover_images', 'home',
        '
        [
            {
                "title": "Cool Biker",
                "source": "https://images.unsplash.com/photo-1614759896448-7cc6a2606c38?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            },
            {
                "title": "Cool Biker 2",
                "source": "https://images.unsplash.com/photo-1614759923834-fd150adc1342?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80"
            },
            {
                "source": "https://wallpaperaccess.com/full/467615.jpg"
            }
        ]
        '
    ),
    -- end user about us cover url
    (
        (select generate_next_id()), 'end_user.cover_images', 'about_us',
        '
        [
            {
                "source": "https://images.unsplash.com/photo-1615231417538-5a64ba64c3b7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1778&q=80"
            }
        ]
        '
    ),
    -- end user common page footer data
    (
        (select generate_next_id()), 'end_user.common_page', 'footer',
        '
        {
            "email": "2wheelsvietnam@gmail.com",
            "phone_number": "(+84) 904 253 491",
            "shop_address": "13 Ngo Huyen, Hoan Kiem, Hanoi",
            "warehouse_address": "99 Bac Cau, Long Bien, Hanoi"
        }
        '
    )
;
