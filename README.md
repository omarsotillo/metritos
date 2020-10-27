# Metritos

This project stems from a research for the state of React.js in October 2020 (React-query and Zustand), playing with CQRS driven structure in a rails backend and digging into TimescaleDB for time-series-oriented databases (super surface).

Those technologies were used are adn the reasosns:

- [Stitches.js](https://github.com/modulz/stitches): Near-zero runtime, server-side rendering, multi-variant support, and best-in-class developer experience. Wanted to give a try vs styled_components
- [Zustand.js](https://zustand.surge.sh/): Out of all of the new state management wrappers and recommended by @lorenz_weiss decided to give it a try
- [React-query](https://react-query.tanstack.com/): Provides a default and general wrapper around . Seems cool -> all projects end up implementing that on the long-run
- [TimescaleDB](https://www.timescale.com/): Supercharged PostgreSQL
  Rely on the same PostgreSQL you know and love, with full SQL, rock-solid reliability, and a massive ecosystem. Achieve 10-100x faster queries than PostgreSQL, InfluxDB, and MongoDB. Native optimizations for time-series. Write millions of data points per second. Store 100s of terabytes or petabytes. Don’t worry about cardinality.
- [Rails](https://rubyonrails.org/): As a default for ruby. Even though I am a huge fan of hanami/ hanami-API or simple racks applications, ignoring the obvious that Rails is the main development ruby framework would have being dumb.
- [Traefik and portainer](https://doc.traefik.io/traefik/): Checked how to have a cool environment without ports and localhost (incongruencies between systems and externalizing)

# Findings:

Coming with the premise of not being a huge fan of React.js (this test changed it) because of how coupled some tools are linked to this library (react.js cannot exist without redux and many developers having this deep inside tattooed), I wanted to give it a try what new alternatives.

After some days ->

- Zustand.js: gamechanger. Default Redux as state management failed for me in the premise of by default overcomplicating state management (huge number of layers), lack of scalability in big projects and sadly react-community adapting it as a requirement for every project without thinking the why of it. Easy, direct, and on-demand without disturbing is a win-win. Probably because it remembers me a lot of how Vuex stores are made.

- React-query: adds the default handling of external requests. Any big/long-term project would end implementing this internally, but is cool that there is already a foundation and general service for that and works easy. Really liked the invalidated cache part and automatic prefetch/retries. Need to dig better with how it plays with GraphQL.

- Stitches.js: Woah! creating desing systems in the configuration hive/src/stitches.config.ts super straight forward and well planned -> even designers can modify those easily. Better support for different traits might be cool (only strings are considered currently)

- TimeScaleDb: Well, did not see the benefits yet (cool functions and really straightforward), but promises of scaliability and by just enabling a extension :) seems super cool. Creating hypertables and using them :top: and :easy: :)

# Setup:

### Backend

Generate the correct structure for this project.

`make setup`

Directly after:

`make up`

Runnning commands you might run (always from the main project). Some examples

`make run app="development" command="rake db:migrate:reset"`
`make run app="development" command="bundle exec rspec||bundle_audit"`
`make run app="development" command="rails c "`

### Frontend (Hive)

Requires backend to be running

`yarn install`
`yarn run start`

Visit `http://localhost:3000`

User login ->

- User = 'demo@example.com'
- Password = 'demo1234

## Removal of services

Run `make down` and `make remove-images` or go to portainer to restart services.

# Future:

1st SPECS:

What it needs to be considered a well-set project and what I would find ideal:

#### Docker

- [ ] FE on docker and traefik communication through host and not port
- [ ] Traefik backend ports

#### Frontend (Hive)

- [ ] Mobile UI
- [ ] Concesus typescript + improvement in components (some pure functions without type other FunctionComponent)
- [ ] Accessibility UI
- [ ] Error handling (401 direct logout)
- [ ] All TODOs:
- [ ] Auth to Oauth2 (github/google)
- [ ] Move fetch native to wrapper to inject default headers for auth and remove from each component
- [ ] Cypress
- [ ] Move units tsx to having index.tsx and export const. share props
- [ ] Line type and other types added based on hive graphs
- [ ] Migrate graphs to canvas when big data

### Backed

- [ ] SPECs
- [ ] Postgres materialized views (partition) based client and topic aggregation
- [ ] Auth to Oauth2 (github/google)
- [ ] Decouple as much as possible from ActiveRecord
- [ ] Mutations required and optional to DTOs classes (versines)
- [ ] Value objects
- [ ] QueryStrategy for:
  - [ ] Aggregates
  - [ ] Type Line
- [ ] Generate secrets on AWS-Gateway
- [ ] Unit polymorphism based on type
- [ ] Database optimize
  - [ ] Required
  - [ ] Indexes (based of objects)
  - [ ] Metrics divide into series/anaylits (see datadog traces)

##### Basic setup included

This project comes with a set of defined services:

- [Portainer](https://www.portainer.io/): Will allow to manage all the stack containers.

  - Visit and create a user with the password you want in [portainer](http://portainer.localhost)

  ![Portainer](docs/portainer.png)

- [Traefik](https://docs.traefik.io/): act as a reverse proxy service

  - Define one entrypoint for our docker-environment.
  - Visit the dashboard in [traefik](http://traefik.localhost:8080)
  - ![Traefik](docs/traefik.png)

- [Mailhog](): proxy mailer
- [fast-dev](): Kafka playground
