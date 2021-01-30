using System;
using System.Linq;
using DataProvisioningService.Models;
using Microsoft.EntityFrameworkCore;

namespace DataProvisioningService
{
    public partial class AmberSystemDbContext
    {
        private void SetDefaultValues_BaseModel(ModelBuilder modelBuilder)
        {
            // the implementations are written as a work around for "Table Per Concrete-Type"
            // using interface `IBase` as a worse substitute of abstract class `Base`
            // since at the time, EFCore has not support TPC yet
            
            void AssignDefaultValue(
                Type type,
                string propertyName,
                object defaultValue
            )
            {
                modelBuilder
                    .Entity(type: type)
                    .Property(propertyName: propertyName)
                    .HasDefaultValue(value: defaultValue)
                ;
            }
            void AssignDefaultValueSql(
                Type type,
                string propertyName,
                string sql
            )
            {
                modelBuilder
                    .Entity(type: type)
                    .Property(propertyName: propertyName)
                    .HasDefaultValueSql(sql: sql)
                ;
            }

            void AssignDefaultValues(
                Type type
            )
            {
                AssignDefaultValue(
                    type: type,
                    propertyName: nameof(Visibility),
                    defaultValue: Visibility.Visible
                );
                AssignDefaultValueSql(
                    type: type,
                    propertyName: nameof(IBase.DateCreated),
                    sql: "current_timestamp"
                );
                AssignDefaultValue(
                    type: type,
                    propertyName: nameof(IBase.CreatorId),
                    defaultValue: 0
                );
                AssignDefaultValueSql(
                    type: type,
                    propertyName: nameof(IBase.DateModified),
                    sql: "current_timestamp"
                );
                AssignDefaultValue(
                    type: type,
                    propertyName: nameof(IBase.ModifierId),
                    defaultValue: 0
                );
            }
            
            // use "reflection" to find all the implementation of `IBase`
            // and `AssignDefaultValues` to each found
            AppDomain
                .CurrentDomain
                .GetAssemblies()
                .SelectMany(assembly => assembly.GetTypes())
                .Where(
                    type => 
                        typeof(IBase).IsAssignableFrom(type)
                        && type.IsClass
                        && !type.IsAbstract
                )
                .ToList()
                .ForEach(AssignDefaultValues)
            ;
        }

        private void SetDefaultValues_StaticValueModel(ModelBuilder modelBuilder)
        {
            // Language
            modelBuilder
                .Entity<StaticValue>()
                .Property(staticValue => staticValue.Language)
                .HasDefaultValue(StaticValue.Constant.Language.English);
        }

        private void SetDefaultValues_MediaFileModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .Entity<MediaFile>()
                .Property(file => file.Width)
                .HasDefaultValue(0);
            modelBuilder
                .Entity<MediaFile>()
                .Property(file => file.Height)
                .HasDefaultValue(0);
            // modelBuilder
            //     .Entity<MediaFile>()
            //     .Property(file => file.Reference)
            //     .HasDefaultValue("#");
            modelBuilder
                .Entity<MediaFile>()
                .Property(file => file.Autoplay)
                .HasDefaultValue(false);
        }

        private void SetDefaultValues(ModelBuilder modelBuilder)
        {
            SetDefaultValues_MediaFileModel(modelBuilder: modelBuilder);
            SetDefaultValues_BaseModel(modelBuilder: modelBuilder);
            SetDefaultValues_StaticValueModel(modelBuilder: modelBuilder);
        }
    }
}