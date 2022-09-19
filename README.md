# good-books
Load the good-books dataset into MarkLogic.

## Setup

Copy `config_sample.js` and save as `config.js`. Edit settings as needed for your MarkLogic environment.

Unzip `good-books.zip`. This will create a `data` directory of JSON book files.

Run: `node setup`

This will:

- Create MarkLogic databases, forests, and servers.
- Load the good-books dataset into a MarkLogic database.

MarkLogic Admin UI: [http://localhost:8001](http://localhost:8001)
