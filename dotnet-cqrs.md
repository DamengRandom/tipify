### .Net CQRS Pattern

#### Simple understanding

1). Command: modifies state, should not return a value (post data) [POST, PUT, DELETE]

2). Query: answer a question, never modify state (fetch data) [GET]

Circle Map:

                  API
                 /   \
            Query     Command
              |          |
              |        Domain
              |          |
        Data Access  Persistence
(Read from DB) \        / (Write to DB)
                Database

Directions: API -> Command -> Domain -> Persistence -> Database -> Data Access -> Query -> API


#### Mediator Pattern

Basically, we are writing `Meditor.Send(object)` inside controller level, and send out to handler to handle the logic.

The map: API controller (`Meditor.Send(object)`) -> object (into handler) -> Handler doing the magic logics -> object (as the handler result) -> API controller (with the response)

1). Command Handler:

Example story:

We try to create an activity object inside `CreateActivityController`, and we send object from Meditor.Send(object). Then we pass it to `CreateActivityCommandHandler` in order to save object into database, and return a value back to `CreateActivityController` Layer and then once controller knows everything is done, then controller will give a response with `OK(withReturns)` to tell API consumer the activity has been created successfully.

2). Query Handler:

Example story:

We try to get an activity data from `GetActivityController`, we pass the data id as object into `GetActivityCommandHandler` and inside handler we check whether the activity exists or not, and if activity has been found, we pass it into ActivityDTO (`Data Transfer Object`) and return ActivityDTO back to `GetActivityController`. Finally, controller will send `OK(activity)` as response back to API consumer.
