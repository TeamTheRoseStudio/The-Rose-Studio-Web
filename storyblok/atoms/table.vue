<template>
  <div
    v-editable="blok"
    class="relative overflow-x-auto shadow-md sm:rounded-lg"
  >
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase dark:text-gray-400">
        <tr>
          <th
            v-for="(th, index) in blok.table.thead"
            :class="
              index % 2 == 1
                ? 'bg-gray-50 dark:bg-gray-800'
                : ''
            "
            class="px-6 py-3"
          >
            {{ th.value }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="tr in blok.table.tbody"
          class="border-b border-gray-200 dark:border-gray-700"
        >
          <td
            v-for="(td, index) in tr.body"
            :class="
              index % 2 == 1
                ? ' bg-gray-50 dark:bg-gray-800'
                : ''
            "
            class="px-6 py-4"
          >
            {{ td.value }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script setup>
defineProps({ blok: Object });
</script>
