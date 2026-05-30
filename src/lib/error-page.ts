export function renderErrorPage(): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Something went wrong · Alpine Routes</title>
  <style>
    body { font-family: system-ui, sans-serif; margin: 0; min-height: 100vh; display: grid; place-items: center; background: #0f1729; color: #f5f3ef; }
    main { text-align: center; padding: 2rem; max-width: 28rem; }
    h1 { font-size: 1.5rem; margin: 0 0 0.5rem; }
    p { opacity: 0.85; line-height: 1.5; }
    a { color: #e8a735; }
  </style>
</head>
<body>
  <main>
    <h1>Something went wrong</h1>
    <p>We could not load this page. Please try again in a moment.</p>
    <p><a href="/">Return home</a></p>
  </main>
</body>
</html>`;
}
