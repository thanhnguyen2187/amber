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
        protected void SeedPresetValuesNavBarButtons(ModelBuilder modelBuilder)
        {
            // const string managementDefaultModuleNamePrefix = "management_view.navbar_buttons";
            var currentId = 0;

            var defaultEndUserPresetValues =
                new List<PresetValue>
                {
                    // Home
                    new()
                    {
                        Id = ++currentId, // 1
                        ModuleName = PresetValue.Constant.ModuleName.EndUserNavBarButtonsLabelHome,
                        Text = PresetValue.Constant.Text.EndUserNavBarButtonsHomeEnglish,
                        Language = PresetValue.Constant.Language.English,
                    },
                    new()
                    {
                        Id = ++currentId, // 2...
                        ModuleName = PresetValue.Constant.ModuleName.EndUserNavBarButtonsLabelHome,
                        Text = PresetValue.Constant.Text.EndUserNavBarButtonsHomeVietnamese,
                        Language = PresetValue.Constant.Language.Vietnamese,
                    },
                    // AboutUs
                    new()
                    {
                        Id = ++currentId,
                        ModuleName = PresetValue.Constant.ModuleName.EndUserNavBarButtonsLabelAboutUs,
                        Text = PresetValue.Constant.Text.EndUserNavBarButtonsAboutUsEnglish,
                        Language = PresetValue.Constant.Language.English,
                    },
                    new() {
                        Id = ++currentId,
                        ModuleName = PresetValue.Constant.ModuleName.EndUserNavBarButtonsLabelAboutUs,
                        Text = PresetValue.Constant.Text.EndUserNavBarButtonsAboutUsVietnamese,
                        Language = PresetValue.Constant.Language.Vietnamese,
                    },
                    // ForSale
                    new()
                    {
                        Id = ++currentId,
                        ModuleName = PresetValue.Constant.ModuleName.EndUserNavBarButtonsLabelForSale,
                        Text = PresetValue.Constant.Text.EndUserNavBarButtonsForSaleEnglish,
                        Language = PresetValue.Constant.Language.English,
                    },
                    new() {
                        Id = ++currentId,
                        ModuleName = PresetValue.Constant.ModuleName.EndUserNavBarButtonsLabelForSale,
                        Text = PresetValue.Constant.Text.EndUserNavBarButtonsForSaleVietnamese,
                        Language = PresetValue.Constant.Language.Vietnamese,
                    },
                    // ForRent
                    new()
                    {
                        Id = ++currentId,
                        ModuleName = PresetValue.Constant.ModuleName.EndUserNavBarButtonsLabelForRent,
                        Text = PresetValue.Constant.Text.EndUserNavBarButtonsForRentEnglish,
                        Language = PresetValue.Constant.Language.English,
                    },
                    new()
                    {
                        Id = ++currentId,
                        ModuleName = PresetValue.Constant.ModuleName.EndUserNavBarButtonsLabelForRent,
                        Text = PresetValue.Constant.Text.EndUserNavBarButtonsForRentVietnamese,
                        Language = PresetValue.Constant.Language.Vietnamese,
                    },
                    // Services
                    new()
                    {
                        Id = ++currentId,
                        ModuleName = PresetValue.Constant.ModuleName.EndUserNavBarButtonsLabelServices,
                        Text = PresetValue.Constant.Text.EndUserNavBarButtonsServicesEnglish,
                        Language = PresetValue.Constant.Language.English,
                    },
                    new()
                    {
                        Id = ++currentId,
                        ModuleName = PresetValue.Constant.ModuleName.EndUserNavBarButtonsLabelServices,
                        Text = PresetValue.Constant.Text.EndUserNavBarButtonsServicesVietnamese,
                        Language = PresetValue.Constant.Language.Vietnamese,
                    },
                    // ContractChecking
                    new()
                    {
                        Id = ++currentId,
                        ModuleName = PresetValue.Constant.ModuleName.EndUserNavBarRightButtonLabelContractChecking,
                        Text = PresetValue.Constant.Text.EndUserNavBarRightButtonContractCheckingEnglish,
                        Language = PresetValue.Constant.Language.English,
                    },
                    new()
                    {
                        Id = ++currentId,
                        ModuleName = PresetValue.Constant.ModuleName.EndUserNavBarRightButtonLabelContractChecking,
                        Text = PresetValue.Constant.Text.EndUserNavBarRightButtonContractCheckingVietnamese,
                        Language = PresetValue.Constant.Language.Vietnamese,
                    },
                };

            var defaultPresetValues =
                new List<PresetValue>()
                .Concat(defaultEndUserPresetValues)
                .ToList();
            
            modelBuilder
                .Entity<PresetValue>()
                .HasData(defaultPresetValues);
        }
        
        protected void SeedPresetValues(ModelBuilder modelBuilder)
        {
            SeedPresetValuesNavBarButtons(modelBuilder: modelBuilder);
        }
    }
}