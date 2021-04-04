drop function if exists generate_next_id;

delimiter //

create function generate_next_id ()
returns int(11)
begin
    set @id = @id + 1;
    return @id;
end//

delimiter ;
