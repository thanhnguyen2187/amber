using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace DataProvisioningService.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "MediaFiles",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Visibility = table.Column<int>(type: "INTEGER", nullable: false, defaultValue: 1),
                    DateCreated = table.Column<DateTime>(type: "TEXT", nullable: false, defaultValueSql: "current_timestamp"),
                    CreatorId = table.Column<int>(type: "INTEGER", nullable: false, defaultValue: 0),
                    DateModified = table.Column<DateTime>(type: "TEXT", nullable: false, defaultValueSql: "current_timestamp"),
                    ModifierId = table.Column<int>(type: "INTEGER", nullable: false, defaultValue: 0),
                    TypeId = table.Column<int>(type: "INTEGER", nullable: false),
                    SourceURL = table.Column<string>(type: "TEXT", nullable: true),
                    MIMEType = table.Column<string>(type: "TEXT", nullable: true),
                    Exif = table.Column<string>(type: "TEXT", nullable: true),
                    Base64Value = table.Column<string>(type: "TEXT", nullable: true),
                    Title = table.Column<string>(type: "TEXT", nullable: true),
                    Description = table.Column<string>(type: "TEXT", nullable: true),
                    AlternateText = table.Column<string>(type: "TEXT", nullable: true),
                    Reference = table.Column<string>(type: "TEXT", nullable: true),
                    Width = table.Column<int>(type: "INTEGER", nullable: false, defaultValue: 0),
                    Height = table.Column<int>(type: "INTEGER", nullable: false, defaultValue: 0),
                    Autoplay = table.Column<bool>(type: "INTEGER", nullable: false, defaultValue: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MediaFiles", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "StaticValues",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Visibility = table.Column<int>(type: "INTEGER", nullable: false, defaultValue: 1),
                    DateCreated = table.Column<DateTime>(type: "TEXT", nullable: false, defaultValueSql: "current_timestamp"),
                    CreatorId = table.Column<int>(type: "INTEGER", nullable: false, defaultValue: 0),
                    DateModified = table.Column<DateTime>(type: "TEXT", nullable: false, defaultValueSql: "current_timestamp"),
                    ModifierId = table.Column<int>(type: "INTEGER", nullable: false, defaultValue: 0),
                    ModuleName = table.Column<string>(type: "TEXT", nullable: true),
                    Key = table.Column<string>(type: "TEXT", nullable: true),
                    Index = table.Column<int>(type: "INTEGER", nullable: false),
                    Text = table.Column<string>(type: "TEXT", nullable: true),
                    Source = table.Column<string>(type: "TEXT", nullable: true),
                    Reference = table.Column<string>(type: "TEXT", nullable: true),
                    Placeholder = table.Column<string>(type: "TEXT", nullable: true),
                    IconName = table.Column<string>(type: "TEXT", nullable: true),
                    Default = table.Column<string>(type: "TEXT", nullable: true),
                    Language = table.Column<string>(type: "TEXT", nullable: true, defaultValue: "en")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_StaticValues", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "MediaFiles",
                columns: new[] { "Id", "AlternateText", "Base64Value", "Description", "Exif", "MIMEType", "Reference", "SourceURL", "Title", "TypeId" },
                values: new object[] { 1, "Chubby tiger", null, "Chubby tiger", null, null, "google.com", "https://www.telegraph.co.uk/content/dam/news/2017/02/08/tiger_trans_NvBQzQNjv4BqqVzuuqpFlyLIwiB6NTmJwfSVWeZ_vEN7c6bHu2jJnT8.png?imwidth=450", "Chubby tiger", 1 });

            migrationBuilder.InsertData(
                table: "MediaFiles",
                columns: new[] { "Id", "AlternateText", "Base64Value", "Description", "Exif", "MIMEType", "Reference", "SourceURL", "Title", "TypeId" },
                values: new object[] { 2, "Chubby tiger 2", null, "Chubby tiger 2", null, null, "", "https://external-preview.redd.it/EJecWQC3S5HihqsTiAe0fy320SIfO-ZgeThQvaU5Fs8.jpg?width=640&crop=smart&auto=webp&s=e931cfa9e8b571e5cd0191c7dfed265989ab839d", "Chubby tiger 2", 1 });

            migrationBuilder.InsertData(
                table: "MediaFiles",
                columns: new[] { "Id", "AlternateText", "Base64Value", "Description", "Exif", "MIMEType", "Reference", "SourceURL", "Title", "TypeId" },
                values: new object[] { 3, "Chubby tiger 3", null, "Chubby tiger 3", null, null, "", "https://64.media.tumblr.com/20adf2ba2bb31f2b005281dedcfcfe41/tumblr_p3b4iq3sDN1qh8t5wo2_1280.jpg", "Chubby tiger 3", 1 });

            migrationBuilder.InsertData(
                table: "MediaFiles",
                columns: new[] { "Id", "AlternateText", "Base64Value", "Description", "Exif", "MIMEType", "Reference", "SourceURL", "Title", "TypeId" },
                values: new object[] { 4, "Motorcycle", null, "Motorcycle", null, null, "", "https://thumbor.forbes.com/thumbor/trim/0x360:4501x2892/fit-in/711x399/smart/https://specials-images.forbesimg.com/imageserve/5c0a960ca7ea43705919981f/0x0.jpg", "Motorcycle", 1 });

            migrationBuilder.InsertData(
                table: "MediaFiles",
                columns: new[] { "Id", "AlternateText", "Base64Value", "Description", "Exif", "MIMEType", "Reference", "SourceURL", "Title", "TypeId" },
                values: new object[] { 5, "Wheelie", null, "Wheelie", null, null, "", "https://ridermagazine.com/wp-content/uploads/2019/08/2020-Aprilia-RS-660-3qtr.jpg", "Wheelie", 1 });

            migrationBuilder.InsertData(
                table: "StaticValues",
                columns: new[] { "Id", "Default", "IconName", "Index", "Key", "Language", "ModuleName", "Placeholder", "Reference", "Source", "Text" },
                values: new object[] { 14, null, null, 1, "1", "en", "end_user_view.body.home.carousel.images", null, null, null, null });

            migrationBuilder.InsertData(
                table: "StaticValues",
                columns: new[] { "Id", "Default", "IconName", "Index", "Key", "Language", "ModuleName", "Placeholder", "Reference", "Source", "Text" },
                values: new object[] { 13, null, null, 0, "about_us", "en", "end_user_view.body", null, null, null, " Duis sollicitudin tellus eu viverra malesuada. Nunc semper mi quis magna ultrices, in mollis nunc ornare. Cras sollicitudin tempus eleifend. Sed mollis purus id dapibus molestie. Etiam finibus tempor ligula a scelerisque. Sed efficitur vestibulum diam quis suscipit. Donec tincidunt purus volutpat nunc placerat, ut dictum nibh aliquam.\n\nNullam vel facilisis lacus, ut ultrices justo. Cras viverra dignissim dapibus. Etiam condimentum ullamcorper ornare. Donec condimentum diam sollicitudin lobortis tempus. Sed orci enim, pretium eget sollicitudin et, maximus eu neque. Aenean ut ante finibus, dignissim nisi pulvinar, varius odio. Nam porttitor neque at elit ullamcorper rutrum.\n\nNunc mi lectus, volutpat sit amet nisl in, viverra egestas ex. Maecenas eu pulvinar neque, ac eleifend velit. Quisque ut leo sed magna tincidunt mattis. Maecenas sollicitudin efficitur ante ac eleifend. Cras in lorem sit amet mauris bibendum finibus. Vestibulum quis urna vitae ligula facilisis convallis. Nullam sollicitudin porttitor velit, ut tincidunt justo sagittis ac. In eu elit nunc. Suspendisse luctus turpis vitae nisl aliquam iaculis. Aliquam erat volutpat. Praesent lobortis ligula feugiat dignissim pretium. Suspendisse ornare egestas cursus. Vivamus purus ante, hendrerit ac finibus id, congue nec eros.\n\nFusce condimentum enim sit amet commodo blandit. Nam purus lacus, dictum non quam ac, posuere auctor velit. Quisque sed ornare massa. Sed vehicula auctor odio a dictum. Cras vel urna nunc. Sed ac congue leo. Quisque eu leo nec nisi commodo elementum. Aenean consectetur libero sed dui tincidunt, in cursus urna pharetra. Cras sodales felis et erat varius posuere. Maecenas pellentesque dolor eros, ac suscipit tortor ultrices quis. Vivamus egestas, nulla aliquam pharetra commodo, leo ante lobortis nibh, et imperdiet nunc lectus a elit. Integer imperdiet purus velit, vel porttitor purus imperdiet quis. In nulla risus, rhoncus ut tortor sit amet, tincidunt congue turpis. Mauris id nisl gravida, congue nibh vel, pharetra sapien.\n\nGenerated 5 paragraphs, 397 words, 2728 bytes of Lorem Ipsum" });

            migrationBuilder.InsertData(
                table: "StaticValues",
                columns: new[] { "Id", "Default", "IconName", "Index", "Key", "Language", "ModuleName", "Placeholder", "Reference", "Source", "Text" },
                values: new object[] { 12, null, null, 0, "articles", "vi", "end_user_view.header.buttons", null, "Articles", null, "Các Bài Đăng" });

            migrationBuilder.InsertData(
                table: "StaticValues",
                columns: new[] { "Id", "Default", "IconName", "Index", "Key", "Language", "ModuleName", "Placeholder", "Reference", "Source", "Text" },
                values: new object[] { 11, null, null, 0, "services", "vi", "end_user_view.header.buttons", null, "Services", null, "Dịch Vụ" });

            migrationBuilder.InsertData(
                table: "StaticValues",
                columns: new[] { "Id", "Default", "IconName", "Index", "Key", "Language", "ModuleName", "Placeholder", "Reference", "Source", "Text" },
                values: new object[] { 10, null, null, 0, "for_rent", "vi", "end_user_view.header.buttons", null, "ForRent", null, "Cho Thuê" });

            migrationBuilder.InsertData(
                table: "StaticValues",
                columns: new[] { "Id", "Default", "IconName", "Index", "Key", "Language", "ModuleName", "Placeholder", "Reference", "Source", "Text" },
                values: new object[] { 9, null, null, 0, "for_sale", "vi", "end_user_view.header.buttons", null, "ForSale", null, "Đang Bán" });

            migrationBuilder.InsertData(
                table: "StaticValues",
                columns: new[] { "Id", "Default", "IconName", "Index", "Key", "Language", "ModuleName", "Placeholder", "Reference", "Source", "Text" },
                values: new object[] { 8, null, null, 0, "about_us", "vi", "end_user_view.header.buttons", null, "AboutUs", null, "Thông Tin" });

            migrationBuilder.InsertData(
                table: "StaticValues",
                columns: new[] { "Id", "Default", "IconName", "Index", "Key", "Language", "ModuleName", "Placeholder", "Reference", "Source", "Text" },
                values: new object[] { 6, null, null, 0, "articles", "en", "end_user_view.header.buttons", null, "Articles", null, "Articles" });

            migrationBuilder.InsertData(
                table: "StaticValues",
                columns: new[] { "Id", "Default", "IconName", "Index", "Key", "Language", "ModuleName", "Placeholder", "Reference", "Source", "Text" },
                values: new object[] { 15, null, null, 2, "2", "en", "end_user_view.body.home.carousel.images", null, null, null, null });

            migrationBuilder.InsertData(
                table: "StaticValues",
                columns: new[] { "Id", "Default", "IconName", "Index", "Key", "Language", "ModuleName", "Placeholder", "Reference", "Source", "Text" },
                values: new object[] { 5, null, null, 0, "services", "en", "end_user_view.header.buttons", null, "Services", null, "Services" });

            migrationBuilder.InsertData(
                table: "StaticValues",
                columns: new[] { "Id", "Default", "IconName", "Index", "Key", "Language", "ModuleName", "Placeholder", "Reference", "Source", "Text" },
                values: new object[] { 4, null, null, 0, "for_rent", "en", "end_user_view.header.buttons", null, "ForRent", null, "For Rent" });

            migrationBuilder.InsertData(
                table: "StaticValues",
                columns: new[] { "Id", "Default", "IconName", "Index", "Key", "Language", "ModuleName", "Placeholder", "Reference", "Source", "Text" },
                values: new object[] { 3, null, null, 0, "for_sale", "en", "end_user_view.header.buttons", null, "ForSale", null, "For Sale" });

            migrationBuilder.InsertData(
                table: "StaticValues",
                columns: new[] { "Id", "Default", "IconName", "Index", "Key", "Language", "ModuleName", "Placeholder", "Reference", "Source", "Text" },
                values: new object[] { 2, null, null, 0, "about_us", "en", "end_user_view.header.buttons", null, "AboutUs", null, "About Us" });

            migrationBuilder.InsertData(
                table: "StaticValues",
                columns: new[] { "Id", "Default", "IconName", "Index", "Key", "Language", "ModuleName", "Placeholder", "Reference", "Source", "Text" },
                values: new object[] { 1, null, null, 0, "home", "en", "end_user_view.header.buttons", null, "Home", null, "Home" });

            migrationBuilder.InsertData(
                table: "StaticValues",
                columns: new[] { "Id", "Default", "IconName", "Index", "Key", "Language", "ModuleName", "Placeholder", "Reference", "Source", "Text" },
                values: new object[] { 7, null, null, 0, "home", "vi", "end_user_view.header.buttons", null, "Home", null, "Trang Chủ" });

            migrationBuilder.InsertData(
                table: "StaticValues",
                columns: new[] { "Id", "Default", "IconName", "Index", "Key", "Language", "ModuleName", "Placeholder", "Reference", "Source", "Text" },
                values: new object[] { 16, null, null, 3, "3", "en", "end_user_view.body.home.carousel.images", null, null, null, null });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "MediaFiles");

            migrationBuilder.DropTable(
                name: "StaticValues");
        }
    }
}
