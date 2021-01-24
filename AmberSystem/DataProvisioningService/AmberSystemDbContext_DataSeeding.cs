using System;
using System.Collections.Generic;
using System.Linq;
using System.Xml;
using DataProvisioningService.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.VisualBasic;

namespace DataProvisioningService
{
    public partial class AmberSystemDbContext
    {
        private IEnumerator<int> generateIdIterator()
        {
            var id = 1;
            while (true)
            {
                yield return id;
                id += 1;
            }
        }

        protected void SeedStaticValues_EndUserViewHeaderButtons(ModelBuilder modelBuilder)
        {
            var currentIdIterator = generateIdIterator();

            StaticValue CreateEndUserHeaderButtonStaticValuesEnglish(
                string key,
                string content,
                string reference
            ) =>
                new()
                {
                    Id = currentIdIterator.MoveNext() ? currentIdIterator.Current : -1,
                    ModuleName = StaticValue.Constant.ModuleName.EndUserHeaderButtons,
                    Key = key,
                    Content = content,
                    Reference = reference,
                    Language = StaticValue.Constant.Language.English,
                };

            StaticValue CreateEndUserHeaderButtonStaticValuesVietnamese(string key, string content, string reference) =>
                new()
                {
                    Id = currentIdIterator.MoveNext() ? currentIdIterator.Current : -1,
                    ModuleName = StaticValue.Constant.ModuleName.EndUserHeaderButtons,
                    Key = key,
                    Content = content,
                    Reference = reference,
                    Language = StaticValue.Constant.Language.Vietnamese,
                };

            var endUserHeaderButtonDataEnglish = new[]
            {
                Tuple.Create(
                    StaticValue.Constant.Key.Home, // key
                    "Home", // content
                    StaticValue.Constant.Reference.Home // reference
                ),
                Tuple.Create(
                    StaticValue.Constant.Key.AboutUs, // key
                    "About Us", // content
                    StaticValue.Constant.Reference.AboutUs // reference
                ),
                Tuple.Create(
                    StaticValue.Constant.Key.ForSale, // key
                    "For Sale", // content
                    StaticValue.Constant.Reference.ForSale // reference
                ),
                Tuple.Create(
                    StaticValue.Constant.Key.ForRent, // key
                    "For Rent", // content
                    StaticValue.Constant.Reference.ForRent // reference
                ),
                Tuple.Create(
                    StaticValue.Constant.Key.Services, // key
                    "Services", // content
                    StaticValue.Constant.Reference.Services // reference
                ),
            };
            var endUserHeaderButtonDataVietnamese = new[]
            {
                Tuple.Create(
                    StaticValue.Constant.Key.Home, // key
                    "Trang Chủ", // content
                    StaticValue.Constant.Reference.Home // reference
                ),
                Tuple.Create(
                    StaticValue.Constant.Key.AboutUs, // key
                    "Thông Tin", // content
                    StaticValue.Constant.Reference.AboutUs // reference
                ),
                Tuple.Create(
                    StaticValue.Constant.Key.ForSale, // key
                    "Đang Bán", // content
                    StaticValue.Constant.Reference.ForSale // reference
                ),
                Tuple.Create(
                    StaticValue.Constant.Key.ForRent, // key
                    "Cho Thuê", // content
                    StaticValue.Constant.Reference.ForRent // reference
                ),
                Tuple.Create(
                    StaticValue.Constant.Key.Services, // key
                    "Dịch Vụ", // content
                    StaticValue.Constant.Reference.Services // reference
                ),
            };

            var endUserHeaderButtonStaticValuesEnglish =
                endUserHeaderButtonDataEnglish.Select(
                    tuple =>
                        CreateEndUserHeaderButtonStaticValuesEnglish(
                            key: tuple.Item1,
                            content: tuple.Item2,
                            reference: tuple.Item3
                        )
                );
            var endUserHeaderButtonStaticValuesVietnamese =
                endUserHeaderButtonDataVietnamese.Select(
                    tuple =>
                        CreateEndUserHeaderButtonStaticValuesVietnamese(
                            key: tuple.Item1,
                            content: tuple.Item2,
                            reference: tuple.Item3
                        )
                );

            modelBuilder
                .Entity<StaticValue>()
                .HasData(
                    new List<StaticValue>()
                        .Concat(endUserHeaderButtonStaticValuesEnglish)
                        .Concat(endUserHeaderButtonStaticValuesVietnamese)
                        .ToList()
                );
        }
        
        protected void SeedData(ModelBuilder modelBuilder)
        {
            SeedStaticValues_EndUserViewHeaderButtons(modelBuilder: modelBuilder);
        }
    }
}