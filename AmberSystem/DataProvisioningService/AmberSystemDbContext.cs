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
        private static string CreateSqliteConnectionString()
        {
            var homeDirectory =
                Environment.GetFolderPath(
                    folder: Environment.SpecialFolder.UserProfile
                );
            var databaseFilePath = Path.Join(
                paths: new[]
                {
                    homeDirectory,
                    "Amber",
                    "amber.db",
                }
            ); // should evaluate to "~/Amber/amber.db"
            var connectionString = $@"Data Source={databaseFilePath}";

            return connectionString;
        }

        // ReSharper disable once InconsistentNaming
        private static string CreateMariaDBConnectionString()
        {
            var username = "amber";
            var password = "amber";
            var serverAddress = "127.0.0.1";
            var port = "3306";
            var databaseName = "amber";

            var connectionString = string.Join(
                separator: "; ",
                value: new[]
                {
                    $"Server={serverAddress}",
                    $"Port={port}",
                    $"Database={databaseName}",
                    $"Uid={username}",
                    $"Pwd={password}",
                }
            ); // should evaluate to "Server=...; Port=...; Database=...; ..."

            return connectionString;
        }
        
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder
                .UseSqlite(connectionString: CreateSqliteConnectionString())
                // .UseMySQL(connectionString: CreateMariaDBConnectionString())
                .EnableSensitiveDataLogging()
            ;
            
            base.OnConfiguring(optionsBuilder: optionsBuilder);
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // base.OnModelCreating(modelBuilder);
            // modelBuilder.Entity<Base>().ToTable("Base");

            // modelBuilder
            //     .Entity<StaticValue>()
            //     .ToTable("StaticValues")
            // ;
            // modelBuilder
            //     .Entity<MediaFile>()
            //     .ToTable("MediaFiles")
            // ;
            SetDefaultValues(modelBuilder: modelBuilder);
            SeedData(modelBuilder: modelBuilder);
        }

        public DbSet<StaticValue> StaticValues { get; set; }
        public DbSet<MediaFile> MediaFiles { get; set; }
    }
}