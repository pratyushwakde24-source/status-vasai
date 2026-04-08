import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import { Order } from '@/models';

export async function POST(request: Request) {
  try {
    await dbConnect();
    const body = await request.json();
    
    // Validate inputs
    if (!body.items || !body.total || !body.customerDetails) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const orderId = `ST-${Date.now().toString().slice(-6)}-${Math.floor(Math.random() * 1000)}`;

    const order = await Order.create({
      ...body,
      orderId
    });

    return NextResponse.json({ success: true, data: order }, { status: 201 });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error('Order API Error:', error);
    return NextResponse.json({ error: error.message || 'Failed to create order' }, { status: 500 });
  }
}

export async function GET() {
  try {
    await dbConnect();
    const orders = await Order.find().sort({ createdAt: -1 }).limit(50);
    return NextResponse.json({ success: true, data: orders });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Failed to fetch orders' }, { status: 500 });
  }
}
