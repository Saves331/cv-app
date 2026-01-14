import { google } from "googleapis";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        type: "service_account",
        project_id: process.env.GCP_PROJECT_ID,
        private_key: process.env.GCP_PRIVATE_KEY!.replace(/\\n/g, "\n"),
        client_email: process.env.GCP_CLIENT_EMAIL,
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
    });

    const sheets = google.sheets({ version: "v4", auth });
    const spreadsheetId = process.env.SHEET_ID;

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: "CV!A1:G100",
    });

    return NextResponse.json({ data: response.data.values });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
