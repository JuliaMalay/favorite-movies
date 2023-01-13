<template>
  <fieldset class="base-tabs">
    <div
      v-for="(tab, index) in tabs"
      :key="`item-${tab.value}`"
      class="base-tabs__item"
    >
      <span
        class="base-tabs__label"
        :class="[{'base-tabs__label_active': tab.value === modelValue}]"
        :data-selector="`ACTION-SELECT-TAB-LABEL_${tab.value}`"
        :tabindex="index + 1"
        @click="selectActiveTab(tab.value)"
      >
        {{ tab.label }}
      </span>
    </div>
  </fieldset>
</template>

<script setup lang="ts">
import { ISelectOption } from '~/types/ui'

export interface Props {
  tabs: ISelectOption[],
  modelValue: string
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps<Props>()

// eslint-disable-next-line func-call-spacing
const emits = defineEmits<{
  (event: 'update:modelValue', value: string): void
}>()

function selectActiveTab (value: string): void {
  emits('update:modelValue', value)
}
</script>

<style scoped lang="scss">
.base-tabs {
  display: flex;
  gap: 8px;
  &__item {
    font-weight: 400;
    font-size: 32px;
    line-height: 18px;
    color: #999999;
    cursor: pointer;
    &:not(:last-child){
      &:after {
        content: '/';
        padding-left: 8px;
      }
    }
  }
  &__label {
    display: inline-block;
    &_active {
      color: black;
      text-decoration: underline;
    }
    &:hover{
      color: black;
    }
  }
}
</style>
