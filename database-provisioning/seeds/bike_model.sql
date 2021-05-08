/* drop procedure if exists seed_bike_model; */
/* delimiter // */

/* create procedure seed_bike_model() */
/* begin */
/*     set @id = 0; */
/*     set @index = 0; */
    delete from bike_model;
    /* while @index <= 10 do */
        insert into bike_model
            (id, model_data, media_files)
        values
            (
                (select generate_next_id()), -- ID 1
                '
                {
                    "name": "Honda Win Chinese copy",
                    "capacity": 100,
                    "type": "manual",
                    "cost": 280
                }
                ',
                '
                [
                    {
                        "title": "Chinese win copy",
                        "source": "https://offroadvietnam.com/media/real-honda-win-offroad-vietnam-motorbike-adventures.jpg"
                    },
                    {
                        "title": "Chinese win copy",
                        "source": "https://offroadvietnam.com/media/chinese-copy-honda-win-not-recommended-by-offroad-vietnam-motorbike-adventures.jpg"
                    },
                    {
                        "title": "Sufat Win",
                        "source": "https://www.gt-rider.com/se-asia-motorcycling/attachments/4h6vwn-jpg.70823/"
                    }
                ]
                '
            ),
            (
                (select generate_next_id()), -- ID 2
                '
                {
                    "name": "Honda Wave",
                    "capacity": 125,
                    "type": "semi-automatic",
                    "dailyRentalFeeInsideCity": 5,
                    "dailyRentalFeeTraveling": 10,
                    "monthlyRentalFee": 45
                }
                ',
                '
                [
                    {
                        "title": "Honda Wave",
                        "source": "https://vietnamoffroad.com/images/vietnam-offroad-semi-automatic-scooter-hire-hanoi-honda-wave-s-110cc.JPG"
                    },
                    {
                        "title": "Black Honda Wave",
                        "source": "https://vietnamoffroad.com/images/vietnam-offroad-semi-automatic-scooter-hire-hanoi-honda-wave-alpha-110cc.JPG"
                    },
                    {
                        "title": "White Honda Wave",
                        "source": "https://hanoimotorbikerental.com/images/hanoi-motorbike-rental-tours-from-hanoi-semi-automatic-scooter.jpg?6bfec1&6bfec1"
                    }
                ]
                '
            ),
            (
                (select generate_next_id()), -- ID 3
                '
                {
                    "name": "Yamaha Nouvo",
                    "capacity": 110,
                    "type": "automatic",
                    "cost": 280,
                    "dailyRentalFeeInsideCity": 7.5,
                    "dailyRentalFeeTraveling": 15,
                    "monthlyRentalFee": 50
                }
                ',
                '
                [
                    {
                        "title": "Black Yamaha Nouvo",
                        "source": "https://chugiong.com/uploads/nouvo-huyen-hoa-binh-15338004047278410.jpg"
                    },
                    {
                        "title": "Black Yamaha Nouvo",
                        "source": "https://s1.storage.2banh.vn/image/2018/04/yamaha-nouvo-2-mat-2007-den-cuc-chat-xe-con-dep-bien-hn-50155-1524152646-5ad8b9465c712.jpg"
                    },
                    {
                        "title": "Red Yamaha Nouvo",
                        "source": "https://cohoi.tuoitre.vn/upload/items/170516_nouvo2_4.jpg"
                    },
                    {
                        "title": "Red Yamaha Nouvo",
                        "source": "https://chugiong.com/uploads/20170914104218_5581385_xe_nouvo_2_co_hao_xang_khong_2.jpg"
                    }
                ]
                '
            ),
            (
                (select generate_next_id()), -- ID 4
                '
                {
                    "name": "Honda XR 150",
                    "capacity": 150,
                    "type": "manual",
                    "cost": 2500,
                    "dailyRentalFeeInsideCity": 12.5,
                    "dailyRentalFeeTraveling": 25,
                    "monthlyRentalFee": 250
                }
                ',
                '
                [
                    {
                        "title": "Honda XR 150",
                        "source": "https://rentabikevn.com/wp-content/uploads/2020/07/Honda-XR-150-right-wide.jpg"
                    },
                    {
                        "title": "Honda XR 150",
                        "source": "https://www.weridevietnam.com/wp-content/uploads/2015/08/We-Ride-Vietnam-Honda-XR-150.2-1024x768.jpg"
                    }
                ]
                '
            ),
            (
                (select generate_next_id()), -- ID 5
                '
                {
                    "name": "Suzuki EN 150",
                    "capacity": 150,
                    "type": "manual",
                    "cost": 2000,
                    "dailyRentalFeeTraveling": 20,
                    "monthlyRentalFee": 200
                }
                ',
                '
                [
                    {
                        "title": "Black Suzuki EN 150",
                        "source": "https://www.motogiare.com/uploads/Suzuki/Suzuki%20EN%20150-A/pkc1357802126.jpg"
                    },
                    {
                        "title": "Blue Suzuki EN 150",
                        "source": "https://znews-photo.zadn.vn/w660/Uploaded/dqvpxpck/2019_04_30/1_EN150A_zing.jpg"
                    },
                    {
                        "title": "Black Suzuki EN 150",
                        "source": "https://motosaigon.vn/wp-content/uploads/2016/05/4-80.jpg"
                    }
                ]
                '
            ),
            (
                (select generate_next_id()), -- ID 6
                '
                {
                    "name": "Honda XR 250",
                    "capacity": 250,
                    "type": "manual",
                    "cost": 3000,
                    "dailyRentalFeeTraveling": 40
                }
                ',
                '
                [
                    {
                        "title": "White Honda XR 250",
                        "source": "https://imgwebikevn-8743.kxcdn.com/Mm1lcaLx-wPOYJCsDIdX2YESF5E=/master/series/1015_xr-250.jpg"
                    },
                    {
                        "title": "Blue Honda XR 250",
                        "source": "https://offroadvietnam.com/Images/motorbikes/xr.jpg"
                    },
                    {
                        "title": "Black Honda XR 250",
                        "source": "https://global.honda/content/dam/site/global/newsroom/cq_img/news/2003/2030418/01.jpg"
                    }
                ]
                '
            ),
            (
                (select generate_next_id()), -- ID 7
                '
                {
                    "name": "Yamaha Sirius",
                    "capacity": 115,
                    "type": "semi-automatic",
                    "cost": 1000,
                    "dailyRentalFeeInsideCity": 7,
                    "dailyRentalFeeTraveling": 14
                }
                ',
                '
                [
                    {
                        "title": "Black Yamaha Sirius",
                        "source": "https://photo-baomoi.zadn.vn/w700_r1/2020_10_20_293_36754087/c04ad4da2f99c6c79f88.jpg"
                    },
                    {
                        "title": "Black Honda XR 250",
                        "source": "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0a/e4/0e/66.jpg"
                    }
                ]
                '
            )
        ;
        /* set @index = @index + 1; */
    /* end while; */
/* end// */

/* delimiter ; */

/* call seed_bike_model(); */
