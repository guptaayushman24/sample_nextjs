import { NextResponse } from 'next/server';
import {prisma} from '../../lib/prisma'

export async function POST(req: Request) {
  try {
    const { name } = await req.json();

    const data = await prisma.user.create({
      data: { name },
    });

    return NextResponse.json({ success: true, user: data });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false, error: 'Error adding user' }, { status: 500 });
  }
}