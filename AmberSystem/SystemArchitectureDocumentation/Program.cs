using System;
using Structurizr;

namespace SystemArchitectureDocumentation
{
    class Program
    {
        static void Main(string[] args)
        {
            var workspace = new Workspace(
                name: "Amber System",
                description: "Amber System"
            );
            var model = workspace.Model;
            var user = model.AddPerson(
                name: "Business Owner",
                description: "Business Owner"
            );
            var softwareSystem = model.AddSoftwareSystem(
                name: "Amber System",
                description: "Amber System"
            );
            user.Uses(
                destination: softwareSystem,
                description: "Uses"
            );

            var viewSet = workspace.Views;
            var systemContextView = viewSet.CreateSystemContextView(
                softwareSystem: softwareSystem,
                key: "System Context",
                description: "System Context"
            );
            systemContextView.AddAllSoftwareSystems();
            systemContextView.AddAllPeople();

            var styles = viewSet.Configuration.Styles;
            styles.Add(new ElementStyle(tag: Tags.SoftwareSystem) { Background = "#1168bd", Color = "#ffffff" });
            styles.Add(new ElementStyle(tag: Tags.Person) { Background = "#08427b", Color = "#ffffff", Shape = Shape.Person });
        }
    }
}