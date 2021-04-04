set @id = 0;

delete from staff;
insert into staff
    (id, full_name, date_of_birth, username, password, role_id)
values
    ((select generate_next_id()), 'Administrator', '2000-01-01', 'admin', 'admin', 0),
    ((select generate_next_id()), 'Staff', '2000-01-01', 'staff', 'staff', 1);
