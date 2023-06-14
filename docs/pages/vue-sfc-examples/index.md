---
hello: world
---

# Vue SFC Examples

<!-- use script anywhere to create state and logic -->

<script setup>
import { ref } from 'vue'
import { useData } from 'vitepress'
import CustomComponent from '../../components/CustomComponent.vue'

const count = ref(0)

const { page } = useData()
</script>

## Markdown Content

> This is a pure markdown content.

<!-- anything like template in vue SFC will be rendered as vue component -->

## Vue SFC Component Usage

### script

```ts
<script setup>
import { ref } from 'vue'
import { useData } from 'vitepress'

const count = ref(0)

const { page } = useData()
</script>
```

### template

```html
The count is: {{ count }}

<button :class="$style.button" @click="count++">Increment</button>

<pre>{{ page }}</pre>
```

The count is: {{ count }}

<!-- any valid html element will be compiled as vue components -->

<button :class="$style.button" @click="count++">Increment</button>

<pre>{{ page }}</pre>

### style

```css
<style module>
.button {
  color: red;
  font-weight: bold;
}
</style>
```

<!-- use style anywhere to set styles for vue SFC components -->

<style module>
.button {
  color: red;
  font-weight: bold;
}
</style>

## Custom Component

```js
import CustomComponent from '../components/CustomComponent.vue'
```

```html
<CustomComponent />
```

<CustomComponent />