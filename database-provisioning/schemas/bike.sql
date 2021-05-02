create table bike (
    id integer not null auto_increment primary key,
    visibility tinyint default 1,
    date_created timestamp(6) not null default current_timestamp,
    date_modified timestamp(6) not null default current_timestamp on update current_timestamp,

    model_id int,
    /* model_data json, */
    bike_data json,
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
        "monthly_rental_fee": 0, // USD
        "monthly_rental_fee_display": "0 USD",
    }
    */
    /* rotate_image_ids json, */
    media_files json default '[]',
    odometer_reading int default 0,
    /* odometer_reading_changes json, */
    /*
    [
        {
            ""
        }
    ]
    */

    current_status_id tinyint default 0,
    -- 00: blank
    -- 10: at warehouse
    -- 20: at shop
    -- 30: being rented daily inside city
    -- 31: being rented daily traveling
    -- 32: being rented monthly
    /* current_status_logs json */
    /*
    [
        {
            "date": ...
            "status_id": 0,
            "contract_id": 0,
            "reason": "Created"
        },
        {
            "date": ...
            "status_id": 10,
            "contract_id": 0,
            "reason": "Moved to Warehouse"
        },
    ]
    */
);
