# Barebones NodeJS Boilerplate

This is a minimal NodeJS setup for quick JS development. This uses the experimental module syntax for NodeJS so that you can use `import`/`export` statements in your files.

## Linting

For the most part, this is just the `airbnb` eslint config. I added some more rules that make working with NodeJS/Jest a little easier. For instance, import extensions are required for NodeJS (whereas they are not included by convention in the browser, so eslint gets confused).

## Testing

I added Jest under the `test` script. By default it watches for changes whenever you save a file.

## Running

This project uses `nodemon` to run your code on any changes to files.

## Pre-Commit Hooks

Husky handles pre-commit hooks so that code formatting/linting is done before any commit. To bypass this, you can run `git commit --no-verify`.
