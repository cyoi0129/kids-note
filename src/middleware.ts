import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  // クッキーから認証トークンを取得
  const authToken = request.cookies.get("token")?.value;
  const userId = request.cookies.get("user_id")?.value;
  const familyId = request.cookies.get("user_id")?.value;
  const noAuthPath = ["/user/login", "/user/mail", "/user/create"];

  // 認証トークンがなく、かつ保護対象のページにアクセスしようとしている場合
  if (
    (!authToken || !userId || !familyId) &&
    !noAuthPath.includes(request.nextUrl.pathname)
  ) {
    // ログインページへリダイレクト
    console.log(request.nextUrl);
    const loginUrl = new URL("/user/login", request.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

// Middlewareを実行するパスを指定
export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|mockServiceWorker.js|manifest.json).*)",
  ],
};
