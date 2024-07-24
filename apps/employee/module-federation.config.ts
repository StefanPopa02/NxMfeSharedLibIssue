import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'employee',
  remotes: [],
  additionalShared: ['primeng']
};

export default config;
