export type ContactLeadPayload = {
  name: string;
  contact: string;
  car: string;
};

export type SubmitContactLeadResult =
  | { ok: true }
  | { ok: false; error: string };

/**
 * POST lead to /api/contact (same behavior for Contact + Calculator forms).
 */
export async function submitContactLead(
  payload: ContactLeadPayload
): Promise<SubmitContactLeadResult> {
  try {
    const endpoint = `${window.location.origin}/api/contact`;
    const res = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
      cache: "no-store",
    });

    const contentType = res.headers.get("content-type") ?? "";
    let data: { ok?: boolean; error?: string } = {};

    if (contentType.includes("application/json")) {
      data = (await res.json()) as { ok?: boolean; error?: string };
    } else {
      const snippet = (await res.text()).slice(0, 120);
      console.error("/api/contact: expected JSON, got", res.status, snippet);
      return {
        ok: false,
        error: `Сервер вернул ответ ${res.status} (не JSON). Проверьте, что маршрут /api/contact задеплоен.`,
      };
    }

    if (!res.ok || !data.ok) {
      return {
        ok: false,
        error: data.error ?? "Не удалось отправить. Попробуйте позже.",
      };
    }

    return { ok: true };
  } catch {
    return {
      ok: false,
      error: "Ошибка сети. Проверьте подключение и попробуйте снова.",
    };
  }
}
