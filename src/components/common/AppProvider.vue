<template>
  <n-config-provider
    :hljs="hljs"
    wh-full
    :locale="zhCN"
    :date-locale="dateZhCN"
    :theme="appStore.isDark ? darkTheme : undefined"
    :theme-overrides="naiveThemeOverrides"
  >
    <slot />
  </n-config-provider>
</template>

<script setup>
import { zhCN, dateZhCN, darkTheme } from 'naive-ui'
import { useCssVar } from '@vueuse/core'
import { kebabCase } from 'lodash-es'
import { naiveThemeOverrides } from '~/settings'
import { useAppStore } from '@/store'
import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript'
hljs.registerLanguage('javascript', javascript)
const appStore = useAppStore()
function setupCssVar() {
  const common = naiveThemeOverrides.common
  for (const key in common) {
    useCssVar(`--${kebabCase(key)}`, document.documentElement).value = common[key] || ''
    if (key === 'primaryColor') window.localStorage.setItem('__THEME_COLOR__', common[key] || '')
  }
}
setupCssVar()
</script>
