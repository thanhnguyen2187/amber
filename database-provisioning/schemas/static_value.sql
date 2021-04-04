create table static_value (
    id integer not null auto_increment primary key,
    date_created timestamp(6) not null default current_timestamp,
    date_modified timestamp(6) not null default current_timestamp on update current_timestamp,

    module_name varchar(32),
    `key` varchar(32),
    data json
);
