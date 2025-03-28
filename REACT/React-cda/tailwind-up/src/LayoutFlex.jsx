import "./App.css";

function LayoutFlex() {
  return (
    <>
      <div class="flex min-h-screen flex-col bg-slate-100">
        <header class="flex basis-14 bg-red-500 p-2">
          <div class="basis-52 bg-gray-500"></div>
          <ul class="flex flex-auto justify-end gap-x-2 bg-teal-500">
            <li class="basis-36 bg-orange-500"></li>
            <li class="basis-36 bg-orange-500"></li>
            <li class="basis-36 bg-orange-500"></li>
          </ul>
        </header>
        <main class="flex flex-auto bg-blue-500">
          <aside class="flex basis-48 flex-col gap-y-2 bg-green-800 p-2">
            <div class="basis-12 bg-sky-500"></div>
            <div class="basis-12 bg-sky-500"></div>
            <div class="basis-12 bg-sky-500"></div>
          </aside>
          <section class="flex flex-auto flex-wrap content-start items-start gap-2 bg-amber-800 p-2">
            <div class="h-48 basis-48 bg-slate-400"></div>
            <div class="h-48 basis-48 bg-slate-400"></div>
            <div class="h-48 basis-48 bg-slate-400"></div>
            <div class="h-48 basis-48 bg-slate-400"></div>
            <div class="h-48 basis-48 bg-slate-400"></div>
            <div class="h-48 basis-48 bg-slate-400"></div>
            <div class="h-48 basis-48 bg-slate-400"></div>
            <div class="h-48 basis-48 bg-slate-400"></div>
            <div class="h-48 basis-48 bg-slate-400"></div>
            <div class="h-48 basis-48 bg-slate-400"></div>
            <div class="h-48 basis-48 bg-slate-400"></div>
            <div class="h-48 basis-48 bg-slate-400"></div>
            <div class="h-48 basis-48 bg-slate-400"></div>
            <div class="h-48 basis-48 bg-slate-400"></div>
            <div class="h-48 basis-48 bg-slate-400"></div>
          </section>
          <aside class="basis-48 bg-green-800"></aside>
        </main>
        <footer class="basis-14 bg-lime-500"></footer>
      </div>
    </>
  );
}

export default LayoutFlex;
