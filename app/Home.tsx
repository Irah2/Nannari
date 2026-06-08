export default function Home() {
  return (
    <div className="min-h-screen bg-[#f1e0a5] text-[#1d1b10]">
      <main className="mx-auto max-w-6xl px-6 py-8 sm:px-8 lg:px-10">
        <section className="relative overflow-hidden rounded-[42px] bg-[#e7cf6d] px-6 py-10 shadow-[0_30px_90px_rgba(79,63,18,0.18)] sm:px-10 sm:py-14">
          <div className="pointer-events-none absolute -left-16 top-8 h-40 w-40 rounded-full bg-[#f9dd85] opacity-80 blur-2xl" />
          <div className="pointer-events-none absolute right-[-28px] top-16 h-52 w-52 rounded-full bg-[#f5d18f] opacity-70 blur-2xl" />
          <div className="pointer-events-none absolute right-20 bottom-8 h-28 w-28 rounded-full bg-white/70 blur-xl" />

          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/90 px-5 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-[#8a5f1e] shadow-sm ring-1 ring-[#fff5d4]">
                Ammu&apos;s special syrup
              </div>
              <div className="max-w-2xl rounded-[32px] border border-white/80 bg-white/90 p-8 shadow-[0_18px_40px_rgba(88,67,10,0.12)]">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#947025]">Ammu&apos;s</p>
                <h1 className="mt-3 text-4xl font-bold tracking-tight text-[#2b2410] sm:text-5xl">
                  NANNARI Syrup
                </h1>
                <p className="mt-4 max-w-xl text-base leading-8 text-[#4c4217] sm:text-lg">
                  A traditional South Indian herbal concentrate with cool, refreshing flavor. Mix with water or lemon for a soothing drink that cools the body and calms the senses.
                </p>
              </div>
            </div>

            <div className="relative mx-auto flex h-[380px] w-full max-w-[360px] items-end justify-center">
              <div className="absolute left-4 top-12 h-48 w-24 rounded-[34px] bg-[#d46922] shadow-[0_25px_50px_rgba(141,76,22,0.25)]" />
              <div className="absolute left-7 top-6 h-12 w-12 rounded-full bg-[#f3c68a] shadow-inner shadow-[#d48d3a]/50" />
              <div className="absolute right-10 top-16 h-56 w-28 rounded-[32px] bg-[#c44b18] shadow-[0_25px_50px_rgba(150,60,18,0.25)]" />
              <div className="absolute right-14 top-8 h-10 w-10 rounded-full bg-[#fcf1d0] shadow-inner shadow-[#d5aa5b]/40" />
              <div className="absolute bottom-0 h-52 w-52 rounded-[38px] bg-white/90 shadow-[0_20px_40px_rgba(85,70,26,0.16)]">
                <div className="relative mx-auto mt-6 h-24 w-24 rounded-full bg-[#dba24e]" />
                <div className="absolute left-6 top-24 h-20 w-12 rounded-br-[32px] rounded-tr-[32px] bg-[#f8e7b0]" />
                <div className="absolute left-14 top-14 h-8 w-8 rounded-full bg-white/90" />
                <div className="absolute left-6 bottom-6 h-20 w-20 rounded-[28px] bg-[#d8a763]" />
                <div className="absolute right-6 bottom-8 h-24 w-16 rounded-[18px] bg-[#f6d87f]" />
              </div>
              <div className="absolute bottom-16 left-1/2 h-16 w-16 -translate-x-1/2 rounded-full bg-[#fff8d8] shadow-[0_18px_40px_rgba(197,141,36,0.18)]" />
            </div>
          </div>
        </section>

        <section className="mt-10 grid gap-8 rounded-[32px] border border-white/80 bg-white/85 p-8 shadow-[0_18px_50px_rgba(84,64,17,0.12)] sm:p-10">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-[#2e2712]">What is NANNARI?</h2>
            <p className="max-w-3xl text-base leading-8 text-[#554d27] sm:text-lg">
              Nannari is a refreshing South Indian herbal drink made from the roots of Hemidesmus indicus, popular in Kerala and Tamil Nadu. It is prepared as a sweet syrup mixed with water or lemon, known for its cooling effect and natural ability to reduce body heat and refresh the body.
            </p>
          </div>
        </section>

        <section className="mt-12">
          <div className="mb-8 text-center">
            <h3 className="text-3xl font-semibold tracking-tight text-[#2b250e]">Benefits Of Nannari</h3>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            <article className="rounded-[32px] bg-[#e7d47f] p-6 text-center shadow-[0_18px_40px_rgba(94,70,19,0.14)]">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-3xl bg-[#fff6da] text-2xl shadow-inner shadow-[#d1b464]/40">☀️</div>
              <h4 className="text-xl font-semibold text-[#3f3617]">Refreshing</h4>
            </article>
            <article className="rounded-[32px] bg-[#e7d47f] p-6 text-center shadow-[0_18px_40px_rgba(94,70,19,0.14)]">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-3xl bg-[#fff6da] text-2xl shadow-inner shadow-[#d1b464]/40">🍋</div>
              <h4 className="text-xl font-semibold text-[#3f3617]">Aids Digestion</h4>
            </article>
            <article className="rounded-[32px] bg-[#e7d47f] p-6 text-center shadow-[0_18px_40px_rgba(94,70,19,0.14)]">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-3xl bg-[#fff6da] text-2xl shadow-inner shadow-[#d1b464]/40">🔥</div>
              <h4 className="text-xl font-semibold text-[#3f3617]">Regulates Body Heat</h4>
            </article>
          </div>
        </section>

        <section className="mt-14">
          <div className="mb-8 text-center">
            <h3 className="text-3xl font-semibold tracking-tight text-[#2b250e]">How to make?</h3>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <article className="relative overflow-hidden rounded-[32px] bg-[#eadc96] p-6 shadow-[0_18px_40px_rgba(104,79,25,0.14)]">
              <span className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-[#b18b3a] bg-white text-sm font-semibold text-[#5c4b23]">
                1
              </span>
              <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-3xl bg-[#fff9e3] text-3xl">🥤</div>
              <p className="text-base font-semibold text-[#3d3316]">Pour the syrup in a glass</p>
            </article>
            <article className="relative overflow-hidden rounded-[32px] bg-[#eadc96] p-6 shadow-[0_18px_40px_rgba(104,79,25,0.14)]">
              <span className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-[#b18b3a] bg-white text-sm font-semibold text-[#5c4b23]">
                2
              </span>
              <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-3xl bg-[#fff9e3] text-3xl">💧</div>
              <p className="text-base font-semibold text-[#3d3316]">Add water or soda and mix it well</p>
            </article>
            <article className="relative overflow-hidden rounded-[32px] bg-[#eadc96] p-6 shadow-[0_18px_40px_rgba(104,79,25,0.14)]">
              <span className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-[#b18b3a] bg-white text-sm font-semibold text-[#5c4b23]">
                3
              </span>
              <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-3xl bg-[#fff9e3] text-3xl">🍋</div>
              <p className="text-base font-semibold text-[#3d3316]">Add lemon and ice</p>
            </article>
            <article className="relative overflow-hidden rounded-[32px] bg-[#eadc96] p-6 shadow-[0_18px_40px_rgba(104,79,25,0.14)]">
              <span className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-[#b18b3a] bg-white text-sm font-semibold text-[#5c4b23]">
                ✓
              </span>
              <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-3xl bg-[#fff9e3] text-3xl">✨</div>
              <p className="text-base font-semibold text-[#3d3316]">Enjoy!</p>
            </article>
          </div>
        </section>

        <footer className="mt-14 rounded-[34px] bg-[#e6cf76] px-8 py-10 text-center shadow-[0_22px_60px_rgba(96,73,23,0.18)]">
          <h4 className="text-3xl font-semibold tracking-tight text-[#2b250e]">Contacts</h4>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 text-[#3f3617] sm:flex-row sm:gap-6">
            <div className="inline-flex items-center gap-3 rounded-full bg-white/90 px-5 py-3 shadow-sm">
              <span className="text-lg">📞</span>
              <span>91XXXXXXXXXX, 91XXXXXXXXXX</span>
            </div>
            <div className="inline-flex items-center gap-3 rounded-full bg-white/90 px-5 py-3 shadow-sm">
              <span className="text-lg">✉️</span>
              <span>example@gmail.com</span>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
