set @id = 0;

delete from media_file;
insert into media_file
    (id, data)
values
    (
        (select generate_next_id()),
        '
        {
            "title": "Man Looking At Bike",
            "source": "https://images.unsplash.com/photo-1506424482693-1f123321fa53?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1292&q=80"
        }
        '
    ),
    (
        (select generate_next_id()),
        '
        {
            "title": "Sport Bike In Desert",
            "source": "https://images.unsplash.com/photo-1514826863517-464eed44915d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80"
        }
        '
    ),
    (
        (select generate_next_id()),
        '
        {
            "title": "Sport Bikes Race",
            "source": "https://images.unsplash.com/photo-1505807514643-8521e260c67e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80"
        }
        '
    ),
    (
        (select generate_next_id()),
        '
        {
            "title": "Dirty Sport Bikes Race",
            "source": "https://images.unsplash.com/photo-1530881340191-57b6d6007852?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        }
        '
    ),
    (
        (select generate_next_id()),
        '
        {
            "title": "Flying Sport Bike",
            "source": "https://images.unsplash.com/photo-1515540468442-bcec79e94728?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1654&q=80"
        }
        '
    ),
    (
        (select generate_next_id()),
        '
        {
            "title": "Honda Dream 29D1 545.37",
            "source": "https://images.unsplash.com/photo-1495784314389-22f6455e1ba6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80"
        }
        '
    ),
    (
        (select generate_next_id()),
        '
        {
            "title": "Yamaha Nouvo 55P1 6320, Air Blade 59C2 220.13",
            "source": "https://images.unsplash.com/photo-1504359738601-66545b01e803?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80"
        }
        '
    ),
    (
        (select generate_next_id()),
        '
        {
            "title": "Helmets",
            "source": "https://images.unsplash.com/photo-1583912736562-6086dedde74b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80"
        }
        '
    ),
    (
        (select generate_next_id()),
        '
        {
            "title": "Bike with Dogs",
            "source": "https://images.unsplash.com/photo-1575204642788-76a66d2131c0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1318&q=80"
        }
        '
    ),
    (
        (select generate_next_id()),
        '
        {
            "title": "Biker with Cat",
            "source": "https://images.unsplash.com/photo-1616492414797-784e1f7db960?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
        }
        '
    ),
    (
        (select generate_next_id()),
        '
        {
            "title": "Honda Win on The Way",
            "source": "https://images.unsplash.com/photo-1560260240-1150d596dbff?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        }
        '
    ),
    (
        (select generate_next_id()),
        '
        {
            "title": "Detech Win on The Way",
            "source": "https://images.unsplash.com/photo-1561056524-89ccded076e0?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80"
        }
        '
    ),
    (
        (select generate_next_id()),
        '
        {
            "title": "Vario",
            "source": "https://images.unsplash.com/photo-1516289637866-1e298d7c6a54?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80"
        }
        '
    ),
    (
        (select generate_next_id()),
        '
        {
            "title": "Honda Win s dashboard",
            "source": "https://images.unsplash.com/photo-1421894054319-b4dcc51d41e3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        }
        '
    ),
    (
        (select generate_next_id()),
        '
        {
            "title": "Honda Fuel Tank",
            "source": "https://images.unsplash.com/photo-1580894736003-7f5f057c9f38?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1353&q=80"
        }
        '
    ),
    (
        (select generate_next_id()),
        '
        {
            "title": "Sport Bike Burns Tire on Grass",
            "source": "https://images.unsplash.com/photo-1516193313597-3ada7b1056a6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        }
        '
    )
;
