import { useCallback, useState, useRef } from "react";
import wrapError from "../utils/wrapError";

type QueryState<T> =
  | {
      status: "idle";
    }
  | {
      status: "loading";
    }
  | {
      status: "error";
      error: Error;
    }
  | {
      status: "success";
      data: T;
    };

type QueryResult<T, A extends unknown[]> = {
  state: QueryState<T>;
  execute: (...args: A) => Promise<void>;
};

export default function useQuery<T, A extends unknown[]>(
  queryFn: (...args: A) => Promise<T>,
): QueryResult<T, A> {
  const [state, setState] = useState<QueryState<T>>({ status: "idle" });
  const promiseRef = useRef<Promise<void> | null>(null);

  const execute = useCallback(
    async (...args: A) => {
      if (promiseRef.current) {
        return promiseRef.current;
      }

      setState({ status: "loading" });

      const promise = queryFn(...args)
        .then((data) => {
          setState({ status: "success", data });
        })
        .catch((error) => {
          setState({ status: "error", error: wrapError(error) });
        })
        .finally(() => {
          promiseRef.current = null;
        });

      promiseRef.current = promise;

      return promise;
    },
    [queryFn],
  );

  return { state, execute };
}
