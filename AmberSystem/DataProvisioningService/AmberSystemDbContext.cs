using System;
using System.IO;
using DataProvisioningService.Models;
using Microsoft.EntityFrameworkCore;

namespace DataProvisioningService
{
    public partial class AmberSystemDbContext : DbContext
    {
        // public AmberSystemDbContext(DbContextOptions<AmberSystemDbContext> options)
        //     : base(options: options)
        // {
        // }
        
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            // TODO: Switch to a production-ready DBMS
            var homeDirectory = Environment.GetFolderPath(
                folder: Environment.SpecialFolder.UserProfile
            );
            var databaseFilePath = Path.Combine(
                paths: new[]
                {
                    homeDirectory,
                    "Amber",
                    "amber.db",
                }
            ); // should evaluate to "~/Amber/amber.db"
            optionsBuilder.UseSqlite(
                connectionString: $@"Data Source={databaseFilePath}"
            );
            base.OnConfiguring(
                optionsBuilder: optionsBuilder
            );
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // base.OnModelCreating(modelBuilder);
            SetModelsDefaultValues(modelBuilder: modelBuilder);
            SeedData(modelBuilder: modelBuilder);
        }

        public DbSet<PresetValue> PresetValues { get; set; }
        public DbSet<StaticValue> StaticValues { get; set; }
    }
}