import { NextResponse } from 'next/server';
import { menuItems } from '@/lib/data'; // For now just sending local data.

export async function GET() {
  try {
    return NextResponse.json({ success: true, data: menuItems });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Failed to fetch menu' }, { status: 500 });
  }
}
