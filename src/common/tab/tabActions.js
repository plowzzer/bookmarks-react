const TAB_SELECTED = 'TAB_SELECTED'

export function selectTab(tabId) {
  return {
      type: TAB_SELECTED,
      payload: tabId
  }
}