// @ts-nocheck
import { create } from 'zustand'

const useFeedStore = create({ data: {}, entryIdList: [] })
const useEntryStore = create({ data: {} })

class StoreActions {
  async fetchEntry(id: string) {
    const { feed, entry } = await api.entry.$get(id)
    const feedMap = { ...useFeedStore.getState().data },
      entryMap = { ...useEntryStore.getState().data },
      entryIdList = [...useFeedStore.getState().entryIdList]

    feedMap[feed.id] = feed
    entryMap[entry.id] = entry
    entryIdList.push(id)
    useFeedStore.setState({ data: feedMap, entryIdList }),
      useEntryStore.setState({ data: entryMap })
  }
}
const storeActions = new StoreActions()
