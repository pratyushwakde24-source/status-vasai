import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import { Booking } from '@/models';

export async function POST(request: Request) {
  try {
    await dbConnect();
    const body = await request.json();
    
    // Validate inputs
    if (!body.name || !body.phone || !body.date || !body.time || !body.guests) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const booking = await Booking.create(body);
    return NextResponse.json({ success: true, data: booking }, { status: 201 });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error('Booking API Error:', error);
    return NextResponse.json({ error: error.message || 'Failed to create booking' }, { status: 500 });
  }
}

export async function GET() {
  try {
    await dbConnect();
    const bookings = await Booking.find().sort({ createdAt: -1 }).limit(50);
    return NextResponse.json({ success: true, data: bookings });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Failed to fetch bookings' }, { status: 500 });
  }
}
