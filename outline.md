State -> Props

External State -> Jotai / Zustand -> Store

Where from data source?

Request -> State ?
-> React Query / SWR

How to manage data source from request?

React Query Optimistic update?

Data relationship will cause many redundant data, So if a data changed, how can i know which query data should be updated?

https://innei.in/posts/dev-story/modular-request-data-management-concept

Make a flat data store to hold the server data, like the server db schema.

https://innei.in/posts/tech/data-management-approach-for-zustand-and-react-query

So, how to link the data relationship?

id -> id, implement some hooks.

Deep dive, to make offline support

Store -> Indexeddb

Then, when app before start up, hydrate the db data into store.

So complex architecture, the advantage what?

- DX: reduce redundant data, the mental burden of updating data
- UX: Fast data load, even network is lost.

Follow example, and data flow design.

What's next?

Local first.

What is local first?

Why?
https://x.com/__oQuery/status/1813151595141734489

https://x.com/ewind1994/status/1813251109802418304

How?

Sync engine

https://electric-sql.com/

Reference:

https://t.co/T3eDN6Fn1M
https://www.youtube.com/@localfirstconf