create table contract (
    id integer not null auto_increment primary key,
    visibility tinyint default 1,
    date_created timestamp(6) not null default current_timestamp,
    date_modified timestamp(6) not null default current_timestamp on update current_timestamp,

    staff_id int default 0, -- system
    staff_name varchar(50) character set utf8,

    customer_id int default 0,
    customer_data json,
    -- customer_id
    -- fullname
    -- email
    -- phoneNumber

    state tinyint default 0,
    -- -10: invalid
    --  00: created
    --  10: pending, the customer send request
    --  20: booked, the customer paid partly
    --  30: in effect, the customer paid fully
    --  40: finished, the customer returned the bikes
    --  50: ondue, the customer did not return the bikes on time
    contract_data json
    -- deposit
    -- equipment
    -- note
);
