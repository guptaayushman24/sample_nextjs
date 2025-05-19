import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '../../../lib/prisma'; // adjust if path differs

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    if (!body.name) {
      return NextResponse.json({ error: 'Name is required' }, { status: 400 });
    }

    const user = await prisma.user.create({
      data: {
        name: body.name,
      },
    });

    return NextResponse.json(user, { status: 201 });
  } catch (error) {
    console.error('Error in /api/adduser:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
