# Js Notification

Component for displaying notifications with help of also included Vuex module.

> Please note that this component uses Vue 3 composition api

## Installation

```bash
npm install -D @ssdcode/js-notification
```

## Usage

First register the module with your vuex store - there are 2 options:

**notification**: displays only a single notification at any given time replacing previous with the new one

```javascript
import Vue from 'vue';
import Vuex from 'vuex';
import { notification } from '@ssdcode/js-notification';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { notification },
});
```

**notifications**: displays multiple notifications as they are dispatched

```javascript
import Vue from 'vue';
import Vuex from 'vuex';
import { notifications } from '@ssdcode/js-notification';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { notifications },
});
```

Register `NotificationContainer` component and add it to your application's html structure.

```javascript
import NotificationContainer from '@ssdcode/js-notification';


new Vue({
  store,
  components: { NotificationContainer },
  render: h => h(App),
}).$mount('#app');
```

Example layout using [tailwindcss](https://tailwindcss.com/):

```html
<notification-container
  class="fixed inset-x-0 top-0"
  v-slot="{ notification, dismiss }"
>
  <div
    class="relative"
    :class="[notification.type === 'error' ? 'bg-red-600' : 'bg-green-600']"
  >
    <div class="max-w-screen-xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
      <div class="pr-16 sm:text-center sm:px-16">
        <p class="font-medium text-white">
          <span v-html="notification.message"></span>
        </p>
      </div>
      <div
        class="absolute inset-y-0 right-0 pt-1 pr-1 flex items-start sm:pt-1 sm:pr-2 sm:items-start"
      >
        <button
          type="button"
          class="flex p-2 rounded-md focus:outline-none transition ease-in-out duration-150"
          :class="[
            notification.type === 'error'
              ? 'hover:bg-red-500 focus:bg-red-500'
              : 'hover:bg-green-500 focus:bg-green-500',
          ]"
          aria-label="Dismiss"
          @click="dismiss"
        >
          <svg
            class="h-6 w-6 text-white"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</notification-container>
```

You can now call it from anywhere using:

```vue
<template>
    <button type="button" @click="add({type: 'success', message: 'All good!'})">SHOW NOTIFICATION</button>
</template>
<script>
import { mapActions } from 'vuex';

export default {
  name: 'DemoComponent',
  setup() {
    const { add } = mapActions('notification', ['add']);

    return { add };
  },
};
</script>
```

## Tests

You can execute tests by calling

```bash
npm run test:unit
```

## Contributions

Contributions are welcome - please make sure all PRs have their associated test.