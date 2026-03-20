type ContactPayload = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

type ActionPayload = {
  buttonId: string;
  details?: Record<string, unknown>;
};

type ErrorDetail = {
  path?: string;
  message?: string;
};

export async function submitContact(payload: ContactPayload) {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    const firstDetail = (data?.details as ErrorDetail[] | undefined)?.[0]?.message;
    throw new Error(firstDetail ?? data?.error ?? "Не удалось отправить заявку");
  }

  return data as { success: true; message: string };
}

export function trackButtonClick(payload: ActionPayload) {
  void fetch("/api/actions/click", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...payload,
      page: window.location.pathname,
    }),
  });
}
