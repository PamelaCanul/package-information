import { NextResponse, type NextRequest } from "next/server";

export const middleware = async (req: NextRequest) => {
  const pathname = req.nextUrl.pathname;

  if (pathname === "/home") {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL("/404", req.url));
};

export const config = {
  matcher:
    "/((?!api|_next/static|_next/image|favicon.ico|img|fonts|documents).*)",
};
