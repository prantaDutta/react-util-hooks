# 🛠 All of Your Utility Hooks in One Place.

When using react(or other frameworks like NextJS and Gatsby), we often need to use some kind of hooks to make our lives
a bit easier. But each time, we have to create these hooks ourselves. So I created this library where you can find all
the utility hooks you ever need (Kinda).

### These Lines are _Extremely_ Important

I don't own any of these hooks. I found these hooks on the internet and every time I wanted to use them, I had to search
again and again. So I created this library so that I can use it anytime I want. Don't worry you can use it too 🤝🤝🤝

### Original Hooks Taken from [useHook.ts](https://usehooks-typescript.com/) & [useHook.com](https://usehooks.com/)

### What are React Hooks?

Hooks are a new addition in React that lets you use state and other React features without writing a class. This library
provides easy to understand code examples to help you learn how hooks work and inspire you to take advantage of them in
your next project. Learn more from [react docs](https://reactjs.org/docs/hooks-overview.html)

_Table of contents:_

- [Installation](#installation) 💻
- [Features](#features) 📋
- [Hooks](#hooks) 🔗
- [Usage](#usage) 🖨️
- [Project Status](#project-status) ✔️
- [Support Me](#support-me) 🙏
- [🤓 References](#references) 🌐

## Installation

```bash
npm add react-util-hooks
// OR
yarn add react-util-hooks
```

## Features

- Doesn't have any Dependency (Except for React)
- Only 5 KB in Minified/GZIP
- 100% Modular. Just Use the Hooks you need.
- Detailed Documentation with Example
- Written in Typescript
- Most of the hooks are Generic

## Hooks

- [useAsync](#useasync)
- [useBoolean](#useboolean)
- [useCopyToClipboard](#usecopytoclipboard)
- [useCounter](#usecounter)
- [useClickAnyWhere](#useclickanywhere)
- [useDarkMode](#usedarkmode)
- [useDebounce](#usedebounce)
- [useElementSize](#useelementsize)
- [useEventListener](#useeventlistener)
- [useFetch](#usefetch)
- [useHover](#usehover)
- [useImageOnLoad](#useimageonload)
- [useIntersectionObserver](#useintersectionobserver)
- [useInterval](#useinterval)
- [useIsClient](#useisclient)
- [useIsFirstRender](#useisfirstrender)
- [useKeyPress](#usekeypress)
- [useLocalStorage](#uselocalstorage)
- [useLockedBody](#uselockedbody)
- [useMedia](#usemedia)
- [useOnClickOutside](#useonclickoutside)
- [useOnScreen](#useonscreen)
- [usePrevious](#useprevious)
- [useReadLocalStorage](#usereadlocalstorage)
- [useScreen](#usescreen)
- [useScript](#usescript)
- [useSessionStorage](#usesessionstorage)
- [useSessionStorageWithObject](#usesessionstoragewithobject)
- [useSsr](#usessr)
- [useTimeout](#usetimeout)
- [useToggle](#usetoggle)
- [useUpdateEffect](#useupdateeffect)
- [useWindowSize](#usewindowsize)

## Usage

### Important

This library doesn't have any default export.

So you shouldn't do the following (remember you can, but you shouldn't):

```js
    import ReactUtilHooks from 'react-util-hooks'
    // OR
    import * as ReactUtilHooks from 'react-util-hooks'
```

Instead, you should only import the hook/hooks you need. Let's say, you only need useClient hook. Do the following

```js
    import {useIsClient} from 'react-util-hooks'
    // OR
    import {useIsClient, useFetch} from 'react-util-hooks'
```

This way, your bundle size will be much smaller, and your app performance will be better. You can also do the not
recommended way

```jsx
    import ReactUtilHooks from 'react-util-hooks'
    // Not Recommended
    function app() {
        const isClient = ReactUtilHooks.useIsClient()
    }
```

### useAsync

It's generally a good practice to indicate to users the status of any async request. An example would be fetching data
from an API and displaying a loading indicator before rendering the results. Another example would be a form where you
want to disable the submit button when the submission is pending and then display either a success or error message when
it completes. Rather than litter your components with a bunch of useState calls to keep track of the state of an async
function, you can use our custom hook which takes an async function as an input and returns the value, error, and status
values we need to properly update our UI. Possible values for status prop are: "idle", "pending", "success", "error".

```jsx
    function App() {
        const {execute, status, value, error} = useAsync(myFunction, false);
        return (
            <div>
                {status === "idle" && <div>Start your journey by clicking a button</div>}
                {status === "success" && <div>{value}</div>}
                {status === "error" && <div>{error}</div>}
                <button onClick={execute} disabled={status === "pending"}>
                    {status !== "pending" ? "Click me" : "Loading..."}
                </button>
            </div>
        );
    }
```

### useBoolean

A simple abstraction to play with a boolean, don't repeat yourself.

```
    export default function Component() {
        const { value, setValue, setTrue, setFalse, toggle } = useBoolean(false)
        
        // Just an example to use "setValue"
        const customToggle = () => setValue(x => !x)
        
        return (
        <>
          <p>
            Value is <code>{value.toString()}</code>
          </p>
          <button onClick={setTrue}>set true</button>
          <button onClick={setFalse}>set false</button>
          <button onClick={toggle}>toggle</button>
          <button onClick={customToggle}>custom toggle</button>
        </>
        )
    }
```

### useCopyToClipboard

This React hook gives you a copy method to save a string in the clipboard and the copied value (default: null).

If anything doesn't work, it prints a warning in the console and the value will be null.

```
    export default function Component() {
      const [value, copy] = useCopyToClipboard()
      return (
        <>
          <h1>Click to copy:</h1>
          <div style={{ display: 'flex' }}>
            <button onClick={() => copy('A')}>A</button>
            <button onClick={() => copy('B')}>B</button>
            <button onClick={() => copy('C')}>C</button>
          </div>
          <p>Copied value: {value ?? 'Nothing is copied yet!'}</p>
        </>
      )
    }
```

### useCounter

A simple abstraction to play with a counter, don't repeat yourself.

```
    export default function Component() {
      const { count, setCount, increment, decrement, reset } = useCounter(0)
    
      const multiplyBy2 = () => setCount(x => x * 2)
    
      return (
        <>
          <p>Count is {count}</p>
          <button onClick={increment}>Increment</button>
          <button onClick={decrement}>Decrement</button>
          <button onClick={reset}>Reset</button>
          <button onClick={multiplyBy2}>Multiply by 2</button>
        </>
      )
    }
```

### useClickAnyWhere

This simple React hook offers you a click event listener at the page level, don't repeat yourself.

```typescript jsx
    import React, { useState } from 'react'
    import { useClickAnyWhere } from 'react-util-hooks'
    
    export default function Component() {
      const [count, setCount] = useState(0)
    
      useClickAnyWhere(() => {
        setCount(prev => prev + 1)
      })
    
      return <p>Click count: {count}</p>
    }
```

### useDarkMode

This React Hook offers you an interface to enable, disable, toggle and read the dark theme mode. The returned value (isDarkMode) is a boolean to let you be able to use with your logic.

It uses internally useLocalStorage() to persist the value and listens the OS color scheme preferences.

```
    export default function Component() {
      const { isDarkMode, toggle, enable, disable } = useDarkMode()
    
      return (
        <div>
          <p>Current theme: {isDarkMode ? 'dark' : 'light'}</p>
          <button onClick={toggle}>Toggle</button>
          <button onClick={enable}>Enable</button>
          <button onClick={disable}>Disable</button>
        </div>
      )
    }
```

### useDebounce

This React hook helps to limit that the component is re-rendered too many times. Imagine that you want to execute a
function on an event that executes several hundred times per second such as moving the mouse or scrolling. This may
cause the application to lag. To prevent this, the debounce uses an internal timer to execute the callback function
every xx seconds (2nd parameter). Consider the example below. Each time the user enters the field, the onChange event is
triggered. On the other hand, the unfolded variable is updated at most every 500ms. If you have to make an API call to
find the elements that match the search term, you can do so by monitoring the unpacked variable, which will be more
economical.

```jsx
    export default function Component() {
        const [value, setValue] = useState < string > ('')
        const debouncedValue = useDebounce < string > (value, 500)
    
        const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
            setValue(event.target.value)
        }
        // Fetch API (optional)
        useEffect(() => {
            // Do fetch here...
            // Triggers when "debouncedValue" changes
        }, [debouncedValue])
        return (
            <div>
                <p>Value real-time: {value}</p>
                <p>Debounced value: {debouncedValue}</p>
                <input type="text" value={value} onChange={handleChange}/>
            </div>
        )
    }
```

### useElementSize

This hook helps you to dynamically recover the width and the height of an HTML element. Dimensions are updated when
resizing the window.

```jsx
    export default function Component() {
        const squareRef = useRef(null)
        const {width, height} = useElementSize(squareRef)
        return (
            <>
                <p>{`the square width is ${width}px and height ${height}px`}</p>
                <div
                    ref={squareRef}
                    style={{
                        width: '50%',
                        paddingTop: '50%',
                        backgroundColor: 'aquamarine',
                        margin: 'auto',
                    }}
                />
            </>
        )
    }
```

### useEventListener

Use EventListener with simplicity by React Hook. It takes as parameters an ```eventName```, a call-back
functions ```(handler)``` and optionally a reference ```element```. You can see above two examples using ```useRef```
and ```window``` based event.

```jsx
    export default function Component() {
        // Define button ref
        const buttonRef = useRef < HTMLButtonElement > (null)
        const onScroll = (event: Event) => {
            console.log('window scrolled!', event)
        }
        const onClick = (event: Event) => {
            console.log('button clicked!', event)
        }
        // example with window based event
        useEventListener('scroll', onScroll)
        // example with element based event
        useEventListener('click', onClick, buttonRef)
        return (
            <div style={{minHeight: '200vh'}}>
                <button ref={buttonRef}>Click me</button>
            </div>
        )
    }
```

### useFetch

Here is a React Hook which aims to retrieve data on an API using the native Fetch API.
I used a reducer to separate state logic and simplify testing via functional style.
The received data is saved (cached) in the application via useRef, but you can use LocalStorage
[(see useLocalStorage())](uselocalstorage) or a caching solution to persist the data. The fetch is executed when
the component is mounted and if the url changes. If ever the url is undefined, or if the component is unmounted
before the data is recovered, the fetch will not be called. This hook also takes the request config
as a second parameter in order to be able to pass the authorization token in the header of the request,
for example. Be careful though, the latter does not trigger a re-rendering in case of modification,
go through the url params to dynamically change the request.

```jsx
    export const DogImage: FC = () => {
        const {data,} = useFetch < DogImageType > ({
            url: "https://dog.ceo/api/breed/beagle/images/random",
            init: {/* options here*/}
        });
    
        return <>{data ? <img src={data.message} alt="dog"></img> : <div>Loading</div>}</>
    }
```

### useHover

React UI sensor hook that determine if the mouse element is in the hover element using Javascript Typescript instead
CSS. This way you can separate the logic from the UI.

```jsx
    export default function Component() {
        const hoverRef = useRef(null)
        const isHover = useHover(hoverRef)
    
        return (
            <div ref={hoverRef}>
                {`The current div is ${isHover ? `hovered` : `unhovered`}`}
            </div>
        )
    }
```

### useImageOnLoad

A simple React Hook that helps you improve UX while images are loading. Rather than having an image that "unfolds" from
top to bottom, we load a smaller version first which will be blurred and which will be replaced by the normal size image
once loaded. You can see an implementation of this hook on this
site: [React Gallery](https://react-gallery-ux.netlify.app/). Don't hesitate to take the logic and write your own CSS
instead.

```jsx
    import React, {CSSProperties} from 'react'
    import {useImageOnLoad} from 'react-util-hooks'
    
    export default function Component() {
        const {handleImageOnLoad, css} = useImageOnLoad()
        const style: { [key: string]: CSSProperties } = {
            wrap: {
                position: 'relative',
                width: 600,
                height: 600,
            },
            image: {
                position: 'absolute',
                width: `100%`,
                height: `100%`,
            },
        }
        return (
            <div style={style.wrap}>
                {/* Small image load fast */}
                <img
                    style={{...style.image, ...css.thumbnail}}
                    src="https://via.placeholder.com/150"
                    alt="thumbnail"
                />
                {/* Full size image */}
                <img
                    onLoad={handleImageOnLoad}
                    style={{...style.image, ...css.fullSize}}
                    src="https://via.placeholder.com/600"
                    alt="fullImage"
                />
            </div>
        )
    }
```

### useIntersectionObserver

This React Hook detects visibility of a component on the viewport using
the [IntersectionObserver](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) API natively
present in the browser. It can be very useful to lazy-loading of images, implementing "infinite scrolling" or starting
animations for example. Your must pass the ref element (from useRef()). It takes optionally root, rootMargin and
threshold arguments from the native IntersectionObserver API and freezeOnceVisible to only catch the first appearance
too. It returns the full IntersectionObserver's entry object.

```jsx
    import React, {FC, useRef} from 'react'
    import {useIntersectionObserver} from 'react-util-hooks'
    
    const Section: FC = ({children}) => {
        const ref = useRef < HTMLDivElement | null > (null)
        const entry = useIntersectionObserver(ref, {})
        const isVisible = !!entry?.isIntersecting
        console.log(`Render Section ${children?.toString()}`, {isVisible})
        return (
            <div
                ref={ref}
                style={{
                    minHeight: '100vh',
                    display: 'flex',
                    border: '1px dashed #000',
                }}
            >
                <div style={{margin: 'auto'}}>{children}</div>
            </div>
        )
    }
    export default function Component() {
        return (
            <>
                <Section key="1">div n°1</Section>
                <Section key="2">div n°2</Section>
                <Section key="3">div n°3</Section>
                <Section key="4">div n°4</Section>
                <Section key="5">div n°5</Section>
            </>
        )
    }
```

### useInterval

Use [setInterval](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval) in functional
React component with the same API. Set your callback function as a first parameter and a delay (in milliseconds) for the
second argument. You can also stop the timer passing null instead the delay. The main difference between the setInterval
you know and this useInterval hook is that its arguments are "dynamic". You can get more information in
the [Dan Abramov's blog post](https://overreacted.io/making-setinterval-declarative-with-react-hooks/).

```jsx
    import React, {useState, ChangeEvent} from 'react'
    import useInterval from './useInterval'
    
    export default function Component() {
        // The counter
        const [count, setCount] = useState < number > (0)
        // Dynamic delay
        const [delay, setDelay] = useState < number > (1000)
        // ON/OFF
        const [isPlaying, setPlaying] = useState < boolean > (false)
        useInterval(
            () => {
                // Your custom logic here
                setCount(count + 1)
            },
            // Delay in milliseconds or null to stop it
            isPlaying ? delay : null,
        )
        const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
            setDelay(Number(event.target.value))
        }
        return (
            <>
                <h1>{count}</h1>
                <button onClick={() => setPlaying(!isPlaying)}>
                    {isPlaying ? 'pause' : 'play'}
                </button>
                <p>
                    <label>Delay: </label>
                    <input type="number" onChange={handleChange} value={delay}/>
                </p>
            </>
        )
    }
```

### useIsClient

This react hook is very simple but it is useful. Indeed, if you manually do a typeof window! ==" undefined " type check,
then your function will be escaped, but it will stop there. Thanks to this hook, there will be a first render where
isClient will be false, then when the window is ready, the useEffect will be executed, will update the value of isClient
and restart your component with the window defined.

```jsx
    export default function Component() {
        const isClient = useIsClient()
    
        return <div>{isClient ? 'Client' : 'server'}</div>
    }
```

### useIsFirstRender

This hook returns true at mount time and false after that

```typescript jsx
    import React, { useEffect, useState } from 'react'
    import { useIsFirstRender } from 'react-util-hooks'
    
    export default function Component() {
        const isFirst = useIsFirstRender()
        const [data, setData] = useState<number>(0)
    
        useEffect(() => {
            console.log('Normal useEffect', { data })
        }, [data])
    
        return (
            <div>
                <p>Open your console</p>
                <p>Is first render: {isFirst ? 'yes' : 'no'}</p>
                <button onClick={() => setData(Date.now())}>Update data</button>
            </div>
        )
    }
```

### useKeyPress

This hook makes it easy to detect when the user is pressing a specific key on their keyboard. The recipe is fairly
simple, as I want to show how little code is required, but I challenge any readers to create a more advanced version of
this hook. Detecting when multiple keys are held down at the same time would be a nice addition. Bonus points: also
require they be held down in a specified order. Feel free to share anything you've created in
this [recipe's gist](https://gist.github.com/gragland/b61b8f46114edbcf2a9e4bd5eb9f47f5)

```jsx
    function App() {
        // Call our hook for each key that we'd like to monitor
        const happyPress = useKeyPress("h")
        const sadPress = useKeyPress("s")
        const robotPress = useKeyPress("r")
        const foxPress = useKeyPress("f")
        return (
            <div>
                <div>h, s, r, f</div>
                <div>
                    {happyPress && "😊"}
                    {sadPress && "😢"}
                    {robotPress && "🤖"}
                    {foxPress && "🦊"}
                </div>
            </div>
        )
    }
```

### useLocalStorage

Persist the state with local storage so that it remains after a page refresh. This can be useful for a dark theme or to
record session information. This hook is used in the same way as useState except that you must pass the storage key in
the 1st parameter. If the window object is not present (as in SSR), ```useLocalStorage()``` will return the default
value

```jsx
    export default function Component() {
        const [isDarkTheme, setDarkTheme] = useLocalStorage('darkTheme', true)
    
        const toggleTheme = () => {
            setDarkTheme(!isDarkTheme)
        }
    
        return (
            <button onClick={toggleTheme}>
                {`The current theme is ${isDarkTheme ? `dark` : `light`}`}
            </button>
        )
}
```

### useLockedBody

This React hook is used to block the scrolling of the page. A good example of a use case is when you need to open a
modal. For flexibility, this hook offers 2 APIs:

Use it as we would use a useState (example 1)

Use it with our own logic, coming from a props or redux for example (example 2)

Finally, you can optionally change the reflow padding if you have another sidebar size than the default (15px)

```jsx
    const fixedCenterStyle: CSSProperties = {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
    }
    
    // Example 1: useLockedBody as useState()
    export function Component1() {
        const [locked, setLocked] = useLockedBody()
        const toggleLocked = () => {
            setLocked(!locked)
        }
        return (
            <>
                <div style={{minHeight: '200vh'}}/>
                <button style={fixedCenterStyle} onClick={toggleLocked}>
                    {locked ? 'unlock scroll' : 'lock scroll'}
                </button>
            </>
        )
    }
    
    // Example 2: useLockedBody with our custom state
    export function Component2() {
        const [locked, setLocked] = useState(false)
        const toggleLocked = () => {
            setLocked(!locked)
        }
        useLockedBody(locked)
        return (
            <>
                <div style={{minHeight: '200vh'}}/>
                <button style={fixedCenterStyle} onClick={toggleLocked}>
                    {locked ? 'unlock scroll' : 'lock scroll'}
                </button>
            </>
        )
    }
```

### useMedia

This hook makes it super easy to utilize media queries in your component logic. In our example below we render a
different number of columns depending on which media query matches the current screen width, and then distribute images
amongst the columns in a way that limits column height difference (we don't want one column way longer than the rest).
You could create a hook that directly measures screen width instead of using media queries, but this method is nice
because it makes it easy to share media queries between JS and your stylesheet. See it in action in
the [CodeSandbox Demo](https://codesandbox.io/s/6jlmpjq9vw).

```jsx
    function App() {
        const columnCount = useMedia(
            // Media queries
            ["(min-width: 1500px)", "(min-width: 1000px)", "(min-width: 600px)"],
            // Column counts (relates to above media queries by array index)
            [5, 4, 3],
            // Default column count
            2
        );
        // Create array of column heights (start at 0)
        let columnHeights = new Array(columnCount).fill(0);
        // Create array of arrays that will hold each column's items
        let columns = new Array(columnCount).fill().map(() => []);
        data.forEach((item) => {
            // Get index of shortest column
            const shortColumnIndex = columnHeights.indexOf(Math.min(...columnHeights));
            // Add item
            columns[shortColumnIndex].push(item);
            // Update height
            columnHeights[shortColumnIndex] += item.height;
        });
        // Render columns and items
        return (
            <div className="App">
                <div className="columns is-mobile">
                    {columns.map((column) => (
                        <div className="column">
                            {column.map((item) => (
                                <div
                                    className="image-container"
                                    style={{
                                        // Size image container to aspect ratio of image
                                        paddingTop: (item.height / item.width) * 100 + "%",
                                    }}
                                >
                                    <img src={item.image} alt=""/>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        );
    }
```

### useOnClickOutside

React hook for listening for clicks outside a specified element (see useRef). This can be useful for closing a modal, a
dropdown menu etc.

```jsx
    export default function Component() {
        const ref = useRef(null)
    
        const handleClickOutside = () => {
            // Your custom logic here
            console.log('clicked outside')
        }
    
        const handleClickInside = () => {
            // Your custom logic here
            console.log('clicked inside')
        }
    
        useOnClickOutside(ref, handleClickOutside)
    
        return (
            <div
                ref={ref}
                onClick={handleClickInside}
                style={{width: 200, height: 200, background: 'cyan'}}
            />
        )
    }
```

### useOnScreen

This hook allows you to easily detect when an element is visible on the screen as well as specify how much of the
element should be visible before being considered on screen. Perfect for lazy loading images or triggering animations
when the user has scrolled down to a particular section.

```jsx
    function App() {
        // Ref for the element that we want to detect whether on screen
        const ref = useRef();
        // Call the hook passing in ref and root margin
        // In this case it would only be considered onScreen if more ...
        // ... than 300px of element is visible.
        const onScreen = useOnScreen(ref, "-300px");
        return (
            <div>
                <div style={{height: "100vh"}}>
                    <h1>Scroll down to next section 👇</h1>
                </div>
                <div
                    ref={ref}
                    style={{
                        height: "100vh",
                        backgroundColor: onScreen ? "#23cebd" : "#efefef",
                    }}
                >
                    {onScreen ? (
                        <div>
                            <h1>Hey I'm on the screen</h1>
                            <img src="https://i.giphy.com/media/ASd0Ukj0y3qMM/giphy.gif"/>
                        </div>
                    ) : (
                        <h1>Scroll down 300px from the top of this section 👇</h1>
                    )}
                </div>
            </div>
        );
    }
```

### usePrevious

One question that comes up a lot is "When using hooks how do I get the previous value of props or state?". With React
class components you have the componentDidUpdate method which receives previous props and state as arguments or you can
update an instance variable (this.previous = value) and reference it later to get the previous value. So how can we do
this inside a functional component that doesn't have lifecycle methods or an instance to store values on? Hooks to the
rescue! We can create a custom hook that uses the useRef hook internally for storing the previous value. See the recipe
below with inline comments. You can also find this example in the
official [React Hooks FAQ](https://reactjs.org/docs/hooks-faq.html#how-to-get-the-previous-props-or-state)

```jsx
    function App() {
        // State value and setter for our example
        const [count, setCount] = useState(0);
        // Get the previous value (was passed into hook on last render)
        const prevCount = usePrevious(count);
        // Display both current and previous count value
        return (
            <div>
                <h1>
                    Now: {count}, before: {prevCount}
                </h1>
                <button onClick={() => setCount(count + 1)}>Increment</button>
            </div>
        );
    }
```

### useReadLocalStorage

This React Hook allows you to read a value from localStorage by its key.
It can be useful if you just want to read without passing a default value.
If the window object is not present (as in SSR), or if the value doesn't exist,
useLocalStorage() will return null.

```
    export default function Component() {
      // Assuming a value was set in localStorage with this key
      const darkMode = useReadLocalStorage('darkMode')
    
      return <p>DarkMode is {darkMode ? 'enabled' : 'disabled'}</p>
    }
```

Note: If you want to be able to change the value, look [useLocalStorage()](uselocalstorage)

### useScreen

Easily retrieve window.screen object with this Hook React which also works onRezise.

```jsx
    export default function Component() {
        const screen = useScreen()
    
        return (
            <div>
                The current window dimensions are:{' '}
                <code>
                    {JSON.stringify({width: screen?.width, height: screen?.height})}
                </code>
            </div>
        )
    }
```

### useScript

Dynamically load an external script in one line with this React hook. This can be useful to integrate a third party
library like Google Analytics or Stripe. This avoids loading this script in the head tag on all your pages if it is not
necessary.

```jsx
    // it's an example, use your types instead
    // declare const jQuery: any
    export default function Component() {
        // Load the script asynchronously
        const status = useScript(`https://code.jquery.com/jquery-3.5.1.min.js`)
    
        useEffect(() => {
            if (typeof jQuery !== 'undefined') {
                // jQuery is loaded => print the version
                alert(jQuery.fn.jquery)
            }
        }, [status])
    
        return (
            <div>
                <p>{`Current status: ${status}`}</p>
    
                {status === 'ready' && <p>You can use the script here.</p>}
            </div>
        )
    }
```

### useSessionStorage

This hook saves the data in memory, kind of like localstorage but this time it saves the data in the session and browser
deletes the session if you close the browser or even the tab. You have to save string value in the session storage. If
you want to save an object, checkout [useSessionStorageWithObject](#usesessionstoragewithobject) instead

```jsx
    function App() {
        const [item, setItem] = useSessionStorage('name', 'Initial Value');
        return (
            <div className="App">
                <h1>Set Name to store in Local Storage</h1>
                <div>
                    <label>
                        Name:{' '}
                        <input
                            type="text"
                            placeholder="Enter your name"
                            value={item}
                            onChange={e => setItem(e.target.value)}
                        />
                    </label>
                </div>
            </div>
        );
    }
```

### useSessionStorageWithObject

This hook actually uses [useSessionStorage](#usesessionstorage). But it takes an object and stringify it and then save
it. It also parses the data when fetching from the browser, so you can use it like a regular object.

```jsx
    function App() {
        const [form, setForm] = useSessionStorage < {email: string, name: string} > ('name', {name: '', email: ''});
        return (
            <div className="App">
                <h1>Set Name to store in Local Storage</h1>
                <div>
                    <label>
                        Name:{' '}
                        <input
                            type="text"
                            placeholder="Enter your name"
                            value={form.name}
                            onChange={e => setForm({...form, name: e.target.value})}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Name:{' '}
                        <input
                            type="text"
                            placeholder="Enter your email"
                            value={form.email}
                            onChange={e => setItem({...form, email: e.target.value})}
                        />
                    </label>
                </div>
            </div>
        );
    }
```

### useUpdateEffect

This hook is just the modified version of useEffect that is skipping the first render.

```typescript jsx
    import React, { useEffect, useState } from 'react'
    import { useUpdateEffect } from 'react-util-hooks'
    
    export default function Component() {
      const [data, setData] = useState<number>(0)
      useEffect(() => {
        console.log('Normal useEffect', { data })
      }, [data])
    
      useUpdateEffect(() => {
        console.log('Update useEffect only', { data })
      }, [data])
    
      return (
        <div>
          <p>Open your console</p>
          <button onClick={() => setData(Date.now())}>Update data</button>
        </div>
      )
    }
```

### useTimeout

Very similar to the [useInterval](https://usehooks-typescript.com/react-hook/use-interval) hook, this React hook
implements the native setTimeout function keeping the same interface. You can enable the timeout by setting delay as a
number or disabling it using null. When the time finish, the callback function called.

```jsx
    export default function Component() {
        const [visible, setVisible] = useState(true)
        const hide = () => setVisible(false)
        useTimeout(hide, 5000)
        return (
            <div>
                <p>
                    {visible
                        ? "I'm visible for 5000ms"
                        : 'You can no longer see this content'}
                </p>
            </div>
        )
    }
```

### useSsr

Quickly know where your code will be executed;

- In the server (Server-Side-Rendering) or
- In the client, the navigator

This hook doesn't cause an extra render, it just returns the value directly, at the mount time,
and it didn't re-trigger if the value changes.

Otherwise, If you want to be notified when the value changes to react to it,
you can use [useIsClient()](useisclient) instead.

```
    export default function Component() {
      const { isBrowser } = useSsr()
    
      return <p>{isBrowser ? 'Browser' : 'Server'}!</p>
    }
```

### useToggle

Basically, what this hook does is that, it takes a parameter with value true or false and toggles that value to
opposite. It's useful when we want to take some action into it's opposite action, for example: show and hide modal, show
more/show less text, open/close side menu.

```jsx
    function App() {
        // Call the hook which returns, current value and the toggler function
        const [isTextChanged, setIsTextChanged] = useToggle();
    
        return (
            <button onClick={setIsTextChanged}>{isTextChanged ? 'Toggled' : 'Click to Toggle'}</button>
        );
    }
```

### useWindowSize

Easily retrieve window dimensions with this Hook React which also works onRezise.

```jsx
    export default function Component() {
        const {width, height} = useWindowSize()
    
        return (
            <div>
                The current window dimensions are:{' '}
                <code>{JSON.stringify({width, height})}</code>
            </div>
        )
    }
```

## Project status

I created this library because I needed it. Feel free to use it and give feedbacks.

You can also create hooks and send PR, thanks.

If you find any bugs or have new hook ideas, [create an issue](https://github.com/prantaDutta/react-util-hooks/issues).

## Support Me

Become a [Patreon](https://www.patreon.com/prantadutta) 🥰👋

## References

- https://usehooks-typescript.com/
- https://usehooks.com/