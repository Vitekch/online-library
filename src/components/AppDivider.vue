<template>
<div
class="app-divider"
></div>
</template>

<script>
export default {
  name: 'AppDivider',
};
</script>

<style lang="scss" scoped>
.app-divider {
  position: relative;
  display: flex;
  justify-content: center;
  height: 1px;
  width: 100%;
  margin: 64px 0;
  background: var(--color-primary);

  &::before {
    content: '';
    position: absolute;
    top: -5px;
    height: 10px;
    width: 20px;
    border-radius: 10px;
    background: var(--color-primary);
  }
}
</style>
