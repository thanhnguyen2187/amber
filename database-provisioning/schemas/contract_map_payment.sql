create table contract_map_payment (
    id integer not null auto_increment primary key,
    visibility tinyint default 1,
    date_created timestamp(6) not null default current_timestamp,
    date_modified timestamp(6) not null default current_timestamp on update current_timestamp,

    contract_id int,
    amount decimal(9,2),
    note varchar(200) character set utf8
);
