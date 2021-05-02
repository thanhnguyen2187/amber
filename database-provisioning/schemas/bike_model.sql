create table bike_model (
    id integer not null auto_increment primary key,
    visibility tinyint default 1,
    date_created timestamp(6) not null default current_timestamp,
    date_modified timestamp(6) not null default current_timestamp on update current_timestamp,

    model_data json,
    /*
    {
        "brand": "...",
        "name": "...",
        "capacity": "...",
        "cost": "...",
        "daily_rental_fee_inside_city": 0, // USD
        "daily_rental_fee_inside_city_display": "0 USD",
        "daily_rental_fee_traveling": 0, // USD
        "daily_rental_fee_traveling_display": "0 USD",
        "monthly_rental_fee": 0 // USD
        "monthly_rental_fee_display": "0 VND"
    }
    */
    
    /* rotating_media_files json default '[]', */
    media_files json default '[]'
    /*
    [
        {
            "source": "...",
            "title": "",
        },
        {
            ...
        },
        ...
    ]
    */
);
