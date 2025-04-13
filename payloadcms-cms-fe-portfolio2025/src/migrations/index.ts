import * as migration_20250413_185852 from './20250413_185852';

export const migrations = [
  {
    up: migration_20250413_185852.up,
    down: migration_20250413_185852.down,
    name: '20250413_185852'
  },
];
