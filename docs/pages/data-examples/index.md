# Data Examples

## Show content with real data

### template

```html
<div class="data-example" v-if="items.length > 0">
  <div v-for="item of items" :key="item.id">
    <span class="author">{{ item.author }}</span>
    <span class="action">{{ item.action }}</span>
    <span class="repo">{{ item.repo }}</span>
    <span>at</span>
    <span class="time">{{ item.time }}</span>
  </div>
</div>
```

### script

```vue
<script setup>
import { ref } from 'vue'
import { data } from '../../data/githubEvents/events.data.ts'
const items = ref([])

const { isMock, data: res } = data;
items.value = res.map(item => ({
  id: item.id,
  author: item.actor.login,
  action: item.type.replace('Event', '').toLowerCase(),
  repo: item.repo.name,
  time: new Date(item.created_at).toLocaleString(),
}))
</script>
```

### style

```vue
<style lang="scss">
.data-example {
  span {
    padding: 0 4px;
  }
  span:first-child {
    padding-left: 0;
  }
  .author {
    font-weight: bold;
  }
  .repo {
    font-weight: medium;
  }
  .time {
    text-decoration: underline;
  }
}
</style>
```

### Content

<div class="data-example" v-if="items.length > 0">
  <div v-for="item of items" :key="item.id">
    <span class="author">{{ item.author }}</span>
    <span class="action">{{ item.action }}</span>
    <span class="repo">{{ item.repo }}</span>
    <span>at</span>
    <span class="time">{{ item.time }}</span>
  </div>
</div>

<script setup>
import { ref } from 'vue'
import { data } from '../../data/githubEvents/events.data.ts'
const items = ref([])

const { isMock, data: res } = data;
items.value = res.map(item => ({
  id: item.id,
  author: item.actor.login,
  action: item.type.replace('Event', '').toLowerCase(),
  repo: item.repo.name,
  time: new Date(item.created_at).toLocaleString(),
}))
</script>

<style lang="scss">
.data-example {
  margin: 20px 0;
  span {
    padding: 0 4px;
  }
  span:first-child {
    padding-left: 0;
  }
  .author {
    font-weight: bold;
  }
  .repo {
    font-weight: medium;
  }
  .time {
    text-decoration: underline;
  }
}
</style>

### Original Data

<pre>{{ data }}</pre>