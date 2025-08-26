import PocketBase from "pocketbase";

export const pb = new PocketBase(import.meta.env.VITE_PB_URL || "https://pb.devpgs.app");
/*
 pb.authStore persists to localStorage in the browser.
 pb.authStore.isValid -> boolean
 pb.authStore.record  -> user record or null
*/
