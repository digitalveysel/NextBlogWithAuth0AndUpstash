import Head from "next/head";

function HomePage() {
  return (
    <>
      <Head>
        <title>Hakkımda</title>
      </Head>
      <div className="site-container">
        <div className="space-y-4">
          <h1 className="text-2xl font-bold">
            Ben Adem İlter, İstanbul'da yaşayan Dijital Ürün Tasarımcısıyım
          </h1>
          <p>
            Tasarım araçları, front-end teknolojileri, sokak fotoğrafçılığı ve
            tipografi gibi konularla yakından ilgileniyorum.
          </p>
          <p>
            YouTube kanalımda sektördeki eski teknoloji ve alışkanlıkları
            yenilerle değiştirmek için modern Türkçe içerikler üretiyorum.
          </p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto mt-10">
        <img src="/we.webp" alt="We" width="100%" height="100%" />
      </div>
    </>
  );
}

export default HomePage;
