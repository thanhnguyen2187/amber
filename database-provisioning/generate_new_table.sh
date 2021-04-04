#!/bin/bash

TABLE_NAME=$1

cat << EOF > "./schemas/${TABLE_NAME}.sql"
create table ${TABLE_NAME} (
    id integer not null auto_increment primary key,
    date_created timestamp(6) not null default current_timestamp,
    date_modified timestamp(6) not null default current_timestamp on update current_timestamp,
);
EOF

cat << EOF > "./seeds/${TABLE_NAME}.sql"
set @id = 0;

delete from ${TABLE_NAME};
insert into ${TABLE_NAME}
    (id, ...)
values
    ((select generate_next_id()), ...),
    ((select generate_next_id()), ...),
    ((select generate_next_id()), ...);
EOF

