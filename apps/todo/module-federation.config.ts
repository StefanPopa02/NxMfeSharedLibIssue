import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'todo',
  exposes: {
    './Routes': 'apps/todo/src/app/remote-entry/entry.routes.ts',
  },
  additionalShared: ['primeng']
};

export default config;
