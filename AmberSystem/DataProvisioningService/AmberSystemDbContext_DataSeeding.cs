using System;
using System.Collections.Generic;
using System.Linq;
using System.IO;
using DataProvisioningService.Models;
using Microsoft.EntityFrameworkCore;

namespace DataProvisioningService
{
    public partial class AmberSystemDbContext
    {
        private void SeedData_Images(ModelBuilder modelBuilder)
        {
            modelBuilder
                .Entity<MediaFile>()
                .HasData(data: MediaFile.Data.ImageFiles);
        }

        private void SeedData_StaticValues_EndUserHeaderButtons(ModelBuilder modelBuilder)
        {
            var endUserHeaderButtonStaticValuesEnglish =
                StaticValue
                    .Data
                    .EndUserButtonsEnglish
                    .Select(
                        tuple =>
                            StaticValue.CreateEndUserHeaderButtonEnglish(
                                key: tuple.Key,
                                content: tuple.Content,
                                reference: tuple.Reference
                            )
                    )
            ;
            var endUserHeaderButtonStaticValuesVietnamese =
                StaticValue
                    .Data
                    .EndUserButtonsVietnamese
                    .Select(
                        tuple =>
                            StaticValue.CreateEndUserHeaderButtonVietnamese(
                                key: tuple.Key,
                                content: tuple.Content,
                                reference: tuple.Reference
                            )
                    )
            ;

            modelBuilder
                .Entity<StaticValue>()
                .HasData(
                    new List<StaticValue>()
                        .Concat(endUserHeaderButtonStaticValuesEnglish)
                        .Concat(endUserHeaderButtonStaticValuesVietnamese)
                        .ToList()
                );
        }

        private void SeedData_StaticValues_EndUserBodyAboutUs(ModelBuilder modelBuilder)
        {
            // a work around like this is needed since the text file is placed in another folder
            var rawContentFileFolderPath =
                Path.Join(
                    new[]
                    {
                        "DataProvisioningService",
                        "SeedingData",
                    }
                );
            var rawContentFileName = "AboutUsHTML.txt";
            var rawContentFilePath =
                Path.Join(
                    new[]
                    {
                        Directory
                            .GetParent(Environment.CurrentDirectory)
                            ?.FullName,
                        rawContentFileFolderPath,
                        rawContentFileName,
                    }
                );
            var rawContent = File.ReadAllText(path: rawContentFilePath);

            modelBuilder
                .Entity<StaticValue>()
                .HasData(
                    StaticValue.CreateEndUserBodyAboutUs(
                        rawContent: rawContent
                    )
                );
        }

        private void SeedData_StaticValues_EndUserBodyHomeCarouselImages(ModelBuilder modelBuilder)
        {
            var indexIterator = IBase.GenerateSequenceIterator();
            for (var index = 1; index <= 3; index++)
            {
                modelBuilder
                    .Entity<StaticValue>()
                    .HasData(
                        StaticValue.CreateEndUserBodyHomeCarouselImage(
                            index: index,
                            key: index.ToString(),
                            language: StaticValue.Constant.Language.English
                        )
                    );
            }
        }

        private void SeedData(ModelBuilder modelBuilder)
        {
            SeedData_Images(modelBuilder: modelBuilder);
            SeedData_StaticValues_EndUserHeaderButtons(modelBuilder: modelBuilder);
            SeedData_StaticValues_EndUserBodyAboutUs(modelBuilder: modelBuilder);
            SeedData_StaticValues_EndUserBodyHomeCarouselImages(modelBuilder: modelBuilder);
        }
    }
}