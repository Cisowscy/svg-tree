import { useSignal } from "@preact/signals";

import Counter2 from "@@@templatesChangeABLE/Counter2.tsx";

export default function Home() {
  const count2 = useSignal(3);
  return (
    <div class="px-4 py-8 mx-auto bg-[#86efac]">
      <p class="my-4">
    Try updating this message in the
    <code class="mx-2">./routes/index.tsx</code> file, and refresh.
  </p>
      <p class="my-4">
          Try updating this message in the
          <code class="mx-2">./routes/index.tsx</code> file, and refresh.
        </p>
      
      <p class="my-4">
    Try updating this message in the
    <code class="mx-2">./routes/index.tsx</code> file, and refresh.
  </p>
      <p class="my-4">
          Try updating this message in the
          <code class="mx-2">./routes/index.tsx</code> file, and refresh.
        </p>
      
      <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
        <img
          class="my-6"
          src="/logo.svg"
          width="128"
          height="128"
          alt="the Fresh logo: a sliced lemon dripping with juice"
        />
        <h1 class="text-4xl font-bold">Welcome to Fresh</h1>
        <p class="my-4">
          Try updating this message in the
          <code class="mx-2">./routes/index.tsx</code> file, and refresh.
        </p>
        <br />
        <Counter2 count={count2} />
      </div>
    </div>
  );
}
