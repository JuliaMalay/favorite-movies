<template>
  <div
    class="base-input"
    @keydown="keydown"
  >
    <label
      v-if="label"
      :for="id"
      class="base-input__label"
    >
      {{ label }}
    </label>

    <Field
      v-slot="{ field, errors }"
      ref="field"
      tag="span"
      :name="name"
      :label="label"
      :rules="rules"
      class="base-input__field"
    >
      <div
        ref="refs"
        class="base-input__wrapper"
        :class="{
          'base-input__wrapper_disabled': disabled,
          'base-input__wrapper_error': errors.length
        }"
        @keydown.esc="focusout"
      >
        <div
          v-if="slots.iconLeft"
          class="base-input__icon base-input__icon_left"
        >
          <slot name="iconLeft" />
        </div>
        <input
          v-bind="field"
          :id="id"
          autocomplete="none"
          :placeholder="placeholder"
          :disabled="disabled"
          :data-selector="`INPUT-${dataSelector}`"
          class="base-input__input"
          :readonly="readonly"
          @blur="focusout"
          @input="input"
          @focus="focus"
          @keydown.enter="keydownEnter"
        >
        <div
          v-if="slots.iconRight"
          class="base-input__icon base-input__icon_right"
        >
          <slot name="iconRight" :focus-in="focusIn" />
        </div>
      </div>
      <ErrorMessage
        v-if="errors.length || reservedError"
        :name="name"
        class="base-input__error"
      />
    </Field>
  </div>
</template>

<script setup lang="ts">
import { ref, useSlots } from 'vue'

interface IProps {
  modelValue: string;
  id: string;
  label?: string;
  optionLabel?: string;
  disabled?: boolean;
  placeholder?: string;
  dataSelector: string;
  name: string;
  rules?: string | Record<string, string>,
  reservedError?: boolean
  readonly?: boolean
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = withDefaults(defineProps<IProps>(), {
  label: '',
  optionLabel: '',
  disabled: false,
  placeholder: '',
  type: 'text',
  rules: '',
  reservedError: false,
  readonly: false
})

// eslint-disable-next-line func-call-spacing
const emits = defineEmits<{
  (event: 'update:modelValue', value: string): void
  (event: 'submit'): void
  (event: 'focus'): void
  (event: 'blur'): void
  (event: 'keydown', $event: Event): void
  (event: 'enter'): void
}>()

const slots = useSlots()
const refs = ref(null)

const input = ({ target }: { target: HTMLInputElement }): void => {
  const { value } = target

  emits('update:modelValue', value)
}

const focusIn = (): void => {
  if (refs.value === null) {
    return
  }
  const input = refs.value as HTMLInputElement
  input.focus()
}

const focus = (): void => {
  emits('focus')
}

const focusout = (): void => {
  if (refs.value === null) {
    return
  }
  const input = refs.value as HTMLInputElement
  emits('blur')
  input.blur()
}

const keydown = (event: Event): void => {
  emits('keydown', event)
}

const keydownEnter = (): void => {
  emits('enter')
}

</script>

<style lang="scss" scoped>
input:-webkit-autofill,
input:-webkit-autofill:focus {
  transition: background-color 600000s 0s, color 600000s 0s;
}

.base-input {
  $outline-size: 1px;
  $outline-active-size: 2px;
  width: 100%;

  &__input {

    width: 100%;
    padding: 10px 12px;

    color: $black-800;

    font-weight: 400;
    font-size: 16px;
    line-height: 22px;

    &::placeholder {
      color: $black-300;
    }
  }

  &__wrapper {
    outline: $outline-size solid $black-100;
    outline-offset: -$outline-size;
    border-radius: 4px;
    display: flex;

    background-color: $white;

    transition: all .3s ease-out;

    &:hover {
      background-color: $background;
      transition: all .1s ease-in-out;
    }

    &:active, &:focus-within {
      outline: $outline-active-size solid $primary-900;
      outline-offset: -$outline-active-size;
    }

    &_disabled {
      background-color: $black-100;
      pointer-events: none;

      &:active, &:focus-within {
        outline: $outline-size solid $black-100;
        outline-offset: -$outline-size;
      }

      &:hover {
        background-color: $black-100;
        transition: all .1s ease-in-out;
      }

      .base-input__label {
        color: $black-300;
      }

      .base__icon {
        cursor: default;
        pointer-events: none;
      }
    }

    &_error {
      outline: $outline-active-size solid $red-900;
      outline-offset: -$outline-active-size;

      &:active, &:focus-within {
        outline: $outline-active-size solid $red-900;
        outline-offset: -$outline-active-size;
      }

      &:hover {
        transition: all .1s ease-in-out;
      }

      .base-input__icon {
        color: $red-900;
      }

      .base-input__input {
        &::placeholder {
          color: $red-900;
        }
      }
    }
  }

  &__label {
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;

    color: $black-800;
    display: block;
    margin-bottom: 4px;
  }

  &__error {
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    color: $red-900;
    min-height: 18px;
  }

  &__icon {
    display: flex;
    align-items: center;
    cursor: pointer;

    :deep(i) {
      font-size: 15px;
      transition: all .3s ease-out;
    }

    &_left {
      padding-left: 13px;
    }

    &_right {
      padding-right: 13px;
    }
  }
}
</style>
