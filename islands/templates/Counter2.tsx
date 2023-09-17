import type { Signal } from "@preact/signals";
import { Button2 } from "@@@templatesChangeLESS/Button2.tsx";

interface CounterProps {
  count: Signal<number>;
}

export default function Counter2(props: CounterProps) {
  return (
    <div class="flex gap-8 py-6">
      <Button2 onClick={() => props.count.value -= 1}>-1</Button2>
      <p class="text-3xl">{props.count}</p>
      <Button2 onClick={() => props.count.value += 1}>+1</Button2>
    </div>
  );
}
