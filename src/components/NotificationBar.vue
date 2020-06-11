<script>
import { onMounted, onUnmounted } from '@vue/composition-api';
export default {
  name: 'NotificationBar',
  props: {
    notification: {
      type: Object,
      required: true,
    },
  },
  setup(props, { emit }) {
    const dismiss = () => {
      emit('dismiss', props.notification);
    };

    const timeout = setTimeout(() => {
      dismiss();
    }, 4500);

    const handler = event => {
      if (event.key === 'Escape') {
        dismiss();
      }
    };

    onMounted(() => {
      document.addEventListener('keydown', handler);
    });

    onUnmounted(() => {
      document.removeEventListener('keydown', handler);
      clearTimeout(timeout);
    });

    return { timeout, dismiss };
  },
  render() {
    // todo
    // when vue 3 is out change to this.$slots
    return this.$scopedSlots.default({
      notification: this.notification,
      dismiss: this.dismiss,
    });
  },
};
</script>
