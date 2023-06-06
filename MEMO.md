## VITE : development environment

### Vite install

```sh
npm create vite@latest app-name -- --template react
npm install
npm run dev
```

### Vite setup

- need to use .jsx extension

- index.html in the source instead of public

- assets still in public

- instead of index.js, need to use main.jsx

- to spin up dev server - "npm run dev"

- rest the same - imports/exports, deployment, assets, etc...

## Libraries

### React Icons

```sh
npm install react-icons --save
```

Usage :

```js
import { FaBeer } from 'react-icons/fa'
class Question extends React.Component {
  render() {
    return (
      <h3>
        {' '}
        Lets go for a <FaBeer />?{' '}
      </h3>
    )
  }
}
```

### Nanoid

nanoid is a small, fast, and secure library for generating unique IDs in JavaScript. It is designed to be as compact as possible while still providing a unique, unpredictable, and collision-resistant identifier.

The library generates random IDs that consist of a combination of uppercase and lowercase letters, as well as numbers. The default ID length is 21 characters, but this can be changed by passing a different length as an argument.

```sh
npm i nanoid
```

```js
import { nanoid } from 'nanoid'
example.map((item) => {
  return <Item key={nanoid()} />
})
```

### Values.js

Install the values.js library and use it to generate a list of colors in the App component.

[Values.js Library](https://github.com/noeldelgado/values.js/blob/master/README.md)

```sh
npm i values.js

```

```js
import Values from 'values.js'
new Values('#f15025').all(10)
```

### React-Toastify

Import and set up the react-toastify library.

[React Toastify](https://fkhadra.github.io/react-toastify/introduction)

```sh
npm i react-toastify
```

main.jsx

```js
import 'react-toastify/dist/ReactToastify.css'
```

App.jsx

```js
import { ToastContainer, toast } from 'react-toastify'

toast.success('awesome')
toast.error('error message')

return (
  <main>
    ...............
    <ToastContainer position="top-center" />
  </main>
)
```

## Hooks

### Use Context

#### Creating Global Context with all the Functions / Hooks / Variables

```js
import { createContext, useState, useContext } from 'react'

const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const [isComponentVisible, setIsComponentVisible] = useState(false)

  const toggleComponent = () => {
    setIsComponentVisible(!isComponentVisible)
  }
  return (
    <AppContext.Provider
      value={{
        isComponentVisible,
        setIsComponentVisible,
        toggleComponent,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}
```

#### Importing App Provider Context in main.jsx and use it to wrap all the components (thanks to children props)

```js
import { AppProvider } from './context'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
)
```

#### We can use the values by importing `useGlobalContext` in the desired JSX file

```js
import { useGlobalContext } from './context'

const Home = () => {
  const { toggleComponent } = useGlobalContext()

  return (
    <main>
      <button onClick={toggleComponent} className="sidebar-toggle">
        Toggle
      </button>
    </main>
  )
}
export default Home
```
