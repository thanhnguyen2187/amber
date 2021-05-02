set @id = 0;

delete from contract;
insert into contract
    (id, customer_data, contract_data)
values
    (
        (select generate_next_id()), -- ID 1
        '
        {
            "fullName": "John Smith",
            "email": "johnsmith@abc.xyz",
            "phoneNumber": "(+01) 234 567 890"
        }
        ',
        '
        {
            "deposit": "None",
            "equipment": "None",
            "note": "Test data"
        }
        '
    ), 
    (
        (select generate_next_id()), -- ID 2
        '
        {
            "fullName": "Steven Urban",
            "email": "stevenurban@abc.xyz",
            "phoneNumber": "(+01) 234 567 890"
        }
        ',
        '
        {
            "deposit": "None",
            "equipment": "None",
            "note": "Test data 2"
        }
        '
    ), 
    (
        (select generate_next_id()), -- ID 3
        '
        {
            "fullName": "Alexander Rhorde",
            "email": "alexrh@abc.xyz",
            "phoneNumber": "(+01) 234 567 890"
        }
        ',
        '
        {
            "deposit": "None",
            "equipment": "None",
            "note": "Test data 3"
        }
        '
    )
; 
