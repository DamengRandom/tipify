### .Net CLI comamnds

Example:

``` csharp
// help command
dotnet help
dotnet new help

// create project
dotnet new webapi -n API
dotnet new classlib -n Application

// Add reference from one project to another project
dotnet add reference ../Domain/
// Reference `..\Domain\Domain.csproj` added to the project.

// add new db migration
dotnet ef migrations add InitialCreate -p Persistence -s API
// later update the migration, do the same thing, just chnage a name
dotnet ef migrations add SeedValues -p Persistence -s API

// watch and run
dotnet watch run
```
