import type { FieldErrors } from "./pages/Register";

  // map PB error -> our FieldErrors
  export function mapPocketBaseErrors(err: any): FieldErrors {
    // PB's ClientResponseError shape: err.data = { message, data: { field: { code, message } } }
    const data = err?.data?.data ?? err?.response?.data?.data ?? {};
    const topMessage = err?.data?.message ?? err?.message;

    const fe: FieldErrors = {};
    if (data.email?.message) fe.email = data.email.message;
    if (data.password?.message) fe.password = data.password.message;
    if (data.username?.message) fe.username = data.username.message;
    if (data.name?.message) fe.name = data.name.message;

    // only show a general message if no field errors, or to complement them
    if (topMessage) fe.general = topMessage;

    return fe;
  }