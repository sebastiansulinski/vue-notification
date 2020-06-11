<template>
  <div v-if="has">
    <NotificationBar
      v-for="notification in notifications"
      :key="notification.id"
      :notification="notification"
      @dismiss="remove(notification)"
      v-slot="{ notification, dismiss }"
    >
      <slot :notification="notification" :dismiss="dismiss"></slot>
    </NotificationBar>
  </div>
</template>
<script>
import { computed } from '@vue/composition-api';
import NotificationBar from './NotificationBar';
export default {
  name: 'NotificationContainer',
  components: { NotificationBar },
  setup(props, { root: { $store } }) {
    const has = computed(() => $store.getters['notification/has']);

    const notifications = computed(
      () => $store.state.notification.notifications
    );

    const remove = notification =>
      $store.dispatch('notification/remove', notification);

    return { has, notifications, remove };
  },
};
</script>
