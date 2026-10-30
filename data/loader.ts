export const loader = {
  modules: [
    { label: 'Drums Sold', count: 1284 },
    { label: 'Positive Reviews', count: 312 },
    { label: 'Performances', count: 46 },
    { label: 'Workshops', count: 2051 },
  ],
  status: { waiting: 'Waiting', syncing: 'Syncing', live: 'Live' },
  caption: { loading: 'Calibrating baselines', done: 'Signal locked' },
  frames: [
    'drum',
    'yellow',
    'kid',
    'djembe',
    'bongo',
    'drum',
  ].map((name) => `/images/${name}.jpg`),
};
