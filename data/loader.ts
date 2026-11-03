export const loader = {
  modules: [
    { label: 'Drums Sold', count: 1284 },
    { label: 'Positive Reviews', count: 312 },
    { label: 'Performances', count: 46 },
    { label: 'Workshops', count: 2051 },
  ],
  status: { waiting: 'Waiting', syncing: 'Syncing', live: 'Live' },
  caption: { loading: 'Calibrating synthesizers', done: 'Ready to play' },
  frames: [
    'amble-1',
    'amble-2',
    'amble-3',
    'drumtop',
    'knobs',
    'drum',
  ].map((name) => `/images/${name}.jpg`),
};
