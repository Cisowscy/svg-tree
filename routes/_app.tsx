import { AppProps } from "$fresh/server.ts";

export default function App({ Component }: AppProps) {
  const classTailWind = {
    html: "h-full ",
    body: "h-full flex flex-1"
  };
  return (
    <html class={`${classTailWind.html}`}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>tree-fraction</title>
        <link rel="stylesheet" href="themes/main.css" />
      </head>
      <body class={`${classTailWind.body}`}>
        <Component />
      </body>
    </html>
  );
}
