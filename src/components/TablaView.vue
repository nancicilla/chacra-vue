<template>
  <div class="overflow-x-auto rounded-2xl shadow-lg 
     fixed top-0 w-[96%]  transform -translate-x-[calc(100%+10px)]
      transition-transform duration-300 translate-x-0
       flex-1 bg-black/20 backdrop-blur-sm border  rounded-lg 
       shadow-[inset_0_1px_0px_rgba(255,255,255,0.75),0_0_9px_rgba(0,0,0,0.2),0_3px_8px_rgba(0,0,0,0.15)]
         text-white relative before:absolute before:inset-0 
        before:rounded-lg before:bg-gradient-to-br
         before:from-white/60 before:via-transparent before:to-transparent 
         before:opacity-70 before:pointer-events-none 
         after:absolute after:inset-0 before:rounded-lg 
         after:bg-gradient-to-tl after:from-white/30 after:via-transparent 
         after:to-transparent after:opacity-50 after:pointer-events-none
         py-1">
  
    <table class="w-[95%] table-auto">
      <thead>
        <tr>
          <th
            v-for="col in columns"
            :key="String(col.key)"
            :class="[ 'text-2xl font-medium text-slate-50 uppercase tracking-wider p-3 text-center' ]"
          >
            <slot name="header" :column="col">
              <div class="flex items-center justify-between">
                <span>{{ col.label ?? String(col.key) }}</span>
                <button
                  v-if="col.sortable"
                  class="ml-2 text-xs opacity-70 hover:opacity-100"
                  aria-label="sort"
                >
                 
                </button>
              </div>
            </slot>
          </th>
        </tr>
      </thead>

      <tbody class="divide-y">
        <tr v-if="items.length === 0">
          <td :colspan="columns.length" class="p-6 text-center text-gray-500">
            <slot name="empty">No hay registros</slot>
          </td>
        </tr>

        <tr
          v-for="(row, idx) in items"
          :key="rowKey(row, idx)"
          class="hover:bg-white/30 cursor-pointer"
        >
          <td
            v-for="col in columns"
            :key="String(col.key)"
            :class="['p-3 align-top', col.align === 'right' ? 'text-right' : col.align === 'center' ? 'text-center' : 'text-left']"
          >
            <slot name="cell" :row="row" :col="col" :index="idx">
             
                {{ formatCell(row[col.key as keyof typeof row]) }}
             
            </slot>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue'

// --- Tipos genéricos ---
export type Column<T> = {
  key: keyof T | string
  label?: string
  width?: string
  align?: 'left' | 'center' | 'right'
  sortable?: boolean
  // render puede devolver string (HTML) o cualquier cosa — preferible usar slot para render personalizado
  render?: (row: T) => string | number | boolean
}

// Props: usamos PropType<T> para que quien use el componente pueda tipar `items` y `columns` en su componente padre
const props = defineProps<{
  items: Array<Record<string, any>>
  columns: Array<Column<any>>
  rowIdKey?: string
  dense?: boolean
}>()


// Helper para generar key de fila
function rowKey(row: Record<string, any>, idx: number) {
  if (props.rowIdKey && row[props.rowIdKey]) return String(row[props.rowIdKey])
  return idx
}

function formatCell(value: unknown) {
  if (value === null || value === undefined) return ''
  if (typeof value === 'object') return JSON.stringify(value)
  return String(value)
}
</script>

<style scoped>
table { border-collapse: separate; border-spacing: 0; }
thead th { background-clip: padding-box; }
</style>
