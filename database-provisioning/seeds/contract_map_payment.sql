set @id = 0;

delete from contract_map_payment;
insert into contract_map_payment
    (id, ...)
values
    ((select generate_next_id()), ...),
    ((select generate_next_id()), ...),
    ((select generate_next_id()), ...);
