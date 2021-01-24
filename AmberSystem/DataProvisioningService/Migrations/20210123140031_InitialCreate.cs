using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace DataProvisioningService.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Base",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Visibility = table.Column<int>(type: "INTEGER", nullable: false, defaultValue: 1),
                    DateCreated = table.Column<DateTime>(type: "TEXT", nullable: false, defaultValue: new DateTime(2021, 1, 23, 21, 0, 31, 579, DateTimeKind.Local).AddTicks(759)),
                    CreatorId = table.Column<int>(type: "INTEGER", nullable: false, defaultValue: 0),
                    DateModified = table.Column<DateTime>(type: "TEXT", nullable: false, defaultValue: new DateTime(2021, 1, 23, 21, 0, 31, 582, DateTimeKind.Local).AddTicks(7247)),
                    ModifierId = table.Column<int>(type: "INTEGER", nullable: false, defaultValue: 0),
                    Discriminator = table.Column<string>(type: "TEXT", nullable: false),
                    ModuleName = table.Column<string>(type: "TEXT", nullable: true),
                    Text = table.Column<string>(type: "TEXT", nullable: true),
                    Language = table.Column<string>(type: "TEXT", nullable: true, defaultValue: "vi"),
                    StaticValue_ModuleName = table.Column<string>(type: "TEXT", nullable: true),
                    Key = table.Column<string>(type: "TEXT", nullable: true),
                    Content = table.Column<string>(type: "TEXT", nullable: true),
                    Source = table.Column<string>(type: "TEXT", nullable: true),
                    Reference = table.Column<string>(type: "TEXT", nullable: true),
                    Placeholder = table.Column<string>(type: "TEXT", nullable: true),
                    IconName = table.Column<string>(type: "TEXT", nullable: true),
                    Default = table.Column<string>(type: "TEXT", nullable: true),
                    StaticValue_Language = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Base", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "Base",
                columns: new[] { "Id", "Content", "Default", "Discriminator", "IconName", "Key", "StaticValue_Language", "StaticValue_ModuleName", "Placeholder", "Reference", "Source" },
                values: new object[] { 1, "Home", null, "StaticValue", null, "home", "en", "end_user_view.header.buttons", null, "~/Home", null });

            migrationBuilder.InsertData(
                table: "Base",
                columns: new[] { "Id", "Content", "Default", "Discriminator", "IconName", "Key", "StaticValue_Language", "StaticValue_ModuleName", "Placeholder", "Reference", "Source" },
                values: new object[] { 2, "About Us", null, "StaticValue", null, "about_us", "en", "end_user_view.header.buttons", null, "~/AboutUs", null });

            migrationBuilder.InsertData(
                table: "Base",
                columns: new[] { "Id", "Content", "Default", "Discriminator", "IconName", "Key", "StaticValue_Language", "StaticValue_ModuleName", "Placeholder", "Reference", "Source" },
                values: new object[] { 3, "For Sale", null, "StaticValue", null, "for_sale", "en", "end_user_view.header.buttons", null, "~/ForSale", null });

            migrationBuilder.InsertData(
                table: "Base",
                columns: new[] { "Id", "Content", "Default", "Discriminator", "IconName", "Key", "StaticValue_Language", "StaticValue_ModuleName", "Placeholder", "Reference", "Source" },
                values: new object[] { 4, "For Rent", null, "StaticValue", null, "for_rent", "en", "end_user_view.header.buttons", null, "~/ForRent", null });

            migrationBuilder.InsertData(
                table: "Base",
                columns: new[] { "Id", "Content", "Default", "Discriminator", "IconName", "Key", "StaticValue_Language", "StaticValue_ModuleName", "Placeholder", "Reference", "Source" },
                values: new object[] { 5, "Services", null, "StaticValue", null, "services", "en", "end_user_view.header.buttons", null, "~/Services", null });

            migrationBuilder.InsertData(
                table: "Base",
                columns: new[] { "Id", "Content", "Default", "Discriminator", "IconName", "Key", "StaticValue_Language", "StaticValue_ModuleName", "Placeholder", "Reference", "Source" },
                values: new object[] { 6, "Trang Chủ", null, "StaticValue", null, "home", "vi", "end_user_view.header.buttons", null, "~/Home", null });

            migrationBuilder.InsertData(
                table: "Base",
                columns: new[] { "Id", "Content", "Default", "Discriminator", "IconName", "Key", "StaticValue_Language", "StaticValue_ModuleName", "Placeholder", "Reference", "Source" },
                values: new object[] { 7, "Thông Tin", null, "StaticValue", null, "about_us", "vi", "end_user_view.header.buttons", null, "~/AboutUs", null });

            migrationBuilder.InsertData(
                table: "Base",
                columns: new[] { "Id", "Content", "Default", "Discriminator", "IconName", "Key", "StaticValue_Language", "StaticValue_ModuleName", "Placeholder", "Reference", "Source" },
                values: new object[] { 8, "Đang Bán", null, "StaticValue", null, "for_sale", "vi", "end_user_view.header.buttons", null, "~/ForSale", null });

            migrationBuilder.InsertData(
                table: "Base",
                columns: new[] { "Id", "Content", "Default", "Discriminator", "IconName", "Key", "StaticValue_Language", "StaticValue_ModuleName", "Placeholder", "Reference", "Source" },
                values: new object[] { 9, "Cho Thuê", null, "StaticValue", null, "for_rent", "vi", "end_user_view.header.buttons", null, "~/ForRent", null });

            migrationBuilder.InsertData(
                table: "Base",
                columns: new[] { "Id", "Content", "Default", "Discriminator", "IconName", "Key", "StaticValue_Language", "StaticValue_ModuleName", "Placeholder", "Reference", "Source" },
                values: new object[] { 10, "Dịch Vụ", null, "StaticValue", null, "services", "vi", "end_user_view.header.buttons", null, "~/Services", null });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Base");
        }
    }
}
