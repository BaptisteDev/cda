import "./App.css";

function Typo() {
  return (
    <div className="m-auto h-screen w-1/2">
      <p class="m-5 text-3xl">
        <a class="underline decoration-sky-500">Lorem ipsum dolor</a> sit amet
        consectetur adipisicing elit.
        <a class="line-through decoration-indigo-500">
          Culpa vero aperiam quo excepturi
        </a>
      </p>
      <p class="m-5 text-3xl">
        <a class="underline decoration-sky-500/80">Lorem ipsum dolor</a> sit
        amet consectetur adipisicing elit.
        <a class="line-through decoration-indigo-500/30">
          Culpa vero aperiam quo excepturi
        </a>
      </p>
      <p class="m-5 text-3xl underline decoration-red-700 decoration-wavy">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur sit
        distinctio ullam officiis. Impedit nam voluptates molestiae quam eius
      </p>
      <p class="m-5 text-3xl underline decoration-red-700 decoration-dotted">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur sit
        distinctio ullam officiis. Impedit nam voluptates molestiae quam eius
      </p>
      <p class="m-5 text-3xl underline decoration-red-700 decoration-double">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur sit
        distinctio ullam officiis. Impedit nam voluptates molestiae quam eius
      </p>
      <p class="m-5 text-3xl underline decoration-red-700 decoration-dashed">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur sit
        distinctio ullam officiis. Impedit nam voluptates molestiae quam eius
      </p>
      <p class="m-5 text-3xl underline decoration-red-700 decoration-wavy decoration-1">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur sit
        distinctio ullam officiis. Impedit nam voluptates molestiae quam eius
      </p>
      <p class="m-5 text-3xl underline decoration-red-700 decoration-dotted decoration-2">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur sit
        distinctio ullam officiis. Impedit nam voluptates molestiae quam eius
      </p>
      <p class="m-5 text-3xl underline decoration-red-700 decoration-double decoration-4">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur sit
        distinctio ullam officiis. Impedit nam voluptates molestiae quam eius
      </p>
      <p class="m-5 text-3xl underline decoration-red-700 decoration-dashed decoration-8">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur sit
        distinctio ullam officiis. Impedit nam voluptates molestiae quam eius
      </p>
      <p class="m-5 text-3xl underline decoration-red-700 decoration-wavy underline-offset-4">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur sit
        distinctio ullam officiis. Impedit nam voluptates molestiae quam eius
      </p>
      <div class="mx-auto max-w-96 bg-white p-8 text-sm text-slate-700 shadow-xl">
        <p class="truncate">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet
          labore, repellat rerum esse ipsa reiciendis fuga veniam consectetur
          tempore accusamus molestias quae amet distinctio repudiandae quas
          cupiditate a corporis tempora.
        </p>
      </div>
      <div class="mx-auto mt-4 max-w-96 bg-white p-8 text-sm text-slate-700 shadow-xl">
        <p class="overflow-hidden text-clip">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet
          labore, repellat rerum esse ipsa reiciendis fuga veniam
          consecteturconsecteturconsecteturconsecteturconsecteturconsectetur
          tempore accusamus molestias quae amet distinctio repudiandae quas
          cupiditate a corporis tempora.
        </p>
      </div>
      <div class="mx-auto mt-4 max-w-96 bg-white p-8 text-sm text-slate-700 shadow-xl">
        <p class="overflow-hidden text-ellipsis">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet
          labore, repellat rerum esse ipsa reiciendis fuga veniam
          consecteturconsecteturconsecteturconsecteturconsecteturconsectetur
          tempore accusamus molestias quae amet distinctio repudiandae quas
          cupiditate a corporis tempora.
        </p>
      </div>
      <div class="mx-auto max-w-96 bg-white p-8 text-sm text-slate-700 shadow-xl">
        <p class="text-wrap">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet
          labore, repellat rerum esse ipsa reiciendis fuga veniam consectetur
          tempore accusamus molestias quae amet distinctio repudiandae quas
          cupiditate a corporis tempora.
        </p>
      </div>
      <div class="mx-auto mt-4 max-w-96 bg-white p-8 text-sm text-slate-700 shadow-xl">
        <p class="overflow-x-auto text-nowrap">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet
          labore, repellat rerum esse ipsa reiciendis fuga veniam consectetur
          tempore accusamus molestias quae amet distinctio repudiandae quas
          cupiditate a corporis tempora.
        </p>
      </div>
      <div class="mx-auto mt-4 max-w-96 bg-white p-8 text-sm text-slate-700 shadow-xl">
        <p class="text-pretty">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet
          labore, repellat rerum esse ipsa reiciendis fuga veniam tempore
          accusamus molestias quae amet distinctio repudiandae quas cupiditate a
          corporis tempora.
        </p>
      </div>
      <div class="mx-auto mt-4 max-w-96 bg-white p-8 text-sm text-slate-700 shadow-xl">
        <p class="text-balance">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet
          labore, repellat rerum esse ipsa reiciendis fuga veniam tempore
          accusamus molestias quae amet distinctio repudiandae quas cupiditate a
          corporis tempora.
        </p>
      </div>
      <p class="m-5 line-clamp-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa vero
        aperiam quo excepturi rerum expedita itaque aspernatur ea natus earum
        facere, quia fugiat eligendi assumenda blanditiis maxime deserunt, qui
        veniam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
        vero aperiam quo excepturi rerum expedita itaque aspernatur ea natus
        earum facere, quia fugiat eligendi assumenda blanditiis maxime deserunt,
        qui veniam!
      </p>
      <div class="mx-auto max-w-96 bg-white p-8 text-sm text-slate-700 shadow-xl">
        <p class="indent-10">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet
          labore, repellat rerum esse ipsa reiciendis fuga veniam consectetur
          tempore accusamus molestias quae amet distinctio repudiandae quas
          cupiditate a corporis tempora.
        </p>
      </div>
      <div class="mx-auto max-w-96 bg-white p-8 text-sm text-slate-700 shadow-xl">
        <pre class="whitespace-pre text-wrap">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet
          labore, repellat rerum esse ipsa reiciendis fuga veniam consectetur
          tempore accusamus molestias quae amet distinctio repudiandae quas
          cupiditate a corporis tempora.
        </pre>
      </div>
      <div class="mx-auto max-w-52 bg-white p-8 text-sm text-slate-700 shadow-xl">
        <p class="break-words">
          Lorem ipsum dolor sit amet, consectetur anticonstitutionnellement
          elit. Eveniet labore, repellat rerum esse ipsa reiciendis fuga veniam
          consectetur tempore accusamus molestias quae amet distinctio
          repudiandae quas cupiditate a corporis tempora.
        </p>
      </div>
    </div>
  );
}

export default Typo;
