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
                    DateCreated = table.Column<DateTime>(type: "TEXT", nullable: false, defaultValue: new DateTime(2021, 1, 20, 10, 30, 18, 13, DateTimeKind.Local).AddTicks(5633)),
                    CreatorId = table.Column<int>(type: "INTEGER", nullable: false, defaultValue: 0),
                    DateModified = table.Column<DateTime>(type: "TEXT", nullable: false, defaultValue: new DateTime(2021, 1, 20, 10, 30, 18, 17, DateTimeKind.Local).AddTicks(1451)),
                    ModifierId = table.Column<int>(type: "INTEGER", nullable: false, defaultValue: 0),
                    Discriminator = table.Column<string>(type: "TEXT", nullable: false),
                    ModuleName = table.Column<string>(type: "TEXT", nullable: true),
                    Text = table.Column<string>(type: "TEXT", nullable: true),
                    Language = table.Column<string>(type: "TEXT", nullable: true, defaultValue: "vi")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Base", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "Base",
                columns: new[] { "Id", "Discriminator", "Language", "ModuleName", "Text" },
                values: new object[] { 1, "PresetValue", "en", "end_user_view.navbar_buttons.label.home", "Homepage" });

            migrationBuilder.InsertData(
                table: "Base",
                columns: new[] { "Id", "Discriminator", "Language", "ModuleName", "Text" },
                values: new object[] { 2, "PresetValue", "vi", "end_user_view.navbar_buttons.label.home", "Trang chủ" });

            migrationBuilder.InsertData(
                table: "Base",
                columns: new[] { "Id", "Discriminator", "Language", "ModuleName", "Text" },
                values: new object[] { 3, "PresetValue", "en", "end_user_view.navbar_buttons.label.about_us", "About us" });

            migrationBuilder.InsertData(
                table: "Base",
                columns: new[] { "Id", "Discriminator", "Language", "ModuleName", "Text" },
                values: new object[] { 4, "PresetValue", "vi", "end_user_view.navbar_buttons.label.about_us", "Giới thiệu" });

            migrationBuilder.InsertData(
                table: "Base",
                columns: new[] { "Id", "Discriminator", "Language", "ModuleName", "Text" },
                values: new object[] { 5, "PresetValue", "en", "end_user_view.navbar_buttons.label.for_sale", "Đang bán" });

            migrationBuilder.InsertData(
                table: "Base",
                columns: new[] { "Id", "Discriminator", "Language", "ModuleName", "Text" },
                values: new object[] { 6, "PresetValue", "vi", "end_user_view.navbar_buttons.label.for_sale", "For sale" });

            migrationBuilder.InsertData(
                table: "Base",
                columns: new[] { "Id", "Discriminator", "Language", "ModuleName", "Text" },
                values: new object[] { 7, "PresetValue", "en", "end_user_view.navbar_buttons.label.for_rent", "Cho thuê" });

            migrationBuilder.InsertData(
                table: "Base",
                columns: new[] { "Id", "Discriminator", "Language", "ModuleName", "Text" },
                values: new object[] { 8, "PresetValue", "vi", "end_user_view.navbar_buttons.label.for_rent", "For rent" });

            migrationBuilder.InsertData(
                table: "Base",
                columns: new[] { "Id", "Discriminator", "Language", "ModuleName", "Text" },
                values: new object[] { 9, "PresetValue", "en", "end_user_view.navbar_buttons.label.services", "Services" });

            migrationBuilder.InsertData(
                table: "Base",
                columns: new[] { "Id", "Discriminator", "Language", "ModuleName", "Text" },
                values: new object[] { 10, "PresetValue", "vi", "end_user_view.navbar_buttons.label.services", "Các dịch vụ" });

            migrationBuilder.InsertData(
                table: "Base",
                columns: new[] { "Id", "Discriminator", "Language", "ModuleName", "Text" },
                values: new object[] { 11, "PresetValue", "en", "end_user_view.navbar_right_button.label.contract_checking", "Check contract" });

            migrationBuilder.InsertData(
                table: "Base",
                columns: new[] { "Id", "Discriminator", "Language", "ModuleName", "Text" },
                values: new object[] { 12, "PresetValue", "vi", "end_user_view.navbar_right_button.label.contract_checking", "Kiểm tra hợp đồng" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Base");
        }
    }
}
