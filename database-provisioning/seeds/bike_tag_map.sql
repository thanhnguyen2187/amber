set @id = 0;

delete from bike_tag_map;
insert into bike_tag_map
    (id, bike_model_id, tag_key)
values
    -- bike_id 1: Honda Win copy 100cc
    ((select generate_next_id()), 1, 'for-sale'),
    ((select generate_next_id()), 1, 'manual'),
    ((select generate_next_id()), 1, 'honda'),
    ((select generate_next_id()), 1, 'other'),
    ((select generate_next_id()), 1, 'less-125'),
    -- bike_id 2: Detech Win 110cc
    ((select generate_next_id()), 2, 'for-rent'),
    ((select generate_next_id()), 2, 'manual'),
    ((select generate_next_id()), 2, 'for-sale'),
    ((select generate_next_id()), 2, 'other'),
    ((select generate_next_id()), 2, 'less-125'),
    -- bike_id 3: Yamaha Nouvo 115cc
    ((select generate_next_id()), 3, 'for-rent'),
    ((select generate_next_id()), 3, 'automatic'),
    ((select generate_next_id()), 3, 'for-sale'),
    ((select generate_next_id()), 3, 'yamaha'),
    ((select generate_next_id()), 3, 'less-125'),
    -- bike_id 4: Honda XR 150
    ((select generate_next_id()), 4, 'for-rent'),
    ((select generate_next_id()), 4, 'manual'),
    ((select generate_next_id()), 4, 'honda'),
    ((select generate_next_id()), 4, '125-149');
