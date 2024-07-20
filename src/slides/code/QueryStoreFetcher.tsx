// @ts-nocheck
import { create } from 'zustand'

const useFeedStore = create({ data: {} })
const useEntryStore = create({ data: {} })

class StoreActions {
  async fetchEntry(id: string) {
    const { feed, entry } = await api.entry.$get(id)
    const feedMap = { ...useFeedStore.getState().data },
      entryMap = { ...useEntryStore.getState().data }

    feedMap[feed.id] = feed
    entryMap[entry.id] = entry

    useFeedStore.setState({ data: feedMap }),
      useEntryStore.setState({ data: entryMap })
  }
}
const storeActions = new StoreActions()
