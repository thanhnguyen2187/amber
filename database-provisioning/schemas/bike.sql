create table bike (
    id integer not null auto_increment primary key,
    visibility tinyint default 1,
    date_created timestamp(6) not null default current_timestamp,
    date_modified timestamp(6) not null default current_timestamp on update current_timestamp,

    model_id int,
    model_data json,
    bike_data json,
    /* rotate_image_ids json, */
    media_files json default '[]',

    current_status_id tinyint default 0,
    -- 00: blank
    -- 10: at warehouse
    -- 20: at shop
    -- 30: being rented daily inside city
    -- 31: being rented daily traveling
    -- 32: being rented monthly
    current_status_logs json
);
