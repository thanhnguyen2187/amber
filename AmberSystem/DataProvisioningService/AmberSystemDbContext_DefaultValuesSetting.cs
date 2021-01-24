using System;
using DataProvisioningService.Models;
using Microsoft.EntityFrameworkCore;

namespace DataProvisioningService
{
    public partial class AmberSystemDbContext
    {
        protected void SetDefaultValuesBaseModel(ModelBuilder modelBuilder)
        {
            // Visibility
            modelBuilder
                .Entity<Base>()
                .Property(b => b.Visibility)
                .HasDefaultValue(Visibility.Visible);
            // DateCreated
            modelBuilder
                .Entity<Base>()
                .Property(b => b.DateCreated)
                .HasDefaultValue(DateTime.Now);
            // CreatorId
            modelBuilder
                .Entity<Base>()
                .Property(b => b.CreatorId)
                .HasDefaultValue(0);
            // DateModified
            modelBuilder
                .Entity<Base>()
                .Property(b => b.DateModified)
                .HasDefaultValue(DateTime.Now);
            // ModifierId
            modelBuilder
                .Entity<Base>()
                .Property(b => b.ModifierId)
                .HasDefaultValue(0);
        }

        protected void SetDefaultValuesStaticValueModel(ModelBuilder modelBuilder)
        {
            // Language
            modelBuilder
                .Entity<PresetValue>()
                .Property(v => v.Language)
                .HasDefaultValue("vi");
        }

        protected void SetModelsDefaultValues(ModelBuilder modelBuilder)
        {
            SetDefaultValuesBaseModel(modelBuilder: modelBuilder);
            SetDefaultValuesStaticValueModel(modelBuilder: modelBuilder);
        }
    }
}