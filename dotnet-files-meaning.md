### .Net Files Meaning

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
  // eg: dependency injecition settings
      // services setup (eg: services.AddControllers())
      // authentication settings
      // middleware settings (eg: app.UseRouting(); //middleware)
      // ...

// 6. Properties/launchSettings.json: contains the environment settings
  // eg: localhost:5000 url settings


// 7. Controllers/ControllerName.cs: it contains
  // [Route("api/[controller]")]: it defines the API attributes
  // In C#, [xxx] referes to attributes

  // [HttpGet("{id}")]: HttpGet refers to API request method, which is GET for this case
  // ("{id}") means the parameter which is part of API call
```
