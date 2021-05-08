create table contract (
    id integer not null auto_increment primary key,
    visibility tinyint default 1,
    date_created timestamp(6) not null default current_timestamp,
    date_modified timestamp(6) not null default current_timestamp on update current_timestamp,

    staff_id int default 0, -- system
    staff_name varchar(50) character set utf8,

    customer_id int default 0,
    customer_data json,
    -- customerId
    -- fullname
    -- email
    -- phoneNumber

    state tinyint default 0,
    -- -1: invalid
    --  0: created
    --  1: pending, the customer send request
    --  2: booked, the customer paid partly
    --  3: in effect, the customer paid fully
    --  4: finished, the customer returned the bikes
    --  5: overdue, the customer did not return the bikes on time
    contract_data json,
    -- deposit
    -- equipment
    -- note

    total decimal(9, 2),
    total_paid decimal(9,2) default 0
);
