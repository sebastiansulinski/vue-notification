<template>
  <div id="app">
    <NotificationContainer
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
    </NotificationContainer>
    <div class="max-w-3xl mx-auto pt-16 pb-4 px-4">
      <button
        type="button"
        @click="
          add({
            type: 'success',
            message: 'Record has been saved successfully!',
          })
        "
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2 rounded"
      >
        CONFIRMATION
      </button>
      <button
        type="button"
        @click="add({ type: 'error', message: 'There was an error!' })"
        class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 mr-2 rounded"
      >
        WARNING
      </button>
      <button
        type="button"
        @click="remove"
        class="bg-gray-700 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded"
      >
        REMOVE
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import NotificationContainer from './components/NotificationContainer';

export default {
  name: 'App',
  components: {
    NotificationContainer,
  },
  setup() {
    const { add, remove } = mapActions('notification', ['add', 'remove']);

    return { add, remove };
  },
};
</script>

<style>
@import url('~tailwindcss/dist/base.css');
@import url('~tailwindcss/dist/components.css');
@import url('~tailwindcss/dist/utilities.css');
</style>
