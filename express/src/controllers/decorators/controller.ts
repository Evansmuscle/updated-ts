import 'reflect-metadata';

export function Controller(routePrefix: string) {
  return function (target: Function) {
    for (const key in target.prototype) {
      const routeHandler = target.prototype[key];

      const path = Reflect.getMetadata('path', target.prototype, key);
    }
  };
}
