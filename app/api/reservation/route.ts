import { NextRequest, NextResponse } from 'next/server';

const WEBHOOK_URL =
  'https://n8n-r1uo.srv1472545.hstgr.cloud/webhook/make_reservation';

export async function POST(req: NextRequest) {
  const { guestName, groupSize, bookingTime } = await req.json();

  if (!guestName || !groupSize || !bookingTime) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  let upstream: Response;
  try {
    upstream = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-webhook-secret': process.env.RESERVATION_WEBHOOK_SECRET ?? '',
      },
      body: JSON.stringify({ guestName, groupSize, bookingTime }),
    });
  } catch (err) {
    console.error('[reservation] fetch error:', err);
    return NextResponse.json({ error: 'Could not reach webhook' }, { status: 502 });
  }

  const responseText = await upstream.text();
  console.log('[reservation] webhook status:', upstream.status, 'body:', responseText);

  if (!upstream.ok) {
    return NextResponse.json(
      { error: 'Webhook call failed', status: upstream.status, body: responseText },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
