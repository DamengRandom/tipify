### DotNet Basics

This post is related with .Net introduction which is mainly talking about what is .Net?

`.Net` = The ecosystem which contains
  - Languages: C#, F#, VB and others
  - Runtimes: Core CLR [Common Language Runtime]
  - Libraries - BCL [Base Class Library] 3rd party, OSS (Open Source)


#### Concepts:

1). `.NET CLR`: Common Language Runtime which provide the runtime environment to compile the C# code and then make the app run
(Reference Link: <a href="https://docs.microsoft.com/en-us/dotnet/standard/clr" target="_blank">.Net CLR</a>)


2). `BCL`: Base Class Library is a standard C# runtime library, its like a base library, which contains `System.String`, `System.DateTime` and etc.


3). Concepts similarities:
  -- CLR = JVM (The CLR is similar with JVM [Java Vritual Machine])
  -- Nuget = NPM (Node Packages Manager)
  -- dotnet cli = your entry point, SDK, driver, javac, go, etc
  -- dotnet new = templates (what type of project you want to create)
  -- dotnet run = dev time compile and run
  -- dotnet publish = ready up for deploy

4). Normally after build the project, we can get `.dll` and `.exe` files in order to run your app.

5). The reason why we use `sqlite`: easier to start and its a file based database, you can use db name same as your project name

More contents: To be added later .. 💤



#### .Net CLI commands

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
// later update the migration, do the same thing, just change a name
dotnet ef migrations add SeedValues -p Persistence -s API

// watch and run
dotnet watch run
```



#### .Net Files Meaning

```csharp
// 1. ProjectName.sln: a solution file which is file to run by IDEs


// 2. ProjectName.csproj: it contains
  // reference to microsoft SDK
  // reference of other project
  // target framework reference eg: netstandard2.0


// 3. Program.cs: it has Main() which is the root of your application, its like App.js in JavaScript


// 4. appsettings.json: is a config file used to store config settings
  // eg: db connection strings setup


// 5. Startup.cs: this is where we add the application configuration
  // eg: dependency injection settings
      // services setup (eg: services.AddControllers())
      // authentication settings
      // middleware settings (eg: app.UseRouting(); //middleware)
      // ...

// 6. Properties/launchSettings.json: contains the environment settings
  // eg: localhost:5000 url settings


// 7. Controllers/ControllerName.cs: it contains
  // [Route("api/[controller]")]: it defines the API attributes
  // In C#, [xxx] refers to attributes

  // [HttpGet("{id}")]: HttpGet refers to API request method, which is GET for this case
  // ("{id}") means the parameter which is part of API call
```
