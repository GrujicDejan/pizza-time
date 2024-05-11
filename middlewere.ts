import { NextRequest, NextResponse } from "next/server";

export function middlewere(request: NextRequest) {
  return NextResponse.next;
}

export const config = {
  matcher: "/",
};
