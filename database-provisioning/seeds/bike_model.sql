drop procedure if exists seed_bike_model;
delimiter //

create procedure seed_bike_model()
begin
    set @id = 0;
    set @index = 0;
    delete from bike_model;
    while @index <= 10 do
        insert into bike_model
            (id, model_data, media_files)
        values
            (
                (select generate_next_id()), -- ID 1
                '
                {
                    "name": "Honda Win copy 100cc",
                    "capacity": 100,
                    "cost": 5000000,
                    "cost_display": "280 USD",
                    "daily_rental_fee_inside_city": 100000,
                    "daily_rental_fee_inside_city_display": "5 USD",
                    "daily_rental_fee_traveling": 200000,
                    "daily_rental_fee_traveling_display": "10 USD",
                    "monthly_rental_fee": 1000000,
                    "monthly_rental_fee_display": "1 000 000 VND"
                }
                ',
                '
                [
                    {
                        "title": "Sport Bike In Desert",
                        "source": "https://images.unsplash.com/photo-1514826863517-464eed44915d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80"
                    },
                    {
                        "title": "Honda Win on The Way",
                        "source": "https://images.unsplash.com/photo-1560260240-1150d596dbff?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                    },
                    {
                        "title": "Detech Win on The Way",
                        "source": "https://images.unsplash.com/photo-1561056524-89ccded076e0?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80"
                    }
                ]
                '
            ),
            (
                (select generate_next_id()), -- ID 2
                '
                {
                    "name": "Detech Win 110cc",
                    "capacity": 125,
                    "cost": 8000000,
                    "cost_display": "500 USD",
                    "daily_rental_fee_inside_city": 150000,
                    "daily_rental_fee_inside_city_display": "7.5 USD",
                    "daily_rental_fee_traveling": 250000,
                    "daily_rental_fee_traveling_display": "15 USD",
                    "monthly_rental_fee": 1200000,
                    "monthly_rental_fee_display": "1 200 000 VND"
                }
                ',
                '
                [
                    {
                        "title": "Man Looking At Bike",
                        "source": "https://images.unsplash.com/photo-1506424482693-1f123321fa53?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1292&q=80"
                    },
                    {
                        "title": "Honda Win on The Way",
                        "source": "https://images.unsplash.com/photo-1560260240-1150d596dbff?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                    },
                    {
                        "title": "Detech Win on The Way",
                        "source": "https://images.unsplash.com/photo-1561056524-89ccded076e0?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80"
                    }
                ]
                '
            ),
            (
                (select generate_next_id()), -- ID 3
                '
                {
                    "name": "Yamaha Nouvo LX",
                    "capacity": 135,
                    "cost": 8000000,
                    "cost_display": "350 USD",
                    "daily_rental_fee_inside_city": 150000,
                    "daily_rental_fee_inside_city_display": "7.5 USD",
                    "daily_rental_fee_traveling": 250000,
                    "daily_rental_fee_traveling_display": "15 USD",
                    "monthly_rental_fee": 1200000,
                    "monthly_rental_fee_display": "1 500 000 VND"
                }
                ',
                '
                [
                    {
                        "title": "Vario",
                        "source": "https://images.unsplash.com/photo-1516289637866-1e298d7c6a54?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80"
                    },
                    {
                        "title": "Yamaha Nouvo 55P1 6320, Air Blade 59C2 220.13",
                        "source": "https://images.unsplash.com/photo-1504359738601-66545b01e803?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80"
                    }
                ]
                '
            ),
            (
                (select generate_next_id()), -- ID 4
                '
                {
                    "name": "Honda XR 150",
                    "capacity": 150,
                    "cost": 60000000,
                    "cost_display": "2500 USD",
                    "daily_rental_fee_inside_city": 250000,
                    "daily_rental_fee_inside_city_display": "12 USD",
                    "daily_rental_fee_traveling": 500000,
                    "daily_rental_fee_traveling_display": "25 USD",
                    "monthly_rental_fee": 2500000,
                    "monthly_rental_fee_display": "250 USD"
                }
                ',
                '
                [
                    {
                        "title": "Honda XR 150",
                        "source": "https://motosaigon.vn/wp-content/uploads/2019/11/honda-xr150-2020-danh-gia-xe-motosaigon-1.jpg"
                    },
                    {
                        "title": "Honda XR 150",
                        "source": "https://www.weridevietnam.com/wp-content/uploads/2015/08/We-Ride-Vietnam-Honda-XR-150.2-1024x768.jpg"
                    }
                ]
                '
            ),
            (
                (select generate_next_id()), -- ID 5
                '
                {
                    "name": "Suzuki EN 150",
                    "capacity": 150,
                    "cost": 60000000,
                    "cost_display": "1000 USD",
                    "daily_rental_fee_inside_city": 250000,
                    "daily_rental_fee_inside_city_display": "12 USD",
                    "daily_rental_fee_traveling": 500000,
                    "daily_rental_fee_traveling_display": "25 USD",
                    "monthly_rental_fee": 2500000,
                    "monthly_rental_fee_display": "250 USD"
                }
                ',
                '
                [
                    {
                        "title": "Honda XR 150",
                        "source": "https://motosaigon.vn/wp-content/uploads/2016/05/4-80.jpg"
                    },
                    {
                        "title": "Honda XR 150",
                        "source": "https://www.weridevietnam.com/wp-content/uploads/2015/08/We-Ride-Vietnam-Honda-XR-150.2-1024x768.jpg"
                    }
                ]
                '
            );
        set @index = @index + 1;
    end while;
end//

delimiter ;

call seed_bike_model();
