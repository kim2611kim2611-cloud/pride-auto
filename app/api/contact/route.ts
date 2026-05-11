import { NextResponse } from "next/server";

const MAX_LEN = 4000;

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Record<string, unknown>;
    const name = typeof body.name === "string" ? body.name.trim() : "";
    const contact = typeof body.contact === "string" ? body.contact.trim() : "";
    const car = typeof body.car === "string" ? body.car.trim() : "";

    if (!name || !contact || !car) {
      return NextResponse.json(
        { ok: false, error: "Заполните все поля" },
        { status: 400 }
      );
    }

    if (name.length > 200 || contact.length > 300 || car.length > MAX_LEN) {
      return NextResponse.json(
        { ok: false, error: "Слишком длинное значение" },
        { status: 400 }
      );
    }

    const token = process.env.TELEGRAM_BOT_TOKEN;
    /** Group / channel ID (negative for supergroups). Override via TELEGRAM_CHAT_ID. */
    const chatId =
      process.env.TELEGRAM_CHAT_ID?.trim() || "-1003837777269";

    if (!token) {
      return NextResponse.json(
        { ok: false, error: "Сервер не настроен" },
        { status: 500 }
      );
    }

    const text =
      `🚗 Новая заявка с сайта Pride Auto!\n` +
      `👤 Имя: ${name}\n` +
      `📱 Контакт: ${contact}\n` +
      `🚙 Автомобиль: ${car}`;

    const tgRes = await fetch(
      `https://api.telegram.org/bot${token}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text,
        }),
      }
    );

    if (!tgRes.ok) {
      const errText = await tgRes.text();
      console.error("Telegram sendMessage failed:", tgRes.status, errText);
      return NextResponse.json(
        { ok: false, error: "Не удалось отправить заявку" },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Некорректный запрос" },
      { status: 400 }
    );
  }
}
