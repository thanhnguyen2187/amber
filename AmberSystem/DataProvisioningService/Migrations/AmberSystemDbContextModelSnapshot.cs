﻿// <auto-generated />
using System;
using DataProvisioningService;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace DataProvisioningService.Migrations
{
    [DbContext(typeof(AmberSystemDbContext))]
    partial class AmberSystemDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "5.0.2");

            modelBuilder.Entity("DataProvisioningService.Models.MediaFile", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("AlternateText")
                        .HasColumnType("TEXT");

                    b.Property<bool>("Autoplay")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER")
                        .HasDefaultValue(false);

                    b.Property<string>("Base64Value")
                        .HasColumnType("TEXT");

                    b.Property<int>("CreatorId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER")
                        .HasDefaultValue(0);

                    b.Property<DateTime>("DateCreated")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT")
                        .HasDefaultValueSql("current_timestamp");

                    b.Property<DateTime>("DateModified")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT")
                        .HasDefaultValueSql("current_timestamp");

                    b.Property<string>("Description")
                        .HasColumnType("TEXT");

                    b.Property<string>("Exif")
                        .HasColumnType("TEXT");

                    b.Property<int>("Height")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER")
                        .HasDefaultValue(0);

                    b.Property<string>("MIMEType")
                        .HasColumnType("TEXT");

                    b.Property<int>("ModifierId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER")
                        .HasDefaultValue(0);

                    b.Property<string>("Reference")
                        .HasColumnType("TEXT");

                    b.Property<string>("SourceURL")
                        .HasColumnType("TEXT");

                    b.Property<string>("Title")
                        .HasColumnType("TEXT");

                    b.Property<int>("TypeId")
                        .HasColumnType("INTEGER");

                    b.Property<int>("Visibility")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER")
                        .HasDefaultValue(1);

                    b.Property<int>("Width")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER")
                        .HasDefaultValue(0);

                    b.HasKey("Id");

                    b.ToTable("MediaFiles");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            AlternateText = "Chubby tiger",
                            Autoplay = false,
                            CreatorId = 0,
                            DateCreated = new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            DateModified = new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Description = "Chubby tiger",
                            Height = 0,
                            ModifierId = 0,
                            Reference = "google.com",
                            SourceURL = "https://www.telegraph.co.uk/content/dam/news/2017/02/08/tiger_trans_NvBQzQNjv4BqqVzuuqpFlyLIwiB6NTmJwfSVWeZ_vEN7c6bHu2jJnT8.png?imwidth=450",
                            Title = "Chubby tiger",
                            TypeId = 1,
                            Visibility = 0,
                            Width = 0
                        },
                        new
                        {
                            Id = 2,
                            AlternateText = "Chubby tiger 2",
                            Autoplay = false,
                            CreatorId = 0,
                            DateCreated = new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            DateModified = new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Description = "Chubby tiger 2",
                            Height = 0,
                            ModifierId = 0,
                            Reference = "",
                            SourceURL = "https://external-preview.redd.it/EJecWQC3S5HihqsTiAe0fy320SIfO-ZgeThQvaU5Fs8.jpg?width=640&crop=smart&auto=webp&s=e931cfa9e8b571e5cd0191c7dfed265989ab839d",
                            Title = "Chubby tiger 2",
                            TypeId = 1,
                            Visibility = 0,
                            Width = 0
                        },
                        new
                        {
                            Id = 3,
                            AlternateText = "Chubby tiger 3",
                            Autoplay = false,
                            CreatorId = 0,
                            DateCreated = new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            DateModified = new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Description = "Chubby tiger 3",
                            Height = 0,
                            ModifierId = 0,
                            Reference = "",
                            SourceURL = "https://64.media.tumblr.com/20adf2ba2bb31f2b005281dedcfcfe41/tumblr_p3b4iq3sDN1qh8t5wo2_1280.jpg",
                            Title = "Chubby tiger 3",
                            TypeId = 1,
                            Visibility = 0,
                            Width = 0
                        },
                        new
                        {
                            Id = 4,
                            AlternateText = "Motorcycle",
                            Autoplay = false,
                            CreatorId = 0,
                            DateCreated = new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            DateModified = new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Description = "Motorcycle",
                            Height = 0,
                            ModifierId = 0,
                            Reference = "",
                            SourceURL = "https://thumbor.forbes.com/thumbor/trim/0x360:4501x2892/fit-in/711x399/smart/https://specials-images.forbesimg.com/imageserve/5c0a960ca7ea43705919981f/0x0.jpg",
                            Title = "Motorcycle",
                            TypeId = 1,
                            Visibility = 0,
                            Width = 0
                        },
                        new
                        {
                            Id = 5,
                            AlternateText = "Wheelie",
                            Autoplay = false,
                            CreatorId = 0,
                            DateCreated = new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            DateModified = new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Description = "Wheelie",
                            Height = 0,
                            ModifierId = 0,
                            Reference = "",
                            SourceURL = "https://ridermagazine.com/wp-content/uploads/2019/08/2020-Aprilia-RS-660-3qtr.jpg",
                            Title = "Wheelie",
                            TypeId = 1,
                            Visibility = 0,
                            Width = 0
                        });
                });

            modelBuilder.Entity("DataProvisioningService.Models.StaticValue", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<int>("CreatorId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER")
                        .HasDefaultValue(0);

                    b.Property<DateTime>("DateCreated")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT")
                        .HasDefaultValueSql("current_timestamp");

                    b.Property<DateTime>("DateModified")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT")
                        .HasDefaultValueSql("current_timestamp");

                    b.Property<string>("Default")
                        .HasColumnType("TEXT");

                    b.Property<string>("IconName")
                        .HasColumnType("TEXT");

                    b.Property<int>("Index")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Key")
                        .HasColumnType("TEXT");

                    b.Property<string>("Language")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT")
                        .HasDefaultValue("en");

                    b.Property<int>("ModifierId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER")
                        .HasDefaultValue(0);

                    b.Property<string>("ModuleName")
                        .HasColumnType("TEXT");

                    b.Property<string>("Placeholder")
                        .HasColumnType("TEXT");

                    b.Property<string>("Reference")
                        .HasColumnType("TEXT");

                    b.Property<string>("Source")
                        .HasColumnType("TEXT");

                    b.Property<string>("Text")
                        .HasColumnType("TEXT");

                    b.Property<int>("Visibility")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER")
                        .HasDefaultValue(1);

                    b.HasKey("Id");

                    b.ToTable("StaticValues");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            CreatorId = 0,
                            DateCreated = new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            DateModified = new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Index = 0,
                            Key = "home",
                            Language = "en",
                            ModifierId = 0,
                            ModuleName = "end_user_view.header.buttons",
                            Reference = "Home",
                            Text = "Home",
                            Visibility = 0
                        },
                        new
                        {
                            Id = 2,
                            CreatorId = 0,
                            DateCreated = new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            DateModified = new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Index = 0,
                            Key = "about_us",
                            Language = "en",
                            ModifierId = 0,
                            ModuleName = "end_user_view.header.buttons",
                            Reference = "AboutUs",
                            Text = "About Us",
                            Visibility = 0
                        },
                        new
                        {
                            Id = 3,
                            CreatorId = 0,
                            DateCreated = new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            DateModified = new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Index = 0,
                            Key = "for_sale",
                            Language = "en",
                            ModifierId = 0,
                            ModuleName = "end_user_view.header.buttons",
                            Reference = "ForSale",
                            Text = "For Sale",
                            Visibility = 0
                        },
                        new
                        {
                            Id = 4,
                            CreatorId = 0,
                            DateCreated = new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            DateModified = new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Index = 0,
                            Key = "for_rent",
                            Language = "en",
                            ModifierId = 0,
                            ModuleName = "end_user_view.header.buttons",
                            Reference = "ForRent",
                            Text = "For Rent",
                            Visibility = 0
                        },
                        new
                        {
                            Id = 5,
                            CreatorId = 0,
                            DateCreated = new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            DateModified = new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Index = 0,
                            Key = "services",
                            Language = "en",
                            ModifierId = 0,
                            ModuleName = "end_user_view.header.buttons",
                            Reference = "Services",
                            Text = "Services",
                            Visibility = 0
                        },
                        new
                        {
                            Id = 6,
                            CreatorId = 0,
                            DateCreated = new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            DateModified = new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Index = 0,
                            Key = "articles",
                            Language = "en",
                            ModifierId = 0,
                            ModuleName = "end_user_view.header.buttons",
                            Reference = "Articles",
                            Text = "Articles",
                            Visibility = 0
                        },
                        new
                        {
                            Id = 7,
                            CreatorId = 0,
                            DateCreated = new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            DateModified = new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Index = 0,
                            Key = "home",
                            Language = "vi",
                            ModifierId = 0,
                            ModuleName = "end_user_view.header.buttons",
                            Reference = "Home",
                            Text = "Trang Chủ",
                            Visibility = 0
                        },
                        new
                        {
                            Id = 8,
                            CreatorId = 0,
                            DateCreated = new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            DateModified = new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Index = 0,
                            Key = "about_us",
                            Language = "vi",
                            ModifierId = 0,
                            ModuleName = "end_user_view.header.buttons",
                            Reference = "AboutUs",
                            Text = "Thông Tin",
                            Visibility = 0
                        },
                        new
                        {
                            Id = 9,
                            CreatorId = 0,
                            DateCreated = new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            DateModified = new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Index = 0,
                            Key = "for_sale",
                            Language = "vi",
                            ModifierId = 0,
                            ModuleName = "end_user_view.header.buttons",
                            Reference = "ForSale",
                            Text = "Đang Bán",
                            Visibility = 0
                        },
                        new
                        {
                            Id = 10,
                            CreatorId = 0,
                            DateCreated = new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            DateModified = new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Index = 0,
                            Key = "for_rent",
                            Language = "vi",
                            ModifierId = 0,
                            ModuleName = "end_user_view.header.buttons",
                            Reference = "ForRent",
                            Text = "Cho Thuê",
                            Visibility = 0
                        },
                        new
                        {
                            Id = 11,
                            CreatorId = 0,
                            DateCreated = new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            DateModified = new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Index = 0,
                            Key = "services",
                            Language = "vi",
                            ModifierId = 0,
                            ModuleName = "end_user_view.header.buttons",
                            Reference = "Services",
                            Text = "Dịch Vụ",
                            Visibility = 0
                        },
                        new
                        {
                            Id = 12,
                            CreatorId = 0,
                            DateCreated = new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            DateModified = new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Index = 0,
                            Key = "articles",
                            Language = "vi",
                            ModifierId = 0,
                            ModuleName = "end_user_view.header.buttons",
                            Reference = "Articles",
                            Text = "Các Bài Đăng",
                            Visibility = 0
                        },
                        new
                        {
                            Id = 13,
                            CreatorId = 0,
                            DateCreated = new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            DateModified = new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Index = 0,
                            Key = "about_us",
                            Language = "en",
                            ModifierId = 0,
                            ModuleName = "end_user_view.body",
                            Text = " Duis sollicitudin tellus eu viverra malesuada. Nunc semper mi quis magna ultrices, in mollis nunc ornare. Cras sollicitudin tempus eleifend. Sed mollis purus id dapibus molestie. Etiam finibus tempor ligula a scelerisque. Sed efficitur vestibulum diam quis suscipit. Donec tincidunt purus volutpat nunc placerat, ut dictum nibh aliquam.\n\nNullam vel facilisis lacus, ut ultrices justo. Cras viverra dignissim dapibus. Etiam condimentum ullamcorper ornare. Donec condimentum diam sollicitudin lobortis tempus. Sed orci enim, pretium eget sollicitudin et, maximus eu neque. Aenean ut ante finibus, dignissim nisi pulvinar, varius odio. Nam porttitor neque at elit ullamcorper rutrum.\n\nNunc mi lectus, volutpat sit amet nisl in, viverra egestas ex. Maecenas eu pulvinar neque, ac eleifend velit. Quisque ut leo sed magna tincidunt mattis. Maecenas sollicitudin efficitur ante ac eleifend. Cras in lorem sit amet mauris bibendum finibus. Vestibulum quis urna vitae ligula facilisis convallis. Nullam sollicitudin porttitor velit, ut tincidunt justo sagittis ac. In eu elit nunc. Suspendisse luctus turpis vitae nisl aliquam iaculis. Aliquam erat volutpat. Praesent lobortis ligula feugiat dignissim pretium. Suspendisse ornare egestas cursus. Vivamus purus ante, hendrerit ac finibus id, congue nec eros.\n\nFusce condimentum enim sit amet commodo blandit. Nam purus lacus, dictum non quam ac, posuere auctor velit. Quisque sed ornare massa. Sed vehicula auctor odio a dictum. Cras vel urna nunc. Sed ac congue leo. Quisque eu leo nec nisi commodo elementum. Aenean consectetur libero sed dui tincidunt, in cursus urna pharetra. Cras sodales felis et erat varius posuere. Maecenas pellentesque dolor eros, ac suscipit tortor ultrices quis. Vivamus egestas, nulla aliquam pharetra commodo, leo ante lobortis nibh, et imperdiet nunc lectus a elit. Integer imperdiet purus velit, vel porttitor purus imperdiet quis. In nulla risus, rhoncus ut tortor sit amet, tincidunt congue turpis. Mauris id nisl gravida, congue nibh vel, pharetra sapien.\n\nGenerated 5 paragraphs, 397 words, 2728 bytes of Lorem Ipsum",
                            Visibility = 0
                        },
                        new
                        {
                            Id = 14,
                            CreatorId = 0,
                            DateCreated = new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            DateModified = new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Index = 1,
                            Key = "1",
                            Language = "en",
                            ModifierId = 0,
                            ModuleName = "end_user_view.body.home.carousel.images",
                            Visibility = 0
                        },
                        new
                        {
                            Id = 15,
                            CreatorId = 0,
                            DateCreated = new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            DateModified = new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Index = 2,
                            Key = "2",
                            Language = "en",
                            ModifierId = 0,
                            ModuleName = "end_user_view.body.home.carousel.images",
                            Visibility = 0
                        },
                        new
                        {
                            Id = 16,
                            CreatorId = 0,
                            DateCreated = new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            DateModified = new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Index = 3,
                            Key = "3",
                            Language = "en",
                            ModifierId = 0,
                            ModuleName = "end_user_view.body.home.carousel.images",
                            Visibility = 0
                        });
                });
#pragma warning restore 612, 618
        }
    }
}
