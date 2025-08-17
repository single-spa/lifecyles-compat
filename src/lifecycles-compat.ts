import type { LifeCycles } from "single-spa";

export default function singleSpaLifecyclesCompat(
  lifecycles: Partial<LifeCycles> & { bootstrap?: LifeCycles["init"] },
): LifeCycles {
  if (!lifecycles) {
    throw Error(
      `@single-spa/lifecycles-compat: lifecycles object must be passed as argument`,
    );
  }

  if (lifecycles.bootstrap) {
    lifecycles.init = lifecycles.bootstrap;
  }

  return lifecycles;
}
