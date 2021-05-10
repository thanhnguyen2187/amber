set @id = 0;

delete from contract_map_log;
insert into contract_map_log
    (id, ...)
values
    ((select generate_next_id()), ...),
    ((select generate_next_id()), ...),
    ((select generate_next_id()), ...);
