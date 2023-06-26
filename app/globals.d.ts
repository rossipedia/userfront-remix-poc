/**
 * I don't know why there are no Typescript types fro this, but this is the bare
 * minimum to get it to work.
 */
declare module '@userfront/react' {
  import type { ComponentType } from 'react';
  interface Userfront {
    init(appid: string): void;
    build(args: { toolId: string }): ComponentType<any>;
  }

  const Userfront: Userfront;

  export = Userfront;
}
