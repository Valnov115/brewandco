import { NextRequest, NextResponse } from 'next/server';

const N8N_WEBHOOK =
  'https://n8n-r1uo.srv1472545.hstgr.cloud/webhook/dfa22ac3-cfae-467d-8381-4f65a6adbf61/chat';

export async function POST(req: NextRequest) {
  const body = await req.text();

  const upstream = await fetch(N8N_WEBHOOK, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body,
  });

  const text = await upstream.text();
  return new NextResponse(text, {
    status: upstream.status,
    headers: { 'Content-Type': upstream.headers.get('Content-Type') ?? 'application/json' },
  });
}
