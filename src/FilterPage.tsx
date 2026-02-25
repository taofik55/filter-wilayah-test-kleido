import { useLoaderData } from "react-router-dom";

// fungsi loader ada di dalam file FiterPage.tsx karena untuk kebutuhan test yang harus menyertakan satu file .tsx dalam soal
// eslint-disable-next-line react-refresh/only-export-components
export async function loader() {
  const response = await fetch("/data/indonesia_regions.json");
  return response.json();
}

// component breadcumb ada di dalam file FiterPage.tsx karena untuk kebutuhan test yang harus menyertakan satu file .tsx dalam soal
function Breadcrumb() {
    return (
        <div className="breadcrumb text-sm text-[#0d1629]">Blabla</div>
    )
}

function ComboBox() {
    return (
        <div className="combo-box">
            <select>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>
        </div>
    )
}

// container region filter ada di dalam file FiterPage.tsx karena untuk kebutuhan test yang harus menyertakan satu file .tsx dalam soal
function RegionFilter() {
    return (
        <div className="region-filter">
            <h2>Wilayah</h2>
        </div>
    )
}

// search params logic
// derived filtering
// reset handler

// render UI
export default function FilterPage() {
  const data = useLoaderData();

  return (
    <main>
      <div className="grid grid-cols-4">
        <div className="col-span-1">
            <div className="border border-[#0d1629]">asd</div>
        </div>
        <div className="col-span-3">
            <div className="border border-[#000ddd]">memek</div>
        </div>
      </div>
    </main>
  );
}
