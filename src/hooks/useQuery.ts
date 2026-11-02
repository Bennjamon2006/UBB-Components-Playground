import { useCallback, useState } from "react";
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

export function useQuery<T, A extends unknown[]>(
  queryFn: (...args: A) => Promise<T>,
): QueryResult<T, A> {
  const [state, setState] = useState<QueryState<T>>({ status: "idle" });

  const execute = useCallback(
    async (...args: A) => {
      if (state.status === "loading") {
        return;
      }

      setState({ status: "loading" });

      try {
        const data = await queryFn(...args);

        setState({ status: "success", data });
      } catch (error) {
        setState({ status: "error", error: wrapError(error) });
      }
    },
    [queryFn],
  );

  return { state, execute };
}
