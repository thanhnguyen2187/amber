set @id = 0;

delete from bike_tag;
insert into bike_tag
    /* (id, module_name, `key`, value) */
    (module_name, `key`, value)
values
    -- I probably only need key and value, don't I?
    /* (1,  'purpose',      'for-sale',       'For Sale'), */
    /* (2,  'purpose',      'for-rent',       'For Rent'), */
    /* (3,  'transmission', 'manual',         'Manual'), */
    /* (4,  'transmission', 'semi-automatic', 'Semi-automatic'), */
    /* (5,  'transmission', 'automatic',      'Automatic'), */
    /* (6,  'manufacturer', 'honda',          'Honda'), */
    /* (7,  'manufacturer', 'suzuki',         'Suzuki'), */
    /* (8,  'manufacturer', 'yamaha',         'Yamaha'), */
    /* (9,  'capacity',     'less-125',       'Less than 125cc'), */
    /* (10, 'capacity',     '125-249',        '125cc - 249cc'), */
    /* (11, 'capacity',     '250-more',       '250cc or more'); */
    ('purpose',      'for-sale',       'For Sale'),
    ('purpose',      'for-rent',       'For Rent'),
    ('transmission', 'manual',         'Manual'),
    ('transmission', 'semi-automatic', 'Semi-automatic'),
    ('transmission', 'automatic',      'Automatic'),
    ('manufacturer', 'honda',          'Honda'),
    ('manufacturer', 'suzuki',         'Suzuki'),
    ('manufacturer', 'yamaha',         'Yamaha'),
    ('manufacturer', 'other',          'Other'),
    ('capacity',     'less-125',       'Less than 125cc'),
    ('capacity',     '125-249',        '125cc - 249cc'),
    ('capacity',     '250-more',       '250cc or more');
