create table bike_tag_map (
    id integer not null auto_increment primary key,
    date_created timestamp(6) not null default current_timestamp,
    date_modified timestamp(6) not null default current_timestamp on update current_timestamp,

    bike_model_id int,
    bike_id int,
    tag_key varchar(32)
);
