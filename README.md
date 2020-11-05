# @webdev-config/eslint
ESLint configuration to be shared across repositories.

# Install
`npm i -D @webdev-config/eslint`

# Configure
Append to `package.json`:

`"eslintConfig": { "extends": "./node_modules/@webdev-config/eslint" }`

# Execute
`eslint [path regex]`
`eslint ./src/**`
`eslint ./index.ts`
