# Another React Multi Provider

> Clean up your deeply nested provider components!


## Example

Transform your code from something that looks like this:

```jsx
<AuthenticationProvider configuration={configuration}>
  <MuiPickersUtilsProvider utils={DateFnsUtils}>
    <ThemeProvider theme={theme}>
      <DialogProvider>
        <AnotherContextProvider>
          <Router>
            <App />
          </Router>
        </AnotherContextProvider>
      </DialogProvider>
    </ThemeProvider>
  </MuiPickersUtilsProvider>
</AuthenticationProvider>
```

to this:

```jsx
<MultiProvider providers={[
  [AuthenticationProvider, { configuration }],
  [MuiPickersUtilsProvider, { utils: DateFnsUtils }],
  [ThemeProvider, { theme }],
  DialogProvider,
  AnotherContextProvider,
  Router,
]}>
  <App />
</MultiProvider>
```

## Installation

```bash
npm install --save another-multi-provider
```

## Usage

```jsx
import MultiProvider from 'another-multi-provider';

<MultiProvider providers={[
  // providers...
]}>
  <App />
</MultiProvider>
```

## Inspired by

- Article: https://kamranicus.com/posts/2018-07-07-react-nesting-components-flat

- Similar library: https://www.npmjs.com/package/react-multi-provider
    - However with this library you can get warnings like this: `Warning: Failed prop type: The prop 'children' is marked as required in 'MuiPickersUtilsProvider', but its value is 'undifined'.`

## License

[MIT](http://opensource.org/licenses/MIT)
