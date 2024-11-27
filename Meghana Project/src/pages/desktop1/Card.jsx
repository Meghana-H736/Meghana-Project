import { CardHeader } from "./CardHeader";
import { CardMetrics } from "./CardMetrics";
import { CardFooter } from "./CardFooter";

export function Card() {
  return (
    <article className="flex overflow-hidden flex-col px-6 pt-6 pb-10 bg-white rounded-xl min-w-[240px] w-[304px] max-md:px-5">
      <CardHeader />

      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/5fb41f1fa72d48b7b9e2119c7838ad2c/2a99590781e76dbda2fcfa19641498c621136a6450cba19fae413a2a942c590d?apiKey=5fb41f1fa72d48b7b9e2119c7838ad2c&"
        alt=""
        className="object-contain self-center mt-16 aspect-square w-[60px] max-md:mt-10"
      />

      <CardMetrics />
      <CardFooter />
    </article>
  );
}
