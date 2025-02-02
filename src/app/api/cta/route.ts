import { NextResponse } from 'next/server';
import Airtable from 'airtable';

// Initialize Airtable
const accessToken = process.env.AIRTABLE_ACCESS_TOKEN;
const appId = process.env.AIRTABLE_APP_ID;

if (!accessToken || !appId) {
  throw new Error("Environment variables AIRTABLE_ACCESS_TOKEN or AIRTABLE_SOURCES_APP_ID are not set.");
}

Airtable.configure({
  apiKey: accessToken,
});

const base = Airtable.base(appId);

export async function POST(request: Request) {
  try {
    const { email, storeUrl } = await request.json();

    if (!email || !storeUrl) {
      return NextResponse.json(
        { message: 'Email and Store URL are required' },
        { status: 400 }
      );
    }

    // Create a record in Airtable
    const record = await base('Waitlist').create([
      {
        fields: {
          Email: email,
          StoreURL: storeUrl,
          SignupDate: new Date().toISOString()
        }
      }
    ]);

    return NextResponse.json({ 
      message: 'Successfully added to waitlist',
      id: record[0].id
    });
  } catch (error: Error | unknown) {
    console.error('Airtable API Error:', error);
    return NextResponse.json(
      { 
        message: 'Failed to add to waitlist', 
        error: process.env.NODE_ENV === 'development' ? error instanceof Error ? error.message : 'Unknown error' : undefined 
      },
      { status: 500 }
    );
  }
}
