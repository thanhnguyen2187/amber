create table media_file (
    id integer not null auto_increment primary key,
    date_created timestamp(6) not null default current_timestamp,
    date_modified timestamp(6) not null default current_timestamp on update current_timestamp,

    data json
);
