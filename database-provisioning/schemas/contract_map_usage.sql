create table contract_map_usage (
    id integer not null auto_increment primary key,
    visibility tinyint default 1,
    date_created timestamp(6) not null default current_timestamp,
    date_modified timestamp(6) not null default current_timestamp on update current_timestamp,

    contract_id int,
    type tinyint default 0,
    -- 0:  dailyInsideCity
    -- 1:  dailyTraveling
    -- 2:  monthly
    -- 10: forSale

    model_id int,
    model_data json,
    /* model_name varchar(50) character set utf8, */
    amount tinyint,
    number_plates json default '[]',

    /* hour_count smallint, */
    day_count smallint,
    month_count decimal(9, 2),

    price decimal(9, 2),
    date_start date,
    date_end date,
    total decimal(9, 2),

    change_id tinyint default 0

    /* current_odometers text, */
    /* odometer_changes */ 
);
