set @id = 0;

delete from bike_tag_map;
insert into bike_tag_map
    (id, bike_model_id, tag_key)
values
    -- bike_id 1: Honda Win chinsese copy
    ((select generate_next_id()), 1, 'for-sale'),
    ((select generate_next_id()), 1, 'manual'),
    ((select generate_next_id()), 1, 'honda'),
    ((select generate_next_id()), 1, 'other'),
    ((select generate_next_id()), 1, 'less-125'),
    -- bike_id 2: Honda Wave
    ((select generate_next_id()), 2, 'for-rent'),
    ((select generate_next_id()), 2, 'semi-automatic'),
    ((select generate_next_id()), 2, 'honda'),
    ((select generate_next_id()), 2, 'less-125'),
    -- bike_id 3: Yamaha Nouvo
    ((select generate_next_id()), 3, 'for-rent'),
    ((select generate_next_id()), 3, 'for-sale'),
    ((select generate_next_id()), 3, 'automatic'),
    ((select generate_next_id()), 3, 'yamaha'),
    ((select generate_next_id()), 3, 'less-125'),
    -- bike_id 4: Honda XR 150
    ((select generate_next_id()), 4, 'for-rent'),
    ((select generate_next_id()), 4, 'for-sale'),
    ((select generate_next_id()), 4, 'manual'),
    ((select generate_next_id()), 4, 'honda'),
    ((select generate_next_id()), 4, '125-249'),
    -- bike_id 5: Suzuki EN 150
    ((select generate_next_id()), 5, 'for-rent'),
    ((select generate_next_id()), 5, 'for-sale'),
    ((select generate_next_id()), 5, 'manual'),
    ((select generate_next_id()), 5, 'suzuki'),
    ((select generate_next_id()), 5, '125-249'),
    -- bike_id 6: Honda XR 250
    ((select generate_next_id()), 6, 'for-rent'),
    ((select generate_next_id()), 6, 'for-sale'),
    ((select generate_next_id()), 6, 'manual'),
    ((select generate_next_id()), 6, 'honda'),
    ((select generate_next_id()), 6, '250-more'),
    -- bike_id 7: Yamaha Sirius
    ((select generate_next_id()), 7, 'for-rent'),
    ((select generate_next_id()), 7, 'for-sale'),
    ((select generate_next_id()), 7, 'semi-automatic'),
    ((select generate_next_id()), 7, 'yamaha'),
    ((select generate_next_id()), 7, 'less-125');
