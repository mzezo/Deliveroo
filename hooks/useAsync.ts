import { useState, useEffect, useCallback } from 'react';

export const useAsync = (asyncFunction: any, immediate = true) => {
    const [status, setStatus] = useState("idle");
    const [data, setData] = useState<any[]>([]);
    const [error, setError] = useState(null);

    // The execute function wraps asyncFunction and
    // handles setting state for pending, data, and error.
    // useCallback ensures the below useEffect is not called
    // on every render, but only if asyncFunction changes.
    const execute = useCallback(() => {
      setStatus("pending");
      setData([]);
      setError(null);
      return asyncFunction()
        .then((response: any) => {
          setData(response);
          setStatus("success");
        })
        .catch((error: any) => {
          setError(error);
          setStatus("error");
        });
    }, [asyncFunction]);
    // Call execute if we want to fire it right away.
    // Otherwise execute can be called later, such as
    // in an onClick handler.
    useEffect(() => {
      if (immediate) {
        execute();
      }
    }, [immediate]);
    return { execute, status, data, error };
  };