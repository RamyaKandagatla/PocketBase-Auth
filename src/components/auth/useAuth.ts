import { useEffect, useState } from "react";
import { pb } from "../../lib/pb";

export function useAuth() {
  const [isAuth, setIsAuth] = useState<boolean>(pb.authStore.isValid);
  const [user, setUser] = useState<any>(pb.authStore.record); // pb.authStore.record represents the authenticated user record

  useEffect(() => {
    const unsubscribe = pb.authStore.onChange((_token, record) => {
      setIsAuth(pb.authStore.isValid);
      setUser(record);
    });
    return unsubscribe; // clean up listener
  }, []);

  return { isAuth, user };
}
