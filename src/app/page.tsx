import Image from "next/image";

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
        <div className="flex justify-evenly lg:justify-between mt-5 h-80  flex-wrap sm:flex-nowrap">
          <Image
            src="/groundedMeat.webp"
            alt="Досторкон гуляш"
            width={400}
            height={400}
            className="object-cover max-w-48  max-h-48 lg:max-w-sm lg:max-h-96"
          />
          <Image
            src="/gulashFour.jpg"
            alt="Досторкон гуляш"
            width={400}
            height={400}
            className="object-cover max-w-48 max-h-48 lg:max-w-sm lg:max-h-96"
          />
          <Image
            src="/largeMeat.webp"
            alt="Досторкон гуляш"
            width={400}
            height={400}
            className="object-cover max-w-48 max-h-48 lg:max-w-sm lg:max-h-96"
          />
        </div>
      </div>
    </main>
  );
}
