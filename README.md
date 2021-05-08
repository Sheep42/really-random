# Really Random

A true random dice roller using React Native, just because.

Uses the [random.org](https://random.org) API to generate true random dice rolls.

## Installing / Running

If you want to run this app, you need to create the file `src/utils/secrets.ts` and export your own random.org api key before you will be able to generate dice rolls.

```ts
export const API_KEY = 'your-api-key-here';
```

`npm install -g expo` if you don't already have expo installed

`npm install` to install dependencies

`expo start` to run

## FAQ

**Is this really necessary?** Nope. Just a project to familiarize myself with React Native.

**Does anybody need this?** Probably not.

**Why use Random.org?** It's easier than trying to implement complex crypto algorithms, and it does what I need. 

**Shouldn't you be concealing the API key?** Yep, if this was a real App on the market the API key would need to be fetched from a database. It's not a published app, so I've decided for the sake of simplicity to import from a constant.
