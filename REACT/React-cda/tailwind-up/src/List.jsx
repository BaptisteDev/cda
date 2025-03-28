import "./App.css";

function List() {
  return (
    <>
      <div className="mx-auto max-w-96 bg-white p-8 text-sm text-slate-700 shadow-xl">
        <ul className="list-disc">
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos</li>
          <li>
            laboriosam, odit hic provident animi nam assumenda consequatur
          </li>
        </ul>
        <ul className="list-decimal">
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos</li>
          <li>
            laboriosam, odit hic provident animi nam assumenda consequatur
          </li>
        </ul>
        <ul className="list-none">
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos</li>
          <li>
            laboriosam, odit hic provident animi nam assumenda consequatur
          </li>
        </ul>
      </div>
      <div className="mx-auto max-w-96 bg-white p-8 text-sm text-slate-700 shadow-xl">
        <ul className="list-disc">
          <li className="list-inside border">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
          </li>
          <li className="list-outside border">
            laboriosam, odit hic provident animi nam assumenda consequatur
          </li>
        </ul>
      </div>
      <div className="mx-auto max-w-96 bg-white p-8 text-sm text-slate-700 shadow-xl">
        <ul className="list-image-[url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxNCAxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjMzhiZGY4Ij48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMy42ODUuMTUzYS43NTIuNzUyIDAgMCAxIC4xNDMgMS4wNTJsLTggMTAuNWEuNzUuNzUgMCAwIDEtMS4xMjcuMDc1bC00LjUtNC41YS43NS43NSAwIDAgMSAxLjA2LTEuMDZsMy44OTQgMy44OTMgNy40OC05LjgxN2EuNzUuNzUgMCAwIDEgMS4wNS0uMTQzWiIgLz48L3N2Zz4=)]">
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos</li>
          <li>
            laboriosam, odit hic provident animi nam assumenda consequatur
          </li>
          <li>
            repudiandae expedita placeat dolorum iste cumque ipsum dolorem
            magnam incidunt consectetur ea porro?
          </li>
        </ul>
      </div>
    </>
  );
}

export default List;
