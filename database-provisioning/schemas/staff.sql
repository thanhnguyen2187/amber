create table staff (
    id integer not null auto_increment primary key,
    date_created timestamp(6) not null default current_timestamp,
    date_modified timestamp(6) not null default current_timestamp on update current_timestamp,

    full_name varchar(50) character set utf8,
    date_of_birth date,
    username varchar(32),
    password varchar(32),
    role_id int
);
