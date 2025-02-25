<script setup lang="ts">
import { z } from 'zod'
import type { FormSubmitEvent } from '#ui/types'

const schema = z.object({
  title: z.string().min(1, 'Title is required').max(100, 'Title cannot exceed 100 characters'),
  description: z.string().min(1, 'Description is required').max(1000, 'Description cannot exceed 1000 characters'),
})

type Schema = z.output<typeof schema>

const formState = reactive<Schema>({
  title: '',
  description: '',
})

const queryCache = useQueryCache()
const emit = defineEmits<{
  (e: 'habitAdded'): void
}>()

const { mutate: addHabit } = useMutation({
  mutation: (data: Schema) => {
    return $fetch('/api/habits', {
      method: 'POST',
      body: data,
    }) as Promise<Habit>
  },

  async onSuccess() {
    await queryCache.invalidateQueries({ key: ['habits'] })
    emit('habitAdded')
  },

  onSettled() {
    formState.title = ''
    formState.description = ''
  },
})

async function onSubmit(event: FormSubmitEvent<Schema>) {
  addHabit(event.data)
}
</script>

<template>
  <div class="p-8">
    <UForm :schema="schema" :state="formState" class="flex flex-col gap-4" @submit="onSubmit">
      <UFormGroup name="title">
        <div class="input-container">
          <input v-model="formState.title" placeholder="Title..." />
        </div>
      </UFormGroup>
      <UFormGroup name="description">
        <div class="input-container">
          <textarea v-model="formState.description" rows="5" placeholder="Description (Markdown supported)..."></textarea>
        </div>
      </UFormGroup>
      <button type="submit" class="button bg-sky-400 px-2.5 py-3 font-semibold text-sky-950 outline-none hover:bg-sky-300">Add Habit</button>
    </UForm>
  </div>
</template>

<style lang="postcss" scoped>
.input-container {
  @apply relative flex w-full items-center;
}

input,
textarea {
  box-shadow:
    inset 0.5px 0.5px 1px 0px rgba(255, 255, 255, 0.1),
    inset -0.5px -0.5px 1px 0px rgba(0, 0, 0, 0.1),
    rgba(0, 0, 0, 0.2) 0px 3px 10px -5px;
  @apply w-full rounded-2xl bg-white/10 p-4 outline-none transition-all placeholder:text-white/35;

  &:focus {
    @apply bg-white/15;
  }
}

textarea {
  resize: none;
  --sb-track-color: rgba(0, 0, 0, 0);
  --sb-thumb-color: #666;
  --sb-size: 12px;
}

textarea::-webkit-scrollbar {
  width: var(--sb-size);
}

textarea::-webkit-scrollbar-track {
  background: var(--sb-track-color);
  margin-top: 10px;
  margin-bottom: 10px;
}

textarea::-webkit-scrollbar-thumb {
  background: var(--sb-thumb-color);
  border-radius: 12px;
  border: 4px solid #242724;
}

textarea {
  &:focus::-webkit-scrollbar-thumb {
    border: 4px solid #333633;
  }
}
</style>
