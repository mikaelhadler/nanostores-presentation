### Nanostores
![nanastores](https://github.com/user-attachments/assets/93588a79-7c0e-448f-b4e1-a6f2c5ab9608)
<svg width="500" height="500" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="250" cy="250" r="250" fill="#000"/><path fill-rule="evenodd" clip-rule="evenodd" d="M269.463 385 122 281.746l86.384-33.697 126.397 88.503L269.463 385zM231.036 115l147.463 103.254-86.384 33.697-126.397-88.503L231.036 115z" fill="#fff"/></svg>

---
## What is Nanostores?

A tiny state manager for **React**, **React Native**, **Preact**, **Vue**, **Svelte**, **Solid**, **Lit**, **Angular**, and vanilla JS. It uses **many atomic stores** and direct manipulation.

---
- **Small.** 265 bytes. Zero dependencies
- **Fast.**
- **Tree Shakable.**
- **Designed to move logic from components to stores.**
- Good **TypeScript** support.
![Uploading nanastores.


---
## Does size matter?
![Pasted image 20250626131205](https://github.com/user-attachments/assets/153f3a2d-f0c3-4f90-bfe4-a058e15aadac)

![[Pasted image 20250626131205.png]]
https://www.keycdn.com/support/the-growth-of-web-page-size

---
## Atoms
Single values (numbers, strings, objects)

```jsx
import { atom } from 'nanostores'

const counter = atom(0)

counter.set(counter.get() + 1)
```

---

## Map

Dynamic key-based structures requiring frequent key changes

```jsx
import { map } from 'nanostores'

const user = map({ id: 1, name: 'Alex' })

user.setKey('name', 'Taylor')
```

---
### Object

Fixed-shape data with strict key requirements

```jsx
import { object } from 'nanostores'

const settings = object({ darkMode: true, volume: 80 })

settings.set({ ...settings.get(), volume: 70 })')
```

---

### Array

Ordered lists needing index-based or bulk operations

```jsx
import { array } from 'nanostores'

const tasks = array(['Write docs', 'Fix bugs'])

tasks.set([...tasks.get(), 'Review PRs'])
```


---

## State Mutations

```jsx
import { atom, action } from 'nanostores'

const countStore = atom(0)

const increment = action(countStore, 'increment', (store, by = 1) => {
  store.set(store.get() + by)
})

increment(5) // Value becomes 5
```

---

## Action Composition
Combine multiple mutations or async operations

```jsx
const asyncFetch = action(countStore, 'fetch', async (store) => {
  const current = store.get()
  await new Promise(resolve => setTimeout(resolve, 1000))
  store.set(current * 2)
})

await asyncFetch() // Doubles value after 1 second
```

---

## Subscriber Notification System

```jsx
import { atom } from 'nanostores'

const counter = atom(0)
const unsubscribe = counter.subscribe(value => {
  console.log('New value:', value)
})

counter.set(1) // Triggers listener
unsubscribe() // Stops updates
```

---

## [Persistent Store](./persistent-store)

## [Stores Benchmark](./benchmark)
