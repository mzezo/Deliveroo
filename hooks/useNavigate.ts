import {  useEffect, useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';

export const useNavigate= () => {
    const navigation = useNavigation();


    // The execute function wraps asyncFunction and
    // handles setting state for pending, data, and error.
    // useCallback ensures the below useEffect is not called
    // on every render, but only if asyncFunction changes.
    const execute = useCallback(() => {
      
    }, []);
    // Call execute if we want to fire it right away.
    // Otherwise execute can be called later, such as
    // in an onClick handler.
    useEffect(() => {
      
    }, [execute]);
    return { navigation };
  };