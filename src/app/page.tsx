"use client";
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <main className="mt-8">
      <div className="container">
        <section className=" ms-auto me-auto text-center">
          <h2 className="lg:text-6xl text-4xl font-bold">Кенен дасторкон</h2>
          <p className="mt-3 max-w-4xl ms-auto me-auto text-xs md:text-lg">
            Кенен Дасторкон — ваш надежный поставщик качественного нарезного
            мяса и свежего фарша, произведенного на земле Кыргызстана. Мы
            гордимся тем, что предлагаем нашим клиентам исключительно
            отечественный продукт, отражающий богатство нашей родной земли. В
            нашем ассортименте — отборное нарезное мясо и свежий фарш, идеально
            подходящие для домашних блюд. Каждый кусочек мяса проходит строгий
            контроль качества, чтобы гарантировать свежесть и натуральность.
            Выбирая Кенен Дасторкон, вы выбираете настоящее кыргызское качество.
          </p>
        </section>
        <div className="flex justify-evenly lg:justify-evenly mt-5 h-80  flex-wrap sm:flex-nowrap gap-5 md:gap-2 mb-72 sm:mb-0">
          <Link href={"./farsh"}>
            <Image
              src="/groundedMeat.webp"
              alt="фарш"
              width={400}
              height={400}
              className="object-cover max-w-48  max-h-48 lg:max-w-80  lg:max-h-96 transform transition-transform duration-300 hover:scale-110"
            />
          </Link>
          <Link href={"./gulash"}>
            <Image
              src="/gulashFour.jpg"
              alt="гуляш"
              width={400}
              height={400}
              className="object-cover max-w-48 max-h-48 lg:max-w-80 lg:max-h-96 transform transition-transform duration-300 hover:scale-110"
            />
          </Link>
          <Link href={""}>
            <Image
              src="/largeMeat.webp"
              alt="фарш крупный"
              width={400}
              height={400}
              className="object-cover max-w-48 max-h-48 lg:max-w-80  lg:max-h-96 transform transition-transform duration-300 hover:scale-110"
            />
          </Link>
        </div>
      </div>
    </main>
  );
}
