import bcrypt from "bcrypt";
import prisma from "@/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
      const body = await request.json();
      const { email, name, password } = body;
  
      const existingUser = await prisma.user.findFirst({
        where: {
          OR: [
            { email: email },
            { name: name },
          ],
        },
      });
  
      if (existingUser) {
        return NextResponse.json({ error: 'Email or name is already registered.' }, { status: 400 });
      }
  
      const hashedPassword = await bcrypt.hash(password, 12);
  
      const newUser = await prisma.user.create({
        data: {
          email,
          name,
          hashedPassword,
          image: 'https://cdn.discordapp.com/attachments/1018142814963515402/1187704444197011527/301-3012694_account-user-profile-avatar-comments-fa-user-circle.png',
        },
      });
  
      return NextResponse.json(newUser);
    } catch (error) {
      console.error('Error during user registration:', error);
      return NextResponse.json({ error: 'Something went wrong during registration.' }, { status: 500 });
    }
  }